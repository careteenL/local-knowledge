require("dotenv").config();

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: "https://api.302.ai/v1/chat/completions",
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "claude-3-5-sonnet-20241022",
    messages: [
      // { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "使用 react 和 ts 生成一个 tabel 组件" },
    ],
    stream: true,
  });

  for await (const chunk of completion) {
    console.log(chunk.choices[0].delta.content);
  }
}

main();
