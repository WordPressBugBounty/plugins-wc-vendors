import {
  d as s,
  L as t,
  o as a,
  a as p,
  w as i,
  M as m,
  u as e
} from '../common/vendor.c7ac217d.js'
import { u as f } from '../main.d2f63bca.js'
import { S as u } from '../common/index.99e6b1c5.js'
import '../common/antd.1fca4c02.js'
import '../common/initDefaultProps.e3cf1eda.js'
const g = s({
  __name: 'Spinner',
  setup(c) {
    const n = f(),
      { showSpinner: o } = t(n)
    return (r, S) => (
      a(),
      p(
        e(u),
        { spinning: e(o) },
        { default: i(() => [m(r.$slots, 'default')]), _: 3 },
        8,
        ['spinning']
      )
    )
  }
})
export { g as default }
