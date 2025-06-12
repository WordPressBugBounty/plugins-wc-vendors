import {
  R as Re,
  _ as f,
  P as I,
  b as M,
  V as si,
  f as Ye,
  e as oe,
  W as dt,
  G as ui,
  x as et,
  v as ci,
  X as Ha,
  Y as rt,
  Z as La,
  $ as _o,
  l as Xt,
  a0 as Fa,
  y as ja,
  a1 as Wa,
  a2 as Va,
  a3 as Ao,
  a4 as Ka,
  A as Mt,
  g as ft,
  a as Ne,
  a5 as it,
  K as se,
  a6 as Jn,
  o as De,
  m as Se,
  r as ln,
  n as eo,
  a7 as Ua,
  B as Ga,
  a8 as Xa,
  w as Ya,
  a9 as qa,
  aa as Yt,
  ab as Mo,
  j as ka,
  ac as Za,
  ad as di,
  ae as Ro,
  af as Qa,
  i as Ja,
  z as Bn,
  ag as el,
  s as tl,
  D as Fe,
  I as nl,
  c as we,
  ah as ol,
  ai as Dt
} from '../main.df9e2abb.js';
import {
  d as q,
  y as to,
  q as Ee,
  v as sn,
  z as no,
  g as J,
  j as He,
  c as b,
  U as oo,
  a2 as rl,
  W as pt,
  r as W,
  s as z,
  l as me,
  e as C,
  X as fi,
  i as il,
  C as al,
  F as Ge,
  B as qt,
  n as Te,
  a3 as zn,
  V as pi,
  Q as Do,
  k as Oe,
  f as ye,
  p as Ce,
  u as yt,
  D as Nn,
  T as ll,
  x as sl,
  E as ul,
  _ as cl
} from './vendor.ff933118.js';
import {
  o as dl,
  p as fl,
  q as pl,
  T as Bo,
  r as ml,
  s as vl
} from './antd.01cefdb7.js';
import { i as mi } from './initDefaultProps.14498c5d.js';
var vi = (function() {
    if (typeof Map < 'u') return Map;
    function e(t, n) {
      var o = -1;
      return (
        t.some(function(r, i) {
          return r[0] === n ? ((o = i), !0) : !1;
        }),
        o
      );
    }
    return (function() {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function() {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.get = function(n) {
          var o = e(this.__entries__, n),
            r = this.__entries__[o];
          return r && r[1];
        }),
        (t.prototype.set = function(n, o) {
          var r = e(this.__entries__, n);
          ~r ? (this.__entries__[r][1] = o) : this.__entries__.push([n, o]);
        }),
        (t.prototype.delete = function(n) {
          var o = this.__entries__,
            r = e(o, n);
          ~r && o.splice(r, 1);
        }),
        (t.prototype.has = function(n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function() {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function(n, o) {
          o === void 0 && (o = null);
          for (var r = 0, i = this.__entries__; r < i.length; r++) {
            var a = i[r];
            n.call(o, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  Hn =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  kt = (function() {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
      ? self
      : typeof window < 'u' && window.Math === Math
      ? window
      : Function('return this')();
  })(),
  gl = (function() {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(kt)
      : function(e) {
          return setTimeout(function() {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  hl = 2;
function bl(e, t) {
  var n = !1,
    o = !1,
    r = 0;
  function i() {
    n && ((n = !1), e()), o && l();
  }
  function a() {
    gl(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - r < hl) return;
      o = !0;
    } else (n = !0), (o = !1), setTimeout(a, t);
    r = s;
  }
  return l;
}
var yl = 20,
  $l = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  wl = typeof MutationObserver < 'u',
  Sl = (function() {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = bl(this.refresh.bind(this), yl));
    }
    return (
      (e.prototype.addObserver = function(t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function(t) {
        var n = this.observers_,
          o = n.indexOf(t);
        ~o && n.splice(o, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function() {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function() {
        var t = this.observers_.filter(function(n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function(n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function() {
        !Hn ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          wl
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function() {
        !Hn ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function(t) {
        var n = t.propertyName,
          o = n === void 0 ? '' : n,
          r = $l.some(function(i) {
            return !!~o.indexOf(i);
          });
        r && this.refresh();
      }),
      (e.getInstance = function() {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  gi = function(e, t) {
    for (var n = 0, o = Object.keys(t); n < o.length; n++) {
      var r = o[n];
      Object.defineProperty(e, r, {
        value: t[r],
        enumerable: !1,
        writable: !1,
        configurable: !0
      });
    }
    return e;
  },
  at = function(e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || kt;
  },
  hi = un(0, 0, 0, 0);
function Zt(e) {
  return parseFloat(e) || 0;
}
function zo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function(o, r) {
    var i = e['border-' + r + '-width'];
    return o + Zt(i);
  }, 0);
}
function Cl(e) {
  for (
    var t = ['top', 'right', 'bottom', 'left'], n = {}, o = 0, r = t;
    o < r.length;
    o++
  ) {
    var i = r[o],
      a = e['padding-' + i];
    n[i] = Zt(a);
  }
  return n;
}
function xl(e) {
  var t = e.getBBox();
  return un(0, 0, t.width, t.height);
}
function Ol(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return hi;
  var o = at(e).getComputedStyle(e),
    r = Cl(o),
    i = r.left + r.right,
    a = r.top + r.bottom,
    l = Zt(o.width),
    s = Zt(o.height);
  if (
    (o.boxSizing === 'border-box' &&
      (Math.round(l + i) !== t && (l -= zo(o, 'left', 'right') + i),
      Math.round(s + a) !== n && (s -= zo(o, 'top', 'bottom') + a)),
    !Il(e))
  ) {
    var u = Math.round(l + i) - t,
      d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (s -= d);
  }
  return un(r.left, r.top, l, s);
}
var Tl = (function() {
  return typeof SVGGraphicsElement < 'u'
    ? function(e) {
        return e instanceof at(e).SVGGraphicsElement;
      }
    : function(e) {
        return e instanceof at(e).SVGElement && typeof e.getBBox == 'function';
      };
})();
function Il(e) {
  return e === at(e).document.documentElement;
}
function El(e) {
  return Hn ? (Tl(e) ? xl(e) : Ol(e)) : hi;
}
function Pl(e) {
  var t = e.x,
    n = e.y,
    o = e.width,
    r = e.height,
    i = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    a = Object.create(i.prototype);
  return (
    gi(a, {
      x: t,
      y: n,
      width: o,
      height: r,
      top: n,
      right: t + o,
      bottom: r + n,
      left: t
    }),
    a
  );
}
function un(e, t, n, o) {
  return { x: e, y: t, width: n, height: o };
}
var _l = (function() {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = un(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function() {
        var t = El(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function() {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  Al = (function() {
    function e(t, n) {
      var o = Pl(n);
      gi(this, { target: t, contentRect: o });
    }
    return e;
  })(),
  Ml = (function() {
    function e(t, n, o) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new vi()),
        typeof t != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.'
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = o);
    }
    return (
      (e.prototype.observe = function(t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof at(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new _l(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function(t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof at(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function() {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function() {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function(n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function() {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function(o) {
              return new Al(o.target, o.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  bi = typeof WeakMap < 'u' ? new WeakMap() : new vi(),
  yi = (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.');
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.');
      var n = Sl.getInstance(),
        o = new Ml(t, n, this);
      bi.set(this, o);
    }
    return e;
  })();
['observe', 'unobserve', 'disconnect'].forEach(function(e) {
  yi.prototype[e] = function() {
    var t;
    return (t = bi.get(this))[e].apply(t, arguments);
  };
});
var $i = (function() {
  return typeof kt.ResizeObserver < 'u' ? kt.ResizeObserver : yi;
})();
const ro = q({
  compatConfig: { MODE: 3 },
  name: 'ResizeObserver',
  props: { disabled: Boolean, onResize: Function },
  emits: ['resize'],
  setup(e, t) {
    let { slots: n } = t;
    const o = to({ width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 });
    let r = null,
      i = null;
    const a = () => {
        i && (i.disconnect(), (i = null));
      },
      l = d => {
        const { onResize: c } = e,
          m = d[0].target,
          { width: p, height: v } = m.getBoundingClientRect(),
          { offsetWidth: g, offsetHeight: w } = m,
          S = Math.floor(p),
          y = Math.floor(v);
        if (
          o.width !== S ||
          o.height !== y ||
          o.offsetWidth !== g ||
          o.offsetHeight !== w
        ) {
          const T = { width: S, height: y, offsetWidth: g, offsetHeight: w };
          f(o, T),
            c &&
              Promise.resolve().then(() => {
                c(f(f({}, T), { offsetWidth: g, offsetHeight: w }), m);
              });
        }
      },
      s = He(),
      u = () => {
        const { disabled: d } = e;
        if (d) {
          a();
          return;
        }
        const c = Re(s);
        c !== r && (a(), (r = c)), !i && c && ((i = new $i(l)), i.observe(c));
      };
    return (
      Ee(() => {
        u();
      }),
      sn(() => {
        u();
      }),
      no(() => {
        a();
      }),
      J(
        () => e.disabled,
        () => {
          u();
        },
        { flush: 'post' }
      ),
      () => {
        var d;
        return (d = n.default) === null || d === void 0 ? void 0 : d.call(n)[0];
      }
    );
  }
});
let wi = e => setTimeout(e, 16),
  Si = e => clearTimeout(e);
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((wi = e => window.requestAnimationFrame(e)),
  (Si = e => window.cancelAnimationFrame(e)));
let No = 0;
const io = new Map();
function Ci(e) {
  io.delete(e);
}
function le(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  No += 1;
  const n = No;
  function o(r) {
    if (r === 0) Ci(n), e();
    else {
      const i = wi(() => {
        o(r - 1);
      });
      io.set(n, i);
    }
  }
  return o(t), n;
}
le.cancel = e => {
  const t = io.get(e);
  return Ci(t), Si(t);
};
let xi = !1;
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      xi = !0;
    }
  });
  window.addEventListener('testPassive', null, e),
    window.removeEventListener('testPassive', null, e);
} catch {}
const tt = xi;
function $t(e, t, n, o) {
  if (e && e.addEventListener) {
    let r = o;
    r === void 0 &&
      tt &&
      (t === 'touchstart' || t === 'touchmove' || t === 'wheel') &&
      (r = { passive: !1 }),
      e.addEventListener(t, n, r);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
let Ho = {};
function Rl(e, t) {}
function Dl(e, t, n) {
  !t && !Ho[n] && (e(!1, n), (Ho[n] = !0));
}
function Bl(e, t) {
  Dl(Rl, e, t);
}
const Qt = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold'
  ],
  gv = e => ({
    color: e.colorLink,
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${e.motionDurationSlow}`,
    '&:focus, &:hover': { color: e.colorLinkHover },
    '&:active': { color: e.colorLinkActive }
  }),
  zl = (e, t, n, o, r) => {
    const i = e / 2,
      a = 0,
      l = i,
      s = (n * 1) / Math.sqrt(2),
      u = i - n * (1 - 1 / Math.sqrt(2)),
      d = i - t * (1 / Math.sqrt(2)),
      c = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
      m = 2 * i - d,
      p = c,
      v = 2 * i - s,
      g = u,
      w = 2 * i - a,
      S = l,
      y = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
      T = n * (Math.sqrt(2) - 1);
    return {
      pointerEvents: 'none',
      width: e,
      height: e,
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: y,
        height: y,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: r,
        zIndex: 0,
        background: 'transparent'
      },
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: e,
        height: e / 2,
        background: o,
        clipPath: {
          _multi_value_: !0,
          value: [
            `polygon(${T}px 100%, 50% ${T}px, ${2 * i -
              T}px 100%, ${T}px 100%)`,
            `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${u} L ${d} ${c} A ${t} ${t} 0 0 1 ${m} ${p} L ${v} ${g} A ${n} ${n} 0 0 0 ${w} ${S} Z')`
          ]
        },
        content: '""'
      }
    };
  };
function Nl(e, t) {
  return Qt.reduce((n, o) => {
    const r = e[`${o}-1`],
      i = e[`${o}-3`],
      a = e[`${o}-6`],
      l = e[`${o}-7`];
    return f(
      f({}, n),
      t(o, { lightColor: r, lightBorderColor: i, darkColor: a, textColor: l })
    );
  }, {});
}
function cn(e, t) {
  const n = f({}, e);
  for (let o = 0; o < t.length; o += 1) {
    const r = t[o];
    delete n[r];
  }
  return n;
}
const lt = (e, t, n) => {
  Bl(e, `[ant-design-vue: ${t}] ${n}`);
};
function Hl() {
  return '';
}
function Ll(e) {
  return e ? e.ownerDocument : window.document;
}
function Oi() {}
const Fl = () => ({
    action: I.oneOfType([I.string, I.arrayOf(I.string)]).def([]),
    showAction: I.any.def([]),
    hideAction: I.any.def([]),
    getPopupClassNameFromAlign: I.any.def(Hl),
    onPopupVisibleChange: Function,
    afterPopupVisibleChange: I.func.def(Oi),
    popup: I.any,
    arrow: I.bool.def(!0),
    popupStyle: { type: Object, default: void 0 },
    prefixCls: I.string.def('rc-trigger-popup'),
    popupClassName: I.string.def(''),
    popupPlacement: String,
    builtinPlacements: I.object,
    popupTransitionName: String,
    popupAnimation: I.any,
    mouseEnterDelay: I.number.def(0),
    mouseLeaveDelay: I.number.def(0.1),
    zIndex: Number,
    focusDelay: I.number.def(0),
    blurDelay: I.number.def(0.15),
    getPopupContainer: Function,
    getDocument: I.func.def(Ll),
    forceRender: { type: Boolean, default: void 0 },
    destroyPopupOnHide: { type: Boolean, default: !1 },
    mask: { type: Boolean, default: !1 },
    maskClosable: { type: Boolean, default: !0 },
    popupAlign: I.object.def(() => ({})),
    popupVisible: { type: Boolean, default: void 0 },
    defaultPopupVisible: { type: Boolean, default: !1 },
    maskTransitionName: String,
    maskAnimation: String,
    stretch: String,
    alignPoint: { type: Boolean, default: void 0 },
    autoDestroy: { type: Boolean, default: !1 },
    mobile: Object,
    getTriggerDOMNode: Function
  }),
  ao = {
    visible: Boolean,
    prefixCls: String,
    zIndex: Number,
    destroyPopupOnHide: Boolean,
    forceRender: Boolean,
    arrow: { type: Boolean, default: !0 },
    animation: [String, Object],
    transitionName: String,
    stretch: { type: String },
    align: { type: Object },
    point: { type: Object },
    getRootDomNode: { type: Function },
    getClassNameFromAlign: { type: Function },
    onAlign: { type: Function },
    onMouseenter: { type: Function },
    onMouseleave: { type: Function },
    onMousedown: { type: Function },
    onTouchstart: { type: Function }
  },
  jl = f(f({}, ao), { mobile: { type: Object } }),
  Wl = f(f({}, ao), {
    mask: Boolean,
    mobile: { type: Object },
    maskAnimation: String,
    maskTransitionName: String
  });
function Ti(e) {
  const {
    prefixCls: t,
    visible: n,
    zIndex: o,
    mask: r,
    maskAnimation: i,
    maskTransitionName: a
  } = e;
  if (!r) return null;
  let l = {};
  return (
    (a || i) && (l = si({ prefixCls: t, transitionName: a, animation: i })),
    b(pt, M({ appear: !0 }, l), {
      default: () => [
        oo(b('div', { style: { zIndex: o }, class: `${t}-mask` }, null), [
          [rl('if'), n]
        ])
      ]
    })
  );
}
Ti.displayName = 'Mask';
const Vl = q({
  compatConfig: { MODE: 3 },
  name: 'MobilePopupInner',
  inheritAttrs: !1,
  props: jl,
  emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
  setup(e, t) {
    let { expose: n, slots: o } = t;
    const r = W();
    return (
      n({ forceAlign: () => {}, getElement: () => r.value }),
      () => {
        var i;
        const {
            zIndex: a,
            visible: l,
            prefixCls: s,
            mobile: {
              popupClassName: u,
              popupStyle: d,
              popupMotion: c = {},
              popupRender: m
            } = {}
          } = e,
          p = f({ zIndex: a }, d);
        let v = Ye(
          (i = o.default) === null || i === void 0 ? void 0 : i.call(o)
        );
        v.length > 1 && (v = b('div', { class: `${s}-content` }, [v])),
          m && (v = m(v));
        const g = oe(s, u);
        return b(pt, M({ ref: r }, c), {
          default: () => [l ? b('div', { class: g, style: p }, [v]) : null]
        });
      }
    );
  }
});
var Kl =
  (globalThis && globalThis.__awaiter) ||
  function(e, t, n, o) {
    function r(i) {
      return i instanceof n
        ? i
        : new n(function(a) {
            a(i);
          });
    }
    return new (n || (n = Promise))(function(i, a) {
      function l(d) {
        try {
          u(o.next(d));
        } catch (c) {
          a(c);
        }
      }
      function s(d) {
        try {
          u(o.throw(d));
        } catch (c) {
          a(c);
        }
      }
      function u(d) {
        d.done ? i(d.value) : r(d.value).then(l, s);
      }
      u((o = o.apply(e, t || [])).next());
    });
  };
const Lo = ['measure', 'align', null, 'motion'],
  Ul = (e, t) => {
    const n = z(null),
      o = z(),
      r = z(!1);
    function i(s) {
      r.value || (n.value = s);
    }
    function a() {
      le.cancel(o.value);
    }
    function l(s) {
      a(),
        (o.value = le(() => {
          let u = n.value;
          switch (n.value) {
            case 'align':
              u = 'motion';
              break;
            case 'motion':
              u = 'stable';
              break;
          }
          i(u), s == null || s();
        }));
    }
    return (
      J(
        e,
        () => {
          i('measure');
        },
        { immediate: !0, flush: 'post' }
      ),
      Ee(() => {
        J(
          n,
          () => {
            switch (n.value) {
              case 'measure':
                t();
                break;
            }
            n.value &&
              (o.value = le(() =>
                Kl(void 0, void 0, void 0, function*() {
                  const s = Lo.indexOf(n.value),
                    u = Lo[s + 1];
                  u && s !== -1 && i(u);
                })
              ));
          },
          { immediate: !0, flush: 'post' }
        );
      }),
      me(() => {
        (r.value = !0), a();
      }),
      [n, l]
    );
  },
  Gl = e => {
    const t = z({ width: 0, height: 0 });
    function n(r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
    }
    return [
      C(() => {
        const r = {};
        if (e.value) {
          const { width: i, height: a } = t.value;
          e.value.indexOf('height') !== -1 && a
            ? (r.height = `${a}px`)
            : e.value.indexOf('minHeight') !== -1 &&
              a &&
              (r.minHeight = `${a}px`),
            e.value.indexOf('width') !== -1 && i
              ? (r.width = `${i}px`)
              : e.value.indexOf('minWidth') !== -1 &&
                i &&
                (r.minWidth = `${i}px`);
        }
        return r;
      }),
      n
    ];
  };
function Fo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t &&
      (o = o.filter(function(r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fo(Object(n), !0).forEach(function(o) {
          Xl(e, o, n[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Fo(Object(n)).forEach(function(o) {
          Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
        });
  }
  return e;
}
function Ln(e) {
  '@babel/helpers - typeof';
  return (
    (Ln =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function(t) {
            return typeof t;
          }
        : function(t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ln(e)
  );
}
function Xl(e, t, n) {
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
var gt,
  Yl = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
function Jt() {
  if (gt !== void 0) return gt;
  gt = '';
  var e = document.createElement('p').style,
    t = 'Transform';
  for (var n in Yl) n + t in e && (gt = n);
  return gt;
}
function Ii() {
  return Jt() ? ''.concat(Jt(), 'TransitionProperty') : 'transitionProperty';
}
function dn() {
  return Jt() ? ''.concat(Jt(), 'Transform') : 'transform';
}
function Wo(e, t) {
  var n = Ii();
  n &&
    ((e.style[n] = t),
    n !== 'transitionProperty' && (e.style.transitionProperty = t));
}
function bn(e, t) {
  var n = dn();
  n && ((e.style[n] = t), n !== 'transform' && (e.style.transform = t));
}
function ql(e) {
  return e.style.transitionProperty || e.style[Ii()];
}
function kl(e) {
  var t = window.getComputedStyle(e, null),
    n = t.getPropertyValue('transform') || t.getPropertyValue(dn());
  if (n && n !== 'none') {
    var o = n.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(o[12] || o[4], 0), y: parseFloat(o[13] || o[5], 0) };
  }
  return { x: 0, y: 0 };
}
var Zl = /matrix\((.*)\)/,
  Ql = /matrix3d\((.*)\)/;
function Jl(e, t) {
  var n = window.getComputedStyle(e, null),
    o = n.getPropertyValue('transform') || n.getPropertyValue(dn());
  if (o && o !== 'none') {
    var r,
      i = o.match(Zl);
    if (i)
      (i = i[1]),
        (r = i.split(',').map(function(l) {
          return parseFloat(l, 10);
        })),
        (r[4] = t.x),
        (r[5] = t.y),
        bn(e, 'matrix('.concat(r.join(','), ')'));
    else {
      var a = o.match(Ql)[1];
      (r = a.split(',').map(function(l) {
        return parseFloat(l, 10);
      })),
        (r[12] = t.x),
        (r[13] = t.y),
        bn(e, 'matrix3d('.concat(r.join(','), ')'));
    }
  } else
    bn(
      e,
      'translateX('
        .concat(t.x, 'px) translateY(')
        .concat(t.y, 'px) translateZ(0)')
    );
}
var es = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
  Rt;
function Vo(e) {
  var t = e.style.display;
  (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
}
function nt(e, t, n) {
  var o = n;
  if (Ln(t) === 'object') {
    for (var r in t) t.hasOwnProperty(r) && nt(e, r, t[r]);
    return;
  }
  if (typeof o < 'u') {
    typeof o == 'number' && (o = ''.concat(o, 'px')), (e.style[t] = o);
    return;
  }
  return Rt(e, t);
}
function ts(e) {
  var t,
    n,
    o,
    r = e.ownerDocument,
    i = r.body,
    a = r && r.documentElement;
  return (
    (t = e.getBoundingClientRect()),
    (n = Math.floor(t.left)),
    (o = Math.floor(t.top)),
    (n -= a.clientLeft || i.clientLeft || 0),
    (o -= a.clientTop || i.clientTop || 0),
    { left: n, top: o }
  );
}
function Ei(e, t) {
  var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
    o = 'scroll'.concat(t ? 'Top' : 'Left');
  if (typeof n != 'number') {
    var r = e.document;
    (n = r.documentElement[o]), typeof n != 'number' && (n = r.body[o]);
  }
  return n;
}
function Pi(e) {
  return Ei(e);
}
function _i(e) {
  return Ei(e, !0);
}
function Tt(e) {
  var t = ts(e),
    n = e.ownerDocument,
    o = n.defaultView || n.parentWindow;
  return (t.left += Pi(o)), (t.top += _i(o)), t;
}
function lo(e) {
  return e != null && e == e.window;
}
function Ai(e) {
  return lo(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function ns(e, t, n) {
  var o = n,
    r = '',
    i = Ai(e);
  return (
    (o = o || i.defaultView.getComputedStyle(e, null)),
    o && (r = o.getPropertyValue(t) || o[t]),
    r
  );
}
var os = new RegExp('^('.concat(es, ')(?!px)[a-z%]+$'), 'i'),
  rs = /^(top|right|bottom|left)$/,
  yn = 'currentStyle',
  $n = 'runtimeStyle',
  je = 'left',
  is = 'px';
function as(e, t) {
  var n = e[yn] && e[yn][t];
  if (os.test(n) && !rs.test(t)) {
    var o = e.style,
      r = o[je],
      i = e[$n][je];
    (e[$n][je] = e[yn][je]),
      (o[je] = t === 'fontSize' ? '1em' : n || 0),
      (n = o.pixelLeft + is),
      (o[je] = r),
      (e[$n][je] = i);
  }
  return n === '' ? 'auto' : n;
}
typeof window < 'u' && (Rt = window.getComputedStyle ? ns : as);
function Bt(e, t) {
  return e === 'left'
    ? t.useCssRight
      ? 'right'
      : e
    : t.useCssBottom
    ? 'bottom'
    : e;
}
function Ko(e) {
  if (e === 'left') return 'right';
  if (e === 'right') return 'left';
  if (e === 'top') return 'bottom';
  if (e === 'bottom') return 'top';
}
function Uo(e, t, n) {
  nt(e, 'position') === 'static' && (e.style.position = 'relative');
  var o = -999,
    r = -999,
    i = Bt('left', n),
    a = Bt('top', n),
    l = Ko(i),
    s = Ko(a);
  i !== 'left' && (o = 999), a !== 'top' && (r = 999);
  var u = '',
    d = Tt(e);
  ('left' in t || 'top' in t) && ((u = ql(e) || ''), Wo(e, 'none')),
    'left' in t && ((e.style[l] = ''), (e.style[i] = ''.concat(o, 'px'))),
    'top' in t && ((e.style[s] = ''), (e.style[a] = ''.concat(r, 'px'))),
    Vo(e);
  var c = Tt(e),
    m = {};
  for (var p in t)
    if (t.hasOwnProperty(p)) {
      var v = Bt(p, n),
        g = p === 'left' ? o : r,
        w = d[p] - c[p];
      v === p ? (m[v] = g + w) : (m[v] = g - w);
    }
  nt(e, m), Vo(e), ('left' in t || 'top' in t) && Wo(e, u);
  var S = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var T = Bt(y, n),
        H = t[y] - d[y];
      y === T ? (S[T] = m[T] + H) : (S[T] = m[T] - H);
    }
  nt(e, S);
}
function ls(e, t) {
  var n = Tt(e),
    o = kl(e),
    r = { x: o.x, y: o.y };
  'left' in t && (r.x = o.x + t.left - n.left),
    'top' in t && (r.y = o.y + t.top - n.top),
    Jl(e, r);
}
function ss(e, t, n) {
  if (n.ignoreShake) {
    var o = Tt(e),
      r = o.left.toFixed(0),
      i = o.top.toFixed(0),
      a = t.left.toFixed(0),
      l = t.top.toFixed(0);
    if (r === a && i === l) return;
  }
  n.useCssRight || n.useCssBottom
    ? Uo(e, t, n)
    : n.useCssTransform && dn() in document.body.style
    ? ls(e, t)
    : Uo(e, t, n);
}
function so(e, t) {
  for (var n = 0; n < e.length; n++) t(e[n]);
}
function Mi(e) {
  return Rt(e, 'boxSizing') === 'border-box';
}
var us = ['margin', 'border', 'padding'],
  Fn = -1,
  cs = 2,
  jn = 1,
  ds = 0;
function fs(e, t, n) {
  var o = {},
    r = e.style,
    i;
  for (i in t) t.hasOwnProperty(i) && ((o[i] = r[i]), (r[i] = t[i]));
  n.call(e);
  for (i in t) t.hasOwnProperty(i) && (r[i] = o[i]);
}
function wt(e, t, n) {
  var o = 0,
    r,
    i,
    a;
  for (i = 0; i < t.length; i++)
    if (((r = t[i]), r))
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        r === 'border'
          ? (l = ''.concat(r).concat(n[a], 'Width'))
          : (l = r + n[a]),
          (o += parseFloat(Rt(e, l)) || 0);
      }
  return o;
}
var xe = {
  getParent: function(t) {
    var n = t;
    do n.nodeType === 11 && n.host ? (n = n.host) : (n = n.parentNode);
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
so(['Width', 'Height'], function(e) {
  (xe['doc'.concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      n.documentElement['scroll'.concat(e)],
      n.body['scroll'.concat(e)],
      xe['viewport'.concat(e)](n)
    );
  }),
    (xe['viewport'.concat(e)] = function(t) {
      var n = 'client'.concat(e),
        o = t.document,
        r = o.body,
        i = o.documentElement,
        a = i[n];
      return (o.compatMode === 'CSS1Compat' && a) || (r && r[n]) || a;
    });
});
function Go(e, t, n) {
  var o = n;
  if (lo(e)) return t === 'width' ? xe.viewportWidth(e) : xe.viewportHeight(e);
  if (e.nodeType === 9) return t === 'width' ? xe.docWidth(e) : xe.docHeight(e);
  var r = t === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
    i = Math.floor(
      t === 'width'
        ? e.getBoundingClientRect().width
        : e.getBoundingClientRect().height
    ),
    a = Mi(e),
    l = 0;
  (i == null || i <= 0) &&
    ((i = void 0),
    (l = Rt(e, t)),
    (l == null || Number(l) < 0) && (l = e.style[t] || 0),
    (l = Math.floor(parseFloat(l)) || 0)),
    o === void 0 && (o = a ? jn : Fn);
  var s = i !== void 0 || a,
    u = i || l;
  return o === Fn
    ? s
      ? u - wt(e, ['border', 'padding'], r)
      : l
    : s
    ? o === jn
      ? u
      : u + (o === cs ? -wt(e, ['border'], r) : wt(e, ['margin'], r))
    : l + wt(e, us.slice(o), r);
}
var ps = { position: 'absolute', visibility: 'hidden', display: 'block' };
function Xo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o,
    r = t[0];
  return (
    r.offsetWidth !== 0
      ? (o = Go.apply(void 0, t))
      : fs(r, ps, function() {
          o = Go.apply(void 0, t);
        }),
    o
  );
}
so(['width', 'height'], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  xe['outer'.concat(t)] = function(o, r) {
    return o && Xo(o, e, r ? ds : jn);
  };
  var n = e === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  xe[e] = function(o, r) {
    var i = r;
    if (i !== void 0) {
      if (o) {
        var a = Mi(o);
        return a && (i += wt(o, ['padding', 'border'], n)), nt(o, e, i);
      }
      return;
    }
    return o && Xo(o, e, Fn);
  };
});
function Ri(e, t) {
  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var K = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout) return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: Ai,
  offset: function(t, n, o) {
    if (typeof n < 'u') ss(t, n, o || {});
    else return Tt(t);
  },
  isWindow: lo,
  each: so,
  css: nt,
  clone: function(t) {
    var n,
      o = {};
    for (n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
    var r = t.overflow;
    if (r) for (n in t) t.hasOwnProperty(n) && (o.overflow[n] = t.overflow[n]);
    return o;
  },
  mix: Ri,
  getWindowScrollLeft: function(t) {
    return Pi(t);
  },
  getWindowScrollTop: function(t) {
    return _i(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      K.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
Ri(K, xe);
var wn = K.getParent;
function Wn(e) {
  if (K.isWindow(e) || e.nodeType === 9) return null;
  var t = K.getDocument(e),
    n = t.body,
    o,
    r = K.css(e, 'position'),
    i = r === 'fixed' || r === 'absolute';
  if (!i) return e.nodeName.toLowerCase() === 'html' ? null : wn(e);
  for (o = wn(e); o && o !== n && o.nodeType !== 9; o = wn(o))
    if (((r = K.css(o, 'position')), r !== 'static')) return o;
  return null;
}
var Yo = K.getParent;
function ms(e) {
  if (K.isWindow(e) || e.nodeType === 9) return !1;
  var t = K.getDocument(e),
    n = t.body,
    o = null;
  for (o = Yo(e); o && o !== n && o !== t; o = Yo(o)) {
    var r = K.css(o, 'position');
    if (r === 'fixed') return !0;
  }
  return !1;
}
function uo(e, t) {
  for (
    var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
      o = Wn(e),
      r = K.getDocument(e),
      i = r.defaultView || r.parentWindow,
      a = r.body,
      l = r.documentElement;
    o;

  ) {
    if (
      (navigator.userAgent.indexOf('MSIE') === -1 || o.clientWidth !== 0) &&
      o !== a &&
      o !== l &&
      K.css(o, 'overflow') !== 'visible'
    ) {
      var s = K.offset(o);
      (s.left += o.clientLeft),
        (s.top += o.clientTop),
        (n.top = Math.max(n.top, s.top)),
        (n.right = Math.min(n.right, s.left + o.clientWidth)),
        (n.bottom = Math.min(n.bottom, s.top + o.clientHeight)),
        (n.left = Math.max(n.left, s.left));
    } else if (o === a || o === l) break;
    o = Wn(o);
  }
  var u = null;
  if (!K.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var d = K.css(e, 'position');
    d === 'absolute' && (e.style.position = 'fixed');
  }
  var c = K.getWindowScrollLeft(i),
    m = K.getWindowScrollTop(i),
    p = K.viewportWidth(i),
    v = K.viewportHeight(i),
    g = l.scrollWidth,
    w = l.scrollHeight,
    S = window.getComputedStyle(a);
  if (
    (S.overflowX === 'hidden' && (g = i.innerWidth),
    S.overflowY === 'hidden' && (w = i.innerHeight),
    e.style && (e.style.position = u),
    t || ms(e))
  )
    (n.left = Math.max(n.left, c)),
      (n.top = Math.max(n.top, m)),
      (n.right = Math.min(n.right, c + p)),
      (n.bottom = Math.min(n.bottom, m + v));
  else {
    var y = Math.max(g, c + p);
    n.right = Math.min(n.right, y);
    var T = Math.max(w, m + v);
    n.bottom = Math.min(n.bottom, T);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
    ? n
    : null;
}
function vs(e, t, n, o) {
  var r = K.clone(e),
    i = { width: t.width, height: t.height };
  return (
    o.adjustX && r.left < n.left && (r.left = n.left),
    o.resizeWidth &&
      r.left >= n.left &&
      r.left + i.width > n.right &&
      (i.width -= r.left + i.width - n.right),
    o.adjustX &&
      r.left + i.width > n.right &&
      (r.left = Math.max(n.right - i.width, n.left)),
    o.adjustY && r.top < n.top && (r.top = n.top),
    o.resizeHeight &&
      r.top >= n.top &&
      r.top + i.height > n.bottom &&
      (i.height -= r.top + i.height - n.bottom),
    o.adjustY &&
      r.top + i.height > n.bottom &&
      (r.top = Math.max(n.bottom - i.height, n.top)),
    K.mix(r, i)
  );
}
function co(e) {
  var t, n, o;
  if (!K.isWindow(e) && e.nodeType !== 9)
    (t = K.offset(e)), (n = K.outerWidth(e)), (o = K.outerHeight(e));
  else {
    var r = K.getWindow(e);
    (t = { left: K.getWindowScrollLeft(r), top: K.getWindowScrollTop(r) }),
      (n = K.viewportWidth(r)),
      (o = K.viewportHeight(r));
  }
  return (t.width = n), (t.height = o), t;
}
function qo(e, t) {
  var n = t.charAt(0),
    o = t.charAt(1),
    r = e.width,
    i = e.height,
    a = e.left,
    l = e.top;
  return (
    n === 'c' ? (l += i / 2) : n === 'b' && (l += i),
    o === 'c' ? (a += r / 2) : o === 'r' && (a += r),
    { left: a, top: l }
  );
}
function zt(e, t, n, o, r) {
  var i = qo(t, n[1]),
    a = qo(e, n[0]),
    l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + o[0] - r[0]),
    top: Math.round(e.top - l[1] + o[1] - r[1])
  };
}
function ko(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function Zo(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function gs(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function hs(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function Nt(e, t, n) {
  var o = [];
  return (
    K.each(e, function(r) {
      o.push(
        r.replace(t, function(i) {
          return n[i];
        })
      );
    }),
    o
  );
}
function Ht(e, t) {
  return (e[t] = -e[t]), e;
}
function Qo(e, t) {
  var n;
  return (
    /%$/.test(e)
      ? (n = (parseInt(e.substring(0, e.length - 1), 10) / 100) * t)
      : (n = parseInt(e, 10)),
    n || 0
  );
}
function Jo(e, t) {
  (e[0] = Qo(e[0], t.width)), (e[1] = Qo(e[1], t.height));
}
function Di(e, t, n, o) {
  var r = n.points,
    i = n.offset || [0, 0],
    a = n.targetOffset || [0, 0],
    l = n.overflow,
    s = n.source || e;
  (i = [].concat(i)), (a = [].concat(a)), (l = l || {});
  var u = {},
    d = 0,
    c = !!(l && l.alwaysByViewport),
    m = uo(s, c),
    p = co(s);
  Jo(i, p), Jo(a, t);
  var v = zt(p, t, r, i, a),
    g = K.merge(p, v);
  if (m && (l.adjustX || l.adjustY) && o) {
    if (l.adjustX && ko(v, p, m)) {
      var w = Nt(r, /[lr]/gi, { l: 'r', r: 'l' }),
        S = Ht(i, 0),
        y = Ht(a, 0),
        T = zt(p, t, w, S, y);
      gs(T, p, m) || ((d = 1), (r = w), (i = S), (a = y));
    }
    if (l.adjustY && Zo(v, p, m)) {
      var H = Nt(r, /[tb]/gi, { t: 'b', b: 't' }),
        P = Ht(i, 1),
        O = Ht(a, 1),
        h = zt(p, t, H, P, O);
      hs(h, p, m) || ((d = 1), (r = H), (i = P), (a = O));
    }
    d && ((v = zt(p, t, r, i, a)), K.mix(g, v));
    var A = ko(v, p, m),
      L = Zo(v, p, m);
    if (A || L) {
      var x = r;
      A && (x = Nt(r, /[lr]/gi, { l: 'r', r: 'l' })),
        L && (x = Nt(r, /[tb]/gi, { t: 'b', b: 't' })),
        (r = x),
        (i = n.offset || [0, 0]),
        (a = n.targetOffset || [0, 0]);
    }
    (u.adjustX = l.adjustX && A),
      (u.adjustY = l.adjustY && L),
      (u.adjustX || u.adjustY) && (g = vs(v, p, m, u));
  }
  return (
    g.width !== p.width && K.css(s, 'width', K.width(s) + g.width - p.width),
    g.height !== p.height &&
      K.css(s, 'height', K.height(s) + g.height - p.height),
    K.offset(
      s,
      { left: g.left, top: g.top },
      {
        useCssRight: n.useCssRight,
        useCssBottom: n.useCssBottom,
        useCssTransform: n.useCssTransform,
        ignoreShake: n.ignoreShake
      }
    ),
    { points: r, offset: i, targetOffset: a, overflow: u }
  );
}
function bs(e, t) {
  var n = uo(e, t),
    o = co(e);
  return (
    !n ||
    o.left + o.width <= n.left ||
    o.top + o.height <= n.top ||
    o.left >= n.right ||
    o.top >= n.bottom
  );
}
function fo(e, t, n) {
  var o = n.target || t,
    r = co(o),
    i = !bs(o, n.overflow && n.overflow.alwaysByViewport);
  return Di(e, r, n, i);
}
fo.__getOffsetParent = Wn;
fo.__getVisibleRectForElement = uo;
function ys(e, t, n) {
  var o,
    r,
    i = K.getDocument(e),
    a = i.defaultView || i.parentWindow,
    l = K.getWindowScrollLeft(a),
    s = K.getWindowScrollTop(a),
    u = K.viewportWidth(a),
    d = K.viewportHeight(a);
  'pageX' in t ? (o = t.pageX) : (o = l + t.clientX),
    'pageY' in t ? (r = t.pageY) : (r = s + t.clientY);
  var c = { left: o, top: r, width: 0, height: 0 },
    m = o >= 0 && o <= l + u && r >= 0 && r <= s + d,
    p = [n.points[0], 'cc'];
  return Di(e, c, jo(jo({}, n), {}, { points: p }), m);
}
function $e(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
    r = e;
  if ((Array.isArray(e) && (r = dt(e)[0]), !r)) return null;
  const i = fi(r, t, o);
  return (
    (i.props = n ? f(f({}, i.props), t) : i.props),
    ui(typeof i.props.class != 'object'),
    i
  );
}
function hv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return e.map(o => $e(o, t, n));
}
function bv(e, t, n) {
  qt(fi(e, f({}, t)), n);
}
const Bi = e =>
  (e || []).some(t =>
    il(t) ? !(t.type === al || (t.type === Ge && !Bi(t.children))) : !0
  )
    ? e
    : null;
function yv(e, t, n, o) {
  var r;
  const i = (r = e[t]) === null || r === void 0 ? void 0 : r.call(e, n);
  return Bi(i) ? i : o == null ? void 0 : o();
}
const zi = e => {
  if (!e) return !1;
  if (e.offsetParent) return !0;
  if (e.getBBox) {
    const t = e.getBBox();
    if (t.width || t.height) return !0;
  }
  if (e.getBoundingClientRect) {
    const t = e.getBoundingClientRect();
    if (t.width || t.height) return !0;
  }
  return !1;
};
function $s(e, t) {
  return e === t
    ? !0
    : !e || !t
    ? !1
    : 'pageX' in t && 'pageY' in t
    ? e.pageX === t.pageX && e.pageY === t.pageY
    : 'clientX' in t && 'clientY' in t
    ? e.clientX === t.clientX && e.clientY === t.clientY
    : !1;
}
function ws(e, t) {
  e !== document.activeElement &&
    et(t, e) &&
    typeof e.focus == 'function' &&
    e.focus();
}
function er(e, t) {
  let n = null,
    o = null;
  function r(a) {
    let [{ target: l }] = a;
    if (!document.documentElement.contains(l)) return;
    const { width: s, height: u } = l.getBoundingClientRect(),
      d = Math.floor(s),
      c = Math.floor(u);
    (n !== d || o !== c) &&
      Promise.resolve().then(() => {
        t({ width: d, height: c });
      }),
      (n = d),
      (o = c);
  }
  const i = new $i(r);
  return (
    e && i.observe(e),
    () => {
      i.disconnect();
    }
  );
}
const Ss = (e, t) => {
  let n = !1,
    o = null;
  function r() {
    clearTimeout(o);
  }
  function i(a) {
    if (!n || a === !0) {
      if (e() === !1) return;
      (n = !0),
        r(),
        (o = setTimeout(() => {
          n = !1;
        }, t.value));
    } else
      r(),
        (o = setTimeout(() => {
          (n = !1), i();
        }, t.value));
  }
  return [
    i,
    () => {
      (n = !1), r();
    }
  ];
};
function Cs() {
  (this.__data__ = []), (this.size = 0);
}
function Ni(e, t) {
  return e === t || (e !== e && t !== t);
}
function fn(e, t) {
  for (var n = e.length; n--; ) if (Ni(e[n][0], t)) return n;
  return -1;
}
var xs = Array.prototype,
  Os = xs.splice;
function Ts(e) {
  var t = this.__data__,
    n = fn(t, e);
  if (n < 0) return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Os.call(t, n, 1), --this.size, !0;
}
function Is(e) {
  var t = this.__data__,
    n = fn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Es(e) {
  return fn(this.__data__, e) > -1;
}
function Ps(e, t) {
  var n = this.__data__,
    o = fn(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
}
function Pe(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Pe.prototype.clear = Cs;
Pe.prototype.delete = Ts;
Pe.prototype.get = Is;
Pe.prototype.has = Es;
Pe.prototype.set = Ps;
function _s() {
  (this.__data__ = new Pe()), (this.size = 0);
}
function As(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
function Ms(e) {
  return this.__data__.get(e);
}
function Rs(e) {
  return this.__data__.has(e);
}
var Ds =
  typeof global == 'object' && global && global.Object === Object && global;
const Hi = Ds;
var Bs = typeof self == 'object' && self && self.Object === Object && self,
  zs = Hi || Bs || Function('return this')();
const _e = zs;
var Ns = _e.Symbol;
const st = Ns;
var Li = Object.prototype,
  Hs = Li.hasOwnProperty,
  Ls = Li.toString,
  ht = st ? st.toStringTag : void 0;
function Fs(e) {
  var t = Hs.call(e, ht),
    n = e[ht];
  try {
    e[ht] = void 0;
    var o = !0;
  } catch {}
  var r = Ls.call(e);
  return o && (t ? (e[ht] = n) : delete e[ht]), r;
}
var js = Object.prototype,
  Ws = js.toString;
function Vs(e) {
  return Ws.call(e);
}
var Ks = '[object Null]',
  Us = '[object Undefined]',
  tr = st ? st.toStringTag : void 0;
function mt(e) {
  return e == null
    ? e === void 0
      ? Us
      : Ks
    : tr && tr in Object(e)
    ? Fs(e)
    : Vs(e);
}
function Fi(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var Gs = '[object AsyncFunction]',
  Xs = '[object Function]',
  Ys = '[object GeneratorFunction]',
  qs = '[object Proxy]';
function ji(e) {
  if (!Fi(e)) return !1;
  var t = mt(e);
  return t == Xs || t == Ys || t == Gs || t == qs;
}
var ks = _e['__core-js_shared__'];
const Sn = ks;
var nr = (function() {
  var e = /[^.]+$/.exec((Sn && Sn.keys && Sn.keys.IE_PROTO) || '');
  return e ? 'Symbol(src)_1.' + e : '';
})();
function Zs(e) {
  return !!nr && nr in e;
}
var Qs = Function.prototype,
  Js = Qs.toString;
function qe(e) {
  if (e != null) {
    try {
      return Js.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var eu = /[\\^$.*+?()[\]{}|]/g,
  tu = /^\[object .+?Constructor\]$/,
  nu = Function.prototype,
  ou = Object.prototype,
  ru = nu.toString,
  iu = ou.hasOwnProperty,
  au = RegExp(
    '^' +
      ru
        .call(iu)
        .replace(eu, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function lu(e) {
  if (!Fi(e) || Zs(e)) return !1;
  var t = ji(e) ? au : tu;
  return t.test(qe(e));
}
function su(e, t) {
  return e == null ? void 0 : e[t];
}
function vt(e, t) {
  var n = su(e, t);
  return lu(n) ? n : void 0;
}
var uu = vt(_e, 'Map');
const It = uu;
var cu = vt(Object, 'create');
const Et = cu;
function du() {
  (this.__data__ = Et ? Et(null) : {}), (this.size = 0);
}
function fu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var pu = '__lodash_hash_undefined__',
  mu = Object.prototype,
  vu = mu.hasOwnProperty;
function gu(e) {
  var t = this.__data__;
  if (Et) {
    var n = t[e];
    return n === pu ? void 0 : n;
  }
  return vu.call(t, e) ? t[e] : void 0;
}
var hu = Object.prototype,
  bu = hu.hasOwnProperty;
function yu(e) {
  var t = this.__data__;
  return Et ? t[e] !== void 0 : bu.call(t, e);
}
var $u = '__lodash_hash_undefined__';
function wu(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = Et && t === void 0 ? $u : t),
    this
  );
}
function Xe(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Xe.prototype.clear = du;
Xe.prototype.delete = fu;
Xe.prototype.get = gu;
Xe.prototype.has = yu;
Xe.prototype.set = wu;
function Su() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Xe(),
      map: new (It || Pe)(),
      string: new Xe()
    });
}
function Cu(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
function pn(e, t) {
  var n = e.__data__;
  return Cu(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
}
function xu(e) {
  var t = pn(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function Ou(e) {
  return pn(this, e).get(e);
}
function Tu(e) {
  return pn(this, e).has(e);
}
function Iu(e, t) {
  var n = pn(this, e),
    o = n.size;
  return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
}
function ke(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ke.prototype.clear = Su;
ke.prototype.delete = xu;
ke.prototype.get = Ou;
ke.prototype.has = Tu;
ke.prototype.set = Iu;
var Eu = 200;
function Pu(e, t) {
  var n = this.__data__;
  if (n instanceof Pe) {
    var o = n.__data__;
    if (!It || o.length < Eu - 1)
      return o.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new ke(o);
  }
  return n.set(e, t), (this.size = n.size), this;
}
function ze(e) {
  var t = (this.__data__ = new Pe(e));
  this.size = t.size;
}
ze.prototype.clear = _s;
ze.prototype.delete = As;
ze.prototype.get = Ms;
ze.prototype.has = Rs;
ze.prototype.set = Pu;
var _u = '__lodash_hash_undefined__';
function Au(e) {
  return this.__data__.set(e, _u), this;
}
function Mu(e) {
  return this.__data__.has(e);
}
function Pt(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new ke(); ++t < n; ) this.add(e[t]);
}
Pt.prototype.add = Pt.prototype.push = Au;
Pt.prototype.has = Mu;
function Ru(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
function Wi(e, t) {
  return e.has(t);
}
var Du = 1,
  Bu = 2;
function Vi(e, t, n, o, r, i) {
  var a = n & Du,
    l = e.length,
    s = t.length;
  if (l != s && !(a && s > l)) return !1;
  var u = i.get(e),
    d = i.get(t);
  if (u && d) return u == t && d == e;
  var c = -1,
    m = !0,
    p = n & Bu ? new Pt() : void 0;
  for (i.set(e, t), i.set(t, e); ++c < l; ) {
    var v = e[c],
      g = t[c];
    if (o) var w = a ? o(g, v, c, t, e, i) : o(v, g, c, e, t, i);
    if (w !== void 0) {
      if (w) continue;
      m = !1;
      break;
    }
    if (p) {
      if (
        !Ru(t, function(S, y) {
          if (!Wi(p, y) && (v === S || r(v, S, n, o, i))) return p.push(y);
        })
      ) {
        m = !1;
        break;
      }
    } else if (!(v === g || r(v, g, n, o, i))) {
      m = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), m;
}
var zu = _e.Uint8Array;
const or = zu;
function Nu(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function(o, r) {
      n[++t] = [r, o];
    }),
    n
  );
}
function po(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function(o) {
      n[++t] = o;
    }),
    n
  );
}
var Hu = 1,
  Lu = 2,
  Fu = '[object Boolean]',
  ju = '[object Date]',
  Wu = '[object Error]',
  Vu = '[object Map]',
  Ku = '[object Number]',
  Uu = '[object RegExp]',
  Gu = '[object Set]',
  Xu = '[object String]',
  Yu = '[object Symbol]',
  qu = '[object ArrayBuffer]',
  ku = '[object DataView]',
  rr = st ? st.prototype : void 0,
  Cn = rr ? rr.valueOf : void 0;
function Zu(e, t, n, o, r, i, a) {
  switch (n) {
    case ku:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case qu:
      return !(e.byteLength != t.byteLength || !i(new or(e), new or(t)));
    case Fu:
    case ju:
    case Ku:
      return Ni(+e, +t);
    case Wu:
      return e.name == t.name && e.message == t.message;
    case Uu:
    case Xu:
      return e == t + '';
    case Vu:
      var l = Nu;
    case Gu:
      var s = o & Hu;
      if ((l || (l = po), e.size != t.size && !s)) return !1;
      var u = a.get(e);
      if (u) return u == t;
      (o |= Lu), a.set(e, t);
      var d = Vi(l(e), l(t), o, r, i, a);
      return a.delete(e), d;
    case Yu:
      if (Cn) return Cn.call(e) == Cn.call(t);
  }
  return !1;
}
function Qu(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
  return e;
}
var Ju = Array.isArray;
const _t = Ju;
function ec(e, t, n) {
  var o = t(e);
  return _t(e) ? o : Qu(o, n(e));
}
function tc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (i[r++] = a);
  }
  return i;
}
function nc() {
  return [];
}
var oc = Object.prototype,
  rc = oc.propertyIsEnumerable,
  ir = Object.getOwnPropertySymbols,
  ic = ir
    ? function(e) {
        return e == null
          ? []
          : ((e = Object(e)),
            tc(ir(e), function(t) {
              return rc.call(e, t);
            }));
      }
    : nc;
const ac = ic;
function lc(e, t) {
  for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
  return o;
}
function ut(e) {
  return e != null && typeof e == 'object';
}
var sc = '[object Arguments]';
function ar(e) {
  return ut(e) && mt(e) == sc;
}
var Ki = Object.prototype,
  uc = Ki.hasOwnProperty,
  cc = Ki.propertyIsEnumerable,
  dc = ar(
    (function() {
      return arguments;
    })()
  )
    ? ar
    : function(e) {
        return ut(e) && uc.call(e, 'callee') && !cc.call(e, 'callee');
      };
const Ui = dc;
function fc() {
  return !1;
}
var Gi = typeof exports == 'object' && exports && !exports.nodeType && exports,
  lr = Gi && typeof module == 'object' && module && !module.nodeType && module,
  pc = lr && lr.exports === Gi,
  sr = pc ? _e.Buffer : void 0,
  mc = sr ? sr.isBuffer : void 0,
  vc = mc || fc;
const en = vc;
var gc = 9007199254740991,
  hc = /^(?:0|[1-9]\d*)$/;
function bc(e, t) {
  var n = typeof e;
  return (
    (t = t ?? gc),
    !!t &&
      (n == 'number' || (n != 'symbol' && hc.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var yc = 9007199254740991;
function Xi(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= yc;
}
var $c = '[object Arguments]',
  wc = '[object Array]',
  Sc = '[object Boolean]',
  Cc = '[object Date]',
  xc = '[object Error]',
  Oc = '[object Function]',
  Tc = '[object Map]',
  Ic = '[object Number]',
  Ec = '[object Object]',
  Pc = '[object RegExp]',
  _c = '[object Set]',
  Ac = '[object String]',
  Mc = '[object WeakMap]',
  Rc = '[object ArrayBuffer]',
  Dc = '[object DataView]',
  Bc = '[object Float32Array]',
  zc = '[object Float64Array]',
  Nc = '[object Int8Array]',
  Hc = '[object Int16Array]',
  Lc = '[object Int32Array]',
  Fc = '[object Uint8Array]',
  jc = '[object Uint8ClampedArray]',
  Wc = '[object Uint16Array]',
  Vc = '[object Uint32Array]',
  ne = {};
ne[Bc] = ne[zc] = ne[Nc] = ne[Hc] = ne[Lc] = ne[Fc] = ne[jc] = ne[Wc] = ne[
  Vc
] = !0;
ne[$c] = ne[wc] = ne[Rc] = ne[Sc] = ne[Dc] = ne[Cc] = ne[xc] = ne[Oc] = ne[
  Tc
] = ne[Ic] = ne[Ec] = ne[Pc] = ne[_c] = ne[Ac] = ne[Mc] = !1;
function Kc(e) {
  return ut(e) && Xi(e.length) && !!ne[mt(e)];
}
function Uc(e) {
  return function(t) {
    return e(t);
  };
}
var Yi = typeof exports == 'object' && exports && !exports.nodeType && exports,
  St = Yi && typeof module == 'object' && module && !module.nodeType && module,
  Gc = St && St.exports === Yi,
  xn = Gc && Hi.process,
  Xc = (function() {
    try {
      var e = St && St.require && St.require('util').types;
      return e || (xn && xn.binding && xn.binding('util'));
    } catch {}
  })();
const ur = Xc;
var cr = ur && ur.isTypedArray,
  Yc = cr ? Uc(cr) : Kc;
const mo = Yc;
var qc = Object.prototype,
  kc = qc.hasOwnProperty;
function Zc(e, t) {
  var n = _t(e),
    o = !n && Ui(e),
    r = !n && !o && en(e),
    i = !n && !o && !r && mo(e),
    a = n || o || r || i,
    l = a ? lc(e.length, String) : [],
    s = l.length;
  for (var u in e)
    (t || kc.call(e, u)) &&
      !(
        a &&
        (u == 'length' ||
          (r && (u == 'offset' || u == 'parent')) ||
          (i && (u == 'buffer' || u == 'byteLength' || u == 'byteOffset')) ||
          bc(u, s))
      ) &&
      l.push(u);
  return l;
}
var Qc = Object.prototype;
function qi(e) {
  var t = e && e.constructor,
    n = (typeof t == 'function' && t.prototype) || Qc;
  return e === n;
}
function Jc(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ed = Jc(Object.keys, Object);
const td = ed;
var nd = Object.prototype,
  od = nd.hasOwnProperty;
function ki(e) {
  if (!qi(e)) return td(e);
  var t = [];
  for (var n in Object(e)) od.call(e, n) && n != 'constructor' && t.push(n);
  return t;
}
function Zi(e) {
  return e != null && Xi(e.length) && !ji(e);
}
function rd(e) {
  return Zi(e) ? Zc(e) : ki(e);
}
function dr(e) {
  return ec(e, rd, ac);
}
var id = 1,
  ad = Object.prototype,
  ld = ad.hasOwnProperty;
function sd(e, t, n, o, r, i) {
  var a = n & id,
    l = dr(e),
    s = l.length,
    u = dr(t),
    d = u.length;
  if (s != d && !a) return !1;
  for (var c = s; c--; ) {
    var m = l[c];
    if (!(a ? m in t : ld.call(t, m))) return !1;
  }
  var p = i.get(e),
    v = i.get(t);
  if (p && v) return p == t && v == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var w = a; ++c < s; ) {
    m = l[c];
    var S = e[m],
      y = t[m];
    if (o) var T = a ? o(y, S, m, t, e, i) : o(S, y, m, e, t, i);
    if (!(T === void 0 ? S === y || r(S, y, n, o, i) : T)) {
      g = !1;
      break;
    }
    w || (w = m == 'constructor');
  }
  if (g && !w) {
    var H = e.constructor,
      P = t.constructor;
    H != P &&
      'constructor' in e &&
      'constructor' in t &&
      !(
        typeof H == 'function' &&
        H instanceof H &&
        typeof P == 'function' &&
        P instanceof P
      ) &&
      (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var ud = vt(_e, 'DataView');
const Vn = ud;
var cd = vt(_e, 'Promise');
const Kn = cd;
var dd = vt(_e, 'Set');
const ot = dd;
var fd = vt(_e, 'WeakMap');
const Un = fd;
var fr = '[object Map]',
  pd = '[object Object]',
  pr = '[object Promise]',
  mr = '[object Set]',
  vr = '[object WeakMap]',
  gr = '[object DataView]',
  md = qe(Vn),
  vd = qe(It),
  gd = qe(Kn),
  hd = qe(ot),
  bd = qe(Un),
  Ke = mt;
((Vn && Ke(new Vn(new ArrayBuffer(1))) != gr) ||
  (It && Ke(new It()) != fr) ||
  (Kn && Ke(Kn.resolve()) != pr) ||
  (ot && Ke(new ot()) != mr) ||
  (Un && Ke(new Un()) != vr)) &&
  (Ke = function(e) {
    var t = mt(e),
      n = t == pd ? e.constructor : void 0,
      o = n ? qe(n) : '';
    if (o)
      switch (o) {
        case md:
          return gr;
        case vd:
          return fr;
        case gd:
          return pr;
        case hd:
          return mr;
        case bd:
          return vr;
      }
    return t;
  });
const Gn = Ke;
var yd = 1,
  hr = '[object Arguments]',
  br = '[object Array]',
  Lt = '[object Object]',
  $d = Object.prototype,
  yr = $d.hasOwnProperty;
function wd(e, t, n, o, r, i) {
  var a = _t(e),
    l = _t(t),
    s = a ? br : Gn(e),
    u = l ? br : Gn(t);
  (s = s == hr ? Lt : s), (u = u == hr ? Lt : u);
  var d = s == Lt,
    c = u == Lt,
    m = s == u;
  if (m && en(e)) {
    if (!en(t)) return !1;
    (a = !0), (d = !1);
  }
  if (m && !d)
    return (
      i || (i = new ze()),
      a || mo(e) ? Vi(e, t, n, o, r, i) : Zu(e, t, s, n, o, r, i)
    );
  if (!(n & yd)) {
    var p = d && yr.call(e, '__wrapped__'),
      v = c && yr.call(t, '__wrapped__');
    if (p || v) {
      var g = p ? e.value() : e,
        w = v ? t.value() : t;
      return i || (i = new ze()), r(g, w, n, o, i);
    }
  }
  return m ? (i || (i = new ze()), sd(e, t, n, o, r, i)) : !1;
}
function Qi(e, t, n, o, r) {
  return e === t
    ? !0
    : e == null || t == null || (!ut(e) && !ut(t))
    ? e !== e && t !== t
    : wd(e, t, n, o, Qi, r);
}
function Sd(e, t) {
  return Qi(e, t);
}
const Cd = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function $r(e) {
  return typeof e != 'function' ? null : e();
}
function wr(e) {
  return typeof e != 'object' || !e ? null : e;
}
const xd = q({
    compatConfig: { MODE: 3 },
    name: 'Align',
    props: Cd,
    emits: ['align'],
    setup(e, t) {
      let { expose: n, slots: o } = t;
      const r = W({}),
        i = W(),
        [a, l] = Ss(
          () => {
            const { disabled: m, target: p, align: v, onAlign: g } = e;
            if (!m && p && i.value) {
              const w = i.value;
              let S;
              const y = $r(p),
                T = wr(p);
              (r.value.element = y), (r.value.point = T), (r.value.align = v);
              const { activeElement: H } = document;
              return (
                y && zi(y) ? (S = fo(w, y, v)) : T && (S = ys(w, T, v)),
                ws(H, w),
                g && S && g(w, S),
                !0
              );
            }
            return !1;
          },
          C(() => e.monitorBufferTime)
        ),
        s = W({ cancel: () => {} }),
        u = W({ cancel: () => {} }),
        d = () => {
          const m = e.target,
            p = $r(m),
            v = wr(m);
          i.value !== u.value.element &&
            (u.value.cancel(),
            (u.value.element = i.value),
            (u.value.cancel = er(i.value, a))),
            (r.value.element !== p ||
              !$s(r.value.point, v) ||
              !Sd(r.value.align, e.align)) &&
              (a(),
              s.value.element !== p &&
                (s.value.cancel(),
                (s.value.element = p),
                (s.value.cancel = er(p, a))));
        };
      Ee(() => {
        Te(() => {
          d();
        });
      }),
        sn(() => {
          Te(() => {
            d();
          });
        }),
        J(
          () => e.disabled,
          m => {
            m ? l() : a();
          },
          { immediate: !0, flush: 'post' }
        );
      const c = W(null);
      return (
        J(
          () => e.monitorWindowResize,
          m => {
            m
              ? c.value || (c.value = $t(window, 'resize', a))
              : c.value && (c.value.remove(), (c.value = null));
          },
          { flush: 'post' }
        ),
        no(() => {
          s.value.cancel(), u.value.cancel(), c.value && c.value.remove(), l();
        }),
        n({ forceAlign: () => a(!0) }),
        () => {
          const m = o == null ? void 0 : o.default();
          return m ? $e(m[0], { ref: i }, !0, !0) : null;
        }
      );
    }
  }),
  Od = q({
    compatConfig: { MODE: 3 },
    name: 'PopupInner',
    inheritAttrs: !1,
    props: ao,
    emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
    setup(e, t) {
      let { expose: n, attrs: o, slots: r } = t;
      const i = z(),
        a = z(),
        l = z(),
        [s, u] = Gl(zn(e, 'stretch')),
        d = () => {
          e.stretch && u(e.getRootDomNode());
        },
        c = z(!1);
      let m;
      J(
        () => e.visible,
        O => {
          clearTimeout(m),
            O
              ? (m = setTimeout(() => {
                  c.value = e.visible;
                }))
              : (c.value = !1);
        },
        { immediate: !0 }
      );
      const [p, v] = Ul(c, d),
        g = z(),
        w = () => (e.point ? e.point : e.getRootDomNode),
        S = () => {
          var O;
          (O = i.value) === null || O === void 0 || O.forceAlign();
        },
        y = (O, h) => {
          var A;
          const L = e.getClassNameFromAlign(h),
            x = l.value;
          l.value !== L && (l.value = L),
            p.value === 'align' &&
              (x !== L
                ? Promise.resolve().then(() => {
                    S();
                  })
                : v(() => {
                    var R;
                    (R = g.value) === null || R === void 0 || R.call(g);
                  }),
              (A = e.onAlign) === null || A === void 0 || A.call(e, O, h));
        },
        T = C(() => {
          const O = typeof e.animation == 'object' ? e.animation : si(e);
          return (
            ['onAfterEnter', 'onAfterLeave'].forEach(h => {
              const A = O[h];
              O[h] = L => {
                v(), (p.value = 'stable'), A == null || A(L);
              };
            }),
            O
          );
        }),
        H = () =>
          new Promise(O => {
            g.value = O;
          });
      J(
        [T, p],
        () => {
          !T.value && p.value === 'motion' && v();
        },
        { immediate: !0 }
      ),
        n({ forceAlign: S, getElement: () => a.value.$el || a.value });
      const P = C(() => {
        var O;
        return !(
          !((O = e.align) === null || O === void 0) &&
          O.points &&
          (p.value === 'align' || p.value === 'stable')
        );
      });
      return () => {
        var O;
        const {
            zIndex: h,
            align: A,
            prefixCls: L,
            destroyPopupOnHide: x,
            onMouseenter: R,
            onMouseleave: U,
            onTouchstart: G = () => {},
            onMousedown: Q
          } = e,
          $ = p.value,
          B = [
            f(f({}, s.value), {
              zIndex: h,
              opacity: $ === 'motion' || $ === 'stable' || !c.value ? null : 0,
              pointerEvents: !c.value && $ !== 'stable' ? 'none' : null
            }),
            o.style
          ];
        let V = Ye(
          (O = r.default) === null || O === void 0
            ? void 0
            : O.call(r, { visible: e.visible })
        );
        V.length > 1 && (V = b('div', { class: `${L}-content` }, [V]));
        const X = oe(L, o.class, l.value, !e.arrow && `${L}-arrow-hidden`),
          N = c.value || !e.visible ? ci(T.value.name, T.value) : {};
        return b(pt, M(M({ ref: a }, N), {}, { onBeforeEnter: H }), {
          default: () =>
            !x || e.visible
              ? oo(
                  b(
                    xd,
                    {
                      target: w(),
                      key: 'popup',
                      ref: i,
                      monitorWindowResize: !0,
                      disabled: P.value,
                      align: A,
                      onAlign: y
                    },
                    {
                      default: () =>
                        b(
                          'div',
                          {
                            class: X,
                            onMouseenter: R,
                            onMouseleave: U,
                            onMousedown: Do(Q, ['capture']),
                            [tt ? 'onTouchstartPassive' : 'onTouchstart']: Do(
                              G,
                              ['capture']
                            ),
                            style: B
                          },
                          [V]
                        )
                    }
                  ),
                  [[pi, c.value]]
                )
              : null
        });
      };
    }
  }),
  Td = q({
    compatConfig: { MODE: 3 },
    name: 'Popup',
    inheritAttrs: !1,
    props: Wl,
    setup(e, t) {
      let { attrs: n, slots: o, expose: r } = t;
      const i = z(!1),
        a = z(!1),
        l = z(),
        s = z();
      return (
        J(
          [() => e.visible, () => e.mobile],
          () => {
            (i.value = e.visible), e.visible && e.mobile && (a.value = !0);
          },
          { immediate: !0, flush: 'post' }
        ),
        r({
          forceAlign: () => {
            var u;
            (u = l.value) === null || u === void 0 || u.forceAlign();
          },
          getElement: () => {
            var u;
            return (u = l.value) === null || u === void 0
              ? void 0
              : u.getElement();
          }
        }),
        () => {
          const u = f(f(f({}, e), n), { visible: i.value }),
            d = a.value
              ? b(Vl, M(M({}, u), {}, { mobile: e.mobile, ref: l }), {
                  default: o.default
                })
              : b(Od, M(M({}, u), {}, { ref: l }), { default: o.default });
          return b('div', { ref: s }, [b(Ti, u, null), d]);
        }
      );
    }
  });
function Id(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Sr(e, t, n) {
  const o = e[t] || {};
  return f(f({}, o), n);
}
function Ed(e, t, n, o) {
  const { points: r } = n,
    i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (Id(e[l].points, r, o)) return `${t}-placement-${l}`;
  }
  return '';
}
const Pd = {
  methods: {
    setState() {
      let e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = typeof e == 'function' ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const o = this.getDerivedStateFromProps(
          Ha(this),
          f(f({}, this.$data), n)
        );
        if (o === null) return;
        n = f(f({}, n), o || {});
      }
      f(this.$data, n),
        this._.isMounted && this.$forceUpdate(),
        Te(() => {
          t && t();
        });
    },
    __emit() {
      const e = [].slice.call(arguments, 0);
      let t = e[0];
      t = `on${t[0].toUpperCase()}${t.substring(1)}`;
      const n = this.$props[t] || this.$attrs[t];
      if (e.length && n)
        if (Array.isArray(n))
          for (let o = 0, r = n.length; o < r; o++) n[o](...e.slice(1));
        else n(...e.slice(1));
    }
  }
};
let On;
function Ji(e) {
  if (typeof document > 'u') return 0;
  if (e || On === void 0) {
    const t = document.createElement('div');
    (t.style.width = '100%'), (t.style.height = '200px');
    const n = document.createElement('div'),
      o = n.style;
    (o.position = 'absolute'),
      (o.top = '0'),
      (o.left = '0'),
      (o.pointerEvents = 'none'),
      (o.visibility = 'hidden'),
      (o.width = '200px'),
      (o.height = '150px'),
      (o.overflow = 'hidden'),
      n.appendChild(t),
      document.body.appendChild(n);
    const r = t.offsetWidth;
    n.style.overflow = 'scroll';
    let i = t.offsetWidth;
    r === i && (i = n.clientWidth), document.body.removeChild(n), (On = r - i);
  }
  return On;
}
function Cr(e) {
  const t = e.match(/^(.*)px$/),
    n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? Ji() : n;
}
function $v(e) {
  if (typeof document > 'u' || !e || !(e instanceof Element))
    return { width: 0, height: 0 };
  const { width: t, height: n } = getComputedStyle(e, '::-webkit-scrollbar');
  return { width: Cr(t), height: Cr(n) };
}
const _d = `vc-util-locker-${Date.now()}`;
let xr = 0;
function Ad() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
function Md(e) {
  const t = C(() => !!e && !!e.value);
  xr += 1;
  const n = `${_d}_${xr}`;
  Oe(
    o => {
      if (rt()) {
        if (t.value) {
          const r = Ji(),
            i = Ad();
          La(
            `
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${r}px);` : ''}
}`,
            n
          );
        } else _o(n);
        o(() => {
          _o(n);
        });
      }
    },
    { flush: 'post' }
  );
}
let We = 0;
const Kt = rt(),
  Or = e => {
    if (!Kt) return null;
    if (e) {
      if (typeof e == 'string') return document.querySelectorAll(e)[0];
      if (typeof e == 'function') return e();
      if (typeof e == 'object' && e instanceof window.HTMLElement) return e;
    }
    return document.body;
  },
  Rd = q({
    compatConfig: { MODE: 3 },
    name: 'PortalWrapper',
    inheritAttrs: !1,
    props: {
      wrapperClassName: String,
      forceRender: { type: Boolean, default: void 0 },
      getContainer: I.any,
      visible: { type: Boolean, default: void 0 },
      autoLock: Xt(),
      didUpdate: Function
    },
    setup(e, t) {
      let { slots: n } = t;
      const o = z(),
        r = z(),
        i = z(),
        a = z(1),
        l = rt() && document.createElement('div'),
        s = () => {
          var p, v;
          o.value === l &&
            ((v =
              (p = o.value) === null || p === void 0
                ? void 0
                : p.parentNode) === null ||
              v === void 0 ||
              v.removeChild(o.value)),
            (o.value = null);
        };
      let u = null;
      const d = function() {
          return (arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : !1) ||
            (o.value && !o.value.parentNode)
            ? ((u = Or(e.getContainer)), u ? (u.appendChild(o.value), !0) : !1)
            : !0;
        },
        c = () =>
          Kt ? (o.value || ((o.value = l), d(!0)), m(), o.value) : null,
        m = () => {
          const { wrapperClassName: p } = e;
          o.value && p && p !== o.value.className && (o.value.className = p);
        };
      return (
        sn(() => {
          m(), d();
        }),
        Md(
          C(
            () =>
              e.autoLock &&
              e.visible &&
              rt() &&
              (o.value === document.body || o.value === l)
          )
        ),
        Ee(() => {
          let p = !1;
          J(
            [() => e.visible, () => e.getContainer],
            (v, g) => {
              let [w, S] = v,
                [y, T] = g;
              Kt &&
                ((u = Or(e.getContainer)),
                u === document.body && (w && !y ? (We += 1) : p && (We -= 1))),
                p &&
                  (typeof S == 'function' && typeof T == 'function'
                    ? S.toString() !== T.toString()
                    : S !== T) &&
                  s(),
                (p = !0);
            },
            { immediate: !0, flush: 'post' }
          ),
            Te(() => {
              d() ||
                (i.value = le(() => {
                  a.value += 1;
                }));
            });
        }),
        me(() => {
          const { visible: p } = e;
          Kt && u === document.body && (We = p && We ? We - 1 : We),
            s(),
            le.cancel(i.value);
        }),
        () => {
          const { forceRender: p, visible: v } = e;
          let g = null;
          const w = { getOpenCount: () => We, getContainer: c };
          return (
            a.value &&
              (p || v || r.value) &&
              (g = b(
                Fa,
                { getContainer: c, ref: r, didUpdate: e.didUpdate },
                {
                  default: () => {
                    var S;
                    return (S = n.default) === null || S === void 0
                      ? void 0
                      : S.call(n, w);
                  }
                }
              )),
            g
          );
        }
      );
    }
  }),
  Dd = [
    'onClick',
    'onMousedown',
    'onTouchstart',
    'onMouseenter',
    'onMouseleave',
    'onFocus',
    'onBlur',
    'onContextmenu'
  ],
  vo = q({
    compatConfig: { MODE: 3 },
    name: 'Trigger',
    mixins: [Pd],
    inheritAttrs: !1,
    props: Fl(),
    setup(e) {
      const t = C(() => {
          const { popupPlacement: r, popupAlign: i, builtinPlacements: a } = e;
          return r && a ? Sr(a, r, i) : i;
        }),
        n = z(null),
        o = r => {
          n.value = r;
        };
      return {
        vcTriggerContext: ye('vcTriggerContext', {}),
        popupRef: n,
        setPopupRef: o,
        triggerRef: z(null),
        align: t,
        focusTime: null,
        clickOutsideHandler: null,
        contextmenuOutsideHandler1: null,
        contextmenuOutsideHandler2: null,
        touchOutsideHandler: null,
        attachId: null,
        delayTimer: null,
        hasPopupMouseDown: !1,
        preClickTime: null,
        preTouchTime: null,
        mouseDownTimeout: null,
        childOriginEvents: {}
      };
    },
    data() {
      const e = this.$props;
      let t;
      return (
        this.popupVisible !== void 0
          ? (t = !!e.popupVisible)
          : (t = !!e.defaultPopupVisible),
        Dd.forEach(n => {
          this[`fire${n}`] = o => {
            this.fireEvents(n, o);
          };
        }),
        { prevPopupVisible: t, sPopupVisible: t, point: null }
      );
    },
    watch: {
      popupVisible(e) {
        e !== void 0 &&
          ((this.prevPopupVisible = this.sPopupVisible),
          (this.sPopupVisible = e));
      }
    },
    created() {
      Ce('vcTriggerContext', {
        onPopupMouseDown: this.onPopupMouseDown,
        onPopupMouseenter: this.onPopupMouseenter,
        onPopupMouseleave: this.onPopupMouseleave
      }),
        ja(this);
    },
    deactivated() {
      this.setPopupVisible(!1);
    },
    mounted() {
      this.$nextTick(() => {
        this.updatedCal();
      });
    },
    updated() {
      this.$nextTick(() => {
        this.updatedCal();
      });
    },
    beforeUnmount() {
      this.clearDelayTimer(),
        this.clearOutsideHandler(),
        clearTimeout(this.mouseDownTimeout),
        le.cancel(this.attachId);
    },
    methods: {
      updatedCal() {
        const e = this.$props;
        if (this.$data.sPopupVisible) {
          let n;
          !this.clickOutsideHandler &&
            (this.isClickToHide() || this.isContextmenuToShow()) &&
            ((n = e.getDocument(this.getRootDomNode())),
            (this.clickOutsideHandler = $t(
              n,
              'mousedown',
              this.onDocumentClick
            ))),
            this.touchOutsideHandler ||
              ((n = n || e.getDocument(this.getRootDomNode())),
              (this.touchOutsideHandler = $t(
                n,
                'touchstart',
                this.onDocumentClick,
                tt ? { passive: !1 } : !1
              ))),
            !this.contextmenuOutsideHandler1 &&
              this.isContextmenuToShow() &&
              ((n = n || e.getDocument(this.getRootDomNode())),
              (this.contextmenuOutsideHandler1 = $t(
                n,
                'scroll',
                this.onContextmenuClose
              ))),
            !this.contextmenuOutsideHandler2 &&
              this.isContextmenuToShow() &&
              (this.contextmenuOutsideHandler2 = $t(
                window,
                'blur',
                this.onContextmenuClose
              ));
        } else this.clearOutsideHandler();
      },
      onMouseenter(e) {
        const { mouseEnterDelay: t } = this.$props;
        this.fireEvents('onMouseenter', e),
          this.delaySetPopupVisible(!0, t, t ? null : e);
      },
      onMouseMove(e) {
        this.fireEvents('onMousemove', e), this.setPoint(e);
      },
      onMouseleave(e) {
        this.fireEvents('onMouseleave', e),
          this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      },
      onPopupMouseenter() {
        const { vcTriggerContext: e = {} } = this;
        e.onPopupMouseenter && e.onPopupMouseenter(), this.clearDelayTimer();
      },
      onPopupMouseleave(e) {
        var t;
        if (
          e &&
          e.relatedTarget &&
          !e.relatedTarget.setTimeout &&
          et(
            (t = this.popupRef) === null || t === void 0
              ? void 0
              : t.getElement(),
            e.relatedTarget
          )
        )
          return;
        this.isMouseLeaveToHide() &&
          this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
        const { vcTriggerContext: n = {} } = this;
        n.onPopupMouseleave && n.onPopupMouseleave(e);
      },
      onFocus(e) {
        this.fireEvents('onFocus', e),
          this.clearDelayTimer(),
          this.isFocusToShow() &&
            ((this.focusTime = Date.now()),
            this.delaySetPopupVisible(!0, this.$props.focusDelay));
      },
      onMousedown(e) {
        this.fireEvents('onMousedown', e), (this.preClickTime = Date.now());
      },
      onTouchstart(e) {
        this.fireEvents('onTouchstart', e), (this.preTouchTime = Date.now());
      },
      onBlur(e) {
        et(e.target, e.relatedTarget || document.activeElement) ||
          (this.fireEvents('onBlur', e),
          this.clearDelayTimer(),
          this.isBlurToHide() &&
            this.delaySetPopupVisible(!1, this.$props.blurDelay));
      },
      onContextmenu(e) {
        e.preventDefault(),
          this.fireEvents('onContextmenu', e),
          this.setPopupVisible(!0, e);
      },
      onContextmenuClose() {
        this.isContextmenuToShow() && this.close();
      },
      onClick(e) {
        if ((this.fireEvents('onClick', e), this.focusTime)) {
          let n;
          if (
            (this.preClickTime && this.preTouchTime
              ? (n = Math.min(this.preClickTime, this.preTouchTime))
              : this.preClickTime
              ? (n = this.preClickTime)
              : this.preTouchTime && (n = this.preTouchTime),
            Math.abs(n - this.focusTime) < 20)
          )
            return;
          this.focusTime = 0;
        }
        (this.preClickTime = 0),
          (this.preTouchTime = 0),
          this.isClickToShow() &&
            (this.isClickToHide() || this.isBlurToHide()) &&
            e &&
            e.preventDefault &&
            e.preventDefault(),
          e && e.domEvent && e.domEvent.preventDefault();
        const t = !this.$data.sPopupVisible;
        ((this.isClickToHide() && !t) || (t && this.isClickToShow())) &&
          this.setPopupVisible(!this.$data.sPopupVisible, e);
      },
      onPopupMouseDown() {
        const { vcTriggerContext: e = {} } = this;
        (this.hasPopupMouseDown = !0),
          clearTimeout(this.mouseDownTimeout),
          (this.mouseDownTimeout = setTimeout(() => {
            this.hasPopupMouseDown = !1;
          }, 0)),
          e.onPopupMouseDown && e.onPopupMouseDown(...arguments);
      },
      onDocumentClick(e) {
        if (this.$props.mask && !this.$props.maskClosable) return;
        const t = e.target,
          n = this.getRootDomNode(),
          o = this.getPopupDomNode();
        (!et(n, t) || this.isContextMenuOnly()) &&
          !et(o, t) &&
          !this.hasPopupMouseDown &&
          this.delaySetPopupVisible(!1, 0.1);
      },
      getPopupDomNode() {
        var e;
        return (
          ((e = this.popupRef) === null || e === void 0
            ? void 0
            : e.getElement()) || null
        );
      },
      getRootDomNode() {
        var e, t, n, o;
        const { getTriggerDOMNode: r } = this.$props;
        if (r) {
          const i =
            ((t =
              (e = this.triggerRef) === null || e === void 0
                ? void 0
                : e.$el) === null || t === void 0
              ? void 0
              : t.nodeName) === '#comment'
              ? null
              : Re(this.triggerRef);
          return Re(r(i));
        }
        try {
          const i =
            ((o =
              (n = this.triggerRef) === null || n === void 0
                ? void 0
                : n.$el) === null || o === void 0
              ? void 0
              : o.nodeName) === '#comment'
              ? null
              : Re(this.triggerRef);
          if (i) return i;
        } catch {}
        return Re(this);
      },
      handleGetPopupClassFromAlign(e) {
        const t = [],
          n = this.$props,
          {
            popupPlacement: o,
            builtinPlacements: r,
            prefixCls: i,
            alignPoint: a,
            getPopupClassNameFromAlign: l
          } = n;
        return o && r && t.push(Ed(r, i, e, a)), l && t.push(l(e)), t.join(' ');
      },
      getPopupAlign() {
        const e = this.$props,
          { popupPlacement: t, popupAlign: n, builtinPlacements: o } = e;
        return t && o ? Sr(o, t, n) : n;
      },
      getComponent() {
        const e = {};
        this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter),
          this.isMouseLeaveToHide() &&
            (e.onMouseleave = this.onPopupMouseleave),
          (e.onMousedown = this.onPopupMouseDown),
          (e[
            tt ? 'onTouchstartPassive' : 'onTouchstart'
          ] = this.onPopupMouseDown);
        const {
            handleGetPopupClassFromAlign: t,
            getRootDomNode: n,
            $attrs: o
          } = this,
          {
            prefixCls: r,
            destroyPopupOnHide: i,
            popupClassName: a,
            popupAnimation: l,
            popupTransitionName: s,
            popupStyle: u,
            mask: d,
            maskAnimation: c,
            maskTransitionName: m,
            zIndex: p,
            stretch: v,
            alignPoint: g,
            mobile: w,
            arrow: S,
            forceRender: y
          } = this.$props,
          { sPopupVisible: T, point: H } = this.$data,
          P = f(
            f(
              {
                prefixCls: r,
                arrow: S,
                destroyPopupOnHide: i,
                visible: T,
                point: g ? H : null,
                align: this.align,
                animation: l,
                getClassNameFromAlign: t,
                stretch: v,
                getRootDomNode: n,
                mask: d,
                zIndex: p,
                transitionName: s,
                maskAnimation: c,
                maskTransitionName: m,
                class: a,
                style: u,
                onAlign: o.onPopupAlign || Oi
              },
              e
            ),
            { ref: this.setPopupRef, mobile: w, forceRender: y }
          );
        return b(Td, P, {
          default: this.$slots.popup || (() => Wa(this, 'popup'))
        });
      },
      attachParent(e) {
        le.cancel(this.attachId);
        const { getPopupContainer: t, getDocument: n } = this.$props,
          o = this.getRootDomNode();
        let r;
        t
          ? (o || t.length === 0) && (r = t(o))
          : (r = n(this.getRootDomNode()).body),
          r
            ? r.appendChild(e)
            : (this.attachId = le(() => {
                this.attachParent(e);
              }));
      },
      getContainer() {
        const { $props: e } = this,
          { getDocument: t } = e,
          n = t(this.getRootDomNode()).createElement('div');
        return (
          (n.style.position = 'absolute'),
          (n.style.top = '0'),
          (n.style.left = '0'),
          (n.style.width = '100%'),
          this.attachParent(n),
          n
        );
      },
      setPopupVisible(e, t) {
        const {
          alignPoint: n,
          sPopupVisible: o,
          onPopupVisibleChange: r
        } = this;
        this.clearDelayTimer(),
          o !== e &&
            (Va(this, 'popupVisible') ||
              this.setState({ sPopupVisible: e, prevPopupVisible: o }),
            r && r(e)),
          n && t && e && this.setPoint(t);
      },
      setPoint(e) {
        const { alignPoint: t } = this.$props;
        !t ||
          !e ||
          this.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
      },
      handlePortalUpdate() {
        this.prevPopupVisible !== this.sPopupVisible &&
          this.afterPopupVisibleChange(this.sPopupVisible);
      },
      delaySetPopupVisible(e, t, n) {
        const o = t * 1e3;
        if ((this.clearDelayTimer(), o)) {
          const r = n ? { pageX: n.pageX, pageY: n.pageY } : null;
          this.delayTimer = setTimeout(() => {
            this.setPopupVisible(e, r), this.clearDelayTimer();
          }, o);
        } else this.setPopupVisible(e, n);
      },
      clearDelayTimer() {
        this.delayTimer &&
          (clearTimeout(this.delayTimer), (this.delayTimer = null));
      },
      clearOutsideHandler() {
        this.clickOutsideHandler &&
          (this.clickOutsideHandler.remove(),
          (this.clickOutsideHandler = null)),
          this.contextmenuOutsideHandler1 &&
            (this.contextmenuOutsideHandler1.remove(),
            (this.contextmenuOutsideHandler1 = null)),
          this.contextmenuOutsideHandler2 &&
            (this.contextmenuOutsideHandler2.remove(),
            (this.contextmenuOutsideHandler2 = null)),
          this.touchOutsideHandler &&
            (this.touchOutsideHandler.remove(),
            (this.touchOutsideHandler = null));
      },
      createTwoChains(e) {
        let t = () => {};
        const n = Ao(this);
        return this.childOriginEvents[e] && n[e]
          ? this[`fire${e}`]
          : ((t = this.childOriginEvents[e] || n[e] || t), t);
      },
      isClickToShow() {
        const { action: e, showAction: t } = this.$props;
        return e.indexOf('click') !== -1 || t.indexOf('click') !== -1;
      },
      isContextMenuOnly() {
        const { action: e } = this.$props;
        return (
          e === 'contextmenu' || (e.length === 1 && e[0] === 'contextmenu')
        );
      },
      isContextmenuToShow() {
        const { action: e, showAction: t } = this.$props;
        return (
          e.indexOf('contextmenu') !== -1 || t.indexOf('contextmenu') !== -1
        );
      },
      isClickToHide() {
        const { action: e, hideAction: t } = this.$props;
        return e.indexOf('click') !== -1 || t.indexOf('click') !== -1;
      },
      isMouseEnterToShow() {
        const { action: e, showAction: t } = this.$props;
        return e.indexOf('hover') !== -1 || t.indexOf('mouseenter') !== -1;
      },
      isMouseLeaveToHide() {
        const { action: e, hideAction: t } = this.$props;
        return e.indexOf('hover') !== -1 || t.indexOf('mouseleave') !== -1;
      },
      isFocusToShow() {
        const { action: e, showAction: t } = this.$props;
        return e.indexOf('focus') !== -1 || t.indexOf('focus') !== -1;
      },
      isBlurToHide() {
        const { action: e, hideAction: t } = this.$props;
        return e.indexOf('focus') !== -1 || t.indexOf('blur') !== -1;
      },
      forcePopupAlign() {
        var e;
        this.$data.sPopupVisible &&
          ((e = this.popupRef) === null || e === void 0 || e.forceAlign());
      },
      fireEvents(e, t) {
        this.childOriginEvents[e] && this.childOriginEvents[e](t);
        const n = this.$props[e] || this.$attrs[e];
        n && n(t);
      },
      close() {
        this.setPopupVisible(!1);
      }
    },
    render() {
      const { $attrs: e } = this,
        t = dt(Ka(this)),
        { alignPoint: n, getPopupContainer: o } = this.$props,
        r = t[0];
      this.childOriginEvents = Ao(r);
      const i = { key: 'trigger' };
      this.isContextmenuToShow()
        ? (i.onContextmenu = this.onContextmenu)
        : (i.onContextmenu = this.createTwoChains('onContextmenu')),
        this.isClickToHide() || this.isClickToShow()
          ? ((i.onClick = this.onClick),
            (i.onMousedown = this.onMousedown),
            (i[
              tt ? 'onTouchstartPassive' : 'onTouchstart'
            ] = this.onTouchstart))
          : ((i.onClick = this.createTwoChains('onClick')),
            (i.onMousedown = this.createTwoChains('onMousedown')),
            (i[
              tt ? 'onTouchstartPassive' : 'onTouchstart'
            ] = this.createTwoChains('onTouchstart'))),
        this.isMouseEnterToShow()
          ? ((i.onMouseenter = this.onMouseenter),
            n && (i.onMousemove = this.onMouseMove))
          : (i.onMouseenter = this.createTwoChains('onMouseenter')),
        this.isMouseLeaveToHide()
          ? (i.onMouseleave = this.onMouseleave)
          : (i.onMouseleave = this.createTwoChains('onMouseleave')),
        this.isFocusToShow() || this.isBlurToHide()
          ? ((i.onFocus = this.onFocus), (i.onBlur = this.onBlur))
          : ((i.onFocus = this.createTwoChains('onFocus')),
            (i.onBlur = u => {
              u &&
                (!u.relatedTarget || !et(u.target, u.relatedTarget)) &&
                this.createTwoChains('onBlur')(u);
            }));
      const a = oe(r && r.props && r.props.class, e.class);
      a && (i.class = a);
      const l = $e(r, f(f({}, i), { ref: 'triggerRef' }), !0, !0),
        s = b(
          Rd,
          {
            key: 'portal',
            getContainer: o && (() => o(this.getRootDomNode())),
            didUpdate: this.handlePortalUpdate,
            visible: this.$data.sPopupVisible
          },
          { default: this.getComponent }
        );
      return b(Ge, null, [l, s]);
    }
  }),
  F = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function(t) {
      const { keyCode: n } = t;
      if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= F.F1 && n <= F.F12))
        return !1;
      switch (n) {
        case F.ALT:
        case F.CAPS_LOCK:
        case F.CONTEXT_MENU:
        case F.CTRL:
        case F.DOWN:
        case F.END:
        case F.ESC:
        case F.HOME:
        case F.INSERT:
        case F.LEFT:
        case F.MAC_FF_META:
        case F.META:
        case F.NUMLOCK:
        case F.NUM_CENTER:
        case F.PAGE_DOWN:
        case F.PAGE_UP:
        case F.PAUSE:
        case F.PRINT_SCREEN:
        case F.RIGHT:
        case F.SHIFT:
        case F.UP:
        case F.WIN_KEY:
        case F.WIN_KEY_RIGHT:
          return !1;
        default:
          return !0;
      }
    },
    isCharacterKey: function(t) {
      if (
        (t >= F.ZERO && t <= F.NINE) ||
        (t >= F.NUM_ZERO && t <= F.NUM_MULTIPLY) ||
        (t >= F.A && t <= F.Z) ||
        (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
      )
        return !0;
      switch (t) {
        case F.SPACE:
        case F.QUESTION_MARK:
        case F.NUM_PLUS:
        case F.NUM_MINUS:
        case F.NUM_PERIOD:
        case F.NUM_DIVISION:
        case F.SEMICOLON:
        case F.DASH:
        case F.EQUALS:
        case F.COMMA:
        case F.PERIOD:
        case F.SLASH:
        case F.APOSTROPHE:
        case F.SINGLE_QUOTE:
        case F.OPEN_SQUARE_BRACKET:
        case F.BACKSLASH:
        case F.CLOSE_SQUARE_BRACKET:
          return !0;
        default:
          return !1;
      }
    }
  },
  Bd = F;
var zd =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  };
const Nd = q({
    compatConfig: { MODE: 3 },
    props: {
      disabled: I.looseBool,
      type: I.string,
      value: I.any,
      tag: { type: String, default: 'input' },
      size: I.string,
      onChange: Function,
      onInput: Function,
      onBlur: Function,
      onFocus: Function,
      onKeydown: Function,
      onCompositionstart: Function,
      onCompositionend: Function,
      onKeyup: Function,
      onPaste: Function,
      onMousedown: Function
    },
    emits: [
      'change',
      'input',
      'blur',
      'keydown',
      'focus',
      'compositionstart',
      'compositionend',
      'keyup',
      'paste',
      'mousedown'
    ],
    setup(e, t) {
      let { expose: n } = t;
      const o = z(null);
      return (
        n({
          focus: () => {
            o.value && o.value.focus();
          },
          blur: () => {
            o.value && o.value.blur();
          },
          input: o,
          setSelectionRange: (s, u, d) => {
            var c;
            (c = o.value) === null ||
              c === void 0 ||
              c.setSelectionRange(s, u, d);
          },
          select: () => {
            var s;
            (s = o.value) === null || s === void 0 || s.select();
          },
          getSelectionStart: () => {
            var s;
            return (s = o.value) === null || s === void 0
              ? void 0
              : s.selectionStart;
          },
          getSelectionEnd: () => {
            var s;
            return (s = o.value) === null || s === void 0
              ? void 0
              : s.selectionEnd;
          },
          getScrollTop: () => {
            var s;
            return (s = o.value) === null || s === void 0
              ? void 0
              : s.scrollTop;
          }
        }),
        () => {
          const { tag: s, value: u } = e,
            d = zd(e, ['tag', 'value']);
          return b(s, M(M({}, d), {}, { ref: o, value: u }), null);
        }
      );
    }
  }),
  Hd = Nd;
function wv() {
  const e = document.documentElement.clientWidth,
    t = window.innerHeight || document.documentElement.clientHeight;
  return { width: e, height: t };
}
function Sv(e) {
  const t = e.getBoundingClientRect(),
    n = document.documentElement;
  return {
    left:
      t.left +
      (window.scrollX || n.scrollLeft) -
      (n.clientLeft || document.body.clientLeft || 0),
    top:
      t.top +
      (window.scrollY || n.scrollTop) -
      (n.clientTop || document.body.clientTop || 0)
  };
}
function Cv(e) {
  return Array.prototype.slice
    .apply(e)
    .map(n => `${n}: ${e.getPropertyValue(n)};`)
    .join('');
}
function Ld(e) {
  return Object.keys(e).reduce((t, n) => {
    const o = e[n];
    return typeof o > 'u' || o === null || (t += `${n}: ${e[n]};`), t;
  }, '');
}
var Fd =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  };
const jd = q({
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: {
      disabled: I.looseBool,
      type: I.string,
      value: I.any,
      lazy: I.bool.def(!0),
      tag: { type: String, default: 'input' },
      size: I.string,
      style: I.oneOfType([String, Object]),
      class: I.string
    },
    emits: [
      'change',
      'input',
      'blur',
      'keydown',
      'focus',
      'compositionstart',
      'compositionend',
      'keyup',
      'paste',
      'mousedown'
    ],
    setup(e, t) {
      let { emit: n, attrs: o, expose: r } = t;
      const i = z(null),
        a = W(),
        l = W(!1);
      J(
        [() => e.value, l],
        () => {
          l.value || (a.value = e.value);
        },
        { immediate: !0 }
      );
      const s = h => {
          n('change', h);
        },
        u = h => {
          (l.value = !0), (h.target.composing = !0), n('compositionstart', h);
        },
        d = h => {
          (l.value = !1), (h.target.composing = !1), n('compositionend', h);
          const A = document.createEvent('HTMLEvents');
          A.initEvent('input', !0, !0), h.target.dispatchEvent(A), s(h);
        },
        c = h => {
          if (l.value && e.lazy) {
            a.value = h.target.value;
            return;
          }
          n('input', h);
        },
        m = h => {
          n('blur', h);
        },
        p = h => {
          n('focus', h);
        },
        v = () => {
          i.value && i.value.focus();
        },
        g = () => {
          i.value && i.value.blur();
        },
        w = h => {
          n('keydown', h);
        },
        S = h => {
          n('keyup', h);
        },
        y = (h, A, L) => {
          var x;
          (x = i.value) === null ||
            x === void 0 ||
            x.setSelectionRange(h, A, L);
        },
        T = () => {
          var h;
          (h = i.value) === null || h === void 0 || h.select();
        };
      r({
        focus: v,
        blur: g,
        input: C(() => {
          var h;
          return (h = i.value) === null || h === void 0 ? void 0 : h.input;
        }),
        setSelectionRange: y,
        select: T,
        getSelectionStart: () => {
          var h;
          return (h = i.value) === null || h === void 0
            ? void 0
            : h.getSelectionStart();
        },
        getSelectionEnd: () => {
          var h;
          return (h = i.value) === null || h === void 0
            ? void 0
            : h.getSelectionEnd();
        },
        getScrollTop: () => {
          var h;
          return (h = i.value) === null || h === void 0
            ? void 0
            : h.getScrollTop();
        }
      });
      const H = h => {
          n('mousedown', h);
        },
        P = h => {
          n('paste', h);
        },
        O = C(() =>
          e.style && typeof e.style != 'string' ? Ld(e.style) : e.style
        );
      return () => {
        const h = Fd(e, ['style', 'lazy']);
        return b(
          Hd,
          M(
            M(M({}, h), o),
            {},
            {
              style: O.value,
              onInput: c,
              onChange: s,
              onBlur: m,
              onFocus: p,
              ref: i,
              value: a.value,
              onCompositionstart: u,
              onCompositionend: d,
              onKeyup: S,
              onKeydown: w,
              onPaste: P,
              onMousedown: H
            }
          ),
          null
        );
      };
    }
  }),
  Wd = jd,
  Vd = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,
  Kd = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,
  Tr = `${Vd} ${Kd}`.split(/[\s\n]+/),
  Ud = 'aria-',
  Gd = 'data-';
function Ir(e, t) {
  return e.indexOf(t) === 0;
}
function xv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n;
  t === !1
    ? (n = { aria: !0, data: !0, attr: !0 })
    : t === !0
    ? (n = { aria: !0 })
    : (n = f({}, t));
  const o = {};
  return (
    Object.keys(e).forEach(r => {
      ((n.aria && (r === 'role' || Ir(r, Ud))) ||
        (n.data && Ir(r, Gd)) ||
        (n.attr && (Tr.includes(r) || Tr.includes(r.toLowerCase())))) &&
        (o[r] = e[r]);
    }),
    o
  );
}
const ea = Symbol('OverflowContextProviderKey'),
  Xn = q({
    compatConfig: { MODE: 3 },
    name: 'OverflowContextProvider',
    inheritAttrs: !1,
    props: { value: { type: Object } },
    setup(e, t) {
      let { slots: n } = t;
      return (
        Ce(
          ea,
          C(() => e.value)
        ),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    }
  }),
  Xd = () =>
    ye(
      ea,
      C(() => null)
    );
var Yd =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  };
const Ze = void 0,
  Ut = q({
    compatConfig: { MODE: 3 },
    name: 'Item',
    props: {
      prefixCls: String,
      item: I.any,
      renderItem: Function,
      responsive: Boolean,
      itemKey: { type: [String, Number] },
      registerSize: Function,
      display: Boolean,
      order: Number,
      component: I.any,
      invalidate: Boolean
    },
    setup(e, t) {
      let { slots: n, expose: o } = t;
      const r = C(() => e.responsive && !e.display),
        i = W();
      o({ itemNodeRef: i });
      function a(l) {
        e.registerSize(e.itemKey, l);
      }
      return (
        no(() => {
          a(null);
        }),
        () => {
          var l;
          const {
              prefixCls: s,
              invalidate: u,
              item: d,
              renderItem: c,
              responsive: m,
              registerSize: p,
              itemKey: v,
              display: g,
              order: w,
              component: S = 'div'
            } = e,
            y = Yd(e, [
              'prefixCls',
              'invalidate',
              'item',
              'renderItem',
              'responsive',
              'registerSize',
              'itemKey',
              'display',
              'order',
              'component'
            ]),
            T = (l = n.default) === null || l === void 0 ? void 0 : l.call(n),
            H = c && d !== Ze ? c(d) : T;
          let P;
          u ||
            (P = {
              opacity: r.value ? 0 : 1,
              height: r.value ? 0 : Ze,
              overflowY: r.value ? 'hidden' : Ze,
              order: m ? w : Ze,
              pointerEvents: r.value ? 'none' : Ze,
              position: r.value ? 'absolute' : Ze
            });
          const O = {};
          return (
            r.value && (O['aria-hidden'] = !0),
            b(
              ro,
              {
                disabled: !m,
                onResize: h => {
                  let { offsetWidth: A } = h;
                  a(A);
                }
              },
              {
                default: () =>
                  b(
                    S,
                    M(
                      M(M({ class: oe(!u && s), style: P }, O), y),
                      {},
                      { ref: i }
                    ),
                    { default: () => [H] }
                  )
              }
            )
          );
        }
      );
    }
  });
var Tn =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  };
const qd = q({
  compatConfig: { MODE: 3 },
  name: 'RawItem',
  inheritAttrs: !1,
  props: {
    component: I.any,
    title: I.any,
    id: String,
    onMouseenter: { type: Function },
    onMouseleave: { type: Function },
    onClick: { type: Function },
    onKeydown: { type: Function },
    onFocus: { type: Function },
    role: String,
    tabindex: Number
  },
  setup(e, t) {
    let { slots: n, attrs: o } = t;
    const r = Xd();
    return () => {
      var i;
      if (!r.value) {
        const { component: c = 'div' } = e,
          m = Tn(e, ['component']);
        return b(c, M(M({}, m), o), {
          default: () => [
            (i = n.default) === null || i === void 0 ? void 0 : i.call(n)
          ]
        });
      }
      const a = r.value,
        { className: l } = a,
        s = Tn(a, ['className']),
        { class: u } = o,
        d = Tn(o, ['class']);
      return b(
        Xn,
        { value: null },
        { default: () => [b(Ut, M(M(M({ class: oe(l, u) }, s), d), e), n)] }
      );
    };
  }
});
var kd =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  };
const ta = 'responsive',
  na = 'invalidate';
function Zd(e) {
  return `+ ${e.length} ...`;
}
const Qd = () => ({
    id: String,
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    itemWidth: { type: Number, default: 10 },
    renderItem: Function,
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    renderRawRest: Function,
    suffix: I.any,
    component: String,
    itemComponent: I.any,
    onVisibleChange: Function,
    ssr: String,
    onMousedown: Function,
    role: String
  }),
  mn = q({
    name: 'Overflow',
    inheritAttrs: !1,
    props: Qd(),
    emits: ['visibleChange'],
    setup(e, t) {
      let { attrs: n, emit: o, slots: r } = t;
      const i = C(() => e.ssr === 'full'),
        a = z(null),
        l = C(() => a.value || 0),
        s = z(new Map()),
        u = z(0),
        d = z(0),
        c = z(0),
        m = z(null),
        p = z(null),
        v = C(() =>
          p.value === null && i.value ? Number.MAX_SAFE_INTEGER : p.value || 0
        ),
        g = z(!1),
        w = C(() => `${e.prefixCls}-item`),
        S = C(() => Math.max(u.value, d.value)),
        y = C(() => !!(e.data.length && e.maxCount === ta)),
        T = C(() => e.maxCount === na),
        H = C(
          () =>
            y.value ||
            (typeof e.maxCount == 'number' && e.data.length > e.maxCount)
        ),
        P = C(() => {
          let $ = e.data;
          return (
            y.value
              ? a.value === null && i.value
                ? ($ = e.data)
                : ($ = e.data.slice(
                    0,
                    Math.min(e.data.length, l.value / e.itemWidth)
                  ))
              : typeof e.maxCount == 'number' &&
                ($ = e.data.slice(0, e.maxCount)),
            $
          );
        }),
        O = C(() =>
          y.value ? e.data.slice(v.value + 1) : e.data.slice(P.value.length)
        ),
        h = ($, B) => {
          var V;
          return typeof e.itemKey == 'function'
            ? e.itemKey($)
            : (V = e.itemKey && ($ == null ? void 0 : $[e.itemKey])) !== null &&
              V !== void 0
            ? V
            : B;
        },
        A = C(() => e.renderItem || ($ => $)),
        L = ($, B) => {
          (p.value = $),
            B || ((g.value = $ < e.data.length - 1), o('visibleChange', $));
        },
        x = ($, B) => {
          a.value = B.clientWidth;
        },
        R = ($, B) => {
          const V = new Map(s.value);
          B === null ? V.delete($) : V.set($, B), (s.value = V);
        },
        U = ($, B) => {
          (u.value = d.value), (d.value = B);
        },
        G = ($, B) => {
          c.value = B;
        },
        Q = $ => s.value.get(h(P.value[$], $));
      return (
        J([l, s, d, c, () => e.itemKey, P], () => {
          if (l.value && S.value && P.value) {
            let $ = c.value;
            const B = P.value.length,
              V = B - 1;
            if (!B) {
              L(0), (m.value = null);
              return;
            }
            for (let X = 0; X < B; X += 1) {
              const _ = Q(X);
              if (_ === void 0) {
                L(X - 1, !0);
                break;
              }
              if (
                (($ += _),
                (V === 0 && $ <= l.value) ||
                  (X === V - 1 && $ + Q(V) <= l.value))
              ) {
                L(V), (m.value = null);
                break;
              } else if ($ + S.value > l.value) {
                L(X - 1), (m.value = $ - _ - c.value + d.value);
                break;
              }
            }
            e.suffix && Q(0) + c.value > l.value && (m.value = null);
          }
        }),
        () => {
          const $ = g.value && !!O.value.length,
            {
              itemComponent: B,
              renderRawItem: V,
              renderRawRest: X,
              renderRest: _,
              prefixCls: N = 'rc-overflow',
              suffix: D,
              component: Y = 'div',
              id: Z,
              onMousedown: fe
            } = e,
            { class: de, style: ue } = n,
            E = kd(n, ['class', 'style']);
          let j = {};
          m.value !== null &&
            y.value &&
            (j = { position: 'absolute', left: `${m.value}px`, top: 0 });
          const k = {
              prefixCls: w.value,
              responsive: y.value,
              component: B,
              invalidate: T.value
            },
            re = V
              ? (ae, ve) => {
                  const Le = h(ae, ve);
                  return b(
                    Xn,
                    {
                      key: Le,
                      value: f(f({}, k), {
                        order: ve,
                        item: ae,
                        itemKey: Le,
                        registerSize: R,
                        display: ve <= v.value
                      })
                    },
                    { default: () => [V(ae, ve)] }
                  );
                }
              : (ae, ve) => {
                  const Le = h(ae, ve);
                  return b(
                    Ut,
                    M(
                      M({}, k),
                      {},
                      {
                        order: ve,
                        key: Le,
                        item: ae,
                        renderItem: A.value,
                        itemKey: Le,
                        registerSize: R,
                        display: ve <= v.value
                      }
                    ),
                    null
                  );
                };
          let ie = () => null;
          const te = {
            order: $ ? v.value : Number.MAX_SAFE_INTEGER,
            className: `${w.value} ${w.value}-rest`,
            registerSize: U,
            display: $
          };
          if (X)
            X &&
              (ie = () =>
                b(
                  Xn,
                  { value: f(f({}, k), te) },
                  { default: () => [X(O.value)] }
                ));
          else {
            const ae = _ || Zd;
            ie = () =>
              b(Ut, M(M({}, k), te), {
                default: () => (typeof ae == 'function' ? ae(O.value) : ae)
              });
          }
          const pe = () => {
            var ae;
            return b(
              Y,
              M(
                {
                  id: Z,
                  class: oe(!T.value && N, de),
                  style: ue,
                  onMousedown: fe,
                  role: e.role
                },
                E
              ),
              {
                default: () => [
                  P.value.map(re),
                  H.value ? ie() : null,
                  D &&
                    b(
                      Ut,
                      M(
                        M({}, k),
                        {},
                        {
                          order: v.value,
                          class: `${w.value}-suffix`,
                          registerSize: G,
                          display: !0,
                          style: j
                        }
                      ),
                      { default: () => D }
                    ),
                  (ae = r.default) === null || ae === void 0
                    ? void 0
                    : ae.call(r)
                ]
              }
            );
          };
          return b(ro, { disabled: !y.value, onResize: x }, { default: pe });
        }
      );
    }
  });
mn.Item = qd;
mn.RESPONSIVE = ta;
mn.INVALIDATE = na;
const Ct = mn,
  Ov = () => {
    if (typeof navigator > 'u' || typeof window > 'u') return !1;
    const e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        e == null ? void 0 : e.substring(0, 4)
      )
    );
  };
function Tv(e, t) {
  const { defaultValue: n, value: o = W() } = t || {};
  let r = typeof e == 'function' ? e() : e;
  o.value !== void 0 && (r = yt(o)),
    n !== void 0 && (r = typeof n == 'function' ? n() : n);
  const i = W(r),
    a = W(r);
  Oe(() => {
    let s = o.value !== void 0 ? o.value : i.value;
    t.postState && (s = t.postState(s)), (a.value = s);
  });
  function l(s) {
    const u = a.value;
    (i.value = s), Nn(a.value) !== s && t.onChange && t.onChange(s, u);
  }
  return (
    J(o, () => {
      i.value = o.value;
    }),
    [a, l]
  );
}
function Ve(e) {
  const t = typeof e == 'function' ? e() : e,
    n = W(t);
  function o(r) {
    n.value = r;
  }
  return [n, o];
}
function Er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      o.forEach(function(r) {
        Jd(e, r, n[r]);
      });
  }
  return e;
}
function Jd(e, t, n) {
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
var go = function(t, n) {
  var o = Er({}, t, n.attrs);
  return b(Mt, Er({}, o, { icon: dl }), null);
};
go.displayName = 'CheckOutlined';
go.inheritAttrs = !1;
const Iv = go;
function ho(e) {
  const t = Symbol('contextKey');
  return {
    useProvide: (r, i) => {
      const a = to({});
      return (
        Ce(t, a),
        Oe(() => {
          f(a, r, i || {});
        }),
        a
      );
    },
    useInject: () => ye(t, e) || {}
  };
}
const Pr = Symbol('ContextProps'),
  _r = Symbol('InternalContextProps'),
  Ar = {
    id: C(() => {}),
    onFieldBlur: () => {},
    onFieldChange: () => {},
    clearValidate: () => {}
  },
  Mr = { addFormItemField: () => {}, removeFormItemField: () => {} },
  ef = () => {
    const e = ye(_r, Mr),
      t = Symbol('FormItemFieldKey'),
      n = He();
    return (
      e.addFormItemField(t, n.type),
      me(() => {
        e.removeFormItemField(t);
      }),
      Ce(_r, Mr),
      Ce(Pr, Ar),
      ye(Pr, Ar)
    );
  },
  bo = ho({}),
  Ev = q({
    name: 'NoFormStatus',
    setup(e, t) {
      let { slots: n } = t;
      return (
        bo.useProvide({}),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    }
  });
function oa(e, t, n) {
  return oe({
    [`${e}-status-success`]: t === 'success',
    [`${e}-status-warning`]: t === 'warning',
    [`${e}-status-error`]: t === 'error',
    [`${e}-status-validating`]: t === 'validating',
    [`${e}-has-feedback`]: n
  });
}
const ra = (e, t) => t || e,
  tf = e => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: 'inline-flex',
        '&-block': { display: 'flex', width: '100%' },
        '&-vertical': { flexDirection: 'column' }
      }
    };
  },
  nf = tf,
  of = e => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: 'inline-flex',
        '&-rtl': { direction: 'rtl' },
        '&-vertical': { flexDirection: 'column' },
        '&-align': {
          flexDirection: 'column',
          '&-center': { alignItems: 'center' },
          '&-start': { alignItems: 'flex-start' },
          '&-end': { alignItems: 'flex-end' },
          '&-baseline': { alignItems: 'baseline' }
        },
        [`${t}-item`]: { '&:empty': { display: 'none' } }
      }
    };
  },
  ia = ft('Space', e => [of(e), nf(e)]);
var rf = '[object Symbol]';
function Pv(e) {
  return typeof e == 'symbol' || (ut(e) && mt(e) == rf);
}
function af() {}
function lf(e, t, n, o) {
  for (var r = e.length, i = n + (o ? 1 : -1); o ? i-- : ++i < r; )
    if (t(e[i], i, e)) return i;
  return -1;
}
function sf(e) {
  return e !== e;
}
function uf(e, t, n) {
  for (var o = n - 1, r = e.length; ++o < r; ) if (e[o] === t) return o;
  return -1;
}
function cf(e, t, n) {
  return t === t ? uf(e, t, n) : lf(e, sf, n);
}
function df(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && cf(e, t, 0) > -1;
}
function ff(e, t, n) {
  for (var o = -1, r = e == null ? 0 : e.length; ++o < r; )
    if (n(t, e[o])) return !0;
  return !1;
}
var pf = '[object Map]',
  mf = '[object Set]',
  vf = Object.prototype,
  gf = vf.hasOwnProperty;
function aa(e) {
  if (e == null) return !0;
  if (
    Zi(e) &&
    (_t(e) ||
      typeof e == 'string' ||
      typeof e.splice == 'function' ||
      en(e) ||
      mo(e) ||
      Ui(e))
  )
    return !e.length;
  var t = Gn(e);
  if (t == pf || t == mf) return !e.size;
  if (qi(e)) return !ki(e).length;
  for (var n in e) if (gf.call(e, n)) return !1;
  return !0;
}
var hf = 1 / 0,
  bf =
    ot && 1 / po(new ot([, -0]))[1] == hf
      ? function(e) {
          return new ot(e);
        }
      : af;
const yf = bf;
var $f = 200;
function wf(e, t, n) {
  var o = -1,
    r = df,
    i = e.length,
    a = !0,
    l = [],
    s = l;
  if (n) (a = !1), (r = ff);
  else if (i >= $f) {
    var u = t ? null : yf(e);
    if (u) return po(u);
    (a = !1), (r = Wi), (s = new Pt());
  } else s = t ? [] : l;
  e: for (; ++o < i; ) {
    var d = e[o],
      c = t ? t(d) : d;
    if (((d = n || d !== 0 ? d : 0), a && c === c)) {
      for (var m = s.length; m--; ) if (s[m] === c) continue e;
      t && s.push(c), l.push(d);
    } else r(s, c, n) || (s !== l && s.push(c), l.push(d));
  }
  return l;
}
function In(e) {
  return e && e.length ? wf(e) : [];
}
const Sf = () => ({
    compactSize: String,
    compactDirection: I.oneOf(it('horizontal', 'vertical')).def('horizontal'),
    isFirstItem: Xt(),
    isLastItem: Xt()
  }),
  vn = ho(null),
  Cf = (e, t) => {
    const n = vn.useInject(),
      o = C(() => {
        if (!n || aa(n)) return '';
        const { compactDirection: r, isFirstItem: i, isLastItem: a } = n,
          l = r === 'vertical' ? '-vertical-' : '-';
        return oe({
          [`${e.value}-compact${l}item`]: !0,
          [`${e.value}-compact${l}first-item`]: i,
          [`${e.value}-compact${l}last-item`]: a,
          [`${e.value}-compact${l}item-rtl`]: t.value === 'rtl'
        });
      });
    return {
      compactSize: C(() => (n == null ? void 0 : n.compactSize)),
      compactDirection: C(() => (n == null ? void 0 : n.compactDirection)),
      compactItemClassnames: o
    };
  },
  _v = q({
    name: 'NoCompactStyle',
    setup(e, t) {
      let { slots: n } = t;
      return (
        vn.useProvide(null),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    }
  }),
  xf = () => ({
    prefixCls: String,
    size: { type: String },
    direction: I.oneOf(it('horizontal', 'vertical')).def('horizontal'),
    align: I.oneOf(it('start', 'end', 'center', 'baseline')),
    block: { type: Boolean, default: void 0 }
  }),
  Of = q({
    name: 'CompactItem',
    props: Sf(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        vn.useProvide(e),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    }
  }),
  Yn = q({
    name: 'ASpaceCompact',
    inheritAttrs: !1,
    props: xf(),
    setup(e, t) {
      let { attrs: n, slots: o } = t;
      const { prefixCls: r, direction: i } = Ne('space-compact', e),
        a = vn.useInject(),
        [l, s] = ia(r),
        u = C(() =>
          oe(r.value, s.value, {
            [`${r.value}-rtl`]: i.value === 'rtl',
            [`${r.value}-block`]: e.block,
            [`${r.value}-vertical`]: e.direction === 'vertical'
          })
        );
      return () => {
        var d;
        const c = Ye(
          ((d = o.default) === null || d === void 0 ? void 0 : d.call(o)) || []
        );
        return c.length === 0
          ? null
          : l(
              b('div', M(M({}, n), {}, { class: [u.value, n.class] }), [
                c.map((m, p) => {
                  var v;
                  const g = (m && m.key) || `${r.value}-item-${p}`,
                    w = !a || aa(a);
                  return b(
                    Of,
                    {
                      key: g,
                      compactSize:
                        (v = e.size) !== null && v !== void 0 ? v : 'middle',
                      compactDirection: e.direction,
                      isFirstItem:
                        p === 0 && (w || (a == null ? void 0 : a.isFirstItem)),
                      isLastItem:
                        p === c.length - 1 &&
                        (w || (a == null ? void 0 : a.isLastItem))
                    },
                    { default: () => [m] }
                  );
                })
              ])
            );
      };
    }
  }),
  Tf = e => ({ animationDuration: e, animationFillMode: 'both' }),
  If = e => ({ animationDuration: e, animationFillMode: 'both' }),
  la = function(e, t, n, o) {
    const i = (arguments.length > 4 && arguments[4] !== void 0
    ? arguments[4]
    : !1)
      ? '&'
      : '';
    return {
      [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: f(f({}, Tf(o)), { animationPlayState: 'paused' }),
      [`${i}${e}-leave`]: f(f({}, If(o)), { animationPlayState: 'paused' }),
      [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
      [`${i}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: 'running',
        pointerEvents: 'none'
      }
    };
  },
  Ef = new se('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 }
  }),
  Pf = new se('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 }
  }),
  _f = new se('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0
    },
    '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 }
  }),
  Af = new se('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0
    }
  }),
  Mf = new se('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 }
  }),
  Rf = new se('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 }
  }),
  Df = new se('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 }
  }),
  Bf = new se('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 }
  }),
  zf = {
    'slide-up': { inKeyframes: Ef, outKeyframes: Pf },
    'slide-down': { inKeyframes: _f, outKeyframes: Af },
    'slide-left': { inKeyframes: Mf, outKeyframes: Rf },
    'slide-right': { inKeyframes: Df, outKeyframes: Bf }
  },
  Rr = (e, t) => {
    const { antCls: n } = e,
      o = `${n}-${t}`,
      { inKeyframes: r, outKeyframes: i } = zf[t];
    return [
      la(o, r, i, e.motionDurationMid),
      {
        [`
      ${o}-enter,
      ${o}-appear
    `]: {
          transform: 'scale(0)',
          transformOrigin: '0% 0%',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint
        },
        [`${o}-leave`]: { animationTimingFunction: e.motionEaseInQuint }
      }
    ];
  },
  Nf = new se('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 }
  }),
  Hf = new se('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 }
  }),
  Dr = new se('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 }
  }),
  Br = new se('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 }
  }),
  Lf = new se('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' }
  }),
  Ff = new se('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 }
  }),
  jf = new se('antZoomLeftIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' }
  }),
  Wf = new se('antZoomLeftOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 }
  }),
  Vf = new se('antZoomRightIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' }
  }),
  Kf = new se('antZoomRightOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 }
  }),
  Uf = new se('antZoomDownIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' }
  }),
  Gf = new se('antZoomDownOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 }
  }),
  Xf = {
    zoom: { inKeyframes: Nf, outKeyframes: Hf },
    'zoom-big': { inKeyframes: Dr, outKeyframes: Br },
    'zoom-big-fast': { inKeyframes: Dr, outKeyframes: Br },
    'zoom-left': { inKeyframes: jf, outKeyframes: Wf },
    'zoom-right': { inKeyframes: Vf, outKeyframes: Kf },
    'zoom-up': { inKeyframes: Lf, outKeyframes: Ff },
    'zoom-down': { inKeyframes: Uf, outKeyframes: Gf }
  },
  sa = (e, t) => {
    const { antCls: n } = e,
      o = `${n}-${t}`,
      { inKeyframes: r, outKeyframes: i } = Xf[t];
    return [
      la(
        o,
        r,
        i,
        t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid
      ),
      {
        [`
        ${o}-enter,
        ${o}-appear
      `]: {
          transform: 'scale(0)',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          '&-prepare': { transform: 'none' }
        },
        [`${o}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc }
      }
    ];
  },
  Yf = e => ({
    [e.componentCls]: {
      [`${e.antCls}-motion-collapse-legacy`]: {
        overflow: 'hidden',
        '&-active': {
          transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
        }
      },
      [`${e.antCls}-motion-collapse`]: {
        overflow: 'hidden',
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    }
  }),
  qf = Yf;
function kf(e, t, n) {
  const { focusElCls: o, focus: r, borderElCls: i } = n,
    a = i ? '> *' : '',
    l = ['hover', r ? 'focus' : null, 'active']
      .filter(Boolean)
      .map(s => `&:${s} ${a}`)
      .join(',');
  return {
    [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
    '&-item': f(
      f({ [l]: { zIndex: 2 } }, o ? { [`&${o}`]: { zIndex: 2 } } : {}),
      { [`&[disabled] ${a}`]: { zIndex: 0 } }
    )
  };
}
function Zf(e, t, n) {
  const { borderElCls: o } = n,
    r = o ? `> ${o}` : '';
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${r}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function ua(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: n } = e,
    o = `${n}-compact`;
  return { [o]: f(f({}, kf(e, o, t)), Zf(n, o, t)) };
}
const ge = { adjustX: 1, adjustY: 1 },
  he = [0, 0],
  ca = {
    left: {
      points: ['cr', 'cl'],
      overflow: ge,
      offset: [-4, 0],
      targetOffset: he
    },
    right: {
      points: ['cl', 'cr'],
      overflow: ge,
      offset: [4, 0],
      targetOffset: he
    },
    top: {
      points: ['bc', 'tc'],
      overflow: ge,
      offset: [0, -4],
      targetOffset: he
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: ge,
      offset: [0, 4],
      targetOffset: he
    },
    topLeft: {
      points: ['bl', 'tl'],
      overflow: ge,
      offset: [0, -4],
      targetOffset: he
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: ge,
      offset: [-4, 0],
      targetOffset: he
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: ge,
      offset: [0, -4],
      targetOffset: he
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: ge,
      offset: [4, 0],
      targetOffset: he
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: ge,
      offset: [0, 4],
      targetOffset: he
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: ge,
      offset: [4, 0],
      targetOffset: he
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: ge,
      offset: [0, 4],
      targetOffset: he
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: ge,
      offset: [-4, 0],
      targetOffset: he
    }
  },
  Qf = { prefixCls: String, id: String, overlayInnerStyle: I.any },
  Jf = q({
    compatConfig: { MODE: 3 },
    name: 'TooltipContent',
    props: Qf,
    setup(e, t) {
      let { slots: n } = t;
      return () => {
        var o;
        return b(
          'div',
          {
            class: `${e.prefixCls}-inner`,
            id: e.id,
            role: 'tooltip',
            style: e.overlayInnerStyle
          },
          [(o = n.overlay) === null || o === void 0 ? void 0 : o.call(n)]
        );
      };
    }
  });
var ep =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  };
function zr() {}
const tp = q({
    compatConfig: { MODE: 3 },
    name: 'Tooltip',
    inheritAttrs: !1,
    props: {
      trigger: I.any.def(['hover']),
      defaultVisible: { type: Boolean, default: void 0 },
      visible: { type: Boolean, default: void 0 },
      placement: I.string.def('right'),
      transitionName: String,
      animation: I.any,
      afterVisibleChange: I.func.def(() => {}),
      overlayStyle: { type: Object, default: void 0 },
      overlayClassName: String,
      prefixCls: I.string.def('rc-tooltip'),
      mouseEnterDelay: I.number.def(0.1),
      mouseLeaveDelay: I.number.def(0.1),
      getPopupContainer: Function,
      destroyTooltipOnHide: { type: Boolean, default: !1 },
      align: I.object.def(() => ({})),
      arrowContent: I.any.def(null),
      tipId: String,
      builtinPlacements: I.object,
      overlayInnerStyle: { type: Object, default: void 0 },
      popupVisible: { type: Boolean, default: void 0 },
      onVisibleChange: Function,
      onPopupAlign: Function,
      arrow: { type: Boolean, default: !0 }
    },
    setup(e, t) {
      let { slots: n, attrs: o, expose: r } = t;
      const i = z(),
        a = () => {
          const { prefixCls: d, tipId: c, overlayInnerStyle: m } = e;
          return [
            e.arrow
              ? b('div', { class: `${d}-arrow`, key: 'arrow' }, [
                  Jn(n, e, 'arrowContent')
                ])
              : null,
            b(
              Jf,
              { key: 'content', prefixCls: d, id: c, overlayInnerStyle: m },
              { overlay: n.overlay }
            )
          ];
        };
      r({
        getPopupDomNode: () => i.value.getPopupDomNode(),
        triggerDOM: i,
        forcePopupAlign: () => {
          var d;
          return (d = i.value) === null || d === void 0
            ? void 0
            : d.forcePopupAlign();
        }
      });
      const s = z(!1),
        u = z(!1);
      return (
        Oe(() => {
          const { destroyTooltipOnHide: d } = e;
          if (typeof d == 'boolean') s.value = d;
          else if (d && typeof d == 'object') {
            const { keepParent: c } = d;
            (s.value = c === !0), (u.value = c === !1);
          }
        }),
        () => {
          const {
              overlayClassName: d,
              trigger: c,
              mouseEnterDelay: m,
              mouseLeaveDelay: p,
              overlayStyle: v,
              prefixCls: g,
              afterVisibleChange: w,
              transitionName: S,
              animation: y,
              placement: T,
              align: H,
              destroyTooltipOnHide: P,
              defaultVisible: O
            } = e,
            h = ep(e, [
              'overlayClassName',
              'trigger',
              'mouseEnterDelay',
              'mouseLeaveDelay',
              'overlayStyle',
              'prefixCls',
              'afterVisibleChange',
              'transitionName',
              'animation',
              'placement',
              'align',
              'destroyTooltipOnHide',
              'defaultVisible'
            ]),
            A = f({}, h);
          e.visible !== void 0 && (A.popupVisible = e.visible);
          const L = f(
            f(
              f(
                {
                  popupClassName: d,
                  prefixCls: g,
                  action: c,
                  builtinPlacements: ca,
                  popupPlacement: T,
                  popupAlign: H,
                  afterPopupVisibleChange: w,
                  popupTransitionName: S,
                  popupAnimation: y,
                  defaultPopupVisible: O,
                  destroyPopupOnHide: s.value,
                  autoDestroy: u.value,
                  mouseLeaveDelay: p,
                  popupStyle: v,
                  mouseEnterDelay: m
                },
                A
              ),
              o
            ),
            {
              onPopupVisibleChange: e.onVisibleChange || zr,
              onPopupAlign: e.onPopupAlign || zr,
              ref: i,
              arrow: !!e.arrow,
              popup: a()
            }
          );
          return b(vo, L, { default: n.default });
        }
      );
    }
  }),
  np = () => ({
    trigger: [String, Array],
    open: { type: Boolean, default: void 0 },
    visible: { type: Boolean, default: void 0 },
    placement: String,
    color: String,
    transitionName: String,
    overlayStyle: De(),
    overlayInnerStyle: De(),
    overlayClassName: String,
    openClassName: String,
    prefixCls: String,
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    getPopupContainer: Function,
    arrowPointAtCenter: { type: Boolean, default: void 0 },
    arrow: { type: [Boolean, Object], default: !0 },
    autoAdjustOverflow: { type: [Boolean, Object], default: void 0 },
    destroyTooltipOnHide: { type: Boolean, default: void 0 },
    align: De(),
    builtinPlacements: De(),
    children: Array,
    onVisibleChange: Function,
    'onUpdate:visible': Function,
    onOpenChange: Function,
    'onUpdate:open': Function
  }),
  op = { adjustX: 1, adjustY: 1 },
  Nr = { adjustX: 0, adjustY: 0 },
  rp = [0, 0];
function Hr(e) {
  return typeof e == 'boolean' ? (e ? op : Nr) : f(f({}, Nr), e);
}
function ip(e) {
  const {
      arrowWidth: t = 4,
      horizontalArrowShift: n = 16,
      verticalArrowShift: o = 8,
      autoAdjustOverflow: r,
      arrowPointAtCenter: i
    } = e,
    a = {
      left: { points: ['cr', 'cl'], offset: [-4, 0] },
      right: { points: ['cl', 'cr'], offset: [4, 0] },
      top: { points: ['bc', 'tc'], offset: [0, -4] },
      bottom: { points: ['tc', 'bc'], offset: [0, 4] },
      topLeft: { points: ['bl', 'tc'], offset: [-(n + t), -4] },
      leftTop: { points: ['tr', 'cl'], offset: [-4, -(o + t)] },
      topRight: { points: ['br', 'tc'], offset: [n + t, -4] },
      rightTop: { points: ['tl', 'cr'], offset: [4, -(o + t)] },
      bottomRight: { points: ['tr', 'bc'], offset: [n + t, 4] },
      rightBottom: { points: ['bl', 'cr'], offset: [4, o + t] },
      bottomLeft: { points: ['tl', 'bc'], offset: [-(n + t), 4] },
      leftBottom: { points: ['br', 'cl'], offset: [-4, o + t] }
    };
  return (
    Object.keys(a).forEach(l => {
      (a[l] = i
        ? f(f({}, a[l]), { overflow: Hr(r), targetOffset: rp })
        : f(f({}, ca[l]), { overflow: Hr(r) })),
        (a[l].ignoreShake = !0);
    }),
    a
  );
}
function ap() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++) if (e[t] !== void 0) return e[t];
}
const lp = Qt.map(e => `${e}-inverse`),
  sp = ['success', 'processing', 'error', 'default', 'warning'];
function up(e) {
  return (arguments.length > 1 && arguments[1] !== void 0
  ? arguments[1]
  : !0)
    ? [...lp, ...Qt].includes(e)
    : Qt.includes(e);
}
function Av(e) {
  return sp.includes(e);
}
function cp(e, t) {
  const n = up(t),
    o = oe({ [`${e}-${t}`]: t && n }),
    r = {},
    i = {};
  return (
    t && !n && ((r.background = t), (i['--antd-arrow-background-color'] = t)),
    { className: o, overlayStyle: r, arrowStyle: i }
  );
}
function Ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
  return e.map(n => `${t}${n}`).join(',');
}
const da = 8;
function dp(e) {
  const t = da,
    {
      sizePopupArrow: n,
      contentRadius: o,
      borderRadiusOuter: r,
      limitVerticalRadius: i
    } = e,
    a = n / 2 - Math.ceil(r * (Math.sqrt(2) - 1)),
    l = (o > 12 ? o + 2 : 12) - a,
    s = i ? t - a : l;
  return { dropdownArrowOffset: l, dropdownArrowOffsetVertical: s };
}
function fp(e, t) {
  const {
      componentCls: n,
      sizePopupArrow: o,
      marginXXS: r,
      borderRadiusXS: i,
      borderRadiusOuter: a,
      boxShadowPopoverArrow: l
    } = e,
    {
      colorBg: s,
      showArrowCls: u,
      contentRadius: d = e.borderRadiusLG,
      limitVerticalRadius: c
    } = t,
    { dropdownArrowOffsetVertical: m, dropdownArrowOffset: p } = dp({
      sizePopupArrow: o,
      contentRadius: d,
      borderRadiusOuter: a,
      limitVerticalRadius: c
    }),
    v = o / 2 + r;
  return {
    [n]: {
      [`${n}-arrow`]: [
        f(
          f(
            { position: 'absolute', zIndex: 1, display: 'block' },
            zl(o, i, a, s, l)
          ),
          { '&:before': { background: s } }
        )
      ],
      [[
        `&-placement-top ${n}-arrow`,
        `&-placement-topLeft ${n}-arrow`,
        `&-placement-topRight ${n}-arrow`
      ].join(',')]: { bottom: 0, transform: 'translateY(100%) rotate(180deg)' },
      [`&-placement-top ${n}-arrow`]: {
        left: { _skip_check_: !0, value: '50%' },
        transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
      },
      [`&-placement-topLeft ${n}-arrow`]: {
        left: { _skip_check_: !0, value: p }
      },
      [`&-placement-topRight ${n}-arrow`]: {
        right: { _skip_check_: !0, value: p }
      },
      [[
        `&-placement-bottom ${n}-arrow`,
        `&-placement-bottomLeft ${n}-arrow`,
        `&-placement-bottomRight ${n}-arrow`
      ].join(',')]: { top: 0, transform: 'translateY(-100%)' },
      [`&-placement-bottom ${n}-arrow`]: {
        left: { _skip_check_: !0, value: '50%' },
        transform: 'translateX(-50%) translateY(-100%)'
      },
      [`&-placement-bottomLeft ${n}-arrow`]: {
        left: { _skip_check_: !0, value: p }
      },
      [`&-placement-bottomRight ${n}-arrow`]: {
        right: { _skip_check_: !0, value: p }
      },
      [[
        `&-placement-left ${n}-arrow`,
        `&-placement-leftTop ${n}-arrow`,
        `&-placement-leftBottom ${n}-arrow`
      ].join(',')]: {
        right: { _skip_check_: !0, value: 0 },
        transform: 'translateX(100%) rotate(90deg)'
      },
      [`&-placement-left ${n}-arrow`]: {
        top: { _skip_check_: !0, value: '50%' },
        transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
      },
      [`&-placement-leftTop ${n}-arrow`]: { top: m },
      [`&-placement-leftBottom ${n}-arrow`]: { bottom: m },
      [[
        `&-placement-right ${n}-arrow`,
        `&-placement-rightTop ${n}-arrow`,
        `&-placement-rightBottom ${n}-arrow`
      ].join(',')]: {
        left: { _skip_check_: !0, value: 0 },
        transform: 'translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-right ${n}-arrow`]: {
        top: { _skip_check_: !0, value: '50%' },
        transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
      },
      [`&-placement-rightTop ${n}-arrow`]: { top: m },
      [`&-placement-rightBottom ${n}-arrow`]: { bottom: m },
      [Ft(
        ['&-placement-topLeft', '&-placement-top', '&-placement-topRight'].map(
          g => (g += ':not(&-arrow-hidden)')
        ),
        u
      )]: { paddingBottom: v },
      [Ft(
        [
          '&-placement-bottomLeft',
          '&-placement-bottom',
          '&-placement-bottomRight'
        ].map(g => (g += ':not(&-arrow-hidden)')),
        u
      )]: { paddingTop: v },
      [Ft(
        [
          '&-placement-leftTop',
          '&-placement-left',
          '&-placement-leftBottom'
        ].map(g => (g += ':not(&-arrow-hidden)')),
        u
      )]: { paddingRight: { _skip_check_: !0, value: v } },
      [Ft(
        [
          '&-placement-rightTop',
          '&-placement-right',
          '&-placement-rightBottom'
        ].map(g => (g += ':not(&-arrow-hidden)')),
        u
      )]: { paddingLeft: { _skip_check_: !0, value: v } }
    }
  };
}
const pp = e => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: o,
      tooltipBg: r,
      tooltipBorderRadius: i,
      zIndexPopup: a,
      controlHeight: l,
      boxShadowSecondary: s,
      paddingSM: u,
      paddingXS: d,
      tooltipRadiusOuter: c
    } = e;
    return [
      {
        [t]: f(
          f(
            f(f({}, ln(e)), {
              position: 'absolute',
              zIndex: a,
              display: 'block',
              '&': [{ width: 'max-content' }, { width: 'intrinsic' }],
              maxWidth: n,
              visibility: 'visible',
              '&-hidden': { display: 'none' },
              '--antd-arrow-background-color': r,
              [`${t}-inner`]: {
                minWidth: l,
                minHeight: l,
                padding: `${u / 2}px ${d}px`,
                color: o,
                textAlign: 'start',
                textDecoration: 'none',
                wordWrap: 'break-word',
                backgroundColor: r,
                borderRadius: i,
                boxShadow: s
              },
              [[
                '&-placement-left',
                '&-placement-leftTop',
                '&-placement-leftBottom',
                '&-placement-right',
                '&-placement-rightTop',
                '&-placement-rightBottom'
              ].join(',')]: {
                [`${t}-inner`]: { borderRadius: Math.min(i, da) }
              },
              [`${t}-content`]: { position: 'relative' }
            }),
            Nl(e, (m, p) => {
              let { darkColor: v } = p;
              return {
                [`&${t}-${m}`]: {
                  [`${t}-inner`]: { backgroundColor: v },
                  [`${t}-arrow`]: { '--antd-arrow-background-color': v }
                }
              };
            })
          ),
          { '&-rtl': { direction: 'rtl' } }
        )
      },
      fp(Se(e, { borderRadiusOuter: c }), {
        colorBg: 'var(--antd-arrow-background-color)',
        showArrowCls: '',
        contentRadius: i,
        limitVerticalRadius: !0
      }),
      { [`${t}-pure`]: { position: 'relative', maxWidth: 'none' } }
    ];
  },
  mp = (e, t) =>
    ft(
      'Tooltip',
      o => {
        if ((t == null ? void 0 : t.value) === !1) return [];
        const {
            borderRadius: r,
            colorTextLightSolid: i,
            colorBgDefault: a,
            borderRadiusOuter: l
          } = o,
          s = Se(o, {
            tooltipMaxWidth: 250,
            tooltipColor: i,
            tooltipBorderRadius: r,
            tooltipBg: a,
            tooltipRadiusOuter: l > 4 ? 4 : l
          });
        return [pp(s), sa(o, 'zoom-big-fast')];
      },
      o => {
        let { zIndexPopupBase: r, colorBgSpotlight: i } = o;
        return { zIndexPopup: r + 70, colorBgDefault: i };
      }
    )(e),
  vp = (e, t) => {
    const n = {},
      o = f({}, e);
    return (
      t.forEach(r => {
        e && r in e && ((n[r] = e[r]), delete o[r]);
      }),
      { picked: n, omitted: o }
    );
  },
  gp = () => f(f({}, np()), { title: I.any }),
  Mv = () => ({
    trigger: 'hover',
    align: {},
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0
  }),
  hp = q({
    compatConfig: { MODE: 3 },
    name: 'ATooltip',
    inheritAttrs: !1,
    props: mi(gp(), {
      trigger: 'hover',
      align: {},
      placement: 'top',
      mouseEnterDelay: 0.1,
      mouseLeaveDelay: 0.1,
      arrowPointAtCenter: !1,
      autoAdjustOverflow: !0
    }),
    slots: Object,
    setup(e, t) {
      let { slots: n, emit: o, attrs: r, expose: i } = t;
      const {
          prefixCls: a,
          getPopupContainer: l,
          direction: s,
          rootPrefixCls: u
        } = Ne('tooltip', e),
        d = C(() => {
          var x;
          return (x = e.open) !== null && x !== void 0 ? x : e.visible;
        }),
        c = W(ap([e.open, e.visible])),
        m = W();
      let p;
      J(d, x => {
        le.cancel(p),
          (p = le(() => {
            c.value = !!x;
          }));
      });
      const v = () => {
          var x;
          const R = (x = e.title) !== null && x !== void 0 ? x : n.title;
          return !R && R !== 0;
        },
        g = x => {
          const R = v();
          d.value === void 0 && (c.value = R ? !1 : x),
            R ||
              (o('update:visible', x),
              o('visibleChange', x),
              o('update:open', x),
              o('openChange', x));
        };
      i({
        getPopupDomNode: () => m.value.getPopupDomNode(),
        open: c,
        forcePopupAlign: () => {
          var x;
          return (x = m.value) === null || x === void 0
            ? void 0
            : x.forcePopupAlign();
        }
      });
      const S = C(() => {
          var x;
          const {
            builtinPlacements: R,
            autoAdjustOverflow: U,
            arrow: G,
            arrowPointAtCenter: Q
          } = e;
          let $ = Q;
          return (
            typeof G == 'object' &&
              ($ = (x = G.pointAtCenter) !== null && x !== void 0 ? x : Q),
            R || ip({ arrowPointAtCenter: $, autoAdjustOverflow: U })
          );
        }),
        y = x => x || x === '',
        T = x => {
          const R = x.type;
          if (
            typeof R == 'object' &&
            x.props &&
            (((R.__ANT_BUTTON === !0 || R === 'button') &&
              y(x.props.disabled)) ||
              (R.__ANT_SWITCH === !0 &&
                (y(x.props.disabled) || y(x.props.loading))) ||
              (R.__ANT_RADIO === !0 && y(x.props.disabled)))
          ) {
            const { picked: U, omitted: G } = vp(Xa(x), [
                'position',
                'left',
                'right',
                'top',
                'bottom',
                'float',
                'display',
                'zIndex'
              ]),
              Q = f(f({ display: 'inline-block' }, U), {
                cursor: 'not-allowed',
                lineHeight: 1,
                width: x.props && x.props.block ? '100%' : void 0
              }),
              $ = f(f({}, G), { pointerEvents: 'none' }),
              B = $e(x, { style: $ }, !0);
            return b(
              'span',
              { style: Q, class: `${a.value}-disabled-compatible-wrapper` },
              [B]
            );
          }
          return x;
        },
        H = () => {
          var x, R;
          return (x = e.title) !== null && x !== void 0
            ? x
            : (R = n.title) === null || R === void 0
            ? void 0
            : R.call(n);
        },
        P = (x, R) => {
          const U = S.value,
            G = Object.keys(U).find(Q => {
              var $, B;
              return (
                U[Q].points[0] ===
                  (($ = R.points) === null || $ === void 0 ? void 0 : $[0]) &&
                U[Q].points[1] ===
                  ((B = R.points) === null || B === void 0 ? void 0 : B[1])
              );
            });
          if (G) {
            const Q = x.getBoundingClientRect(),
              $ = { top: '50%', left: '50%' };
            G.indexOf('top') >= 0 || G.indexOf('Bottom') >= 0
              ? ($.top = `${Q.height - R.offset[1]}px`)
              : (G.indexOf('Top') >= 0 || G.indexOf('bottom') >= 0) &&
                ($.top = `${-R.offset[1]}px`),
              G.indexOf('left') >= 0 || G.indexOf('Right') >= 0
                ? ($.left = `${Q.width - R.offset[0]}px`)
                : (G.indexOf('right') >= 0 || G.indexOf('Left') >= 0) &&
                  ($.left = `${-R.offset[0]}px`),
              (x.style.transformOrigin = `${$.left} ${$.top}`);
          }
        },
        O = C(() => cp(a.value, e.color)),
        h = C(() => r['data-popover-inject']),
        [A, L] = mp(
          a,
          C(() => !h.value)
        );
      return () => {
        var x, R;
        const {
          openClassName: U,
          overlayClassName: G,
          overlayStyle: Q,
          overlayInnerStyle: $
        } = e;
        let B =
          (R = dt(
            (x = n.default) === null || x === void 0 ? void 0 : x.call(n)
          )) !== null && R !== void 0
            ? R
            : null;
        B = B.length === 1 ? B[0] : B;
        let V = c.value;
        if ((d.value === void 0 && v() && (V = !1), !B)) return null;
        const X = T(eo(B) && !Ua(B) ? B : b('span', null, [B])),
          _ = oe({
            [U || `${a.value}-open`]: !0,
            [X.props && X.props.class]: X.props && X.props.class
          }),
          N = oe(
            G,
            { [`${a.value}-rtl`]: s.value === 'rtl' },
            O.value.className,
            L.value
          ),
          D = f(f({}, O.value.overlayStyle), $),
          Y = O.value.arrowStyle,
          Z = f(f(f({}, r), e), {
            prefixCls: a.value,
            arrow: !!e.arrow,
            getPopupContainer: l == null ? void 0 : l.value,
            builtinPlacements: S.value,
            visible: V,
            ref: m,
            overlayClassName: N,
            overlayStyle: f(f({}, Y), Q),
            overlayInnerStyle: D,
            onVisibleChange: g,
            onPopupAlign: P,
            transitionName: Ga(u.value, 'zoom-big-fast', e.transitionName)
          });
        return A(
          b(tp, Z, {
            default: () => [c.value ? $e(X, { class: _ }) : X],
            arrowContent: () =>
              b('span', { class: `${a.value}-arrow-content` }, null),
            overlay: H
          })
        );
      };
    }
  }),
  bp = Ya(hp),
  Qe = { adjustX: 1, adjustY: 1 },
  Je = [0, 0],
  yp = {
    topLeft: {
      points: ['bl', 'tl'],
      overflow: Qe,
      offset: [0, -4],
      targetOffset: Je
    },
    topCenter: {
      points: ['bc', 'tc'],
      overflow: Qe,
      offset: [0, -4],
      targetOffset: Je
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: Qe,
      offset: [0, -4],
      targetOffset: Je
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: Qe,
      offset: [0, 4],
      targetOffset: Je
    },
    bottomCenter: {
      points: ['tc', 'bc'],
      overflow: Qe,
      offset: [0, 4],
      targetOffset: Je
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: Qe,
      offset: [0, 4],
      targetOffset: Je
    }
  },
  $p = yp;
var wp =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  };
const Rv = q({
    compatConfig: { MODE: 3 },
    props: {
      minOverlayWidthMatchTrigger: { type: Boolean, default: void 0 },
      arrow: { type: Boolean, default: !1 },
      prefixCls: I.string.def('rc-dropdown'),
      transitionName: String,
      overlayClassName: I.string.def(''),
      openClassName: String,
      animation: I.any,
      align: I.object,
      overlayStyle: { type: Object, default: void 0 },
      placement: I.string.def('bottomLeft'),
      overlay: I.any,
      trigger: I.oneOfType([I.string, I.arrayOf(I.string)]).def('hover'),
      alignPoint: { type: Boolean, default: void 0 },
      showAction: I.array,
      hideAction: I.array,
      getPopupContainer: Function,
      visible: { type: Boolean, default: void 0 },
      defaultVisible: { type: Boolean, default: !1 },
      mouseEnterDelay: I.number.def(0.15),
      mouseLeaveDelay: I.number.def(0.1)
    },
    emits: ['visibleChange', 'overlayClick'],
    setup(e, t) {
      let { slots: n, emit: o, expose: r } = t;
      const i = W(!!e.visible);
      J(
        () => e.visible,
        p => {
          p !== void 0 && (i.value = p);
        }
      );
      const a = W();
      r({ triggerRef: a });
      const l = p => {
          e.visible === void 0 && (i.value = !1), o('overlayClick', p);
        },
        s = p => {
          e.visible === void 0 && (i.value = p), o('visibleChange', p);
        },
        u = () => {
          var p;
          const v =
              (p = n.overlay) === null || p === void 0 ? void 0 : p.call(n),
            g = { prefixCls: `${e.prefixCls}-menu`, onClick: l };
          return b(Ge, { key: qa }, [
            e.arrow && b('div', { class: `${e.prefixCls}-arrow` }, null),
            $e(v, g, !1)
          ]);
        },
        d = C(() => {
          const { minOverlayWidthMatchTrigger: p = !e.alignPoint } = e;
          return p;
        }),
        c = () => {
          var p;
          const v =
            (p = n.default) === null || p === void 0 ? void 0 : p.call(n);
          return i.value && v
            ? $e(v[0], { class: e.openClassName || `${e.prefixCls}-open` }, !1)
            : v;
        },
        m = C(() =>
          !e.hideAction && e.trigger.indexOf('contextmenu') !== -1
            ? ['click']
            : e.hideAction
        );
      return () => {
        const {
            prefixCls: p,
            arrow: v,
            showAction: g,
            overlayStyle: w,
            trigger: S,
            placement: y,
            align: T,
            getPopupContainer: H,
            transitionName: P,
            animation: O,
            overlayClassName: h
          } = e,
          A = wp(e, [
            'prefixCls',
            'arrow',
            'showAction',
            'overlayStyle',
            'trigger',
            'placement',
            'align',
            'getPopupContainer',
            'transitionName',
            'animation',
            'overlayClassName'
          ]);
        return b(
          vo,
          M(
            M({}, A),
            {},
            {
              prefixCls: p,
              ref: a,
              popupClassName: oe(h, { [`${p}-show-arrow`]: v }),
              popupStyle: w,
              builtinPlacements: $p,
              action: S,
              showAction: g,
              hideAction: m.value || [],
              popupPlacement: y,
              popupAlign: T,
              popupTransitionName: P,
              popupAnimation: O,
              popupVisible: i.value,
              stretch: d.value ? 'minWidth' : '',
              onPopupVisibleChange: s,
              getPopupContainer: H
            }
          ),
          { popup: u, default: c }
        );
      };
    }
  }),
  Sp = e => {
    const { componentCls: t, colorPrimary: n } = e;
    return {
      [t]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        color: `var(--wave-color, ${n})`,
        boxShadow: '0 0 0 0 currentcolor',
        opacity: 0.2,
        '&.wave-motion-appear': {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`
          ].join(','),
          '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 }
        }
      }
    };
  },
  Cp = ft('Wave', e => [Sp(e)]);
function xp(e) {
  const t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function En(e) {
  return (
    e &&
    e !== '#fff' &&
    e !== '#ffffff' &&
    e !== 'rgb(255, 255, 255)' &&
    e !== 'rgba(255, 255, 255, 1)' &&
    xp(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== 'transparent'
  );
}
function Op(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: o
  } = getComputedStyle(e);
  return En(t) ? t : En(n) ? n : En(o) ? o : null;
}
function Pn(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Tp = q({
  props: { target: De(), className: String },
  setup(e) {
    const t = z(null),
      [n, o] = Ve(null),
      [r, i] = Ve([]),
      [a, l] = Ve(0),
      [s, u] = Ve(0),
      [d, c] = Ve(0),
      [m, p] = Ve(0),
      [v, g] = Ve(!1);
    function w() {
      const { target: h } = e,
        A = getComputedStyle(h);
      o(Op(h));
      const L = A.position === 'static',
        { borderLeftWidth: x, borderTopWidth: R } = A;
      l(L ? h.offsetLeft : Pn(-parseFloat(x))),
        u(L ? h.offsetTop : Pn(-parseFloat(R))),
        c(h.offsetWidth),
        p(h.offsetHeight);
      const {
        borderTopLeftRadius: U,
        borderTopRightRadius: G,
        borderBottomLeftRadius: Q,
        borderBottomRightRadius: $
      } = A;
      i([U, G, $, Q].map(B => Pn(parseFloat(B))));
    }
    let S, y, T;
    const H = () => {
        clearTimeout(T), le.cancel(y), S == null || S.disconnect();
      },
      P = () => {
        var h;
        const A =
          (h = t.value) === null || h === void 0 ? void 0 : h.parentElement;
        A && (qt(null, A), A.parentElement && A.parentElement.removeChild(A));
      };
    Ee(() => {
      H(),
        (T = setTimeout(() => {
          P();
        }, 5e3));
      const { target: h } = e;
      h &&
        ((y = le(() => {
          w(), g(!0);
        })),
        typeof ResizeObserver < 'u' &&
          ((S = new ResizeObserver(w)), S.observe(h)));
    }),
      me(() => {
        H();
      });
    const O = h => {
      h.propertyName === 'opacity' && P();
    };
    return () => {
      if (!v.value) return null;
      const h = {
        left: `${a.value}px`,
        top: `${s.value}px`,
        width: `${d.value}px`,
        height: `${m.value}px`,
        borderRadius: r.value.map(A => `${A}px`).join(' ')
      };
      return (
        n && (h['--wave-color'] = n.value),
        b(
          pt,
          {
            appear: !0,
            name: 'wave-motion',
            appearFromClass: 'wave-motion-appear',
            appearActiveClass: 'wave-motion-appear',
            appearToClass: 'wave-motion-appear wave-motion-appear-active'
          },
          {
            default: () => [
              b(
                'div',
                { ref: t, class: e.className, style: h, onTransitionend: O },
                null
              )
            ]
          }
        )
      );
    };
  }
});
function Ip(e, t) {
  const n = document.createElement('div');
  return (
    (n.style.position = 'absolute'),
    (n.style.left = '0px'),
    (n.style.top = '0px'),
    e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild),
    qt(b(Tp, { target: e, className: t }, null), n),
    () => {
      qt(null, n), n.parentElement && n.parentElement.removeChild(n);
    }
  );
}
function Ep(e, t) {
  const n = He();
  let o;
  function r() {
    var i;
    const a = Re(n);
    o == null || o(),
      !(
        (!((i = t == null ? void 0 : t.value) === null || i === void 0) &&
          i.disabled) ||
        !a
      ) && (o = Ip(a, e.value));
  }
  return (
    me(() => {
      o == null || o();
    }),
    r
  );
}
const Pp = q({
  compatConfig: { MODE: 3 },
  name: 'Wave',
  props: { disabled: Boolean },
  setup(e, t) {
    let { slots: n } = t;
    const o = He(),
      { prefixCls: r, wave: i } = Ne('wave', e),
      [, a] = Cp(r),
      l = Ep(
        C(() => oe(r.value, a.value)),
        i
      );
    let s;
    const u = () => {
      Re(o).removeEventListener('click', s, !0);
    };
    return (
      Ee(() => {
        J(
          () => e.disabled,
          () => {
            u(),
              Te(() => {
                const d = Re(o);
                d == null || d.removeEventListener('click', s, !0),
                  !(!d || d.nodeType !== 1 || e.disabled) &&
                    ((s = c => {
                      c.target.tagName === 'INPUT' ||
                        !zi(c.target) ||
                        !d.getAttribute ||
                        d.getAttribute('disabled') ||
                        d.disabled ||
                        d.className.includes('disabled') ||
                        d.className.includes('-leave') ||
                        l();
                    }),
                    d.addEventListener('click', s, !0));
              });
          },
          { immediate: !0, flush: 'post' }
        );
      }),
      me(() => {
        u();
      }),
      () => {
        var d;
        return (d = n.default) === null || d === void 0 ? void 0 : d.call(n)[0];
      }
    );
  }
});
function Dv(e) {
  return e === 'danger' ? { danger: !0 } : { type: e };
}
const _p = () => ({
    prefixCls: String,
    type: String,
    htmlType: { type: String, default: 'button' },
    shape: { type: String },
    size: { type: String },
    loading: { type: [Boolean, Object], default: () => !1 },
    disabled: { type: Boolean, default: void 0 },
    ghost: { type: Boolean, default: void 0 },
    block: { type: Boolean, default: void 0 },
    danger: { type: Boolean, default: void 0 },
    icon: I.any,
    href: String,
    target: String,
    title: String,
    onClick: Yt(),
    onMousedown: Yt()
  }),
  Ap = _p,
  Lr = e => {
    e &&
      ((e.style.width = '0px'),
      (e.style.opacity = '0'),
      (e.style.transform = 'scale(0)'));
  },
  Fr = e => {
    Te(() => {
      e &&
        ((e.style.width = `${e.scrollWidth}px`),
        (e.style.opacity = '1'),
        (e.style.transform = 'scale(1)'));
    });
  },
  jr = e => {
    e &&
      e.style &&
      ((e.style.width = null),
      (e.style.opacity = null),
      (e.style.transform = null));
  },
  Mp = q({
    compatConfig: { MODE: 3 },
    name: 'LoadingIcon',
    props: {
      prefixCls: String,
      loading: [Boolean, Object],
      existIcon: Boolean
    },
    setup(e) {
      return () => {
        const { existIcon: t, prefixCls: n, loading: o } = e;
        if (t)
          return b('span', { class: `${n}-loading-icon` }, [b(Mo, null, null)]);
        const r = !!o;
        return b(
          pt,
          {
            name: `${n}-loading-icon-motion`,
            onBeforeEnter: Lr,
            onEnter: Fr,
            onAfterEnter: jr,
            onBeforeLeave: Fr,
            onLeave: i => {
              setTimeout(() => {
                Lr(i);
              });
            },
            onAfterLeave: jr
          },
          {
            default: () => [
              r
                ? b('span', { class: `${n}-loading-icon` }, [b(Mo, null, null)])
                : null
            ]
          }
        );
      };
    }
  }),
  Wr = (e, t) => ({
    [`> span, > ${e}`]: {
      '&:not(:last-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } }
      },
      '&:not(:first-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } }
      }
    }
  }),
  Rp = e => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: o,
      colorPrimaryHover: r,
      colorErrorHover: i
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: 'relative',
          display: 'inline-flex',
          [`> span, > ${t}`]: {
            '&:not(:last-child)': {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            '&:not(:first-child)': {
              marginInlineStart: -o,
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          },
          [t]: {
            position: 'relative',
            zIndex: 1,
            '&:hover,\n          &:focus,\n          &:active': { zIndex: 2 },
            '&[disabled]': { zIndex: 0 }
          },
          [`${t}-icon-only`]: { fontSize: n }
        },
        Wr(`${t}-primary`, r),
        Wr(`${t}-danger`, i)
      ]
    };
  },
  Dp = Rp;
function Bp(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
    '&-item': {
      '&:hover,&:focus,&:active': { zIndex: 2 },
      '&[disabled]': { zIndex: 0 }
    }
  };
}
function zp(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Np(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return { [t]: f(f({}, Bp(e, t)), zp(e.componentCls, t)) };
}
const Hp = e => {
    const { componentCls: t, iconCls: n } = e;
    return {
      [t]: {
        outline: 'none',
        position: 'relative',
        display: 'inline-block',
        fontWeight: 400,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        backgroundImage: 'none',
        backgroundColor: 'transparent',
        border: `${e.lineWidth}px ${e.lineType} transparent`,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: 'none',
        touchAction: 'manipulation',
        lineHeight: e.lineHeight,
        color: e.colorText,
        '> span': { display: 'inline-block' },
        [`> ${n} + span, > span + ${n}`]: { marginInlineStart: e.marginXS },
        '> a': { color: 'currentColor' },
        '&:not(:disabled)': f({}, ka(e)),
        [`&-icon-only${t}-compact-item`]: { flex: 'none' },
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
            position: 'relative',
            '&:before': {
              position: 'absolute',
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: 'inline-block',
              width: e.lineWidth,
              height: `calc(100% + ${e.lineWidth * 2}px)`,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        },
        '&-compact-vertical-item': {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
              position: 'relative',
              '&:before': {
                position: 'absolute',
                top: -e.lineWidth,
                insetInlineStart: -e.lineWidth,
                display: 'inline-block',
                width: `calc(100% + ${e.lineWidth * 2}px)`,
                height: e.lineWidth,
                backgroundColor: e.colorPrimaryHover,
                content: '""'
              }
            }
          }
        }
      }
    };
  },
  Ie = (e, t) => ({ '&:not(:disabled)': { '&:hover': e, '&:active': t } }),
  Lp = e => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: '50%'
  }),
  Fp = e => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.controlHeight / 2,
    paddingInlineEnd: e.controlHeight / 2
  }),
  qn = e => ({
    cursor: 'not-allowed',
    borderColor: e.colorBorder,
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    boxShadow: 'none'
  }),
  tn = (e, t, n, o, r, i, a) => ({
    [`&${e}-background-ghost`]: f(
      f(
        {
          color: t || void 0,
          backgroundColor: 'transparent',
          borderColor: n || void 0,
          boxShadow: 'none'
        },
        Ie(
          f({ backgroundColor: 'transparent' }, i),
          f({ backgroundColor: 'transparent' }, a)
        )
      ),
      {
        '&:disabled': {
          cursor: 'not-allowed',
          color: o || void 0,
          borderColor: r || void 0
        }
      }
    )
  }),
  yo = e => ({ '&:disabled': f({}, qn(e)) }),
  fa = e => f({}, yo(e)),
  nn = e => ({
    '&:disabled': { cursor: 'not-allowed', color: e.colorTextDisabled }
  }),
  pa = e =>
    f(
      f(
        f(
          f(f({}, fa(e)), {
            backgroundColor: e.colorBgContainer,
            borderColor: e.colorBorder,
            boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
          }),
          Ie(
            { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
            { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
          )
        ),
        tn(
          e.componentCls,
          e.colorBgContainer,
          e.colorBgContainer,
          e.colorTextDisabled,
          e.colorBorder
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: f(
          f(
            f(
              { color: e.colorError, borderColor: e.colorError },
              Ie(
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive }
              )
            ),
            tn(
              e.componentCls,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder
            )
          ),
          yo(e)
        )
      }
    ),
  jp = e =>
    f(
      f(
        f(
          f(f({}, fa(e)), {
            color: e.colorTextLightSolid,
            backgroundColor: e.colorPrimary,
            boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
          }),
          Ie(
            {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimaryHover
            },
            {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimaryActive
            }
          )
        ),
        tn(
          e.componentCls,
          e.colorPrimary,
          e.colorPrimary,
          e.colorTextDisabled,
          e.colorBorder,
          { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
          { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: f(
          f(
            f(
              {
                backgroundColor: e.colorError,
                boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
              },
              Ie(
                { backgroundColor: e.colorErrorHover },
                { backgroundColor: e.colorErrorActive }
              )
            ),
            tn(
              e.componentCls,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive }
            )
          ),
          yo(e)
        )
      }
    ),
  Wp = e => f(f({}, pa(e)), { borderStyle: 'dashed' }),
  Vp = e =>
    f(
      f(
        f(
          { color: e.colorLink },
          Ie({ color: e.colorLinkHover }, { color: e.colorLinkActive })
        ),
        nn(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: f(
          f(
            { color: e.colorError },
            Ie({ color: e.colorErrorHover }, { color: e.colorErrorActive })
          ),
          nn(e)
        )
      }
    ),
  Kp = e =>
    f(
      f(
        f(
          {},
          Ie(
            { color: e.colorText, backgroundColor: e.colorBgTextHover },
            { color: e.colorText, backgroundColor: e.colorBgTextActive }
          )
        ),
        nn(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: f(
          f({ color: e.colorError }, nn(e)),
          Ie(
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg }
          )
        )
      }
    ),
  Up = e => f(f({}, qn(e)), { [`&${e.componentCls}:hover`]: f({}, qn(e)) }),
  Gp = e => {
    const { componentCls: t } = e;
    return {
      [`${t}-default`]: pa(e),
      [`${t}-primary`]: jp(e),
      [`${t}-dashed`]: Wp(e),
      [`${t}-link`]: Vp(e),
      [`${t}-text`]: Kp(e),
      [`${t}-disabled`]: Up(e)
    };
  },
  $o = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const {
        componentCls: n,
        iconCls: o,
        controlHeight: r,
        fontSize: i,
        lineHeight: a,
        lineWidth: l,
        borderRadius: s,
        buttonPaddingHorizontal: u
      } = e,
      d = Math.max(0, (r - i * a) / 2 - l),
      c = u - l,
      m = `${n}-icon-only`;
    return [
      {
        [`${n}${t}`]: {
          fontSize: i,
          height: r,
          padding: `${d}px ${c}px`,
          borderRadius: s,
          [`&${m}`]: {
            width: r,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${n}-round`]: { width: 'auto' },
            '> span': { transform: 'scale(1.143)' }
          },
          [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
          },
          [`&:not(${m}) ${n}-loading-icon > ${o}`]: {
            marginInlineEnd: e.marginXS
          }
        }
      },
      { [`${n}${n}-circle${t}`]: Lp(e) },
      { [`${n}${n}-round${t}`]: Fp(e) }
    ];
  },
  Xp = e => $o(e),
  Yp = e => {
    const t = Se(e, {
      controlHeight: e.controlHeightSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: 8,
      borderRadius: e.borderRadiusSM
    });
    return $o(t, `${e.componentCls}-sm`);
  },
  qp = e => {
    const t = Se(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    });
    return $o(t, `${e.componentCls}-lg`);
  },
  kp = e => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: '100%' } } };
  },
  Zp = ft('Button', e => {
    const { controlTmpOutline: t, paddingContentHorizontal: n } = e,
      o = Se(e, { colorOutlineDefault: t, buttonPaddingHorizontal: n });
    return [
      Hp(o),
      Yp(o),
      Xp(o),
      qp(o),
      kp(o),
      Gp(o),
      Dp(o),
      ua(e, { focus: !1 }),
      Np(e)
    ];
  }),
  Qp = () => ({ prefixCls: String, size: { type: String } }),
  ma = ho(),
  kn = q({
    compatConfig: { MODE: 3 },
    name: 'AButtonGroup',
    props: Qp(),
    setup(e, t) {
      let { slots: n } = t;
      const { prefixCls: o, direction: r } = Ne('btn-group', e),
        [, , i] = Za();
      ma.useProvide(to({ size: C(() => e.size) }));
      const a = C(() => {
        const { size: l } = e;
        let s = '';
        switch (l) {
          case 'large':
            s = 'lg';
            break;
          case 'small':
            s = 'sm';
            break;
          case 'middle':
          case void 0:
            break;
          default:
            lt(!l, 'Button.Group', 'Invalid prop `size`.');
        }
        return {
          [`${o.value}`]: !0,
          [`${o.value}-${s}`]: s,
          [`${o.value}-rtl`]: r.value === 'rtl',
          [i.value]: !0
        };
      });
      return () => {
        var l;
        return b('div', { class: a.value }, [
          Ye((l = n.default) === null || l === void 0 ? void 0 : l.call(n))
        ]);
      };
    }
  }),
  Vr = /^[\u4e00-\u9fa5]{2}$/,
  Kr = Vr.test.bind(Vr);
function jt(e) {
  return e === 'text' || e === 'link';
}
const Gt = q({
  compatConfig: { MODE: 3 },
  name: 'AButton',
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: mi(Ap(), { type: 'default' }),
  slots: Object,
  setup(e, t) {
    let { slots: n, attrs: o, emit: r, expose: i } = t;
    const {
        prefixCls: a,
        autoInsertSpaceInButton: l,
        direction: s,
        size: u
      } = Ne('btn', e),
      [d, c] = Zp(a),
      m = ma.useInject(),
      p = di(),
      v = C(() => {
        var $;
        return ($ = e.disabled) !== null && $ !== void 0 ? $ : p.value;
      }),
      g = z(null),
      w = z(void 0);
    let S = !1;
    const y = z(!1),
      T = z(!1),
      H = C(() => l.value !== !1),
      { compactSize: P, compactItemClassnames: O } = Cf(a, s),
      h = C(() =>
        typeof e.loading == 'object' && e.loading.delay
          ? e.loading.delay || !0
          : !!e.loading
      );
    J(
      h,
      $ => {
        clearTimeout(w.value),
          typeof h.value == 'number'
            ? (w.value = setTimeout(() => {
                y.value = $;
              }, h.value))
            : (y.value = $);
      },
      { immediate: !0 }
    );
    const A = C(() => {
        const {
            type: $,
            shape: B = 'default',
            ghost: V,
            block: X,
            danger: _
          } = e,
          N = a.value,
          D = { large: 'lg', small: 'sm', middle: void 0 },
          Y = P.value || (m == null ? void 0 : m.size) || u.value,
          Z = (Y && D[Y]) || '';
        return [
          O.value,
          {
            [c.value]: !0,
            [`${N}`]: !0,
            [`${N}-${B}`]: B !== 'default' && B,
            [`${N}-${$}`]: $,
            [`${N}-${Z}`]: Z,
            [`${N}-loading`]: y.value,
            [`${N}-background-ghost`]: V && !jt($),
            [`${N}-two-chinese-chars`]: T.value && H.value,
            [`${N}-block`]: X,
            [`${N}-dangerous`]: !!_,
            [`${N}-rtl`]: s.value === 'rtl'
          }
        ];
      }),
      L = () => {
        const $ = g.value;
        if (!$ || l.value === !1) return;
        const B = $.textContent;
        S && Kr(B) ? T.value || (T.value = !0) : T.value && (T.value = !1);
      },
      x = $ => {
        if (y.value || v.value) {
          $.preventDefault();
          return;
        }
        r('click', $);
      },
      R = $ => {
        r('mousedown', $);
      },
      U = ($, B) => {
        const V = B ? ' ' : '';
        if ($.type === ll) {
          let X = $.children.trim();
          return Kr(X) && (X = X.split('').join(V)), b('span', null, [X]);
        }
        return $;
      };
    return (
      Oe(() => {
        lt(
          !(e.ghost && jt(e.type)),
          'Button',
          "`link` or `text` button can't be a `ghost` button."
        );
      }),
      Ee(L),
      sn(L),
      me(() => {
        w.value && clearTimeout(w.value);
      }),
      i({
        focus: () => {
          var $;
          ($ = g.value) === null || $ === void 0 || $.focus();
        },
        blur: () => {
          var $;
          ($ = g.value) === null || $ === void 0 || $.blur();
        }
      }),
      () => {
        var $, B;
        const {
            icon: V = ($ = n.icon) === null || $ === void 0 ? void 0 : $.call(n)
          } = e,
          X = Ye((B = n.default) === null || B === void 0 ? void 0 : B.call(n));
        S = X.length === 1 && !V && !jt(e.type);
        const { type: _, htmlType: N, href: D, title: Y, target: Z } = e,
          fe = y.value ? 'loading' : V,
          de = f(f({}, o), {
            title: Y,
            disabled: v.value,
            class: [
              A.value,
              o.class,
              { [`${a.value}-icon-only`]: X.length === 0 && !!fe }
            ],
            onClick: x,
            onMousedown: R
          });
        v.value || delete de.disabled;
        const ue =
            V && !y.value
              ? V
              : b(
                  Mp,
                  { existIcon: !!V, prefixCls: a.value, loading: !!y.value },
                  null
                ),
          E = X.map(k => U(k, S && H.value));
        if (D !== void 0)
          return d(
            b('a', M(M({}, de), {}, { href: D, target: Z, ref: g }), [ue, E])
          );
        let j = b('button', M(M({}, de), {}, { ref: g, type: N }), [ue, E]);
        if (!jt(_)) {
          const k = (function() {
            return j;
          })();
          j = b(
            Pp,
            { ref: 'wave', disabled: !!y.value },
            { default: () => [k] }
          );
        }
        return d(j);
      }
    );
  }
});
Gt.Group = kn;
Gt.install = function(e) {
  return e.component(Gt.name, Gt), e.component(kn.name, kn), e;
};
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      o.forEach(function(r) {
        Jp(e, r, n[r]);
      });
  }
  return e;
}
function Jp(e, t, n) {
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
var wo = function(t, n) {
  var o = Ur({}, t, n.attrs);
  return b(Mt, Ur({}, o, { icon: fl }), null);
};
wo.displayName = 'EllipsisOutlined';
wo.inheritAttrs = !1;
const em = wo;
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      o.forEach(function(r) {
        tm(e, r, n[r]);
      });
  }
  return e;
}
function tm(e, t, n) {
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
var So = function(t, n) {
  var o = Gr({}, t, n.attrs);
  return b(Mt, Gr({}, o, { icon: pl }), null);
};
So.displayName = 'RightOutlined';
So.inheritAttrs = !1;
const Bv = So,
  va = Symbol('OverrideContextKey'),
  ga = () => ye(va, void 0),
  zv = e => {
    var t, n, o;
    const {
      prefixCls: r,
      mode: i,
      selectable: a,
      validator: l,
      onClick: s,
      expandIcon: u
    } = ga() || {};
    Ce(va, {
      prefixCls: C(() => {
        var d, c;
        return (c =
          (d = e.prefixCls) === null || d === void 0 ? void 0 : d.value) !==
          null && c !== void 0
          ? c
          : r == null
          ? void 0
          : r.value;
      }),
      mode: C(() => {
        var d, c;
        return (c =
          (d = e.mode) === null || d === void 0 ? void 0 : d.value) !== null &&
          c !== void 0
          ? c
          : i == null
          ? void 0
          : i.value;
      }),
      selectable: C(() => {
        var d, c;
        return (c =
          (d = e.selectable) === null || d === void 0 ? void 0 : d.value) !==
          null && c !== void 0
          ? c
          : a == null
          ? void 0
          : a.value;
      }),
      validator: (t = e.validator) !== null && t !== void 0 ? t : l,
      onClick: (n = e.onClick) !== null && n !== void 0 ? n : s,
      expandIcon:
        (o = e.expandIcon) !== null && o !== void 0
          ? o
          : u == null
          ? void 0
          : u.value
    });
  };
function nm(e, t, n, o) {
  let r = n ? n.call(o, e, t) : void 0;
  if (r !== void 0) return !!r;
  if (e === t) return !0;
  if (typeof e != 'object' || !e || typeof t != 'object' || !t) return !1;
  const i = Object.keys(e),
    a = Object.keys(t);
  if (i.length !== a.length) return !1;
  const l = Object.prototype.hasOwnProperty.bind(t);
  for (let s = 0; s < i.length; s++) {
    const u = i[s];
    if (!l(u)) return !1;
    const d = e[u],
      c = t[u];
    if (
      ((r = n ? n.call(o, d, c, u) : void 0),
      r === !1 || (r === void 0 && d !== c))
    )
      return !1;
  }
  return !0;
}
function bt(e, t) {
  return nm(Nn(e), Nn(t));
}
const ha = Symbol('menuContextKey'),
  ba = e => {
    Ce(ha, e);
  },
  Ae = () => ye(ha),
  ya = Symbol('ForceRenderKey'),
  om = e => {
    Ce(ya, e);
  },
  $a = () => ye(ya, !1),
  wa = Symbol('menuFirstLevelContextKey'),
  Sa = e => {
    Ce(wa, e);
  },
  rm = () => ye(wa, !0),
  on = q({
    compatConfig: { MODE: 3 },
    name: 'MenuContextProvider',
    inheritAttrs: !1,
    props: {
      mode: { type: String, default: void 0 },
      overflowDisabled: { type: Boolean, default: void 0 }
    },
    setup(e, t) {
      let { slots: n } = t;
      const o = Ae(),
        r = f({}, o);
      return (
        e.mode !== void 0 && (r.mode = zn(e, 'mode')),
        e.overflowDisabled !== void 0 &&
          (r.overflowDisabled = zn(e, 'overflowDisabled')),
        ba(r),
        () => {
          var i;
          return (i = n.default) === null || i === void 0 ? void 0 : i.call(n);
        }
      );
    }
  }),
  im = ba,
  am = Symbol('siderCollapsed'),
  Wt = '$$__vc-menu-more__key',
  Ca = Symbol('KeyPathContext'),
  Co = () =>
    ye(Ca, {
      parentEventKeys: C(() => []),
      parentKeys: C(() => []),
      parentInfo: {}
    }),
  lm = (e, t, n) => {
    const { parentEventKeys: o, parentKeys: r } = Co(),
      i = C(() => [...o.value, e]),
      a = C(() => [...r.value, t]);
    return Ce(Ca, { parentEventKeys: i, parentKeys: a, parentInfo: n }), a;
  },
  xa = Symbol('measure'),
  Xr = q({
    compatConfig: { MODE: 3 },
    setup(e, t) {
      let { slots: n } = t;
      return (
        Ce(xa, !0),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    }
  }),
  xo = () => ye(xa, !1),
  sm = lm;
function Oa(e) {
  const { mode: t, rtl: n, inlineIndent: o } = Ae();
  return C(() =>
    t.value !== 'inline'
      ? null
      : n.value
      ? { paddingRight: `${e.value * o.value}px` }
      : { paddingLeft: `${e.value * o.value}px` }
  );
}
let um = 0;
const cm = () => ({
    id: String,
    role: String,
    disabled: Boolean,
    danger: Boolean,
    title: { type: [String, Boolean], default: void 0 },
    icon: I.any,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function,
    originItemValue: De()
  }),
  At = q({
    compatConfig: { MODE: 3 },
    name: 'AMenuItem',
    inheritAttrs: !1,
    props: cm(),
    slots: Object,
    setup(e, t) {
      let { slots: n, emit: o, attrs: r } = t;
      const i = He(),
        a = xo(),
        l = typeof i.vnode.key == 'symbol' ? String(i.vnode.key) : i.vnode.key;
      lt(
        typeof i.vnode.key != 'symbol',
        'MenuItem',
        `MenuItem \`:key="${String(l)}"\` not support Symbol type`
      );
      const s = `menu_item_${++um}_$$_${l}`,
        { parentEventKeys: u, parentKeys: d } = Co(),
        {
          prefixCls: c,
          activeKeys: m,
          disabled: p,
          changeActiveKeys: v,
          rtl: g,
          inlineCollapsed: w,
          siderCollapsed: S,
          onItemClick: y,
          selectedKeys: T,
          registerMenuInfo: H,
          unRegisterMenuInfo: P
        } = Ae(),
        O = rm(),
        h = z(!1),
        A = C(() => [...d.value, l]);
      H(s, {
        eventKey: s,
        key: l,
        parentEventKeys: u,
        parentKeys: d,
        isLeaf: !0
      }),
        me(() => {
          P(s);
        }),
        J(
          m,
          () => {
            h.value = !!m.value.find(D => D === l);
          },
          { immediate: !0 }
        );
      const x = C(() => p.value || e.disabled),
        R = C(() => T.value.includes(l)),
        U = C(() => {
          const D = `${c.value}-item`;
          return {
            [`${D}`]: !0,
            [`${D}-danger`]: e.danger,
            [`${D}-active`]: h.value,
            [`${D}-selected`]: R.value,
            [`${D}-disabled`]: x.value
          };
        }),
        G = D => ({
          key: l,
          eventKey: s,
          keyPath: A.value,
          eventKeyPath: [...u.value, s],
          domEvent: D,
          item: f(f({}, e), r)
        }),
        Q = D => {
          if (x.value) return;
          const Y = G(D);
          o('click', D), y(Y);
        },
        $ = D => {
          x.value || (v(A.value), o('mouseenter', D));
        },
        B = D => {
          x.value || (v([]), o('mouseleave', D));
        },
        V = D => {
          if ((o('keydown', D), D.which === Bd.ENTER)) {
            const Y = G(D);
            o('click', D), y(Y);
          }
        },
        X = D => {
          v(A.value), o('focus', D);
        },
        _ = (D, Y) => {
          const Z = b('span', { class: `${c.value}-title-content` }, [Y]);
          return (!D || (eo(Y) && Y.type === 'span')) &&
            Y &&
            w.value &&
            O &&
            typeof Y == 'string'
            ? b('div', { class: `${c.value}-inline-collapsed-noicon` }, [
                Y.charAt(0)
              ])
            : Z;
        },
        N = Oa(C(() => A.value.length));
      return () => {
        var D, Y, Z, fe, de;
        if (a) return null;
        const ue =
            (D = e.title) !== null && D !== void 0
              ? D
              : (Y = n.title) === null || Y === void 0
              ? void 0
              : Y.call(n),
          E = Ye((Z = n.default) === null || Z === void 0 ? void 0 : Z.call(n)),
          j = E.length;
        let k = ue;
        typeof ue > 'u' ? (k = O && j ? E : '') : ue === !1 && (k = '');
        const re = { title: k };
        !S.value && !w.value && ((re.title = null), (re.open = !1));
        const ie = {};
        e.role === 'option' && (ie['aria-selected'] = R.value);
        const te =
          (fe = e.icon) !== null && fe !== void 0
            ? fe
            : (de = n.icon) === null || de === void 0
            ? void 0
            : de.call(n, e);
        return b(
          bp,
          M(
            M({}, re),
            {},
            {
              placement: g.value ? 'left' : 'right',
              overlayClassName: `${c.value}-inline-collapsed-tooltip`
            }
          ),
          {
            default: () => [
              b(
                Ct.Item,
                M(
                  M(
                    M({ component: 'li' }, r),
                    {},
                    {
                      id: e.id,
                      style: f(f({}, r.style || {}), N.value),
                      class: [
                        U.value,
                        {
                          [`${r.class}`]: !!r.class,
                          [`${c.value}-item-only-child`]: (te ? j + 1 : j) === 1
                        }
                      ],
                      role: e.role || 'menuitem',
                      tabindex: e.disabled ? null : -1,
                      'data-menu-id': l,
                      'aria-disabled': e.disabled
                    },
                    ie
                  ),
                  {},
                  {
                    onMouseenter: $,
                    onMouseleave: B,
                    onClick: Q,
                    onKeydown: V,
                    onFocus: X,
                    title: typeof ue == 'string' ? ue : void 0
                  }
                ),
                {
                  default: () => [
                    $e(
                      typeof te == 'function' ? te(e.originItemValue) : te,
                      { class: `${c.value}-item-icon` },
                      !1
                    ),
                    _(te, E)
                  ]
                }
              )
            ]
          }
        );
      };
    }
  }),
  Be = { adjustX: 1, adjustY: 1 },
  dm = {
    topLeft: { points: ['bl', 'tl'], overflow: Be, offset: [0, -7] },
    bottomLeft: { points: ['tl', 'bl'], overflow: Be, offset: [0, 7] },
    leftTop: { points: ['tr', 'tl'], overflow: Be, offset: [-4, 0] },
    rightTop: { points: ['tl', 'tr'], overflow: Be, offset: [4, 0] }
  },
  fm = {
    topLeft: { points: ['bl', 'tl'], overflow: Be, offset: [0, -7] },
    bottomLeft: { points: ['tl', 'bl'], overflow: Be, offset: [0, 7] },
    rightTop: { points: ['tr', 'tl'], overflow: Be, offset: [-4, 0] },
    leftTop: { points: ['tl', 'tr'], overflow: Be, offset: [4, 0] }
  },
  pm = {
    horizontal: 'bottomLeft',
    vertical: 'rightTop',
    'vertical-left': 'rightTop',
    'vertical-right': 'leftTop'
  },
  Yr = q({
    compatConfig: { MODE: 3 },
    name: 'PopupTrigger',
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      mode: String,
      visible: Boolean,
      popupClassName: String,
      popupOffset: Array,
      disabled: Boolean,
      onVisibleChange: Function
    },
    slots: Object,
    emits: ['visibleChange'],
    setup(e, t) {
      let { slots: n, emit: o } = t;
      const r = z(!1),
        {
          getPopupContainer: i,
          rtl: a,
          subMenuOpenDelay: l,
          subMenuCloseDelay: s,
          builtinPlacements: u,
          triggerSubMenuAction: d,
          forceSubMenuRender: c,
          motion: m,
          defaultMotions: p,
          rootClassName: v
        } = Ae(),
        g = $a(),
        w = C(() => (a.value ? f(f({}, fm), u.value) : f(f({}, dm), u.value))),
        S = C(() => pm[e.mode]),
        y = z();
      J(
        () => e.visible,
        P => {
          le.cancel(y.value),
            (y.value = le(() => {
              r.value = P;
            }));
        },
        { immediate: !0 }
      ),
        me(() => {
          le.cancel(y.value);
        });
      const T = P => {
          o('visibleChange', P);
        },
        H = C(() => {
          var P, O;
          const h =
              m.value ||
              ((P = p.value) === null || P === void 0 ? void 0 : P[e.mode]) ||
              ((O = p.value) === null || O === void 0 ? void 0 : O.other),
            A = typeof h == 'function' ? h() : h;
          return A ? ci(A.name, { css: !0 }) : void 0;
        });
      return () => {
        const {
          prefixCls: P,
          popupClassName: O,
          mode: h,
          popupOffset: A,
          disabled: L
        } = e;
        return b(
          vo,
          {
            prefixCls: P,
            popupClassName: oe(
              `${P}-popup`,
              { [`${P}-rtl`]: a.value },
              O,
              v.value
            ),
            stretch: h === 'horizontal' ? 'minWidth' : null,
            getPopupContainer: i.value,
            builtinPlacements: w.value,
            popupPlacement: S.value,
            popupVisible: r.value,
            popupAlign: A && { offset: A },
            action: L ? [] : [d.value],
            mouseEnterDelay: l.value,
            mouseLeaveDelay: s.value,
            onPopupVisibleChange: T,
            forceRender: g || c.value,
            popupAnimation: H.value
          },
          { popup: n.popup, default: n.default }
        );
      };
    }
  }),
  Ta = (e, t) => {
    let { slots: n, attrs: o } = t;
    var r;
    const { prefixCls: i, mode: a } = Ae();
    return b(
      'ul',
      M(
        M({}, o),
        {},
        {
          class: oe(
            i.value,
            `${i.value}-sub`,
            `${i.value}-${a.value === 'inline' ? 'inline' : 'vertical'}`
          ),
          'data-menu-list': !0
        }
      ),
      [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)]
    );
  };
Ta.displayName = 'SubMenuList';
const Ia = Ta,
  mm = q({
    compatConfig: { MODE: 3 },
    name: 'InlineSubMenuList',
    inheritAttrs: !1,
    props: { id: String, open: Boolean, keyPath: Array },
    setup(e, t) {
      let { slots: n } = t;
      const o = C(() => 'inline'),
        { motion: r, mode: i, defaultMotions: a } = Ae(),
        l = C(() => i.value === o.value),
        s = W(!l.value),
        u = C(() => (l.value ? e.open : !1));
      J(
        i,
        () => {
          l.value && (s.value = !1);
        },
        { flush: 'post' }
      );
      const d = C(() => {
        var c, m;
        const p =
            r.value ||
            ((c = a.value) === null || c === void 0 ? void 0 : c[o.value]) ||
            ((m = a.value) === null || m === void 0 ? void 0 : m.other),
          v = typeof p == 'function' ? p() : p;
        return f(f({}, v), { appear: e.keyPath.length <= 1 });
      });
      return () => {
        var c;
        return s.value
          ? null
          : b(
              on,
              { mode: o.value },
              {
                default: () => [
                  b(pt, d.value, {
                    default: () => [
                      oo(
                        b(
                          Ia,
                          { id: e.id },
                          {
                            default: () => [
                              (c = n.default) === null || c === void 0
                                ? void 0
                                : c.call(n)
                            ]
                          }
                        ),
                        [[pi, u.value]]
                      )
                    ]
                  })
                ]
              }
            );
      };
    }
  });
let qr = 0;
const vm = () => ({
    icon: I.any,
    title: I.any,
    disabled: Boolean,
    level: Number,
    popupClassName: String,
    popupOffset: Array,
    internalPopupClose: Boolean,
    eventKey: String,
    expandIcon: Function,
    theme: String,
    onMouseenter: Function,
    onMouseleave: Function,
    onTitleClick: Function,
    originItemValue: De()
  }),
  ct = q({
    compatConfig: { MODE: 3 },
    name: 'ASubMenu',
    inheritAttrs: !1,
    props: vm(),
    slots: Object,
    setup(e, t) {
      let { slots: n, attrs: o, emit: r } = t;
      var i, a;
      Sa(!1);
      const l = xo(),
        s = He(),
        u = typeof s.vnode.key == 'symbol' ? String(s.vnode.key) : s.vnode.key;
      lt(
        typeof s.vnode.key != 'symbol',
        'SubMenu',
        `SubMenu \`:key="${String(u)}"\` not support Symbol type`
      );
      const d = Ro(u) ? u : `sub_menu_${++qr}_$$_not_set_key`,
        c =
          (i = e.eventKey) !== null && i !== void 0
            ? i
            : Ro(u)
            ? `sub_menu_${++qr}_$$_${u}`
            : d,
        { parentEventKeys: m, parentInfo: p, parentKeys: v } = Co(),
        g = C(() => [...v.value, d]),
        w = z([]),
        S = {
          eventKey: c,
          key: d,
          parentEventKeys: m,
          childrenEventKeys: w,
          parentKeys: v
        };
      (a = p.childrenEventKeys) === null || a === void 0 || a.value.push(c),
        me(() => {
          var ee;
          p.childrenEventKeys &&
            (p.childrenEventKeys.value =
              (ee = p.childrenEventKeys) === null || ee === void 0
                ? void 0
                : ee.value.filter(ce => ce != c));
        }),
        sm(c, d, S);
      const {
          prefixCls: y,
          activeKeys: T,
          disabled: H,
          changeActiveKeys: P,
          mode: O,
          inlineCollapsed: h,
          openKeys: A,
          overflowDisabled: L,
          onOpenChange: x,
          registerMenuInfo: R,
          unRegisterMenuInfo: U,
          selectedSubMenuKeys: G,
          expandIcon: Q,
          theme: $
        } = Ae(),
        B = u != null,
        V = !l && ($a() || !B);
      om(V),
        ((l && B) || (!l && !B) || V) &&
          (R(c, S),
          me(() => {
            U(c);
          }));
      const X = C(() => `${y.value}-submenu`),
        _ = C(() => H.value || e.disabled),
        N = z(),
        D = z(),
        Y = C(() => A.value.includes(d)),
        Z = C(() => !L.value && Y.value),
        fe = C(() => G.value.includes(d)),
        de = z(!1);
      J(
        T,
        () => {
          de.value = !!T.value.find(ee => ee === d);
        },
        { immediate: !0 }
      );
      const ue = ee => {
          _.value ||
            (r('titleClick', ee, d), O.value === 'inline' && x(d, !Y.value));
        },
        E = ee => {
          _.value || (P(g.value), r('mouseenter', ee));
        },
        j = ee => {
          _.value || (P([]), r('mouseleave', ee));
        },
        k = Oa(C(() => g.value.length)),
        re = ee => {
          O.value !== 'inline' && x(d, ee);
        },
        ie = () => {
          P(g.value);
        },
        te = c && `${c}-popup`,
        pe = C(() =>
          oe(y.value, `${y.value}-${e.theme || $.value}`, e.popupClassName)
        ),
        ae = (ee, ce) => {
          if (!ce)
            return h.value && !v.value.length && ee && typeof ee == 'string'
              ? b('div', { class: `${y.value}-inline-collapsed-noicon` }, [
                  ee.charAt(0)
                ])
              : b('span', { class: `${y.value}-title-content` }, [ee]);
          const Me = eo(ee) && ee.type === 'span';
          return b(Ge, null, [
            $e(
              typeof ce == 'function' ? ce(e.originItemValue) : ce,
              { class: `${y.value}-item-icon` },
              !1
            ),
            Me ? ee : b('span', { class: `${y.value}-title-content` }, [ee])
          ]);
        },
        ve = C(() =>
          O.value !== 'inline' && g.value.length > 1 ? 'vertical' : O.value
        ),
        Le = C(() => (O.value === 'horizontal' ? 'vertical' : O.value)),
        Na = C(() => (ve.value === 'horizontal' ? 'vertical' : ve.value)),
        Eo = () => {
          var ee, ce;
          const Me = X.value,
            gn =
              (ee = e.icon) !== null && ee !== void 0
                ? ee
                : (ce = n.icon) === null || ce === void 0
                ? void 0
                : ce.call(n, e),
            Po = e.expandIcon || n.expandIcon || Q.value,
            hn = ae(Jn(n, e, 'title'), gn);
          return b(
            'div',
            {
              style: k.value,
              class: `${Me}-title`,
              tabindex: _.value ? null : -1,
              ref: N,
              title: typeof hn == 'string' ? hn : null,
              'data-menu-id': d,
              'aria-expanded': Z.value,
              'aria-haspopup': !0,
              'aria-controls': te,
              'aria-disabled': _.value,
              onClick: ue,
              onFocus: ie
            },
            [
              hn,
              O.value !== 'horizontal' && Po
                ? Po(f(f({}, e), { isOpen: Z.value }))
                : b('i', { class: `${Me}-arrow` }, null)
            ]
          );
        };
      return () => {
        var ee;
        if (l)
          return B
            ? (ee = n.default) === null || ee === void 0
              ? void 0
              : ee.call(n)
            : null;
        const ce = X.value;
        let Me = () => null;
        if (!L.value && O.value !== 'inline') {
          const gn = O.value === 'horizontal' ? [0, 8] : [10, 0];
          Me = () =>
            b(
              Yr,
              {
                mode: ve.value,
                prefixCls: ce,
                visible: !e.internalPopupClose && Z.value,
                popupClassName: pe.value,
                popupOffset: e.popupOffset || gn,
                disabled: _.value,
                onVisibleChange: re
              },
              {
                default: () => [Eo()],
                popup: () =>
                  b(
                    on,
                    { mode: Na.value },
                    {
                      default: () => [
                        b(Ia, { id: te, ref: D }, { default: n.default })
                      ]
                    }
                  )
              }
            );
        } else Me = () => b(Yr, null, { default: Eo });
        return b(
          on,
          { mode: Le.value },
          {
            default: () => [
              b(
                Ct.Item,
                M(
                  M({ component: 'li' }, o),
                  {},
                  {
                    role: 'none',
                    class: oe(ce, `${ce}-${O.value}`, o.class, {
                      [`${ce}-open`]: Z.value,
                      [`${ce}-active`]: de.value,
                      [`${ce}-selected`]: fe.value,
                      [`${ce}-disabled`]: _.value
                    }),
                    onMouseenter: E,
                    onMouseleave: j,
                    'data-submenu-id': d
                  }
                ),
                {
                  default: () =>
                    b(Ge, null, [
                      Me(),
                      !L.value &&
                        b(
                          mm,
                          { id: te, open: Z.value, keyPath: g.value },
                          { default: n.default }
                        )
                    ])
                }
              )
            ]
          }
        );
      };
    }
  });
function Ea(e, t) {
  return e.classList
    ? e.classList.contains(t)
    : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function kr(e, t) {
  e.classList
    ? e.classList.add(t)
    : Ea(e, t) || (e.className = `${e.className} ${t}`);
}
function Zr(e, t) {
  if (e.classList) e.classList.remove(t);
  else if (Ea(e, t)) {
    const n = e.className;
    e.className = ` ${n} `.replace(` ${t} `, ' ');
  }
}
const gm = function() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : 'ant-motion-collapse',
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return {
      name: e,
      appear: t,
      css: !0,
      onBeforeEnter: n => {
        (n.style.height = '0px'), (n.style.opacity = '0'), kr(n, e);
      },
      onEnter: n => {
        Te(() => {
          (n.style.height = `${n.scrollHeight}px`), (n.style.opacity = '1');
        });
      },
      onAfterEnter: n => {
        n && (Zr(n, e), (n.style.height = null), (n.style.opacity = null));
      },
      onBeforeLeave: n => {
        kr(n, e),
          (n.style.height = `${n.offsetHeight}px`),
          (n.style.opacity = null);
      },
      onLeave: n => {
        setTimeout(() => {
          (n.style.height = '0px'), (n.style.opacity = '0');
        });
      },
      onAfterLeave: n => {
        n &&
          (Zr(n, e),
          n.style && ((n.style.height = null), (n.style.opacity = null)));
      }
    };
  },
  hm = gm,
  bm = () => ({ title: I.any, originItemValue: De() }),
  rn = q({
    compatConfig: { MODE: 3 },
    name: 'AMenuItemGroup',
    inheritAttrs: !1,
    props: bm(),
    slots: Object,
    setup(e, t) {
      let { slots: n, attrs: o } = t;
      const { prefixCls: r } = Ae(),
        i = C(() => `${r.value}-item-group`),
        a = xo();
      return () => {
        var l, s;
        return a
          ? (l = n.default) === null || l === void 0
            ? void 0
            : l.call(n)
          : b(
              'li',
              M(
                M({}, o),
                {},
                { onClick: u => u.stopPropagation(), class: i.value }
              ),
              [
                b(
                  'div',
                  {
                    title: typeof e.title == 'string' ? e.title : void 0,
                    class: `${i.value}-title`
                  },
                  [Jn(n, e, 'title')]
                ),
                b('ul', { class: `${i.value}-list` }, [
                  (s = n.default) === null || s === void 0 ? void 0 : s.call(n)
                ])
              ]
            );
      };
    }
  }),
  ym = () => ({ prefixCls: String, dashed: Boolean }),
  an = q({
    compatConfig: { MODE: 3 },
    name: 'AMenuDivider',
    props: ym(),
    setup(e) {
      const { prefixCls: t } = Ae(),
        n = C(() => ({
          [`${t.value}-item-divider`]: !0,
          [`${t.value}-item-divider-dashed`]: !!e.dashed
        }));
      return () => b('li', { class: n.value }, null);
    }
  });
var $m =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
        t.indexOf(o[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
          (n[o[r]] = e[o[r]]);
    return n;
  };
function Zn(e, t, n) {
  return (e || [])
    .map((o, r) => {
      if (o && typeof o == 'object') {
        const i = o,
          { label: a, children: l, key: s, type: u } = i,
          d = $m(i, ['label', 'children', 'key', 'type']),
          c = s ?? `tmp-${r}`,
          m = n ? n.parentKeys.slice() : [],
          p = [],
          v = {
            eventKey: c,
            key: c,
            parentEventKeys: W(m),
            parentKeys: W(m),
            childrenEventKeys: W(p),
            isLeaf: !1
          };
        if (l || u === 'group') {
          if (u === 'group') {
            const w = Zn(l, t, n);
            return b(
              rn,
              M(M({ key: c }, d), {}, { title: a, originItemValue: o }),
              { default: () => [w] }
            );
          }
          t.set(c, v), n && n.childrenEventKeys.push(c);
          const g = Zn(l, t, {
            childrenEventKeys: p,
            parentKeys: [].concat(m, c)
          });
          return b(
            ct,
            M(M({ key: c }, d), {}, { title: a, originItemValue: o }),
            { default: () => [g] }
          );
        }
        return u === 'divider'
          ? b(an, M({ key: c }, d), null)
          : ((v.isLeaf = !0),
            t.set(c, v),
            b(At, M(M({ key: c }, d), {}, { originItemValue: o }), {
              default: () => [a]
            }));
      }
      return null;
    })
    .filter(o => o);
}
function wm(e) {
  const t = z([]),
    n = z(!1),
    o = z(new Map());
  return (
    J(
      () => e.items,
      () => {
        const r = new Map();
        (n.value = !1),
          e.items
            ? ((n.value = !0), (t.value = Zn(e.items, r)))
            : (t.value = void 0),
          (o.value = r);
      },
      { immediate: !0, deep: !0 }
    ),
    { itemsNodes: t, store: o, hasItmes: n }
  );
}
const Sm = e => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      menuHorizontalHeight: o,
      colorSplit: r,
      lineWidth: i,
      lineType: a,
      menuItemPaddingInline: l
    } = e;
    return {
      [`${t}-horizontal`]: {
        lineHeight: `${o}px`,
        border: 0,
        borderBottom: `${i}px ${a} ${r}`,
        boxShadow: 'none',
        '&::after': {
          display: 'block',
          clear: 'both',
          height: 0,
          content: '"\\20"'
        },
        [`${t}-item, ${t}-submenu`]: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'bottom',
          paddingInline: l
        },
        [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
          backgroundColor: 'transparent'
        },
        [`${t}-item, ${t}-submenu-title`]: {
          transition: [`border-color ${n}`, `background ${n}`].join(',')
        },
        [`${t}-submenu-arrow`]: { display: 'none' }
      }
    };
  },
  Cm = Sm,
  xm = e => {
    let { componentCls: t, menuArrowOffset: n } = e;
    return {
      [`${t}-rtl`]: { direction: 'rtl' },
      [`${t}-submenu-rtl`]: { transformOrigin: '100% 0' },
      [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
        [`${t}-submenu-arrow`]: {
          '&::before': { transform: `rotate(-45deg) translateY(-${n})` },
          '&::after': { transform: `rotate(45deg) translateY(${n})` }
        }
      }
    };
  },
  Om = xm,
  Qr = e => f({}, Qa(e)),
  Tm = (e, t) => {
    const {
      componentCls: n,
      colorItemText: o,
      colorItemTextSelected: r,
      colorGroupTitle: i,
      colorItemBg: a,
      colorSubItemBg: l,
      colorItemBgSelected: s,
      colorActiveBarHeight: u,
      colorActiveBarWidth: d,
      colorActiveBarBorderSize: c,
      motionDurationSlow: m,
      motionEaseInOut: p,
      motionEaseOut: v,
      menuItemPaddingInline: g,
      motionDurationMid: w,
      colorItemTextHover: S,
      lineType: y,
      colorSplit: T,
      colorItemTextDisabled: H,
      colorDangerItemText: P,
      colorDangerItemTextHover: O,
      colorDangerItemTextSelected: h,
      colorDangerItemBgActive: A,
      colorDangerItemBgSelected: L,
      colorItemBgHover: x,
      menuSubMenuBg: R,
      colorItemTextSelectedHorizontal: U,
      colorItemBgSelectedHorizontal: G
    } = e;
    return {
      [`${n}-${t}`]: {
        color: o,
        background: a,
        [`&${n}-root:focus-visible`]: f({}, Qr(e)),
        [`${n}-item-group-title`]: { color: i },
        [`${n}-submenu-selected`]: { [`> ${n}-submenu-title`]: { color: r } },
        [`${n}-item-disabled, ${n}-submenu-disabled`]: {
          color: `${H} !important`
        },
        [`${n}-item:hover, ${n}-submenu-title:hover`]: {
          [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: { color: S }
        },
        [`&:not(${n}-horizontal)`]: {
          [`${n}-item:not(${n}-item-selected)`]: {
            '&:hover': { backgroundColor: x },
            '&:active': { backgroundColor: s }
          },
          [`${n}-submenu-title`]: {
            '&:hover': { backgroundColor: x },
            '&:active': { backgroundColor: s }
          }
        },
        [`${n}-item-danger`]: {
          color: P,
          [`&${n}-item:hover`]: {
            [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
              color: O
            }
          },
          [`&${n}-item:active`]: { background: A }
        },
        [`${n}-item a`]: { '&, &:hover': { color: 'inherit' } },
        [`${n}-item-selected`]: {
          color: r,
          [`&${n}-item-danger`]: { color: h },
          'a, a:hover': { color: 'inherit' }
        },
        [`& ${n}-item-selected`]: {
          backgroundColor: s,
          [`&${n}-item-danger`]: { backgroundColor: L }
        },
        [`${n}-item, ${n}-submenu-title`]: {
          [`&:not(${n}-item-disabled):focus-visible`]: f({}, Qr(e))
        },
        [`&${n}-submenu > ${n}`]: { backgroundColor: R },
        [`&${n}-popup > ${n}`]: { backgroundColor: a },
        [`&${n}-horizontal`]: f(
          f({}, t === 'dark' ? { borderBottom: 0 } : {}),
          {
            [`> ${n}-item, > ${n}-submenu`]: {
              top: c,
              marginTop: -c,
              marginBottom: 0,
              borderRadius: 0,
              '&::after': {
                position: 'absolute',
                insetInline: g,
                bottom: 0,
                borderBottom: `${u}px solid transparent`,
                transition: `border-color ${m} ${p}`,
                content: '""'
              },
              '&:hover, &-active, &-open': {
                '&::after': { borderBottomWidth: u, borderBottomColor: U }
              },
              '&-selected': {
                color: U,
                backgroundColor: G,
                '&::after': { borderBottomWidth: u, borderBottomColor: U }
              }
            }
          }
        ),
        [`&${n}-root`]: {
          [`&${n}-inline, &${n}-vertical`]: {
            borderInlineEnd: `${c}px ${y} ${T}`
          }
        },
        [`&${n}-inline`]: {
          [`${n}-sub${n}-inline`]: { background: l },
          [`${n}-item, ${n}-submenu-title`]:
            c && d ? { width: `calc(100% + ${c}px)` } : {},
          [`${n}-item`]: {
            position: 'relative',
            '&::after': {
              position: 'absolute',
              insetBlock: 0,
              insetInlineEnd: 0,
              borderInlineEnd: `${d}px solid ${r}`,
              transform: 'scaleY(0.0001)',
              opacity: 0,
              transition: [`transform ${w} ${v}`, `opacity ${w} ${v}`].join(
                ','
              ),
              content: '""'
            },
            [`&${n}-item-danger`]: { '&::after': { borderInlineEndColor: h } }
          },
          [`${n}-selected, ${n}-item-selected`]: {
            '&::after': {
              transform: 'scaleY(1)',
              opacity: 1,
              transition: [`transform ${w} ${p}`, `opacity ${w} ${p}`].join(',')
            }
          }
        }
      }
    };
  },
  Jr = Tm,
  ei = e => {
    const {
        componentCls: t,
        menuItemHeight: n,
        itemMarginInline: o,
        padding: r,
        menuArrowSize: i,
        marginXS: a,
        marginXXS: l
      } = e,
      s = r + i + a;
    return {
      [`${t}-item`]: { position: 'relative' },
      [`${t}-item, ${t}-submenu-title`]: {
        height: n,
        lineHeight: `${n}px`,
        paddingInline: r,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginInline: o,
        marginBlock: l,
        width: `calc(100% - ${o * 2}px)`
      },
      [`${t}-submenu`]: { paddingBottom: 0.02 },
      [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
        height: n,
        lineHeight: `${n}px`
      },
      [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: { paddingInlineEnd: s }
    };
  },
  Im = e => {
    const {
        componentCls: t,
        iconCls: n,
        menuItemHeight: o,
        colorTextLightSolid: r,
        dropdownWidth: i,
        controlHeightLG: a,
        motionDurationMid: l,
        motionEaseOut: s,
        paddingXL: u,
        fontSizeSM: d,
        fontSizeLG: c,
        motionDurationSlow: m,
        paddingXS: p,
        boxShadowSecondary: v
      } = e,
      g = {
        height: o,
        lineHeight: `${o}px`,
        listStylePosition: 'inside',
        listStyleType: 'disc'
      };
    return [
      {
        [t]: {
          '&-inline, &-vertical': f(
            { [`&${t}-root`]: { boxShadow: 'none' } },
            ei(e)
          )
        },
        [`${t}-submenu-popup`]: {
          [`${t}-vertical`]: f(f({}, ei(e)), { boxShadow: v })
        }
      },
      {
        [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
          minWidth: i,
          maxHeight: `calc(100vh - ${a * 2.5}px)`,
          padding: '0',
          overflow: 'hidden',
          borderInlineEnd: 0,
          "&:not([class*='-active'])": {
            overflowX: 'hidden',
            overflowY: 'auto'
          }
        }
      },
      {
        [`${t}-inline`]: {
          width: '100%',
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu-title`]: {
              display: 'flex',
              alignItems: 'center',
              transition: [
                `border-color ${m}`,
                `background ${m}`,
                `padding ${l} ${s}`
              ].join(','),
              [`> ${t}-title-content`]: {
                flex: 'auto',
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              },
              '> *': { flex: 'none' }
            }
          },
          [`${t}-sub${t}-inline`]: {
            padding: 0,
            border: 0,
            borderRadius: 0,
            boxShadow: 'none',
            [`& > ${t}-submenu > ${t}-submenu-title`]: g,
            [`& ${t}-item-group-title`]: { paddingInlineStart: u }
          },
          [`${t}-item`]: g
        }
      },
      {
        [`${t}-inline-collapsed`]: {
          width: o * 2,
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
              [`> ${t}-inline-collapsed-noicon`]: {
                fontSize: c,
                textAlign: 'center'
              }
            }
          },
          [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
            insetInlineStart: 0,
            paddingInline: `calc(50% - ${d}px)`,
            textOverflow: 'clip',
            [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: { opacity: 0 },
            [`${t}-item-icon, ${n}`]: {
              margin: 0,
              fontSize: c,
              lineHeight: `${o}px`,
              '+ span': { display: 'inline-block', opacity: 0 }
            }
          },
          [`${t}-item-icon, ${n}`]: { display: 'inline-block' },
          '&-tooltip': {
            pointerEvents: 'none',
            [`${t}-item-icon, ${n}`]: { display: 'none' },
            'a, a:hover': { color: r }
          },
          [`${t}-item-group-title`]: f(f({}, Ja), { paddingInline: p })
        }
      }
    ];
  },
  Em = Im,
  ti = e => {
    const {
      componentCls: t,
      fontSize: n,
      motionDurationSlow: o,
      motionDurationMid: r,
      motionEaseInOut: i,
      motionEaseOut: a,
      iconCls: l,
      controlHeightSM: s
    } = e;
    return {
      [`${t}-item, ${t}-submenu-title`]: {
        position: 'relative',
        display: 'block',
        margin: 0,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: [
          `border-color ${o}`,
          `background ${o}`,
          `padding ${o} ${i}`
        ].join(','),
        [`${t}-item-icon, ${l}`]: {
          minWidth: n,
          fontSize: n,
          transition: [
            `font-size ${r} ${a}`,
            `margin ${o} ${i}`,
            `color ${o}`
          ].join(','),
          '+ span': {
            marginInlineStart: s - n,
            opacity: 1,
            transition: [`opacity ${o} ${i}`, `margin ${o}`, `color ${o}`].join(
              ','
            )
          }
        },
        [`${t}-item-icon`]: f({}, el()),
        [`&${t}-item-only-child`]: {
          [`> ${l}, > ${t}-item-icon`]: { marginInlineEnd: 0 }
        }
      },
      [`${t}-item-disabled, ${t}-submenu-disabled`]: {
        background: 'none !important',
        cursor: 'not-allowed',
        '&::after': { borderColor: 'transparent !important' },
        a: { color: 'inherit !important' },
        [`> ${t}-submenu-title`]: {
          color: 'inherit !important',
          cursor: 'not-allowed'
        }
      }
    };
  },
  ni = e => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      motionEaseInOut: o,
      borderRadius: r,
      menuArrowSize: i,
      menuArrowOffset: a
    } = e;
    return {
      [`${t}-submenu`]: {
        '&-expand-icon, &-arrow': {
          position: 'absolute',
          top: '50%',
          insetInlineEnd: e.margin,
          width: i,
          color: 'currentcolor',
          transform: 'translateY(-50%)',
          transition: `transform ${n} ${o}, opacity ${n}`
        },
        '&-arrow': {
          '&::before, &::after': {
            position: 'absolute',
            width: i * 0.6,
            height: i * 0.15,
            backgroundColor: 'currentcolor',
            borderRadius: r,
            transition: [
              `background ${n} ${o}`,
              `transform ${n} ${o}`,
              `top ${n} ${o}`,
              `color ${n} ${o}`
            ].join(','),
            content: '""'
          },
          '&::before': { transform: `rotate(45deg) translateY(-${a})` },
          '&::after': { transform: `rotate(-45deg) translateY(${a})` }
        }
      }
    };
  },
  Pm = e => {
    const {
      antCls: t,
      componentCls: n,
      fontSize: o,
      motionDurationSlow: r,
      motionDurationMid: i,
      motionEaseInOut: a,
      lineHeight: l,
      paddingXS: s,
      padding: u,
      colorSplit: d,
      lineWidth: c,
      zIndexPopup: m,
      borderRadiusLG: p,
      radiusSubMenuItem: v,
      menuArrowSize: g,
      menuArrowOffset: w,
      lineType: S,
      menuPanelMaskInset: y
    } = e;
    return [
      {
        '': { [`${n}`]: f(f({}, Bn()), { '&-hidden': { display: 'none' } }) },
        [`${n}-submenu-hidden`]: { display: 'none' }
      },
      {
        [n]: f(
          f(
            f(
              f(
                f(f(f({}, ln(e)), Bn()), {
                  marginBottom: 0,
                  paddingInlineStart: 0,
                  fontSize: o,
                  lineHeight: 0,
                  listStyle: 'none',
                  outline: 'none',
                  transition: `width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,
                  'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                  '&-overflow': {
                    display: 'flex',
                    [`${n}-item`]: { flex: 'none' }
                  },
                  [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
                    borderRadius: e.radiusItem
                  },
                  [`${n}-item-group-title`]: {
                    padding: `${s}px ${u}px`,
                    fontSize: o,
                    lineHeight: l,
                    transition: `all ${r}`
                  },
                  [`&-horizontal ${n}-submenu`]: {
                    transition: [
                      `border-color ${r} ${a}`,
                      `background ${r} ${a}`
                    ].join(',')
                  },
                  [`${n}-submenu, ${n}-submenu-inline`]: {
                    transition: [
                      `border-color ${r} ${a}`,
                      `background ${r} ${a}`,
                      `padding ${i} ${a}`
                    ].join(',')
                  },
                  [`${n}-submenu ${n}-sub`]: {
                    cursor: 'initial',
                    transition: [
                      `background ${r} ${a}`,
                      `padding ${r} ${a}`
                    ].join(',')
                  },
                  [`${n}-title-content`]: { transition: `color ${r}` },
                  [`${n}-item a`]: {
                    '&::before': {
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'transparent',
                      content: '""'
                    }
                  },
                  [`${n}-item-divider`]: {
                    overflow: 'hidden',
                    lineHeight: 0,
                    borderColor: d,
                    borderStyle: S,
                    borderWidth: 0,
                    borderTopWidth: c,
                    marginBlock: c,
                    padding: 0,
                    '&-dashed': { borderStyle: 'dashed' }
                  }
                }),
                ti(e)
              ),
              {
                [`${n}-item-group`]: {
                  [`${n}-item-group-list`]: {
                    margin: 0,
                    padding: 0,
                    [`${n}-item, ${n}-submenu-title`]: {
                      paddingInline: `${o * 2}px ${u}px`
                    }
                  }
                },
                '&-submenu': {
                  '&-popup': {
                    position: 'absolute',
                    zIndex: m,
                    background: 'transparent',
                    borderRadius: p,
                    boxShadow: 'none',
                    transformOrigin: '0 0',
                    '&::before': {
                      position: 'absolute',
                      inset: `${y}px 0 0`,
                      zIndex: -1,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      content: '""'
                    }
                  },
                  '&-placement-rightTop::before': {
                    top: 0,
                    insetInlineStart: y
                  },
                  [`> ${n}`]: f(f(f({ borderRadius: p }, ti(e)), ni(e)), {
                    [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
                      borderRadius: v
                    },
                    [`${n}-submenu-title::after`]: {
                      transition: `transform ${r} ${a}`
                    }
                  })
                }
              }
            ),
            ni(e)
          ),
          {
            [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
              '&::before': { transform: `rotate(-45deg) translateX(${w})` },
              '&::after': { transform: `rotate(45deg) translateX(-${w})` }
            },
            [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]: {
              transform: `translateY(-${g * 0.2}px)`,
              '&::after': { transform: `rotate(-45deg) translateX(-${w})` },
              '&::before': { transform: `rotate(45deg) translateX(${w})` }
            }
          }
        )
      },
      { [`${t}-layout-header`]: { [n]: { lineHeight: 'inherit' } } }
    ];
  },
  _m = (e, t) =>
    ft(
      'Menu',
      (o, r) => {
        let { overrideComponentToken: i } = r;
        if ((t == null ? void 0 : t.value) === !1) return [];
        const {
            colorBgElevated: a,
            colorPrimary: l,
            colorError: s,
            colorErrorHover: u,
            colorTextLightSolid: d
          } = o,
          { controlHeightLG: c, fontSize: m } = o,
          p = (m / 7) * 5,
          v = Se(o, {
            menuItemHeight: c,
            menuItemPaddingInline: o.margin,
            menuArrowSize: p,
            menuHorizontalHeight: c * 1.15,
            menuArrowOffset: `${p * 0.25}px`,
            menuPanelMaskInset: -7,
            menuSubMenuBg: a
          }),
          g = new Bo(d).setAlpha(0.65).toRgbString(),
          w = Se(
            v,
            {
              colorItemText: g,
              colorItemTextHover: d,
              colorGroupTitle: g,
              colorItemTextSelected: d,
              colorItemBg: '#001529',
              colorSubItemBg: '#000c17',
              colorItemBgActive: 'transparent',
              colorItemBgSelected: l,
              colorActiveBarWidth: 0,
              colorActiveBarHeight: 0,
              colorActiveBarBorderSize: 0,
              colorItemTextDisabled: new Bo(d).setAlpha(0.25).toRgbString(),
              colorDangerItemText: s,
              colorDangerItemTextHover: u,
              colorDangerItemTextSelected: d,
              colorDangerItemBgActive: s,
              colorDangerItemBgSelected: s,
              menuSubMenuBg: '#001529',
              colorItemTextSelectedHorizontal: d,
              colorItemBgSelectedHorizontal: l
            },
            f({}, i)
          );
        return [
          Pm(v),
          Cm(v),
          Em(v),
          Jr(v, 'light'),
          Jr(w, 'dark'),
          Om(v),
          qf(v),
          Rr(v, 'slide-up'),
          Rr(v, 'slide-down'),
          sa(v, 'zoom-big')
        ];
      },
      o => {
        const {
          colorPrimary: r,
          colorError: i,
          colorTextDisabled: a,
          colorErrorBg: l,
          colorText: s,
          colorTextDescription: u,
          colorBgContainer: d,
          colorFillAlter: c,
          colorFillContent: m,
          lineWidth: p,
          lineWidthBold: v,
          controlItemBgActive: g,
          colorBgTextHover: w
        } = o;
        return {
          dropdownWidth: 160,
          zIndexPopup: o.zIndexPopupBase + 50,
          radiusItem: o.borderRadiusLG,
          radiusSubMenuItem: o.borderRadiusSM,
          colorItemText: s,
          colorItemTextHover: s,
          colorItemTextHoverHorizontal: r,
          colorGroupTitle: u,
          colorItemTextSelected: r,
          colorItemTextSelectedHorizontal: r,
          colorItemBg: d,
          colorItemBgHover: w,
          colorItemBgActive: m,
          colorSubItemBg: c,
          colorItemBgSelected: g,
          colorItemBgSelectedHorizontal: 'transparent',
          colorActiveBarWidth: 0,
          colorActiveBarHeight: v,
          colorActiveBarBorderSize: p,
          colorItemTextDisabled: a,
          colorDangerItemText: i,
          colorDangerItemTextHover: i,
          colorDangerItemTextSelected: i,
          colorDangerItemBgActive: l,
          colorDangerItemBgSelected: l,
          itemMarginInline: o.marginXXS
        };
      }
    )(e),
  Am = () => ({
    id: String,
    prefixCls: String,
    items: Array,
    disabled: Boolean,
    inlineCollapsed: Boolean,
    disabledOverflow: Boolean,
    forceSubMenuRender: Boolean,
    openKeys: Array,
    selectedKeys: Array,
    activeKey: String,
    selectable: { type: Boolean, default: !0 },
    multiple: { type: Boolean, default: !1 },
    tabindex: { type: [Number, String] },
    motion: Object,
    role: String,
    theme: { type: String, default: 'light' },
    mode: { type: String, default: 'vertical' },
    inlineIndent: { type: Number, default: 24 },
    subMenuOpenDelay: { type: Number, default: 0 },
    subMenuCloseDelay: { type: Number, default: 0.1 },
    builtinPlacements: { type: Object },
    triggerSubMenuAction: { type: String, default: 'hover' },
    getPopupContainer: Function,
    expandIcon: Function,
    onOpenChange: Function,
    onSelect: Function,
    onDeselect: Function,
    onClick: [Function, Array],
    onFocus: Function,
    onBlur: Function,
    onMousedown: Function,
    'onUpdate:openKeys': Function,
    'onUpdate:selectedKeys': Function,
    'onUpdate:activeKey': Function
  }),
  oi = [],
  Ue = q({
    compatConfig: { MODE: 3 },
    name: 'AMenu',
    inheritAttrs: !1,
    props: Am(),
    slots: Object,
    setup(e, t) {
      let { slots: n, emit: o, attrs: r } = t;
      const { direction: i, getPrefixCls: a } = Ne('menu', e),
        l = ga(),
        s = C(() => {
          var E;
          return a(
            'menu',
            e.prefixCls ||
              ((E = l == null ? void 0 : l.prefixCls) === null || E === void 0
                ? void 0
                : E.value)
          );
        }),
        [u, d] = _m(
          s,
          C(() => !l)
        ),
        c = z(new Map()),
        m = ye(am, W(void 0)),
        p = C(() => (m.value !== void 0 ? m.value : e.inlineCollapsed)),
        { itemsNodes: v } = wm(e),
        g = z(!1);
      Ee(() => {
        g.value = !0;
      }),
        Oe(() => {
          lt(
            !(e.inlineCollapsed === !0 && e.mode !== 'inline'),
            'Menu',
            '`inlineCollapsed` should only be used when `mode` is inline.'
          ),
            lt(
              !(m.value !== void 0 && e.inlineCollapsed === !0),
              'Menu',
              '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.'
            );
        });
      const w = W([]),
        S = W([]),
        y = W({});
      J(
        c,
        () => {
          const E = {};
          for (const j of c.value.values()) E[j.key] = j;
          y.value = E;
        },
        { flush: 'post' }
      ),
        Oe(() => {
          if (e.activeKey !== void 0) {
            let E = [];
            const j = e.activeKey ? y.value[e.activeKey] : void 0;
            j && e.activeKey !== void 0
              ? (E = In([].concat(yt(j.parentKeys), e.activeKey)))
              : (E = []),
              bt(w.value, E) || (w.value = E);
          }
        }),
        J(
          () => e.selectedKeys,
          E => {
            E && (S.value = E.slice());
          },
          { immediate: !0, deep: !0 }
        );
      const T = W([]);
      J(
        [y, S],
        () => {
          let E = [];
          S.value.forEach(j => {
            const k = y.value[j];
            k && (E = E.concat(yt(k.parentKeys)));
          }),
            (E = In(E)),
            bt(T.value, E) || (T.value = E);
        },
        { immediate: !0 }
      );
      const H = E => {
          if (e.selectable) {
            const { key: j } = E,
              k = S.value.includes(j);
            let re;
            e.multiple
              ? k
                ? (re = S.value.filter(te => te !== j))
                : (re = [...S.value, j])
              : (re = [j]);
            const ie = f(f({}, E), { selectedKeys: re });
            bt(re, S.value) ||
              (e.selectedKeys === void 0 && (S.value = re),
              o('update:selectedKeys', re),
              k && e.multiple ? o('deselect', ie) : o('select', ie));
          }
          x.value !== 'inline' && !e.multiple && P.value.length && G(oi);
        },
        P = W([]);
      J(
        () => e.openKeys,
        function() {
          let E =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : P.value;
          bt(P.value, E) || (P.value = E.slice());
        },
        { immediate: !0, deep: !0 }
      );
      let O;
      const h = E => {
          clearTimeout(O),
            (O = setTimeout(() => {
              e.activeKey === void 0 && (w.value = E),
                o('update:activeKey', E[E.length - 1]);
            }));
        },
        A = C(() => !!e.disabled),
        L = C(() => i.value === 'rtl'),
        x = W('vertical'),
        R = z(!1);
      Oe(() => {
        var E;
        (e.mode === 'inline' || e.mode === 'vertical') && p.value
          ? ((x.value = 'vertical'), (R.value = p.value))
          : ((x.value = e.mode), (R.value = !1)),
          !((E = l == null ? void 0 : l.mode) === null || E === void 0) &&
            E.value &&
            (x.value = l.mode.value);
      });
      const U = C(() => x.value === 'inline'),
        G = E => {
          (P.value = E), o('update:openKeys', E), o('openChange', E);
        },
        Q = W(P.value),
        $ = z(!1);
      J(
        P,
        () => {
          U.value && (Q.value = P.value);
        },
        { immediate: !0 }
      ),
        J(
          U,
          () => {
            if (!$.value) {
              $.value = !0;
              return;
            }
            U.value ? (P.value = Q.value) : G(oi);
          },
          { immediate: !0 }
        );
      const B = C(() => ({
          [`${s.value}`]: !0,
          [`${s.value}-root`]: !0,
          [`${s.value}-${x.value}`]: !0,
          [`${s.value}-inline-collapsed`]: R.value,
          [`${s.value}-rtl`]: L.value,
          [`${s.value}-${e.theme}`]: !0
        })),
        V = C(() => a()),
        X = C(() => ({
          horizontal: { name: `${V.value}-slide-up` },
          inline: hm(`${V.value}-motion-collapse`),
          other: { name: `${V.value}-zoom-big` }
        }));
      Sa(!0);
      const _ = function() {
          let E =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          const j = [],
            k = c.value;
          return (
            E.forEach(re => {
              const { key: ie, childrenEventKeys: te } = k.get(re);
              j.push(ie, ..._(yt(te)));
            }),
            j
          );
        },
        N = E => {
          var j;
          o('click', E),
            H(E),
            (j = l == null ? void 0 : l.onClick) === null ||
              j === void 0 ||
              j.call(l);
        },
        D = (E, j) => {
          var k;
          const re =
            ((k = y.value[E]) === null || k === void 0
              ? void 0
              : k.childrenEventKeys) || [];
          let ie = P.value.filter(te => te !== E);
          if (j) ie.push(E);
          else if (x.value !== 'inline') {
            const te = _(yt(re));
            ie = In(ie.filter(pe => !te.includes(pe)));
          }
          bt(P, ie) || G(ie);
        },
        Y = (E, j) => {
          c.value.set(E, j), (c.value = new Map(c.value));
        },
        Z = E => {
          c.value.delete(E), (c.value = new Map(c.value));
        },
        fe = W(0),
        de = C(() => {
          var E;
          return e.expandIcon ||
            n.expandIcon ||
            (!(
              (E = l == null ? void 0 : l.expandIcon) === null || E === void 0
            ) &&
              E.value)
            ? j => {
                let k = e.expandIcon || n.expandIcon;
                return (
                  (k = typeof k == 'function' ? k(j) : k),
                  $e(k, { class: `${s.value}-submenu-expand-icon` }, !1)
                );
              }
            : null;
        });
      im({
        prefixCls: s,
        activeKeys: w,
        openKeys: P,
        selectedKeys: S,
        changeActiveKeys: h,
        disabled: A,
        rtl: L,
        mode: x,
        inlineIndent: C(() => e.inlineIndent),
        subMenuCloseDelay: C(() => e.subMenuCloseDelay),
        subMenuOpenDelay: C(() => e.subMenuOpenDelay),
        builtinPlacements: C(() => e.builtinPlacements),
        triggerSubMenuAction: C(() => e.triggerSubMenuAction),
        getPopupContainer: C(() => e.getPopupContainer),
        inlineCollapsed: R,
        theme: C(() => e.theme),
        siderCollapsed: m,
        defaultMotions: C(() => (g.value ? X.value : null)),
        motion: C(() => (g.value ? e.motion : null)),
        overflowDisabled: z(void 0),
        onOpenChange: D,
        onItemClick: N,
        registerMenuInfo: Y,
        unRegisterMenuInfo: Z,
        selectedSubMenuKeys: T,
        expandIcon: de,
        forceSubMenuRender: C(() => e.forceSubMenuRender),
        rootClassName: d
      });
      const ue = () => {
        var E;
        return (
          v.value ||
          Ye((E = n.default) === null || E === void 0 ? void 0 : E.call(n))
        );
      };
      return () => {
        var E;
        const j = ue(),
          k =
            fe.value >= j.length - 1 ||
            x.value !== 'horizontal' ||
            e.disabledOverflow,
          re = te =>
            x.value !== 'horizontal' || e.disabledOverflow
              ? te
              : te.map((pe, ae) =>
                  b(
                    on,
                    { key: pe.key, overflowDisabled: ae > fe.value },
                    { default: () => pe }
                  )
                ),
          ie =
            ((E = n.overflowedIndicator) === null || E === void 0
              ? void 0
              : E.call(n)) || b(em, null, null);
        return u(
          b(
            Ct,
            M(
              M({}, r),
              {},
              {
                onMousedown: e.onMousedown,
                prefixCls: `${s.value}-overflow`,
                component: 'ul',
                itemComponent: At,
                class: [B.value, r.class, d.value],
                role: 'menu',
                id: e.id,
                data: re(j),
                renderRawItem: te => te,
                renderRawRest: te => {
                  const pe = te.length,
                    ae = pe ? j.slice(-pe) : null;
                  return b(Ge, null, [
                    b(
                      ct,
                      {
                        eventKey: Wt,
                        key: Wt,
                        title: ie,
                        disabled: k,
                        internalPopupClose: pe === 0
                      },
                      { default: () => ae }
                    ),
                    b(Xr, null, {
                      default: () => [
                        b(
                          ct,
                          {
                            eventKey: Wt,
                            key: Wt,
                            title: ie,
                            disabled: k,
                            internalPopupClose: pe === 0
                          },
                          { default: () => ae }
                        )
                      ]
                    })
                  ]);
                },
                maxCount:
                  x.value !== 'horizontal' || e.disabledOverflow
                    ? Ct.INVALIDATE
                    : Ct.RESPONSIVE,
                ssr: 'full',
                'data-menu-list': !0,
                onVisibleChange: te => {
                  fe.value = te;
                }
              }
            ),
            {
              default: () => [
                b(
                  sl,
                  { to: 'body' },
                  {
                    default: () => [
                      b(
                        'div',
                        { style: { display: 'none' }, 'aria-hidden': !0 },
                        [b(Xr, null, { default: () => [re(ue())] })]
                      )
                    ]
                  }
                )
              ]
            }
          )
        );
      };
    }
  });
Ue.install = function(e) {
  return (
    e.component(Ue.name, Ue),
    e.component(At.name, At),
    e.component(ct.name, ct),
    e.component(an.name, an),
    e.component(rn.name, rn),
    e
  );
};
Ue.Item = At;
Ue.Divider = an;
Ue.SubMenu = ct;
Ue.ItemGroup = rn;
const Mm = e => ({
    '&::-moz-placeholder': { opacity: 1 },
    '&::placeholder': { color: e, userSelect: 'none' },
    '&:placeholder-shown': { textOverflow: 'ellipsis' }
  }),
  Oo = e => ({
    borderColor: e.inputBorderHoverColor,
    borderInlineEndWidth: e.lineWidth
  }),
  Qn = e => ({
    borderColor: e.inputBorderHoverColor,
    boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
    borderInlineEndWidth: e.lineWidth,
    outline: 0
  }),
  Rm = e => ({
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    borderColor: e.colorBorder,
    boxShadow: 'none',
    cursor: 'not-allowed',
    opacity: 1,
    '&:hover': f({}, Oo(Se(e, { inputBorderHoverColor: e.colorBorder })))
  }),
  Pa = e => {
    const {
      inputPaddingVerticalLG: t,
      fontSizeLG: n,
      lineHeightLG: o,
      borderRadiusLG: r,
      inputPaddingHorizontalLG: i
    } = e;
    return {
      padding: `${t}px ${i}px`,
      fontSize: n,
      lineHeight: o,
      borderRadius: r
    };
  },
  _a = e => ({
    padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM -
      1}px`,
    borderRadius: e.borderRadiusSM
  }),
  Aa = (e, t) => {
    const {
      componentCls: n,
      colorError: o,
      colorWarning: r,
      colorErrorOutline: i,
      colorWarningOutline: a,
      colorErrorBorderHover: l,
      colorWarningBorderHover: s
    } = e;
    return {
      [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
        borderColor: o,
        '&:hover': { borderColor: l },
        '&:focus, &-focused': f(
          {},
          Qn(
            Se(e, {
              inputBorderActiveColor: o,
              inputBorderHoverColor: o,
              controlOutline: i
            })
          )
        ),
        [`${n}-prefix`]: { color: o }
      },
      [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
        borderColor: r,
        '&:hover': { borderColor: s },
        '&:focus, &-focused': f(
          {},
          Qn(
            Se(e, {
              inputBorderActiveColor: r,
              inputBorderHoverColor: r,
              controlOutline: a
            })
          )
        ),
        [`${n}-prefix`]: { color: r }
      }
    };
  },
  Ma = e =>
    f(
      f(
        {
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          minWidth: 0,
          padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
          color: e.colorText,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          backgroundColor: e.colorBgContainer,
          backgroundImage: 'none',
          borderWidth: e.lineWidth,
          borderStyle: e.lineType,
          borderColor: e.colorBorder,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationMid}`
        },
        Mm(e.colorTextPlaceholder)
      ),
      {
        '&:hover': f({}, Oo(e)),
        '&:focus, &-focused': f({}, Qn(e)),
        '&-disabled, &[disabled]': f({}, Rm(e)),
        '&-borderless': {
          '&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none'
          }
        },
        'textarea&': {
          maxWidth: '100%',
          height: 'auto',
          minHeight: e.controlHeight,
          lineHeight: e.lineHeight,
          verticalAlign: 'bottom',
          transition: `all ${e.motionDurationSlow}, height 0s`,
          resize: 'vertical'
        },
        '&-lg': f({}, Pa(e)),
        '&-sm': f({}, _a(e)),
        '&-rtl': { direction: 'rtl' },
        '&-textarea-rtl': { direction: 'rtl' }
      }
    ),
  Dm = e => {
    const { componentCls: t, antCls: n } = e;
    return {
      position: 'relative',
      display: 'table',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      "&[class*='col-']": {
        paddingInlineEnd: e.paddingXS,
        '&:last-child': { paddingInlineEnd: 0 }
      },
      [`&-lg ${t}, &-lg > ${t}-group-addon`]: f({}, Pa(e)),
      [`&-sm ${t}, &-sm > ${t}-group-addon`]: f({}, _a(e)),
      [`> ${t}`]: {
        display: 'table-cell',
        '&:not(:first-child):not(:last-child)': { borderRadius: 0 }
      },
      [`${t}-group`]: {
        '&-addon, &-wrap': {
          display: 'table-cell',
          width: 1,
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          '&:not(:first-child):not(:last-child)': { borderRadius: 0 }
        },
        '&-wrap > *': { display: 'block !important' },
        '&-addon': {
          position: 'relative',
          padding: `0 ${e.inputPaddingHorizontal}px`,
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          textAlign: 'center',
          backgroundColor: e.colorFillAlter,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationSlow}`,
          lineHeight: 1,
          [`${n}-select`]: {
            margin: `-${e.inputPaddingVertical + 1}px -${
              e.inputPaddingHorizontal
            }px`,
            [`&${n}-select-single:not(${n}-select-customize-input)`]: {
              [`${n}-select-selector`]: {
                backgroundColor: 'inherit',
                border: `${e.lineWidth}px ${e.lineType} transparent`,
                boxShadow: 'none'
              }
            },
            '&-open, &-focused': {
              [`${n}-select-selector`]: { color: e.colorPrimary }
            }
          },
          [`${n}-cascader-picker`]: {
            margin: `-9px -${e.inputPaddingHorizontal}px`,
            backgroundColor: 'transparent',
            [`${n}-cascader-input`]: {
              textAlign: 'start',
              border: 0,
              boxShadow: 'none'
            }
          }
        },
        '&-addon:first-child': { borderInlineEnd: 0 },
        '&-addon:last-child': { borderInlineStart: 0 }
      },
      [`${t}`]: {
        float: 'inline-start',
        width: '100%',
        marginBottom: 0,
        textAlign: 'inherit',
        '&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
        '&:hover': {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${t}-search-with-button &`]: { zIndex: 0 }
        }
      },
      [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`> ${t}-affix-wrapper`]: {
        [`&:not(:first-child) ${t}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        },
        [`&:not(:last-child) ${t}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`${t}-affix-wrapper`]: {
        '&:not(:last-child)': {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${t}-search &`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius
          }
        },
        [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&${t}-group-compact`]: f(f({ display: 'block' }, Bn()), {
        [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
          '&:not(:first-child):not(:last-child)': {
            borderInlineEndWidth: e.lineWidth,
            '&:hover': { zIndex: 1 },
            '&:focus': { zIndex: 1 }
          }
        },
        '& > *': {
          display: 'inline-block',
          float: 'none',
          verticalAlign: 'top',
          borderRadius: 0
        },
        [`& > ${t}-affix-wrapper`]: { display: 'inline-flex' },
        [`& > ${n}-picker-range`]: { display: 'inline-flex' },
        '& > *:not(:last-child)': {
          marginInlineEnd: -e.lineWidth,
          borderInlineEndWidth: e.lineWidth
        },
        [`${t}`]: { float: 'none' },
        [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
          borderInlineEndWidth: e.lineWidth,
          borderRadius: 0,
          '&:hover': { zIndex: 1 },
          '&:focus': { zIndex: 1 }
        },
        [`& > ${n}-select-focused`]: { zIndex: 1 },
        [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
        [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        },
        [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
          borderInlineEndWidth: e.lineWidth,
          borderStartEndRadius: e.borderRadius,
          borderEndEndRadius: e.borderRadius
        },
        [`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: 'top' },
        [`${t}-group-wrapper + ${t}-group-wrapper`]: {
          marginInlineStart: -e.lineWidth,
          [`${t}-affix-wrapper`]: { borderRadius: 0 }
        },
        [`${t}-group-wrapper:not(:last-child)`]: {
          [`&${t}-search > ${t}-group`]: {
            [`& > ${t}-group-addon > ${t}-search-button`]: { borderRadius: 0 },
            [`& > ${t}`]: {
              borderStartStartRadius: e.borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: e.borderRadius
            }
          }
        }
      }),
      [`&&-sm ${n}-btn`]: {
        fontSize: e.fontSizeSM,
        height: e.controlHeightSM,
        lineHeight: 'normal'
      },
      [`&&-lg ${n}-btn`]: {
        fontSize: e.fontSizeLG,
        height: e.controlHeightLG,
        lineHeight: 'normal'
      },
      [`&&-lg ${n}-select-single ${n}-select-selector`]: {
        height: `${e.controlHeightLG}px`,
        [`${n}-select-selection-item, ${n}-select-selection-placeholder`]: {
          lineHeight: `${e.controlHeightLG - 2}px`
        },
        [`${n}-select-selection-search-input`]: {
          height: `${e.controlHeightLG}px`
        }
      },
      [`&&-sm ${n}-select-single ${n}-select-selector`]: {
        height: `${e.controlHeightSM}px`,
        [`${n}-select-selection-item, ${n}-select-selection-placeholder`]: {
          lineHeight: `${e.controlHeightSM - 2}px`
        },
        [`${n}-select-selection-search-input`]: {
          height: `${e.controlHeightSM}px`
        }
      }
    };
  },
  Bm = e => {
    const { componentCls: t, controlHeightSM: n, lineWidth: o } = e,
      r = 16,
      i = (n - o * 2 - r) / 2;
    return {
      [t]: f(f(f(f({}, ln(e)), Ma(e)), Aa(e, t)), {
        '&[type="color"]': {
          height: e.controlHeight,
          [`&${t}-lg`]: { height: e.controlHeightLG },
          [`&${t}-sm`]: { height: n, paddingTop: i, paddingBottom: i }
        }
      })
    };
  },
  zm = e => {
    const { componentCls: t } = e;
    return {
      [`${t}-clear-icon`]: {
        margin: 0,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        verticalAlign: -1,
        cursor: 'pointer',
        transition: `color ${e.motionDurationSlow}`,
        '&:hover': { color: e.colorTextTertiary },
        '&:active': { color: e.colorText },
        '&-hidden': { visibility: 'hidden' },
        '&-has-suffix': { margin: `0 ${e.inputAffixPadding}px` }
      },
      '&-textarea-with-clear-btn': {
        padding: '0 !important',
        border: '0 !important',
        [`${t}-clear-icon`]: {
          position: 'absolute',
          insetBlockStart: e.paddingXS,
          insetInlineEnd: e.paddingXS,
          zIndex: 1
        }
      }
    };
  },
  Nm = e => {
    const {
      componentCls: t,
      inputAffixPadding: n,
      colorTextDescription: o,
      motionDurationSlow: r,
      colorIcon: i,
      colorIconHover: a,
      iconCls: l
    } = e;
    return {
      [`${t}-affix-wrapper`]: f(
        f(
          f(
            f(f({}, Ma(e)), {
              display: 'inline-flex',
              [`&:not(${t}-affix-wrapper-disabled):hover`]: f(f({}, Oo(e)), {
                zIndex: 1,
                [`${t}-search-with-button &`]: { zIndex: 0 }
              }),
              '&-focused, &:focus': { zIndex: 1 },
              '&-disabled': {
                [`${t}[disabled]`]: { background: 'transparent' }
              },
              [`> input${t}`]: {
                padding: 0,
                fontSize: 'inherit',
                border: 'none',
                borderRadius: 0,
                outline: 'none',
                '&:focus': { boxShadow: 'none !important' }
              },
              '&::before': {
                width: 0,
                visibility: 'hidden',
                content: '"\\a0"'
              },
              [`${t}`]: {
                '&-prefix, &-suffix': {
                  display: 'flex',
                  flex: 'none',
                  alignItems: 'center',
                  '> *:not(:last-child)': { marginInlineEnd: e.paddingXS }
                },
                '&-show-count-suffix': { color: o },
                '&-show-count-has-suffix': { marginInlineEnd: e.paddingXXS },
                '&-prefix': { marginInlineEnd: n },
                '&-suffix': { marginInlineStart: n }
              }
            }),
            zm(e)
          ),
          {
            [`${l}${t}-password-icon`]: {
              color: i,
              cursor: 'pointer',
              transition: `all ${r}`,
              '&:hover': { color: a }
            }
          }
        ),
        Aa(e, `${t}-affix-wrapper`)
      )
    };
  },
  Hm = e => {
    const {
      componentCls: t,
      colorError: n,
      colorSuccess: o,
      borderRadiusLG: r,
      borderRadiusSM: i
    } = e;
    return {
      [`${t}-group`]: f(f(f({}, ln(e)), Dm(e)), {
        '&-rtl': { direction: 'rtl' },
        '&-wrapper': {
          display: 'inline-block',
          width: '100%',
          textAlign: 'start',
          verticalAlign: 'top',
          '&-rtl': { direction: 'rtl' },
          '&-lg': { [`${t}-group-addon`]: { borderRadius: r } },
          '&-sm': { [`${t}-group-addon`]: { borderRadius: i } },
          '&-status-error': {
            [`${t}-group-addon`]: { color: n, borderColor: n }
          },
          '&-status-warning': {
            [`${t}-group-addon:last-child`]: { color: o, borderColor: o }
          }
        }
      })
    };
  },
  Lm = e => {
    const { componentCls: t, antCls: n } = e,
      o = `${t}-search`;
    return {
      [o]: {
        [`${t}`]: {
          '&:hover, &:focus': {
            borderColor: e.colorPrimaryHover,
            [`+ ${t}-group-addon ${o}-button:not(${n}-btn-primary)`]: {
              borderInlineStartColor: e.colorPrimaryHover
            }
          }
        },
        [`${t}-affix-wrapper`]: { borderRadius: 0 },
        [`${t}-lg`]: { lineHeight: e.lineHeightLG - 2e-4 },
        [`> ${t}-group`]: {
          [`> ${t}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${o}-button`]: {
              paddingTop: 0,
              paddingBottom: 0,
              borderStartStartRadius: 0,
              borderStartEndRadius: e.borderRadius,
              borderEndEndRadius: e.borderRadius,
              borderEndStartRadius: 0
            },
            [`${o}-button:not(${n}-btn-primary)`]: {
              color: e.colorTextDescription,
              '&:hover': { color: e.colorPrimaryHover },
              '&:active': { color: e.colorPrimaryActive },
              [`&${n}-btn-loading::before`]: {
                insetInlineStart: 0,
                insetInlineEnd: 0,
                insetBlockStart: 0,
                insetBlockEnd: 0
              }
            }
          }
        },
        [`${o}-button`]: {
          height: e.controlHeight,
          '&:hover, &:focus': { zIndex: 1 }
        },
        [`&-large ${o}-button`]: { height: e.controlHeightLG },
        [`&-small ${o}-button`]: { height: e.controlHeightSM },
        '&-rtl': { direction: 'rtl' },
        [`&${t}-compact-item`]: {
          [`&:not(${t}-compact-last-item)`]: {
            [`${t}-group-addon`]: {
              [`${t}-search-button`]: {
                marginInlineEnd: -e.lineWidth,
                borderRadius: 0
              }
            }
          },
          [`&:not(${t}-compact-first-item)`]: {
            [`${t},${t}-affix-wrapper`]: { borderRadius: 0 }
          },
          [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { '&:hover,&:focus,&:active': { zIndex: 2 } },
          [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 }
        }
      }
    };
  };
function Fm(e) {
  return Se(e, {
    inputAffixPadding: e.paddingXXS,
    inputPaddingVertical: Math.max(
      Math.round(((e.controlHeight - e.fontSize * e.lineHeight) / 2) * 10) /
        10 -
        e.lineWidth,
      3
    ),
    inputPaddingVerticalLG:
      Math.ceil(
        ((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2) * 10
      ) /
        10 -
      e.lineWidth,
    inputPaddingVerticalSM: Math.max(
      Math.round(((e.controlHeightSM - e.fontSize * e.lineHeight) / 2) * 10) /
        10 -
        e.lineWidth,
      0
    ),
    inputPaddingHorizontal: e.paddingSM - e.lineWidth,
    inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
    inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
    inputBorderHoverColor: e.colorPrimaryHover,
    inputBorderActiveColor: e.colorPrimaryHover
  });
}
const jm = e => {
    const { componentCls: t, inputPaddingHorizontal: n, paddingLG: o } = e,
      r = `${t}-textarea`;
    return {
      [r]: {
        position: 'relative',
        [`${r}-suffix`]: {
          position: 'absolute',
          top: 0,
          insetInlineEnd: n,
          bottom: 0,
          zIndex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          margin: 'auto'
        },
        '&-status-error,\n        &-status-warning,\n        &-status-success,\n        &-status-validating': {
          [`&${r}-has-feedback`]: { [`${t}`]: { paddingInlineEnd: o } }
        },
        '&-show-count': {
          [`> ${t}`]: { height: '100%' },
          '&::after': {
            color: e.colorTextDescription,
            whiteSpace: 'nowrap',
            content: 'attr(data-count)',
            pointerEvents: 'none',
            float: 'right'
          }
        },
        '&-rtl': { '&::after': { float: 'left' } }
      }
    };
  },
  Wm = ft('Input', e => {
    const t = Fm(e);
    return [Bm(t), jm(t), Nm(t), Hm(t), Lm(t), ua(t)];
  });
function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      o.forEach(function(r) {
        Vm(e, r, n[r]);
      });
  }
  return e;
}
function Vm(e, t, n) {
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
var To = function(t, n) {
  var o = ri({}, t, n.attrs);
  return b(Mt, ri({}, o, { icon: ml }), null);
};
To.displayName = 'LeftOutlined';
To.inheritAttrs = !1;
const Nv = To,
  Km = () => rt() && window.document.documentElement,
  Ra = e => {
    if (rt() && window.document.documentElement) {
      const t = Array.isArray(e) ? e : [e],
        { documentElement: n } = window.document;
      return t.some(o => o in n.style);
    }
    return !1;
  },
  Um = (e, t) => {
    if (!Ra(e)) return !1;
    const n = document.createElement('div'),
      o = n.style[e];
    return (n.style[e] = t), n.style[e] !== o;
  };
function Hv(e, t) {
  return !Array.isArray(e) && t !== void 0 ? Um(e, t) : Ra(e);
}
let Vt;
const Gm = () => {
    if (!Km()) return !1;
    if (Vt !== void 0) return Vt;
    const e = document.createElement('div');
    return (
      (e.style.display = 'flex'),
      (e.style.flexDirection = 'column'),
      (e.style.rowGap = '1px'),
      e.appendChild(document.createElement('div')),
      e.appendChild(document.createElement('div')),
      document.body.appendChild(e),
      (Vt = e.scrollHeight === 1),
      document.body.removeChild(e),
      Vt
    );
  },
  Xm = () => {
    const e = z(!1);
    return (
      Ee(() => {
        e.value = Gm();
      }),
      e
    );
  },
  xt = e => e != null && (Array.isArray(e) ? dt(e).length : !0);
function Lv(e) {
  return xt(e.prefix) || xt(e.suffix) || xt(e.allowClear);
}
function Fv(e) {
  return xt(e.addonBefore) || xt(e.addonAfter);
}
function Ym(e) {
  return typeof e > 'u' || e === null ? '' : String(e);
}
function _n(e, t, n, o) {
  if (!n) return;
  const r = t;
  if (t.type === 'click') {
    Object.defineProperty(r, 'target', { writable: !0 }),
      Object.defineProperty(r, 'currentTarget', { writable: !0 });
    const i = e.cloneNode(!0);
    (r.target = i), (r.currentTarget = i), (i.value = ''), n(r);
    return;
  }
  if (o !== void 0) {
    Object.defineProperty(r, 'target', { writable: !0 }),
      Object.defineProperty(r, 'currentTarget', { writable: !0 }),
      (r.target = e),
      (r.currentTarget = e),
      (e.value = o),
      n(r);
    return;
  }
  n(r);
}
function qm(e, t) {
  if (!e) return;
  e.focus(t);
  const { cursor: n } = t || {};
  if (n) {
    const o = e.value.length;
    switch (n) {
      case 'start':
        e.setSelectionRange(0, 0);
        break;
      case 'end':
        e.setSelectionRange(o, o);
        break;
      default:
        e.setSelectionRange(0, o);
    }
  }
}
const km = () => ({
    addonBefore: I.any,
    addonAfter: I.any,
    prefix: I.any,
    suffix: I.any,
    clearIcon: I.any,
    affixWrapperClassName: String,
    groupClassName: String,
    wrapperClassName: String,
    inputClassName: String,
    allowClear: { type: Boolean, default: void 0 }
  }),
  Zm = () =>
    f(f({}, km()), {
      value: { type: [String, Number, Symbol], default: void 0 },
      defaultValue: { type: [String, Number, Symbol], default: void 0 },
      inputElement: I.any,
      prefixCls: String,
      disabled: { type: Boolean, default: void 0 },
      focused: { type: Boolean, default: void 0 },
      triggerFocus: Function,
      readonly: { type: Boolean, default: void 0 },
      handleReset: Function,
      hidden: { type: Boolean, default: void 0 }
    }),
  Qm = () =>
    f(f({}, Zm()), {
      id: String,
      placeholder: { type: [String, Number] },
      autocomplete: String,
      type: tl('text'),
      name: String,
      size: { type: String },
      autofocus: { type: Boolean, default: void 0 },
      lazy: { type: Boolean, default: !0 },
      maxlength: Number,
      loading: { type: Boolean, default: void 0 },
      bordered: { type: Boolean, default: void 0 },
      showCount: { type: [Boolean, Object] },
      htmlSize: Number,
      onPressEnter: Function,
      onKeydown: Function,
      onKeyup: Function,
      onFocus: Function,
      onBlur: Function,
      onChange: Function,
      onInput: Function,
      'onUpdate:value': Function,
      onCompositionstart: Function,
      onCompositionend: Function,
      valueModifiers: Object,
      hidden: { type: Boolean, default: void 0 },
      status: String
    }),
  Da = () =>
    cn(Qm(), [
      'wrapperClassName',
      'groupClassName',
      'inputClassName',
      'affixWrapperClassName'
    ]),
  jv = Da,
  Ba = () =>
    f(f({}, cn(Da(), ['prefix', 'addonBefore', 'addonAfter', 'suffix'])), {
      rows: Number,
      autosize: { type: [Boolean, Object], default: void 0 },
      autoSize: { type: [Boolean, Object], default: void 0 },
      onResize: { type: Function },
      onCompositionstart: Yt(),
      onCompositionend: Yt(),
      valueModifiers: Object
    }),
  ii = e => e != null && (Array.isArray(e) ? dt(e).length : !0);
function Jm(e) {
  return ii(e.addonBefore) || ii(e.addonAfter);
}
const ev = ['text', 'input'],
  tv = q({
    compatConfig: { MODE: 3 },
    name: 'ClearableLabeledInput',
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      inputType: I.oneOf(it('text', 'input')),
      value: Fe(),
      defaultValue: Fe(),
      allowClear: { type: Boolean, default: void 0 },
      element: Fe(),
      handleReset: Function,
      disabled: { type: Boolean, default: void 0 },
      direction: { type: String },
      size: { type: String },
      suffix: Fe(),
      prefix: Fe(),
      addonBefore: Fe(),
      addonAfter: Fe(),
      readonly: { type: Boolean, default: void 0 },
      focused: { type: Boolean, default: void 0 },
      bordered: { type: Boolean, default: !0 },
      triggerFocus: { type: Function },
      hidden: Boolean,
      status: String,
      hashId: String
    },
    setup(e, t) {
      let { slots: n, attrs: o } = t;
      const r = bo.useInject(),
        i = l => {
          const {
              value: s,
              disabled: u,
              readonly: d,
              handleReset: c,
              suffix: m = n.suffix
            } = e,
            p = !u && !d && s,
            v = `${l}-clear-icon`;
          return b(
            nl,
            {
              onClick: c,
              onMousedown: g => g.preventDefault(),
              class: oe({ [`${v}-hidden`]: !p, [`${v}-has-suffix`]: !!m }, v),
              role: 'button'
            },
            null
          );
        },
        a = (l, s) => {
          const {
              value: u,
              allowClear: d,
              direction: c,
              bordered: m,
              hidden: p,
              status: v,
              addonAfter: g = n.addonAfter,
              addonBefore: w = n.addonBefore,
              hashId: S
            } = e,
            { status: y, hasFeedback: T } = r;
          if (!d) return $e(s, { value: u, disabled: e.disabled });
          const H = oe(
            `${l}-affix-wrapper`,
            `${l}-affix-wrapper-textarea-with-clear-btn`,
            oa(`${l}-affix-wrapper`, ra(y, v), T),
            {
              [`${l}-affix-wrapper-rtl`]: c === 'rtl',
              [`${l}-affix-wrapper-borderless`]: !m,
              [`${o.class}`]: !Jm({ addonAfter: g, addonBefore: w }) && o.class
            },
            S
          );
          return b('span', { class: H, style: o.style, hidden: p }, [
            $e(s, { style: null, value: u, disabled: e.disabled }),
            i(l)
          ]);
        };
      return () => {
        var l;
        const {
          prefixCls: s,
          inputType: u,
          element: d = (l = n.element) === null || l === void 0
            ? void 0
            : l.call(n)
        } = e;
        return u === ev[0] ? a(s, d) : null;
      };
    }
  }),
  nv = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
  ov = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'font-variant',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
    'word-break',
    'white-space'
  ],
  An = {};
let be;
function rv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n =
    e.getAttribute('id') ||
    e.getAttribute('data-reactid') ||
    e.getAttribute('name');
  if (t && An[n]) return An[n];
  const o = window.getComputedStyle(e),
    r =
      o.getPropertyValue('box-sizing') ||
      o.getPropertyValue('-moz-box-sizing') ||
      o.getPropertyValue('-webkit-box-sizing'),
    i =
      parseFloat(o.getPropertyValue('padding-bottom')) +
      parseFloat(o.getPropertyValue('padding-top')),
    a =
      parseFloat(o.getPropertyValue('border-bottom-width')) +
      parseFloat(o.getPropertyValue('border-top-width')),
    s = {
      sizingStyle: ov.map(u => `${u}:${o.getPropertyValue(u)}`).join(';'),
      paddingSize: i,
      borderSize: a,
      boxSizing: r
    };
  return t && n && (An[n] = s), s;
}
function iv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
    o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  be ||
    ((be = document.createElement('textarea')),
    be.setAttribute('tab-index', '-1'),
    be.setAttribute('aria-hidden', 'true'),
    document.body.appendChild(be)),
    e.getAttribute('wrap')
      ? be.setAttribute('wrap', e.getAttribute('wrap'))
      : be.removeAttribute('wrap');
  const { paddingSize: r, borderSize: i, boxSizing: a, sizingStyle: l } = rv(
    e,
    t
  );
  be.setAttribute('style', `${l};${nv}`),
    (be.value = e.value || e.placeholder || '');
  let s,
    u,
    d,
    c = be.scrollHeight;
  if (
    (a === 'border-box' ? (c += i) : a === 'content-box' && (c -= r),
    n !== null || o !== null)
  ) {
    be.value = ' ';
    const p = be.scrollHeight - r;
    n !== null &&
      ((s = p * n),
      a === 'border-box' && (s = s + r + i),
      (c = Math.max(s, c))),
      o !== null &&
        ((u = p * o),
        a === 'border-box' && (u = u + r + i),
        (d = c > u ? '' : 'hidden'),
        (c = Math.min(u, c)));
  }
  const m = { height: `${c}px`, overflowY: d, resize: 'none' };
  return s && (m.minHeight = `${s}px`), u && (m.maxHeight = `${u}px`), m;
}
const Mn = 0,
  Rn = 1,
  Dn = 2,
  av = q({
    compatConfig: { MODE: 3 },
    name: 'ResizableTextArea',
    inheritAttrs: !1,
    props: Ba(),
    setup(e, t) {
      let { attrs: n, emit: o, expose: r } = t,
        i,
        a;
      const l = W(),
        s = W({}),
        u = W(Dn);
      me(() => {
        le.cancel(i), le.cancel(a);
      });
      const d = () => {
          try {
            if (l.value && document.activeElement === l.value.input) {
              const O = l.value.getSelectionStart(),
                h = l.value.getSelectionEnd(),
                A = l.value.getScrollTop();
              l.value.setSelectionRange(O, h), l.value.setScrollTop(A);
            }
          } catch {}
        },
        c = W(),
        m = W();
      Oe(() => {
        const O = e.autoSize || e.autosize;
        O
          ? ((c.value = O.minRows), (m.value = O.maxRows))
          : ((c.value = void 0), (m.value = void 0));
      });
      const p = C(() => !!(e.autoSize || e.autosize)),
        v = () => {
          u.value = Mn;
        };
      J(
        [() => e.value, c, m, p],
        () => {
          p.value && v();
        },
        { immediate: !0 }
      );
      const g = W();
      J(
        [u, l],
        () => {
          if (l.value)
            if (u.value === Mn) u.value = Rn;
            else if (u.value === Rn) {
              const O = iv(l.value.input, !1, c.value, m.value);
              (u.value = Dn), (g.value = O);
            } else d();
        },
        { immediate: !0, flush: 'post' }
      );
      const w = He(),
        S = W(),
        y = () => {
          le.cancel(S.value);
        },
        T = O => {
          u.value === Dn &&
            (o('resize', O),
            p.value &&
              (y(),
              (S.value = le(() => {
                v();
              }))));
        };
      me(() => {
        y();
      }),
        r({
          resizeTextarea: () => {
            v();
          },
          textArea: C(() => {
            var O;
            return (O = l.value) === null || O === void 0 ? void 0 : O.input;
          }),
          instance: w
        }),
        ui(e.autosize === void 0);
      const P = () => {
        const { prefixCls: O, disabled: h } = e,
          A = cn(e, [
            'prefixCls',
            'onPressEnter',
            'autoSize',
            'autosize',
            'defaultValue',
            'allowClear',
            'type',
            'maxlength',
            'valueModifiers'
          ]),
          L = oe(O, n.class, { [`${O}-disabled`]: h }),
          x = p.value ? g.value : null,
          R = [n.style, s.value, x],
          U = f(f(f({}, A), n), { style: R, class: L });
        return (
          (u.value === Mn || u.value === Rn) &&
            R.push({ overflowX: 'hidden', overflowY: 'hidden' }),
          U.autofocus || delete U.autofocus,
          U.rows === 0 && delete U.rows,
          b(
            ro,
            { onResize: T, disabled: !p.value },
            {
              default: () => [
                b(Wd, M(M({}, U), {}, { ref: l, tag: 'textarea' }), null)
              ]
            }
          )
        );
      };
      return () => P();
    }
  }),
  lv = av;
function za(e, t) {
  return [...(e || '')].slice(0, t).join('');
}
function ai(e, t, n, o) {
  let r = n;
  return (
    e
      ? (r = za(n, o))
      : [...(t || '')].length < n.length &&
        [...(n || '')].length > o &&
        (r = t),
    r
  );
}
const Wv = q({
  compatConfig: { MODE: 3 },
  name: 'ATextarea',
  inheritAttrs: !1,
  props: Ba(),
  setup(e, t) {
    let { attrs: n, expose: o, emit: r } = t;
    var i;
    const a = ef(),
      l = bo.useInject(),
      s = C(() => ra(l.status, e.status)),
      u = z((i = e.value) !== null && i !== void 0 ? i : e.defaultValue),
      d = z(),
      c = z(''),
      { prefixCls: m, size: p, direction: v } = Ne('input', e),
      [g, w] = Wm(m),
      S = di(),
      y = C(() => e.showCount === '' || e.showCount || !1),
      T = C(() => Number(e.maxlength) > 0),
      H = z(!1),
      P = z(),
      O = z(0),
      h = _ => {
        (H.value = !0),
          (P.value = c.value),
          (O.value = _.currentTarget.selectionStart),
          r('compositionstart', _);
      },
      A = _ => {
        var N;
        H.value = !1;
        let D = _.currentTarget.value;
        if (T.value) {
          const Y =
            O.value >= e.maxlength + 1 ||
            O.value ===
              ((N = P.value) === null || N === void 0 ? void 0 : N.length);
          D = ai(Y, P.value, D, e.maxlength);
        }
        D !== c.value && (U(D), _n(_.currentTarget, _, $, D)),
          r('compositionend', _);
      },
      L = He();
    J(
      () => e.value,
      () => {
        var _;
        'value' in L.vnode.props,
          (u.value = (_ = e.value) !== null && _ !== void 0 ? _ : '');
      }
    );
    const x = _ => {
        var N;
        qm((N = d.value) === null || N === void 0 ? void 0 : N.textArea, _);
      },
      R = () => {
        var _, N;
        (N = (_ = d.value) === null || _ === void 0 ? void 0 : _.textArea) ===
          null ||
          N === void 0 ||
          N.blur();
      },
      U = (_, N) => {
        u.value !== _ &&
          (e.value === void 0
            ? (u.value = _)
            : Te(() => {
                var D, Y, Z;
                d.value.textArea.value !== c.value &&
                  ((Z =
                    (D = d.value) === null || D === void 0
                      ? void 0
                      : (Y = D.instance).update) === null ||
                    Z === void 0 ||
                    Z.call(Y));
              }),
          Te(() => {
            N && N();
          }));
      },
      G = _ => {
        _.keyCode === 13 && r('pressEnter', _), r('keydown', _);
      },
      Q = _ => {
        const { onBlur: N } = e;
        N == null || N(_), a.onFieldBlur();
      },
      $ = _ => {
        r('update:value', _.target.value),
          r('change', _),
          r('input', _),
          a.onFieldChange();
      },
      B = _ => {
        _n(d.value.textArea, _, $),
          U('', () => {
            x();
          });
      },
      V = _ => {
        let N = _.target.value;
        if (u.value !== N) {
          if (T.value) {
            const D = _.target,
              Y =
                D.selectionStart >= e.maxlength + 1 ||
                D.selectionStart === N.length ||
                !D.selectionStart;
            N = ai(Y, c.value, N, e.maxlength);
          }
          _n(_.currentTarget, _, $, N), U(N);
        }
      },
      X = () => {
        var _, N;
        const { class: D } = n,
          { bordered: Y = !0 } = e,
          Z = f(f(f({}, cn(e, ['allowClear'])), n), {
            class: [
              {
                [`${m.value}-borderless`]: !Y,
                [`${D}`]: D && !y.value,
                [`${m.value}-sm`]: p.value === 'small',
                [`${m.value}-lg`]: p.value === 'large'
              },
              oa(m.value, s.value),
              w.value
            ],
            disabled: S.value,
            showCount: null,
            prefixCls: m.value,
            onInput: V,
            onChange: V,
            onBlur: Q,
            onKeydown: G,
            onCompositionstart: h,
            onCompositionend: A
          });
        return (
          !((_ = e.valueModifiers) === null || _ === void 0) &&
            _.lazy &&
            delete Z.onInput,
          b(
            lv,
            M(
              M({}, Z),
              {},
              {
                id:
                  (N = Z == null ? void 0 : Z.id) !== null && N !== void 0
                    ? N
                    : a.id.value,
                ref: d,
                maxlength: e.maxlength,
                lazy: e.lazy
              }
            ),
            null
          )
        );
      };
    return (
      o({ focus: x, blur: R, resizableTextArea: d }),
      Oe(() => {
        let _ = Ym(u.value);
        !H.value &&
          T.value &&
          (e.value === null || e.value === void 0) &&
          (_ = za(_, e.maxlength)),
          (c.value = _);
      }),
      () => {
        var _;
        const { maxlength: N, bordered: D = !0, hidden: Y } = e,
          { style: Z, class: fe } = n,
          de = f(f(f({}, e), n), {
            prefixCls: m.value,
            inputType: 'text',
            handleReset: B,
            direction: v.value,
            bordered: D,
            style: y.value ? void 0 : Z,
            hashId: w.value,
            disabled: (_ = e.disabled) !== null && _ !== void 0 ? _ : S.value
          });
        let ue = b(tv, M(M({}, de), {}, { value: c.value, status: e.status }), {
          element: X
        });
        if (y.value || l.hasFeedback) {
          const E = [...c.value].length;
          let j = '';
          typeof y.value == 'object'
            ? (j = y.value.formatter({
                value: c.value,
                count: E,
                maxlength: N
              }))
            : (j = `${E}${T.value ? ` / ${N}` : ''}`),
            (ue = b(
              'div',
              {
                hidden: Y,
                class: oe(
                  `${m.value}-textarea`,
                  {
                    [`${m.value}-textarea-rtl`]: v.value === 'rtl',
                    [`${m.value}-textarea-show-count`]: y.value,
                    [`${m.value}-textarea-in-form-item`]: l.isFormItemInput
                  },
                  `${m.value}-textarea-show-count`,
                  fe,
                  w.value
                ),
                style: Z,
                'data-count': typeof j != 'object' ? j : void 0
              },
              [
                ue,
                l.hasFeedback &&
                  b('span', { class: `${m.value}-textarea-suffix` }, [
                    l.feedbackIcon
                  ])
              ]
            ));
        }
        return g(ue);
      }
    );
  }
});
function li(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      o.forEach(function(r) {
        sv(e, r, n[r]);
      });
  }
  return e;
}
function sv(e, t, n) {
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
var Io = function(t, n) {
  var o = li({}, t, n.attrs);
  return b(Mt, li({}, o, { icon: vl }), null);
};
Io.displayName = 'EyeOutlined';
Io.inheritAttrs = !1;
const Vv = Io,
  uv = { small: 8, middle: 16, large: 24 },
  cv = () => ({
    prefixCls: String,
    size: { type: [String, Number, Array] },
    direction: I.oneOf(it('horizontal', 'vertical')).def('horizontal'),
    align: I.oneOf(it('start', 'end', 'center', 'baseline')),
    wrap: Xt()
  });
function dv(e) {
  return typeof e == 'string' ? uv[e] : e || 0;
}
const Ot = q({
  compatConfig: { MODE: 3 },
  name: 'ASpace',
  inheritAttrs: !1,
  props: cv(),
  slots: Object,
  setup(e, t) {
    let { slots: n, attrs: o } = t;
    const { prefixCls: r, space: i, direction: a } = Ne('space', e),
      [l, s] = ia(r),
      u = Xm(),
      d = C(() => {
        var S, y, T;
        return (T =
          (S = e.size) !== null && S !== void 0
            ? S
            : (y = i == null ? void 0 : i.value) === null || y === void 0
            ? void 0
            : y.size) !== null && T !== void 0
          ? T
          : 'small';
      }),
      c = W(),
      m = W();
    J(
      d,
      () => {
        [c.value, m.value] = (Array.isArray(d.value)
          ? d.value
          : [d.value, d.value]
        ).map(S => dv(S));
      },
      { immediate: !0 }
    );
    const p = C(() =>
        e.align === void 0 && e.direction === 'horizontal' ? 'center' : e.align
      ),
      v = C(() =>
        oe(r.value, s.value, `${r.value}-${e.direction}`, {
          [`${r.value}-rtl`]: a.value === 'rtl',
          [`${r.value}-align-${p.value}`]: p.value
        })
      ),
      g = C(() => (a.value === 'rtl' ? 'marginLeft' : 'marginRight')),
      w = C(() => {
        const S = {};
        return (
          u.value &&
            ((S.columnGap = `${c.value}px`), (S.rowGap = `${m.value}px`)),
          f(
            f({}, S),
            e.wrap && { flexWrap: 'wrap', marginBottom: `${-m.value}px` }
          )
        );
      });
    return () => {
      var S, y;
      const { wrap: T, direction: H = 'horizontal' } = e,
        P = (S = n.default) === null || S === void 0 ? void 0 : S.call(n),
        O = dt(P),
        h = O.length;
      if (h === 0) return null;
      const A = (y = n.split) === null || y === void 0 ? void 0 : y.call(n),
        L = `${r.value}-item`,
        x = c.value,
        R = h - 1;
      return b(
        'div',
        M(
          M({}, o),
          {},
          { class: [v.value, o.class], style: [w.value, o.style] }
        ),
        [
          O.map((U, G) => {
            let Q = P.indexOf(U);
            Q === -1 && (Q = `$$space-${G}`);
            let $ = {};
            return (
              u.value ||
                (H === 'vertical'
                  ? G < R && ($ = { marginBottom: `${x / (A ? 2 : 1)}px` })
                  : ($ = f(
                      f({}, G < R && { [g.value]: `${x / (A ? 2 : 1)}px` }),
                      T && { paddingBottom: `${m.value}px` }
                    ))),
              l(
                b(Ge, { key: Q }, [
                  b('div', { class: L, style: $ }, [U]),
                  G < R &&
                    A &&
                    b('span', { class: `${L}-split`, style: $ }, [A])
                ])
              )
            );
          })
        ]
      );
    };
  }
});
Ot.Compact = Yn;
Ot.install = function(e) {
  return e.component(Ot.name, Ot), e.component(Yn.name, Yn), e;
};
const Kv = Ot,
  Uv = ul('vendor', () => {
    const e = cl(),
      t = W([]),
      n = W({}),
      o = ol,
      r = W(!1),
      i = W(!1),
      a = W(1),
      l = W({ page: 1, limit: 10, search: '', status: '' }),
      s = W([
        { title: we('shopName'), dataIndex: 'shopname', key: 'shop_name' },
        { title: we('owner'), dataIndex: 'displayname', key: 'owner' },
        {
          title: we('outstandingCommissions'),
          dataIndex: 'commission_due',
          key: 'commission_due'
        },
        {
          title: we('commissionRate'),
          dataIndex: 'commission_rate',
          key: 'commission_rate'
        },
        {
          title: we('registeredDate'),
          dataIndex: 'registered_date',
          key: 'registered_date'
        },
        { title: we('status'), dataIndex: 'status', key: 'status' },
        { title: we('actions'), dataIndex: 'action', key: 'action' }
      ]),
      u = async () => {
        (r.value = !0), (t.value = []);
        const v = await o.getVendors(l.value);
        (t.value = v.vendors),
          (n.value = v.vendor_count),
          (a.value = v.result_count),
          (r.value = !1);
      };
    return {
      vendors: t,
      vendorsCount: n,
      vendorAPI: o,
      onLoading: r,
      isSearch: i,
      vendorsQueryParams: l,
      tableColumns: s,
      resultCount: a,
      fetchVendors: u,
      onSearch: async () => {
        l.value.search !== '' ? (i.value = !0) : (i.value = !1), await u();
      },
      navigationFilter: async v => {
        (l.value.status = v),
          (l.value.search = ''),
          v === '' ? (i.value = !1) : (i.value = !0),
          (l.value.page = 1),
          await u();
      },
      setVendorStatus: async (v, g) => {
        const w = await o.setVendorStatus(v, g);
        w.success
          ? Dt.success({ message: we('success'), description: w.message })
          : Dt.error({ message: we('error'), description: w.message }),
          g === 'deactivate' && e.currentRoute.value.name === 'vendor-edit'
            ? e.back()
            : await u();
      },
      setVendorApproval: async (v, g) => {
        const w = await o.setVendorApproval(v, g);
        w.success
          ? Dt.success({ message: we('success'), description: w.message })
          : Dt.error({ message: we('error'), description: w.message }),
          await u();
      }
    };
  });
export {
  Mv as $,
  wv as A,
  $t as B,
  Sv as C,
  Rv as D,
  em as E,
  sa as F,
  Bv as G,
  Vv as H,
  Km as I,
  Gt as J,
  Bd as K,
  Nv as L,
  ke as M,
  Dv as N,
  bv as O,
  Rd as P,
  gv as Q,
  ro as R,
  Kv as S,
  Fm as T,
  Wv as U,
  Cv as V,
  Hv as W,
  bp as X,
  Iv as Y,
  fp as Z,
  Qt as _,
  st as a,
  np as a0,
  Nl as a1,
  Pp as a2,
  up as a3,
  Av as a4,
  hv as a5,
  Rl as a6,
  ua as a7,
  Oo as a8,
  Qn as a9,
  qm as aA,
  _n as aB,
  jv as aC,
  Wm as aD,
  Xm as aE,
  _e as aF,
  Ap as aG,
  dp as aH,
  zl as aI,
  ip as aJ,
  Pd as aK,
  ap as aL,
  _a as aM,
  yv as aN,
  kr as aO,
  Zr as aP,
  Ji as aQ,
  $v as aR,
  zi as aS,
  hm as aT,
  qf as aU,
  Bl as aV,
  Rm as aa,
  Dm as ab,
  Mm as ac,
  Ma as ad,
  Aa as ae,
  ef as af,
  bo as ag,
  ra as ah,
  Cf as ai,
  oa as aj,
  _v as ak,
  Ev as al,
  vo as am,
  Wd as an,
  Ct as ao,
  tt as ap,
  Jc as aq,
  Ef as ar,
  _f as as,
  Pf as at,
  Af as au,
  Zm as av,
  Lv as aw,
  Fv as ax,
  Qm as ay,
  Ym as az,
  Pv as b,
  Ui as c,
  Qu as d,
  Ni as e,
  Xi as f,
  vt as g,
  bc as h,
  _t as i,
  ut as j,
  mt as k,
  Fi as l,
  la as m,
  Ve as n,
  zv as o,
  Ue as p,
  At as q,
  $e as r,
  Rr as s,
  cn as t,
  Uv as u,
  lt as v,
  le as w,
  Ov as x,
  Tv as y,
  xv as z
};
