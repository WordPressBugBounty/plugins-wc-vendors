import {
  d as s,
  L as t,
  o as a,
  a as p,
  w as i,
  M as m,
  u as e
} from '../common/vendor.ff933118.js';
import { u as f } from '../main.df9e2abb.js';
import { S as u } from '../common/index.9883767e.js';
import '../common/antd.01cefdb7.js';
import '../common/initDefaultProps.14498c5d.js';
const g = s({
  __name: 'Spinner',
  setup(c) {
    const n = f(),
      { showSpinner: o } = t(n);
    return (r, S) => (
      a(),
      p(
        e(u),
        { spinning: e(o) },
        { default: i(() => [m(r.$slots, 'default')]), _: 3 },
        8,
        ['spinning']
      )
    );
  }
});
export { g as default };
