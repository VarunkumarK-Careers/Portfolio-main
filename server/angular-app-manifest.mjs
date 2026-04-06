
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
    'index.csr.html': {size: 1533, hash: '7e66169829bff04f4009b071459564b18502d3db20ae30df91010ce2fc301a3d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1744, hash: '7dd236a9daf96cf2d6c25f7e78ae59a5057699259bc13042f44c347c44101972', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 40751, hash: 'b8cd573a04f34a0721ddfa226cdd1c89ea86b27f0a96bd095871ec046c49a806', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 40751, hash: 'b8cd573a04f34a0721ddfa226cdd1c89ea86b27f0a96bd095871ec046c49a806', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 40751, hash: 'b8cd573a04f34a0721ddfa226cdd1c89ea86b27f0a96bd095871ec046c49a806', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-2BY7KJ5V.css': {size: 260, hash: 'wkdn8hYWlTo', text: () => import('./assets-chunks/styles-2BY7KJ5V_css.mjs').then(m => m.default)}
  },
};
