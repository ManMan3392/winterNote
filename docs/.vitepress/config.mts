import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/winterNote/",
  title: "WinterNote",
  description: "a note about winter",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "雯婷使用说明",
        items: [
          { text: "日常篇", link: "/details-to-use/daily-actions" },
          { text: "急眼篇", link: "/details-to-use/angry-winter" },
          { text: "傻笑篇", link: "/details-to-use/laughter" },
        ],
      },
      {
        text: "雯婷使用api",
        items: [
          { text: "引导型api", link: "/api/hint-api" },
          { text: "命令式api", link: "/api/order-api" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
