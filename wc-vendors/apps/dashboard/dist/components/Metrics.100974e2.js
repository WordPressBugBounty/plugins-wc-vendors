import {
  d as D,
  f as n,
  o as _,
  H as p,
  l as a,
  I as s,
  F as h,
  S,
  u as e,
  J as c,
  L as o,
  Q as i
} from '../common/vendor.47b1711b.js';
import {
  n as w,
  p as u,
  v as f,
  q as T
} from '../common/Dashboard.9e45cc90.js';
import { C as m, S as y } from '../common/index.2af2cc8c.js';
import { m as v } from '../common/createLucideIcon.42ab3542.js';
import { T as l } from '../common/index.47c00042.js';
import { F as z } from '../common/index.6e530893.js';
import '../main.1bdb0c68.js';
import '../common/antd.ddaabbc2.js';
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = v('DollarSignIcon', [
  ['line', { x1: '12', x2: '12', y1: '2', y2: '22', key: '7eqyqh' }],
  [
    'path',
    { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', key: '1b0p4s' }
  ]
]);
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B = v('PercentIcon', [
  ['line', { x1: '19', x2: '5', y1: '5', y2: '19', key: '1x9vlm' }],
  ['circle', { cx: '6.5', cy: '6.5', r: '2.5', key: '4mh3h7' }],
  ['circle', { cx: '17.5', cy: '17.5', r: '2.5', key: '1mdrzq' }]
]);
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L = v('ShoppingCartIcon', [
    ['circle', { cx: '8', cy: '21', r: '1', key: 'jimo8o' }],
    ['circle', { cx: '19', cy: '21', r: '1', key: '13723u' }],
    [
      'path',
      {
        d:
          'M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12',
        key: '9zh506'
      }
    ]
  ]),
  M = { class: 'metrics-container' },
  q = { class: 'card-content' },
  F = { class: 'card-content' },
  H = { class: 'icon-wrapper revenue-bg' },
  N = { class: 'card-content' },
  V = { class: 'icon-wrapper orders-bg' },
  j = { class: 'card-content' },
  E = { class: 'icon-wrapper commission-bg' },
  P = D({
    __name: 'Metrics',
    setup(A) {
      const d = w(),
        x = n(() => {
          var t, r;
          return (
            ((r = (t = d.dashboardData) == null ? void 0 : t.data) == null
              ? void 0
              : r.revenue) || 0
          );
        }),
        k = n(() => {
          var t, r;
          return (
            ((r = (t = d.dashboardData) == null ? void 0 : t.data) == null
              ? void 0
              : r.commissions) || 0
          );
        }),
        b = n(() => {
          var t, r;
          return (
            ((r = (t = d.dashboardData) == null ? void 0 : t.data) == null
              ? void 0
              : r.orders) || 0
          );
        }),
        g = n(() => d.isLoading);
      return (t, r) => (
        _(),
        p('div', M, [
          a(
            e(z),
            { wrap: 'wrap', gap: 'middle', justify: 'space-between' },
            {
              default: s(() => [
                g.value
                  ? (_(),
                    p(
                      h,
                      { key: 0 },
                      S(3, C =>
                        a(
                          e(m),
                          { key: C, bordered: !1, class: 'metric-card' },
                          {
                            default: s(() => [
                              c('div', q, [
                                a(e(y).Avatar, {
                                  size: 64,
                                  active: '',
                                  shape: 'circle',
                                  class: 'mb-16'
                                }),
                                a(e(y), {
                                  active: '',
                                  title: '',
                                  paragraph: { rows: 1, width: '80%' }
                                })
                              ])
                            ]),
                            _: 2
                          },
                          1024
                        )
                      ),
                      64
                    ))
                  : (_(),
                    p(
                      h,
                      { key: 1 },
                      [
                        a(
                          e(m),
                          { bordered: !1, class: 'metric-card' },
                          {
                            default: s(() => [
                              c('div', F, [
                                c('div', H, [
                                  a(e(I), { size: '24', color: '#356D1D' })
                                ]),
                                a(
                                  e(l).Text,
                                  { class: 'metric-title' },
                                  {
                                    default: s(() => [
                                      o(i(e(u)().metrics.marketplaceRevenue), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                a(
                                  e(l).Title,
                                  {
                                    level: 2,
                                    class: 'metric-value revenue-color'
                                  },
                                  {
                                    default: s(() => [o(i(e(f)(x.value)), 1)]),
                                    _: 1
                                  }
                                )
                              ])
                            ]),
                            _: 1
                          }
                        ),
                        a(
                          e(m),
                          { bordered: !1, class: 'metric-card' },
                          {
                            default: s(() => [
                              c('div', N, [
                                c('div', V, [
                                  a(e(L), { size: '24', color: '#2158DB' })
                                ]),
                                a(
                                  e(l).Text,
                                  { class: 'metric-title' },
                                  {
                                    default: s(() => [
                                      o(i(e(u)().metrics.marketplaceOrders), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                a(
                                  e(l).Title,
                                  {
                                    level: 2,
                                    class: 'metric-value orders-color'
                                  },
                                  { default: s(() => [o(i(b.value), 1)]), _: 1 }
                                )
                              ])
                            ]),
                            _: 1
                          }
                        ),
                        a(
                          e(m),
                          { bordered: !1, class: 'metric-card' },
                          {
                            default: s(() => [
                              c('div', j, [
                                c('div', E, [
                                  a(e(B), { size: '24', color: '#6B2CEC' })
                                ]),
                                a(
                                  e(l).Text,
                                  { class: 'metric-title' },
                                  {
                                    default: s(() => [
                                      o(
                                        i(
                                          e(u)().metrics.marketplaceCommissions
                                        ),
                                        1
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                a(
                                  e(l).Title,
                                  {
                                    level: 2,
                                    class: 'metric-value commission-color'
                                  },
                                  {
                                    default: s(() => [o(i(e(f)(k.value)), 1)]),
                                    _: 1
                                  }
                                )
                              ])
                            ]),
                            _: 1
                          }
                        )
                      ],
                      64
                    ))
              ]),
              _: 1
            }
          )
        ])
      );
    }
  });
const X = T(P, [['__scopeId', 'data-v-e9390a08']]);
export { X as default };
