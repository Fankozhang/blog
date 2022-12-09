import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    
    // {
    //   text: "技术",
    //   icon: "note",
    //   prefix: "posts/",
    //   // children: "structure",
    //   children:[
        
    //   ]
    // },
    {
      text: "前端",
      icon: "edit",
      prefix: "/posts/",
      children: [
        {
          text: "前端知识记录",
          icon: "edit",
          prefix: "apple/",
          children: [
            "1",
            "2",
            "3",
            "4",
          ],
        },
        
        { text: "vuePress", icon: "edit", link: "cherry" },
        { text: "vue2", icon: "edit", link: "dragonfruit" },
        "tomato",
        "strawberry",
      ],
    },
    {
      text: "后端",
      icon: "note",
      prefix: "/posts/",
      children:[
        {
          text: "后端语言",
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
            // "3",
            // "4",
          ],
        }
      ]
    },
    {
      text: "收藏",
      icon: "note",
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
    "intro",
    "slides",
  ],
});
