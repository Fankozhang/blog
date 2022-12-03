import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "帆的随笔记录",
    //   description: "A blog demo for vuepress-theme-hope",
    // },
    "/zh/": {
      lang: "zh-CN",
      title: "帆的随笔记录",
      description: "帆的随笔记录展示",
    },
  },

  theme,

  shouldPrefetch: false,
});
