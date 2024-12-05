# 本地知识库

核心： 搭建本地知识库，将本地所有个人笔记和资料上传，然后通过提问的方式快速获取到准确的信息。

- ollama
- maxKB

## 搭建过程

### ollama

- 下载地址 https://ollama.com/
- iterm 运行`ollama run qwen2.5:7b`

### maxKB

docker 镜像选择 1panel/maxkb

- /Users/careteen/.maxkb /var/lib/postgresql/data

- /opt/maxkb/app/sandbox/python-packages

启动后 打开 http://localhost:8080 访问

- 账户： admin 原密码： MaxKB@123.. 修改后密码： Careteen66

- 1. 新建知识库
- 1. 新建模型
- 1. 新建应用，选择模型，关联知识库
  - 1. 模型选择本地 qwen2.5:7b
  - 1. api 域名 http://host.docker.internal:11434/
  - 1. api key 随便填写
- 1. 演示使用
