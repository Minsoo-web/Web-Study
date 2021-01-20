module.exports = {
  title: "minsoo-web.log",
  description: "Just playing around",
  themeConfig: {
    logo:
      "https://avatars1.githubusercontent.com/u/57122180?s=460&u=b32867107508426379c28b1d0c2fd8963912a5dd&v=4",
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/Minsoo-web" }
    ],
    sidebar: "auto",
    smoothScroll: true // 부드러운 스크롤 사용 여부
  },
  base: "/my-blog/",

  configureWebpack: {
    resolve: {
      alias: {
        "@": "/docs/images"
      }
    }
  }
};
