module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    logo:
      "https://avatars1.githubusercontent.com/u/57122180?s=460&u=b32867107508426379c28b1d0c2fd8963912a5dd&v=4",
    nav: [{ text: "Home", link: "/" }],
    sidebar: "auto"
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": "/docs/images"
      }
    }
  }
};
