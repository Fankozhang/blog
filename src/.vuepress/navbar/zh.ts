import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "前端",
        icon: "edit",
        prefix: "apple/",
        children: [
          { text: "html", icon: "edit", link: "1" },
          { text: "css", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "后端",
        icon: "edit",
        prefix: "banana/",
        children: [
          {
            text: "java",
            icon: "edit",
            link: "1",
          },
          {
            text: "node",
            icon: "edit",
            link: "2",
          },

        ],
      },
      { text: "樱桃", icon: "edit", link: "cherry" },
      { text: "火龙果", icon: "edit", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
