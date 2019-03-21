const createApp = require("./src/components/app");
let { vueApp, router } = createApp({ url: "" });

router.onReady(
  () => {
    vueApp.$mount("#app");
  },
  err => {
    console.log(err);
  }
);
