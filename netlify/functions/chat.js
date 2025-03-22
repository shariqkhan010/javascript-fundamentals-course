exports.handler = async (event) => {
  const fetch = require('node-fetch'); // Use require() instead of dynamic import

  try {
    // Temporary hardcoded key for testing (remove later)
    const apiKey = process.env.OPENROUTER_API_KEY || "sk-your-key-here";

    if (!apiKey) {
      throw new Error("API key missing");
    }

    const body = JSON.parse(event.body);

    // Timeout handling
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Referer': 'https://javascriptelearning.netlify.app', // Correct header
        'X-Title': 'JS Learning Assistant'
      },
      body: JSON.stringify({
        model: "deepseek-ai/deepseek-coder-33b-instruct", // Valid model
        messages: body.messages,
        temperature: 0.7,
        max_tokens: 1000
      }),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers: { // CORS headers for all responses
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ content: data.choices[0].message.content })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { // CORS headers for errors too
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        error: error.message || "Internal server error"
      })
    };
  }
};