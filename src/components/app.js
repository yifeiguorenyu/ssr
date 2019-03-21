const Vue = require("vue");
const router = require("../router")();
module.exports = context => {
  const vueApp = new Vue({
    router,
    data: {
      message: "hello vu-ssrrr",
      url: context.url
    },
    template: `
            <div>
              <h1>欢迎学习vue-ssr</h1>
              <p>{{message}}</p>
              <pa>你访问的路径式:{{url}}</pa>
              <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/about">关于</router-link>
                </li>
              </ul>
              <router-view></router-view>
            </div>
          `
  });
  return {
    vueApp,
    router
  };
};
