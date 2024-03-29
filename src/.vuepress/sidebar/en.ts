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
        
        { text: "vuePress,nginx,docker", icon: "", link: "nginx-docker" },
        { text: "uni-app", icon: "", link: "uni-app" },
        "react",
        "UI-data",
        "bigScreen",
        "desk",
        {
          text: "flutter",
          icon: "",
          link: "flutter"
        },{
          text: "RN",
          icon: "",
          link: "RN"
        }
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
            text: "java相关技术",
            icon: "",
            prefix: "java/",
            children:[
              {
                text: "java基础",
                icon: "",
                link:"basic"
              },{
                text: "springBoot",
                icon: "",
                link:"spring-boot"
              },
              {
                text: "shiro",
                icon: "",
                link:"shiro"
              },{
                text: "security",
                icon: "",
                link:"security"
              },
              {
                text: "spring cloud",
                icon: "",
                link: "springCloud",
              }
            ]
          },
            {
              text: "node",
              icon: "",
              link: "node",
            },{
              text: "实战项目",
              icon: "",
              link: "spring",
            },{
              text: "第三方登录",
              icon: "",
              link: "sanFangDengLu",
            },{
              text: "支付",
              icon: "",
              link: "zhifu",
            }
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
        },{
          text: "部署",
          icon: "",
          link: "bushu"
        },{
          text: "harmony",
          icon: "",
          link: "harmony"
        }
      ]
    },
    "intro",
    "slides",
  ],
});
