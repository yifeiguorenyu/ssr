let vueRouter = require("vue-router");
let Vue = require("vue");
Vue.use(vueRouter);
module.exports = () => {
  return new vueRouter({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: {
          template: `<div>home</div>`
        }
      },
      {
        path: "/about",
        name: "about",
        component: {
          template: `<div>about</div>`
        }
      }
    ]
  });
};
