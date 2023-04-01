import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "前端",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "前端知识记录",
        icon: "",
        prefix: "apple/",
        children: [
          "1",
          "2",
          "3",
          "4",
        ],
      },
      
      { text: "vuePress", icon: "", link: "cherry" },
      { text: "uni-app", icon: "", link: "dragonfruit" },
      "tomato",
      "strawberry",
      "bigScreen",
      "desk"
    ],
  },
  {
    text: "后端",
    icon: "note",
    prefix: "/posts/",
    children:[
      {
        text: "后端语言",
        icon: "",
        prefix: "banana/",
        children: [
          {
            text: "java",
            icon: "",
            link: "1",
          },
          {
            text: "node",
            icon: "",
            link: "2",
          },
          // "3",
          // "4",
        ],
      }
    ]
  },
  {
    text: "收藏",
    icon: "",
    prefix: "/site/",
    children:[
      {
        text: "网址收藏",
        icon: "edit",
        link: "site1",
      },
      {
        text: "工作中问题及解决",
        icon: "edit",
        link: "method",
      }
    ]
  },
  {
    text: "github",
    icon: "note",
    link: "https://github.com/Fankozhang",
  },
]);
