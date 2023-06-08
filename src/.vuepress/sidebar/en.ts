/*
 * @name: 东方凝洛
 * @Date: 2022-12-02 21:19:19
 * @msg: 
 * @param: 
 * @return: 
 */
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
      prefix: "/posts/banana/",
      children:[
        // {
        //   text: "后端语言",
        //   icon: "",
        //   prefix: "banana/",
        //   children: [
          {
            text: "java",
            icon: "",
            prefix: "java/",
            children:[
              {
                text: "java",
                icon: "",
                link:"basic"
              },{
                text: "springBoot",
                icon: "",
                link:"spring-boot"
              }
            ]
          },
            {
              text: "node",
              icon: "",
              link: "2",
            },{
              text: "实战项目",
              icon: "",
              link: "spring",
            },
            // "3",
            // "4",
        //   ],
        // }
      ]
    },
    {
      text: "收藏",
      icon: "",
      prefix: "/site/",
      children:[
        {
          text: "网址收藏",
          icon: "",
          link: "site1",
        },
        {
          text: "工作中问题及解决",
          icon: "",
          link: "method",
        },{
          text: "python",
          icon: "",
          link: "python",
        }
      ]
    },
    "intro",
    "slides",
  ],
});
