import {
  d as S,
  Z as O,
  K as R,
  o as n,
  N as i,
  u as e,
  F as l,
  O as s,
  P as o,
  a0 as _,
  a as u,
  w as d,
  $ as p,
  U as f,
  V as y,
  c as v
} from '../../common/vendor.ff933118.js';
import { c as a } from '../../main.df9e2abb.js';
import { u as N, S as P } from '../../common/VendorStore.9a3ea1f4.js';
import { t as $ } from '../../common/antd.01cefdb7.js';
import { T as h, P as k } from '../../common/index.0e8dbddd.js';
import { _ as B } from '../../common/_plugin-vue_export-helper.c27b6911.js';
import '../../common/initDefaultProps.14498c5d.js';
const H = ['innerHTML'],
  M = ['innerHTML'],
  A = ['href'],
  D = ['href'],
  E = { href: '#', type: 'primary', class: 'vendor-action-approve' },
  U = { href: '#', type: 'primary', class: 'vendor-action-deny' },
  j = { href: '#', type: 'primary', class: 'vendor-action-edit' },
  q = ['href'],
  F = ['href'],
  z = { href: '#', type: 'primary', class: 'vendor-action-reactive' },
  K = S({
    __name: 'VendorTableCell',
    props: {
      record: { type: Object, required: !0 },
      column: { type: Object, required: !0 }
    },
    setup(C) {
      const T = C,
        x = N(),
        b = window.wcv_avp.view_products_url,
        I = window.wcv_avp.view_orders_url,
        { record: t, column: c } = O(T),
        L = async (m, r) => {
          await x.setVendorStatus(m, r);
        },
        w = async (m, r) => {
          await x.setVendorApproval(m, r);
        };
      return (m, r) => {
        const g = R('RouterLink');
        return (
          n(),
          i(
            l,
            null,
            [
              e(c).dataIndex === 'commission_due'
                ? (n(),
                  i(
                    'span',
                    { key: 0, innerHTML: e(t).commission_due.formatted },
                    null,
                    8,
                    H
                  ))
                : e(c).dataIndex === 'commission_rate'
                ? (n(),
                  i(
                    l,
                    { key: 1 },
                    [
                      s(
                        'span',
                        { innerHTML: e(t).commission_rate.formatted },
                        null,
                        8,
                        M
                      ),
                      s(
                        'span',
                        null,
                        ' (' + o(e(t).commission_rate.level) + ') ',
                        1
                      )
                    ],
                    64
                  ))
                : e(c).dataIndex === 'registered_date'
                ? (n(), i(l, { key: 2 }, [_(o(e(t).registered_date), 1)], 64))
                : e(c).dataIndex === 'status'
                ? (n(),
                  i(
                    l,
                    { key: 3 },
                    [
                      e(t).status.value === 'active'
                        ? (n(),
                          u(
                            e(h),
                            { key: 0, color: 'green' },
                            {
                              default: d(() => [_(o(e(a)('active')), 1)]),
                              _: 1
                            }
                          ))
                        : e(t).status.value === 'inactive'
                        ? (n(),
                          u(
                            e(h),
                            { key: 1 },
                            {
                              default: d(() => [_(o(e(a)('inactive')), 1)]),
                              _: 1
                            }
                          ))
                        : e(t).status.value === 'pending'
                        ? (n(),
                          u(
                            e(h),
                            { key: 2, color: 'orange' },
                            {
                              default: d(() => [_(o(e(a)('pending')), 1)]),
                              _: 1
                            }
                          ))
                        : p('', !0)
                    ],
                    64
                  ))
                : e(c).dataIndex === 'displayname'
                ? (n(),
                  i(
                    'a',
                    {
                      key: 4,
                      href: `/wp-admin/user-edit.php?user_id=${e(t).id}`,
                      target: "'_blank'"
                    },
                    o(e(t).displayname),
                    9,
                    A
                  ))
                : e(c).dataIndex === 'shopname'
                ? (n(),
                  i(
                    l,
                    { key: 5 },
                    [
                      f(
                        s(
                          'a',
                          { href: e(t).shop_link, target: "'_blank'" },
                          o(e(t).shopname),
                          9,
                          D
                        ),
                        [
                          [
                            y,
                            e(t).shopname !== '' &&
                              e(t).status.value !== 'inactive'
                          ]
                        ]
                      ),
                      f(s('span', null, '(' + o(e(a)('na')) + ')', 513), [
                        [y, e(t).shopname === '']
                      ]),
                      f(s('span', null, o(e(t).shopname), 513), [
                        [y, e(t).status.value === 'inactive']
                      ]),
                      e(t).status.value !== 'inactive' &&
                      e(t).status.value !== 'pending'
                        ? (n(),
                          u(
                            g,
                            {
                              key: 0,
                              to: {
                                name: 'vendor-edit',
                                params: { id: e(t).id }
                              },
                              class: 'tc-shop-name-edit',
                              title: e(a)('edit')
                            },
                            { default: d(() => [v(e($))]), _: 1 },
                            8,
                            ['to', 'title']
                          ))
                        : p('', !0)
                    ],
                    64
                  ))
                : p('', !0),
              e(c).dataIndex === 'action'
                ? (n(),
                  u(
                    e(P),
                    { key: 6, align: 'center', size: 'small' },
                    {
                      default: d(() => [
                        e(t).status.value === 'pending'
                          ? (n(),
                            i(
                              l,
                              { key: 0 },
                              [
                                v(
                                  e(k),
                                  {
                                    title: e(a)('confirmApprove'),
                                    'ok-text': e(a)('yes'),
                                    'cancel-text': e(a)('no'),
                                    onConfirm:
                                      r[0] ||
                                      (r[0] = V => w(e(t).id, 'approve'))
                                  },
                                  {
                                    default: d(() => [
                                      s('a', E, o(e(a)('approve')), 1)
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['title', 'ok-text', 'cancel-text']
                                ),
                                v(
                                  e(k),
                                  {
                                    title: e(a)('confirmDeny'),
                                    'ok-text': e(a)('yes'),
                                    'cancel-text': e(a)('no'),
                                    onConfirm:
                                      r[1] || (r[1] = V => w(e(t).id, 'deny'))
                                  },
                                  {
                                    default: d(() => [
                                      s('a', U, o(e(a)('deny')), 1)
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['title', 'ok-text', 'cancel-text']
                                )
                              ],
                              64
                            ))
                          : p('', !0),
                        e(t).status.value === 'active'
                          ? (n(),
                            i(
                              l,
                              { key: 1 },
                              [
                                v(
                                  g,
                                  {
                                    type: 'primary',
                                    to: {
                                      name: 'vendor-edit',
                                      params: { id: e(t).id }
                                    }
                                  },
                                  {
                                    default: d(() => [
                                      s('a', j, o(e(a)('edit')), 1)
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ['to']
                                ),
                                s(
                                  'a',
                                  { href: e(b) + e(t).id, type: 'primary' },
                                  o(e(a)('viewProducts')),
                                  9,
                                  q
                                ),
                                s(
                                  'a',
                                  { href: e(I) + e(t).id, type: 'primary' },
                                  o(e(a)('viewOrders')),
                                  9,
                                  F
                                )
                              ],
                              64
                            ))
                          : p('', !0),
                        e(t).status.value === 'inactive'
                          ? (n(),
                            u(
                              e(k),
                              {
                                key: 2,
                                title: e(a)('confirmReactive'),
                                'ok-text': e(a)('yes'),
                                'cancel-text': e(a)('no'),
                                onConfirm:
                                  r[2] || (r[2] = V => L(e(t).id, 'activate'))
                              },
                              {
                                default: d(() => [
                                  s('a', z, o(e(a)('reactive')), 1)
                                ]),
                                _: 1
                              },
                              8,
                              ['title', 'ok-text', 'cancel-text']
                            ))
                          : p('', !0)
                      ]),
                      _: 1
                    }
                  ))
                : p('', !0)
            ],
            64
          )
        );
      };
    }
  });
const ee = B(K, [['__scopeId', 'data-v-f2b89680']]);
export { ee as default };
