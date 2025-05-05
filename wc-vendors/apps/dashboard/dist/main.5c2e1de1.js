import {
  d as h,
  c as d,
  u as _,
  o as p,
  a as v,
  b as k,
  e as E
} from './common/vendor.6b2451aa.js';
const w = 'modulepreload',
  y = function(o, r) {
    return o[0] === '.' ? new URL(o, r).href : o;
  },
  u = {},
  P = function(r, s, i) {
    if (!s || s.length === 0) return r();
    const l = document.getElementsByTagName('link');
    return Promise.all(
      s.map(e => {
        if (((e = y(e, i)), e in u)) return;
        u[e] = !0;
        const t = e.endsWith('.css'),
          m = t ? '[rel="stylesheet"]' : '';
        if (!!i)
          for (let a = l.length - 1; a >= 0; a--) {
            const c = l[a];
            if (c.href === e && (!t || c.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${e}"]${m}`)) return;
        const n = document.createElement('link');
        if (
          ((n.rel = t ? 'stylesheet' : w),
          t || ((n.as = 'script'), (n.crossOrigin = '')),
          (n.href = e),
          document.head.appendChild(n),
          t)
        )
          return new Promise((a, c) => {
            n.addEventListener('load', a),
              n.addEventListener('error', () =>
                c(new Error(`Unable to preload CSS for ${e}`))
              );
          });
      })
    )
      .then(() => r())
      .catch(e => {
        const t = new Event('vite:preloadError', { cancelable: !0 });
        if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
          throw e;
      });
  },
  R = h({
    __name: 'App',
    setup(o) {
      const r = v(() =>
        P(
          () => import('./common/Dashboard.dad82f26.js').then(s => s.av),
          [
            window.wcv_dashboard_data.pluginDirUrl +
              '/dist/common/Dashboard.dad82f26.js',
            window.wcv_dashboard_data.pluginDirUrl +
              '/dist/common/vendor.6b2451aa.js',
            window.wcv_dashboard_data.pluginDirUrl +
              '/dist/common/antd.138ea4fd.js',
            window.wcv_dashboard_data.pluginDirUrl +
              '/dist/assets/Dashboard-66296c7d.css'
          ],
          import.meta.url
        )
      );
      return (s, i) => (p(), d(_(r)));
    }
  }),
  f = k(R);
f.use(E());
f.mount('#wcv-marketplace-backend-dashboard-root');
export { P as _ };
