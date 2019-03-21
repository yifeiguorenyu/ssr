const express = require("express");
const app = express();
const Vue = require("vue");
const path = require("path");
const vueServerRender = require("vue-server-renderer").createRenderer({
  template: require("fs").readFileSync(
    path.join(__dirname, "./index.html"),
    "utf-8"
  )
});

app.get("*", async (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  const VueApp = await require("./entry.server")(req);
  vueServerRender.renderToString(VueApp, (err, date) => {
    res.end(date);
  });
});
app.listen(4000, () => {
  console.log("启动成功");
});
