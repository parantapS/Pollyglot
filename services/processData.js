import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();


export async function processData(instruction, language) {
    console.log("Processing data with instruction:", instruction, "and language:", language);
    const messages = [
        {
            role : "system",
            content : `You are an expert translator of ${JSON.stringify(language)} language. Just send the translation of the instruction provided by the user.`
        },
        {
            role : "user",
            content : `Analyze the following instruction and provide a translation for the instruction:\n ${JSON.stringify(instruction)}. Please make sure the translation is accurate and in ${JSON.stringify(language)} and only provide the translated text without any additional commentary or explanation. Also, the response needs to be written in English letters.`
        }
    ]
    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
        console.log("Sending data to OpenAI for processing...");

        // Sending data to OpenAI for processing
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages
        })
        return response.choices[0].message.content;

    } catch (error) {
        console.log("Error processing data with OpenAI:", error);
        return "Error processing data.";
    }
}