import {
  d as z,
  L as E,
  r as L,
  o,
  a as u,
  w as d,
  u as e,
  c as m,
  $ as y,
  N as c,
  F as v,
  a0 as f,
  P as g
} from '../common/vendor.ff933118.js';
import { U as R, c as h } from '../main.df9e2abb.js';
import { J as w, S as j } from '../common/VendorStore.9a3ea1f4.js';
import { x as A, y as D, t as F, w as K } from '../common/antd.01cefdb7.js';
import { S as O } from '../common/index.0de37137.js';
import { P as J } from '../common/index.0e8dbddd.js';
import { S as q } from '../common/DynamicControl.706beb75.js';
import { T as G } from '../common/index.5816fc50.js';
import '../common/initDefaultProps.14498c5d.js';
import '../common/_plugin-vue_export-helper.c27b6911.js';
import '../common/VendorEdit.6af322b2.js';
import '../common/index.9883767e.js';
import '../common/responsiveObserve.41613a82.js';
const ie = z({
  __name: 'OpeningHours',
  setup(M) {
    var C, b, S;
    const T = R(),
      U = window.wcv_avp.opening_times,
      k = window.wcv_avp.opening_days,
      { vendorSettings: p, openingHoursColumns: I } = E(T);
    p.value.store_opening_hours = Array.isArray(
      (C = p.value) == null ? void 0 : C.store_opening_hours
    )
      ? (b = p.value) == null
        ? void 0
        : b.store_opening_hours
      : [];
    const H = (S = p.value) == null ? void 0 : S.store_opening_hours,
      V = h('confirmRemove'),
      l = L([]),
      _ = U.map(a => {
        let n = Object.keys(a);
        return { value: n[0], label: a[n[0]] };
      }),
      N = Object.keys(k).map(a => ({ value: a, label: k[a] })),
      B = a => {
        l.value.indexOf(a) === -1
          ? l.value.push(a)
          : l.value.splice(l.value.indexOf(a), 1);
      },
      P = a => {
        var n, t;
        (t = (n = p.value) == null ? void 0 : n.store_opening_hours) == null ||
          t.splice(a, 1);
      },
      $ = () => {
        var a, n, t, s;
        (n = (a = p.value) == null ? void 0 : a.store_opening_hours) == null ||
          n.push({ day: 'sunday', open: '00:00', close: '23:30', status: '1' }),
          l.value.push(
            ((s = (t = p.value) == null ? void 0 : t.store_opening_hours) ==
            null
              ? void 0
              : s.length) - 1
          );
      },
      x = a => {
        let n = _.find(s => s.value === a);
        return n ? n.label : '';
      };
    return (a, n) => (
      o(),
      u(
        e(G),
        {
          columns: e(I),
          dataSource: e(H),
          pagination: !1,
          rowKey: t => t.day,
          bordered: '',
          tableLayout: 'auto'
        },
        {
          headerCell: d(({ column: t }) => [
            t.dataIndex === 'actions'
              ? (o(),
                u(
                  e(w),
                  {
                    key: 0,
                    type: 'primary',
                    size: 'middle',
                    onClick: n[0] || (n[0] = s => $())
                  },
                  { default: d(() => [m(e(A))]), _: 1 }
                ))
              : y('', !0)
          ]),
          bodyCell: d(({ record: t, column: s, index: r }) => [
            s.dataIndex === 'day'
              ? (o(),
                c(
                  v,
                  { key: 0 },
                  [
                    l.value.includes(r)
                      ? (o(),
                        u(
                          e(O),
                          {
                            key: 0,
                            options: e(N),
                            value: t.day,
                            'onUpdate:value': i => (t.day = i),
                            style: { width: '100px' }
                          },
                          null,
                          8,
                          ['options', 'value', 'onUpdate:value']
                        ))
                      : (o(), c(v, { key: 1 }, [f(g(e(k)[t.day]), 1)], 64))
                  ],
                  64
                ))
              : s.dataIndex === 'open'
              ? (o(),
                c(
                  v,
                  { key: 1 },
                  [
                    l.value.includes(r)
                      ? (o(),
                        u(
                          e(O),
                          {
                            key: 0,
                            options: e(_),
                            value: t.open,
                            'onUpdate:value': i => (t.open = i),
                            style: { width: '100px' }
                          },
                          null,
                          8,
                          ['options', 'value', 'onUpdate:value']
                        ))
                      : (o(), c(v, { key: 1 }, [f(g(x(t.open)), 1)], 64))
                  ],
                  64
                ))
              : s.dataIndex === 'close'
              ? (o(),
                c(
                  v,
                  { key: 2 },
                  [
                    l.value.includes(r)
                      ? (o(),
                        u(
                          e(O),
                          {
                            key: 0,
                            options: e(_),
                            value: t.close,
                            'onUpdate:value': i => (t.close = i),
                            style: { width: '100px' }
                          },
                          null,
                          8,
                          ['options', 'value', 'onUpdate:value']
                        ))
                      : (o(), c(v, { key: 1 }, [f(g(x(t.close)), 1)], 64))
                  ],
                  64
                ))
              : y('', !0),
            s.dataIndex === 'actions'
              ? (o(),
                u(
                  e(j),
                  { key: 3, size: 'small' },
                  {
                    default: d(() => [
                      m(
                        e(w),
                        { onClick: i => B(r) },
                        {
                          default: d(() => [
                            l.value.includes(r)
                              ? (o(), u(e(D), { key: 0 }))
                              : (o(), u(e(F), { key: 1 }))
                          ]),
                          _: 2
                        },
                        1032,
                        ['onClick']
                      ),
                      l.value.includes(r)
                        ? y('', !0)
                        : (o(),
                          u(
                            e(J),
                            {
                              key: 0,
                              title: e(V),
                              onConfirm: i => P(r),
                              okText: e(h)('ok'),
                              cancelText: e(h)('cancel')
                            },
                            {
                              default: d(() => [
                                m(
                                  e(w),
                                  { danger: '' },
                                  { default: d(() => [m(e(K))]), _: 1 }
                                )
                              ]),
                              _: 2
                            },
                            1032,
                            ['title', 'onConfirm', 'okText', 'cancelText']
                          ))
                    ]),
                    _: 2
                  },
                  1024
                ))
              : s.dataIndex === 'status'
              ? (o(),
                u(
                  e(q),
                  {
                    key: 4,
                    size: 'small',
                    checked: t.status,
                    'onUpdate:checked': i => (t.status = i),
                    checkedValue: '1',
                    unCheckedValue: '0'
                  },
                  null,
                  8,
                  ['checked', 'onUpdate:checked']
                ))
              : y('', !0)
          ]),
          _: 1
        },
        8,
        ['columns', 'dataSource', 'rowKey']
      )
    );
  }
});
export { ie as default };
