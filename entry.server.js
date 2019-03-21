const createApp = require("./src/components/app");
module.exports = context => {
  return new Promise((resolve, reject) => {
    let { vueApp, router } = createApp(context);
    console.log(context.url)
    router.push(context.url);
    router.onReady(
      () => {
        let matchedComponents = router.getMatchedComponents();
        console.log(matchedComponents);
        if (!matchedComponents.length) {
          return reject({ cod: 404 });
        }
        resolve(vueApp);
      },
      () => reject(2)
    );
  }).catch(e => {
    console.log(e);
  });
};
