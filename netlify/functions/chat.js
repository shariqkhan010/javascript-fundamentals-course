exports.handler = async (event) => {
  const fetch = (await import('node-fetch')).default;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);
  
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      clearTimeout(timeoutId);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API key not configured" })
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const messages = body.messages || [];
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
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
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    
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
    
    // Add response validation
    if (!data.choices || data.choices.length === 0 || 
        !data.choices[0].message || !data.choices[0].message.content) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: "Invalid AI response",
          details: "The AI service returned an unexpected response format" 
        })
      };
    }

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
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      console.error('Request aborted due to timeout');
      return {
        statusCode: 504,
        body: JSON.stringify({ 
          error: "Request timed out",
          details: "The request to the AI service timed out" 
        })
      };
    }
    
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      console.error('Network error:', error);
      return {
        statusCode: 503,
        body: JSON.stringify({ 
          error: "Network error",
          details: "Failed to connect to AI service" 
        })
      };
    }
    
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