import OpenAI from "openai";

const openai = new OpenAI({});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "o1-preview-2024-09-12",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello!" },
    ],
    stream: true,
  });

  for await (const chunk of completion) {
    console.log(chunk.choices[0].delta.content);
  }
}

main();
