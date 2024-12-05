import openAI from "openai";

const client = new openAI({
  apiKey: "application-f4070136f2736a7c34372ccbf8d18057",
  baseURL:
    "http://localhost:8080/api/application/7863f5dc-b2f8-11ef-814e-0242ac110002",
});

async function main() {
  const res = await client.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "user",
        content: "王克廷在几家公司任职过",
      },
    ],
    stream: true,
  });
  for await (const chunk of res) {
    console.log(chunk.choices[0].delta.content);
  }
  console.log(res);
}

main();
