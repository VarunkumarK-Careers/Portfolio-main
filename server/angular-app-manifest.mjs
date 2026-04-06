
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio-main/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio-main"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-main/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-main/experience"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio-main",
    "route": "/Portfolio-main/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1533, hash: '3f8ec2cf006f518635cdd02d5df2f2d3d620e9832165fd629aef04a244fecff3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1744, hash: 'c2e84d6b4e2ef8ce70182351f7a82df2c639161c96edca8c24601b65fb3fa40f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40730, hash: 'cefce73e7c2d28a0db0dc5d437d43bc24ea415454d7cdc7098b867eacea5bc02', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 40730, hash: 'cefce73e7c2d28a0db0dc5d437d43bc24ea415454d7cdc7098b867eacea5bc02', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 40730, hash: 'cefce73e7c2d28a0db0dc5d437d43bc24ea415454d7cdc7098b867eacea5bc02', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-2BY7KJ5V.css': {size: 260, hash: 'wkdn8hYWlTo', text: () => import('./assets-chunks/styles-2BY7KJ5V_css.mjs').then(m => m.default)}
  },
};
