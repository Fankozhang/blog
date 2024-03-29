/*
 * @Author: 东方凝洛 3180806542@qq.com
 * @Date: 2022-12-02 21:19:19
 * @LastEditors: Andy
 * @LastEditTime: 2024-03-05 13:58:22
 * @FilePath: \blog\src\.vuepress\navbar\en.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
      
      { text: "vuePress,nginx,docker", icon: "", link: "nginx-docker" },
      { text: "uni-app", icon: "", link: "uni-app" },
      "react",
      "UI-data",
      "bigScreen",
      "desk",{
        text: "flutter",
        link: "flutter"
      },{
        text: "RN",
        link: "RN"
      }
    ],
  },
  {
    text: "后端",
    icon: "note",
    prefix: "/posts/banana/",
    children:[
          {
            text: "java相关技术",
            icon: "",
            prefix: "java/",
            children:[
              {
                text: "java基础",
                icon: "",
                prefix: "java/",
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
          },{
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
        ],
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
  {
    text: "github",
    icon: "note",
    link: "https://github.com/Fankozhang",
  },
  {
    text: "gitee",
    icon: "note",
    link: "https://gitee.com/fankozhang",
  },
]);
