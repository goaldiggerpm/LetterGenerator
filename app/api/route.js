import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const { description, tone, style } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
  });

  const prompt = `Hello, AI! I want a letter according to my requirements tone should be ${tone} and style should be like ${style} and my description is ${description}. Can you please write a letter that highlights the relevancy according to my requirements. Thanks!`;
  try {
    const response = await openai.completions.create({
      prompt,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "text-davinci-003",
    });

    console.log("response is:", response);
    return NextResponse.json(
      { data: response.choices[0].text },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error("here", error.status); // e.g. 401
      console.error("here", error.message); // e.g. The authentication token you passed was invalid...
      console.error("here", error.code); // e.g. 'invalid_api_key'
      console.error("here", error.type); // e.g. 'invalid_request_error'
    } else {
      // Non-API error
      console.log("here", error);
    }
  }
  // res.status(200).send(response.data.choices[0].text);
}
