// Helper function: fetch with timeout using AbortController
async function abortableFetch(url, options, timeout = 10000) { // timeout in ms (10 seconds)
  const fetch = (await import('node-fetch')).default;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  } finally {
    clearTimeout(id);
  }
}

// Updated fetchWithRetry using abortableFetch
async function fetchWithRetry(url, options) {
  let retries = 0;
  const maxRetries = 2; // Reduced maximum retries to keep total execution time lower
  while (retries < maxRetries) {
    try {
      const response = await abortableFetch(url, options, 10000); // 10-second timeout per fetch
      // If response is not ok, get the error details and throw error to trigger retry
      if (!response.ok) {
        const errorData = await response.json();
        console.error(`HTTP error ${response.status}:`, errorData);
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error(`Attempt ${retries + 1} failed: ${error.message}`);
      if (retries === maxRetries - 1) {
        throw error;
      }
      // Exponential backoff delay (starting at 2 seconds)
      await new Promise(resolve => setTimeout(resolve, 2000 * Math.pow(2, retries)));
      retries++;
    }
  }
}

exports.handler = async (event) => {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API key not configured" })
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const messages = body.messages || [];
    
    const response = await fetchWithRetry('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages,
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ content: data.choices[0].message.content })
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: "Internal server error",
        details: error.message 
      })
    };
  }
};
