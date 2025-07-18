import { ac as h, _ as l } from '../main.df9e2abb.js';
import { e as x } from './vendor.ff933118.js';
const b = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  p = r => ({
    xs: `(max-width: ${r.screenXSMax}px)`,
    sm: `(min-width: ${r.screenSM}px)`,
    md: `(min-width: ${r.screenMD}px)`,
    lg: `(min-width: ${r.screenLG}px)`,
    xl: `(min-width: ${r.screenXL}px)`,
    xxl: `(min-width: ${r.screenXXL}px)`,
    xxxl: `{min-width: ${r.screenXXXL}px}`
  });
function w() {
  const [, r] = h();
  return x(() => {
    const n = p(r.value),
      i = new Map();
    let a = -1,
      c = {};
    return {
      matchHandlers: {},
      dispatch(e) {
        return (c = e), i.forEach(t => t(c)), i.size >= 1;
      },
      subscribe(e) {
        return i.size || this.register(), (a += 1), i.set(a, e), e(c), a;
      },
      unsubscribe(e) {
        i.delete(e), i.size || this.unregister();
      },
      unregister() {
        Object.keys(n).forEach(e => {
          const t = n[e],
            s = this.matchHandlers[t];
          s == null || s.mql.removeListener(s == null ? void 0 : s.listener);
        }),
          i.clear();
      },
      register() {
        Object.keys(n).forEach(e => {
          const t = n[e],
            s = m => {
              let { matches: o } = m;
              this.dispatch(l(l({}, c), { [e]: o }));
            },
            d = window.matchMedia(t);
          d.addListener(s),
            (this.matchHandlers[t] = { mql: d, listener: s }),
            s(d);
        });
      },
      responsiveMap: n
    };
  });
}
export { b as r, w as u };
