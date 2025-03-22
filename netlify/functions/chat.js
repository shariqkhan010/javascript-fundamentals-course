async function fetchWithRetry(url, options) {
  let retries = 0;
  const maxRetries = 3;
  while (retries < maxRetries) {
    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      if (retries === maxRetries - 1) {
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, 2000 * Math.pow(2, retries)));
      retries++;
    }
  }
}

exports.handler = async (event) => {
  const fetch = (await import('node-fetch')).default;
  
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

    if (!response.ok) {
      const errorData = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          error: errorData.error?.message || "API request failed",
          details: errorData 
        })
      };
    }

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