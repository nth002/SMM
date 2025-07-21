// src/ollama/OllamaService.js

const OLLAMA_API_URL = "http://localhost:11434/api/generate"; // Local Ollama endpoint

export const generateFromOllama = async (prompt) => {
  try {
    const response = await fetch(OLLAMA_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3", 
        prompt,
        stream: false,
      }),
    });

    const data = await response.json();
    console.log('data.response : ', data.response)
    return data.response;
  } catch (error) {
    console.error("Ollama Error:", error);
    return "Error generating response from Ollama.";
  }
};
