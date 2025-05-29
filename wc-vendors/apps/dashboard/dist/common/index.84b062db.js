import {
  Y as Qe,
  g as le,
  m as se,
  _ as d,
  r as ce,
  u as Z,
  T as Ze,
  Z as ve,
  a as z,
  P as I,
  $ as Ae,
  x as Ye,
  c as B,
  a0 as ke,
  a1 as ye,
  D as ge,
  F as et,
  A as ue,
  K as _e,
  a2 as U,
  a3 as tt,
  y as xe,
  a4 as nt,
  z as Ie,
  w as it,
  j as rt,
  a5 as ot,
  d as q,
  i as at,
  f as L,
  s as lt,
  h as st
} from './Dashboard.9e45cc90.js';
import {
  s as A,
  q as Re,
  A as ct,
  j as Le,
  g as ut,
  p as pt,
  d as E,
  f as G,
  w as me,
  x as de,
  l as o,
  r as He,
  F as dt,
  k as gt,
  i as Pe,
  Z as Oe,
  L as Fe,
  N as mt
} from './vendor.47b1711b.js';
import {
  R as ht,
  v as ft,
  H as vt,
  P as bt,
  x as We,
  I as St,
  o as $t,
  G as Ct,
  J as yt,
  c as he,
  L as xt,
  M as ze
} from './createLucideIcon.42ab3542.js';
import { R as It, s as Pt, D as Ot, t as zt } from './antd.ddaabbc2.js';
import { s as Ge, S as ae } from './index.d0bc549f.js';
import { B as Xe, i as wt, s as Tt, c as Dt } from './index.47c00042.js';
function Ve() {
  const e = A({});
  let t = null;
  const n = Qe();
  return (
    Re(() => {
      t = n.value.subscribe(i => {
        e.value = i;
      });
    }),
    ct(() => {
      n.value.unsubscribe(t);
    }),
    e
  );
}
function Bt(e) {
  const t = A();
  return (
    Le(
      () => {
        t.value = e();
      },
      { flush: 'sync' }
    ),
    t
  );
}
const Nt = e => {
    const {
        antCls: t,
        componentCls: n,
        iconCls: i,
        avatarBg: r,
        avatarColor: C,
        containerSize: c,
        containerSizeLG: u,
        containerSizeSM: p,
        textFontSize: s,
        textFontSizeLG: a,
        textFontSizeSM: f,
        borderRadius: g,
        borderRadiusLG: m,
        borderRadiusSM: v,
        lineWidth: y,
        lineType: x
      } = e,
      l = (S, h, $) => ({
        width: S,
        height: S,
        lineHeight: `${S - y * 2}px`,
        borderRadius: '50%',
        [`&${n}-square`]: { borderRadius: $ },
        [`${n}-string`]: {
          position: 'absolute',
          left: { _skip_check_: !0, value: '50%' },
          transformOrigin: '0 center'
        },
        [`&${n}-icon`]: { fontSize: h, [`> ${i}`]: { margin: 0 } }
      });
    return {
      [n]: d(
        d(
          d(d({}, ce(e)), {
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            color: C,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            verticalAlign: 'middle',
            background: r,
            border: `${y}px ${x} transparent`,
            '&-image': { background: 'transparent' },
            [`${t}-image-img`]: { display: 'block' }
          }),
          l(c, s, g)
        ),
        {
          '&-lg': d({}, l(u, a, m)),
          '&-sm': d({}, l(p, f, v)),
          '> img': {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        }
      )
    };
  },
  Et = e => {
    const {
      componentCls: t,
      groupBorderColor: n,
      groupOverlapping: i,
      groupSpace: r
    } = e;
    return {
      [`${t}-group`]: {
        display: 'inline-flex',
        [`${t}`]: { borderColor: n },
        '> *:not(:first-child)': { marginInlineStart: i }
      },
      [`${t}-group-popover`]: { [`${t} + ${t}`]: { marginInlineStart: r } }
    };
  },
  Ke = le(
    'Avatar',
    e => {
      const { colorTextLightSolid: t, colorTextPlaceholder: n } = e,
        i = se(e, { avatarBg: n, avatarColor: t });
      return [Nt(i), Et(i)];
    },
    e => {
      const {
        controlHeight: t,
        controlHeightLG: n,
        controlHeightSM: i,
        fontSize: r,
        fontSizeLG: C,
        fontSizeXL: c,
        fontSizeHeading3: u,
        marginXS: p,
        marginXXS: s,
        colorBorderBg: a
      } = e;
      return {
        containerSize: t,
        containerSizeLG: n,
        containerSizeSM: i,
        textFontSize: Math.round((C + c) / 2),
        textFontSizeLG: u,
        textFontSizeSM: r,
        groupSpace: s,
        groupOverlapping: -p,
        groupBorderColor: a
      };
    }
  ),
  Je = Symbol('AvatarContextKey'),
  Mt = () => ut(Je, {}),
  jt = e => pt(Je, e),
  At = () => ({
    prefixCls: String,
    shape: { type: String, default: 'circle' },
    size: { type: [Number, String, Object], default: () => 'default' },
    src: String,
    srcset: String,
    icon: I.any,
    alt: String,
    gap: Number,
    draggable: { type: Boolean, default: void 0 },
    crossOrigin: String,
    loadError: { type: Function }
  }),
  _t = E({
    compatConfig: { MODE: 3 },
    name: 'AAvatar',
    inheritAttrs: !1,
    props: At(),
    slots: Object,
    setup(e, t) {
      let { slots: n, attrs: i } = t;
      const r = A(!0),
        C = A(!1),
        c = A(1),
        u = A(null),
        p = A(null),
        { prefixCls: s } = Z('avatar', e),
        [a, f] = Ke(s),
        g = Mt(),
        m = G(() => (e.size === 'default' ? g.size : e.size)),
        v = Ve(),
        y = Bt(() => {
          if (typeof e.size != 'object') return;
          const h = Ze.find(P => v.value[P]);
          return e.size[h];
        }),
        x = h =>
          y.value
            ? {
                width: `${y.value}px`,
                height: `${y.value}px`,
                lineHeight: `${y.value}px`,
                fontSize: `${h ? y.value / 2 : 18}px`
              }
            : {},
        l = () => {
          if (!u.value || !p.value) return;
          const h = u.value.offsetWidth,
            $ = p.value.offsetWidth;
          if (h !== 0 && $ !== 0) {
            const { gap: P = 4 } = e;
            P * 2 < $ && (c.value = $ - P * 2 < h ? ($ - P * 2) / h : 1);
          }
        },
        S = () => {
          const { loadError: h } = e;
          (h == null ? void 0 : h()) !== !1 && (r.value = !1);
        };
      return (
        me(
          () => e.src,
          () => {
            de(() => {
              (r.value = !0), (c.value = 1);
            });
          }
        ),
        me(
          () => e.gap,
          () => {
            de(() => {
              l();
            });
          }
        ),
        Re(() => {
          de(() => {
            l(), (C.value = !0);
          });
        }),
        () => {
          var h, $;
          const {
              shape: P,
              src: b,
              alt: O,
              srcset: W,
              draggable: Y,
              crossOrigin: k
            } = e,
            ee = (h = g.shape) !== null && h !== void 0 ? h : P,
            T = ve(n, e, 'icon'),
            w = s.value,
            D = {
              [`${i.class}`]: !!i.class,
              [w]: !0,
              [`${w}-lg`]: m.value === 'large',
              [`${w}-sm`]: m.value === 'small',
              [`${w}-${ee}`]: !0,
              [`${w}-image`]: b && r.value,
              [`${w}-icon`]: T,
              [f.value]: !0
            },
            te =
              typeof m.value == 'number'
                ? {
                    width: `${m.value}px`,
                    height: `${m.value}px`,
                    lineHeight: `${m.value}px`,
                    fontSize: T ? `${m.value / 2}px` : '18px'
                  }
                : {},
            X = ($ = n.default) === null || $ === void 0 ? void 0 : $.call(n);
          let N;
          if (b && r.value)
            N = o(
              'img',
              {
                draggable: Y,
                src: b,
                srcset: W,
                onError: S,
                alt: O,
                crossorigin: k
              },
              null
            );
          else if (T) N = T;
          else if (C.value || c.value !== 1) {
            const j = `scale(${c.value}) translateX(-50%)`,
              ne = { msTransform: j, WebkitTransform: j, transform: j },
              V =
                typeof m.value == 'number'
                  ? { lineHeight: `${m.value}px` }
                  : {};
            N = o(
              ht,
              { onResize: l },
              {
                default: () => [
                  o(
                    'span',
                    { class: `${w}-string`, ref: u, style: d(d({}, V), ne) },
                    [X]
                  )
                ]
              }
            );
          } else
            N = o(
              'span',
              { class: `${w}-string`, ref: u, style: { opacity: 0 } },
              [X]
            );
          return a(
            o(
              'span',
              z(
                z({}, i),
                {},
                { ref: p, class: D, style: [te, x(!!T), i.style] }
              ),
              [N]
            )
          );
        }
      );
    }
  }),
  Q = _t,
  Rt = e => {
    const {
      componentCls: t,
      popoverBg: n,
      popoverColor: i,
      width: r,
      fontWeightStrong: C,
      popoverPadding: c,
      boxShadowSecondary: u,
      colorTextHeading: p,
      borderRadiusLG: s,
      zIndexPopup: a,
      marginXS: f,
      colorBgElevated: g
    } = e;
    return [
      {
        [t]: d(d({}, ce(e)), {
          position: 'absolute',
          top: 0,
          left: { _skip_check_: !0, value: 0 },
          zIndex: a,
          fontWeight: 'normal',
          whiteSpace: 'normal',
          textAlign: 'start',
          cursor: 'auto',
          userSelect: 'text',
          '--antd-arrow-background-color': g,
          '&-rtl': { direction: 'rtl' },
          '&-hidden': { display: 'none' },
          [`${t}-content`]: { position: 'relative' },
          [`${t}-inner`]: {
            backgroundColor: n,
            backgroundClip: 'padding-box',
            borderRadius: s,
            boxShadow: u,
            padding: c
          },
          [`${t}-title`]: {
            minWidth: r,
            marginBottom: f,
            color: p,
            fontWeight: C
          },
          [`${t}-inner-content`]: { color: i }
        })
      },
      vt(e, { colorBg: 'var(--antd-arrow-background-color)' }),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          [`${t}-content`]: { display: 'inline-block' }
        }
      }
    ];
  },
  Lt = e => {
    const { componentCls: t } = e;
    return {
      [t]: bt.map(n => {
        const i = e[`${n}-6`];
        return {
          [`&${t}-${n}`]: {
            '--antd-arrow-background-color': i,
            [`${t}-inner`]: { backgroundColor: i },
            [`${t}-arrow`]: { background: 'transparent' }
          }
        };
      })
    };
  },
  Ht = e => {
    const {
        componentCls: t,
        lineWidth: n,
        lineType: i,
        colorSplit: r,
        paddingSM: C,
        controlHeight: c,
        fontSize: u,
        lineHeight: p,
        padding: s
      } = e,
      a = c - Math.round(u * p),
      f = a / 2,
      g = a / 2 - n,
      m = s;
    return {
      [t]: {
        [`${t}-inner`]: { padding: 0 },
        [`${t}-title`]: {
          margin: 0,
          padding: `${f}px ${m}px ${g}px`,
          borderBottom: `${n}px ${i} ${r}`
        },
        [`${t}-inner-content`]: { padding: `${C}px ${m}px` }
      }
    };
  },
  Ft = le(
    'Popover',
    e => {
      const { colorBgElevated: t, colorText: n, wireframe: i } = e,
        r = se(e, { popoverBg: t, popoverColor: n, popoverPadding: 12 });
      return [Rt(r), Lt(r), i && Ht(r), ft(r, 'zoom-big')];
    },
    e => {
      let { zIndexPopupBase: t } = e;
      return { zIndexPopup: t + 30, width: 177 };
    }
  ),
  Wt = () => d(d({}, yt()), { content: ye(), title: ye() }),
  Gt = E({
    compatConfig: { MODE: 3 },
    name: 'APopover',
    inheritAttrs: !1,
    props: We(
      Wt(),
      d(d({}, St()), {
        trigger: 'hover',
        placement: 'top',
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1
      })
    ),
    setup(e, t) {
      let { expose: n, slots: i, attrs: r } = t;
      const C = He();
      Ye(e.visible === void 0),
        n({
          getPopupDomNode: () => {
            var g, m;
            return (m =
              (g = C.value) === null || g === void 0
                ? void 0
                : g.getPopupDomNode) === null || m === void 0
              ? void 0
              : m.call(g);
          }
        });
      const { prefixCls: c, configProvider: u } = Z('popover', e),
        [p, s] = Ft(c),
        a = G(() => u.getPrefixCls()),
        f = () => {
          var g, m;
          const {
              title: v = ge(
                (g = i.title) === null || g === void 0 ? void 0 : g.call(i)
              ),
              content: y = ge(
                (m = i.content) === null || m === void 0 ? void 0 : m.call(i)
              )
            } = e,
            x = !!(Array.isArray(v) ? v.length : v),
            l = !!(Array.isArray(y) ? y.length : v);
          return !x && !l
            ? null
            : o(dt, null, [
                x && o('div', { class: `${c.value}-title` }, [v]),
                o('div', { class: `${c.value}-inner-content` }, [y])
              ]);
        };
      return () => {
        const g = B(e.overlayClassName, s.value);
        return p(
          o(
            Ct,
            z(
              z(z({}, $t(e, ['title', 'content'])), r),
              {},
              {
                prefixCls: c.value,
                ref: C,
                overlayClassName: g,
                transitionName: ke(a.value, 'zoom-big', e.transitionName),
                'data-popover-inject': !0
              }
            ),
            { title: f, default: i.default }
          )
        );
      };
    }
  }),
  Xt = Ae(Gt),
  Vt = () => ({
    prefixCls: String,
    maxCount: Number,
    maxStyle: { type: Object, default: void 0 },
    maxPopoverPlacement: { type: String, default: 'top' },
    maxPopoverTrigger: String,
    size: { type: [Number, String, Object], default: 'default' },
    shape: { type: String, default: 'circle' }
  }),
  Kt = E({
    compatConfig: { MODE: 3 },
    name: 'AAvatarGroup',
    inheritAttrs: !1,
    props: Vt(),
    setup(e, t) {
      let { slots: n, attrs: i } = t;
      const { prefixCls: r, direction: C } = Z('avatar', e),
        c = G(() => `${r.value}-group`),
        [u, p] = Ke(r);
      return (
        Le(() => {
          const s = { size: e.size, shape: e.shape };
          jt(s);
        }),
        () => {
          const {
              maxPopoverPlacement: s = 'top',
              maxCount: a,
              maxStyle: f,
              maxPopoverTrigger: g = 'hover',
              shape: m
            } = e,
            v = {
              [c.value]: !0,
              [`${c.value}-rtl`]: C.value === 'rtl',
              [`${i.class}`]: !!i.class,
              [p.value]: !0
            },
            y = ve(n, e),
            x = et(y).map((S, h) => he(S, { key: `avatar-key-${h}` })),
            l = x.length;
          if (a && a < l) {
            const S = x.slice(0, a),
              h = x.slice(a, l);
            return (
              S.push(
                o(
                  Xt,
                  {
                    key: 'avatar-popover-key',
                    content: h,
                    trigger: g,
                    placement: s,
                    overlayClassName: `${c.value}-popover`
                  },
                  {
                    default: () => [
                      o(
                        Q,
                        { style: f, shape: m },
                        { default: () => [`+${l - a}`] }
                      )
                    ]
                  }
                )
              ),
              u(o('div', z(z({}, i), {}, { class: v, style: i.style }), [S]))
            );
          }
          return u(
            o('div', z(z({}, i), {}, { class: v, style: i.style }), [x])
          );
        }
      );
    }
  }),
  fe = Kt;
Q.Group = fe;
Q.install = function(e) {
  return e.component(Q.name, Q), e.component(fe.name, fe), e;
};
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      i.forEach(function(r) {
        Jt(e, r, n[r]);
      });
  }
  return e;
}
function Jt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var be = function(t, n) {
  var i = we({}, t, n.attrs);
  return o(ue, we({}, i, { icon: It }), null);
};
be.displayName = 'RightOutlined';
be.inheritAttrs = !1;
const Te = be;
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      i.forEach(function(r) {
        Ut(e, r, n[r]);
      });
  }
  return e;
}
function Ut(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Se = function(t, n) {
  var i = De({}, t, n.attrs);
  return o(ue, De({}, i, { icon: Pt }), null);
};
Se.displayName = 'LeftOutlined';
Se.inheritAttrs = !1;
const Be = Se;
function qt(e, t, n) {
  var i = n || {},
    r = i.noTrailing,
    C = r === void 0 ? !1 : r,
    c = i.noLeading,
    u = c === void 0 ? !1 : c,
    p = i.debounceMode,
    s = p === void 0 ? void 0 : p,
    a,
    f = !1,
    g = 0;
  function m() {
    a && clearTimeout(a);
  }
  function v(x) {
    var l = x || {},
      S = l.upcomingOnly,
      h = S === void 0 ? !1 : S;
    m(), (f = !h);
  }
  function y() {
    for (var x = arguments.length, l = new Array(x), S = 0; S < x; S++)
      l[S] = arguments[S];
    var h = this,
      $ = Date.now() - g;
    if (f) return;
    function P() {
      (g = Date.now()), t.apply(h, l);
    }
    function b() {
      a = void 0;
    }
    !u && s && !a && P(),
      m(),
      s === void 0 && $ > e
        ? u
          ? ((g = Date.now()), C || (a = setTimeout(s ? b : P, e)))
          : P()
        : C !== !0 && (a = setTimeout(s ? b : P, s === void 0 ? e - $ : e));
  }
  return (y.cancel = v), y;
}
function Qt(e, t, n) {
  var i = n || {},
    r = i.atBegin,
    C = r === void 0 ? !1 : r;
  return qt(e, t, { debounceMode: C !== !1 });
}
const Zt = new _e('antSpinMove', { to: { opacity: 1 } }),
  Yt = new _e('antRotate', { to: { transform: 'rotate(405deg)' } }),
  kt = e => ({
    [`${e.componentCls}`]: d(d({}, ce(e)), {
      position: 'absolute',
      display: 'none',
      color: e.colorPrimary,
      textAlign: 'center',
      verticalAlign: 'middle',
      opacity: 0,
      transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
      '&-spinning': { position: 'static', display: 'inline-block', opacity: 1 },
      '&-nested-loading': {
        position: 'relative',
        [`> div > ${e.componentCls}`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: 'block',
          width: '100%',
          height: '100%',
          maxHeight: e.contentHeight,
          [`${e.componentCls}-dot`]: {
            position: 'absolute',
            top: '50%',
            insetInlineStart: '50%',
            margin: -e.spinDotSize / 2
          },
          [`${e.componentCls}-text`]: {
            position: 'absolute',
            top: '50%',
            width: '100%',
            paddingTop: (e.spinDotSize - e.fontSize) / 2 + 2,
            textShadow: `0 1px 2px ${e.colorBgContainer}`
          },
          [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
            marginTop: -(e.spinDotSize / 2) - 10
          },
          '&-sm': {
            [`${e.componentCls}-dot`]: { margin: -e.spinDotSizeSM / 2 },
            [`${e.componentCls}-text`]: {
              paddingTop: (e.spinDotSizeSM - e.fontSize) / 2 + 2
            },
            [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
              marginTop: -(e.spinDotSizeSM / 2) - 10
            }
          },
          '&-lg': {
            [`${e.componentCls}-dot`]: { margin: -(e.spinDotSizeLG / 2) },
            [`${e.componentCls}-text`]: {
              paddingTop: (e.spinDotSizeLG - e.fontSize) / 2 + 2
            },
            [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
              marginTop: -(e.spinDotSizeLG / 2) - 10
            }
          }
        },
        [`${e.componentCls}-container`]: {
          position: 'relative',
          transition: `opacity ${e.motionDurationSlow}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: '100%',
            height: '100%',
            background: e.colorBgContainer,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '""',
            pointerEvents: 'none'
          }
        },
        [`${e.componentCls}-blur`]: {
          clear: 'both',
          opacity: 0.5,
          userSelect: 'none',
          pointerEvents: 'none',
          '&::after': { opacity: 0.4, pointerEvents: 'auto' }
        }
      },
      '&-tip': { color: e.spinDotDefault },
      [`${e.componentCls}-dot`]: {
        position: 'relative',
        display: 'inline-block',
        fontSize: e.spinDotSize,
        width: '1em',
        height: '1em',
        '&-item': {
          position: 'absolute',
          display: 'block',
          width: (e.spinDotSize - e.marginXXS / 2) / 2,
          height: (e.spinDotSize - e.marginXXS / 2) / 2,
          backgroundColor: e.colorPrimary,
          borderRadius: '100%',
          transform: 'scale(0.75)',
          transformOrigin: '50% 50%',
          opacity: 0.3,
          animationName: Zt,
          animationDuration: '1s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          animationDirection: 'alternate',
          '&:nth-child(1)': { top: 0, insetInlineStart: 0 },
          '&:nth-child(2)': {
            top: 0,
            insetInlineEnd: 0,
            animationDelay: '0.4s'
          },
          '&:nth-child(3)': {
            insetInlineEnd: 0,
            bottom: 0,
            animationDelay: '0.8s'
          },
          '&:nth-child(4)': {
            bottom: 0,
            insetInlineStart: 0,
            animationDelay: '1.2s'
          }
        },
        '&-spin': {
          transform: 'rotate(45deg)',
          animationName: Yt,
          animationDuration: '1.2s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }
      },
      [`&-sm ${e.componentCls}-dot`]: {
        fontSize: e.spinDotSizeSM,
        i: {
          width: (e.spinDotSizeSM - e.marginXXS / 2) / 2,
          height: (e.spinDotSizeSM - e.marginXXS / 2) / 2
        }
      },
      [`&-lg ${e.componentCls}-dot`]: {
        fontSize: e.spinDotSizeLG,
        i: {
          width: (e.spinDotSizeLG - e.marginXXS) / 2,
          height: (e.spinDotSizeLG - e.marginXXS) / 2
        }
      },
      [`&${e.componentCls}-show-text ${e.componentCls}-text`]: {
        display: 'block'
      }
    })
  }),
  en = le(
    'Spin',
    e => {
      const t = se(e, {
        spinDotDefault: e.colorTextDescription,
        spinDotSize: e.controlHeightLG / 2,
        spinDotSizeSM: e.controlHeightLG * 0.35,
        spinDotSizeLG: e.controlHeight
      });
      return [kt(t)];
    },
    { contentHeight: 400 }
  );
var tn =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        t.indexOf(i) < 0 &&
        (n[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
        t.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
          (n[i[r]] = e[i[r]]);
    return n;
  };
const nn = () => ({
  prefixCls: String,
  spinning: { type: Boolean, default: void 0 },
  size: String,
  wrapperClassName: String,
  tip: I.any,
  delay: Number,
  indicator: I.any
});
let re = null;
function rn(e, t) {
  return !!e && !!t && !isNaN(Number(t));
}
function on(e) {
  const t = e.indicator;
  re = typeof t == 'function' ? t : () => o(t, null, null);
}
const oe = E({
  compatConfig: { MODE: 3 },
  name: 'ASpin',
  inheritAttrs: !1,
  props: We(nn(), { size: 'default', spinning: !0, wrapperClassName: '' }),
  setup(e, t) {
    let { attrs: n, slots: i } = t;
    const { prefixCls: r, size: C, direction: c } = Z('spin', e),
      [u, p] = en(r),
      s = A(e.spinning && !rn(e.spinning, e.delay));
    let a;
    return (
      me(
        [() => e.spinning, () => e.delay],
        () => {
          a == null || a.cancel(),
            (a = Qt(e.delay, () => {
              s.value = e.spinning;
            })),
            a == null || a();
        },
        { immediate: !0, flush: 'post' }
      ),
      gt(() => {
        a == null || a.cancel();
      }),
      () => {
        var f, g;
        const { class: m } = n,
          v = tn(n, ['class']),
          {
            tip: y = (f = i.tip) === null || f === void 0 ? void 0 : f.call(i)
          } = e,
          x = (g = i.default) === null || g === void 0 ? void 0 : g.call(i),
          l = {
            [p.value]: !0,
            [r.value]: !0,
            [`${r.value}-sm`]: C.value === 'small',
            [`${r.value}-lg`]: C.value === 'large',
            [`${r.value}-spinning`]: s.value,
            [`${r.value}-show-text`]: !!y,
            [`${r.value}-rtl`]: c.value === 'rtl',
            [m]: !!m
          };
        function S($) {
          const P = `${$}-dot`;
          let b = ve(i, e, 'indicator');
          return b === null
            ? null
            : (Array.isArray(b) && (b = b.length === 1 ? b[0] : b),
              Pe(b)
                ? Oe(b, { class: P })
                : re && Pe(re())
                ? Oe(re(), { class: P })
                : o('span', { class: `${P} ${$}-dot-spin` }, [
                    o('i', { class: `${$}-dot-item` }, null),
                    o('i', { class: `${$}-dot-item` }, null),
                    o('i', { class: `${$}-dot-item` }, null),
                    o('i', { class: `${$}-dot-item` }, null)
                  ]));
        }
        const h = o(
          'div',
          z(
            z({}, v),
            {},
            { class: l, 'aria-live': 'polite', 'aria-busy': s.value }
          ),
          [S(r.value), y ? o('div', { class: `${r.value}-text` }, [y]) : null]
        );
        if (x && ge(x).length) {
          const $ = {
            [`${r.value}-container`]: !0,
            [`${r.value}-blur`]: s.value
          };
          return u(
            o(
              'div',
              {
                class: [
                  `${r.value}-nested-loading`,
                  e.wrapperClassName,
                  p.value
                ]
              },
              [
                s.value && o('div', { key: 'loading' }, [h]),
                o('div', { class: $, key: 'container' }, [x])
              ]
            )
          );
        }
        return u(h);
      }
    );
  }
});
oe.setDefaultIndicator = on;
oe.install = function(e) {
  return e.component(oe.name, oe), e;
};
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      i.forEach(function(r) {
        an(e, r, n[r]);
      });
  }
  return e;
}
function an(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var $e = function(t, n) {
  var i = Ne({}, t, n.attrs);
  return o(ue, Ne({}, i, { icon: Ot }), null);
};
$e.displayName = 'DoubleLeftOutlined';
$e.inheritAttrs = !1;
const Ee = $e;
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      i.forEach(function(r) {
        ln(e, r, n[r]);
      });
  }
  return e;
}
function ln(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
var Ce = function(t, n) {
  var i = Me({}, t, n.attrs);
  return o(ue, Me({}, i, { icon: zt }), null);
};
Ce.displayName = 'DoubleRightOutlined';
Ce.inheritAttrs = !1;
const je = Ce,
  sn = E({
    name: 'MiniSelect',
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: Ge(),
    Option: ae.Option,
    setup(e, t) {
      let { attrs: n, slots: i } = t;
      return () => {
        const r = d(d(d({}, e), { size: 'small' }), n);
        return o(ae, r, i);
      };
    }
  }),
  cn = E({
    name: 'MiddleSelect',
    inheritAttrs: !1,
    props: Ge(),
    Option: ae.Option,
    setup(e, t) {
      let { attrs: n, slots: i } = t;
      return () => {
        const r = d(d(d({}, e), { size: 'middle' }), n);
        return o(ae, r, i);
      };
    }
  }),
  H = E({
    compatConfig: { MODE: 3 },
    name: 'Pager',
    inheritAttrs: !1,
    props: {
      rootPrefixCls: String,
      page: Number,
      active: { type: Boolean, default: void 0 },
      last: { type: Boolean, default: void 0 },
      locale: I.object,
      showTitle: { type: Boolean, default: void 0 },
      itemRender: { type: Function, default: () => {} },
      onClick: { type: Function },
      onKeypress: { type: Function }
    },
    eimt: ['click', 'keypress'],
    setup(e, t) {
      let { emit: n, attrs: i } = t;
      const r = () => {
          n('click', e.page);
        },
        C = c => {
          n('keypress', c, r, e.page);
        };
      return () => {
        const { showTitle: c, page: u, itemRender: p } = e,
          { class: s, style: a } = i,
          f = `${e.rootPrefixCls}-item`,
          g = B(
            f,
            `${f}-${e.page}`,
            { [`${f}-active`]: e.active, [`${f}-disabled`]: !e.page },
            s
          );
        return o(
          'li',
          {
            onClick: r,
            onKeypress: C,
            title: c ? String(u) : null,
            tabindex: '0',
            class: g,
            style: a
          },
          [
            p({
              page: u,
              type: 'page',
              originalElement: o('a', { rel: 'nofollow' }, [u])
            })
          ]
        );
      };
    }
  }),
  F = {
    ZERO: 48,
    NINE: 57,
    NUMPAD_ZERO: 96,
    NUMPAD_NINE: 105,
    BACKSPACE: 8,
    DELETE: 46,
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40
  },
  un = E({
    compatConfig: { MODE: 3 },
    props: {
      disabled: { type: Boolean, default: void 0 },
      changeSize: Function,
      quickGo: Function,
      selectComponentClass: I.any,
      current: Number,
      pageSizeOptions: I.array.def(['10', '20', '50', '100']),
      pageSize: Number,
      buildOptionText: Function,
      locale: I.object,
      rootPrefixCls: String,
      selectPrefixCls: String,
      goButton: I.any
    },
    setup(e) {
      const t = He(''),
        n = G(() => (!t.value || isNaN(t.value) ? void 0 : Number(t.value))),
        i = p => `${p.value} ${e.locale.items_per_page}`,
        r = p => {
          const { value: s } = p.target;
          t.value !== s && (t.value = s);
        },
        C = p => {
          const { goButton: s, quickGo: a, rootPrefixCls: f } = e;
          if (!(s || t.value === ''))
            if (
              p.relatedTarget &&
              (p.relatedTarget.className.indexOf(`${f}-item-link`) >= 0 ||
                p.relatedTarget.className.indexOf(`${f}-item`) >= 0)
            ) {
              t.value = '';
              return;
            } else a(n.value), (t.value = '');
        },
        c = p => {
          t.value !== '' &&
            (p.keyCode === F.ENTER || p.type === 'click') &&
            (e.quickGo(n.value), (t.value = ''));
        },
        u = G(() => {
          const { pageSize: p, pageSizeOptions: s } = e;
          return s.some(a => a.toString() === p.toString())
            ? s
            : s.concat([p.toString()]).sort((a, f) => {
                const g = isNaN(Number(a)) ? 0 : Number(a),
                  m = isNaN(Number(f)) ? 0 : Number(f);
                return g - m;
              });
        });
      return () => {
        const {
            rootPrefixCls: p,
            locale: s,
            changeSize: a,
            quickGo: f,
            goButton: g,
            selectComponentClass: m,
            selectPrefixCls: v,
            pageSize: y,
            disabled: x
          } = e,
          l = `${p}-options`;
        let S = null,
          h = null,
          $ = null;
        if (!a && !f) return null;
        if (a && m) {
          const P = e.buildOptionText || i,
            b = u.value.map((O, W) =>
              o(
                m.Option,
                { key: W, value: O },
                { default: () => [P({ value: O })] }
              )
            );
          S = o(
            m,
            {
              disabled: x,
              prefixCls: v,
              showSearch: !1,
              class: `${l}-size-changer`,
              optionLabelProp: 'children',
              value: (y || u.value[0]).toString(),
              onChange: O => a(Number(O)),
              getPopupContainer: O => O.parentNode
            },
            { default: () => [b] }
          );
        }
        return (
          f &&
            (g &&
              ($ =
                typeof g == 'boolean'
                  ? o(
                      'button',
                      {
                        type: 'button',
                        onClick: c,
                        onKeyup: c,
                        disabled: x,
                        class: `${l}-quick-jumper-button`
                      },
                      [s.jump_to_confirm]
                    )
                  : o('span', { onClick: c, onKeyup: c }, [g])),
            (h = o('div', { class: `${l}-quick-jumper` }, [
              s.jump_to,
              o(
                Xe,
                {
                  disabled: x,
                  type: 'text',
                  value: t.value,
                  onInput: r,
                  onChange: r,
                  onKeyup: c,
                  onBlur: C
                },
                null
              ),
              s.page,
              $
            ]))),
          o('li', { class: `${l}` }, [S, h])
        );
      };
    }
  }),
  pn = {
    items_per_page: '条/页',
    jump_to: '跳至',
    jump_to_confirm: '确定',
    page: '页',
    prev_page: '上一页',
    next_page: '下一页',
    prev_5: '向前 5 页',
    next_5: '向后 5 页',
    prev_3: '向前 3 页',
    next_3: '向后 3 页'
  };
var dn =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        t.indexOf(i) < 0 &&
        (n[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
        t.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
          (n[i[r]] = e[i[r]]);
    return n;
  };
function gn(e) {
  return typeof e == 'number' && isFinite(e) && Math.floor(e) === e;
}
function mn(e) {
  let { originalElement: t } = e;
  return t;
}
function M(e, t, n) {
  const i = typeof e > 'u' ? t.statePageSize : e;
  return Math.floor((n.total - 1) / i) + 1;
}
const hn = E({
    compatConfig: { MODE: 3 },
    name: 'Pagination',
    mixins: [xt],
    inheritAttrs: !1,
    props: {
      disabled: { type: Boolean, default: void 0 },
      prefixCls: I.string.def('rc-pagination'),
      selectPrefixCls: I.string.def('rc-select'),
      current: Number,
      defaultCurrent: I.number.def(1),
      total: I.number.def(0),
      pageSize: Number,
      defaultPageSize: I.number.def(10),
      hideOnSinglePage: { type: Boolean, default: !1 },
      showSizeChanger: { type: Boolean, default: void 0 },
      showLessItems: { type: Boolean, default: !1 },
      selectComponentClass: I.any,
      showPrevNextJumpers: { type: Boolean, default: !0 },
      showQuickJumper: I.oneOfType([I.looseBool, I.object]).def(!1),
      showTitle: { type: Boolean, default: !0 },
      pageSizeOptions: I.arrayOf(I.oneOfType([I.number, I.string])),
      buildOptionText: Function,
      showTotal: Function,
      simple: { type: Boolean, default: void 0 },
      locale: I.object.def(pn),
      itemRender: I.func.def(mn),
      prevIcon: I.any,
      nextIcon: I.any,
      jumpPrevIcon: I.any,
      jumpNextIcon: I.any,
      totalBoundaryShowSizeChanger: I.number.def(50)
    },
    data() {
      const e = this.$props;
      let t = ze([this.current, this.defaultCurrent]);
      const n = ze([this.pageSize, this.defaultPageSize]);
      return (
        (t = Math.min(t, M(n, void 0, e))),
        { stateCurrent: t, stateCurrentInputValue: t, statePageSize: n }
      );
    },
    watch: {
      current(e) {
        this.setState({ stateCurrent: e, stateCurrentInputValue: e });
      },
      pageSize(e) {
        const t = {};
        let n = this.stateCurrent;
        const i = M(e, this.$data, this.$props);
        (n = n > i ? i : n),
          U(this, 'current') ||
            ((t.stateCurrent = n), (t.stateCurrentInputValue = n)),
          (t.statePageSize = e),
          this.setState(t);
      },
      stateCurrent(e, t) {
        this.$nextTick(() => {
          if (this.$refs.paginationNode) {
            const n = this.$refs.paginationNode.querySelector(
              `.${this.prefixCls}-item-${t}`
            );
            n && document.activeElement === n && n.blur();
          }
        });
      },
      total() {
        const e = {},
          t = M(this.pageSize, this.$data, this.$props);
        if (U(this, 'current')) {
          const n = Math.min(this.current, t);
          (e.stateCurrent = n), (e.stateCurrentInputValue = n);
        } else {
          let n = this.stateCurrent;
          n === 0 && t > 0 ? (n = 1) : (n = Math.min(this.stateCurrent, t)),
            (e.stateCurrent = n);
        }
        this.setState(e);
      }
    },
    methods: {
      getJumpPrevPage() {
        return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
      },
      getJumpNextPage() {
        return Math.min(
          M(void 0, this.$data, this.$props),
          this.stateCurrent + (this.showLessItems ? 3 : 5)
        );
      },
      getItemIcon(e, t) {
        const { prefixCls: n } = this.$props;
        return (
          tt(this, e, this.$props) ||
          o(
            'button',
            { type: 'button', 'aria-label': t, class: `${n}-item-link` },
            null
          )
        );
      },
      getValidValue(e) {
        const t = e.target.value,
          n = M(void 0, this.$data, this.$props),
          { stateCurrentInputValue: i } = this.$data;
        let r;
        return (
          t === ''
            ? (r = t)
            : isNaN(Number(t))
            ? (r = i)
            : t >= n
            ? (r = n)
            : (r = Number(t)),
          r
        );
      },
      isValid(e) {
        return gn(e) && e !== this.stateCurrent;
      },
      shouldDisplayQuickJumper() {
        const { showQuickJumper: e, pageSize: t, total: n } = this.$props;
        return n <= t ? !1 : e;
      },
      handleKeyDown(e) {
        (e.keyCode === F.ARROW_UP || e.keyCode === F.ARROW_DOWN) &&
          e.preventDefault();
      },
      handleKeyUp(e) {
        const t = this.getValidValue(e),
          n = this.stateCurrentInputValue;
        t !== n && this.setState({ stateCurrentInputValue: t }),
          e.keyCode === F.ENTER
            ? this.handleChange(t)
            : e.keyCode === F.ARROW_UP
            ? this.handleChange(t - 1)
            : e.keyCode === F.ARROW_DOWN && this.handleChange(t + 1);
      },
      changePageSize(e) {
        let t = this.stateCurrent;
        const n = t,
          i = M(e, this.$data, this.$props);
        (t = t > i ? i : t),
          i === 0 && (t = this.stateCurrent),
          typeof e == 'number' &&
            (U(this, 'pageSize') || this.setState({ statePageSize: e }),
            U(this, 'current') ||
              this.setState({ stateCurrent: t, stateCurrentInputValue: t })),
          this.__emit('update:pageSize', e),
          t !== n && this.__emit('update:current', t),
          this.__emit('showSizeChange', t, e),
          this.__emit('change', t, e);
      },
      handleChange(e) {
        const { disabled: t } = this.$props;
        let n = e;
        if (this.isValid(n) && !t) {
          const i = M(void 0, this.$data, this.$props);
          return (
            n > i ? (n = i) : n < 1 && (n = 1),
            U(this, 'current') ||
              this.setState({ stateCurrent: n, stateCurrentInputValue: n }),
            this.__emit('update:current', n),
            this.__emit('change', n, this.statePageSize),
            n
          );
        }
        return this.stateCurrent;
      },
      prev() {
        this.hasPrev() && this.handleChange(this.stateCurrent - 1);
      },
      next() {
        this.hasNext() && this.handleChange(this.stateCurrent + 1);
      },
      jumpPrev() {
        this.handleChange(this.getJumpPrevPage());
      },
      jumpNext() {
        this.handleChange(this.getJumpNextPage());
      },
      hasPrev() {
        return this.stateCurrent > 1;
      },
      hasNext() {
        return this.stateCurrent < M(void 0, this.$data, this.$props);
      },
      getShowSizeChanger() {
        const {
          showSizeChanger: e,
          total: t,
          totalBoundaryShowSizeChanger: n
        } = this.$props;
        return typeof e < 'u' ? e : t > n;
      },
      runIfEnter(e, t) {
        if (e.key === 'Enter' || e.charCode === 13) {
          e.preventDefault();
          for (
            var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2;
            r < n;
            r++
          )
            i[r - 2] = arguments[r];
          t(...i);
        }
      },
      runIfEnterPrev(e) {
        this.runIfEnter(e, this.prev);
      },
      runIfEnterNext(e) {
        this.runIfEnter(e, this.next);
      },
      runIfEnterJumpPrev(e) {
        this.runIfEnter(e, this.jumpPrev);
      },
      runIfEnterJumpNext(e) {
        this.runIfEnter(e, this.jumpNext);
      },
      handleGoTO(e) {
        (e.keyCode === F.ENTER || e.type === 'click') &&
          this.handleChange(this.stateCurrentInputValue);
      },
      renderPrev(e) {
        const { itemRender: t } = this.$props,
          n = t({
            page: e,
            type: 'prev',
            originalElement: this.getItemIcon('prevIcon', 'prev page')
          }),
          i = !this.hasPrev();
        return xe(n) ? he(n, i ? { disabled: i } : {}) : n;
      },
      renderNext(e) {
        const { itemRender: t } = this.$props,
          n = t({
            page: e,
            type: 'next',
            originalElement: this.getItemIcon('nextIcon', 'next page')
          }),
          i = !this.hasNext();
        return xe(n) ? he(n, i ? { disabled: i } : {}) : n;
      }
    },
    render() {
      const {
          prefixCls: e,
          disabled: t,
          hideOnSinglePage: n,
          total: i,
          locale: r,
          showQuickJumper: C,
          showLessItems: c,
          showTitle: u,
          showTotal: p,
          simple: s,
          itemRender: a,
          showPrevNextJumpers: f,
          jumpPrevIcon: g,
          jumpNextIcon: m,
          selectComponentClass: v,
          selectPrefixCls: y,
          pageSizeOptions: x
        } = this.$props,
        { stateCurrent: l, statePageSize: S } = this,
        h = nt(this.$attrs).extraAttrs,
        { class: $ } = h,
        P = dn(h, ['class']);
      if (n === !0 && this.total <= S) return null;
      const b = M(void 0, this.$data, this.$props),
        O = [];
      let W = null,
        Y = null,
        k = null,
        ee = null,
        T = null;
      const w = C && C.goButton,
        D = c ? 1 : 2,
        te = l - 1 > 0 ? l - 1 : 0,
        X = l + 1 < b ? l + 1 : b,
        N = this.hasPrev(),
        j = this.hasNext();
      if (s)
        return (
          w &&
            (typeof w == 'boolean'
              ? (T = o(
                  'button',
                  {
                    type: 'button',
                    onClick: this.handleGoTO,
                    onKeyup: this.handleGoTO
                  },
                  [r.jump_to_confirm]
                ))
              : (T = o(
                  'span',
                  { onClick: this.handleGoTO, onKeyup: this.handleGoTO },
                  [w]
                )),
            (T = o(
              'li',
              {
                title: u ? `${r.jump_to}${l}/${b}` : null,
                class: `${e}-simple-pager`
              },
              [T]
            ))),
          o(
            'ul',
            z({ class: B(`${e} ${e}-simple`, { [`${e}-disabled`]: t }, $) }, P),
            [
              o(
                'li',
                {
                  title: u ? r.prev_page : null,
                  onClick: this.prev,
                  tabindex: N ? 0 : null,
                  onKeypress: this.runIfEnterPrev,
                  class: B(`${e}-prev`, { [`${e}-disabled`]: !N }),
                  'aria-disabled': !N
                },
                [this.renderPrev(te)]
              ),
              o(
                'li',
                { title: u ? `${l}/${b}` : null, class: `${e}-simple-pager` },
                [
                  o(
                    Xe,
                    {
                      type: 'text',
                      value: this.stateCurrentInputValue,
                      disabled: t,
                      onKeydown: this.handleKeyDown,
                      onKeyup: this.handleKeyUp,
                      onInput: this.handleKeyUp,
                      onChange: this.handleKeyUp,
                      size: '3'
                    },
                    null
                  ),
                  o('span', { class: `${e}-slash` }, [Fe('／')]),
                  b
                ]
              ),
              o(
                'li',
                {
                  title: u ? r.next_page : null,
                  onClick: this.next,
                  tabindex: j ? 0 : null,
                  onKeypress: this.runIfEnterNext,
                  class: B(`${e}-next`, { [`${e}-disabled`]: !j }),
                  'aria-disabled': !j
                },
                [this.renderNext(X)]
              ),
              T
            ]
          )
        );
      if (b <= 3 + D * 2) {
        const ie = {
          locale: r,
          rootPrefixCls: e,
          showTitle: u,
          itemRender: a,
          onClick: this.handleChange,
          onKeypress: this.runIfEnter
        };
        b ||
          O.push(
            o(
              H,
              z(
                z({}, ie),
                {},
                { key: 'noPager', page: 1, class: `${e}-item-disabled` }
              ),
              null
            )
          );
        for (let _ = 1; _ <= b; _ += 1) {
          const R = l === _;
          O.push(o(H, z(z({}, ie), {}, { key: _, page: _, active: R }), null));
        }
      } else {
        const ie = c ? r.prev_3 : r.prev_5,
          _ = c ? r.next_3 : r.next_5;
        f &&
          ((W = o(
            'li',
            {
              title: this.showTitle ? ie : null,
              key: 'prev',
              onClick: this.jumpPrev,
              tabindex: '0',
              onKeypress: this.runIfEnterJumpPrev,
              class: B(`${e}-jump-prev`, {
                [`${e}-jump-prev-custom-icon`]: !!g
              })
            },
            [
              a({
                page: this.getJumpPrevPage(),
                type: 'jump-prev',
                originalElement: this.getItemIcon('jumpPrevIcon', 'prev page')
              })
            ]
          )),
          (Y = o(
            'li',
            {
              title: this.showTitle ? _ : null,
              key: 'next',
              tabindex: '0',
              onClick: this.jumpNext,
              onKeypress: this.runIfEnterJumpNext,
              class: B(`${e}-jump-next`, {
                [`${e}-jump-next-custom-icon`]: !!m
              })
            },
            [
              a({
                page: this.getJumpNextPage(),
                type: 'jump-next',
                originalElement: this.getItemIcon('jumpNextIcon', 'next page')
              })
            ]
          ))),
          (ee = o(
            H,
            {
              locale: r,
              last: !0,
              rootPrefixCls: e,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: b,
              page: b,
              active: !1,
              showTitle: u,
              itemRender: a
            },
            null
          )),
          (k = o(
            H,
            {
              locale: r,
              rootPrefixCls: e,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: 1,
              page: 1,
              active: !1,
              showTitle: u,
              itemRender: a
            },
            null
          ));
        let R = Math.max(1, l - D),
          K = Math.min(l + D, b);
        l - 1 <= D && (K = 1 + D * 2), b - l <= D && (R = b - D * 2);
        for (let J = R; J <= K; J += 1) {
          const qe = l === J;
          O.push(
            o(
              H,
              {
                locale: r,
                rootPrefixCls: e,
                onClick: this.handleChange,
                onKeypress: this.runIfEnter,
                key: J,
                page: J,
                active: qe,
                showTitle: u,
                itemRender: a
              },
              null
            )
          );
        }
        l - 1 >= D * 2 &&
          l !== 1 + 2 &&
          ((O[0] = o(
            H,
            {
              locale: r,
              rootPrefixCls: e,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: R,
              page: R,
              class: `${e}-item-after-jump-prev`,
              active: !1,
              showTitle: this.showTitle,
              itemRender: a
            },
            null
          )),
          O.unshift(W)),
          b - l >= D * 2 &&
            l !== b - 2 &&
            ((O[O.length - 1] = o(
              H,
              {
                locale: r,
                rootPrefixCls: e,
                onClick: this.handleChange,
                onKeypress: this.runIfEnter,
                key: K,
                page: K,
                class: `${e}-item-before-jump-next`,
                active: !1,
                showTitle: this.showTitle,
                itemRender: a
              },
              null
            )),
            O.push(Y)),
          R !== 1 && O.unshift(k),
          K !== b && O.push(ee);
      }
      let ne = null;
      p &&
        (ne = o('li', { class: `${e}-total-text` }, [
          p(i, [i === 0 ? 0 : (l - 1) * S + 1, l * S > i ? i : l * S])
        ]));
      const V = !N || !b,
        pe = !j || !b,
        Ue = this.buildOptionText || this.$slots.buildOptionText;
      return o(
        'ul',
        z(
          z({ unselectable: 'on', ref: 'paginationNode' }, P),
          {},
          { class: B({ [`${e}`]: !0, [`${e}-disabled`]: t }, $) }
        ),
        [
          ne,
          o(
            'li',
            {
              title: u ? r.prev_page : null,
              onClick: this.prev,
              tabindex: V ? null : 0,
              onKeypress: this.runIfEnterPrev,
              class: B(`${e}-prev`, { [`${e}-disabled`]: V }),
              'aria-disabled': V
            },
            [this.renderPrev(te)]
          ),
          O,
          o(
            'li',
            {
              title: u ? r.next_page : null,
              onClick: this.next,
              tabindex: pe ? null : 0,
              onKeypress: this.runIfEnterNext,
              class: B(`${e}-next`, { [`${e}-disabled`]: pe }),
              'aria-disabled': pe
            },
            [this.renderNext(X)]
          ),
          o(
            un,
            {
              disabled: t,
              locale: r,
              rootPrefixCls: e,
              selectComponentClass: v,
              selectPrefixCls: y,
              changeSize: this.getShowSizeChanger()
                ? this.changePageSize
                : null,
              current: l,
              pageSize: S,
              pageSizeOptions: x,
              buildOptionText: Ue || null,
              quickGo: this.shouldDisplayQuickJumper()
                ? this.handleChange
                : null,
              goButton: w
            },
            null
          )
        ]
      );
    }
  }),
  fn = e => {
    const { componentCls: t } = e;
    return {
      [`${t}-disabled`]: {
        '&, &:hover': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed'
          }
        },
        '&:focus-visible': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed'
          }
        }
      },
      [`&${t}-disabled`]: {
        cursor: 'not-allowed',
        [`&${t}-mini`]: {
          [`
          &:hover ${t}-item:not(${t}-item-active),
          &:active ${t}-item:not(${t}-item-active),
          &:hover ${t}-item-link,
          &:active ${t}-item-link
        `]: { backgroundColor: 'transparent' }
        },
        [`${t}-item`]: {
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          a: {
            color: e.colorTextDisabled,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'not-allowed'
          },
          '&-active': {
            borderColor: e.colorBorder,
            backgroundColor: e.paginationItemDisabledBgActive,
            '&:hover, &:active': {
              backgroundColor: e.paginationItemDisabledBgActive
            },
            a: { color: e.paginationItemDisabledColorActive }
          }
        },
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          [`${t}-simple&`]: {
            backgroundColor: 'transparent',
            '&:hover, &:active': { backgroundColor: 'transparent' }
          }
        },
        [`${t}-simple-pager`]: { color: e.colorTextDisabled },
        [`${t}-jump-prev, ${t}-jump-next`]: {
          [`${t}-item-link-icon`]: { opacity: 0 },
          [`${t}-item-ellipsis`]: { opacity: 1 }
        }
      },
      [`&${t}-simple`]: {
        [`${t}-prev, ${t}-next`]: {
          [`&${t}-disabled ${t}-item-link`]: {
            '&:hover, &:active': { backgroundColor: 'transparent' }
          }
        }
      }
    };
  },
  vn = e => {
    const { componentCls: t } = e;
    return {
      [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`
      },
      [`&${t}-mini ${t}-item`]: {
        minWidth: e.paginationItemSizeSM,
        height: e.paginationItemSizeSM,
        margin: 0,
        lineHeight: `${e.paginationItemSizeSM - 2}px`
      },
      [`&${t}-mini ${t}-item:not(${t}-item-active)`]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&:hover': { backgroundColor: e.colorBgTextHover },
        '&:active': { backgroundColor: e.colorBgTextActive }
      },
      [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
        minWidth: e.paginationItemSizeSM,
        height: e.paginationItemSizeSM,
        margin: 0,
        lineHeight: `${e.paginationItemSizeSM}px`,
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover ${t}-item-link`]: {
          backgroundColor: 'transparent'
        }
      },
      [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&::after': {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`
        }
      },
      [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
        height: e.paginationItemSizeSM,
        marginInlineEnd: 0,
        lineHeight: `${e.paginationItemSizeSM}px`
      },
      [`&${t}-mini ${t}-options`]: {
        marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
        '&-size-changer': { top: e.paginationMiniOptionsSizeChangerTop },
        '&-quick-jumper': {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`,
          input: d(d({}, Tt(e)), {
            width: e.paginationMiniQuickJumperInputWidth,
            height: e.controlHeightSM
          })
        }
      }
    };
  },
  bn = e => {
    const { componentCls: t } = e;
    return {
      [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`,
        verticalAlign: 'top',
        [`${t}-item-link`]: {
          height: e.paginationItemSizeSM,
          backgroundColor: 'transparent',
          border: 0,
          '&:hover': { backgroundColor: e.colorBgTextHover },
          '&:active': { backgroundColor: e.colorBgTextActive },
          '&::after': {
            height: e.paginationItemSizeSM,
            lineHeight: `${e.paginationItemSizeSM}px`
          }
        }
      },
      [`&${t}-simple ${t}-simple-pager`]: {
        display: 'inline-block',
        height: e.paginationItemSizeSM,
        marginInlineEnd: e.marginXS,
        input: {
          boxSizing: 'border-box',
          height: '100%',
          marginInlineEnd: e.marginXS,
          padding: `0 ${e.paginationItemPaddingInline}px`,
          textAlign: 'center',
          backgroundColor: e.paginationItemInputBg,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `border-color ${e.motionDurationMid}`,
          color: 'inherit',
          '&:hover': { borderColor: e.colorPrimary },
          '&:focus': {
            borderColor: e.colorPrimaryHover,
            boxShadow: `${e.inputOutlineOffset}px 0 ${e.controlOutlineWidth}px ${e.controlOutline}`
          },
          '&[disabled]': {
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            cursor: 'not-allowed'
          }
        }
      }
    };
  },
  Sn = e => {
    const { componentCls: t } = e;
    return {
      [`${t}-jump-prev, ${t}-jump-next`]: {
        outline: 0,
        [`${t}-item-container`]: {
          position: 'relative',
          [`${t}-item-link-icon`]: {
            color: e.colorPrimary,
            fontSize: e.fontSizeSM,
            opacity: 0,
            transition: `all ${e.motionDurationMid}`,
            '&-svg': {
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              margin: 'auto'
            }
          },
          [`${t}-item-ellipsis`]: {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: 'block',
            margin: 'auto',
            color: e.colorTextDisabled,
            fontFamily: 'Arial, Helvetica, sans-serif',
            letterSpacing: e.paginationEllipsisLetterSpacing,
            textAlign: 'center',
            textIndent: e.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`
          }
        },
        '&:hover': {
          [`${t}-item-link-icon`]: { opacity: 1 },
          [`${t}-item-ellipsis`]: { opacity: 0 }
        },
        '&:focus-visible': d(
          {
            [`${t}-item-link-icon`]: { opacity: 1 },
            [`${t}-item-ellipsis`]: { opacity: 0 }
          },
          Ie(e)
        )
      },
      [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: { marginInlineEnd: e.marginXS },
      [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
        display: 'inline-block',
        minWidth: e.paginationItemSize,
        height: e.paginationItemSize,
        color: e.colorText,
        fontFamily: e.paginationFontFamily,
        lineHeight: `${e.paginationItemSize}px`,
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        borderRadius: e.borderRadius,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid}`
      },
      [`${t}-prev, ${t}-next`]: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        outline: 0,
        button: { color: e.colorText, cursor: 'pointer', userSelect: 'none' },
        [`${t}-item-link`]: {
          display: 'block',
          width: '100%',
          height: '100%',
          padding: 0,
          fontSize: e.fontSizeSM,
          textAlign: 'center',
          backgroundColor: 'transparent',
          border: `${e.lineWidth}px ${e.lineType} transparent`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `all ${e.motionDurationMid}`
        },
        [`&:focus-visible ${t}-item-link`]: d({}, Ie(e)),
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover`]: {
          [`${t}-item-link`]: { backgroundColor: 'transparent' }
        }
      },
      [`${t}-slash`]: {
        marginInlineEnd: e.paginationSlashMarginInlineEnd,
        marginInlineStart: e.paginationSlashMarginInlineStart
      },
      [`${t}-options`]: {
        display: 'inline-block',
        marginInlineStart: e.margin,
        verticalAlign: 'middle',
        '&-size-changer.-select': { display: 'inline-block', width: 'auto' },
        '&-quick-jumper': {
          display: 'inline-block',
          height: e.controlHeight,
          marginInlineStart: e.marginXS,
          lineHeight: `${e.controlHeight}px`,
          verticalAlign: 'top',
          input: d(d({}, Dt(e)), {
            width: e.controlHeightLG * 1.25,
            height: e.controlHeight,
            boxSizing: 'border-box',
            margin: 0,
            marginInlineStart: e.marginXS,
            marginInlineEnd: e.marginXS
          })
        }
      }
    };
  },
  $n = e => {
    const { componentCls: t } = e;
    return {
      [`${t}-item`]: d(
        d(
          {
            display: 'inline-block',
            minWidth: e.paginationItemSize,
            height: e.paginationItemSize,
            marginInlineEnd: e.marginXS,
            fontFamily: e.paginationFontFamily,
            lineHeight: `${e.paginationItemSize - 2}px`,
            textAlign: 'center',
            verticalAlign: 'middle',
            listStyle: 'none',
            backgroundColor: 'transparent',
            border: `${e.lineWidth}px ${e.lineType} transparent`,
            borderRadius: e.borderRadius,
            outline: 0,
            cursor: 'pointer',
            userSelect: 'none',
            a: {
              display: 'block',
              padding: `0 ${e.paginationItemPaddingInline}px`,
              color: e.colorText,
              transition: 'none',
              '&:hover': { textDecoration: 'none' }
            },
            [`&:not(${t}-item-active)`]: {
              '&:hover': {
                transition: `all ${e.motionDurationMid}`,
                backgroundColor: e.colorBgTextHover
              },
              '&:active': { backgroundColor: e.colorBgTextActive }
            }
          },
          it(e)
        ),
        {
          '&-active': {
            fontWeight: e.paginationFontWeightActive,
            backgroundColor: e.paginationItemBgActive,
            borderColor: e.colorPrimary,
            a: { color: e.colorPrimary },
            '&:hover': { borderColor: e.colorPrimaryHover },
            '&:hover a': { color: e.colorPrimaryHover }
          }
        }
      )
    };
  },
  Cn = e => {
    const { componentCls: t } = e;
    return {
      [t]: d(
        d(
          d(
            d(
              d(
                d(
                  d(d({}, ce(e)), {
                    'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                    '&::after': {
                      display: 'block',
                      clear: 'both',
                      height: 0,
                      overflow: 'hidden',
                      visibility: 'hidden',
                      content: '""'
                    },
                    [`${t}-total-text`]: {
                      display: 'inline-block',
                      height: e.paginationItemSize,
                      marginInlineEnd: e.marginXS,
                      lineHeight: `${e.paginationItemSize - 2}px`,
                      verticalAlign: 'middle'
                    }
                  }),
                  $n(e)
                ),
                Sn(e)
              ),
              bn(e)
            ),
            vn(e)
          ),
          fn(e)
        ),
        {
          [`@media only screen and (max-width: ${e.screenLG}px)`]: {
            [`${t}-item`]: {
              '&-after-jump-prev, &-before-jump-next': { display: 'none' }
            }
          },
          [`@media only screen and (max-width: ${e.screenSM}px)`]: {
            [`${t}-options`]: { display: 'none' }
          }
        }
      ),
      [`&${e.componentCls}-rtl`]: { direction: 'rtl' }
    };
  },
  yn = e => {
    const { componentCls: t } = e;
    return {
      [`${t}${t}-disabled`]: {
        '&, &:hover': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        '&:focus-visible': {
          [`${t}-item-link`]: { borderColor: e.colorBorder }
        },
        [`${t}-item, ${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          [`&:hover:not(${t}-item-active)`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            a: { color: e.colorTextDisabled }
          },
          [`&${t}-item-active`]: {
            backgroundColor: e.paginationItemDisabledBgActive
          }
        },
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            color: e.colorTextDisabled
          },
          [`${t}-item-link`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder
          }
        }
      },
      [t]: {
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            borderColor: e.colorPrimaryHover,
            backgroundColor: e.paginationItemBg
          },
          [`${t}-item-link`]: {
            backgroundColor: e.paginationItemLinkBg,
            borderColor: e.colorBorder
          },
          [`&:hover ${t}-item-link`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.paginationItemBg,
            color: e.colorPrimary
          },
          [`&${t}-disabled`]: {
            [`${t}-item-link`]: {
              borderColor: e.colorBorder,
              color: e.colorTextDisabled
            }
          }
        },
        [`${t}-item`]: {
          backgroundColor: e.paginationItemBg,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          [`&:hover:not(${t}-item-active)`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.paginationItemBg,
            a: { color: e.colorPrimary }
          },
          '&-active': { borderColor: e.colorPrimary }
        }
      }
    };
  },
  xn = le('Pagination', e => {
    const t = se(
      e,
      {
        paginationItemSize: e.controlHeight,
        paginationFontFamily: e.fontFamily,
        paginationItemBg: e.colorBgContainer,
        paginationItemBgActive: e.colorBgContainer,
        paginationFontWeightActive: e.fontWeightStrong,
        paginationItemSizeSM: e.controlHeightSM,
        paginationItemInputBg: e.colorBgContainer,
        paginationMiniOptionsSizeChangerTop: 0,
        paginationItemDisabledBgActive: e.controlItemBgActiveDisabled,
        paginationItemDisabledColorActive: e.colorTextDisabled,
        paginationItemLinkBg: e.colorBgContainer,
        inputOutlineOffset: '0 0',
        paginationMiniOptionsMarginInlineStart: e.marginXXS / 2,
        paginationMiniQuickJumperInputWidth: e.controlHeightLG * 1.1,
        paginationItemPaddingInline: e.marginXXS * 1.5,
        paginationEllipsisLetterSpacing: e.marginXXS / 2,
        paginationSlashMarginInlineStart: e.marginXXS,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: '0.13em'
      },
      wt(e)
    );
    return [Cn(t), e.wireframe && yn(t)];
  });
var In =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        t.indexOf(i) < 0 &&
        (n[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
        t.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
          (n[i[r]] = e[i[r]]);
    return n;
  };
const Pn = () => ({
    total: Number,
    defaultCurrent: Number,
    disabled: q(),
    current: Number,
    defaultPageSize: Number,
    pageSize: Number,
    hideOnSinglePage: q(),
    showSizeChanger: q(),
    pageSizeOptions: at(),
    buildOptionText: L(),
    showQuickJumper: lt([Boolean, Object]),
    showTotal: L(),
    size: st(),
    simple: q(),
    locale: Object,
    prefixCls: String,
    selectPrefixCls: String,
    totalBoundaryShowSizeChanger: Number,
    selectComponentClass: String,
    itemRender: L(),
    role: String,
    responsive: Boolean,
    showLessItems: q(),
    onChange: L(),
    onShowSizeChange: L(),
    'onUpdate:current': L(),
    'onUpdate:pageSize': L()
  }),
  On = E({
    compatConfig: { MODE: 3 },
    name: 'APagination',
    inheritAttrs: !1,
    props: Pn(),
    setup(e, t) {
      let { slots: n, attrs: i } = t;
      const { prefixCls: r, configProvider: C, direction: c, size: u } = Z(
          'pagination',
          e
        ),
        [p, s] = xn(r),
        a = G(() => C.getPrefixCls('select', e.selectPrefixCls)),
        f = Ve(),
        [g] = rt('Pagination', ot, mt(e, 'locale')),
        m = v => {
          const y = o('span', { class: `${v}-item-ellipsis` }, [Fe('•••')]),
            x = o(
              'button',
              { class: `${v}-item-link`, type: 'button', tabindex: -1 },
              [c.value === 'rtl' ? o(Te, null, null) : o(Be, null, null)]
            ),
            l = o(
              'button',
              { class: `${v}-item-link`, type: 'button', tabindex: -1 },
              [c.value === 'rtl' ? o(Be, null, null) : o(Te, null, null)]
            ),
            S = o('a', { rel: 'nofollow', class: `${v}-item-link` }, [
              o('div', { class: `${v}-item-container` }, [
                c.value === 'rtl'
                  ? o(je, { class: `${v}-item-link-icon` }, null)
                  : o(Ee, { class: `${v}-item-link-icon` }, null),
                y
              ])
            ]),
            h = o('a', { rel: 'nofollow', class: `${v}-item-link` }, [
              o('div', { class: `${v}-item-container` }, [
                c.value === 'rtl'
                  ? o(Ee, { class: `${v}-item-link-icon` }, null)
                  : o(je, { class: `${v}-item-link-icon` }, null),
                y
              ])
            ]);
          return { prevIcon: x, nextIcon: l, jumpPrevIcon: S, jumpNextIcon: h };
        };
      return () => {
        var v;
        const {
            itemRender: y = n.itemRender,
            buildOptionText: x = n.buildOptionText,
            selectComponentClass: l,
            responsive: S
          } = e,
          h = In(e, [
            'itemRender',
            'buildOptionText',
            'selectComponentClass',
            'responsive'
          ]),
          $ =
            u.value === 'small' ||
            !!(
              !((v = f.value) === null || v === void 0) &&
              v.xs &&
              !u.value &&
              S
            ),
          P = d(
            d(
              d(d(d({}, h), m(r.value)), {
                prefixCls: r.value,
                selectPrefixCls: a.value,
                selectComponentClass: l || ($ ? sn : cn),
                locale: g.value,
                buildOptionText: x
              }),
              i
            ),
            {
              class: B(
                {
                  [`${r.value}-mini`]: $,
                  [`${r.value}-rtl`]: c.value === 'rtl'
                },
                i.class,
                s.value
              ),
              itemRender: y
            }
          );
        return p(o(hn, P, null));
      };
    }
  }),
  En = Ae(On);
export { Q as A, En as P, Te as R, oe as S, Bt as e, Ve as u };
