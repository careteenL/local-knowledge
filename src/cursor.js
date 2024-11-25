require("dotenv").config();

var axios = require("axios");

var API_KEY = process.env.API_KEY || "";
console.log("API_KEY: ", API_KEY);

if (!API_KEY) {
  console.log("请配置 API_KEY");
}

var data = JSON.stringify({
  model: "claude-3-5-sonnet-20241022",
  messages: [
    {
      role: "user",
      content:
        "生成一个个人网站，用 react 和 ts 实现，以 json 的形式给出文件目录，依次给出每个文件的内容",
    },
  ],
});

var config = {
  method: "post",
  url: "https://api.302.ai/v1/chat/completions",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
