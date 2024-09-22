import axios from "axios";

const API_URL = 'https://api-inference.huggingface.co/models/gpt2';

export const generateResumeContent = async (prompt) => {
    try {
      const response = await axios.post(
        API_URL,
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_API_KEY}`,
          },
        }
      );
      return response.data[0]?.generated_text || "AI failed to generate content.";
    } catch (error) {
      console.error("Error generating resume content:", error);
      return "Error generating resume content.";
    }
  };