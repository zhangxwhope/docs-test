import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  base: '/docs-test',
  publicPath: '/docs-test/',
  resolve: {
    includes: ['./docs'],
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English']
  ],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/zhangxwhope/docs-test',
    },
  ],
  exportStatic: {},
  // more config: https://d.umijs.org/config
});
