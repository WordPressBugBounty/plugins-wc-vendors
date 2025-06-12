import {
  d as V,
  Z as g,
  e as x,
  o as n,
  N as U,
  c,
  w as u,
  a0 as I,
  P as S,
  u as t,
  a as l,
  $ as r,
  F as q
} from '../common/vendor.ff933118.js';
import { c as o } from '../main.df9e2abb.js';
import {
  _ as w,
  I as C,
  S as T,
  b,
  a as R
} from '../common/DynamicControl.706beb75.js';
import { J as p } from '../common/VendorStore.9a3ea1f4.js';
import { a as N } from '../common/index.0de37137.js';
import { P as $ } from '../common/index.0e8dbddd.js';
import { w as B } from '../common/antd.01cefdb7.js';
import { T as F } from '../common/index.5816fc50.js';
import '../common/_plugin-vue_export-helper.c27b6911.js';
import '../common/VendorEdit.6af322b2.js';
import '../common/initDefaultProps.14498c5d.js';
import '../common/index.9883767e.js';
import '../common/responsiveObserve.41613a82.js';
const Q = V({
  __name: 'ShippingTableRates',
  props: {
    rates: { type: Object, required: !0, default: () => [] },
    currency: String
  },
  setup(y) {
    const m = y,
      { rates: d, currency: k } = g(m),
      f = x(() => [
        { title: o('region'), dataIndex: 'region', key: 'region' },
        { title: o('country'), dataIndex: 'country', key: 'country' },
        { title: o('state'), dataIndex: 'state', key: 'state' },
        { title: o('postcode'), dataIndex: 'postcode', key: 'postcode' },
        { title: o('shippingFee'), dataIndex: 'fee', key: 'fee' },
        {
          title: o('qtyOverride'),
          dataIndex: 'qty_override',
          key: 'qty_override'
        },
        { title: o('actions'), key: 'action', dataIndex: 'action' }
      ]),
      _ = () => {
        d.value.push({
          region: '',
          country: '',
          state: '',
          postcode: '',
          fee: 0,
          qty_override: 'no'
        });
      },
      v = i => {
        d.value.splice(i, 1);
      };
    return (i, O) => (
      n(),
      U(
        q,
        null,
        [
          c(
            t(p),
            { type: 'primary', style: { 'margin-bottom': '8px' }, onClick: _ },
            { default: u(() => [I(S(t(o)('addRow')), 1)]), _: 1 }
          ),
          c(
            t(F),
            { dataSource: t(d), columns: f.value },
            {
              bodyCell: u(({ record: e, index: h, column: s }) => [
                s.key === 'action'
                  ? (n(),
                    l(
                      t($),
                      {
                        key: 0,
                        onConfirm: a => v(h),
                        title: t(o)('confirmRemove'),
                        okText: t(o)('ok'),
                        cancelText: t(o)('cancel')
                      },
                      {
                        default: u(() => [
                          c(
                            t(p),
                            { danger: '' },
                            { default: u(() => [c(t(B))]), _: 1 }
                          )
                        ]),
                        _: 2
                      },
                      1032,
                      ['onConfirm', 'title', 'okText', 'cancelText']
                    ))
                  : r('', !0),
                s.key === 'country'
                  ? (n(),
                    l(
                      w,
                      {
                        key: 1,
                        selectedValue: e.country,
                        'onUpdate:selectedValue': a => (e.country = a),
                        continent: e.region,
                        showSearch: !0
                      },
                      null,
                      8,
                      ['selectedValue', 'onUpdate:selectedValue', 'continent']
                    ))
                  : r('', !0),
                s.key === 'postcode'
                  ? (n(),
                    l(
                      t(N),
                      {
                        key: 2,
                        value: e.postcode,
                        'onUpdate:value': a => (e.postcode = a)
                      },
                      null,
                      8,
                      ['value', 'onUpdate:value']
                    ))
                  : r('', !0),
                s.key === 'fee'
                  ? (n(),
                    l(
                      t(C),
                      {
                        key: 3,
                        value: e.fee,
                        'onUpdate:value': a => (e.fee = a),
                        addonAfter: t(k)
                      },
                      null,
                      8,
                      ['value', 'onUpdate:value', 'addonAfter']
                    ))
                  : r('', !0),
                s.key === 'qty_override'
                  ? (n(),
                    l(
                      t(T),
                      {
                        key: 4,
                        size: 'small',
                        checked: e.qty_override,
                        'onUpdate:checked': a => (e.qty_override = a),
                        checkedValue: 'yes',
                        unCheckedValue: 'no'
                      },
                      null,
                      8,
                      ['checked', 'onUpdate:checked']
                    ))
                  : r('', !0),
                s.key === 'region'
                  ? (n(),
                    l(
                      b,
                      {
                        key: 5,
                        selectedValue: e.region,
                        'onUpdate:selectedValue': a => (e.region = a),
                        showSearch: !0
                      },
                      null,
                      8,
                      ['selectedValue', 'onUpdate:selectedValue']
                    ))
                  : r('', !0),
                s.key === 'state'
                  ? (n(),
                    l(
                      R,
                      {
                        key: 6,
                        country: e.country,
                        selectedValue: e.state,
                        'onUpdate:selectedValue': a => (e.state = a),
                        showSearch: !0
                      },
                      null,
                      8,
                      ['country', 'selectedValue', 'onUpdate:selectedValue']
                    ))
                  : r('', !0)
              ]),
              _: 1
            },
            8,
            ['dataSource', 'columns']
          )
        ],
        64
      )
    );
  }
});
export { Q as default };
