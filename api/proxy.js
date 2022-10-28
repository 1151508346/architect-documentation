const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target;
  if (req.url.startsWith("/imgApi")) {
    // 将包含 的接口转发到 http://img.zhufengpeixun.cn请求
    target = "http://img.zhufengpeixun.cn";
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // http://img.zhufengpeixun.cn/imgApi/syncfunc.png
      // ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
      // http://img.zhufengpeixun.cn/syncfunc.png
      "^/imgApi": "/",
    },
  })(req, res);
};
