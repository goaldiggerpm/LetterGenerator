import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req, res) {
  const { description, tone, style } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
  });

  const data = await req.json();

  // let prompt = ``;
  console.log("desc", data.description);
  const prompt = ` I want a letter according to my requirements tone should be ${data.tone} and style should be like ${data.style} and my description is ${data.description}. Thanks! sometimes tone or style can be undefined if they are please look into description and write the letter`;

  console.log("prompt is:", prompt);

  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
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
