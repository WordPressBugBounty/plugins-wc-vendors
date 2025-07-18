import {
  _ as i,
  c as R,
  u as L,
  D as lt,
  P as I,
  g as it,
  m as st,
  K as O,
  r as K,
  a as B,
  Z as ut,
  F as ct,
  ad as dt
} from './Dashboard.9e45cc90.js';
import {
  d as W,
  f,
  z as mt,
  r as F,
  w as J,
  A as gt,
  l as v,
  Y as bt,
  W as ft,
  X as vt
} from './vendor.47b1711b.js';
import { c as Q, j as q, k } from './createLucideIcon.42ab3542.js';
function G(t) {
  let { prefixCls: o, value: a, current: e, offset: n = 0 } = t,
    c;
  return (
    n && (c = { position: 'absolute', top: `${n}00%`, left: 0 }),
    v('p', { style: c, class: R(`${o}-only-unit`, { current: e }) }, [a])
  );
}
function pt(t, o, a) {
  let e = t,
    n = 0;
  for (; (e + 10) % 10 !== o; ) (e += a), (n += a);
  return n;
}
const ht = W({
  compatConfig: { MODE: 3 },
  name: 'SingleNumber',
  props: { prefixCls: String, value: String, count: Number },
  setup(t) {
    const o = f(() => Number(t.value)),
      a = f(() => Math.abs(t.count)),
      e = mt({ prevValue: o.value, prevCount: a.value }),
      n = () => {
        (e.prevValue = o.value), (e.prevCount = a.value);
      },
      c = F();
    return (
      J(
        o,
        () => {
          clearTimeout(c.value),
            (c.value = setTimeout(() => {
              n();
            }, 1e3));
        },
        { flush: 'post' }
      ),
      gt(() => {
        clearTimeout(c.value);
      }),
      () => {
        let d,
          p = {};
        const s = o.value;
        if (e.prevValue === s || Number.isNaN(s) || Number.isNaN(e.prevValue))
          (d = [G(i(i({}, t), { current: !0 }))]), (p = { transition: 'none' });
        else {
          d = [];
          const h = s + 10,
            m = [];
          for (let r = s; r <= h; r += 1) m.push(r);
          const l = m.findIndex(r => r % 10 === e.prevValue);
          d = m.map((r, y) => {
            const $ = r % 10;
            return G(
              i(i({}, t), { value: $, offset: y - l, current: y === l })
            );
          });
          const u = e.prevCount < a.value ? 1 : -1;
          p = { transform: `translateY(${-pt(e.prevValue, s, u)}00%)` };
        }
        return v(
          'span',
          {
            class: `${t.prefixCls}-only`,
            style: p,
            onTransitionend: () => n()
          },
          [d]
        );
      }
    );
  }
});
var $t =
  (globalThis && globalThis.__rest) ||
  function(t, o) {
    var a = {};
    for (var e in t)
      Object.prototype.hasOwnProperty.call(t, e) &&
        o.indexOf(e) < 0 &&
        (a[e] = t[e]);
    if (t != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var n = 0, e = Object.getOwnPropertySymbols(t); n < e.length; n++)
        o.indexOf(e[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, e[n]) &&
          (a[e[n]] = t[e[n]]);
    return a;
  };
const St = {
    prefixCls: String,
    count: I.any,
    component: String,
    title: I.any,
    show: Boolean
  },
  yt = W({
    compatConfig: { MODE: 3 },
    name: 'ScrollNumber',
    inheritAttrs: !1,
    props: St,
    setup(t, o) {
      let { attrs: a, slots: e } = o;
      const { prefixCls: n } = L('scroll-number', t);
      return () => {
        var c;
        const d = i(i({}, t), a),
          {
            prefixCls: p,
            count: s,
            title: h,
            show: m,
            component: l = 'sup',
            class: u,
            style: r
          } = d,
          y = $t(d, [
            'prefixCls',
            'count',
            'title',
            'show',
            'component',
            'class',
            'style'
          ]),
          $ = i(i({}, y), {
            style: r,
            'data-show': t.show,
            class: R(n.value, u),
            title: h
          });
        let g = s;
        if (s && Number(s) % 1 === 0) {
          const b = String(s).split('');
          g = b.map((P, T) =>
            v(
              ht,
              {
                prefixCls: n.value,
                count: Number(s),
                value: P,
                key: b.length - T
              },
              null
            )
          );
        }
        r &&
          r.borderColor &&
          ($.style = i(i({}, r), {
            boxShadow: `0 0 0 1px ${r.borderColor} inset`
          }));
        const S = lt(
          (c = e.default) === null || c === void 0 ? void 0 : c.call(e)
        );
        return S && S.length
          ? Q(S, { class: R(`${n.value}-custom-component`) }, !1)
          : v(l, $, { default: () => [g] });
      };
    }
  }),
  Ct = new O('antStatusProcessing', {
    '0%': { transform: 'scale(0.8)', opacity: 0.5 },
    '100%': { transform: 'scale(2.4)', opacity: 0 }
  }),
  xt = new O('antZoomBadgeIn', {
    '0%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 },
    '100%': { transform: 'scale(1) translate(50%, -50%)' }
  }),
  wt = new O('antZoomBadgeOut', {
    '0%': { transform: 'scale(1) translate(50%, -50%)' },
    '100%': { transform: 'scale(0) translate(50%, -50%)', opacity: 0 }
  }),
  Nt = new O('antNoWrapperZoomBadgeIn', {
    '0%': { transform: 'scale(0)', opacity: 0 },
    '100%': { transform: 'scale(1)' }
  }),
  Ot = new O('antNoWrapperZoomBadgeOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0)', opacity: 0 }
  }),
  Pt = new O('antBadgeLoadingCircle', {
    '0%': { transformOrigin: '50%' },
    '100%': {
      transform: 'translate(50%, -50%) rotate(360deg)',
      transformOrigin: '50%'
    }
  }),
  Tt = t => {
    const {
        componentCls: o,
        iconCls: a,
        antCls: e,
        badgeFontHeight: n,
        badgeShadowSize: c,
        badgeHeightSm: d,
        motionDurationSlow: p,
        badgeStatusSize: s,
        marginXS: h,
        badgeRibbonOffset: m
      } = t,
      l = `${e}-scroll-number`,
      u = `${e}-ribbon`,
      r = `${e}-ribbon-wrapper`,
      y = q(t, (g, S) => {
        let { darkColor: b } = S;
        return {
          [`&${o} ${o}-color-${g}`]: {
            background: b,
            [`&:not(${o}-count)`]: { color: b }
          }
        };
      }),
      $ = q(t, (g, S) => {
        let { darkColor: b } = S;
        return { [`&${u}-color-${g}`]: { background: b, color: b } };
      });
    return {
      [o]: i(
        i(
          i(i({}, K(t)), {
            position: 'relative',
            display: 'inline-block',
            width: 'fit-content',
            lineHeight: 1,
            [`${o}-count`]: {
              zIndex: t.badgeZIndex,
              minWidth: t.badgeHeight,
              height: t.badgeHeight,
              color: t.badgeTextColor,
              fontWeight: t.badgeFontWeight,
              fontSize: t.badgeFontSize,
              lineHeight: `${t.badgeHeight}px`,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              background: t.badgeColor,
              borderRadius: t.badgeHeight / 2,
              boxShadow: `0 0 0 ${c}px ${t.badgeShadowColor}`,
              transition: `background ${t.motionDurationMid}`,
              a: { color: t.badgeTextColor },
              'a:hover': { color: t.badgeTextColor },
              'a:hover &': { background: t.badgeColorHover }
            },
            [`${o}-count-sm`]: {
              minWidth: d,
              height: d,
              fontSize: t.badgeFontSizeSm,
              lineHeight: `${d}px`,
              borderRadius: d / 2
            },
            [`${o}-multiple-words`]: { padding: `0 ${t.paddingXS}px` },
            [`${o}-dot`]: {
              zIndex: t.badgeZIndex,
              width: t.badgeDotSize,
              minWidth: t.badgeDotSize,
              height: t.badgeDotSize,
              background: t.badgeColor,
              borderRadius: '100%',
              boxShadow: `0 0 0 ${c}px ${t.badgeShadowColor}`
            },
            [`${o}-dot${l}`]: { transition: `background ${p}` },
            [`${o}-count, ${o}-dot, ${l}-custom-component`]: {
              position: 'absolute',
              top: 0,
              insetInlineEnd: 0,
              transform: 'translate(50%, -50%)',
              transformOrigin: '100% 0%',
              [`&${a}-spin`]: {
                animationName: Pt,
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }
            },
            [`&${o}-status`]: {
              lineHeight: 'inherit',
              verticalAlign: 'baseline',
              [`${o}-status-dot`]: {
                position: 'relative',
                top: -1,
                display: 'inline-block',
                width: s,
                height: s,
                verticalAlign: 'middle',
                borderRadius: '50%'
              },
              [`${o}-status-success`]: { backgroundColor: t.colorSuccess },
              [`${o}-status-processing`]: {
                overflow: 'visible',
                color: t.colorPrimary,
                backgroundColor: t.colorPrimary,
                '&::after': {
                  position: 'absolute',
                  top: 0,
                  insetInlineStart: 0,
                  width: '100%',
                  height: '100%',
                  borderWidth: c,
                  borderStyle: 'solid',
                  borderColor: 'inherit',
                  borderRadius: '50%',
                  animationName: Ct,
                  animationDuration: t.badgeProcessingDuration,
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out',
                  content: '""'
                }
              },
              [`${o}-status-default`]: {
                backgroundColor: t.colorTextPlaceholder
              },
              [`${o}-status-error`]: { backgroundColor: t.colorError },
              [`${o}-status-warning`]: { backgroundColor: t.colorWarning },
              [`${o}-status-text`]: {
                marginInlineStart: h,
                color: t.colorText,
                fontSize: t.fontSize
              }
            }
          }),
          y
        ),
        {
          [`${o}-zoom-appear, ${o}-zoom-enter`]: {
            animationName: xt,
            animationDuration: t.motionDurationSlow,
            animationTimingFunction: t.motionEaseOutBack,
            animationFillMode: 'both'
          },
          [`${o}-zoom-leave`]: {
            animationName: wt,
            animationDuration: t.motionDurationSlow,
            animationTimingFunction: t.motionEaseOutBack,
            animationFillMode: 'both'
          },
          [`&${o}-not-a-wrapper`]: {
            [`${o}-zoom-appear, ${o}-zoom-enter`]: {
              animationName: Nt,
              animationDuration: t.motionDurationSlow,
              animationTimingFunction: t.motionEaseOutBack
            },
            [`${o}-zoom-leave`]: {
              animationName: Ot,
              animationDuration: t.motionDurationSlow,
              animationTimingFunction: t.motionEaseOutBack
            },
            [`&:not(${o}-status)`]: { verticalAlign: 'middle' },
            [`${l}-custom-component, ${o}-count`]: { transform: 'none' },
            [`${l}-custom-component, ${l}`]: {
              position: 'relative',
              top: 'auto',
              display: 'block',
              transformOrigin: '50% 50%'
            }
          },
          [`${l}`]: {
            overflow: 'hidden',
            [`${l}-only`]: {
              position: 'relative',
              display: 'inline-block',
              height: t.badgeHeight,
              transition: `all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,
              WebkitTransformStyle: 'preserve-3d',
              WebkitBackfaceVisibility: 'hidden',
              [`> p${l}-only-unit`]: {
                height: t.badgeHeight,
                margin: 0,
                WebkitTransformStyle: 'preserve-3d',
                WebkitBackfaceVisibility: 'hidden'
              }
            },
            [`${l}-symbol`]: { verticalAlign: 'top' }
          },
          '&-rtl': {
            direction: 'rtl',
            [`${o}-count, ${o}-dot, ${l}-custom-component`]: {
              transform: 'translate(-50%, -50%)'
            }
          }
        }
      ),
      [`${r}`]: { position: 'relative' },
      [`${u}`]: i(
        i(
          i(i({}, K(t)), {
            position: 'absolute',
            top: h,
            padding: `0 ${t.paddingXS}px`,
            color: t.colorPrimary,
            lineHeight: `${n}px`,
            whiteSpace: 'nowrap',
            backgroundColor: t.colorPrimary,
            borderRadius: t.borderRadiusSM,
            [`${u}-text`]: { color: t.colorTextLightSolid },
            [`${u}-corner`]: {
              position: 'absolute',
              top: '100%',
              width: m,
              height: m,
              color: 'currentcolor',
              border: `${m / 2}px solid`,
              transform: t.badgeRibbonCornerTransform,
              transformOrigin: 'top',
              filter: t.badgeRibbonCornerFilter
            }
          }),
          $
        ),
        {
          [`&${u}-placement-end`]: {
            insetInlineEnd: -m,
            borderEndEndRadius: 0,
            [`${u}-corner`]: {
              insetInlineEnd: 0,
              borderInlineEndColor: 'transparent',
              borderBlockEndColor: 'transparent'
            }
          },
          [`&${u}-placement-start`]: {
            insetInlineStart: -m,
            borderEndStartRadius: 0,
            [`${u}-corner`]: {
              insetInlineStart: 0,
              borderBlockEndColor: 'transparent',
              borderInlineStartColor: 'transparent'
            }
          },
          '&-rtl': { direction: 'rtl' }
        }
      )
    };
  },
  tt = it('Badge', t => {
    const {
        fontSize: o,
        lineHeight: a,
        fontSizeSM: e,
        lineWidth: n,
        marginXS: c,
        colorBorderBg: d
      } = t,
      p = Math.round(o * a),
      s = n,
      h = 'auto',
      m = p - 2 * s,
      l = t.colorBgContainer,
      u = 'normal',
      r = e,
      y = t.colorError,
      $ = t.colorErrorHover,
      g = o,
      S = e / 2,
      b = e,
      P = e / 2,
      T = st(t, {
        badgeFontHeight: p,
        badgeShadowSize: s,
        badgeZIndex: h,
        badgeHeight: m,
        badgeTextColor: l,
        badgeFontWeight: u,
        badgeFontSize: r,
        badgeColor: y,
        badgeColorHover: $,
        badgeShadowColor: d,
        badgeHeightSm: g,
        badgeDotSize: S,
        badgeFontSizeSm: b,
        badgeStatusSize: P,
        badgeProcessingDuration: '1.2s',
        badgeRibbonOffset: c,
        badgeRibbonCornerTransform: 'scaleY(0.75)',
        badgeRibbonCornerFilter: 'brightness(75%)'
      });
    return [Tt(T)];
  });
var zt =
  (globalThis && globalThis.__rest) ||
  function(t, o) {
    var a = {};
    for (var e in t)
      Object.prototype.hasOwnProperty.call(t, e) &&
        o.indexOf(e) < 0 &&
        (a[e] = t[e]);
    if (t != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var n = 0, e = Object.getOwnPropertySymbols(t); n < e.length; n++)
        o.indexOf(e[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, e[n]) &&
          (a[e[n]] = t[e[n]]);
    return a;
  };
const Bt = () => ({
    prefix: String,
    color: { type: String },
    text: I.any,
    placement: { type: String, default: 'end' }
  }),
  V = W({
    compatConfig: { MODE: 3 },
    name: 'ABadgeRibbon',
    inheritAttrs: !1,
    props: Bt(),
    slots: Object,
    setup(t, o) {
      let { attrs: a, slots: e } = o;
      const { prefixCls: n, direction: c } = L('ribbon', t),
        [d, p] = tt(n),
        s = f(() => k(t.color, !1)),
        h = f(() => [
          n.value,
          `${n.value}-placement-${t.placement}`,
          {
            [`${n.value}-rtl`]: c.value === 'rtl',
            [`${n.value}-color-${t.color}`]: s.value
          }
        ]);
      return () => {
        var m, l;
        const { class: u, style: r } = a,
          y = zt(a, ['class', 'style']),
          $ = {},
          g = {};
        return (
          t.color &&
            !s.value &&
            (($.background = t.color), (g.color = t.color)),
          d(
            v('div', B({ class: `${n.value}-wrapper ${p.value}` }, y), [
              (m = e.default) === null || m === void 0 ? void 0 : m.call(e),
              v(
                'div',
                { class: [h.value, u, p.value], style: i(i({}, $), r) },
                [
                  v('span', { class: `${n.value}-text` }, [
                    t.text ||
                      ((l = e.text) === null || l === void 0
                        ? void 0
                        : l.call(e))
                  ]),
                  v('div', { class: `${n.value}-corner`, style: g }, null)
                ]
              )
            ])
          )
        );
      };
    }
  }),
  It = t => !isNaN(parseFloat(t)) && isFinite(t),
  Dt = It,
  Et = () => ({
    count: I.any.def(null),
    showZero: { type: Boolean, default: void 0 },
    overflowCount: { type: Number, default: 99 },
    dot: { type: Boolean, default: void 0 },
    prefixCls: String,
    scrollNumberPrefixCls: String,
    status: { type: String },
    size: { type: String, default: 'default' },
    color: String,
    text: I.any,
    offset: Array,
    numberStyle: { type: Object, default: void 0 },
    title: String
  }),
  M = W({
    compatConfig: { MODE: 3 },
    name: 'ABadge',
    Ribbon: V,
    inheritAttrs: !1,
    props: Et(),
    slots: Object,
    setup(t, o) {
      let { slots: a, attrs: e } = o;
      const { prefixCls: n, direction: c } = L('badge', t),
        [d, p] = tt(n),
        s = f(() =>
          t.count > t.overflowCount ? `${t.overflowCount}+` : t.count
        ),
        h = f(() => s.value === '0' || s.value === 0),
        m = f(() => t.count === null || (h.value && !t.showZero)),
        l = f(
          () =>
            ((t.status !== null && t.status !== void 0) ||
              (t.color !== null && t.color !== void 0)) &&
            m.value
        ),
        u = f(() => t.dot && !h.value),
        r = f(() => (u.value ? '' : s.value)),
        y = f(
          () =>
            (r.value === null ||
              r.value === void 0 ||
              r.value === '' ||
              (h.value && !t.showZero)) &&
            !u.value
        ),
        $ = F(t.count),
        g = F(r.value),
        S = F(u.value);
      J(
        [() => t.count, r, u],
        () => {
          y.value ||
            (($.value = t.count), (g.value = r.value), (S.value = u.value));
        },
        { immediate: !0 }
      );
      const b = f(() => k(t.color, !1)),
        P = f(() => ({
          [`${n.value}-status-dot`]: l.value,
          [`${n.value}-status-${t.status}`]: !!t.status,
          [`${n.value}-color-${t.color}`]: b.value
        })),
        T = f(() =>
          t.color && !b.value ? { background: t.color, color: t.color } : {}
        ),
        et = f(() => ({
          [`${n.value}-dot`]: S.value,
          [`${n.value}-count`]: !S.value,
          [`${n.value}-count-sm`]: t.size === 'small',
          [`${n.value}-multiple-words`]:
            !S.value && g.value && g.value.toString().length > 1,
          [`${n.value}-status-${t.status}`]: !!t.status,
          [`${n.value}-color-${t.color}`]: b.value
        }));
      return () => {
        var D, _;
        const { offset: N, title: Z, color: X } = t,
          U = e.style,
          j = ut(a, t, 'text'),
          x = n.value,
          C = $.value;
        let w = ct(
          (D = a.default) === null || D === void 0 ? void 0 : D.call(a)
        );
        w = w.length ? w : null;
        const A = !!(!y.value || a.count),
          E = (() => {
            if (!N) return i({}, U);
            const z = { marginTop: Dt(N[1]) ? `${N[1]}px` : N[1] };
            return (
              c.value === 'rtl'
                ? (z.left = `${parseInt(N[0], 10)}px`)
                : (z.right = `${-parseInt(N[0], 10)}px`),
              i(i({}, z), U)
            );
          })(),
          ot = Z ?? (typeof C == 'string' || typeof C == 'number' ? C : void 0),
          nt = A || !j ? null : v('span', { class: `${x}-status-text` }, [j]),
          at =
            typeof C == 'object' || (C === void 0 && a.count)
              ? Q(
                  C ??
                    ((_ = a.count) === null || _ === void 0
                      ? void 0
                      : _.call(a)),
                  { style: E },
                  !1
                )
              : null,
          Y = R(
            x,
            {
              [`${x}-status`]: l.value,
              [`${x}-not-a-wrapper`]: !w,
              [`${x}-rtl`]: c.value === 'rtl'
            },
            e.class,
            p.value
          );
        if (!w && l.value) {
          const z = E.color;
          return d(
            v('span', B(B({}, e), {}, { class: Y, style: E }), [
              v('span', { class: P.value, style: T.value }, null),
              v('span', { style: { color: z }, class: `${x}-status-text` }, [j])
            ])
          );
        }
        const rt = dt(w ? `${x}-zoom` : '', { appear: !1 });
        let H = i(i({}, E), t.numberStyle);
        return (
          X && !b.value && ((H = H || {}), (H.background = X)),
          d(
            v('span', B(B({}, e), {}, { class: Y }), [
              w,
              v(bt, rt, {
                default: () => [
                  ft(
                    v(
                      yt,
                      {
                        prefixCls: t.scrollNumberPrefixCls,
                        show: A,
                        class: et.value,
                        count: g.value,
                        title: ot,
                        style: H,
                        key: 'scrollNumber'
                      },
                      { default: () => [at] }
                    ),
                    [[vt, A]]
                  )
                ]
              }),
              nt
            ])
          )
        );
      };
    }
  });
M.install = function(t) {
  return t.component(M.name, M), t.component(V.name, V), t;
};
export { M as B };
