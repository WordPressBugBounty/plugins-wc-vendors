import {
  K as Xn,
  e as ee,
  _ as c,
  P as ne,
  h as Se,
  b as N,
  o as _e,
  t as ot,
  A as Ae,
  g as St,
  m as yt,
  i as Un,
  r as wt,
  j as Ft,
  f as Wo,
  s as vt,
  k as Go,
  l as Vo,
  n as Xo,
  p as Uo,
  q as Ko,
  a as et,
  C as Wt,
  v as Kn,
  x as Yo,
  y as Zo,
  z as Qo,
  B as He,
  D as qo,
  E as Yn,
  F as Gt,
  G as Je,
  H as Jo,
  I as ea,
  J as ta,
  L as na,
  M as oa,
  N as aa,
  O as ia,
  Q as ra,
  R as At,
  S as la,
  T as sa,
  U as Zn,
  c as Pe,
  d as ca
} from '../main.df9e2abb.js';
import {
  s as j,
  l as st,
  d as Z,
  r as X,
  e as R,
  c as s,
  k as Ke,
  q as Ee,
  g as oe,
  p as Qn,
  f as qn,
  S as ua,
  U as Jn,
  V as eo,
  W as to,
  n as zt,
  y as Ue,
  F as ke,
  z as no,
  X as da,
  B as cn,
  u as L,
  Y as oo,
  Z as fa,
  I as pa,
  D as va,
  E as ma,
  L as ao,
  _ as ga,
  N as mt,
  w as re,
  P as Oe,
  $ as gt,
  a as at,
  O as Ze,
  o as Me,
  Q as ba,
  a0 as Fe,
  a1 as un,
  b as ya
} from './vendor.ff933118.js';
import {
  a as ht,
  i as ct,
  b as Vt,
  g as ha,
  e as Ca,
  M as io,
  c as ro,
  d as xa,
  f as $a,
  h as lo,
  j as Sa,
  k as wa,
  l as dn,
  m as Ta,
  w as Ie,
  K as le,
  n as fe,
  o as Pa,
  E as Oa,
  p as _a,
  q as Ia,
  D as Ea,
  R as kt,
  r as Na,
  s as fn,
  t as Re,
  v as Rt,
  x as Ba,
  y as lt,
  z as Ma,
  P as Aa,
  A as Ra,
  B as Ge,
  C as so,
  F as co,
  L as Da,
  G as La,
  H as za,
  I as ka,
  J as Qe,
  N as Ha,
  O as ja,
  Q as uo,
  T as Fa,
  U as Wa,
  V as Ga,
  W as fo,
  X as Dt,
  Y as Va,
  u as Xa,
  S as it
} from './VendorStore.9a3ea1f4.js';
import { A as pn, P as Ua, T as Ka } from './index.0e8dbddd.js';
import {
  P as Ya,
  R as Za,
  i as Qa,
  Z as qa,
  j as Ja,
  S as ei,
  T as qe,
  k as ti,
  l as ni,
  m as oi,
  n as ai
} from './antd.01cefdb7.js';
import { i as tt } from './initDefaultProps.14498c5d.js';
function ii(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
    a[n] = t(e[n], n, e);
  return a;
}
var ri = 1 / 0,
  vn = ht ? ht.prototype : void 0,
  mn = vn ? vn.toString : void 0;
function po(e) {
  if (typeof e == 'string') return e;
  if (ct(e)) return ii(e, po) + '';
  if (Vt(e)) return mn ? mn.call(e) : '';
  var t = e + '';
  return t == '0' && 1 / e == -ri ? '-0' : t;
}
function li(e) {
  return e;
}
function si(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var ci = 800,
  ui = 16,
  di = Date.now;
function fi(e) {
  var t = 0,
    n = 0;
  return function() {
    var o = di(),
      a = ui - (o - n);
    if (((n = o), a > 0)) {
      if (++t >= ci) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function pi(e) {
  return function() {
    return e;
  };
}
var vi = (function() {
  try {
    var e = ha(Object, 'defineProperty');
    return e({}, '', {}), e;
  } catch {}
})();
const Ct = vi;
var mi = Ct
  ? function(e, t) {
      return Ct(e, 'toString', {
        configurable: !0,
        enumerable: !1,
        value: pi(t),
        writable: !0
      });
    }
  : li;
const gi = mi;
var bi = fi(gi);
const yi = bi;
function hi(e, t, n) {
  t == '__proto__' && Ct
    ? Ct(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var Ci = Object.prototype,
  xi = Ci.hasOwnProperty;
function $i(e, t, n) {
  var o = e[t];
  (!(xi.call(e, t) && Ca(o, n)) || (n === void 0 && !(t in e))) && hi(e, t, n);
}
var gn = Math.max;
function Si(e, t, n) {
  return (
    (t = gn(t === void 0 ? e.length - 1 : t, 0)),
    function() {
      for (
        var o = arguments, a = -1, r = gn(o.length - t, 0), i = Array(r);
        ++a < r;

      )
        i[a] = o[t + a];
      a = -1;
      for (var l = Array(t + 1); ++a < t; ) l[a] = o[a];
      return (l[t] = n(i)), si(e, this, l);
    }
  );
}
var wi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Ti = /^\w*$/;
function Pi(e, t) {
  if (ct(e)) return !1;
  var n = typeof e;
  return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || Vt(e)
    ? !0
    : Ti.test(e) || !wi.test(e) || (t != null && e in Object(t));
}
var Oi = 'Expected a function';
function Xt(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(Oi);
  var n = function() {
    var o = arguments,
      a = t ? t.apply(this, o) : o[0],
      r = n.cache;
    if (r.has(a)) return r.get(a);
    var i = e.apply(this, o);
    return (n.cache = r.set(a, i) || r), i;
  };
  return (n.cache = new (Xt.Cache || io)()), n;
}
Xt.Cache = io;
var _i = 500;
function Ii(e) {
  var t = Xt(e, function(o) {
      return n.size === _i && n.clear(), o;
    }),
    n = t.cache;
  return t;
}
var Ei = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Ni = /\\(\\)?/g,
  Bi = Ii(function(e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(Ei, function(n, o, a, r) {
        t.push(a ? r.replace(Ni, '$1') : o || n);
      }),
      t
    );
  });
const Mi = Bi;
function Ai(e) {
  return e == null ? '' : po(e);
}
function Tt(e, t) {
  return ct(e) ? e : Pi(e, t) ? [e] : Mi(Ai(e));
}
var Ri = 1 / 0;
function Ut(e) {
  if (typeof e == 'string' || Vt(e)) return e;
  var t = e + '';
  return t == '0' && 1 / e == -Ri ? '-0' : t;
}
function Di(e, t) {
  t = Tt(t, e);
  for (var n = 0, o = t.length; e != null && n < o; ) e = e[Ut(t[n++])];
  return n && n == o ? e : void 0;
}
var bn = ht ? ht.isConcatSpreadable : void 0;
function Li(e) {
  return ct(e) || ro(e) || !!(bn && e && e[bn]);
}
function vo(e, t, n, o, a) {
  var r = -1,
    i = e.length;
  for (n || (n = Li), a || (a = []); ++r < i; ) {
    var l = e[r];
    t > 0 && n(l)
      ? t > 1
        ? vo(l, t - 1, n, o, a)
        : xa(a, l)
      : o || (a[a.length] = l);
  }
  return a;
}
function zi(e) {
  var t = e == null ? 0 : e.length;
  return t ? vo(e, 1) : [];
}
function ki(e) {
  return yi(Si(e, void 0, zi), e + '');
}
function Hi(e, t) {
  return e != null && t in Object(e);
}
function ji(e, t, n) {
  t = Tt(t, e);
  for (var o = -1, a = t.length, r = !1; ++o < a; ) {
    var i = Ut(t[o]);
    if (!(r = e != null && n(e, i))) break;
    e = e[i];
  }
  return r || ++o != a
    ? r
    : ((a = e == null ? 0 : e.length),
      !!a && $a(a) && lo(i, a) && (ct(e) || ro(e)));
}
function Fi(e, t) {
  return e != null && ji(e, t, Hi);
}
var Wi = '[object Number]';
function Gi(e) {
  return typeof e == 'number' || (Sa(e) && wa(e) == Wi);
}
function Vi(e, t, n, o) {
  if (!dn(e)) return e;
  t = Tt(t, e);
  for (var a = -1, r = t.length, i = r - 1, l = e; l != null && ++a < r; ) {
    var v = Ut(t[a]),
      m = n;
    if (v === '__proto__' || v === 'constructor' || v === 'prototype') return e;
    if (a != i) {
      var d = l[v];
      (m = o ? o(d, v, l) : void 0),
        m === void 0 && (m = dn(d) ? d : lo(t[a + 1]) ? [] : {});
    }
    $i(l, v, m), (l = l[v]);
  }
  return e;
}
function Xi(e, t, n) {
  for (var o = -1, a = t.length, r = {}; ++o < a; ) {
    var i = t[o],
      l = Di(e, i);
    n(l, i) && Vi(r, Tt(i, e), l);
  }
  return r;
}
function Ui(e, t) {
  return Xi(e, t, function(n, o) {
    return Fi(e, o);
  });
}
var Ki = ki(function(e, t) {
  return e == null ? {} : Ui(e, t);
});
const mo = Ki,
  Yi = new Xn('antFadeIn', { '0%': { opacity: 0 }, '100%': { opacity: 1 } }),
  Zi = new Xn('antFadeOut', { '0%': { opacity: 1 }, '100%': { opacity: 0 } }),
  go = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const { antCls: n } = e,
      o = `${n}-fade`,
      a = t ? '&' : '';
    return [
      Ta(o, Yi, Zi, e.motionDurationMid, t),
      {
        [`
        ${a}${o}-enter,
        ${a}${o}-appear
      `]: { opacity: 0, animationTimingFunction: 'linear' },
        [`${a}${o}-leave`]: { animationTimingFunction: 'linear' }
      }
    ];
  };
function Qi(e) {
  const t = j(),
    n = j(!1);
  function o() {
    for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
      r[i] = arguments[i];
    n.value ||
      (Ie.cancel(t.value),
      (t.value = Ie(() => {
        e(...r);
      })));
  }
  return (
    st(() => {
      (n.value = !0), Ie.cancel(t.value);
    }),
    o
  );
}
function qi(e) {
  const t = j([]),
    n = j(typeof e == 'function' ? e() : e),
    o = Qi(() => {
      let r = n.value;
      t.value.forEach(i => {
        r = i(r);
      }),
        (t.value = []),
        (n.value = r);
    });
  function a(r) {
    t.value.push(r), o();
  }
  return [n, a];
}
const Ji = Z({
    compatConfig: { MODE: 3 },
    name: 'TabNode',
    props: {
      id: { type: String },
      prefixCls: { type: String },
      tab: { type: Object },
      active: { type: Boolean },
      closable: { type: Boolean },
      editable: { type: Object },
      onClick: { type: Function },
      onResize: { type: Function },
      renderWrapper: { type: Function },
      removeAriaLabel: { type: String },
      onFocus: { type: Function }
    },
    emits: ['click', 'resize', 'remove', 'focus'],
    setup(e, t) {
      let { expose: n, attrs: o } = t;
      const a = X();
      function r(v) {
        var m;
        (!((m = e.tab) === null || m === void 0) && m.disabled) || e.onClick(v);
      }
      n({ domRef: a });
      function i(v) {
        var m;
        v.preventDefault(),
          v.stopPropagation(),
          e.editable.onEdit('remove', {
            key: (m = e.tab) === null || m === void 0 ? void 0 : m.key,
            event: v
          });
      }
      const l = R(() => {
        var v;
        return (
          e.editable &&
          e.closable !== !1 &&
          !(!((v = e.tab) === null || v === void 0) && v.disabled)
        );
      });
      return () => {
        var v;
        const {
            prefixCls: m,
            id: d,
            active: p,
            tab: { key: f, tab: u, disabled: C, closeIcon: b },
            renderWrapper: x,
            removeAriaLabel: $,
            editable: S,
            onFocus: y
          } = e,
          P = `${m}-tab`,
          g = s(
            'div',
            {
              key: f,
              ref: a,
              class: ee(P, {
                [`${P}-with-remove`]: l.value,
                [`${P}-active`]: p,
                [`${P}-disabled`]: C
              }),
              style: o.style,
              onClick: r
            },
            [
              s(
                'div',
                {
                  role: 'tab',
                  'aria-selected': p,
                  id: d && `${d}-tab-${f}`,
                  class: `${P}-btn`,
                  'aria-controls': d && `${d}-panel-${f}`,
                  'aria-disabled': C,
                  tabindex: C ? null : 0,
                  onClick: T => {
                    T.stopPropagation(), r(T);
                  },
                  onKeydown: T => {
                    [le.SPACE, le.ENTER].includes(T.which) &&
                      (T.preventDefault(), r(T));
                  },
                  onFocus: y
                },
                [typeof u == 'function' ? u() : u]
              ),
              l.value &&
                s(
                  'button',
                  {
                    type: 'button',
                    'aria-label': $ || 'remove',
                    tabindex: 0,
                    class: `${P}-remove`,
                    onClick: T => {
                      T.stopPropagation(), i(T);
                    }
                  },
                  [
                    (b == null ? void 0 : b()) ||
                      ((v = S.removeIcon) === null || v === void 0
                        ? void 0
                        : v.call(S)) ||
                      '×'
                  ]
                )
            ]
          );
        return x ? x(g) : g;
      };
    }
  }),
  yn = { width: 0, height: 0, left: 0, top: 0 };
function er(e, t) {
  const n = X(new Map());
  return (
    Ke(() => {
      var o, a;
      const r = new Map(),
        i = e.value,
        l =
          t.value.get((o = i[0]) === null || o === void 0 ? void 0 : o.key) ||
          yn,
        v = l.left + l.width;
      for (let m = 0; m < i.length; m += 1) {
        const { key: d } = i[m];
        let p = t.value.get(d);
        p ||
          (p =
            t.value.get(
              (a = i[m - 1]) === null || a === void 0 ? void 0 : a.key
            ) || yn);
        const f = r.get(d) || c({}, p);
        (f.right = v - f.left - f.width), r.set(d, f);
      }
      n.value = new Map(r);
    }),
    n
  );
}
const bo = Z({
    compatConfig: { MODE: 3 },
    name: 'AddButton',
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      editable: { type: Object },
      locale: { type: Object, default: void 0 }
    },
    setup(e, t) {
      let { expose: n, attrs: o } = t;
      const a = X();
      return (
        n({ domRef: a }),
        () => {
          const { prefixCls: r, editable: i, locale: l } = e;
          return !i || i.showAdd === !1
            ? null
            : s(
                'button',
                {
                  ref: a,
                  type: 'button',
                  class: `${r}-nav-add`,
                  style: o.style,
                  'aria-label':
                    (l == null ? void 0 : l.addAriaLabel) || 'Add tab',
                  onClick: v => {
                    i.onEdit('add', { event: v });
                  }
                },
                [i.addIcon ? i.addIcon() : '+']
              );
        }
      );
    }
  }),
  tr = {
    prefixCls: { type: String },
    id: { type: String },
    tabs: { type: Object },
    rtl: { type: Boolean },
    tabBarGutter: { type: Number },
    activeKey: { type: [String, Number] },
    mobile: { type: Boolean },
    moreIcon: ne.any,
    moreTransitionName: { type: String },
    editable: { type: Object },
    locale: { type: Object, default: void 0 },
    removeAriaLabel: String,
    onTabClick: { type: Function },
    popupClassName: String,
    getPopupContainer: Se()
  },
  nr = Z({
    compatConfig: { MODE: 3 },
    name: 'OperationNode',
    inheritAttrs: !1,
    props: tr,
    emits: ['tabClick'],
    slots: Object,
    setup(e, t) {
      let { attrs: n, slots: o } = t;
      const [a, r] = fe(!1),
        [i, l] = fe(null),
        v = u => {
          const C = e.tabs.filter($ => !$.disabled);
          let b = C.findIndex($ => $.key === i.value) || 0;
          const x = C.length;
          for (let $ = 0; $ < x; $ += 1) {
            b = (b + u + x) % x;
            const S = C[b];
            if (!S.disabled) {
              l(S.key);
              return;
            }
          }
        },
        m = u => {
          const { which: C } = u;
          if (!a.value) {
            [le.DOWN, le.SPACE, le.ENTER].includes(C) &&
              (r(!0), u.preventDefault());
            return;
          }
          switch (C) {
            case le.UP:
              v(-1), u.preventDefault();
              break;
            case le.DOWN:
              v(1), u.preventDefault();
              break;
            case le.ESC:
              r(!1);
              break;
            case le.SPACE:
            case le.ENTER:
              i.value !== null && e.onTabClick(i.value, u);
              break;
          }
        },
        d = R(() => `${e.id}-more-popup`),
        p = R(() => (i.value !== null ? `${d.value}-${i.value}` : null)),
        f = (u, C) => {
          u.preventDefault(),
            u.stopPropagation(),
            e.editable.onEdit('remove', { key: C, event: u });
        };
      return (
        Ee(() => {
          oe(
            i,
            () => {
              const u = document.getElementById(p.value);
              u && u.scrollIntoView && u.scrollIntoView(!1);
            },
            { flush: 'post', immediate: !0 }
          );
        }),
        oe(a, () => {
          a.value || l(null);
        }),
        Pa({}),
        () => {
          var u;
          const {
            prefixCls: C,
            id: b,
            tabs: x,
            locale: $,
            mobile: S,
            moreIcon: y = ((u = o.moreIcon) === null || u === void 0
              ? void 0
              : u.call(o)) || s(Oa, null, null),
            moreTransitionName: P,
            editable: g,
            tabBarGutter: T,
            rtl: w,
            onTabClick: E,
            popupClassName: k
          } = e;
          if (!x.length) return null;
          const D = `${C}-dropdown`,
            G = $ == null ? void 0 : $.dropdownAriaLabel,
            Q = { [w ? 'marginRight' : 'marginLeft']: T };
          x.length || ((Q.visibility = 'hidden'), (Q.order = 1));
          const K = ee({ [`${D}-rtl`]: w, [`${k}`]: !0 }),
            te = S
              ? null
              : s(
                  Ea,
                  {
                    prefixCls: D,
                    trigger: ['hover'],
                    visible: a.value,
                    transitionName: P,
                    onVisibleChange: r,
                    overlayClassName: K,
                    mouseEnterDelay: 0.1,
                    mouseLeaveDelay: 0.1,
                    getPopupContainer: e.getPopupContainer
                  },
                  {
                    overlay: () =>
                      s(
                        _a,
                        {
                          onClick: h => {
                            let { key: O, domEvent: I } = h;
                            E(O, I), r(!1);
                          },
                          id: d.value,
                          tabindex: -1,
                          role: 'listbox',
                          'aria-activedescendant': p.value,
                          selectedKeys: [i.value],
                          'aria-label': G !== void 0 ? G : 'expanded dropdown'
                        },
                        {
                          default: () => [
                            x.map(h => {
                              var O, I;
                              const _ = g && h.closable !== !1 && !h.disabled;
                              return s(
                                Ia,
                                {
                                  key: h.key,
                                  id: `${d.value}-${h.key}`,
                                  role: 'option',
                                  'aria-controls': b && `${b}-panel-${h.key}`,
                                  disabled: h.disabled
                                },
                                {
                                  default: () => [
                                    s('span', null, [
                                      typeof h.tab == 'function'
                                        ? h.tab()
                                        : h.tab
                                    ]),
                                    _ &&
                                      s(
                                        'button',
                                        {
                                          type: 'button',
                                          'aria-label':
                                            e.removeAriaLabel || 'remove',
                                          tabindex: 0,
                                          class: `${D}-menu-item-remove`,
                                          onClick: z => {
                                            z.stopPropagation(), f(z, h.key);
                                          }
                                        },
                                        [
                                          ((O = h.closeIcon) === null ||
                                          O === void 0
                                            ? void 0
                                            : O.call(h)) ||
                                            ((I = g.removeIcon) === null ||
                                            I === void 0
                                              ? void 0
                                              : I.call(g)) ||
                                            '×'
                                        ]
                                      )
                                  ]
                                }
                              );
                            })
                          ]
                        }
                      ),
                    default: () =>
                      s(
                        'button',
                        {
                          type: 'button',
                          class: `${C}-nav-more`,
                          style: Q,
                          tabindex: -1,
                          'aria-hidden': 'true',
                          'aria-haspopup': 'listbox',
                          'aria-controls': d.value,
                          id: `${b}-more`,
                          'aria-expanded': a.value,
                          onKeydown: m
                        },
                        [y]
                      )
                  }
                );
          return s(
            'div',
            { class: ee(`${C}-nav-operations`, n.class), style: n.style },
            [te, s(bo, { prefixCls: C, locale: $, editable: g }, null)]
          );
        }
      );
    }
  }),
  yo = Symbol('tabsContextKey'),
  or = e => {
    Qn(yo, e);
  },
  ho = () => qn(yo, { tabs: X([]), prefixCls: X() }),
  ar = 0.1,
  hn = 0.01,
  bt = 20,
  Cn = Math.pow(0.995, bt);
function ir(e, t) {
  const [n, o] = fe(),
    [a, r] = fe(0),
    [i, l] = fe(0),
    [v, m] = fe(),
    d = X();
  function p(g) {
    const { screenX: T, screenY: w } = g.touches[0];
    o({ x: T, y: w }), clearInterval(d.value);
  }
  function f(g) {
    if (!n.value) return;
    g.preventDefault();
    const { screenX: T, screenY: w } = g.touches[0],
      E = T - n.value.x,
      k = w - n.value.y;
    t(E, k), o({ x: T, y: w });
    const D = Date.now();
    l(D - a.value), r(D), m({ x: E, y: k });
  }
  function u() {
    if (!n.value) return;
    const g = v.value;
    if ((o(null), m(null), g)) {
      const T = g.x / i.value,
        w = g.y / i.value,
        E = Math.abs(T),
        k = Math.abs(w);
      if (Math.max(E, k) < ar) return;
      let D = T,
        G = w;
      d.value = setInterval(() => {
        if (Math.abs(D) < hn && Math.abs(G) < hn) {
          clearInterval(d.value);
          return;
        }
        (D *= Cn), (G *= Cn), t(D * bt, G * bt);
      }, bt);
    }
  }
  const C = X();
  function b(g) {
    const { deltaX: T, deltaY: w } = g;
    let E = 0;
    const k = Math.abs(T),
      D = Math.abs(w);
    k === D
      ? (E = C.value === 'x' ? T : w)
      : k > D
      ? ((E = T), (C.value = 'x'))
      : ((E = w), (C.value = 'y')),
      t(-E, -E) && g.preventDefault();
  }
  const x = X({ onTouchStart: p, onTouchMove: f, onTouchEnd: u, onWheel: b });
  function $(g) {
    x.value.onTouchStart(g);
  }
  function S(g) {
    x.value.onTouchMove(g);
  }
  function y(g) {
    x.value.onTouchEnd(g);
  }
  function P(g) {
    x.value.onWheel(g);
  }
  Ee(() => {
    var g, T;
    document.addEventListener('touchmove', S, { passive: !1 }),
      document.addEventListener('touchend', y, { passive: !1 }),
      (g = e.value) === null ||
        g === void 0 ||
        g.addEventListener('touchstart', $, { passive: !1 }),
      (T = e.value) === null ||
        T === void 0 ||
        T.addEventListener('wheel', P, { passive: !1 });
  }),
    st(() => {
      document.removeEventListener('touchmove', S),
        document.removeEventListener('touchend', y);
    });
}
function xn(e, t) {
  const n = X(e);
  function o(a) {
    const r = typeof a == 'function' ? a(n.value) : a;
    r !== n.value && t(r, n.value), (n.value = r);
  }
  return [n, o];
}
const rr = () => {
    const e = X(new Map()),
      t = n => o => {
        e.value.set(n, o);
      };
    return (
      ua(() => {
        e.value = new Map();
      }),
      [t, e]
    );
  },
  lr = rr,
  $n = { width: 0, height: 0, left: 0, top: 0, right: 0 },
  sr = () => ({
    id: { type: String },
    tabPosition: { type: String },
    activeKey: { type: [String, Number] },
    rtl: { type: Boolean },
    animated: _e(),
    editable: _e(),
    moreIcon: ne.any,
    moreTransitionName: { type: String },
    mobile: { type: Boolean },
    tabBarGutter: { type: Number },
    renderTabBar: { type: Function },
    locale: _e(),
    popupClassName: String,
    getPopupContainer: Se(),
    onTabClick: { type: Function },
    onTabScroll: { type: Function }
  }),
  cr = (e, t) => {
    const { offsetWidth: n, offsetHeight: o, offsetTop: a, offsetLeft: r } = e,
      { width: i, height: l, x: v, y: m } = e.getBoundingClientRect();
    return Math.abs(i - n) < 1 ? [i, l, v - t.x, m - t.y] : [n, o, r, a];
  },
  Sn = Z({
    compatConfig: { MODE: 3 },
    name: 'TabNavList',
    inheritAttrs: !1,
    props: sr(),
    slots: Object,
    emits: ['tabClick', 'tabScroll'],
    setup(e, t) {
      let { attrs: n, slots: o } = t;
      const { tabs: a, prefixCls: r } = ho(),
        i = j(),
        l = j(),
        v = j(),
        m = j(),
        [d, p] = lr(),
        f = R(() => e.tabPosition === 'top' || e.tabPosition === 'bottom'),
        [u, C] = xn(0, (B, M) => {
          f.value &&
            e.onTabScroll &&
            e.onTabScroll({ direction: B > M ? 'left' : 'right' });
        }),
        [b, x] = xn(0, (B, M) => {
          !f.value &&
            e.onTabScroll &&
            e.onTabScroll({ direction: B > M ? 'top' : 'bottom' });
        }),
        [$, S] = fe(0),
        [y, P] = fe(0),
        [g, T] = fe(null),
        [w, E] = fe(null),
        [k, D] = fe(0),
        [G, Q] = fe(0),
        [K, te] = qi(new Map()),
        h = er(a, K),
        O = R(() => `${r.value}-nav-operations-hidden`),
        I = j(0),
        _ = j(0);
      Ke(() => {
        f.value
          ? e.rtl
            ? ((I.value = 0), (_.value = Math.max(0, $.value - g.value)))
            : ((I.value = Math.min(0, g.value - $.value)), (_.value = 0))
          : ((I.value = Math.min(0, w.value - y.value)), (_.value = 0));
      });
      const z = B => (B < I.value ? I.value : B > _.value ? _.value : B),
        U = j(),
        [F, ae] = fe(),
        se = () => {
          ae(Date.now());
        },
        q = () => {
          clearTimeout(U.value);
        },
        ie = (B, M) => {
          B(H => z(H + M));
        };
      ir(i, (B, M) => {
        if (f.value) {
          if (g.value >= $.value) return !1;
          ie(C, B);
        } else {
          if (w.value >= y.value) return !1;
          ie(x, M);
        }
        return q(), se(), !0;
      }),
        oe(F, () => {
          q(),
            F.value &&
              (U.value = setTimeout(() => {
                ae(0);
              }, 100));
        });
      const Y = function() {
          let B =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : e.activeKey;
          const M = h.value.get(B) || {
            width: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0
          };
          if (f.value) {
            let H = u.value;
            e.rtl
              ? M.right < u.value
                ? (H = M.right)
                : M.right + M.width > u.value + g.value &&
                  (H = M.right + M.width - g.value)
              : M.left < -u.value
              ? (H = -M.left)
              : M.left + M.width > -u.value + g.value &&
                (H = -(M.left + M.width - g.value)),
              x(0),
              C(z(H));
          } else {
            let H = b.value;
            M.top < -b.value
              ? (H = -M.top)
              : M.top + M.height > -b.value + w.value &&
                (H = -(M.top + M.height - w.value)),
              C(0),
              x(z(H));
          }
        },
        ue = j(0),
        ge = j(0);
      Ke(() => {
        let B, M, H, W, V, J;
        const pe = h.value;
        ['top', 'bottom'].includes(e.tabPosition)
          ? ((B = 'width'),
            (W = g.value),
            (V = $.value),
            (J = k.value),
            (M = e.rtl ? 'right' : 'left'),
            (H = Math.abs(u.value)))
          : ((B = 'height'),
            (W = w.value),
            (V = $.value),
            (J = G.value),
            (M = 'top'),
            (H = -b.value));
        let ve = W;
        V + J > W && V < W && (ve = W - J);
        const $e = a.value;
        if (!$e.length) return ([ue.value, ge.value] = [0, 0]);
        const Te = $e.length;
        let ze = Te;
        for (let he = 0; he < Te; he += 1) {
          const Be = pe.get($e[he].key) || $n;
          if (Be[M] + Be[B] > H + ve) {
            ze = he - 1;
            break;
          }
        }
        let de = 0;
        for (let he = Te - 1; he >= 0; he -= 1)
          if ((pe.get($e[he].key) || $n)[M] < H) {
            de = he + 1;
            break;
          }
        return ([ue.value, ge.value] = [de, ze]);
      });
      const Ce = () => {
        te(() => {
          var B;
          const M = new Map(),
            H =
              (B = l.value) === null || B === void 0
                ? void 0
                : B.getBoundingClientRect();
          return (
            a.value.forEach(W => {
              let { key: V } = W;
              const J = p.value.get(V),
                pe = (J == null ? void 0 : J.$el) || J;
              if (pe) {
                const [ve, $e, Te, ze] = cr(pe, H);
                M.set(V, { width: ve, height: $e, left: Te, top: ze });
              }
            }),
            M
          );
        });
      };
      oe(
        () => a.value.map(B => B.key).join('%%'),
        () => {
          Ce();
        },
        { flush: 'post' }
      );
      const we = () => {
          var B, M, H, W, V;
          const J =
              ((B = i.value) === null || B === void 0
                ? void 0
                : B.offsetWidth) || 0,
            pe =
              ((M = i.value) === null || M === void 0
                ? void 0
                : M.offsetHeight) || 0,
            ve =
              ((H = m.value) === null || H === void 0 ? void 0 : H.$el) || {},
            $e = ve.offsetWidth || 0,
            Te = ve.offsetHeight || 0;
          T(J), E(pe), D($e), Q(Te);
          const ze =
              (((W = l.value) === null || W === void 0
                ? void 0
                : W.offsetWidth) || 0) - $e,
            de =
              (((V = l.value) === null || V === void 0
                ? void 0
                : V.offsetHeight) || 0) - Te;
          S(ze), P(de), Ce();
        },
        De = R(() => [
          ...a.value.slice(0, ue.value),
          ...a.value.slice(ge.value + 1)
        ]),
        [Le, je] = fe(),
        ce = R(() => h.value.get(e.activeKey)),
        Ne = j(),
        xe = () => {
          Ie.cancel(Ne.value);
        };
      oe([ce, f, () => e.rtl], () => {
        const B = {};
        ce.value &&
          (f.value
            ? (e.rtl
                ? (B.right = ot(ce.value.right))
                : (B.left = ot(ce.value.left)),
              (B.width = ot(ce.value.width)))
            : ((B.top = ot(ce.value.top)), (B.height = ot(ce.value.height)))),
          xe(),
          (Ne.value = Ie(() => {
            je(B);
          }));
      }),
        oe(
          [() => e.activeKey, ce, h, f],
          () => {
            Y();
          },
          { flush: 'post' }
        ),
        oe(
          [() => e.rtl, () => e.tabBarGutter, () => e.activeKey, () => a.value],
          () => {
            we();
          },
          { flush: 'post' }
        );
      const A = B => {
        let { position: M, prefixCls: H, extra: W } = B;
        if (!W) return null;
        const V = W == null ? void 0 : W({ position: M });
        return V ? s('div', { class: `${H}-extra-content` }, [V]) : null;
      };
      return (
        st(() => {
          q(), xe();
        }),
        () => {
          const {
              id: B,
              animated: M,
              activeKey: H,
              rtl: W,
              editable: V,
              locale: J,
              tabPosition: pe,
              tabBarGutter: ve,
              onTabClick: $e
            } = e,
            { class: Te, style: ze } = n,
            de = r.value,
            he = !!De.value.length,
            Be = `${de}-nav-wrap`;
          let Nt, Bt, rn, ln;
          f.value
            ? W
              ? ((Bt = u.value > 0), (Nt = u.value + g.value < $.value))
              : ((Nt = u.value < 0), (Bt = -u.value + g.value < $.value))
            : ((rn = b.value < 0), (ln = -b.value + w.value < y.value));
          const pt = {};
          pe === 'top' || pe === 'bottom'
            ? (pt[W ? 'marginRight' : 'marginLeft'] =
                typeof ve == 'number' ? `${ve}px` : ve)
            : (pt.marginTop = typeof ve == 'number' ? `${ve}px` : ve);
          const sn = a.value.map((Mt, jo) => {
            const { key: nt } = Mt;
            return s(
              Ji,
              {
                id: B,
                prefixCls: de,
                key: nt,
                tab: Mt,
                style: jo === 0 ? void 0 : pt,
                closable: Mt.closable,
                editable: V,
                active: nt === H,
                removeAriaLabel: J == null ? void 0 : J.removeAriaLabel,
                ref: d(nt),
                onClick: Fo => {
                  $e(nt, Fo);
                },
                onFocus: () => {
                  Y(nt),
                    se(),
                    i.value &&
                      (W || (i.value.scrollLeft = 0), (i.value.scrollTop = 0));
                }
              },
              o
            );
          });
          return s(
            'div',
            {
              role: 'tablist',
              class: ee(`${de}-nav`, Te),
              style: ze,
              onKeydown: () => {
                se();
              }
            },
            [
              s(
                A,
                { position: 'left', prefixCls: de, extra: o.leftExtra },
                null
              ),
              s(
                kt,
                { onResize: we },
                {
                  default: () => [
                    s(
                      'div',
                      {
                        class: ee(Be, {
                          [`${Be}-ping-left`]: Nt,
                          [`${Be}-ping-right`]: Bt,
                          [`${Be}-ping-top`]: rn,
                          [`${Be}-ping-bottom`]: ln
                        }),
                        ref: i
                      },
                      [
                        s(
                          kt,
                          { onResize: we },
                          {
                            default: () => [
                              s(
                                'div',
                                {
                                  ref: l,
                                  class: `${de}-nav-list`,
                                  style: {
                                    transform: `translate(${u.value}px, ${b.value}px)`,
                                    transition: F.value ? 'none' : void 0
                                  }
                                },
                                [
                                  sn,
                                  s(
                                    bo,
                                    {
                                      ref: m,
                                      prefixCls: de,
                                      locale: J,
                                      editable: V,
                                      style: c(
                                        c({}, sn.length === 0 ? void 0 : pt),
                                        { visibility: he ? 'hidden' : null }
                                      )
                                    },
                                    null
                                  ),
                                  s(
                                    'div',
                                    {
                                      class: ee(`${de}-ink-bar`, {
                                        [`${de}-ink-bar-animated`]: M.inkBar
                                      }),
                                      style: Le.value
                                    },
                                    null
                                  )
                                ]
                              )
                            ]
                          }
                        )
                      ]
                    )
                  ]
                }
              ),
              s(
                nr,
                N(
                  N({}, e),
                  {},
                  {
                    removeAriaLabel: J == null ? void 0 : J.removeAriaLabel,
                    ref: v,
                    prefixCls: de,
                    tabs: De.value,
                    class: !he && O.value
                  }
                ),
                mo(o, ['moreIcon'])
              ),
              s(
                A,
                { position: 'right', prefixCls: de, extra: o.rightExtra },
                null
              ),
              s(
                A,
                {
                  position: 'right',
                  prefixCls: de,
                  extra: o.tabBarExtraContent
                },
                null
              )
            ]
          );
        }
      );
    }
  }),
  ur = Z({
    compatConfig: { MODE: 3 },
    name: 'TabPanelList',
    inheritAttrs: !1,
    props: {
      activeKey: { type: [String, Number] },
      id: { type: String },
      rtl: { type: Boolean },
      animated: { type: Object, default: void 0 },
      tabPosition: { type: String },
      destroyInactiveTabPane: { type: Boolean }
    },
    setup(e) {
      const { tabs: t, prefixCls: n } = ho();
      return () => {
        const {
            id: o,
            activeKey: a,
            animated: r,
            tabPosition: i,
            rtl: l,
            destroyInactiveTabPane: v
          } = e,
          m = r.tabPane,
          d = n.value,
          p = t.value.findIndex(f => f.key === a);
        return s('div', { class: `${d}-content-holder` }, [
          s(
            'div',
            {
              class: [
                `${d}-content`,
                `${d}-content-${i}`,
                { [`${d}-content-animated`]: m }
              ],
              style:
                p && m
                  ? { [l ? 'marginRight' : 'marginLeft']: `-${p}00%` }
                  : null
            },
            [
              t.value.map(f =>
                Na(f.node, {
                  key: f.key,
                  prefixCls: d,
                  tabKey: f.key,
                  id: o,
                  animated: m,
                  active: f.key === a,
                  destroyInactiveTabPane: v
                })
              )
            ]
          )
        ]);
      };
    }
  });
function wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        dr(e, a, n[a]);
      });
  }
  return e;
}
function dr(e, t, n) {
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
var Kt = function(t, n) {
  var o = wn({}, t, n.attrs);
  return s(Ae, wn({}, o, { icon: Ya }), null);
};
Kt.displayName = 'PlusOutlined';
Kt.inheritAttrs = !1;
const fr = Kt,
  pr = e => {
    const { componentCls: t, motionDurationSlow: n } = e;
    return [
      {
        [t]: {
          [`${t}-switch`]: {
            '&-appear, &-enter': {
              transition: 'none',
              '&-start': { opacity: 0 },
              '&-active': { opacity: 1, transition: `opacity ${n}` }
            },
            '&-leave': {
              position: 'absolute',
              transition: 'none',
              inset: 0,
              '&-start': { opacity: 1 },
              '&-active': { opacity: 0, transition: `opacity ${n}` }
            }
          }
        }
      },
      [fn(e, 'slide-up'), fn(e, 'slide-down')]
    ];
  },
  vr = pr,
  mr = e => {
    const {
      componentCls: t,
      tabsCardHorizontalPadding: n,
      tabsCardHeadBackground: o,
      tabsCardGutter: a,
      colorSplit: r
    } = e;
    return {
      [`${t}-card`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            margin: 0,
            padding: n,
            background: o,
            border: `${e.lineWidth}px ${e.lineType} ${r}`,
            transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
          },
          [`${t}-tab-active`]: {
            color: e.colorPrimary,
            background: e.colorBgContainer
          },
          [`${t}-ink-bar`]: { visibility: 'hidden' }
        },
        [`&${t}-top, &${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginLeft: { _skip_check_: !0, value: `${a}px` }
            }
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`
            },
            [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer }
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`
            },
            [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer }
          }
        },
        [`&${t}-left, &${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: { marginTop: `${a}px` }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`
              }
            },
            [`${t}-tab-active`]: {
              borderRightColor: { _skip_check_: !0, value: e.colorBgContainer }
            }
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`
              }
            },
            [`${t}-tab-active`]: {
              borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer }
            }
          }
        }
      }
    };
  },
  gr = e => {
    const {
      componentCls: t,
      tabsHoverColor: n,
      dropdownEdgeChildVerticalPadding: o
    } = e;
    return {
      [`${t}-dropdown`]: c(c({}, wt(e)), {
        position: 'absolute',
        top: -9999,
        left: { _skip_check_: !0, value: -9999 },
        zIndex: e.zIndexPopup,
        display: 'block',
        '&-hidden': { display: 'none' },
        [`${t}-dropdown-menu`]: {
          maxHeight: e.tabsDropdownHeight,
          margin: 0,
          padding: `${o}px 0`,
          overflowX: 'hidden',
          overflowY: 'auto',
          textAlign: { _skip_check_: !0, value: 'left' },
          listStyleType: 'none',
          backgroundColor: e.colorBgContainer,
          backgroundClip: 'padding-box',
          borderRadius: e.borderRadiusLG,
          outline: 'none',
          boxShadow: e.boxShadowSecondary,
          '&-item': c(c({}, Un), {
            display: 'flex',
            alignItems: 'center',
            minWidth: e.tabsDropdownWidth,
            margin: 0,
            padding: `${e.paddingXXS}px ${e.paddingSM}px`,
            color: e.colorText,
            fontWeight: 'normal',
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: 'pointer',
            transition: `all ${e.motionDurationSlow}`,
            '> span': { flex: 1, whiteSpace: 'nowrap' },
            '&-remove': {
              flex: 'none',
              marginLeft: { _skip_check_: !0, value: e.marginSM },
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              '&:hover': { color: n }
            },
            '&:hover': { background: e.controlItemBgHover },
            '&-disabled': {
              '&, &:hover': {
                color: e.colorTextDisabled,
                background: 'transparent',
                cursor: 'not-allowed'
              }
            }
          })
        }
      })
    };
  },
  br = e => {
    const { componentCls: t, margin: n, colorSplit: o } = e;
    return {
      [`${t}-top, ${t}-bottom`]: {
        flexDirection: 'column',
        [`> ${t}-nav, > div > ${t}-nav`]: {
          margin: `0 0 ${n}px 0`,
          '&::before': {
            position: 'absolute',
            right: { _skip_check_: !0, value: 0 },
            left: { _skip_check_: !0, value: 0 },
            borderBottom: `${e.lineWidth}px ${e.lineType} ${o}`,
            content: "''"
          },
          [`${t}-ink-bar`]: {
            height: e.lineWidthBold,
            '&-animated': {
              transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
            }
          },
          [`${t}-nav-wrap`]: {
            '&::before, &::after': {
              top: 0,
              bottom: 0,
              width: e.controlHeight
            },
            '&::before': {
              left: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowLeft
            },
            '&::after': {
              right: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowRight
            },
            [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 }
          }
        }
      },
      [`${t}-top`]: {
        [`> ${t}-nav,
        > div > ${t}-nav`]: {
          '&::before': { bottom: 0 },
          [`${t}-ink-bar`]: { bottom: 0 }
        }
      },
      [`${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          marginTop: `${n}px`,
          marginBottom: 0,
          '&::before': { top: 0 },
          [`${t}-ink-bar`]: { top: 0 }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 }
      },
      [`${t}-left, ${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          flexDirection: 'column',
          minWidth: e.controlHeight * 1.25,
          [`${t}-tab`]: {
            padding: `${e.paddingXS}px ${e.paddingLG}px`,
            textAlign: 'center'
          },
          [`${t}-tab + ${t}-tab`]: { margin: `${e.margin}px 0 0 0` },
          [`${t}-nav-wrap`]: {
            flexDirection: 'column',
            '&::before, &::after': {
              right: { _skip_check_: !0, value: 0 },
              left: { _skip_check_: !0, value: 0 },
              height: e.controlHeight
            },
            '&::before': { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
            '&::after': { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
            [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 }
          },
          [`${t}-ink-bar`]: {
            width: e.lineWidthBold,
            '&-animated': {
              transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
            }
          },
          [`${t}-nav-list, ${t}-nav-operations`]: {
            flex: '1 0 auto',
            flexDirection: 'column'
          }
        }
      },
      [`${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          marginLeft: { _skip_check_: !0, value: `-${e.lineWidth}px` },
          borderLeft: {
            _skip_check_: !0,
            value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingLeft: { _skip_check_: !0, value: e.paddingLG }
          }
        }
      },
      [`${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } }
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          order: 0,
          marginRight: { _skip_check_: !0, value: -e.lineWidth },
          borderRight: {
            _skip_check_: !0,
            value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingRight: { _skip_check_: !0, value: e.paddingLG }
          }
        }
      }
    };
  },
  yr = e => {
    const { componentCls: t, padding: n } = e;
    return {
      [t]: {
        '&-small': {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: `${e.paddingXS}px 0`,
              fontSize: e.fontSize
            }
          }
        },
        '&-large': {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: `${n}px 0`, fontSize: e.fontSizeLG }
          }
        }
      },
      [`${t}-card`]: {
        [`&${t}-small`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: `${e.paddingXXS * 1.5}px ${n}px` }
          },
          [`&${t}-bottom`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`
            }
          },
          [`&${t}-top`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`
            }
          },
          [`&${t}-right`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`
              }
            }
          },
          [`&${t}-left`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`
              }
            }
          }
        },
        [`&${t}-large`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: `${e.paddingXS}px ${n}px ${e.paddingXXS * 1.5}px`
            }
          }
        }
      }
    };
  },
  hr = e => {
    const {
        componentCls: t,
        tabsActiveColor: n,
        tabsHoverColor: o,
        iconCls: a,
        tabsHorizontalGutter: r
      } = e,
      i = `${t}-tab`;
    return {
      [i]: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        padding: `${e.paddingSM}px 0`,
        fontSize: `${e.fontSize}px`,
        background: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        '&-btn, &-remove': c(
          { '&:focus:not(:focus-visible), &:active': { color: n } },
          Ft(e)
        ),
        '&-btn': { outline: 'none', transition: 'all 0.3s' },
        '&-remove': {
          flex: 'none',
          marginRight: { _skip_check_: !0, value: -e.marginXXS },
          marginLeft: { _skip_check_: !0, value: e.marginXS },
          color: e.colorTextDescription,
          fontSize: e.fontSizeSM,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          '&:hover': { color: e.colorTextHeading }
        },
        '&:hover': { color: o },
        [`&${i}-active ${i}-btn`]: {
          color: e.colorPrimary,
          textShadow: e.tabsActiveTextShadow
        },
        [`&${i}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed'
        },
        [`&${i}-disabled ${i}-btn, &${i}-disabled ${t}-remove`]: {
          '&:focus, &:active': { color: e.colorTextDisabled }
        },
        [`& ${i}-remove ${a}`]: { margin: 0 },
        [a]: { marginRight: { _skip_check_: !0, value: e.marginSM } }
      },
      [`${i} + ${i}`]: { margin: { _skip_check_: !0, value: `0 0 0 ${r}px` } }
    };
  },
  Cr = e => {
    const {
      componentCls: t,
      tabsHorizontalGutter: n,
      iconCls: o,
      tabsCardGutter: a
    } = e;
    return {
      [`${t}-rtl`]: {
        direction: 'rtl',
        [`${t}-nav`]: {
          [`${t}-tab`]: {
            margin: { _skip_check_: !0, value: `0 0 0 ${n}px` },
            [`${t}-tab:last-of-type`]: {
              marginLeft: { _skip_check_: !0, value: 0 }
            },
            [o]: {
              marginRight: { _skip_check_: !0, value: 0 },
              marginLeft: { _skip_check_: !0, value: `${e.marginSM}px` }
            },
            [`${t}-tab-remove`]: {
              marginRight: { _skip_check_: !0, value: `${e.marginXS}px` },
              marginLeft: { _skip_check_: !0, value: `-${e.marginXXS}px` },
              [o]: { margin: 0 }
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav`]: { order: 1 },
          [`> ${t}-content-holder`]: { order: 0 }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav`]: { order: 0 },
          [`> ${t}-content-holder`]: { order: 1 }
        },
        [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginRight: { _skip_check_: !0, value: `${a}px` },
              marginLeft: { _skip_check_: !0, value: 0 }
            }
          }
        }
      },
      [`${t}-dropdown-rtl`]: { direction: 'rtl' },
      [`${t}-menu-item`]: {
        [`${t}-dropdown-rtl`]: {
          textAlign: { _skip_check_: !0, value: 'right' }
        }
      }
    };
  },
  xr = e => {
    const {
      componentCls: t,
      tabsCardHorizontalPadding: n,
      tabsCardHeight: o,
      tabsCardGutter: a,
      tabsHoverColor: r,
      tabsActiveColor: i,
      colorSplit: l
    } = e;
    return {
      [t]: c(
        c(
          c(c({}, wt(e)), {
            display: 'flex',
            [`> ${t}-nav, > div > ${t}-nav`]: {
              position: 'relative',
              display: 'flex',
              flex: 'none',
              alignItems: 'center',
              [`${t}-nav-wrap`]: {
                position: 'relative',
                display: 'flex',
                flex: 'auto',
                alignSelf: 'stretch',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transform: 'translate(0)',
                '&::before, &::after': {
                  position: 'absolute',
                  zIndex: 1,
                  opacity: 0,
                  transition: `opacity ${e.motionDurationSlow}`,
                  content: "''",
                  pointerEvents: 'none'
                }
              },
              [`${t}-nav-list`]: {
                position: 'relative',
                display: 'flex',
                transition: `opacity ${e.motionDurationSlow}`
              },
              [`${t}-nav-operations`]: {
                display: 'flex',
                alignSelf: 'stretch'
              },
              [`${t}-nav-operations-hidden`]: {
                position: 'absolute',
                visibility: 'hidden',
                pointerEvents: 'none'
              },
              [`${t}-nav-more`]: {
                position: 'relative',
                padding: n,
                background: 'transparent',
                border: 0,
                '&::after': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  bottom: 0,
                  left: { _skip_check_: !0, value: 0 },
                  height: e.controlHeightLG / 8,
                  transform: 'translateY(100%)',
                  content: "''"
                }
              },
              [`${t}-nav-add`]: c(
                {
                  minWidth: `${o}px`,
                  marginLeft: { _skip_check_: !0, value: `${a}px` },
                  padding: `0 ${e.paddingXS}px`,
                  background: 'transparent',
                  border: `${e.lineWidth}px ${e.lineType} ${l}`,
                  borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                  outline: 'none',
                  cursor: 'pointer',
                  color: e.colorText,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                  '&:hover': { color: r },
                  '&:active, &:focus:not(:focus-visible)': { color: i }
                },
                Ft(e)
              )
            },
            [`${t}-extra-content`]: { flex: 'none' },
            [`${t}-ink-bar`]: {
              position: 'absolute',
              background: e.colorPrimary,
              pointerEvents: 'none'
            }
          }),
          hr(e)
        ),
        {
          [`${t}-content`]: {
            position: 'relative',
            display: 'flex',
            width: '100%',
            '&-animated': { transition: 'margin 0.3s' }
          },
          [`${t}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
          [`${t}-tabpane`]: { outline: 'none', flex: 'none', width: '100%' }
        }
      ),
      [`${t}-centered`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-nav-wrap`]: {
            [`&:not([class*='${t}-nav-wrap-ping'])`]: {
              justifyContent: 'center'
            }
          }
        }
      }
    };
  },
  $r = St(
    'Tabs',
    e => {
      const t = e.controlHeightLG,
        n = yt(e, {
          tabsHoverColor: e.colorPrimaryHover,
          tabsActiveColor: e.colorPrimaryActive,
          tabsCardHorizontalPadding: `${(t -
            Math.round(e.fontSize * e.lineHeight)) /
            2 -
            e.lineWidth}px ${e.padding}px`,
          tabsCardHeight: t,
          tabsCardGutter: e.marginXXS / 2,
          tabsHorizontalGutter: 32,
          tabsCardHeadBackground: e.colorFillAlter,
          dropdownEdgeChildVerticalPadding: e.paddingXXS,
          tabsActiveTextShadow: '0 0 0.25px currentcolor',
          tabsDropdownHeight: 200,
          tabsDropdownWidth: 120
        });
      return [yr(n), Cr(n), br(n), gr(n), mr(n), xr(n), vr(n)];
    },
    e => ({ zIndexPopup: e.zIndexPopupBase + 50 })
  );
let Tn = 0;
const Co = () => ({
  prefixCls: { type: String },
  id: { type: String },
  popupClassName: String,
  getPopupContainer: Se(),
  activeKey: { type: [String, Number] },
  defaultActiveKey: { type: [String, Number] },
  direction: vt(),
  animated: Go([Boolean, Object]),
  renderTabBar: Se(),
  tabBarGutter: { type: Number },
  tabBarStyle: _e(),
  tabPosition: vt(),
  destroyInactiveTabPane: Vo(),
  hideAdd: Boolean,
  type: vt(),
  size: vt(),
  centered: Boolean,
  onEdit: Se(),
  onChange: Se(),
  onTabClick: Se(),
  onTabScroll: Se(),
  'onUpdate:activeKey': Se(),
  locale: _e(),
  onPrevClick: Se(),
  onNextClick: Se(),
  tabBarExtraContent: ne.any
});
function Sr(e) {
  return e
    .map(t => {
      if (Xo(t)) {
        const n = c({}, t.props || {});
        for (const [f, u] of Object.entries(n)) delete n[f], (n[Uo(f)] = u);
        const o = t.children || {},
          a = t.key !== void 0 ? t.key : void 0,
          {
            tab: r = o.tab,
            disabled: i,
            forceRender: l,
            closable: v,
            animated: m,
            active: d,
            destroyInactiveTabPane: p
          } = n;
        return c(c({ key: a }, n), {
          node: t,
          closeIcon: o.closeIcon,
          tab: r,
          disabled: i === '' || i,
          forceRender: l === '' || l,
          closable: v === '' || v,
          animated: m === '' || m,
          active: d === '' || d,
          destroyInactiveTabPane: p === '' || p
        });
      }
      return null;
    })
    .filter(t => t);
}
const wr = Z({
    compatConfig: { MODE: 3 },
    name: 'InternalTabs',
    inheritAttrs: !1,
    props: c(
      c(
        {},
        tt(Co(), { tabPosition: 'top', animated: { inkBar: !0, tabPane: !1 } })
      ),
      { tabs: Ko() }
    ),
    slots: Object,
    setup(e, t) {
      let { attrs: n, slots: o } = t;
      Rt(
        e.onPrevClick === void 0 && e.onNextClick === void 0,
        'Tabs',
        '`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead.'
      ),
        Rt(
          e.tabBarExtraContent === void 0,
          'Tabs',
          '`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead.'
        ),
        Rt(
          o.tabBarExtraContent === void 0,
          'Tabs',
          '`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.'
        );
      const {
          prefixCls: a,
          direction: r,
          size: i,
          rootPrefixCls: l,
          getPopupContainer: v
        } = et('tabs', e),
        [m, d] = $r(a),
        p = R(() => r.value === 'rtl'),
        f = R(() => {
          const { animated: w, tabPosition: E } = e;
          return w === !1 || ['left', 'right'].includes(E)
            ? { inkBar: !1, tabPane: !1 }
            : w === !0
            ? { inkBar: !0, tabPane: !0 }
            : c({ inkBar: !0, tabPane: !1 }, typeof w == 'object' ? w : {});
        }),
        [u, C] = fe(!1);
      Ee(() => {
        C(Ba());
      });
      const [b, x] = lt(
          () => {
            var w;
            return (w = e.tabs[0]) === null || w === void 0 ? void 0 : w.key;
          },
          { value: R(() => e.activeKey), defaultValue: e.defaultActiveKey }
        ),
        [$, S] = fe(() => e.tabs.findIndex(w => w.key === b.value));
      Ke(() => {
        var w;
        let E = e.tabs.findIndex(k => k.key === b.value);
        E === -1 &&
          ((E = Math.max(0, Math.min($.value, e.tabs.length - 1))),
          x((w = e.tabs[E]) === null || w === void 0 ? void 0 : w.key)),
          S(E);
      });
      const [y, P] = lt(null, { value: R(() => e.id) }),
        g = R(() =>
          u.value && !['left', 'right'].includes(e.tabPosition)
            ? 'top'
            : e.tabPosition
        );
      Ee(() => {
        e.id || (P(`rc-tabs-${Tn}`), (Tn += 1));
      });
      const T = (w, E) => {
        var k, D;
        (k = e.onTabClick) === null || k === void 0 || k.call(e, w, E);
        const G = w !== b.value;
        x(w), G && ((D = e.onChange) === null || D === void 0 || D.call(e, w));
      };
      return (
        or({ tabs: R(() => e.tabs), prefixCls: a }),
        () => {
          const {
              id: w,
              type: E,
              tabBarGutter: k,
              tabBarStyle: D,
              locale: G,
              destroyInactiveTabPane: Q,
              renderTabBar: K = o.renderTabBar,
              onTabScroll: te,
              hideAdd: h,
              centered: O
            } = e,
            I = {
              id: y.value,
              activeKey: b.value,
              animated: f.value,
              tabPosition: g.value,
              rtl: p.value,
              mobile: u.value
            };
          let _;
          E === 'editable-card' &&
            (_ = {
              onEdit: (ae, se) => {
                let { key: q, event: ie } = se;
                var Y;
                (Y = e.onEdit) === null ||
                  Y === void 0 ||
                  Y.call(e, ae === 'add' ? ie : q, ae);
              },
              removeIcon: () => s(Wt, null, null),
              addIcon: o.addIcon ? o.addIcon : () => s(fr, null, null),
              showAdd: h !== !0
            });
          let z;
          const U = c(c({}, I), {
            moreTransitionName: `${l.value}-slide-up`,
            editable: _,
            locale: G,
            tabBarGutter: k,
            onTabClick: T,
            onTabScroll: te,
            style: D,
            getPopupContainer: v.value,
            popupClassName: ee(e.popupClassName, d.value)
          });
          K
            ? (z = K(c(c({}, U), { DefaultTabBar: Sn })))
            : (z = s(
                Sn,
                U,
                mo(o, [
                  'moreIcon',
                  'leftExtra',
                  'rightExtra',
                  'tabBarExtraContent'
                ])
              ));
          const F = a.value;
          return m(
            s(
              'div',
              N(
                N({}, n),
                {},
                {
                  id: w,
                  class: ee(
                    F,
                    `${F}-${g.value}`,
                    {
                      [d.value]: !0,
                      [`${F}-${i.value}`]: i.value,
                      [`${F}-card`]: ['card', 'editable-card'].includes(E),
                      [`${F}-editable-card`]: E === 'editable-card',
                      [`${F}-centered`]: O,
                      [`${F}-mobile`]: u.value,
                      [`${F}-editable`]: E === 'editable-card',
                      [`${F}-rtl`]: p.value
                    },
                    n.class
                  )
                }
              ),
              [
                z,
                s(
                  ur,
                  N(
                    N({ destroyInactiveTabPane: Q }, I),
                    {},
                    { animated: f.value }
                  ),
                  null
                )
              ]
            )
          );
        }
      );
    }
  }),
  rt = Z({
    compatConfig: { MODE: 3 },
    name: 'ATabs',
    inheritAttrs: !1,
    props: tt(Co(), {
      tabPosition: 'top',
      animated: { inkBar: !0, tabPane: !1 }
    }),
    slots: Object,
    setup(e, t) {
      let { attrs: n, slots: o, emit: a } = t;
      const r = i => {
        a('update:activeKey', i), a('change', i);
      };
      return () => {
        var i;
        const l = Sr(
          Wo((i = o.default) === null || i === void 0 ? void 0 : i.call(o))
        );
        return s(
          wr,
          N(
            N(N({}, Re(e, ['onUpdate:activeKey'])), n),
            {},
            { onChange: r, tabs: l }
          ),
          o
        );
      };
    }
  }),
  Tr = () => ({
    tab: ne.any,
    disabled: { type: Boolean },
    forceRender: { type: Boolean },
    closable: { type: Boolean },
    animated: { type: Boolean },
    active: { type: Boolean },
    destroyInactiveTabPane: { type: Boolean },
    prefixCls: { type: String },
    tabKey: { type: [String, Number] },
    id: { type: String }
  }),
  xt = Z({
    compatConfig: { MODE: 3 },
    name: 'ATabPane',
    inheritAttrs: !1,
    __ANT_TAB_PANE: !0,
    props: Tr(),
    slots: Object,
    setup(e, t) {
      let { attrs: n, slots: o } = t;
      const a = X(e.forceRender);
      oe(
        [() => e.active, () => e.destroyInactiveTabPane],
        () => {
          e.active
            ? (a.value = !0)
            : e.destroyInactiveTabPane && (a.value = !1);
        },
        { immediate: !0 }
      );
      const r = R(() =>
        e.active
          ? {}
          : e.animated
          ? { visibility: 'hidden', height: 0, overflowY: 'hidden' }
          : { display: 'none' }
      );
      return () => {
        var i;
        const { prefixCls: l, forceRender: v, id: m, active: d, tabKey: p } = e;
        return s(
          'div',
          {
            id: m && `${m}-panel-${p}`,
            role: 'tabpanel',
            tabindex: d ? 0 : -1,
            'aria-labelledby': m && `${m}-tab-${p}`,
            'aria-hidden': !d,
            style: [r.value, n.style],
            class: [`${l}-tabpane`, d && `${l}-tabpane-active`, n.class]
          },
          [
            (d || a.value || v) &&
              ((i = o.default) === null || i === void 0 ? void 0 : i.call(o))
          ]
        );
      };
    }
  });
rt.TabPane = xt;
rt.install = function(e) {
  return e.component(rt.name, rt), e.component(xt.name, xt), e;
};
function Pt() {
  return {
    keyboard: { type: Boolean, default: void 0 },
    mask: { type: Boolean, default: void 0 },
    afterClose: Function,
    closable: { type: Boolean, default: void 0 },
    maskClosable: { type: Boolean, default: void 0 },
    visible: { type: Boolean, default: void 0 },
    destroyOnClose: { type: Boolean, default: void 0 },
    mousePosition: ne.shape({ x: Number, y: Number }).loose,
    title: ne.any,
    footer: ne.any,
    transitionName: String,
    maskTransitionName: String,
    animation: ne.any,
    maskAnimation: ne.any,
    wrapStyle: { type: Object, default: void 0 },
    bodyStyle: { type: Object, default: void 0 },
    maskStyle: { type: Object, default: void 0 },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: ne.any,
    maskProps: ne.any,
    wrapProps: ne.any,
    getContainer: ne.any,
    dialogStyle: { type: Object, default: void 0 },
    dialogClass: String,
    closeIcon: ne.any,
    forceRender: { type: Boolean, default: void 0 },
    getOpenCount: Function,
    focusTriggerAfterClose: { type: Boolean, default: void 0 },
    onClose: Function,
    modalRender: Function
  };
}
function Pn(e, t, n) {
  let o = t;
  return !o && n && (o = `${e}-${n}`), o;
}
let On = -1;
function Pr() {
  return (On += 1), On;
}
function _n(e, t) {
  let n = e[`page${t ? 'Y' : 'X'}Offset`];
  const o = `scroll${t ? 'Top' : 'Left'}`;
  if (typeof n != 'number') {
    const a = e.document;
    (n = a.documentElement[o]), typeof n != 'number' && (n = a.body[o]);
  }
  return n;
}
function Or(e) {
  const t = e.getBoundingClientRect(),
    n = { left: t.left, top: t.top },
    o = e.ownerDocument,
    a = o.defaultView || o.parentWindow;
  return (n.left += _n(a)), (n.top += _n(a, !0)), n;
}
const _r = { width: 0, height: 0, overflow: 'hidden', outline: 'none' },
  Ir = { outline: 'none' },
  Er = Z({
    compatConfig: { MODE: 3 },
    name: 'DialogContent',
    inheritAttrs: !1,
    props: c(c({}, Pt()), {
      motionName: String,
      ariaId: String,
      onVisibleChanged: Function,
      onMousedown: Function,
      onMouseup: Function
    }),
    setup(e, t) {
      let { expose: n, slots: o, attrs: a } = t;
      const r = X(),
        i = X(),
        l = X();
      n({
        focus: () => {
          var f;
          (f = r.value) === null ||
            f === void 0 ||
            f.focus({ preventScroll: !0 });
        },
        changeActive: f => {
          const { activeElement: u } = document;
          f && u === i.value
            ? r.value.focus({ preventScroll: !0 })
            : !f && u === r.value && i.value.focus({ preventScroll: !0 });
        }
      });
      const v = X(),
        m = R(() => {
          const { width: f, height: u } = e,
            C = {};
          return (
            f !== void 0 && (C.width = typeof f == 'number' ? `${f}px` : f),
            u !== void 0 && (C.height = typeof u == 'number' ? `${u}px` : u),
            v.value && (C.transformOrigin = v.value),
            C
          );
        }),
        d = () => {
          zt(() => {
            if (l.value) {
              const f = Or(l.value);
              v.value = e.mousePosition
                ? `${e.mousePosition.x - f.left}px ${e.mousePosition.y -
                    f.top}px`
                : '';
            }
          });
        },
        p = f => {
          e.onVisibleChanged(f);
        };
      return () => {
        var f, u, C, b;
        const {
          prefixCls: x,
          footer: $ = (f = o.footer) === null || f === void 0
            ? void 0
            : f.call(o),
          title: S = (u = o.title) === null || u === void 0
            ? void 0
            : u.call(o),
          ariaId: y,
          closable: P,
          closeIcon: g = (C = o.closeIcon) === null || C === void 0
            ? void 0
            : C.call(o),
          onClose: T,
          bodyStyle: w,
          bodyProps: E,
          onMousedown: k,
          onMouseup: D,
          visible: G,
          modalRender: Q = o.modalRender,
          destroyOnClose: K,
          motionName: te
        } = e;
        let h;
        $ && (h = s('div', { class: `${x}-footer` }, [$]));
        let O;
        S &&
          (O = s('div', { class: `${x}-header` }, [
            s('div', { class: `${x}-title`, id: y }, [S])
          ]));
        let I;
        P &&
          (I = s(
            'button',
            {
              type: 'button',
              onClick: T,
              'aria-label': 'Close',
              class: `${x}-close`
            },
            [g || s('span', { class: `${x}-close-x` }, null)]
          ));
        const _ = s('div', { class: `${x}-content` }, [
            I,
            O,
            s('div', N({ class: `${x}-body`, style: w }, E), [
              (b = o.default) === null || b === void 0 ? void 0 : b.call(o)
            ]),
            h
          ]),
          z = Kn(te);
        return s(
          to,
          N(
            N({}, z),
            {},
            {
              onBeforeEnter: d,
              onAfterEnter: () => p(!0),
              onAfterLeave: () => p(!1)
            }
          ),
          {
            default: () => [
              G || !K
                ? Jn(
                    s(
                      'div',
                      N(
                        N({}, a),
                        {},
                        {
                          ref: l,
                          key: 'dialog-element',
                          role: 'document',
                          style: [m.value, a.style],
                          class: [x, a.class],
                          onMousedown: k,
                          onMouseup: D
                        }
                      ),
                      [
                        s('div', { tabindex: 0, ref: r, style: Ir }, [
                          Q ? Q({ originVNode: _ }) : _
                        ]),
                        s('div', { tabindex: 0, ref: i, style: _r }, null)
                      ]
                    ),
                    [[eo, G]]
                  )
                : null
            ]
          }
        );
      };
    }
  }),
  Nr = Z({
    compatConfig: { MODE: 3 },
    name: 'DialogMask',
    props: {
      prefixCls: String,
      visible: Boolean,
      motionName: String,
      maskProps: Object
    },
    setup(e, t) {
      return () => {
        const { prefixCls: n, visible: o, maskProps: a, motionName: r } = e,
          i = Kn(r);
        return s(to, i, {
          default: () => [
            Jn(s('div', N({ class: `${n}-mask` }, a), null), [[eo, o]])
          ]
        });
      };
    }
  }),
  In = Z({
    compatConfig: { MODE: 3 },
    name: 'VcDialog',
    inheritAttrs: !1,
    props: tt(
      c(c({}, Pt()), { getOpenCount: Function, scrollLocker: Object }),
      {
        mask: !0,
        visible: !1,
        keyboard: !0,
        closable: !0,
        maskClosable: !0,
        destroyOnClose: !1,
        prefixCls: 'rc-dialog',
        getOpenCount: () => null,
        focusTriggerAfterClose: !0
      }
    ),
    setup(e, t) {
      let { attrs: n, slots: o } = t;
      const a = j(),
        r = j(),
        i = j(),
        l = j(e.visible),
        v = j(`vcDialogTitle${Pr()}`),
        m = $ => {
          var S, y;
          if ($)
            Yo(r.value, document.activeElement) ||
              ((a.value = document.activeElement),
              (S = i.value) === null || S === void 0 || S.focus());
          else {
            const P = l.value;
            if (
              ((l.value = !1), e.mask && a.value && e.focusTriggerAfterClose)
            ) {
              try {
                a.value.focus({ preventScroll: !0 });
              } catch {}
              a.value = null;
            }
            P && ((y = e.afterClose) === null || y === void 0 || y.call(e));
          }
        },
        d = $ => {
          var S;
          (S = e.onClose) === null || S === void 0 || S.call(e, $);
        },
        p = j(!1),
        f = j(),
        u = () => {
          clearTimeout(f.value), (p.value = !0);
        },
        C = () => {
          f.value = setTimeout(() => {
            p.value = !1;
          });
        },
        b = $ => {
          if (!e.maskClosable) return null;
          p.value ? (p.value = !1) : r.value === $.target && d($);
        },
        x = $ => {
          if (e.keyboard && $.keyCode === le.ESC) {
            $.stopPropagation(), d($);
            return;
          }
          e.visible &&
            $.keyCode === le.TAB &&
            i.value.changeActive(!$.shiftKey);
        };
      return (
        oe(
          () => e.visible,
          () => {
            e.visible && (l.value = !0);
          },
          { flush: 'post' }
        ),
        st(() => {
          var $;
          clearTimeout(f.value),
            ($ = e.scrollLocker) === null || $ === void 0 || $.unLock();
        }),
        Ke(() => {
          var $, S;
          ($ = e.scrollLocker) === null || $ === void 0 || $.unLock(),
            l.value &&
              ((S = e.scrollLocker) === null || S === void 0 || S.lock());
        }),
        () => {
          const {
              prefixCls: $,
              mask: S,
              visible: y,
              maskTransitionName: P,
              maskAnimation: g,
              zIndex: T,
              wrapClassName: w,
              rootClassName: E,
              wrapStyle: k,
              closable: D,
              maskProps: G,
              maskStyle: Q,
              transitionName: K,
              animation: te,
              wrapProps: h,
              title: O = o.title
            } = e,
            { style: I, class: _ } = n;
          return s('div', N({ class: [`${$}-root`, E] }, Ma(e, { data: !0 })), [
            s(
              Nr,
              {
                prefixCls: $,
                visible: S && y,
                motionName: Pn($, P, g),
                style: c({ zIndex: T }, Q),
                maskProps: G
              },
              null
            ),
            s(
              'div',
              N(
                {
                  tabIndex: -1,
                  onKeydown: x,
                  class: ee(`${$}-wrap`, w),
                  ref: r,
                  onClick: b,
                  role: 'dialog',
                  'aria-labelledby': O ? v.value : null,
                  style: c(c({ zIndex: T }, k), {
                    display: l.value ? null : 'none'
                  })
                },
                h
              ),
              [
                s(
                  Er,
                  N(
                    N({}, Re(e, ['scrollLocker'])),
                    {},
                    {
                      style: I,
                      class: _,
                      onMousedown: u,
                      onMouseup: C,
                      ref: i,
                      closable: D,
                      ariaId: v.value,
                      prefixCls: $,
                      visible: y,
                      onClose: d,
                      onVisibleChanged: m,
                      motionName: Pn($, K, te)
                    }
                  ),
                  o
                )
              ]
            )
          ]);
        }
      );
    }
  }),
  Br = Pt(),
  Mr = Z({
    compatConfig: { MODE: 3 },
    name: 'DialogWrap',
    inheritAttrs: !1,
    props: tt(Br, { visible: !1 }),
    setup(e, t) {
      let { attrs: n, slots: o } = t;
      const a = X(e.visible);
      return (
        Zo({}, { inTriggerContext: !1 }),
        oe(
          () => e.visible,
          () => {
            e.visible && (a.value = !0);
          },
          { flush: 'post' }
        ),
        () => {
          const {
            visible: r,
            getContainer: i,
            forceRender: l,
            destroyOnClose: v = !1,
            afterClose: m
          } = e;
          let d = c(c(c({}, e), n), { ref: '_component', key: 'dialog' });
          return i === !1
            ? s(In, N(N({}, d), {}, { getOpenCount: () => 2 }), o)
            : !l && v && !a.value
            ? null
            : s(
                Aa,
                { autoLock: !0, visible: r, forceRender: l, getContainer: i },
                {
                  default: p => (
                    (d = c(c(c({}, d), p), {
                      afterClose: () => {
                        m == null || m(), (a.value = !1);
                      }
                    })),
                    s(In, d, o)
                  )
                }
              );
        }
      );
    }
  }),
  xo = Mr;
function Ar(e) {
  const t = X(null),
    n = Ue(c({}, e)),
    o = X([]),
    a = r => {
      t.value === null &&
        ((o.value = []),
        (t.value = Ie(() => {
          let i;
          o.value.forEach(l => {
            i = c(c({}, i), l);
          }),
            c(n, i),
            (t.value = null);
        }))),
        o.value.push(r);
    };
  return (
    Ee(() => {
      t.value && Ie.cancel(t.value);
    }),
    [n, a]
  );
}
function En(e, t, n, o) {
  const a = t + n,
    r = (n - o) / 2;
  if (n > o) {
    if (t > 0) return { [e]: r };
    if (t < 0 && a < o) return { [e]: -r };
  } else if (t < 0 || a > o) return { [e]: t < 0 ? r : -r };
  return {};
}
function Rr(e, t, n, o) {
  const { width: a, height: r } = Ra();
  let i = null;
  return (
    e <= a && t <= r
      ? (i = { x: 0, y: 0 })
      : (e > a || t > r) && (i = c(c({}, En('x', n, e, a)), En('y', o, t, r))),
    i
  );
}
var Dr =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
const Nn = Symbol('previewGroupContext'),
  Yt = {
    provide: e => {
      Qn(Nn, e);
    },
    inject: () =>
      qn(Nn, {
        isPreviewGroup: j(!1),
        previewUrls: R(() => new Map()),
        setPreviewUrls: () => {},
        current: X(null),
        setCurrent: () => {},
        setShowPreview: () => {},
        setMousePosition: () => {},
        registerImage: null,
        rootClassName: ''
      })
  },
  Lr = () => ({
    previewPrefixCls: String,
    preview: { type: [Boolean, Object], default: !0 },
    icons: { type: Object, default: () => ({}) }
  }),
  zr = Z({
    compatConfig: { MODE: 3 },
    name: 'PreviewGroup',
    inheritAttrs: !1,
    props: Lr(),
    setup(e, t) {
      let { slots: n } = t;
      const o = R(() => {
          const g = {
            visible: void 0,
            onVisibleChange: () => {},
            getContainer: void 0,
            current: 0
          };
          return typeof e.preview == 'object' ? To(e.preview, g) : g;
        }),
        a = Ue(new Map()),
        r = X(),
        i = R(() => o.value.visible),
        l = R(() => o.value.getContainer),
        v = (g, T) => {
          var w, E;
          (E = (w = o.value).onVisibleChange) === null ||
            E === void 0 ||
            E.call(w, g, T);
        },
        [m, d] = lt(!!i.value, { value: i, onChange: v }),
        p = X(null),
        f = R(() => i.value !== void 0),
        u = R(() => Array.from(a.keys())),
        C = R(() => u.value[o.value.current]),
        b = R(
          () =>
            new Map(
              Array.from(a)
                .filter(g => {
                  let [, { canPreview: T }] = g;
                  return !!T;
                })
                .map(g => {
                  let [T, { url: w }] = g;
                  return [T, w];
                })
            )
        ),
        x = function(g, T) {
          let w =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          a.set(g, { url: T, canPreview: w });
        },
        $ = g => {
          r.value = g;
        },
        S = g => {
          p.value = g;
        },
        y = function(g, T) {
          let w =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          const E = () => {
            a.delete(g);
          };
          return a.set(g, { url: T, canPreview: w }), E;
        },
        P = g => {
          g == null || g.stopPropagation(), d(!1), S(null);
        };
      return (
        oe(
          C,
          g => {
            $(g);
          },
          { immediate: !0, flush: 'post' }
        ),
        Ke(
          () => {
            m.value && f.value && $(C.value);
          },
          { flush: 'post' }
        ),
        Yt.provide({
          isPreviewGroup: j(!0),
          previewUrls: b,
          setPreviewUrls: x,
          current: r,
          setCurrent: $,
          setShowPreview: d,
          setMousePosition: S,
          registerImage: y
        }),
        () => {
          const g = Dr(o.value, []);
          return s(ke, null, [
            n.default && n.default(),
            s(
              So,
              N(
                N({}, g),
                {},
                {
                  'ria-hidden': !m.value,
                  visible: m.value,
                  prefixCls: e.previewPrefixCls,
                  onClose: P,
                  mousePosition: p.value,
                  src: b.value.get(r.value),
                  icons: e.icons,
                  getContainer: l.value
                }
              ),
              null
            )
          ]);
        }
      );
    }
  }),
  $o = zr,
  We = { x: 0, y: 0 },
  kr = c(c({}, Pt()), {
    src: String,
    alt: String,
    rootClassName: String,
    icons: { type: Object, default: () => ({}) }
  }),
  Hr = Z({
    compatConfig: { MODE: 3 },
    name: 'Preview',
    inheritAttrs: !1,
    props: kr,
    emits: ['close', 'afterClose'],
    setup(e, t) {
      let { emit: n, attrs: o } = t;
      const {
          rotateLeft: a,
          rotateRight: r,
          zoomIn: i,
          zoomOut: l,
          close: v,
          left: m,
          right: d,
          flipX: p,
          flipY: f
        } = Ue(e.icons),
        u = j(1),
        C = j(0),
        b = Ue({ x: 1, y: 1 }),
        [x, $] = Ar(We),
        S = () => n('close'),
        y = j(),
        P = Ue({ originX: 0, originY: 0, deltaX: 0, deltaY: 0 }),
        g = j(!1),
        T = Yt.inject(),
        { previewUrls: w, current: E, isPreviewGroup: k, setCurrent: D } = T,
        G = R(() => w.value.size),
        Q = R(() => Array.from(w.value.keys())),
        K = R(() => Q.value.indexOf(E.value)),
        te = R(() => (k.value ? w.value.get(E.value) : e.src)),
        h = R(() => k.value && G.value > 1),
        O = j({ wheelDirection: 0 }),
        I = () => {
          (u.value = 1),
            (C.value = 0),
            (b.x = 1),
            (b.y = 1),
            $(We),
            n('afterClose');
        },
        _ = A => {
          A ? (u.value += 0.5) : u.value++, $(We);
        },
        z = A => {
          u.value > 1 && (A ? (u.value -= 0.5) : u.value--), $(We);
        },
        U = () => {
          C.value += 90;
        },
        F = () => {
          C.value -= 90;
        },
        ae = () => {
          b.x = -b.x;
        },
        se = () => {
          b.y = -b.y;
        },
        q = A => {
          A.preventDefault(),
            A.stopPropagation(),
            K.value > 0 && D(Q.value[K.value - 1]);
        },
        ie = A => {
          A.preventDefault(),
            A.stopPropagation(),
            K.value < G.value - 1 && D(Q.value[K.value + 1]);
        },
        Y = ee({ [`${e.prefixCls}-moving`]: g.value }),
        ue = `${e.prefixCls}-operations-operation`,
        ge = `${e.prefixCls}-operations-icon`,
        Ce = [
          { icon: v, onClick: S, type: 'close' },
          { icon: i, onClick: () => _(), type: 'zoomIn' },
          {
            icon: l,
            onClick: () => z(),
            type: 'zoomOut',
            disabled: R(() => u.value === 1)
          },
          { icon: r, onClick: U, type: 'rotateRight' },
          { icon: a, onClick: F, type: 'rotateLeft' },
          { icon: p, onClick: ae, type: 'flipX' },
          { icon: f, onClick: se, type: 'flipY' }
        ],
        we = () => {
          if (e.visible && g.value) {
            const A = y.value.offsetWidth * u.value,
              B = y.value.offsetHeight * u.value,
              { left: M, top: H } = so(y.value),
              W = C.value % 180 !== 0;
            g.value = !1;
            const V = Rr(W ? B : A, W ? A : B, M, H);
            V && $(c({}, V));
          }
        },
        De = A => {
          A.button === 0 &&
            (A.preventDefault(),
            A.stopPropagation(),
            (P.deltaX = A.pageX - x.x),
            (P.deltaY = A.pageY - x.y),
            (P.originX = x.x),
            (P.originY = x.y),
            (g.value = !0));
        },
        Le = A => {
          e.visible &&
            g.value &&
            $({ x: A.pageX - P.deltaX, y: A.pageY - P.deltaY });
        },
        je = A => {
          if (!e.visible) return;
          A.preventDefault();
          const B = A.deltaY;
          O.value = { wheelDirection: B };
        },
        ce = A => {
          !e.visible ||
            !h.value ||
            (A.preventDefault(),
            A.keyCode === le.LEFT
              ? K.value > 0 && D(Q.value[K.value - 1])
              : A.keyCode === le.RIGHT &&
                K.value < G.value - 1 &&
                D(Q.value[K.value + 1]));
        },
        Ne = () => {
          e.visible &&
            (u.value !== 1 && (u.value = 1),
            (x.x !== We.x || x.y !== We.y) && $(We));
        };
      let xe = () => {};
      return (
        Ee(() => {
          oe(
            [() => e.visible, g],
            () => {
              xe();
              let A, B;
              const M = Ge(window, 'mouseup', we, !1),
                H = Ge(window, 'mousemove', Le, !1),
                W = Ge(window, 'wheel', je, { passive: !1 }),
                V = Ge(window, 'keydown', ce, !1);
              try {
                window.top !== window.self &&
                  ((A = Ge(window.top, 'mouseup', we, !1)),
                  (B = Ge(window.top, 'mousemove', Le, !1)));
              } catch {}
              xe = () => {
                M.remove(),
                  H.remove(),
                  W.remove(),
                  V.remove(),
                  A && A.remove(),
                  B && B.remove();
              };
            },
            { flush: 'post', immediate: !0 }
          ),
            oe([O], () => {
              const { wheelDirection: A } = O.value;
              A > 0 ? z(!0) : A < 0 && _(!0);
            });
        }),
        no(() => {
          xe();
        }),
        () => {
          const { visible: A, prefixCls: B, rootClassName: M } = e;
          return s(
            xo,
            N(
              N({}, o),
              {},
              {
                transitionName: e.transitionName,
                maskTransitionName: e.maskTransitionName,
                closable: !1,
                keyboard: !0,
                prefixCls: B,
                onClose: S,
                afterClose: I,
                visible: A,
                wrapClassName: Y,
                rootClassName: M,
                getContainer: e.getContainer
              }
            ),
            {
              default: () => [
                s('div', { class: [`${e.prefixCls}-operations-wrapper`, M] }, [
                  s('ul', { class: `${e.prefixCls}-operations` }, [
                    Ce.map(H => {
                      let { icon: W, onClick: V, type: J, disabled: pe } = H;
                      return s(
                        'li',
                        {
                          class: ee(ue, {
                            [`${e.prefixCls}-operations-operation-disabled`]:
                              pe && (pe == null ? void 0 : pe.value)
                          }),
                          onClick: V,
                          key: J
                        },
                        [da(W, { class: ge })]
                      );
                    })
                  ])
                ]),
                s(
                  'div',
                  {
                    class: `${e.prefixCls}-img-wrapper`,
                    style: { transform: `translate3d(${x.x}px, ${x.y}px, 0)` }
                  },
                  [
                    s(
                      'img',
                      {
                        onMousedown: De,
                        onDblclick: Ne,
                        ref: y,
                        class: `${e.prefixCls}-img`,
                        src: te.value,
                        alt: e.alt,
                        style: {
                          transform: `scale3d(${b.x * u.value}, ${b.y *
                            u.value}, 1) rotate(${C.value}deg)`
                        }
                      },
                      null
                    )
                  ]
                ),
                h.value &&
                  s(
                    'div',
                    {
                      class: ee(`${e.prefixCls}-switch-left`, {
                        [`${e.prefixCls}-switch-left-disabled`]: K.value <= 0
                      }),
                      onClick: q
                    },
                    [m]
                  ),
                h.value &&
                  s(
                    'div',
                    {
                      class: ee(`${e.prefixCls}-switch-right`, {
                        [`${e.prefixCls}-switch-right-disabled`]:
                          K.value >= G.value - 1
                      }),
                      onClick: ie
                    },
                    [d]
                  )
              ]
            }
          );
        }
      );
    }
  }),
  So = Hr;
var jr =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
const wo = () => ({
    src: String,
    wrapperClassName: String,
    wrapperStyle: { type: Object, default: void 0 },
    rootClassName: String,
    prefixCls: String,
    previewPrefixCls: String,
    width: [Number, String],
    height: [Number, String],
    previewMask: { type: [Boolean, Function], default: void 0 },
    placeholder: ne.any,
    fallback: String,
    preview: { type: [Boolean, Object], default: !0 },
    onClick: { type: Function },
    onError: { type: Function }
  }),
  To = (e, t) => {
    const n = c({}, e);
    return (
      Object.keys(t).forEach(o => {
        e[o] === void 0 && (n[o] = t[o]);
      }),
      n
    );
  };
let Fr = 0;
const Po = Z({
  compatConfig: { MODE: 3 },
  name: 'VcImage',
  inheritAttrs: !1,
  props: wo(),
  emits: ['click', 'error'],
  setup(e, t) {
    let { attrs: n, slots: o, emit: a } = t;
    const r = R(() => e.prefixCls),
      i = R(() => `${r.value}-preview`),
      l = R(() => {
        const _ = {
          visible: void 0,
          onVisibleChange: () => {},
          getContainer: void 0
        };
        return typeof e.preview == 'object' ? To(e.preview, _) : _;
      }),
      v = R(() => {
        var _;
        return (_ = l.value.src) !== null && _ !== void 0 ? _ : e.src;
      }),
      m = R(() => (e.placeholder && e.placeholder !== !0) || o.placeholder),
      d = R(() => l.value.visible),
      p = R(() => l.value.getContainer),
      f = R(() => d.value !== void 0),
      u = (_, z) => {
        var U, F;
        (F = (U = l.value).onVisibleChange) === null ||
          F === void 0 ||
          F.call(U, _, z);
      },
      [C, b] = lt(!!d.value, { value: d, onChange: u }),
      x = X(m.value ? 'loading' : 'normal');
    oe(
      () => e.src,
      () => {
        x.value = m.value ? 'loading' : 'normal';
      }
    );
    const $ = X(null),
      S = R(() => x.value === 'error'),
      y = Yt.inject(),
      {
        isPreviewGroup: P,
        setCurrent: g,
        setShowPreview: T,
        setMousePosition: w,
        registerImage: E
      } = y,
      k = X(Fr++),
      D = R(() => e.preview && !S.value),
      G = () => {
        x.value = 'normal';
      },
      Q = _ => {
        (x.value = 'error'), a('error', _);
      },
      K = _ => {
        if (!f.value) {
          const { left: z, top: U } = so(_.target);
          P.value
            ? (g(k.value), w({ x: z, y: U }))
            : ($.value = { x: z, y: U });
        }
        P.value ? T(!0) : b(!0), a('click', _);
      },
      te = () => {
        b(!1), f.value || ($.value = null);
      },
      h = X(null);
    oe(
      () => h,
      () => {
        x.value === 'loading' &&
          h.value.complete &&
          (h.value.naturalWidth || h.value.naturalHeight) &&
          G();
      }
    );
    let O = () => {};
    Ee(() => {
      oe(
        [v, D],
        () => {
          if ((O(), !P.value)) return () => {};
          (O = E(k.value, v.value, D.value)), D.value || O();
        },
        { flush: 'post', immediate: !0 }
      );
    }),
      no(() => {
        O();
      });
    const I = _ => (Gi(_) ? _ + 'px' : _);
    return () => {
      const {
          prefixCls: _,
          wrapperClassName: z,
          fallback: U,
          src: F,
          placeholder: ae,
          wrapperStyle: se,
          rootClassName: q,
          width: ie,
          height: Y,
          crossorigin: ue,
          decoding: ge,
          alt: Ce,
          sizes: we,
          srcset: De,
          usemap: Le,
          class: je,
          style: ce
        } = c(c({}, e), n),
        Ne = l.value,
        { icons: xe, maskClassName: A } = Ne,
        B = jr(Ne, ['icons', 'maskClassName']),
        M = ee(_, z, q, { [`${_}-error`]: S.value }),
        H = S.value && U ? U : v.value,
        W = {
          crossorigin: ue,
          decoding: ge,
          alt: Ce,
          sizes: we,
          srcset: De,
          usemap: Le,
          width: ie,
          height: Y,
          class: ee(`${_}-img`, { [`${_}-img-placeholder`]: ae === !0 }, je),
          style: c({ height: I(Y) }, ce)
        };
      return s(ke, null, [
        s(
          'div',
          {
            class: M,
            onClick: D.value
              ? K
              : V => {
                  a('click', V);
                },
            style: c({ width: I(ie), height: I(Y) }, se)
          },
          [
            s(
              'img',
              N(
                N(
                  N({}, W),
                  S.value && U ? { src: U } : { onLoad: G, onError: Q, src: F }
                ),
                {},
                { ref: h }
              ),
              null
            ),
            x.value === 'loading' &&
              s('div', { 'aria-hidden': 'true', class: `${_}-placeholder` }, [
                ae || (o.placeholder && o.placeholder())
              ]),
            o.previewMask &&
              D.value &&
              s('div', { class: [`${_}-mask`, A] }, [o.previewMask()])
          ]
        ),
        !P.value &&
          D.value &&
          s(
            So,
            N(
              N({}, B),
              {},
              {
                'aria-hidden': !C.value,
                visible: C.value,
                prefixCls: i.value,
                onClose: te,
                mousePosition: $.value,
                src: H,
                alt: Ce,
                getContainer: p.value,
                icons: xe,
                rootClassName: q
              }
            ),
            null
          )
      ]);
    };
  }
});
Po.PreviewGroup = $o;
const Wr = Po;
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        Gr(e, a, n[a]);
      });
  }
  return e;
}
function Gr(e, t, n) {
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
var Zt = function(t, n) {
  var o = Bn({}, t, n.attrs);
  return s(Ae, Bn({}, o, { icon: Za }), null);
};
Zt.displayName = 'RotateLeftOutlined';
Zt.inheritAttrs = !1;
const Vr = Zt;
function Mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        Xr(e, a, n[a]);
      });
  }
  return e;
}
function Xr(e, t, n) {
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
var Qt = function(t, n) {
  var o = Mn({}, t, n.attrs);
  return s(Ae, Mn({}, o, { icon: Qa }), null);
};
Qt.displayName = 'RotateRightOutlined';
Qt.inheritAttrs = !1;
const Ur = Qt;
function An(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        Kr(e, a, n[a]);
      });
  }
  return e;
}
function Kr(e, t, n) {
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
var qt = function(t, n) {
  var o = An({}, t, n.attrs);
  return s(Ae, An({}, o, { icon: qa }), null);
};
qt.displayName = 'ZoomInOutlined';
qt.inheritAttrs = !1;
const Yr = qt;
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        Zr(e, a, n[a]);
      });
  }
  return e;
}
function Zr(e, t, n) {
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
var Jt = function(t, n) {
  var o = Rn({}, t, n.attrs);
  return s(Ae, Rn({}, o, { icon: Ja }), null);
};
Jt.displayName = 'ZoomOutOutlined';
Jt.inheritAttrs = !1;
const Qr = Jt;
function Dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        qr(e, a, n[a]);
      });
  }
  return e;
}
function qr(e, t, n) {
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
var en = function(t, n) {
  var o = Dn({}, t, n.attrs);
  return s(Ae, Dn({}, o, { icon: ei }), null);
};
en.displayName = 'SwapOutlined';
en.inheritAttrs = !1;
const Ln = en;
function zn(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const Oo = e => {
    const { componentCls: t } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}${e.antCls}-zoom-enter, ${t}${e.antCls}-zoom-appear`]: {
            transform: 'none',
            opacity: 0,
            animationDuration: e.motionDurationSlow,
            userSelect: 'none'
          },
          [`${t}${e.antCls}-zoom-leave ${t}-content`]: {
            pointerEvents: 'none'
          },
          [`${t}-mask`]: c(c({}, zn('fixed')), {
            zIndex: e.zIndexPopupBase,
            height: '100%',
            backgroundColor: e.colorBgMask,
            [`${t}-hidden`]: { display: 'none' }
          }),
          [`${t}-wrap`]: c(c({}, zn('fixed')), {
            overflow: 'auto',
            outline: 0,
            WebkitOverflowScrolling: 'touch'
          })
        }
      },
      { [`${t}-root`]: go(e) }
    ];
  },
  Jr = e => {
    const { componentCls: t } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}-wrap`]: {
            zIndex: e.zIndexPopupBase,
            position: 'fixed',
            inset: 0,
            overflow: 'auto',
            outline: 0,
            WebkitOverflowScrolling: 'touch'
          },
          [`${t}-wrap-rtl`]: { direction: 'rtl' },
          [`${t}-centered`]: {
            textAlign: 'center',
            '&::before': {
              display: 'inline-block',
              width: 0,
              height: '100%',
              verticalAlign: 'middle',
              content: '""'
            },
            [t]: {
              top: 0,
              display: 'inline-block',
              paddingBottom: 0,
              textAlign: 'start',
              verticalAlign: 'middle'
            }
          },
          [`@media (max-width: ${e.screenSMMax})`]: {
            [t]: {
              maxWidth: 'calc(100vw - 16px)',
              margin: `${e.marginXS} auto`
            },
            [`${t}-centered`]: { [t]: { flex: 1 } }
          }
        }
      },
      {
        [t]: c(c({}, wt(e)), {
          pointerEvents: 'none',
          position: 'relative',
          top: 100,
          width: 'auto',
          maxWidth: `calc(100vw - ${e.margin * 2}px)`,
          margin: '0 auto',
          paddingBottom: e.paddingLG,
          [`${t}-title`]: {
            margin: 0,
            color: e.modalHeadingColor,
            fontWeight: e.fontWeightStrong,
            fontSize: e.modalHeaderTitleFontSize,
            lineHeight: e.modalHeaderTitleLineHeight,
            wordWrap: 'break-word'
          },
          [`${t}-content`]: {
            position: 'relative',
            backgroundColor: e.modalContentBg,
            backgroundClip: 'padding-box',
            border: 0,
            borderRadius: e.borderRadiusLG,
            boxShadow: e.boxShadowSecondary,
            pointerEvents: 'auto',
            padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
          },
          [`${t}-close`]: c(
            {
              position: 'absolute',
              top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
              insetInlineEnd:
                (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
              zIndex: e.zIndexPopupBase + 10,
              padding: 0,
              color: e.modalCloseColor,
              fontWeight: e.fontWeightStrong,
              lineHeight: 1,
              textDecoration: 'none',
              background: 'transparent',
              borderRadius: e.borderRadiusSM,
              width: e.modalConfirmIconSize,
              height: e.modalConfirmIconSize,
              border: 0,
              outline: 0,
              cursor: 'pointer',
              transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
              '&-x': {
                display: 'block',
                fontSize: e.fontSizeLG,
                fontStyle: 'normal',
                lineHeight: `${e.modalCloseBtnSize}px`,
                textAlign: 'center',
                textTransform: 'none',
                textRendering: 'auto'
              },
              '&:hover': {
                color: e.modalIconHoverColor,
                backgroundColor: e.wireframe
                  ? 'transparent'
                  : e.colorFillContent,
                textDecoration: 'none'
              },
              '&:active': {
                backgroundColor: e.wireframe
                  ? 'transparent'
                  : e.colorFillContentHover
              }
            },
            Ft(e)
          ),
          [`${t}-header`]: {
            color: e.colorText,
            background: e.modalHeaderBg,
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
            marginBottom: e.marginXS
          },
          [`${t}-body`]: {
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            wordWrap: 'break-word'
          },
          [`${t}-footer`]: {
            textAlign: 'end',
            background: e.modalFooterBg,
            marginTop: e.marginSM,
            [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
              marginBottom: 0,
              marginInlineStart: e.marginXS
            }
          },
          [`${t}-open`]: { overflow: 'hidden' }
        })
      },
      {
        [`${t}-pure-panel`]: {
          top: 'auto',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
            display: 'flex',
            flexDirection: 'column',
            flex: 'auto'
          },
          [`${t}-confirm-body`]: { marginBottom: 'auto' }
        }
      }
    ];
  },
  el = e => {
    const { componentCls: t } = e,
      n = `${t}-confirm`;
    return {
      [n]: {
        '&-rtl': { direction: 'rtl' },
        [`${e.antCls}-modal-header`]: { display: 'none' },
        [`${n}-body-wrapper`]: c({}, Qo()),
        [`${n}-body`]: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          [`${n}-title`]: {
            flex: '0 0 100%',
            display: 'block',
            overflow: 'hidden',
            color: e.colorTextHeading,
            fontWeight: e.fontWeightStrong,
            fontSize: e.modalHeaderTitleFontSize,
            lineHeight: e.modalHeaderTitleLineHeight,
            [`+ ${n}-content`]: {
              marginBlockStart: e.marginXS,
              flexBasis: '100%',
              maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`
            }
          },
          [`${n}-content`]: { color: e.colorText, fontSize: e.fontSize },
          [`> ${e.iconCls}`]: {
            flex: 'none',
            marginInlineEnd: e.marginSM,
            fontSize: e.modalConfirmIconSize,
            [`+ ${n}-title`]: { flex: 1 },
            [`+ ${n}-title + ${n}-content`]: {
              marginInlineStart: e.modalConfirmIconSize + e.marginSM
            }
          }
        },
        [`${n}-btns`]: {
          textAlign: 'end',
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS
          }
        }
      },
      [`${n}-error ${n}-body > ${e.iconCls}`]: { color: e.colorError },
      [`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]: { color: e.colorWarning },
      [`${n}-info ${n}-body > ${e.iconCls}`]: { color: e.colorInfo },
      [`${n}-success ${n}-body > ${e.iconCls}`]: { color: e.colorSuccess },
      [`${t}-zoom-leave ${t}-btns`]: { pointerEvents: 'none' }
    };
  },
  tl = e => {
    const { componentCls: t } = e;
    return {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: 'rtl',
          [`${t}-confirm-body`]: { direction: 'rtl' }
        }
      }
    };
  },
  nl = e => {
    const { componentCls: t, antCls: n } = e,
      o = `${t}-confirm`;
    return {
      [t]: {
        [`${t}-content`]: { padding: 0 },
        [`${t}-header`]: {
          padding: e.modalHeaderPadding,
          borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
          marginBottom: 0
        },
        [`${t}-body`]: { padding: e.modalBodyPadding },
        [`${t}-footer`]: {
          padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
          borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
          borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
          marginTop: 0
        }
      },
      [o]: {
        [`${n}-modal-body`]: {
          padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px`
        },
        [`${o}-body`]: {
          [`> ${e.iconCls}`]: {
            marginInlineEnd: e.margin,
            [`+ ${o}-title + ${o}-content`]: {
              marginInlineStart: e.modalConfirmIconSize + e.margin
            }
          }
        },
        [`${o}-btns`]: { marginTop: e.marginLG }
      }
    };
  },
  ol = St('Modal', e => {
    const t = e.padding,
      n = e.fontSizeHeading5,
      o = e.lineHeightHeading5,
      a = yt(e, {
        modalBodyPadding: e.paddingLG,
        modalHeaderBg: e.colorBgElevated,
        modalHeaderPadding: `${t}px ${e.paddingLG}px`,
        modalHeaderBorderWidth: e.lineWidth,
        modalHeaderBorderStyle: e.lineType,
        modalHeaderTitleLineHeight: o,
        modalHeaderTitleFontSize: n,
        modalHeaderBorderColorSplit: e.colorSplit,
        modalHeaderCloseSize: o * n + t * 2,
        modalContentBg: e.colorBgElevated,
        modalHeadingColor: e.colorTextHeading,
        modalCloseColor: e.colorTextDescription,
        modalFooterBg: 'transparent',
        modalFooterBorderColorSplit: e.colorSplit,
        modalFooterBorderStyle: e.lineType,
        modalFooterPaddingVertical: e.paddingXS,
        modalFooterPaddingHorizontal: e.padding,
        modalFooterBorderWidth: e.lineWidth,
        modalConfirmTitleFontSize: e.fontSizeLG,
        modalIconHoverColor: e.colorIconHover,
        modalConfirmIconSize: e.fontSize * e.lineHeight,
        modalCloseBtnSize: e.controlHeightLG * 0.55
      });
    return [Jr(a), el(a), tl(a), Oo(a), e.wireframe && nl(a), co(a, 'zoom')];
  }),
  Ht = e => ({ position: e || 'absolute', inset: 0 }),
  al = e => {
    const {
      iconCls: t,
      motionDurationSlow: n,
      paddingXXS: o,
      marginXXS: a,
      prefixCls: r
    } = e;
    return {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      background: new qe('#000').setAlpha(0.5).toRgbString(),
      cursor: 'pointer',
      opacity: 0,
      transition: `opacity ${n}`,
      [`.${r}-mask-info`]: c(c({}, Un), {
        padding: `0 ${o}px`,
        [t]: { marginInlineEnd: a, svg: { verticalAlign: 'baseline' } }
      })
    };
  },
  il = e => {
    const {
        previewCls: t,
        modalMaskBg: n,
        paddingSM: o,
        previewOperationColorDisabled: a,
        motionDurationSlow: r
      } = e,
      i = new qe(n).setAlpha(0.1),
      l = i.clone().setAlpha(0.2);
    return {
      [`${t}-operations`]: c(c({}, wt(e)), {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        color: e.previewOperationColor,
        listStyle: 'none',
        background: i.toRgbString(),
        pointerEvents: 'auto',
        '&-operation': {
          marginInlineStart: o,
          padding: o,
          cursor: 'pointer',
          transition: `all ${r}`,
          userSelect: 'none',
          '&:hover': { background: l.toRgbString() },
          '&-disabled': { color: a, pointerEvents: 'none' },
          '&:last-of-type': { marginInlineStart: 0 }
        },
        '&-progress': {
          position: 'absolute',
          left: { _skip_check_: !0, value: '50%' },
          transform: 'translateX(-50%)'
        },
        '&-icon': { fontSize: e.previewOperationSize }
      })
    };
  },
  rl = e => {
    const {
        modalMaskBg: t,
        iconCls: n,
        previewOperationColorDisabled: o,
        previewCls: a,
        zIndexPopup: r,
        motionDurationSlow: i
      } = e,
      l = new qe(t).setAlpha(0.1),
      v = l.clone().setAlpha(0.2);
    return {
      [`${a}-switch-left, ${a}-switch-right`]: {
        position: 'fixed',
        insetBlockStart: '50%',
        zIndex: r + 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: e.imagePreviewSwitchSize,
        height: e.imagePreviewSwitchSize,
        marginTop: -e.imagePreviewSwitchSize / 2,
        color: e.previewOperationColor,
        background: l.toRgbString(),
        borderRadius: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        transition: `all ${i}`,
        pointerEvents: 'auto',
        userSelect: 'none',
        '&:hover': { background: v.toRgbString() },
        '&-disabled': {
          '&, &:hover': {
            color: o,
            background: 'transparent',
            cursor: 'not-allowed',
            [`> ${n}`]: { cursor: 'not-allowed' }
          }
        },
        [`> ${n}`]: { fontSize: e.previewOperationSize }
      },
      [`${a}-switch-left`]: { insetInlineStart: e.marginSM },
      [`${a}-switch-right`]: { insetInlineEnd: e.marginSM }
    };
  },
  ll = e => {
    const {
      motionEaseOut: t,
      previewCls: n,
      motionDurationSlow: o,
      componentCls: a
    } = e;
    return [
      {
        [`${a}-preview-root`]: {
          [n]: { height: '100%', textAlign: 'center', pointerEvents: 'none' },
          [`${n}-body`]: c(c({}, Ht()), { overflow: 'hidden' }),
          [`${n}-img`]: {
            maxWidth: '100%',
            maxHeight: '100%',
            verticalAlign: 'middle',
            transform: 'scale3d(1, 1, 1)',
            cursor: 'grab',
            transition: `transform ${o} ${t} 0s`,
            userSelect: 'none',
            pointerEvents: 'auto',
            '&-wrapper': c(c({}, Ht()), {
              transition: `transform ${o} ${t} 0s`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&::before': {
                display: 'inline-block',
                width: 1,
                height: '50%',
                marginInlineEnd: -1,
                content: '""'
              }
            })
          },
          [`${n}-moving`]: {
            [`${n}-preview-img`]: {
              cursor: 'grabbing',
              '&-wrapper': { transitionDuration: '0s' }
            }
          }
        }
      },
      { [`${a}-preview-root`]: { [`${n}-wrap`]: { zIndex: e.zIndexPopup } } },
      {
        [`${a}-preview-operations-wrapper`]: {
          position: 'fixed',
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: e.zIndexPopup + 1,
          width: '100%'
        },
        '&': [il(e), rl(e)]
      }
    ];
  },
  sl = e => {
    const { componentCls: t } = e;
    return {
      [t]: {
        position: 'relative',
        display: 'inline-block',
        [`${t}-img`]: {
          width: '100%',
          height: 'auto',
          verticalAlign: 'middle'
        },
        [`${t}-img-placeholder`]: {
          backgroundColor: e.colorBgContainerDisabled,
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '30%'
        },
        [`${t}-mask`]: c({}, al(e)),
        [`${t}-mask:hover`]: { opacity: 1 },
        [`${t}-placeholder`]: c({}, Ht())
      }
    };
  },
  cl = e => {
    const { previewCls: t } = e;
    return { [`${t}-root`]: co(e, 'zoom'), '&': go(e, !0) };
  },
  _o = St(
    'Image',
    e => {
      const t = `${e.componentCls}-preview`,
        n = yt(e, {
          previewCls: t,
          modalMaskBg: new qe('#000').setAlpha(0.45).toRgbString(),
          imagePreviewSwitchSize: e.controlHeightLG
        });
      return [sl(n), ll(n), Oo(yt(n, { componentCls: t })), cl(n)];
    },
    e => ({
      zIndexPopup: e.zIndexPopupBase + 80,
      previewOperationColor: new qe(e.colorTextLightSolid).toRgbString(),
      previewOperationColorDisabled: new qe(e.colorTextLightSolid)
        .setAlpha(0.25)
        .toRgbString(),
      previewOperationSize: e.fontSizeIcon * 1.5
    })
  ),
  Io = {
    rotateLeft: s(Vr, null, null),
    rotateRight: s(Ur, null, null),
    zoomIn: s(Yr, null, null),
    zoomOut: s(Qr, null, null),
    close: s(Wt, null, null),
    left: s(Da, null, null),
    right: s(La, null, null),
    flipX: s(Ln, null, null),
    flipY: s(Ln, { rotate: 90 }, null)
  },
  ul = () => ({ previewPrefixCls: String, preview: qo() }),
  dl = Z({
    compatConfig: { MODE: 3 },
    name: 'AImagePreviewGroup',
    inheritAttrs: !1,
    props: ul(),
    setup(e, t) {
      let { attrs: n, slots: o } = t;
      const { prefixCls: a, rootPrefixCls: r } = et('image', e),
        i = R(() => `${a.value}-preview`),
        [l, v] = _o(a),
        m = R(() => {
          const { preview: d } = e;
          if (d === !1) return d;
          const p = typeof d == 'object' ? d : {};
          return c(c({}, p), {
            rootClassName: v.value,
            transitionName: He(r.value, 'zoom', p.transitionName),
            maskTransitionName: He(r.value, 'fade', p.maskTransitionName)
          });
        });
      return () =>
        l(
          s(
            $o,
            N(
              N({}, c(c({}, n), e)),
              {},
              { preview: m.value, icons: Io, previewPrefixCls: i.value }
            ),
            o
          )
        );
    }
  }),
  fl = dl,
  Ve = Z({
    name: 'AImage',
    inheritAttrs: !1,
    props: wo(),
    setup(e, t) {
      let { slots: n, attrs: o } = t;
      const { prefixCls: a, rootPrefixCls: r, configProvider: i } = et(
          'image',
          e
        ),
        [l, v] = _o(a),
        m = R(() => {
          const { preview: d } = e;
          if (d === !1) return d;
          const p = typeof d == 'object' ? d : {};
          return c(c({ icons: Io }, p), {
            transitionName: He(r.value, 'zoom', p.transitionName),
            maskTransitionName: He(r.value, 'fade', p.maskTransitionName)
          });
        });
      return () => {
        var d, p;
        const f =
            ((p =
              (d = i.locale) === null || d === void 0 ? void 0 : d.value) ===
              null || p === void 0
              ? void 0
              : p.Image) || Yn.Image,
          u = () =>
            s('div', { class: `${a.value}-mask-info` }, [
              s(za, null, null),
              f == null ? void 0 : f.preview
            ]),
          { previewMask: C = n.previewMask || u } = e;
        return l(
          s(
            Wr,
            N(
              N({}, c(c(c({}, o), e), { prefixCls: a.value })),
              {},
              { preview: m.value, rootClassName: ee(e.rootClassName, v.value) }
            ),
            c(c({}, n), { previewMask: typeof C == 'function' ? C : null })
          )
        );
      };
    }
  });
Ve.PreviewGroup = fl;
Ve.install = function(e) {
  return (
    e.component(Ve.name, Ve),
    e.component(Ve.PreviewGroup.name, Ve.PreviewGroup),
    e
  );
};
const pl = Ve;
var vl =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
let jt;
const ml = e => {
  (jt = { x: e.pageX, y: e.pageY }), setTimeout(() => (jt = null), 100);
};
ka() && Ge(document.documentElement, 'click', ml, !0);
const gl = () => ({
    prefixCls: String,
    visible: { type: Boolean, default: void 0 },
    open: { type: Boolean, default: void 0 },
    confirmLoading: { type: Boolean, default: void 0 },
    title: ne.any,
    closable: { type: Boolean, default: void 0 },
    closeIcon: ne.any,
    onOk: Function,
    onCancel: Function,
    'onUpdate:visible': Function,
    'onUpdate:open': Function,
    onChange: Function,
    afterClose: Function,
    centered: { type: Boolean, default: void 0 },
    width: [String, Number],
    footer: ne.any,
    okText: ne.any,
    okType: String,
    cancelText: ne.any,
    icon: ne.any,
    maskClosable: { type: Boolean, default: void 0 },
    forceRender: { type: Boolean, default: void 0 },
    okButtonProps: _e(),
    cancelButtonProps: _e(),
    destroyOnClose: { type: Boolean, default: void 0 },
    wrapClassName: String,
    maskTransitionName: String,
    transitionName: String,
    getContainer: {
      type: [String, Function, Boolean, Object],
      default: void 0
    },
    zIndex: Number,
    bodyStyle: _e(),
    maskStyle: _e(),
    mask: { type: Boolean, default: void 0 },
    keyboard: { type: Boolean, default: void 0 },
    wrapProps: Object,
    focusTriggerAfterClose: { type: Boolean, default: void 0 },
    modalRender: Function,
    mousePosition: _e()
  }),
  ye = Z({
    compatConfig: { MODE: 3 },
    name: 'AModal',
    inheritAttrs: !1,
    props: tt(gl(), { width: 520, confirmLoading: !1, okType: 'primary' }),
    setup(e, t) {
      let { emit: n, slots: o, attrs: a } = t;
      const [r] = Gt('Modal'),
        {
          prefixCls: i,
          rootPrefixCls: l,
          direction: v,
          getPopupContainer: m
        } = et('modal', e),
        [d, p] = ol(i);
      Je(e.visible === void 0);
      const f = b => {
          n('update:visible', !1),
            n('update:open', !1),
            n('cancel', b),
            n('change', !1);
        },
        u = b => {
          n('ok', b);
        },
        C = () => {
          var b, x;
          const {
            okText: $ = (b = o.okText) === null || b === void 0
              ? void 0
              : b.call(o),
            okType: S,
            cancelText: y = (x = o.cancelText) === null || x === void 0
              ? void 0
              : x.call(o),
            confirmLoading: P
          } = e;
          return s(ke, null, [
            s(Qe, N({ onClick: f }, e.cancelButtonProps), {
              default: () => [y || r.value.cancelText]
            }),
            s(
              Qe,
              N(N({}, Ha(S)), {}, { loading: P, onClick: u }, e.okButtonProps),
              { default: () => [$ || r.value.okText] }
            )
          ]);
        };
      return () => {
        var b, x;
        const {
            prefixCls: $,
            visible: S,
            open: y,
            wrapClassName: P,
            centered: g,
            getContainer: T,
            closeIcon: w = (b = o.closeIcon) === null || b === void 0
              ? void 0
              : b.call(o),
            focusTriggerAfterClose: E = !0
          } = e,
          k = vl(e, [
            'prefixCls',
            'visible',
            'open',
            'wrapClassName',
            'centered',
            'getContainer',
            'closeIcon',
            'focusTriggerAfterClose'
          ]),
          D = ee(P, {
            [`${i.value}-centered`]: !!g,
            [`${i.value}-wrap-rtl`]: v.value === 'rtl'
          });
        return d(
          s(
            xo,
            N(
              N(N({}, k), a),
              {},
              {
                rootClassName: p.value,
                class: ee(p.value, a.class),
                getContainer: T || (m == null ? void 0 : m.value),
                prefixCls: i.value,
                wrapClassName: D,
                visible: y ?? S,
                onClose: f,
                focusTriggerAfterClose: E,
                transitionName: He(l.value, 'zoom', e.transitionName),
                maskTransitionName: He(l.value, 'fade', e.maskTransitionName),
                mousePosition:
                  (x = k.mousePosition) !== null && x !== void 0 ? x : jt
              }
            ),
            c(c({}, o), {
              footer: o.footer || C,
              closeIcon: () =>
                s('span', { class: `${i.value}-close-x` }, [
                  w || s(Wt, { class: `${i.value}-close-icon` }, null)
                ])
            })
          )
        );
      };
    }
  });
function Ye(e) {
  return typeof e == 'function' ? e() : e;
}
const Eo = Z({
    name: 'ConfirmDialog',
    inheritAttrs: !1,
    props: [
      'icon',
      'onCancel',
      'onOk',
      'close',
      'closable',
      'zIndex',
      'afterClose',
      'visible',
      'open',
      'keyboard',
      'centered',
      'getContainer',
      'maskStyle',
      'okButtonProps',
      'cancelButtonProps',
      'okType',
      'prefixCls',
      'okCancel',
      'width',
      'mask',
      'maskClosable',
      'okText',
      'cancelText',
      'autoFocusButton',
      'transitionName',
      'maskTransitionName',
      'type',
      'title',
      'content',
      'direction',
      'rootPrefixCls',
      'bodyStyle',
      'closeIcon',
      'modalRender',
      'focusTriggerAfterClose',
      'wrapClassName',
      'confirmPrefixCls',
      'footer'
    ],
    setup(e, t) {
      let { attrs: n } = t;
      const [o] = Gt('Modal');
      return () => {
        const {
          icon: a,
          onCancel: r,
          onOk: i,
          close: l,
          okText: v,
          closable: m = !1,
          zIndex: d,
          afterClose: p,
          keyboard: f,
          centered: u,
          getContainer: C,
          maskStyle: b,
          okButtonProps: x,
          cancelButtonProps: $,
          okCancel: S,
          width: y = 416,
          mask: P = !0,
          maskClosable: g = !1,
          type: T,
          open: w,
          title: E,
          content: k,
          direction: D,
          closeIcon: G,
          modalRender: Q,
          focusTriggerAfterClose: K,
          rootPrefixCls: te,
          bodyStyle: h,
          wrapClassName: O,
          footer: I
        } = e;
        let _ = a;
        if (!a && a !== null)
          switch (T) {
            case 'info':
              _ = s(na, null, null);
              break;
            case 'success':
              _ = s(ta, null, null);
              break;
            case 'error':
              _ = s(ea, null, null);
              break;
            default:
              _ = s(Jo, null, null);
          }
        const z = e.okType || 'primary',
          U = e.prefixCls || 'ant-modal',
          F = `${U}-confirm`,
          ae = n.style || {},
          se = S ?? T === 'confirm',
          q = e.autoFocusButton === null ? !1 : e.autoFocusButton || 'ok',
          ie = `${U}-confirm`,
          Y = ee(
            ie,
            `${ie}-${e.type}`,
            { [`${ie}-rtl`]: D === 'rtl' },
            n.class
          ),
          ue = o.value,
          ge =
            se &&
            s(
              pn,
              {
                actionFn: r,
                close: l,
                autofocus: q === 'cancel',
                buttonProps: $,
                prefixCls: `${te}-btn`
              },
              { default: () => [Ye(e.cancelText) || ue.cancelText] }
            );
        return s(
          ye,
          {
            prefixCls: U,
            class: Y,
            wrapClassName: ee({ [`${ie}-centered`]: !!u }, O),
            onCancel: Ce => (l == null ? void 0 : l({ triggerCancel: !0 }, Ce)),
            open: w,
            title: '',
            footer: '',
            transitionName: He(te, 'zoom', e.transitionName),
            maskTransitionName: He(te, 'fade', e.maskTransitionName),
            mask: P,
            maskClosable: g,
            maskStyle: b,
            style: ae,
            bodyStyle: h,
            width: y,
            zIndex: d,
            afterClose: p,
            keyboard: f,
            centered: u,
            getContainer: C,
            closable: m,
            closeIcon: G,
            modalRender: Q,
            focusTriggerAfterClose: K
          },
          {
            default: () => [
              s('div', { class: `${F}-body-wrapper` }, [
                s('div', { class: `${F}-body` }, [
                  Ye(_),
                  E === void 0
                    ? null
                    : s('span', { class: `${F}-title` }, [Ye(E)]),
                  s('div', { class: `${F}-content` }, [Ye(k)])
                ]),
                I !== void 0
                  ? Ye(I)
                  : s('div', { class: `${F}-btns` }, [
                      ge,
                      s(
                        pn,
                        {
                          type: z,
                          actionFn: i,
                          close: l,
                          autofocus: q === 'ok',
                          buttonProps: x,
                          prefixCls: `${te}-btn`
                        },
                        {
                          default: () => [
                            Ye(v) || (se ? ue.okText : ue.justOkText)
                          ]
                        }
                      )
                    ])
              ])
            ]
          }
        );
      };
    }
  }),
  bl = [],
  Xe = bl,
  yl = e => {
    const t = document.createDocumentFragment();
    let n = c(c({}, Re(e, ['parentContext', 'appContext'])), {
        close: r,
        open: !0
      }),
      o = null;
    function a() {
      o && (cn(null, t), (o = null));
      for (var m = arguments.length, d = new Array(m), p = 0; p < m; p++)
        d[p] = arguments[p];
      const f = d.some(u => u && u.triggerCancel);
      e.onCancel && f && e.onCancel(() => {}, ...d.slice(1));
      for (let u = 0; u < Xe.length; u++)
        if (Xe[u] === r) {
          Xe.splice(u, 1);
          break;
        }
    }
    function r() {
      for (var m = arguments.length, d = new Array(m), p = 0; p < m; p++)
        d[p] = arguments[p];
      (n = c(c({}, n), {
        open: !1,
        afterClose: () => {
          typeof e.afterClose == 'function' && e.afterClose(), a.apply(this, d);
        }
      })),
        n.visible && delete n.visible,
        i(n);
    }
    function i(m) {
      typeof m == 'function' ? (n = m(n)) : (n = c(c({}, n), m)),
        o && ja(o, n, t);
    }
    const l = m => {
      const d = ia,
        p = d.prefixCls,
        f = m.prefixCls || `${p}-modal`,
        u = d.iconPrefixCls,
        C = oa();
      return s(aa, N(N({}, d), {}, { prefixCls: p }), {
        default: () => [
          s(
            Eo,
            N(
              N({}, m),
              {},
              {
                rootPrefixCls: p,
                prefixCls: f,
                iconPrefixCls: u,
                locale: C,
                cancelText: m.cancelText || C.cancelText
              }
            ),
            null
          )
        ]
      });
    };
    function v(m) {
      const d = s(l, c({}, m));
      return (
        (d.appContext = e.parentContext || e.appContext || d.appContext),
        cn(d, t),
        d
      );
    }
    return (o = v(n)), Xe.push(r), { destroy: r, update: i };
  },
  ut = yl;
function No(e) {
  return c(c({}, e), { type: 'warning' });
}
function Bo(e) {
  return c(c({}, e), { type: 'info' });
}
function Mo(e) {
  return c(c({}, e), { type: 'success' });
}
function Ao(e) {
  return c(c({}, e), { type: 'error' });
}
function Ro(e) {
  return c(c({}, e), { type: 'confirm' });
}
const hl = () => ({
    config: Object,
    afterClose: Function,
    destroyAction: Function,
    open: Boolean
  }),
  Cl = Z({
    name: 'HookModal',
    inheritAttrs: !1,
    props: tt(hl(), { config: { width: 520, okType: 'primary' } }),
    setup(e, t) {
      let { expose: n } = t;
      var o;
      const a = R(() => e.open),
        r = R(() => e.config),
        { direction: i, getPrefixCls: l } = ra(),
        v = l('modal'),
        m = l(),
        d = () => {
          var C, b;
          e == null || e.afterClose(),
            (b = (C = r.value).afterClose) === null ||
              b === void 0 ||
              b.call(C);
        },
        p = function() {
          e.destroyAction(...arguments);
        };
      n({ destroy: p });
      const f =
          (o = r.value.okCancel) !== null && o !== void 0
            ? o
            : r.value.type === 'confirm',
        [u] = Gt('Modal', Yn.Modal);
      return () =>
        s(
          Eo,
          N(
            N({ prefixCls: v, rootPrefixCls: m }, r.value),
            {},
            {
              close: p,
              open: a.value,
              afterClose: d,
              okText:
                r.value.okText ||
                (f
                  ? u == null
                    ? void 0
                    : u.value.okText
                  : u == null
                  ? void 0
                  : u.value.justOkText),
              direction: r.value.direction || i.value,
              cancelText:
                r.value.cancelText || (u == null ? void 0 : u.value.cancelText)
            }
          ),
          null
        );
    }
  });
let kn = 0;
const xl = Z({
  name: 'ElementsHolder',
  inheritAttrs: !1,
  setup(e, t) {
    let { expose: n } = t;
    const o = j([]);
    return (
      n({
        addModal: r => (
          o.value.push(r),
          (o.value = o.value.slice()),
          () => {
            o.value = o.value.filter(i => i !== r);
          }
        )
      }),
      () => o.value.map(r => r())
    );
  }
});
function $l() {
  const e = j(null),
    t = j([]);
  oe(
    t,
    () => {
      t.value.length &&
        ([...t.value].forEach(i => {
          i();
        }),
        (t.value = []));
    },
    { immediate: !0 }
  );
  const n = r =>
      function(l) {
        var v;
        kn += 1;
        const m = j(!0),
          d = j(null),
          p = j(L(l)),
          f = j({});
        oe(
          () => l,
          y => {
            x(c(c({}, oo(y) ? y.value : y), f.value));
          }
        );
        const u = function() {
          m.value = !1;
          for (var y = arguments.length, P = new Array(y), g = 0; g < y; g++)
            P[g] = arguments[g];
          const T = P.some(w => w && w.triggerCancel);
          p.value.onCancel && T && p.value.onCancel(() => {}, ...P.slice(1));
        };
        let C;
        const b = () =>
          s(
            Cl,
            {
              key: `modal-${kn}`,
              config: r(p.value),
              ref: d,
              open: m.value,
              destroyAction: u,
              afterClose: () => {
                C == null || C();
              }
            },
            null
          );
        (C = (v = e.value) === null || v === void 0 ? void 0 : v.addModal(b)),
          C && Xe.push(C);
        const x = y => {
          p.value = c(c({}, p.value), y);
        };
        return {
          destroy: () => {
            d.value ? u() : (t.value = [...t.value, u]);
          },
          update: y => {
            (f.value = y),
              d.value ? x(y) : (t.value = [...t.value, () => x(y)]);
          }
        };
      },
    o = R(() => ({
      info: n(Bo),
      success: n(Mo),
      error: n(Ao),
      warning: n(No),
      confirm: n(Ro)
    })),
    a = Symbol('modalHolderKey');
  return [o.value, () => s(xl, { key: a, ref: e }, null)];
}
function Do(e) {
  return ut(No(e));
}
ye.useModal = $l;
ye.info = function(t) {
  return ut(Bo(t));
};
ye.success = function(t) {
  return ut(Mo(t));
};
ye.error = function(t) {
  return ut(Ao(t));
};
ye.warning = Do;
ye.warn = Do;
ye.confirm = function(t) {
  return ut(Ro(t));
};
ye.destroyAll = function() {
  for (; Xe.length; ) {
    const t = Xe.pop();
    t && t();
  }
};
ye.install = function(e) {
  return e.component(ye.name, ye), e;
};
var Sl =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
const wl = {
    border: 0,
    background: 'transparent',
    padding: 0,
    lineHeight: 'inherit',
    display: 'inline-block'
  },
  Tl = Z({
    compatConfig: { MODE: 3 },
    name: 'TransButton',
    inheritAttrs: !1,
    props: {
      noStyle: { type: Boolean, default: void 0 },
      onClick: Function,
      disabled: { type: Boolean, default: void 0 },
      autofocus: { type: Boolean, default: void 0 }
    },
    setup(e, t) {
      let { slots: n, emit: o, attrs: a, expose: r } = t;
      const i = j(),
        l = f => {
          const { keyCode: u } = f;
          u === le.ENTER && f.preventDefault();
        },
        v = f => {
          const { keyCode: u } = f;
          u === le.ENTER && o('click', f);
        },
        m = f => {
          o('click', f);
        },
        d = () => {
          i.value && i.value.focus();
        },
        p = () => {
          i.value && i.value.blur();
        };
      return (
        Ee(() => {
          e.autofocus && d();
        }),
        r({ focus: d, blur: p }),
        () => {
          var f;
          const { noStyle: u, disabled: C } = e,
            b = Sl(e, ['noStyle', 'disabled']);
          let x = {};
          return (
            u || (x = c({}, wl)),
            C && (x.pointerEvents = 'none'),
            s(
              'div',
              N(
                N(N({ role: 'button', tabindex: 0, ref: i }, b), a),
                {},
                {
                  onClick: m,
                  onKeydown: l,
                  onKeyup: v,
                  style: c(c({}, x), a.style || {})
                }
              ),
              [(f = n.default) === null || f === void 0 ? void 0 : f.call(n)]
            )
          );
        }
      );
    }
  }),
  Hn = Tl;
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        Pl(e, a, n[a]);
      });
  }
  return e;
}
function Pl(e, t, n) {
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
var tn = function(t, n) {
  var o = jn({}, t, n.attrs);
  return s(Ae, jn({}, o, { icon: ti }), null);
};
tn.displayName = 'EnterOutlined';
tn.inheritAttrs = !1;
const Ol = tn,
  _l = (e, t, n, o) => {
    const { sizeMarginHeadingVerticalEnd: a, fontWeightStrong: r } = o;
    return {
      marginBottom: a,
      color: n,
      fontWeight: r,
      fontSize: e,
      lineHeight: t
    };
  },
  Il = e => {
    const t = [1, 2, 3, 4, 5],
      n = {};
    return (
      t.forEach(o => {
        n[
          `
      h${o}&,
      div&-h${o},
      div&-h${o} > textarea,
      h${o}
    `
        ] = _l(
          e[`fontSizeHeading${o}`],
          e[`lineHeightHeading${o}`],
          e.colorTextHeading,
          e
        );
      }),
      n
    );
  },
  El = e => {
    const { componentCls: t } = e;
    return {
      'a&, a': c(c({}, uo(e)), {
        textDecoration: e.linkDecoration,
        '&:active, &:hover': { textDecoration: e.linkHoverDecoration },
        [`&[disabled], &${t}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
          '&:active, &:hover': { color: e.colorTextDisabled },
          '&:active': { pointerEvents: 'none' }
        }
      })
    };
  },
  Nl = () => ({
    code: {
      margin: '0 0.2em',
      paddingInline: '0.4em',
      paddingBlock: '0.2em 0.1em',
      fontSize: '85%',
      background: 'rgba(150, 150, 150, 0.1)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderRadius: 3
    },
    kbd: {
      margin: '0 0.2em',
      paddingInline: '0.4em',
      paddingBlock: '0.15em 0.1em',
      fontSize: '90%',
      background: 'rgba(150, 150, 150, 0.06)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderBottomWidth: 2,
      borderRadius: 3
    },
    mark: { padding: 0, backgroundColor: ni[2] },
    'u, ins': { textDecoration: 'underline', textDecorationSkipInk: 'auto' },
    's, del': { textDecoration: 'line-through' },
    strong: { fontWeight: 600 },
    'ul, ol': {
      marginInline: 0,
      marginBlock: '0 1em',
      padding: 0,
      li: {
        marginInline: '20px 0',
        marginBlock: 0,
        paddingInline: '4px 0',
        paddingBlock: 0
      }
    },
    ul: { listStyleType: 'circle', ul: { listStyleType: 'disc' } },
    ol: { listStyleType: 'decimal' },
    'pre, blockquote': { margin: '1em 0' },
    pre: {
      padding: '0.4em 0.6em',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      background: 'rgba(150, 150, 150, 0.1)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderRadius: 3,
      code: {
        display: 'inline',
        margin: 0,
        padding: 0,
        fontSize: 'inherit',
        fontFamily: 'inherit',
        background: 'transparent',
        border: 0
      }
    },
    blockquote: {
      paddingInline: '0.6em 0',
      paddingBlock: 0,
      borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
      opacity: 0.85
    }
  }),
  Bl = e => {
    const { componentCls: t } = e,
      o = Fa(e).inputPaddingVertical + 1;
    return {
      '&-edit-content': {
        position: 'relative',
        'div&': {
          insetInlineStart: -e.paddingSM,
          marginTop: -o,
          marginBottom: `calc(1em - ${o}px)`
        },
        [`${t}-edit-content-confirm`]: {
          position: 'absolute',
          insetInlineEnd: e.marginXS + 2,
          insetBlockEnd: e.marginXS,
          color: e.colorTextDescription,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          fontStyle: 'normal',
          pointerEvents: 'none'
        },
        textarea: {
          margin: '0!important',
          MozTransition: 'none',
          height: '1em'
        }
      }
    };
  },
  Ml = e => ({
    '&-copy-success': {
      '\n    &,\n    &:hover,\n    &:focus': { color: e.colorSuccess }
    }
  }),
  Al = () => ({
    '\n  a&-ellipsis,\n  span&-ellipsis\n  ': {
      display: 'inline-block',
      maxWidth: '100%'
    },
    '&-single-line': { whiteSpace: 'nowrap' },
    '&-ellipsis-single-line': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      'a&, span&': { verticalAlign: 'bottom' }
    },
    '&-ellipsis-multiple-line': {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical'
    }
  }),
  Rl = e => {
    const { componentCls: t, sizeMarginHeadingVerticalStart: n } = e;
    return {
      [t]: c(
        c(
          c(
            c(
              c(
                c(
                  c(
                    c(
                      c(
                        {
                          color: e.colorText,
                          wordBreak: 'break-word',
                          lineHeight: e.lineHeight,
                          [`&${t}-secondary`]: {
                            color: e.colorTextDescription
                          },
                          [`&${t}-success`]: { color: e.colorSuccess },
                          [`&${t}-warning`]: { color: e.colorWarning },
                          [`&${t}-danger`]: {
                            color: e.colorError,
                            'a&:active, a&:focus': {
                              color: e.colorErrorActive
                            },
                            'a&:hover': { color: e.colorErrorHover }
                          },
                          [`&${t}-disabled`]: {
                            color: e.colorTextDisabled,
                            cursor: 'not-allowed',
                            userSelect: 'none'
                          },
                          '\n        div&,\n        p\n      ': {
                            marginBottom: '1em'
                          }
                        },
                        Il(e)
                      ),
                      {
                        [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: { marginTop: n },
                        '\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5': {
                          '\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ': {
                            marginTop: n
                          }
                        }
                      }
                    ),
                    Nl()
                  ),
                  El(e)
                ),
                {
                  [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: c(c({}, uo(e)), { marginInlineStart: e.marginXXS })
                }
              ),
              Bl(e)
            ),
            Ml(e)
          ),
          Al()
        ),
        { '&-rtl': { direction: 'rtl' } }
      )
    };
  },
  Lo = St('Typography', e => [Rl(e)], {
    sizeMarginHeadingVerticalStart: '1.2em',
    sizeMarginHeadingVerticalEnd: '0.5em'
  }),
  Dl = () => ({
    prefixCls: String,
    value: String,
    maxlength: Number,
    autoSize: { type: [Boolean, Object] },
    onSave: Function,
    onCancel: Function,
    onEnd: Function,
    onChange: Function,
    originContent: String,
    direction: String,
    component: String
  }),
  Ll = Z({
    compatConfig: { MODE: 3 },
    name: 'Editable',
    inheritAttrs: !1,
    props: Dl(),
    setup(e, t) {
      let { emit: n, slots: o, attrs: a } = t;
      const { prefixCls: r } = fa(e),
        i = Ue({
          current: e.value || '',
          lastKeyCode: void 0,
          inComposition: !1,
          cancelFlag: !1
        });
      oe(
        () => e.value,
        S => {
          i.current = S;
        }
      );
      const l = X();
      Ee(() => {
        var S;
        if (l.value) {
          const y =
              (S = l.value) === null || S === void 0
                ? void 0
                : S.resizableTextArea,
            P = y == null ? void 0 : y.textArea;
          P.focus();
          const { length: g } = P.value;
          P.setSelectionRange(g, g);
        }
      });
      function v(S) {
        l.value = S;
      }
      function m(S) {
        let {
          target: { value: y }
        } = S;
        (i.current = y.replace(/[\r\n]/g, '')), n('change', i.current);
      }
      function d() {
        i.inComposition = !0;
      }
      function p() {
        i.inComposition = !1;
      }
      function f(S) {
        const { keyCode: y } = S;
        y === le.ENTER && S.preventDefault(),
          !i.inComposition && (i.lastKeyCode = y);
      }
      function u(S) {
        const {
          keyCode: y,
          ctrlKey: P,
          altKey: g,
          metaKey: T,
          shiftKey: w
        } = S;
        i.lastKeyCode === y &&
          !i.inComposition &&
          !P &&
          !g &&
          !T &&
          !w &&
          (y === le.ENTER
            ? (b(), n('end'))
            : y === le.ESC && ((i.current = e.originContent), n('cancel')));
      }
      function C() {
        b();
      }
      function b() {
        n('save', i.current.trim());
      }
      const [x, $] = Lo(r);
      return () => {
        const S = ee(
          {
            [`${r.value}`]: !0,
            [`${r.value}-edit-content`]: !0,
            [`${r.value}-rtl`]: e.direction === 'rtl',
            [e.component ? `${r.value}-${e.component}` : '']: !0
          },
          a.class,
          $.value
        );
        return x(
          s('div', N(N({}, a), {}, { class: S }), [
            s(
              Wa,
              {
                ref: v,
                maxlength: e.maxlength,
                value: i.current,
                onChange: m,
                onKeydown: f,
                onKeyup: u,
                onCompositionstart: d,
                onCompositionend: p,
                onBlur: C,
                rows: 1,
                autoSize: e.autoSize === void 0 || e.autoSize
              },
              null
            ),
            o.enterIcon
              ? o.enterIcon({
                  className: `${e.prefixCls}-edit-content-confirm`
                })
              : s(Ol, { class: `${e.prefixCls}-edit-content-confirm` }, null)
          ])
        );
      };
    }
  }),
  zl = Ll,
  kl = 3,
  Hl = 8;
let me;
const Lt = { padding: 0, margin: 0, display: 'inline', lineHeight: 'inherit' };
function zo(e, t) {
  e.setAttribute('aria-hidden', 'true');
  const n = window.getComputedStyle(t),
    o = Ga(n);
  e.setAttribute('style', o),
    (e.style.position = 'fixed'),
    (e.style.left = '0'),
    (e.style.height = 'auto'),
    (e.style.minHeight = 'auto'),
    (e.style.maxHeight = 'auto'),
    (e.style.paddingTop = '0'),
    (e.style.paddingBottom = '0'),
    (e.style.borderTopWidth = '0'),
    (e.style.borderBottomWidth = '0'),
    (e.style.top = '-999999px'),
    (e.style.zIndex = '-1000'),
    (e.style.textOverflow = 'clip'),
    (e.style.whiteSpace = 'normal'),
    (e.style.webkitLineClamp = 'none');
}
function jl(e) {
  const t = document.createElement('div');
  zo(t, e),
    t.appendChild(document.createTextNode('text')),
    document.body.appendChild(t);
  const n = t.getBoundingClientRect().height;
  return document.body.removeChild(t), n;
}
const Fl = (e, t, n, o, a) => {
  me ||
    ((me = document.createElement('div')),
    me.setAttribute('aria-hidden', 'true'),
    document.body.appendChild(me));
  const { rows: r, suffix: i = '' } = t,
    l = jl(e),
    v = Math.round(l * r * 100) / 100;
  zo(me, e);
  const m = pa({
    render() {
      return s('div', { style: Lt }, [
        s('span', { style: Lt }, [n, i]),
        s('span', { style: Lt }, [o])
      ]);
    }
  });
  m.mount(me);
  function d() {
    return Math.round(me.getBoundingClientRect().height * 100) / 100 - 0.1 <= v;
  }
  if (d()) return m.unmount(), { content: n, text: me.innerHTML, ellipsis: !1 };
  const p = Array.prototype.slice
      .apply(me.childNodes[0].childNodes[0].cloneNode(!0).childNodes)
      .filter(y => {
        let { nodeType: P, data: g } = y;
        return P !== Hl && g !== '';
      }),
    f = Array.prototype.slice.apply(
      me.childNodes[0].childNodes[1].cloneNode(!0).childNodes
    );
  m.unmount();
  const u = [];
  me.innerHTML = '';
  const C = document.createElement('span');
  me.appendChild(C);
  const b = document.createTextNode(a + i);
  C.appendChild(b),
    f.forEach(y => {
      me.appendChild(y);
    });
  function x(y) {
    C.insertBefore(y, b);
  }
  function $(y, P) {
    let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      T =
        arguments.length > 3 && arguments[3] !== void 0
          ? arguments[3]
          : P.length,
      w = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    const E = Math.floor((g + T) / 2),
      k = P.slice(0, E);
    if (((y.textContent = k), g >= T - 1))
      for (let D = T; D >= g; D -= 1) {
        const G = P.slice(0, D);
        if (((y.textContent = G), d() || !G))
          return D === P.length
            ? { finished: !1, vNode: P }
            : { finished: !0, vNode: G };
      }
    return d() ? $(y, P, E, T, E) : $(y, P, g, E, w);
  }
  function S(y) {
    if (y.nodeType === kl) {
      const g = y.textContent || '',
        T = document.createTextNode(g);
      return x(T), $(T, g);
    }
    return { finished: !1, vNode: null };
  }
  return (
    p.some(y => {
      const { finished: P, vNode: g } = S(y);
      return g && u.push(g), P;
    }),
    { content: u, text: me.innerHTML, ellipsis: !0 }
  );
};
var Wl =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
const Gl = () => ({ prefixCls: String, direction: String, component: String }),
  Vl = Z({
    name: 'ATypography',
    inheritAttrs: !1,
    props: Gl(),
    setup(e, t) {
      let { slots: n, attrs: o } = t;
      const { prefixCls: a, direction: r } = et('typography', e),
        [i, l] = Lo(a);
      return () => {
        var v;
        const m = c(c({}, e), o),
          { prefixCls: d, direction: p, component: f = 'article' } = m,
          u = Wl(m, ['prefixCls', 'direction', 'component']);
        return i(
          s(
            f,
            N(
              N({}, u),
              {},
              {
                class: ee(
                  a.value,
                  { [`${a.value}-rtl`]: r.value === 'rtl' },
                  o.class,
                  l.value
                )
              }
            ),
            {
              default: () => [
                (v = n.default) === null || v === void 0 ? void 0 : v.call(n)
              ]
            }
          )
        );
      };
    }
  }),
  be = Vl,
  Xl = () => {
    const e = document.getSelection();
    if (!e.rangeCount) return function() {};
    let t = document.activeElement;
    const n = [];
    for (let o = 0; o < e.rangeCount; o++) n.push(e.getRangeAt(o));
    switch (t.tagName.toUpperCase()) {
      case 'INPUT':
      case 'TEXTAREA':
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return (
      e.removeAllRanges(),
      function() {
        e.type === 'Caret' && e.removeAllRanges(),
          e.rangeCount ||
            n.forEach(function(o) {
              e.addRange(o);
            }),
          t && t.focus();
      }
    );
  },
  Ul = Xl,
  Fn = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
  Kl = 'Copy to clipboard: #{key}, Enter';
function Yl(e) {
  const t = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return e.replace(/#{\s*key\s*}/g, t);
}
function Zl(e, t) {
  let n,
    o,
    a,
    r,
    i,
    l = !1;
  t || (t = {});
  const v = t.debug || !1;
  try {
    if (
      ((o = Ul()),
      (a = document.createRange()),
      (r = document.getSelection()),
      (i = document.createElement('span')),
      (i.textContent = e),
      (i.style.all = 'unset'),
      (i.style.position = 'fixed'),
      (i.style.top = 0),
      (i.style.clip = 'rect(0, 0, 0, 0)'),
      (i.style.whiteSpace = 'pre'),
      (i.style.webkitUserSelect = 'text'),
      (i.style.MozUserSelect = 'text'),
      (i.style.msUserSelect = 'text'),
      (i.style.userSelect = 'text'),
      i.addEventListener('copy', function(d) {
        if ((d.stopPropagation(), t.format))
          if ((d.preventDefault(), typeof d.clipboardData > 'u')) {
            v && console.warn('unable to use e.clipboardData'),
              v && console.warn('trying IE specific stuff'),
              window.clipboardData.clearData();
            const p = Fn[t.format] || Fn.default;
            window.clipboardData.setData(p, e);
          } else
            d.clipboardData.clearData(), d.clipboardData.setData(t.format, e);
        t.onCopy && (d.preventDefault(), t.onCopy(d.clipboardData));
      }),
      document.body.appendChild(i),
      a.selectNodeContents(i),
      r.addRange(a),
      !document.execCommand('copy'))
    )
      throw new Error('copy command was unsuccessful');
    l = !0;
  } catch (m) {
    v && console.error('unable to copy using execCommand: ', m),
      v && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData(t.format || 'text', e),
        t.onCopy && t.onCopy(window.clipboardData),
        (l = !0);
    } catch (d) {
      v && console.error('unable to copy using clipboardData: ', d),
        v && console.error('falling back to prompt'),
        (n = Yl('message' in t ? t.message : Kl)),
        window.prompt(n, e);
    }
  } finally {
    r &&
      (typeof r.removeRange == 'function'
        ? r.removeRange(a)
        : r.removeAllRanges()),
      i && document.body.removeChild(i),
      o();
  }
  return l;
}
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        Ql(e, a, n[a]);
      });
  }
  return e;
}
function Ql(e, t, n) {
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
var nn = function(t, n) {
  var o = Wn({}, t, n.attrs);
  return s(Ae, Wn({}, o, { icon: oi }), null);
};
nn.displayName = 'CopyOutlined';
nn.inheritAttrs = !1;
const ql = nn;
function Gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable;
        })
      )),
      o.forEach(function(a) {
        Jl(e, a, n[a]);
      });
  }
  return e;
}
function Jl(e, t, n) {
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
var on = function(t, n) {
  var o = Gn({}, t, n.attrs);
  return s(Ae, Gn({}, o, { icon: ai }), null);
};
on.displayName = 'EditOutlined';
on.inheritAttrs = !1;
const es = on;
var ts =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
const ns = fo('webkitLineClamp'),
  os = fo('textOverflow'),
  Vn = '...',
  dt = () => ({
    editable: { type: [Boolean, Object], default: void 0 },
    copyable: { type: [Boolean, Object], default: void 0 },
    prefixCls: String,
    component: String,
    type: String,
    disabled: { type: Boolean, default: void 0 },
    ellipsis: { type: [Boolean, Object], default: void 0 },
    code: { type: Boolean, default: void 0 },
    mark: { type: Boolean, default: void 0 },
    underline: { type: Boolean, default: void 0 },
    delete: { type: Boolean, default: void 0 },
    strong: { type: Boolean, default: void 0 },
    keyboard: { type: Boolean, default: void 0 },
    content: String,
    'onUpdate:content': Function
  }),
  as = Z({
    compatConfig: { MODE: 3 },
    name: 'TypographyBase',
    inheritAttrs: !1,
    props: dt(),
    setup(e, t) {
      let { slots: n, attrs: o, emit: a } = t;
      const { prefixCls: r, direction: i } = et('typography', e),
        l = Ue({
          copied: !1,
          ellipsisText: '',
          ellipsisContent: null,
          isEllipsis: !1,
          expanded: !1,
          clientRendered: !1,
          expandStr: '',
          copyStr: '',
          copiedStr: '',
          editStr: '',
          copyId: void 0,
          rafId: void 0,
          prevProps: void 0,
          originContent: ''
        }),
        v = X(),
        m = X(),
        d = R(() => {
          const h = e.ellipsis;
          return h
            ? c({ rows: 1, expandable: !1 }, typeof h == 'object' ? h : null)
            : {};
        });
      Ee(() => {
        (l.clientRendered = !0), E();
      }),
        st(() => {
          clearTimeout(l.copyId), Ie.cancel(l.rafId);
        }),
        oe(
          [() => d.value.rows, () => e.content],
          () => {
            zt(() => {
              T();
            });
          },
          { flush: 'post', deep: !0 }
        ),
        Ke(() => {
          e.content === void 0 && (Je(!e.editable), Je(!e.ellipsis));
        });
      function p() {
        var h;
        return e.ellipsis || e.editable
          ? e.content
          : (h = At(v.value)) === null || h === void 0
          ? void 0
          : h.innerText;
      }
      function f(h) {
        const { onExpand: O } = d.value;
        (l.expanded = !0), O == null || O(h);
      }
      function u(h) {
        h.preventDefault(), (l.originContent = e.content), g(!0);
      }
      function C(h) {
        b(h), g(!1);
      }
      function b(h) {
        const { onChange: O } = S.value;
        h !== e.content && (a('update:content', h), O == null || O(h));
      }
      function x() {
        var h, O;
        (O = (h = S.value).onCancel) === null || O === void 0 || O.call(h),
          g(!1);
      }
      function $(h) {
        h.preventDefault(), h.stopPropagation();
        const { copyable: O } = e,
          I = c({}, typeof O == 'object' ? O : null);
        I.text === void 0 && (I.text = p()),
          Zl(I.text || ''),
          (l.copied = !0),
          zt(() => {
            I.onCopy && I.onCopy(h),
              (l.copyId = setTimeout(() => {
                l.copied = !1;
              }, 3e3));
          });
      }
      const S = R(() => {
          const h = e.editable;
          return h ? c({}, typeof h == 'object' ? h : null) : { editing: !1 };
        }),
        [y, P] = lt(!1, { value: R(() => S.value.editing) });
      function g(h) {
        const { onStart: O } = S.value;
        h && O && O(), P(h);
      }
      oe(
        y,
        h => {
          var O;
          h || (O = m.value) === null || O === void 0 || O.focus();
        },
        { flush: 'post' }
      );
      function T(h) {
        if (h) {
          const { width: O, height: I } = h;
          if (!O || !I) return;
        }
        Ie.cancel(l.rafId),
          (l.rafId = Ie(() => {
            E();
          }));
      }
      const w = R(() => {
          const {
            rows: h,
            expandable: O,
            suffix: I,
            onEllipsis: _,
            tooltip: z
          } = d.value;
          return I || z || e.editable || e.copyable || O || _
            ? !1
            : h === 1
            ? os
            : ns;
        }),
        E = () => {
          const { ellipsisText: h, isEllipsis: O } = l,
            { rows: I, suffix: _, onEllipsis: z } = d.value;
          if (
            !I ||
            I < 0 ||
            !At(v.value) ||
            l.expanded ||
            e.content === void 0 ||
            w.value
          )
            return;
          const { content: U, text: F, ellipsis: ae } = Fl(
            At(v.value),
            { rows: I, suffix: _ },
            e.content,
            te(!0),
            Vn
          );
          (h !== F || l.isEllipsis !== ae) &&
            ((l.ellipsisText = F),
            (l.ellipsisContent = U),
            (l.isEllipsis = ae),
            O !== ae && z && z(ae));
        };
      function k(h, O) {
        let {
            mark: I,
            code: _,
            underline: z,
            delete: U,
            strong: F,
            keyboard: ae
          } = h,
          se = O;
        function q(ie, Y) {
          if (!ie) return;
          const ue = (function() {
            return se;
          })();
          se = s(Y, null, { default: () => [ue] });
        }
        return (
          q(F, 'strong'),
          q(z, 'u'),
          q(U, 'del'),
          q(_, 'code'),
          q(I, 'mark'),
          q(ae, 'kbd'),
          se
        );
      }
      function D(h) {
        const { expandable: O, symbol: I } = d.value;
        if (!O || (!h && (l.expanded || !l.isEllipsis))) return null;
        const _ = (n.ellipsisSymbol ? n.ellipsisSymbol() : I) || l.expandStr;
        return s(
          'a',
          {
            key: 'expand',
            class: `${r.value}-expand`,
            onClick: f,
            'aria-label': l.expandStr
          },
          [_]
        );
      }
      function G() {
        if (!e.editable) return;
        const { tooltip: h, triggerType: O = ['icon'] } = e.editable,
          I = n.editableIcon
            ? n.editableIcon()
            : s(es, { role: 'button' }, null),
          _ = n.editableTooltip ? n.editableTooltip() : l.editStr,
          z = typeof _ == 'string' ? _ : '';
        return O.indexOf('icon') !== -1
          ? s(
              Dt,
              { key: 'edit', title: h === !1 ? '' : _ },
              {
                default: () => [
                  s(
                    Hn,
                    {
                      ref: m,
                      class: `${r.value}-edit`,
                      onClick: u,
                      'aria-label': z
                    },
                    { default: () => [I] }
                  )
                ]
              }
            )
          : null;
      }
      function Q() {
        if (!e.copyable) return;
        const { tooltip: h } = e.copyable,
          O = l.copied ? l.copiedStr : l.copyStr,
          I = n.copyableTooltip ? n.copyableTooltip({ copied: l.copied }) : O,
          _ = typeof I == 'string' ? I : '',
          z = l.copied ? s(Va, null, null) : s(ql, null, null),
          U = n.copyableIcon ? n.copyableIcon({ copied: !!l.copied }) : z;
        return s(
          Dt,
          { key: 'copy', title: h === !1 ? '' : I },
          {
            default: () => [
              s(
                Hn,
                {
                  class: [
                    `${r.value}-copy`,
                    { [`${r.value}-copy-success`]: l.copied }
                  ],
                  onClick: $,
                  'aria-label': _
                },
                { default: () => [U] }
              )
            ]
          }
        );
      }
      function K() {
        const { class: h, style: O } = o,
          { maxlength: I, autoSize: _, onEnd: z } = S.value;
        return s(
          zl,
          {
            class: h,
            style: O,
            prefixCls: r.value,
            value: e.content,
            originContent: l.originContent,
            maxlength: I,
            autoSize: _,
            onSave: C,
            onChange: b,
            onCancel: x,
            onEnd: z,
            direction: i.value,
            component: e.component
          },
          { enterIcon: n.editableEnterIcon }
        );
      }
      function te(h) {
        return [D(h), G(), Q()].filter(O => O);
      }
      return () => {
        var h;
        const { triggerType: O = ['icon'] } = S.value,
          I =
            e.ellipsis || e.editable
              ? e.content !== void 0
                ? e.content
                : (h = n.default) === null || h === void 0
                ? void 0
                : h.call(n)
              : n.default
              ? n.default()
              : e.content;
        return y.value
          ? K()
          : s(
              la,
              {
                componentName: 'Text',
                children: _ => {
                  const z = c(c({}, e), o),
                    {
                      type: U,
                      disabled: F,
                      content: ae,
                      class: se,
                      style: q
                    } = z,
                    ie = ts(z, [
                      'type',
                      'disabled',
                      'content',
                      'class',
                      'style'
                    ]),
                    { rows: Y, suffix: ue, tooltip: ge } = d.value,
                    { edit: Ce, copy: we, copied: De, expand: Le } = _;
                  (l.editStr = Ce),
                    (l.copyStr = we),
                    (l.copiedStr = De),
                    (l.expandStr = Le);
                  const je = Re(ie, [
                      'prefixCls',
                      'editable',
                      'copyable',
                      'ellipsis',
                      'mark',
                      'code',
                      'delete',
                      'underline',
                      'strong',
                      'keyboard',
                      'onUpdate:content'
                    ]),
                    ce = w.value,
                    Ne = Y === 1 && ce,
                    xe = Y && Y > 1 && ce;
                  let A = I,
                    B;
                  if (Y && l.isEllipsis && !l.expanded && !ce) {
                    const { title: W } = ie;
                    let V = W || '';
                    !W &&
                      (typeof I == 'string' || typeof I == 'number') &&
                      (V = String(I)),
                      (V =
                        V == null
                          ? void 0
                          : V.slice(String(l.ellipsisContent || '').length)),
                      (A = s(ke, null, [
                        va(l.ellipsisContent),
                        s('span', { title: V, 'aria-hidden': 'true' }, [Vn]),
                        ue
                      ]));
                  } else A = s(ke, null, [I, ue]);
                  A = k(e, A);
                  const M = ge && Y && l.isEllipsis && !l.expanded && !ce,
                    H = n.ellipsisTooltip ? n.ellipsisTooltip() : ge;
                  return s(
                    kt,
                    { onResize: T, disabled: !Y },
                    {
                      default: () => [
                        s(
                          be,
                          N(
                            {
                              ref: v,
                              class: [
                                {
                                  [`${r.value}-${U}`]: U,
                                  [`${r.value}-disabled`]: F,
                                  [`${r.value}-ellipsis`]: Y,
                                  [`${r.value}-single-line`]:
                                    Y === 1 && !l.isEllipsis,
                                  [`${r.value}-ellipsis-single-line`]: Ne,
                                  [`${r.value}-ellipsis-multiple-line`]: xe
                                },
                                se
                              ],
                              style: c(c({}, q), {
                                WebkitLineClamp: xe ? Y : void 0
                              }),
                              'aria-label': B,
                              direction: i.value,
                              onClick: O.indexOf('text') !== -1 ? u : () => {}
                            },
                            je
                          ),
                          {
                            default: () => [
                              M
                                ? s(
                                    Dt,
                                    { title: ge === !0 ? I : H },
                                    { default: () => [s('span', null, [A])] }
                                  )
                                : A,
                              te()
                            ]
                          }
                        )
                      ]
                    }
                  );
                }
              },
              null
            );
      };
    }
  }),
  ft = as;
var is =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
const rs = () =>
    Re(c(c({}, dt()), { ellipsis: { type: Boolean, default: void 0 } }), [
      'component'
    ]),
  Ot = (e, t) => {
    let { slots: n, attrs: o } = t;
    const a = c(c({}, e), o),
      { ellipsis: r, rel: i } = a,
      l = is(a, ['ellipsis', 'rel']);
    Je();
    const v = c(c({}, l), {
      rel: i === void 0 && l.target === '_blank' ? 'noopener noreferrer' : i,
      ellipsis: !!r,
      component: 'a'
    });
    return delete v.navigate, s(ft, v, n);
  };
Ot.displayName = 'ATypographyLink';
Ot.inheritAttrs = !1;
Ot.props = rs();
const an = Ot,
  ls = () => Re(dt(), ['component']),
  _t = (e, t) => {
    let { slots: n, attrs: o } = t;
    const a = c(c(c({}, e), { component: 'div' }), o);
    return s(ft, a, n);
  };
_t.displayName = 'ATypographyParagraph';
_t.inheritAttrs = !1;
_t.props = ls();
const ko = _t,
  ss = () =>
    c(c({}, Re(dt(), ['component'])), {
      ellipsis: { type: [Boolean, Object], default: void 0 }
    }),
  It = (e, t) => {
    let { slots: n, attrs: o } = t;
    const { ellipsis: a } = e;
    Je();
    const r = c(
      c(c({}, e), {
        ellipsis: a && typeof a == 'object' ? Re(a, ['expandable', 'rows']) : a,
        component: 'span'
      }),
      o
    );
    return s(ft, r, n);
  };
It.displayName = 'ATypographyText';
It.inheritAttrs = !1;
It.props = ss();
const $t = It;
var cs =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
const us = sa(1, 2, 3, 4, 5),
  ds = () => c(c({}, Re(dt(), ['component', 'strong'])), { level: Number }),
  Et = (e, t) => {
    let { slots: n, attrs: o } = t;
    const { level: a = 1 } = e,
      r = cs(e, ['level']);
    let i;
    us.includes(a) ? (i = `h${a}`) : (Je(), (i = 'h1'));
    const l = c(c(c({}, r), { component: i }), o);
    return s(ft, l, n);
  };
Et.displayName = 'ATypographyTitle';
Et.inheritAttrs = !1;
Et.props = ds();
const Ho = Et;
be.Text = $t;
be.Title = Ho;
be.Paragraph = ko;
be.Link = an;
be.Base = ft;
be.install = function(e) {
  return (
    e.component(be.name, be),
    e.component(be.Text.displayName, $t),
    e.component(be.Title.displayName, Ho),
    e.component(be.Paragraph.displayName, ko),
    e.component(be.Link.displayName, an),
    e
  );
};
const fs = ma('renderCondition', () => {
    const e = X({}),
      t = Zn(),
      { vendorSettings: n } = ao(t),
      o = X([]),
      a = (p, f, u) => {
        o.value.push({ id: p, content: f, isInitialized: !1, useEditor: u });
      },
      r = p => {
        o.value = o.value.filter(f => f.id !== p);
      },
      i = p => o.value.find(f => f.id === p),
      l = p => {
        const { fields: f } = p;
        f.forEach(u => {
          if (u != null && u.render_condition) {
            const { key: C, value: b } = u.render_condition;
            e.value[C]
              ? e.value[C].childs.push({ id: u.id, value: b, render: !1 })
              : (e.value[C] = { childs: [{ id: u.id, value: b, render: !1 }] });
          }
        });
      },
      v = (p, f) => {
        if (!e.value[p]) return !1;
        const u = e.value[p].childs.filter(b => b.value.includes(f));
        u &&
          u.forEach(b => {
            (b.render = !0), m(b.id, !0);
          });
        const C = e.value[p].childs.filter(b => !b.value.includes(f));
        return (
          C.forEach(b => {
            (b.render = !1), m(b.id, !1);
          }),
          (e.value[p].childs = [...u, ...C]),
          !0
        );
      },
      m = (p, f) => {
        if (!e.value[p]) return !1;
        const u = e.value[p].childs,
          C = n.value[p];
        return (
          u &&
            u.forEach(b => {
              b.value.includes(C) ? (b.render = f) : (b.render = !1);
            }),
          (e.value[p].childs = u),
          !0
        );
      };
    return {
      conditions: e,
      wpEditors: o,
      addWpEditor: a,
      removeWpEditor: r,
      addConditionsByTab: l,
      controlRenderChild: v,
      checkRenderCondition: (p, f) => {
        if (!e.value[p]) return !1;
        const u = e.value[p].childs.find(C => C.id === f);
        return u ? u.render : !1;
      },
      getWpEditor: i
    };
  }),
  ps = ['onClick'],
  vs = { key: 0 },
  ms = {
    href:
      'https://www.wcvendors.com/pricing/?utm_source=plugin&utm_medium=allplugins&utm_campaign=profeatures&utm_content=upsellbanner',
    target: '_blank'
  },
  gs = ['innerHTML'],
  bs = Ze('div', { style: { height: '6em' } }, null, -1),
  ys = Z({
    __name: 'VendorEdit',
    props: { id: Number },
    setup(e) {
      const t = e,
        n = ya(() =>
          ca(
            () => import('./DynamicControl.706beb75.js').then(b => b.D),
            [
              window.wcv_avp.pluginDirUrl +
                '/dist/common/DynamicControl.706beb75.js',
              window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
              window.wcv_avp.pluginDirUrl + '/dist/common/vendor.ff933118.js',
              window.wcv_avp.pluginDirUrl + '/dist/common/antd.01cefdb7.js',
              window.wcv_avp.pluginDirUrl +
                '/dist/common/VendorStore.9a3ea1f4.js',
              window.wcv_avp.pluginDirUrl +
                '/dist/common/initDefaultProps.14498c5d.js',
              window.wcv_avp.pluginDirUrl + '/dist/common/index.0e8dbddd.js',
              window.wcv_avp.pluginDirUrl +
                '/dist/common/_plugin-vue_export-helper.c27b6911.js',
              window.wcv_avp.pluginDirUrl + '/dist/common/index.0de37137.js',
              window.wcv_avp.pluginDirUrl +
                '/dist/assets/DynamicControl-3dce6b60.css'
            ],
            import.meta.url
          )
        ),
        o = Xa(),
        a = Zn(),
        r = window.wcv_avp.logo_path,
        i = ga(),
        l = X('general'),
        { vendorSettings: v, showPopup: m } = ao(a),
        d = fs(),
        p = X(window.wcv_avp.tabs);
      p.value.forEach(b => {
        d.addConditionsByTab(b),
          b.fields.forEach(x => {
            x.type === 'wp_editor' &&
              d.addWpEditor(x.id, v.value[x.id] ?? '', x.use_editor);
          });
      });
      const f = () => {
          i.push({ name: 'vendor' });
        },
        u = async () => {
          await a.saveSettings(t.id ?? 0);
        },
        C = async () => {
          await o.setVendorStatus(t.id ?? 0, 'deactivate');
        };
      return (b, x) => {
        var $, S;
        return (
          Me(),
          mt(
            ke,
            null,
            [
              s(
                L(it),
                { size: 20, direction: 'vertical', style: { width: '100%' } },
                {
                  default: re(() => {
                    var y;
                    return [
                      Ze('div', null, [
                        Ze(
                          'a',
                          { onClick: ba(f, ['prevent']) },
                          ' ← ' + Oe(L(Pe)('allVendor')),
                          9,
                          ps
                        ),
                        Ze(
                          'h1',
                          null,
                          Oe(
                            ((y = L(v)) == null ? void 0 : y.shop_name) ??
                              L(v).display_name
                          ),
                          1
                        )
                      ])
                    ];
                  }),
                  _: 1
                }
              ),
              ($ = L(v)) != null && $.code
                ? (Me(),
                  mt('h3', vs, Oe((S = L(v)) == null ? void 0 : S.message), 1))
                : gt('', !0),
              L(v).shop_name || L(v).display_name
                ? (Me(),
                  at(
                    L(rt),
                    {
                      key: 1,
                      activeKey: l.value,
                      'onUpdate:activeKey': x[0] || (x[0] = y => (l.value = y)),
                      size: 'large'
                    },
                    {
                      rightExtra: re(() => [
                        s(L(it), null, {
                          default: re(() => {
                            var y;
                            return [
                              s(
                                L(Qe),
                                { type: 'primary', onClick: u },
                                {
                                  default: re(() => [
                                    Fe(Oe(L(Pe)('saveChanges')), 1)
                                  ]),
                                  _: 1
                                }
                              ),
                              ((y = L(v)) == null
                                ? void 0
                                : y.vendor_status) === 'active'
                                ? (Me(),
                                  at(
                                    L(Ua),
                                    {
                                      key: 0,
                                      title: L(Pe)('confirmDeactive'),
                                      'ok-text': L(Pe)('ok'),
                                      'cancel-text': L(Pe)('cancel'),
                                      onConfirm: C
                                    },
                                    {
                                      default: re(() => [
                                        s(
                                          L(Qe),
                                          { danger: '', type: 'primary' },
                                          {
                                            default: re(() => [
                                              Fe(Oe(L(Pe)('deactive')), 1)
                                            ]),
                                            _: 1
                                          }
                                        )
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ['title', 'ok-text', 'cancel-text']
                                  ))
                                : gt('', !0)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      default: re(() => [
                        (Me(!0),
                        mt(
                          ke,
                          null,
                          un(
                            p.value,
                            y => (
                              Me(),
                              at(
                                L(xt),
                                { id: y.key, key: y.key, tab: y.label },
                                {
                                  default: re(() => [
                                    (Me(!0),
                                    mt(
                                      ke,
                                      null,
                                      un(
                                        y.fields,
                                        P => (
                                          Me(),
                                          at(
                                            L(n),
                                            { 'field-props': P },
                                            null,
                                            8,
                                            ['field-props']
                                          )
                                        )
                                      ),
                                      256
                                    ))
                                  ]),
                                  _: 2
                                },
                                1032,
                                ['id', 'tab']
                              )
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ['activeKey']
                  ))
                : gt('', !0),
              L(v).shop_name || L(v).display_name
                ? (Me(),
                  at(
                    L(it),
                    { key: 2 },
                    {
                      default: re(() => [
                        s(
                          L(Qe),
                          { type: 'primary', onClick: u },
                          {
                            default: re(() => [
                              Fe(Oe(L(Pe)('saveChanges')), 1)
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }
                  ))
                : gt('', !0),
              s(
                L(ye),
                {
                  open: L(m),
                  'onUpdate:open':
                    x[2] || (x[2] = y => (oo(m) ? (m.value = y) : null)),
                  title: ''
                },
                {
                  footer: re(() => [
                    s(
                      L(Qe),
                      {
                        type: 'primary',
                        onClick: x[1] || (x[1] = y => (m.value = !1))
                      },
                      { default: re(() => [Fe(Oe(L(Pe)('ok')), 1)]), _: 1 }
                    )
                  ]),
                  default: re(() => [
                    s(
                      L(it),
                      { direction: 'vertical', size: 'middle' },
                      {
                        default: re(() => [
                          Ze('a', ms, [
                            s(
                              L(pl),
                              {
                                src: L(r),
                                preview: !1,
                                width: 240,
                                height: 35
                              },
                              null,
                              8,
                              ['src']
                            )
                          ]),
                          s(
                            L(it),
                            { direction: 'horizontal' },
                            {
                              default: re(() => [
                                s(
                                  L($t),
                                  { strong: '' },
                                  {
                                    default: re(() => [
                                      Fe(Oe(L(a).modalTitle), 1)
                                    ]),
                                    _: 1
                                  }
                                ),
                                s(
                                  L(Ka),
                                  { color: 'red' },
                                  {
                                    default: re(() => [
                                      Fe(Oe(L(Pe)('proFeature')), 1)
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            }
                          ),
                          s(L($t), null, {
                            default: re(() => [
                              Ze(
                                'p',
                                { innerHTML: L(a).modalContent },
                                null,
                                8,
                                gs
                              )
                            ]),
                            _: 1
                          }),
                          s(
                            L(an),
                            {
                              href: `https://www.wcvendors.com/pricing/?utm_source=plugin&utm_medium=allvendorssetting&utm_campaign=avprosetting_${
                                L(a).featureSlug
                              }`,
                              target: '_blank',
                              underline: ''
                            },
                            {
                              default: re(() => [
                                Fe(Oe(L(Pe)('seeAllFeatures')) + ' → ', 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['href']
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                },
                8,
                ['open']
              ),
              bs
            ],
            64
          )
        );
      };
    }
  }),
  Ts = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ys },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
export { pl as I, Ts as V, fs as u };
