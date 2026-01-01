import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

export default ai;
