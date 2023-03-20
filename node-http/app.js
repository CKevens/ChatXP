const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();
app.use(cors());

app.post("/api", createProxyMiddleware({ target: "https://api.aigcfun.com/api/v1/text?key=FC71E6C81BE1CB3501", changeOrigin: true, pathRewrite: { "^/api": "" } }));

app.get("/", (req, res) => {
  return res.send({
    code: 200,
    msg: "服务启动成功",
  });
});
app.listen(3500, () => {
  console.log("服务启动成功~ 端口: http://127.0.0.1:3500");
});
