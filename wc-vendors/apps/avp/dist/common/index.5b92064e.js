import {
  g as E,
  m as T,
  _ as g,
  a as k,
  e as F,
  b as C,
  k as O,
  w as L
} from '../main.df9e2abb.js';
import {
  f as D,
  e as $,
  p as V,
  d as W,
  r as M,
  q as X,
  l as H,
  c as B
} from './vendor.ff933118.js';
import { u as K, r as j } from './responsiveObserve.41613a82.js';
import { aE as P } from './VendorStore.9a3ea1f4.js';
const _ = Symbol('rowContextKey'),
  q = e => {
    V(_, e);
  },
  J = () =>
    D(_, {
      gutter: $(() => {}),
      wrap: $(() => {}),
      supportFlexGap: $(() => {})
    }),
  U = e => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: 'flex',
        flexFlow: 'row wrap',
        minWidth: 0,
        '&::before, &::after': { display: 'flex' },
        '&-no-wrap': { flexWrap: 'nowrap' },
        '&-start': { justifyContent: 'flex-start' },
        '&-center': { justifyContent: 'center' },
        '&-end': { justifyContent: 'flex-end' },
        '&-space-between': { justifyContent: 'space-between' },
        '&-space-around ': { justifyContent: 'space-around' },
        '&-space-evenly ': { justifyContent: 'space-evenly' },
        '&-top': { alignItems: 'flex-start' },
        '&-middle': { alignItems: 'center' },
        '&-bottom': { alignItems: 'flex-end' }
      }
    };
  },
  Q = e => {
    const { componentCls: t } = e;
    return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } };
  },
  Y = (e, t) => {
    const { componentCls: a, gridColumns: u } = e,
      o = {};
    for (let s = u; s >= 0; s--)
      s === 0
        ? ((o[`${a}${t}-${s}`] = { display: 'none' }),
          (o[`${a}-push-${s}`] = { insetInlineStart: 'auto' }),
          (o[`${a}-pull-${s}`] = { insetInlineEnd: 'auto' }),
          (o[`${a}${t}-push-${s}`] = { insetInlineStart: 'auto' }),
          (o[`${a}${t}-pull-${s}`] = { insetInlineEnd: 'auto' }),
          (o[`${a}${t}-offset-${s}`] = { marginInlineEnd: 0 }),
          (o[`${a}${t}-order-${s}`] = { order: 0 }))
        : ((o[`${a}${t}-${s}`] = {
            display: 'block',
            flex: `0 0 ${(s / u) * 100}%`,
            maxWidth: `${(s / u) * 100}%`
          }),
          (o[`${a}${t}-push-${s}`] = { insetInlineStart: `${(s / u) * 100}%` }),
          (o[`${a}${t}-pull-${s}`] = { insetInlineEnd: `${(s / u) * 100}%` }),
          (o[`${a}${t}-offset-${s}`] = {
            marginInlineStart: `${(s / u) * 100}%`
          }),
          (o[`${a}${t}-order-${s}`] = { order: s }));
    return o;
  },
  R = (e, t) => Y(e, t),
  Z = (e, t, a) => ({ [`@media (min-width: ${t}px)`]: g({}, R(e, a)) }),
  z = E('Grid', e => [U(e)]),
  ee = E('Grid', e => {
    const t = T(e, { gridColumns: 24 }),
      a = {
        '-sm': t.screenSMMin,
        '-md': t.screenMDMin,
        '-lg': t.screenLGMin,
        '-xl': t.screenXLMin,
        '-xxl': t.screenXXLMin
      };
    return [
      Q(t),
      R(t, ''),
      R(t, '-xs'),
      Object.keys(a)
        .map(u => Z(t, a[u], u))
        .reduce((u, o) => g(g({}, u), o), {})
    ];
  }),
  te = () => ({
    align: O([String, Object]),
    justify: O([String, Object]),
    prefixCls: String,
    gutter: O([Number, Array, Object], 0),
    wrap: { type: Boolean, default: void 0 }
  }),
  ne = W({
    compatConfig: { MODE: 3 },
    name: 'ARow',
    inheritAttrs: !1,
    props: te(),
    setup(e, t) {
      let { slots: a, attrs: u } = t;
      const { prefixCls: o, direction: s } = k('row', e),
        [G, y] = z(o);
      let b;
      const v = K(),
        x = M({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
        S = M({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
        w = n =>
          $(() => {
            if (typeof e[n] == 'string') return e[n];
            if (typeof e[n] != 'object') return '';
            for (let r = 0; r < j.length; r++) {
              const l = j[r];
              if (!S.value[l]) continue;
              const i = e[n][l];
              if (i !== void 0) return i;
            }
            return '';
          }),
        f = w('align'),
        p = w('justify'),
        d = P();
      X(() => {
        b = v.value.subscribe(n => {
          S.value = n;
          const r = e.gutter || 0;
          ((!Array.isArray(r) && typeof r == 'object') ||
            (Array.isArray(r) &&
              (typeof r[0] == 'object' || typeof r[1] == 'object'))) &&
            (x.value = n);
        });
      }),
        H(() => {
          v.value.unsubscribe(b);
        });
      const m = $(() => {
        const n = [void 0, void 0],
          { gutter: r = 0 } = e;
        return (
          (Array.isArray(r) ? r : [r, void 0]).forEach((i, A) => {
            if (typeof i == 'object')
              for (let I = 0; I < j.length; I++) {
                const N = j[I];
                if (x.value[N] && i[N] !== void 0) {
                  n[A] = i[N];
                  break;
                }
              }
            else n[A] = i;
          }),
          n
        );
      });
      q({ gutter: m, supportFlexGap: d, wrap: $(() => e.wrap) });
      const h = $(() =>
          F(
            o.value,
            {
              [`${o.value}-no-wrap`]: e.wrap === !1,
              [`${o.value}-${p.value}`]: p.value,
              [`${o.value}-${f.value}`]: f.value,
              [`${o.value}-rtl`]: s.value === 'rtl'
            },
            u.class,
            y.value
          )
        ),
        c = $(() => {
          const n = m.value,
            r = {},
            l = n[0] != null && n[0] > 0 ? `${n[0] / -2}px` : void 0,
            i = n[1] != null && n[1] > 0 ? `${n[1] / -2}px` : void 0;
          return (
            l && ((r.marginLeft = l), (r.marginRight = l)),
            d.value
              ? (r.rowGap = `${n[1]}px`)
              : i && ((r.marginTop = i), (r.marginBottom = i)),
            r
          );
        });
      return () => {
        var n;
        return G(
          B(
            'div',
            C(
              C({}, u),
              {},
              { class: h.value, style: g(g({}, c.value), u.style) }
            ),
            [(n = a.default) === null || n === void 0 ? void 0 : n.call(a)]
          )
        );
      };
    }
  }),
  re = ne;
function se(e) {
  return typeof e == 'number'
    ? `${e} ${e} auto`
    : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
    ? `0 0 ${e}`
    : e;
}
const oe = () => ({
    span: [String, Number],
    order: [String, Number],
    offset: [String, Number],
    push: [String, Number],
    pull: [String, Number],
    xs: { type: [String, Number, Object], default: void 0 },
    sm: { type: [String, Number, Object], default: void 0 },
    md: { type: [String, Number, Object], default: void 0 },
    lg: { type: [String, Number, Object], default: void 0 },
    xl: { type: [String, Number, Object], default: void 0 },
    xxl: { type: [String, Number, Object], default: void 0 },
    prefixCls: String,
    flex: [String, Number]
  }),
  le = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  ae = W({
    compatConfig: { MODE: 3 },
    name: 'ACol',
    inheritAttrs: !1,
    props: oe(),
    setup(e, t) {
      let { slots: a, attrs: u } = t;
      const { gutter: o, supportFlexGap: s, wrap: G } = J(),
        { prefixCls: y, direction: b } = k('col', e),
        [v, x] = ee(y),
        S = $(() => {
          const { span: f, order: p, offset: d, push: m, pull: h } = e,
            c = y.value;
          let n = {};
          return (
            le.forEach(r => {
              let l = {};
              const i = e[r];
              typeof i == 'number'
                ? (l.span = i)
                : typeof i == 'object' && (l = i || {}),
                (n = g(g({}, n), {
                  [`${c}-${r}-${l.span}`]: l.span !== void 0,
                  [`${c}-${r}-order-${l.order}`]: l.order || l.order === 0,
                  [`${c}-${r}-offset-${l.offset}`]: l.offset || l.offset === 0,
                  [`${c}-${r}-push-${l.push}`]: l.push || l.push === 0,
                  [`${c}-${r}-pull-${l.pull}`]: l.pull || l.pull === 0,
                  [`${c}-rtl`]: b.value === 'rtl'
                }));
            }),
            F(
              c,
              {
                [`${c}-${f}`]: f !== void 0,
                [`${c}-order-${p}`]: p,
                [`${c}-offset-${d}`]: d,
                [`${c}-push-${m}`]: m,
                [`${c}-pull-${h}`]: h
              },
              n,
              u.class,
              x.value
            )
          );
        }),
        w = $(() => {
          const { flex: f } = e,
            p = o.value,
            d = {};
          if (p && p[0] > 0) {
            const m = `${p[0] / 2}px`;
            (d.paddingLeft = m), (d.paddingRight = m);
          }
          if (p && p[1] > 0 && !s.value) {
            const m = `${p[1] / 2}px`;
            (d.paddingTop = m), (d.paddingBottom = m);
          }
          return (
            f &&
              ((d.flex = se(f)),
              G.value === !1 && !d.minWidth && (d.minWidth = 0)),
            d
          );
        });
      return () => {
        var f;
        return v(
          B(
            'div',
            C(C({}, u), {}, { class: S.value, style: [w.value, u.style] }),
            [(f = a.default) === null || f === void 0 ? void 0 : f.call(a)]
          )
        );
      };
    }
  }),
  fe = L(ae),
  pe = L(re);
export { fe as C, pe as R };
