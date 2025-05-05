import {
  _ as v,
  H as Te,
  P,
  a as j,
  ak as Un,
  F as kn,
  c as J,
  D as $t,
  x as Xo,
  al as de,
  ad as Yo,
  am as Go,
  I as Ue,
  an as qo,
  ao as Ut,
  d as Zo,
  ap as Qo,
  aq as Jo,
  a3 as er,
  a2 as tr,
  ar as kt,
  as as nr,
  K as H,
  Z as or,
  o as De,
  g as rr,
  m as Kn,
  r as ir,
  u as ar,
  y as sr,
  at as lr,
  a0 as ur,
  au as cr,
  $ as fr
} from './Dashboard.dad82f26.js';
import {
  d as k,
  z as dr,
  q as Je,
  v as Mt,
  A as Nt,
  w as q,
  h as pr,
  l as x,
  W as Xn,
  a1 as hr,
  Y as Rt,
  r as X,
  s as $,
  k as Yn,
  f as M,
  Z as vr,
  i as mr,
  C as gr,
  F as Gn,
  x as ke,
  N as yr,
  X as br,
  a2 as Kt,
  j as Dt,
  g as qn,
  p as Zn,
  u as wr,
  E as gt,
  m as yt
} from './vendor.6b2451aa.js';
var Qn = (function() {
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
  bt =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  Ke = (function() {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
      ? self
      : typeof window < 'u' && window.Math === Math
      ? window
      : Function('return this')();
  })(),
  Or = (function() {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(Ke)
      : function(e) {
          return setTimeout(function() {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  _r = 2;
function Tr(e, t) {
  var n = !1,
    o = !1,
    r = 0;
  function i() {
    n && ((n = !1), e()), o && s();
  }
  function a() {
    Or(i);
  }
  function s() {
    var u = Date.now();
    if (n) {
      if (u - r < _r) return;
      o = !0;
    } else (n = !0), (o = !1), setTimeout(a, t);
    r = u;
  }
  return s;
}
var Cr = 20,
  Pr = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  Sr = typeof MutationObserver < 'u',
  Er = (function() {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = Tr(this.refresh.bind(this), Cr));
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
        !bt ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          Sr
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
        !bt ||
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
          r = Pr.some(function(i) {
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
  Jn = function(e, t) {
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
  ve = function(e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Ke;
  },
  eo = et(0, 0, 0, 0);
function Xe(e) {
  return parseFloat(e) || 0;
}
function Xt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function(o, r) {
    var i = e['border-' + r + '-width'];
    return o + Xe(i);
  }, 0);
}
function xr(e) {
  for (
    var t = ['top', 'right', 'bottom', 'left'], n = {}, o = 0, r = t;
    o < r.length;
    o++
  ) {
    var i = r[o],
      a = e['padding-' + i];
    n[i] = Xe(a);
  }
  return n;
}
function Ar(e) {
  var t = e.getBBox();
  return et(0, 0, t.width, t.height);
}
function $r(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return eo;
  var o = ve(e).getComputedStyle(e),
    r = xr(o),
    i = r.left + r.right,
    a = r.top + r.bottom,
    s = Xe(o.width),
    u = Xe(o.height);
  if (
    (o.boxSizing === 'border-box' &&
      (Math.round(s + i) !== t && (s -= Xt(o, 'left', 'right') + i),
      Math.round(u + a) !== n && (u -= Xt(o, 'top', 'bottom') + a)),
    !Nr(e))
  ) {
    var l = Math.round(s + i) - t,
      c = Math.round(u + a) - n;
    Math.abs(l) !== 1 && (s -= l), Math.abs(c) !== 1 && (u -= c);
  }
  return et(r.left, r.top, s, u);
}
var Mr = (function() {
  return typeof SVGGraphicsElement < 'u'
    ? function(e) {
        return e instanceof ve(e).SVGGraphicsElement;
      }
    : function(e) {
        return e instanceof ve(e).SVGElement && typeof e.getBBox == 'function';
      };
})();
function Nr(e) {
  return e === ve(e).document.documentElement;
}
function Rr(e) {
  return bt ? (Mr(e) ? Ar(e) : $r(e)) : eo;
}
function Dr(e) {
  var t = e.x,
    n = e.y,
    o = e.width,
    r = e.height,
    i = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    a = Object.create(i.prototype);
  return (
    Jn(a, {
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
function et(e, t, n, o) {
  return { x: e, y: t, width: n, height: o };
}
var Ir = (function() {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = et(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function() {
        var t = Rr(this.target);
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
  jr = (function() {
    function e(t, n) {
      var o = Dr(n);
      Jn(this, { target: t, contentRect: o });
    }
    return e;
  })(),
  Fr = (function() {
    function e(t, n, o) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Qn()),
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
          if (!(t instanceof ve(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new Ir(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function(t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof ve(t).Element))
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
              return new jr(o.target, o.broadcastRect());
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
  to = typeof WeakMap < 'u' ? new WeakMap() : new Qn(),
  no = (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.');
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.');
      var n = Er.getInstance(),
        o = new Fr(t, n, this);
      to.set(this, o);
    }
    return e;
  })();
['observe', 'unobserve', 'disconnect'].forEach(function(e) {
  no.prototype[e] = function() {
    var t;
    return (t = to.get(this))[e].apply(t, arguments);
  };
});
var oo = (function() {
  return typeof Ke.ResizeObserver < 'u' ? Ke.ResizeObserver : no;
})();
const Lr = (e, t) => {
    const n = v({}, e);
    return (
      Object.keys(t).forEach(o => {
        const r = n[o];
        if (r)
          r.type || r.default
            ? (r.default = t[o])
            : r.def
            ? r.def(t[o])
            : (n[o] = { type: r, default: t[o] });
        else throw new Error(`not have ${o} prop`);
      }),
      n
    );
  },
  Br = Lr,
  ro = k({
    compatConfig: { MODE: 3 },
    name: 'ResizeObserver',
    props: { disabled: Boolean, onResize: Function },
    emits: ['resize'],
    setup(e, t) {
      let { slots: n } = t;
      const o = dr({ width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 });
      let r = null,
        i = null;
      const a = () => {
          i && (i.disconnect(), (i = null));
        },
        s = c => {
          const { onResize: d } = e,
            p = c[0].target,
            { width: f, height: h } = p.getBoundingClientRect(),
            { offsetWidth: m, offsetHeight: _ } = p,
            w = Math.floor(f),
            b = Math.floor(h);
          if (
            o.width !== w ||
            o.height !== b ||
            o.offsetWidth !== m ||
            o.offsetHeight !== _
          ) {
            const T = { width: w, height: b, offsetWidth: m, offsetHeight: _ };
            v(o, T),
              d &&
                Promise.resolve().then(() => {
                  d(v(v({}, T), { offsetWidth: m, offsetHeight: _ }), p);
                });
          }
        },
        u = pr(),
        l = () => {
          const { disabled: c } = e;
          if (c) {
            a();
            return;
          }
          const d = Te(u);
          d !== r && (a(), (r = d)), !i && d && ((i = new oo(s)), i.observe(d));
        };
      return (
        Je(() => {
          l();
        }),
        Mt(() => {
          l();
        }),
        Nt(() => {
          a();
        }),
        q(
          () => e.disabled,
          () => {
            l();
          },
          { flush: 'post' }
        ),
        () => {
          var c;
          return (c = n.default) === null || c === void 0
            ? void 0
            : c.call(n)[0];
        }
      );
    }
  });
let io = e => setTimeout(e, 16),
  ao = e => clearTimeout(e);
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((io = e => window.requestAnimationFrame(e)),
  (ao = e => window.cancelAnimationFrame(e)));
let Yt = 0;
const It = new Map();
function so(e) {
  It.delete(e);
}
function Z(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Yt += 1;
  const n = Yt;
  function o(r) {
    if (r === 0) so(n), e();
    else {
      const i = io(() => {
        o(r - 1);
      });
      It.set(n, i);
    }
  }
  return o(t), n;
}
Z.cancel = e => {
  const t = It.get(e);
  return so(t), ao(t);
};
let lo = !1;
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      lo = !0;
    }
  });
  window.addEventListener('testPassive', null, e),
    window.removeEventListener('testPassive', null, e);
} catch {}
const pe = lo;
function Ce(e, t, n, o) {
  if (e && e.addEventListener) {
    let r = o;
    r === void 0 &&
      pe &&
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
let Gt = {};
function Hr(e, t) {}
function zr(e, t) {}
function uo(e, t, n) {
  !t && !Gt[n] && (e(!1, n), (Gt[n] = !0));
}
function Vr(e, t) {
  uo(Hr, e, t);
}
function qu(e, t) {
  uo(zr, e, t);
}
const Ye = [
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
  Wr = (e, t, n, o, r) => {
    const i = e / 2,
      a = 0,
      s = i,
      u = (n * 1) / Math.sqrt(2),
      l = i - n * (1 - 1 / Math.sqrt(2)),
      c = i - t * (1 / Math.sqrt(2)),
      d = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
      p = 2 * i - c,
      f = d,
      h = 2 * i - u,
      m = l,
      _ = 2 * i - a,
      w = s,
      b = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
      T = n * (Math.sqrt(2) - 1);
    return {
      pointerEvents: 'none',
      width: e,
      height: e,
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: b,
        height: b,
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
            `path('M ${a} ${s} A ${n} ${n} 0 0 0 ${u} ${l} L ${c} ${d} A ${t} ${t} 0 0 1 ${p} ${f} L ${h} ${m} A ${n} ${n} 0 0 0 ${_} ${w} Z')`
          ]
        },
        content: '""'
      }
    };
  };
function Ur(e, t) {
  return Ye.reduce((n, o) => {
    const r = e[`${o}-1`],
      i = e[`${o}-3`],
      a = e[`${o}-6`],
      s = e[`${o}-7`];
    return v(
      v({}, n),
      t(o, { lightColor: r, lightBorderColor: i, darkColor: a, textColor: s })
    );
  }, {});
}
function Zu(e, t) {
  const n = v({}, e);
  for (let o = 0; o < t.length; o += 1) {
    const r = t[o];
    delete n[r];
  }
  return n;
}
const Qu = (e, t, n) => {
  Vr(e, `[ant-design-vue: ${t}] ${n}`);
};
function kr() {
  return '';
}
function Kr(e) {
  return e ? e.ownerDocument : window.document;
}
function co() {}
const Xr = () => ({
    action: P.oneOfType([P.string, P.arrayOf(P.string)]).def([]),
    showAction: P.any.def([]),
    hideAction: P.any.def([]),
    getPopupClassNameFromAlign: P.any.def(kr),
    onPopupVisibleChange: Function,
    afterPopupVisibleChange: P.func.def(co),
    popup: P.any,
    arrow: P.bool.def(!0),
    popupStyle: { type: Object, default: void 0 },
    prefixCls: P.string.def('rc-trigger-popup'),
    popupClassName: P.string.def(''),
    popupPlacement: String,
    builtinPlacements: P.object,
    popupTransitionName: String,
    popupAnimation: P.any,
    mouseEnterDelay: P.number.def(0),
    mouseLeaveDelay: P.number.def(0.1),
    zIndex: Number,
    focusDelay: P.number.def(0),
    blurDelay: P.number.def(0.15),
    getPopupContainer: Function,
    getDocument: P.func.def(Kr),
    forceRender: { type: Boolean, default: void 0 },
    destroyPopupOnHide: { type: Boolean, default: !1 },
    mask: { type: Boolean, default: !1 },
    maskClosable: { type: Boolean, default: !0 },
    popupAlign: P.object.def(() => ({})),
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
  jt = {
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
  Yr = v(v({}, jt), { mobile: { type: Object } }),
  Gr = v(v({}, jt), {
    mask: Boolean,
    mobile: { type: Object },
    maskAnimation: String,
    maskTransitionName: String
  });
function fo(e) {
  const {
    prefixCls: t,
    visible: n,
    zIndex: o,
    mask: r,
    maskAnimation: i,
    maskTransitionName: a
  } = e;
  if (!r) return null;
  let s = {};
  return (
    (a || i) && (s = Un({ prefixCls: t, transitionName: a, animation: i })),
    x(Rt, j({ appear: !0 }, s), {
      default: () => [
        Xn(x('div', { style: { zIndex: o }, class: `${t}-mask` }, null), [
          [hr('if'), n]
        ])
      ]
    })
  );
}
fo.displayName = 'Mask';
const qr = k({
  compatConfig: { MODE: 3 },
  name: 'MobilePopupInner',
  inheritAttrs: !1,
  props: Yr,
  emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
  setup(e, t) {
    let { expose: n, slots: o } = t;
    const r = X();
    return (
      n({ forceAlign: () => {}, getElement: () => r.value }),
      () => {
        var i;
        const {
            zIndex: a,
            visible: s,
            prefixCls: u,
            mobile: {
              popupClassName: l,
              popupStyle: c,
              popupMotion: d = {},
              popupRender: p
            } = {}
          } = e,
          f = v({ zIndex: a }, c);
        let h = kn(
          (i = o.default) === null || i === void 0 ? void 0 : i.call(o)
        );
        h.length > 1 && (h = x('div', { class: `${u}-content` }, [h])),
          p && (h = p(h));
        const m = J(u, l);
        return x(Rt, j({ ref: r }, d), {
          default: () => [s ? x('div', { class: m, style: f }, [h]) : null]
        });
      }
    );
  }
});
var Zr =
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
      function s(c) {
        try {
          l(o.next(c));
        } catch (d) {
          a(d);
        }
      }
      function u(c) {
        try {
          l(o.throw(c));
        } catch (d) {
          a(d);
        }
      }
      function l(c) {
        c.done ? i(c.value) : r(c.value).then(s, u);
      }
      l((o = o.apply(e, t || [])).next());
    });
  };
const qt = ['measure', 'align', null, 'motion'],
  Qr = (e, t) => {
    const n = $(null),
      o = $(),
      r = $(!1);
    function i(u) {
      r.value || (n.value = u);
    }
    function a() {
      Z.cancel(o.value);
    }
    function s(u) {
      a(),
        (o.value = Z(() => {
          let l = n.value;
          switch (n.value) {
            case 'align':
              l = 'motion';
              break;
            case 'motion':
              l = 'stable';
              break;
          }
          i(l), u == null || u();
        }));
    }
    return (
      q(
        e,
        () => {
          i('measure');
        },
        { immediate: !0, flush: 'post' }
      ),
      Je(() => {
        q(
          n,
          () => {
            switch (n.value) {
              case 'measure':
                t();
                break;
            }
            n.value &&
              (o.value = Z(() =>
                Zr(void 0, void 0, void 0, function*() {
                  const u = qt.indexOf(n.value),
                    l = qt[u + 1];
                  l && u !== -1 && i(l);
                })
              ));
          },
          { immediate: !0, flush: 'post' }
        );
      }),
      Yn(() => {
        (r.value = !0), a();
      }),
      [n, s]
    );
  },
  Jr = e => {
    const t = $({ width: 0, height: 0 });
    function n(r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
    }
    return [
      M(() => {
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
function Zt(e, t) {
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
function Qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zt(Object(n), !0).forEach(function(o) {
          ei(e, o, n[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Zt(Object(n)).forEach(function(o) {
          Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
        });
  }
  return e;
}
function wt(e) {
  '@babel/helpers - typeof';
  return (
    (wt =
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
    wt(e)
  );
}
function ei(e, t, n) {
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
var Oe,
  ti = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
function Ge() {
  if (Oe !== void 0) return Oe;
  Oe = '';
  var e = document.createElement('p').style,
    t = 'Transform';
  for (var n in ti) n + t in e && (Oe = n);
  return Oe;
}
function po() {
  return Ge() ? ''.concat(Ge(), 'TransitionProperty') : 'transitionProperty';
}
function tt() {
  return Ge() ? ''.concat(Ge(), 'Transform') : 'transform';
}
function Jt(e, t) {
  var n = po();
  n &&
    ((e.style[n] = t),
    n !== 'transitionProperty' && (e.style.transitionProperty = t));
}
function lt(e, t) {
  var n = tt();
  n && ((e.style[n] = t), n !== 'transform' && (e.style.transform = t));
}
function ni(e) {
  return e.style.transitionProperty || e.style[po()];
}
function oi(e) {
  var t = window.getComputedStyle(e, null),
    n = t.getPropertyValue('transform') || t.getPropertyValue(tt());
  if (n && n !== 'none') {
    var o = n.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(o[12] || o[4], 0), y: parseFloat(o[13] || o[5], 0) };
  }
  return { x: 0, y: 0 };
}
var ri = /matrix\((.*)\)/,
  ii = /matrix3d\((.*)\)/;
function ai(e, t) {
  var n = window.getComputedStyle(e, null),
    o = n.getPropertyValue('transform') || n.getPropertyValue(tt());
  if (o && o !== 'none') {
    var r,
      i = o.match(ri);
    if (i)
      (i = i[1]),
        (r = i.split(',').map(function(s) {
          return parseFloat(s, 10);
        })),
        (r[4] = t.x),
        (r[5] = t.y),
        lt(e, 'matrix('.concat(r.join(','), ')'));
    else {
      var a = o.match(ii)[1];
      (r = a.split(',').map(function(s) {
        return parseFloat(s, 10);
      })),
        (r[12] = t.x),
        (r[13] = t.y),
        lt(e, 'matrix3d('.concat(r.join(','), ')'));
    }
  } else
    lt(
      e,
      'translateX('
        .concat(t.x, 'px) translateY(')
        .concat(t.y, 'px) translateZ(0)')
    );
}
var si = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
  Me;
function en(e) {
  var t = e.style.display;
  (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
}
function he(e, t, n) {
  var o = n;
  if (wt(t) === 'object') {
    for (var r in t) t.hasOwnProperty(r) && he(e, r, t[r]);
    return;
  }
  if (typeof o < 'u') {
    typeof o == 'number' && (o = ''.concat(o, 'px')), (e.style[t] = o);
    return;
  }
  return Me(e, t);
}
function li(e) {
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
function ho(e, t) {
  var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
    o = 'scroll'.concat(t ? 'Top' : 'Left');
  if (typeof n != 'number') {
    var r = e.document;
    (n = r.documentElement[o]), typeof n != 'number' && (n = r.body[o]);
  }
  return n;
}
function vo(e) {
  return ho(e);
}
function mo(e) {
  return ho(e, !0);
}
function Ee(e) {
  var t = li(e),
    n = e.ownerDocument,
    o = n.defaultView || n.parentWindow;
  return (t.left += vo(o)), (t.top += mo(o)), t;
}
function Ft(e) {
  return e != null && e == e.window;
}
function go(e) {
  return Ft(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function ui(e, t, n) {
  var o = n,
    r = '',
    i = go(e);
  return (
    (o = o || i.defaultView.getComputedStyle(e, null)),
    o && (r = o.getPropertyValue(t) || o[t]),
    r
  );
}
var ci = new RegExp('^('.concat(si, ')(?!px)[a-z%]+$'), 'i'),
  fi = /^(top|right|bottom|left)$/,
  ut = 'currentStyle',
  ct = 'runtimeStyle',
  ie = 'left',
  di = 'px';
function pi(e, t) {
  var n = e[ut] && e[ut][t];
  if (ci.test(n) && !fi.test(t)) {
    var o = e.style,
      r = o[ie],
      i = e[ct][ie];
    (e[ct][ie] = e[ut][ie]),
      (o[ie] = t === 'fontSize' ? '1em' : n || 0),
      (n = o.pixelLeft + di),
      (o[ie] = r),
      (e[ct][ie] = i);
  }
  return n === '' ? 'auto' : n;
}
typeof window < 'u' && (Me = window.getComputedStyle ? ui : pi);
function Ie(e, t) {
  return e === 'left'
    ? t.useCssRight
      ? 'right'
      : e
    : t.useCssBottom
    ? 'bottom'
    : e;
}
function tn(e) {
  if (e === 'left') return 'right';
  if (e === 'right') return 'left';
  if (e === 'top') return 'bottom';
  if (e === 'bottom') return 'top';
}
function nn(e, t, n) {
  he(e, 'position') === 'static' && (e.style.position = 'relative');
  var o = -999,
    r = -999,
    i = Ie('left', n),
    a = Ie('top', n),
    s = tn(i),
    u = tn(a);
  i !== 'left' && (o = 999), a !== 'top' && (r = 999);
  var l = '',
    c = Ee(e);
  ('left' in t || 'top' in t) && ((l = ni(e) || ''), Jt(e, 'none')),
    'left' in t && ((e.style[s] = ''), (e.style[i] = ''.concat(o, 'px'))),
    'top' in t && ((e.style[u] = ''), (e.style[a] = ''.concat(r, 'px'))),
    en(e);
  var d = Ee(e),
    p = {};
  for (var f in t)
    if (t.hasOwnProperty(f)) {
      var h = Ie(f, n),
        m = f === 'left' ? o : r,
        _ = c[f] - d[f];
      h === f ? (p[h] = m + _) : (p[h] = m - _);
    }
  he(e, p), en(e), ('left' in t || 'top' in t) && Jt(e, l);
  var w = {};
  for (var b in t)
    if (t.hasOwnProperty(b)) {
      var T = Ie(b, n),
        N = t[b] - c[b];
      b === T ? (w[T] = p[T] + N) : (w[T] = p[T] - N);
    }
  he(e, w);
}
function hi(e, t) {
  var n = Ee(e),
    o = oi(e),
    r = { x: o.x, y: o.y };
  'left' in t && (r.x = o.x + t.left - n.left),
    'top' in t && (r.y = o.y + t.top - n.top),
    ai(e, r);
}
function vi(e, t, n) {
  if (n.ignoreShake) {
    var o = Ee(e),
      r = o.left.toFixed(0),
      i = o.top.toFixed(0),
      a = t.left.toFixed(0),
      s = t.top.toFixed(0);
    if (r === a && i === s) return;
  }
  n.useCssRight || n.useCssBottom
    ? nn(e, t, n)
    : n.useCssTransform && tt() in document.body.style
    ? hi(e, t)
    : nn(e, t, n);
}
function Lt(e, t) {
  for (var n = 0; n < e.length; n++) t(e[n]);
}
function yo(e) {
  return Me(e, 'boxSizing') === 'border-box';
}
var mi = ['margin', 'border', 'padding'],
  Ot = -1,
  gi = 2,
  _t = 1,
  yi = 0;
function bi(e, t, n) {
  var o = {},
    r = e.style,
    i;
  for (i in t) t.hasOwnProperty(i) && ((o[i] = r[i]), (r[i] = t[i]));
  n.call(e);
  for (i in t) t.hasOwnProperty(i) && (r[i] = o[i]);
}
function Pe(e, t, n) {
  var o = 0,
    r,
    i,
    a;
  for (i = 0; i < t.length; i++)
    if (((r = t[i]), r))
      for (a = 0; a < n.length; a++) {
        var s = void 0;
        r === 'border'
          ? (s = ''.concat(r).concat(n[a], 'Width'))
          : (s = r + n[a]),
          (o += parseFloat(Me(e, s)) || 0);
      }
  return o;
}
var Q = {
  getParent: function(t) {
    var n = t;
    do n.nodeType === 11 && n.host ? (n = n.host) : (n = n.parentNode);
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
Lt(['Width', 'Height'], function(e) {
  (Q['doc'.concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      n.documentElement['scroll'.concat(e)],
      n.body['scroll'.concat(e)],
      Q['viewport'.concat(e)](n)
    );
  }),
    (Q['viewport'.concat(e)] = function(t) {
      var n = 'client'.concat(e),
        o = t.document,
        r = o.body,
        i = o.documentElement,
        a = i[n];
      return (o.compatMode === 'CSS1Compat' && a) || (r && r[n]) || a;
    });
});
function on(e, t, n) {
  var o = n;
  if (Ft(e)) return t === 'width' ? Q.viewportWidth(e) : Q.viewportHeight(e);
  if (e.nodeType === 9) return t === 'width' ? Q.docWidth(e) : Q.docHeight(e);
  var r = t === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
    i = Math.floor(
      t === 'width'
        ? e.getBoundingClientRect().width
        : e.getBoundingClientRect().height
    ),
    a = yo(e),
    s = 0;
  (i == null || i <= 0) &&
    ((i = void 0),
    (s = Me(e, t)),
    (s == null || Number(s) < 0) && (s = e.style[t] || 0),
    (s = Math.floor(parseFloat(s)) || 0)),
    o === void 0 && (o = a ? _t : Ot);
  var u = i !== void 0 || a,
    l = i || s;
  return o === Ot
    ? u
      ? l - Pe(e, ['border', 'padding'], r)
      : s
    : u
    ? o === _t
      ? l
      : l + (o === gi ? -Pe(e, ['border'], r) : Pe(e, ['margin'], r))
    : s + Pe(e, mi.slice(o), r);
}
var wi = { position: 'absolute', visibility: 'hidden', display: 'block' };
function rn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o,
    r = t[0];
  return (
    r.offsetWidth !== 0
      ? (o = on.apply(void 0, t))
      : bi(r, wi, function() {
          o = on.apply(void 0, t);
        }),
    o
  );
}
Lt(['width', 'height'], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Q['outer'.concat(t)] = function(o, r) {
    return o && rn(o, e, r ? yi : _t);
  };
  var n = e === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  Q[e] = function(o, r) {
    var i = r;
    if (i !== void 0) {
      if (o) {
        var a = yo(o);
        return a && (i += Pe(o, ['padding', 'border'], n)), he(o, e, i);
      }
      return;
    }
    return o && rn(o, e, Ot);
  };
});
function bo(e, t) {
  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var C = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout) return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: go,
  offset: function(t, n, o) {
    if (typeof n < 'u') vi(t, n, o || {});
    else return Ee(t);
  },
  isWindow: Ft,
  each: Lt,
  css: he,
  clone: function(t) {
    var n,
      o = {};
    for (n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
    var r = t.overflow;
    if (r) for (n in t) t.hasOwnProperty(n) && (o.overflow[n] = t.overflow[n]);
    return o;
  },
  mix: bo,
  getWindowScrollLeft: function(t) {
    return vo(t);
  },
  getWindowScrollTop: function(t) {
    return mo(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      C.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
bo(C, Q);
var ft = C.getParent;
function Tt(e) {
  if (C.isWindow(e) || e.nodeType === 9) return null;
  var t = C.getDocument(e),
    n = t.body,
    o,
    r = C.css(e, 'position'),
    i = r === 'fixed' || r === 'absolute';
  if (!i) return e.nodeName.toLowerCase() === 'html' ? null : ft(e);
  for (o = ft(e); o && o !== n && o.nodeType !== 9; o = ft(o))
    if (((r = C.css(o, 'position')), r !== 'static')) return o;
  return null;
}
var an = C.getParent;
function Oi(e) {
  if (C.isWindow(e) || e.nodeType === 9) return !1;
  var t = C.getDocument(e),
    n = t.body,
    o = null;
  for (o = an(e); o && o !== n && o !== t; o = an(o)) {
    var r = C.css(o, 'position');
    if (r === 'fixed') return !0;
  }
  return !1;
}
function Bt(e, t) {
  for (
    var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
      o = Tt(e),
      r = C.getDocument(e),
      i = r.defaultView || r.parentWindow,
      a = r.body,
      s = r.documentElement;
    o;

  ) {
    if (
      (navigator.userAgent.indexOf('MSIE') === -1 || o.clientWidth !== 0) &&
      o !== a &&
      o !== s &&
      C.css(o, 'overflow') !== 'visible'
    ) {
      var u = C.offset(o);
      (u.left += o.clientLeft),
        (u.top += o.clientTop),
        (n.top = Math.max(n.top, u.top)),
        (n.right = Math.min(n.right, u.left + o.clientWidth)),
        (n.bottom = Math.min(n.bottom, u.top + o.clientHeight)),
        (n.left = Math.max(n.left, u.left));
    } else if (o === a || o === s) break;
    o = Tt(o);
  }
  var l = null;
  if (!C.isWindow(e) && e.nodeType !== 9) {
    l = e.style.position;
    var c = C.css(e, 'position');
    c === 'absolute' && (e.style.position = 'fixed');
  }
  var d = C.getWindowScrollLeft(i),
    p = C.getWindowScrollTop(i),
    f = C.viewportWidth(i),
    h = C.viewportHeight(i),
    m = s.scrollWidth,
    _ = s.scrollHeight,
    w = window.getComputedStyle(a);
  if (
    (w.overflowX === 'hidden' && (m = i.innerWidth),
    w.overflowY === 'hidden' && (_ = i.innerHeight),
    e.style && (e.style.position = l),
    t || Oi(e))
  )
    (n.left = Math.max(n.left, d)),
      (n.top = Math.max(n.top, p)),
      (n.right = Math.min(n.right, d + f)),
      (n.bottom = Math.min(n.bottom, p + h));
  else {
    var b = Math.max(m, d + f);
    n.right = Math.min(n.right, b);
    var T = Math.max(_, p + h);
    n.bottom = Math.min(n.bottom, T);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
    ? n
    : null;
}
function _i(e, t, n, o) {
  var r = C.clone(e),
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
    C.mix(r, i)
  );
}
function Ht(e) {
  var t, n, o;
  if (!C.isWindow(e) && e.nodeType !== 9)
    (t = C.offset(e)), (n = C.outerWidth(e)), (o = C.outerHeight(e));
  else {
    var r = C.getWindow(e);
    (t = { left: C.getWindowScrollLeft(r), top: C.getWindowScrollTop(r) }),
      (n = C.viewportWidth(r)),
      (o = C.viewportHeight(r));
  }
  return (t.width = n), (t.height = o), t;
}
function sn(e, t) {
  var n = t.charAt(0),
    o = t.charAt(1),
    r = e.width,
    i = e.height,
    a = e.left,
    s = e.top;
  return (
    n === 'c' ? (s += i / 2) : n === 'b' && (s += i),
    o === 'c' ? (a += r / 2) : o === 'r' && (a += r),
    { left: a, top: s }
  );
}
function je(e, t, n, o, r) {
  var i = sn(t, n[1]),
    a = sn(e, n[0]),
    s = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - s[0] + o[0] - r[0]),
    top: Math.round(e.top - s[1] + o[1] - r[1])
  };
}
function ln(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function un(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Ti(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function Ci(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function Fe(e, t, n) {
  var o = [];
  return (
    C.each(e, function(r) {
      o.push(
        r.replace(t, function(i) {
          return n[i];
        })
      );
    }),
    o
  );
}
function Le(e, t) {
  return (e[t] = -e[t]), e;
}
function cn(e, t) {
  var n;
  return (
    /%$/.test(e)
      ? (n = (parseInt(e.substring(0, e.length - 1), 10) / 100) * t)
      : (n = parseInt(e, 10)),
    n || 0
  );
}
function fn(e, t) {
  (e[0] = cn(e[0], t.width)), (e[1] = cn(e[1], t.height));
}
function wo(e, t, n, o) {
  var r = n.points,
    i = n.offset || [0, 0],
    a = n.targetOffset || [0, 0],
    s = n.overflow,
    u = n.source || e;
  (i = [].concat(i)), (a = [].concat(a)), (s = s || {});
  var l = {},
    c = 0,
    d = !!(s && s.alwaysByViewport),
    p = Bt(u, d),
    f = Ht(u);
  fn(i, f), fn(a, t);
  var h = je(f, t, r, i, a),
    m = C.merge(f, h);
  if (p && (s.adjustX || s.adjustY) && o) {
    if (s.adjustX && ln(h, f, p)) {
      var _ = Fe(r, /[lr]/gi, { l: 'r', r: 'l' }),
        w = Le(i, 0),
        b = Le(a, 0),
        T = je(f, t, _, w, b);
      Ti(T, f, p) || ((c = 1), (r = _), (i = w), (a = b));
    }
    if (s.adjustY && un(h, f, p)) {
      var N = Fe(r, /[tb]/gi, { t: 'b', b: 't' }),
        D = Le(i, 1),
        S = Le(a, 1),
        z = je(f, t, N, D, S);
      Ci(z, f, p) || ((c = 1), (r = N), (i = D), (a = S));
    }
    c && ((h = je(f, t, r, i, a)), C.mix(m, h));
    var F = ln(h, f, p),
      L = un(h, f, p);
    if (F || L) {
      var g = r;
      F && (g = Fe(r, /[lr]/gi, { l: 'r', r: 'l' })),
        L && (g = Fe(r, /[tb]/gi, { t: 'b', b: 't' })),
        (r = g),
        (i = n.offset || [0, 0]),
        (a = n.targetOffset || [0, 0]);
    }
    (l.adjustX = s.adjustX && F),
      (l.adjustY = s.adjustY && L),
      (l.adjustX || l.adjustY) && (m = _i(h, f, p, l));
  }
  return (
    m.width !== f.width && C.css(u, 'width', C.width(u) + m.width - f.width),
    m.height !== f.height &&
      C.css(u, 'height', C.height(u) + m.height - f.height),
    C.offset(
      u,
      { left: m.left, top: m.top },
      {
        useCssRight: n.useCssRight,
        useCssBottom: n.useCssBottom,
        useCssTransform: n.useCssTransform,
        ignoreShake: n.ignoreShake
      }
    ),
    { points: r, offset: i, targetOffset: a, overflow: l }
  );
}
function Pi(e, t) {
  var n = Bt(e, t),
    o = Ht(e);
  return (
    !n ||
    o.left + o.width <= n.left ||
    o.top + o.height <= n.top ||
    o.left >= n.right ||
    o.top >= n.bottom
  );
}
function zt(e, t, n) {
  var o = n.target || t,
    r = Ht(o),
    i = !Pi(o, n.overflow && n.overflow.alwaysByViewport);
  return wo(e, r, n, i);
}
zt.__getOffsetParent = Tt;
zt.__getVisibleRectForElement = Bt;
function Si(e, t, n) {
  var o,
    r,
    i = C.getDocument(e),
    a = i.defaultView || i.parentWindow,
    s = C.getWindowScrollLeft(a),
    u = C.getWindowScrollTop(a),
    l = C.viewportWidth(a),
    c = C.viewportHeight(a);
  'pageX' in t ? (o = t.pageX) : (o = s + t.clientX),
    'pageY' in t ? (r = t.pageY) : (r = u + t.clientY);
  var d = { left: o, top: r, width: 0, height: 0 },
    p = o >= 0 && o <= s + l && r >= 0 && r <= u + c,
    f = [n.points[0], 'cc'];
  return wo(e, d, Qt(Qt({}, n), {}, { points: f }), p);
}
function qe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
    r = e;
  if ((Array.isArray(e) && (r = $t(e)[0]), !r)) return null;
  const i = vr(r, t, o);
  return (
    (i.props = n ? v(v({}, i.props), t) : i.props),
    Xo(typeof i.props.class != 'object'),
    i
  );
}
const Oo = e =>
  (e || []).some(t =>
    mr(t) ? !(t.type === gr || (t.type === Gn && !Oo(t.children))) : !0
  )
    ? e
    : null;
function Ju(e, t, n, o) {
  var r;
  const i = (r = e[t]) === null || r === void 0 ? void 0 : r.call(e, n);
  return Oo(i) ? i : o == null ? void 0 : o();
}
const Ei = e => {
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
function xi(e, t) {
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
function Ai(e, t) {
  e !== document.activeElement &&
    de(t, e) &&
    typeof e.focus == 'function' &&
    e.focus();
}
function dn(e, t) {
  let n = null,
    o = null;
  function r(a) {
    let [{ target: s }] = a;
    if (!document.documentElement.contains(s)) return;
    const { width: u, height: l } = s.getBoundingClientRect(),
      c = Math.floor(u),
      d = Math.floor(l);
    (n !== c || o !== d) &&
      Promise.resolve().then(() => {
        t({ width: c, height: d });
      }),
      (n = c),
      (o = d);
  }
  const i = new oo(r);
  return (
    e && i.observe(e),
    () => {
      i.disconnect();
    }
  );
}
const $i = (e, t) => {
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
function Mi() {
  (this.__data__ = []), (this.size = 0);
}
function _o(e, t) {
  return e === t || (e !== e && t !== t);
}
function nt(e, t) {
  for (var n = e.length; n--; ) if (_o(e[n][0], t)) return n;
  return -1;
}
var Ni = Array.prototype,
  Ri = Ni.splice;
function Di(e) {
  var t = this.__data__,
    n = nt(t, e);
  if (n < 0) return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Ri.call(t, n, 1), --this.size, !0;
}
function Ii(e) {
  var t = this.__data__,
    n = nt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ji(e) {
  return nt(this.__data__, e) > -1;
}
function Fi(e, t) {
  var n = this.__data__,
    o = nt(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
}
function ee(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ee.prototype.clear = Mi;
ee.prototype.delete = Di;
ee.prototype.get = Ii;
ee.prototype.has = ji;
ee.prototype.set = Fi;
function Li() {
  (this.__data__ = new ee()), (this.size = 0);
}
function Bi(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
function Hi(e) {
  return this.__data__.get(e);
}
function zi(e) {
  return this.__data__.has(e);
}
var Vi =
  typeof global == 'object' && global && global.Object === Object && global;
const To = Vi;
var Wi = typeof self == 'object' && self && self.Object === Object && self,
  Ui = To || Wi || Function('return this')();
const te = Ui;
var ki = te.Symbol;
const me = ki;
var Co = Object.prototype,
  Ki = Co.hasOwnProperty,
  Xi = Co.toString,
  _e = me ? me.toStringTag : void 0;
function Yi(e) {
  var t = Ki.call(e, _e),
    n = e[_e];
  try {
    e[_e] = void 0;
    var o = !0;
  } catch {}
  var r = Xi.call(e);
  return o && (t ? (e[_e] = n) : delete e[_e]), r;
}
var Gi = Object.prototype,
  qi = Gi.toString;
function Zi(e) {
  return qi.call(e);
}
var Qi = '[object Null]',
  Ji = '[object Undefined]',
  pn = me ? me.toStringTag : void 0;
function Ne(e) {
  return e == null
    ? e === void 0
      ? Ji
      : Qi
    : pn && pn in Object(e)
    ? Yi(e)
    : Zi(e);
}
function Po(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var ea = '[object AsyncFunction]',
  ta = '[object Function]',
  na = '[object GeneratorFunction]',
  oa = '[object Proxy]';
function So(e) {
  if (!Po(e)) return !1;
  var t = Ne(e);
  return t == ta || t == na || t == ea || t == oa;
}
var ra = te['__core-js_shared__'];
const dt = ra;
var hn = (function() {
  var e = /[^.]+$/.exec((dt && dt.keys && dt.keys.IE_PROTO) || '');
  return e ? 'Symbol(src)_1.' + e : '';
})();
function ia(e) {
  return !!hn && hn in e;
}
var aa = Function.prototype,
  sa = aa.toString;
function ue(e) {
  if (e != null) {
    try {
      return sa.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var la = /[\\^$.*+?()[\]{}|]/g,
  ua = /^\[object .+?Constructor\]$/,
  ca = Function.prototype,
  fa = Object.prototype,
  da = ca.toString,
  pa = fa.hasOwnProperty,
  ha = RegExp(
    '^' +
      da
        .call(pa)
        .replace(la, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function va(e) {
  if (!Po(e) || ia(e)) return !1;
  var t = So(e) ? ha : ua;
  return t.test(ue(e));
}
function ma(e, t) {
  return e == null ? void 0 : e[t];
}
function ge(e, t) {
  var n = ma(e, t);
  return va(n) ? n : void 0;
}
var ga = ge(te, 'Map');
const xe = ga;
var ya = ge(Object, 'create');
const Ae = ya;
function ba() {
  (this.__data__ = Ae ? Ae(null) : {}), (this.size = 0);
}
function wa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var Oa = '__lodash_hash_undefined__',
  _a = Object.prototype,
  Ta = _a.hasOwnProperty;
function Ca(e) {
  var t = this.__data__;
  if (Ae) {
    var n = t[e];
    return n === Oa ? void 0 : n;
  }
  return Ta.call(t, e) ? t[e] : void 0;
}
var Pa = Object.prototype,
  Sa = Pa.hasOwnProperty;
function Ea(e) {
  var t = this.__data__;
  return Ae ? t[e] !== void 0 : Sa.call(t, e);
}
var xa = '__lodash_hash_undefined__';
function Aa(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = Ae && t === void 0 ? xa : t),
    this
  );
}
function le(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
le.prototype.clear = ba;
le.prototype.delete = wa;
le.prototype.get = Ca;
le.prototype.has = Ea;
le.prototype.set = Aa;
function $a() {
  (this.size = 0),
    (this.__data__ = {
      hash: new le(),
      map: new (xe || ee)(),
      string: new le()
    });
}
function Ma(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
function ot(e, t) {
  var n = e.__data__;
  return Ma(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
}
function Na(e) {
  var t = ot(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function Ra(e) {
  return ot(this, e).get(e);
}
function Da(e) {
  return ot(this, e).has(e);
}
function Ia(e, t) {
  var n = ot(this, e),
    o = n.size;
  return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
}
function ce(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ce.prototype.clear = $a;
ce.prototype.delete = Na;
ce.prototype.get = Ra;
ce.prototype.has = Da;
ce.prototype.set = Ia;
var ja = 200;
function Fa(e, t) {
  var n = this.__data__;
  if (n instanceof ee) {
    var o = n.__data__;
    if (!xe || o.length < ja - 1)
      return o.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new ce(o);
  }
  return n.set(e, t), (this.size = n.size), this;
}
function re(e) {
  var t = (this.__data__ = new ee(e));
  this.size = t.size;
}
re.prototype.clear = Li;
re.prototype.delete = Bi;
re.prototype.get = Hi;
re.prototype.has = zi;
re.prototype.set = Fa;
var La = '__lodash_hash_undefined__';
function Ba(e) {
  return this.__data__.set(e, La), this;
}
function Ha(e) {
  return this.__data__.has(e);
}
function Ze(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new ce(); ++t < n; ) this.add(e[t]);
}
Ze.prototype.add = Ze.prototype.push = Ba;
Ze.prototype.has = Ha;
function za(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
function Va(e, t) {
  return e.has(t);
}
var Wa = 1,
  Ua = 2;
function Eo(e, t, n, o, r, i) {
  var a = n & Wa,
    s = e.length,
    u = t.length;
  if (s != u && !(a && u > s)) return !1;
  var l = i.get(e),
    c = i.get(t);
  if (l && c) return l == t && c == e;
  var d = -1,
    p = !0,
    f = n & Ua ? new Ze() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < s; ) {
    var h = e[d],
      m = t[d];
    if (o) var _ = a ? o(m, h, d, t, e, i) : o(h, m, d, e, t, i);
    if (_ !== void 0) {
      if (_) continue;
      p = !1;
      break;
    }
    if (f) {
      if (
        !za(t, function(w, b) {
          if (!Va(f, b) && (h === w || r(h, w, n, o, i))) return f.push(b);
        })
      ) {
        p = !1;
        break;
      }
    } else if (!(h === m || r(h, m, n, o, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
var ka = te.Uint8Array;
const vn = ka;
function Ka(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function(o, r) {
      n[++t] = [r, o];
    }),
    n
  );
}
function Xa(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function(o) {
      n[++t] = o;
    }),
    n
  );
}
var Ya = 1,
  Ga = 2,
  qa = '[object Boolean]',
  Za = '[object Date]',
  Qa = '[object Error]',
  Ja = '[object Map]',
  es = '[object Number]',
  ts = '[object RegExp]',
  ns = '[object Set]',
  os = '[object String]',
  rs = '[object Symbol]',
  is = '[object ArrayBuffer]',
  as = '[object DataView]',
  mn = me ? me.prototype : void 0,
  pt = mn ? mn.valueOf : void 0;
function ss(e, t, n, o, r, i, a) {
  switch (n) {
    case as:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case is:
      return !(e.byteLength != t.byteLength || !i(new vn(e), new vn(t)));
    case qa:
    case Za:
    case es:
      return _o(+e, +t);
    case Qa:
      return e.name == t.name && e.message == t.message;
    case ts:
    case os:
      return e == t + '';
    case Ja:
      var s = Ka;
    case ns:
      var u = o & Ya;
      if ((s || (s = Xa), e.size != t.size && !u)) return !1;
      var l = a.get(e);
      if (l) return l == t;
      (o |= Ga), a.set(e, t);
      var c = Eo(s(e), s(t), o, r, i, a);
      return a.delete(e), c;
    case rs:
      if (pt) return pt.call(e) == pt.call(t);
  }
  return !1;
}
function ls(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
  return e;
}
var us = Array.isArray;
const Qe = us;
function cs(e, t, n) {
  var o = t(e);
  return Qe(e) ? o : ls(o, n(e));
}
function fs(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (i[r++] = a);
  }
  return i;
}
function ds() {
  return [];
}
var ps = Object.prototype,
  hs = ps.propertyIsEnumerable,
  gn = Object.getOwnPropertySymbols,
  vs = gn
    ? function(e) {
        return e == null
          ? []
          : ((e = Object(e)),
            fs(gn(e), function(t) {
              return hs.call(e, t);
            }));
      }
    : ds;
const ms = vs;
function gs(e, t) {
  for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
  return o;
}
function $e(e) {
  return e != null && typeof e == 'object';
}
var ys = '[object Arguments]';
function yn(e) {
  return $e(e) && Ne(e) == ys;
}
var xo = Object.prototype,
  bs = xo.hasOwnProperty,
  ws = xo.propertyIsEnumerable,
  Os = yn(
    (function() {
      return arguments;
    })()
  )
    ? yn
    : function(e) {
        return $e(e) && bs.call(e, 'callee') && !ws.call(e, 'callee');
      };
const _s = Os;
function Ts() {
  return !1;
}
var Ao = typeof exports == 'object' && exports && !exports.nodeType && exports,
  bn = Ao && typeof module == 'object' && module && !module.nodeType && module,
  Cs = bn && bn.exports === Ao,
  wn = Cs ? te.Buffer : void 0,
  Ps = wn ? wn.isBuffer : void 0,
  Ss = Ps || Ts;
const Ct = Ss;
var Es = 9007199254740991,
  xs = /^(?:0|[1-9]\d*)$/;
function As(e, t) {
  var n = typeof e;
  return (
    (t = t ?? Es),
    !!t &&
      (n == 'number' || (n != 'symbol' && xs.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var $s = 9007199254740991;
function $o(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= $s;
}
var Ms = '[object Arguments]',
  Ns = '[object Array]',
  Rs = '[object Boolean]',
  Ds = '[object Date]',
  Is = '[object Error]',
  js = '[object Function]',
  Fs = '[object Map]',
  Ls = '[object Number]',
  Bs = '[object Object]',
  Hs = '[object RegExp]',
  zs = '[object Set]',
  Vs = '[object String]',
  Ws = '[object WeakMap]',
  Us = '[object ArrayBuffer]',
  ks = '[object DataView]',
  Ks = '[object Float32Array]',
  Xs = '[object Float64Array]',
  Ys = '[object Int8Array]',
  Gs = '[object Int16Array]',
  qs = '[object Int32Array]',
  Zs = '[object Uint8Array]',
  Qs = '[object Uint8ClampedArray]',
  Js = '[object Uint16Array]',
  el = '[object Uint32Array]',
  R = {};
R[Ks] = R[Xs] = R[Ys] = R[Gs] = R[qs] = R[Zs] = R[Qs] = R[Js] = R[el] = !0;
R[Ms] = R[Ns] = R[Us] = R[Rs] = R[ks] = R[Ds] = R[Is] = R[js] = R[Fs] = R[
  Ls
] = R[Bs] = R[Hs] = R[zs] = R[Vs] = R[Ws] = !1;
function tl(e) {
  return $e(e) && $o(e.length) && !!R[Ne(e)];
}
function nl(e) {
  return function(t) {
    return e(t);
  };
}
var Mo = typeof exports == 'object' && exports && !exports.nodeType && exports,
  Se = Mo && typeof module == 'object' && module && !module.nodeType && module,
  ol = Se && Se.exports === Mo,
  ht = ol && To.process,
  rl = (function() {
    try {
      var e = Se && Se.require && Se.require('util').types;
      return e || (ht && ht.binding && ht.binding('util'));
    } catch {}
  })();
const On = rl;
var _n = On && On.isTypedArray,
  il = _n ? nl(_n) : tl;
const No = il;
var al = Object.prototype,
  sl = al.hasOwnProperty;
function ll(e, t) {
  var n = Qe(e),
    o = !n && _s(e),
    r = !n && !o && Ct(e),
    i = !n && !o && !r && No(e),
    a = n || o || r || i,
    s = a ? gs(e.length, String) : [],
    u = s.length;
  for (var l in e)
    (t || sl.call(e, l)) &&
      !(
        a &&
        (l == 'length' ||
          (r && (l == 'offset' || l == 'parent')) ||
          (i && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
          As(l, u))
      ) &&
      s.push(l);
  return s;
}
var ul = Object.prototype;
function cl(e) {
  var t = e && e.constructor,
    n = (typeof t == 'function' && t.prototype) || ul;
  return e === n;
}
function fl(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var dl = fl(Object.keys, Object);
const pl = dl;
var hl = Object.prototype,
  vl = hl.hasOwnProperty;
function ml(e) {
  if (!cl(e)) return pl(e);
  var t = [];
  for (var n in Object(e)) vl.call(e, n) && n != 'constructor' && t.push(n);
  return t;
}
function gl(e) {
  return e != null && $o(e.length) && !So(e);
}
function yl(e) {
  return gl(e) ? ll(e) : ml(e);
}
function Tn(e) {
  return cs(e, yl, ms);
}
var bl = 1,
  wl = Object.prototype,
  Ol = wl.hasOwnProperty;
function _l(e, t, n, o, r, i) {
  var a = n & bl,
    s = Tn(e),
    u = s.length,
    l = Tn(t),
    c = l.length;
  if (u != c && !a) return !1;
  for (var d = u; d--; ) {
    var p = s[d];
    if (!(a ? p in t : Ol.call(t, p))) return !1;
  }
  var f = i.get(e),
    h = i.get(t);
  if (f && h) return f == t && h == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var _ = a; ++d < u; ) {
    p = s[d];
    var w = e[p],
      b = t[p];
    if (o) var T = a ? o(b, w, p, t, e, i) : o(w, b, p, e, t, i);
    if (!(T === void 0 ? w === b || r(w, b, n, o, i) : T)) {
      m = !1;
      break;
    }
    _ || (_ = p == 'constructor');
  }
  if (m && !_) {
    var N = e.constructor,
      D = t.constructor;
    N != D &&
      'constructor' in e &&
      'constructor' in t &&
      !(
        typeof N == 'function' &&
        N instanceof N &&
        typeof D == 'function' &&
        D instanceof D
      ) &&
      (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var Tl = ge(te, 'DataView');
const Pt = Tl;
var Cl = ge(te, 'Promise');
const St = Cl;
var Pl = ge(te, 'Set');
const Et = Pl;
var Sl = ge(te, 'WeakMap');
const xt = Sl;
var Cn = '[object Map]',
  El = '[object Object]',
  Pn = '[object Promise]',
  Sn = '[object Set]',
  En = '[object WeakMap]',
  xn = '[object DataView]',
  xl = ue(Pt),
  Al = ue(xe),
  $l = ue(St),
  Ml = ue(Et),
  Nl = ue(xt),
  se = Ne;
((Pt && se(new Pt(new ArrayBuffer(1))) != xn) ||
  (xe && se(new xe()) != Cn) ||
  (St && se(St.resolve()) != Pn) ||
  (Et && se(new Et()) != Sn) ||
  (xt && se(new xt()) != En)) &&
  (se = function(e) {
    var t = Ne(e),
      n = t == El ? e.constructor : void 0,
      o = n ? ue(n) : '';
    if (o)
      switch (o) {
        case xl:
          return xn;
        case Al:
          return Cn;
        case $l:
          return Pn;
        case Ml:
          return Sn;
        case Nl:
          return En;
      }
    return t;
  });
const An = se;
var Rl = 1,
  $n = '[object Arguments]',
  Mn = '[object Array]',
  Be = '[object Object]',
  Dl = Object.prototype,
  Nn = Dl.hasOwnProperty;
function Il(e, t, n, o, r, i) {
  var a = Qe(e),
    s = Qe(t),
    u = a ? Mn : An(e),
    l = s ? Mn : An(t);
  (u = u == $n ? Be : u), (l = l == $n ? Be : l);
  var c = u == Be,
    d = l == Be,
    p = u == l;
  if (p && Ct(e)) {
    if (!Ct(t)) return !1;
    (a = !0), (c = !1);
  }
  if (p && !c)
    return (
      i || (i = new re()),
      a || No(e) ? Eo(e, t, n, o, r, i) : ss(e, t, u, n, o, r, i)
    );
  if (!(n & Rl)) {
    var f = c && Nn.call(e, '__wrapped__'),
      h = d && Nn.call(t, '__wrapped__');
    if (f || h) {
      var m = f ? e.value() : e,
        _ = h ? t.value() : t;
      return i || (i = new re()), r(m, _, n, o, i);
    }
  }
  return p ? (i || (i = new re()), _l(e, t, n, o, r, i)) : !1;
}
function Ro(e, t, n, o, r) {
  return e === t
    ? !0
    : e == null || t == null || (!$e(e) && !$e(t))
    ? e !== e && t !== t
    : Il(e, t, n, o, Ro, r);
}
function jl(e, t) {
  return Ro(e, t);
}
const Fl = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function Rn(e) {
  return typeof e != 'function' ? null : e();
}
function Dn(e) {
  return typeof e != 'object' || !e ? null : e;
}
const Ll = k({
    compatConfig: { MODE: 3 },
    name: 'Align',
    props: Fl,
    emits: ['align'],
    setup(e, t) {
      let { expose: n, slots: o } = t;
      const r = X({}),
        i = X(),
        [a, s] = $i(
          () => {
            const { disabled: p, target: f, align: h, onAlign: m } = e;
            if (!p && f && i.value) {
              const _ = i.value;
              let w;
              const b = Rn(f),
                T = Dn(f);
              (r.value.element = b), (r.value.point = T), (r.value.align = h);
              const { activeElement: N } = document;
              return (
                b && Ei(b) ? (w = zt(_, b, h)) : T && (w = Si(_, T, h)),
                Ai(N, _),
                m && w && m(_, w),
                !0
              );
            }
            return !1;
          },
          M(() => e.monitorBufferTime)
        ),
        u = X({ cancel: () => {} }),
        l = X({ cancel: () => {} }),
        c = () => {
          const p = e.target,
            f = Rn(p),
            h = Dn(p);
          i.value !== l.value.element &&
            (l.value.cancel(),
            (l.value.element = i.value),
            (l.value.cancel = dn(i.value, a))),
            (r.value.element !== f ||
              !xi(r.value.point, h) ||
              !jl(r.value.align, e.align)) &&
              (a(),
              u.value.element !== f &&
                (u.value.cancel(),
                (u.value.element = f),
                (u.value.cancel = dn(f, a))));
        };
      Je(() => {
        ke(() => {
          c();
        });
      }),
        Mt(() => {
          ke(() => {
            c();
          });
        }),
        q(
          () => e.disabled,
          p => {
            p ? s() : a();
          },
          { immediate: !0, flush: 'post' }
        );
      const d = X(null);
      return (
        q(
          () => e.monitorWindowResize,
          p => {
            p
              ? d.value || (d.value = Ce(window, 'resize', a))
              : d.value && (d.value.remove(), (d.value = null));
          },
          { flush: 'post' }
        ),
        Nt(() => {
          u.value.cancel(), l.value.cancel(), d.value && d.value.remove(), s();
        }),
        n({ forceAlign: () => a(!0) }),
        () => {
          const p = o == null ? void 0 : o.default();
          return p ? qe(p[0], { ref: i }, !0, !0) : null;
        }
      );
    }
  }),
  Bl = k({
    compatConfig: { MODE: 3 },
    name: 'PopupInner',
    inheritAttrs: !1,
    props: jt,
    emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
    setup(e, t) {
      let { expose: n, attrs: o, slots: r } = t;
      const i = $(),
        a = $(),
        s = $(),
        [u, l] = Jr(yr(e, 'stretch')),
        c = () => {
          e.stretch && l(e.getRootDomNode());
        },
        d = $(!1);
      let p;
      q(
        () => e.visible,
        S => {
          clearTimeout(p),
            S
              ? (p = setTimeout(() => {
                  d.value = e.visible;
                }))
              : (d.value = !1);
        },
        { immediate: !0 }
      );
      const [f, h] = Qr(d, c),
        m = $(),
        _ = () => (e.point ? e.point : e.getRootDomNode),
        w = () => {
          var S;
          (S = i.value) === null || S === void 0 || S.forceAlign();
        },
        b = (S, z) => {
          var F;
          const L = e.getClassNameFromAlign(z),
            g = s.value;
          s.value !== L && (s.value = L),
            f.value === 'align' &&
              (g !== L
                ? Promise.resolve().then(() => {
                    w();
                  })
                : h(() => {
                    var E;
                    (E = m.value) === null || E === void 0 || E.call(m);
                  }),
              (F = e.onAlign) === null || F === void 0 || F.call(e, S, z));
        },
        T = M(() => {
          const S = typeof e.animation == 'object' ? e.animation : Un(e);
          return (
            ['onAfterEnter', 'onAfterLeave'].forEach(z => {
              const F = S[z];
              S[z] = L => {
                h(), (f.value = 'stable'), F == null || F(L);
              };
            }),
            S
          );
        }),
        N = () =>
          new Promise(S => {
            m.value = S;
          });
      q(
        [T, f],
        () => {
          !T.value && f.value === 'motion' && h();
        },
        { immediate: !0 }
      ),
        n({ forceAlign: w, getElement: () => a.value.$el || a.value });
      const D = M(() => {
        var S;
        return !(
          !((S = e.align) === null || S === void 0) &&
          S.points &&
          (f.value === 'align' || f.value === 'stable')
        );
      });
      return () => {
        var S;
        const {
            zIndex: z,
            align: F,
            prefixCls: L,
            destroyPopupOnHide: g,
            onMouseenter: E,
            onMouseleave: K,
            onTouchstart: B = () => {},
            onMousedown: W
          } = e,
          y = f.value,
          A = [
            v(v({}, u.value), {
              zIndex: z,
              opacity: y === 'motion' || y === 'stable' || !d.value ? null : 0,
              pointerEvents: !d.value && y !== 'stable' ? 'none' : null
            }),
            o.style
          ];
        let I = kn(
          (S = r.default) === null || S === void 0
            ? void 0
            : S.call(r, { visible: e.visible })
        );
        I.length > 1 && (I = x('div', { class: `${L}-content` }, [I]));
        const V = J(L, o.class, s.value, !e.arrow && `${L}-arrow-hidden`),
          ye = d.value || !e.visible ? Yo(T.value.name, T.value) : {};
        return x(Rt, j(j({ ref: a }, ye), {}, { onBeforeEnter: N }), {
          default: () =>
            !g || e.visible
              ? Xn(
                  x(
                    Ll,
                    {
                      target: _(),
                      key: 'popup',
                      ref: i,
                      monitorWindowResize: !0,
                      disabled: D.value,
                      align: F,
                      onAlign: b
                    },
                    {
                      default: () =>
                        x(
                          'div',
                          {
                            class: V,
                            onMouseenter: E,
                            onMouseleave: K,
                            onMousedown: Kt(W, ['capture']),
                            [pe ? 'onTouchstartPassive' : 'onTouchstart']: Kt(
                              B,
                              ['capture']
                            ),
                            style: A
                          },
                          [I]
                        )
                    }
                  ),
                  [[br, d.value]]
                )
              : null
        });
      };
    }
  }),
  Hl = k({
    compatConfig: { MODE: 3 },
    name: 'Popup',
    inheritAttrs: !1,
    props: Gr,
    setup(e, t) {
      let { attrs: n, slots: o, expose: r } = t;
      const i = $(!1),
        a = $(!1),
        s = $(),
        u = $();
      return (
        q(
          [() => e.visible, () => e.mobile],
          () => {
            (i.value = e.visible), e.visible && e.mobile && (a.value = !0);
          },
          { immediate: !0, flush: 'post' }
        ),
        r({
          forceAlign: () => {
            var l;
            (l = s.value) === null || l === void 0 || l.forceAlign();
          },
          getElement: () => {
            var l;
            return (l = s.value) === null || l === void 0
              ? void 0
              : l.getElement();
          }
        }),
        () => {
          const l = v(v(v({}, e), n), { visible: i.value }),
            c = a.value
              ? x(qr, j(j({}, l), {}, { mobile: e.mobile, ref: s }), {
                  default: o.default
                })
              : x(Bl, j(j({}, l), {}, { ref: s }), { default: o.default });
          return x('div', { ref: u }, [x(fo, l, null), c]);
        }
      );
    }
  });
function zl(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function In(e, t, n) {
  const o = e[t] || {};
  return v(v({}, o), n);
}
function Vl(e, t, n, o) {
  const { points: r } = n,
    i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const s = i[a];
    if (zl(e[s].points, r, o)) return `${t}-placement-${s}`;
  }
  return '';
}
const Wl = {
  methods: {
    setState() {
      let e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = typeof e == 'function' ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const o = this.getDerivedStateFromProps(
          Go(this),
          v(v({}, this.$data), n)
        );
        if (o === null) return;
        n = v(v({}, n), o || {});
      }
      v(this.$data, n),
        this._.isMounted && this.$forceUpdate(),
        ke(() => {
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
let vt;
function Do(e) {
  if (typeof document > 'u') return 0;
  if (e || vt === void 0) {
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
    r === i && (i = n.clientWidth), document.body.removeChild(n), (vt = r - i);
  }
  return vt;
}
function jn(e) {
  const t = e.match(/^(.*)px$/),
    n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? Do() : n;
}
function ec(e) {
  if (typeof document > 'u' || !e || !(e instanceof Element))
    return { width: 0, height: 0 };
  const { width: t, height: n } = getComputedStyle(e, '::-webkit-scrollbar');
  return { width: jn(t), height: jn(n) };
}
const Ul = `vc-util-locker-${Date.now()}`;
let Fn = 0;
function kl() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
function Kl(e) {
  const t = M(() => !!e && !!e.value);
  Fn += 1;
  const n = `${Ul}_${Fn}`;
  Dt(
    o => {
      if (Ue()) {
        if (t.value) {
          const r = Do(),
            i = kl();
          qo(
            `
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${r}px);` : ''}
}`,
            n
          );
        } else Ut(n);
        o(() => {
          Ut(n);
        });
      }
    },
    { flush: 'post' }
  );
}
let ae = 0;
const Ve = Ue(),
  Ln = e => {
    if (!Ve) return null;
    if (e) {
      if (typeof e == 'string') return document.querySelectorAll(e)[0];
      if (typeof e == 'function') return e();
      if (typeof e == 'object' && e instanceof window.HTMLElement) return e;
    }
    return document.body;
  },
  Xl = k({
    compatConfig: { MODE: 3 },
    name: 'PortalWrapper',
    inheritAttrs: !1,
    props: {
      wrapperClassName: String,
      forceRender: { type: Boolean, default: void 0 },
      getContainer: P.any,
      visible: { type: Boolean, default: void 0 },
      autoLock: Zo(),
      didUpdate: Function
    },
    setup(e, t) {
      let { slots: n } = t;
      const o = $(),
        r = $(),
        i = $(),
        a = $(1),
        s = Ue() && document.createElement('div'),
        u = () => {
          var f, h;
          o.value === s &&
            ((h =
              (f = o.value) === null || f === void 0
                ? void 0
                : f.parentNode) === null ||
              h === void 0 ||
              h.removeChild(o.value)),
            (o.value = null);
        };
      let l = null;
      const c = function() {
          return (arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : !1) ||
            (o.value && !o.value.parentNode)
            ? ((l = Ln(e.getContainer)), l ? (l.appendChild(o.value), !0) : !1)
            : !0;
        },
        d = () =>
          Ve ? (o.value || ((o.value = s), c(!0)), p(), o.value) : null,
        p = () => {
          const { wrapperClassName: f } = e;
          o.value && f && f !== o.value.className && (o.value.className = f);
        };
      return (
        Mt(() => {
          p(), c();
        }),
        Kl(
          M(
            () =>
              e.autoLock &&
              e.visible &&
              Ue() &&
              (o.value === document.body || o.value === s)
          )
        ),
        Je(() => {
          let f = !1;
          q(
            [() => e.visible, () => e.getContainer],
            (h, m) => {
              let [_, w] = h,
                [b, T] = m;
              Ve &&
                ((l = Ln(e.getContainer)),
                l === document.body && (_ && !b ? (ae += 1) : f && (ae -= 1))),
                f &&
                  (typeof w == 'function' && typeof T == 'function'
                    ? w.toString() !== T.toString()
                    : w !== T) &&
                  u(),
                (f = !0);
            },
            { immediate: !0, flush: 'post' }
          ),
            ke(() => {
              c() ||
                (i.value = Z(() => {
                  a.value += 1;
                }));
            });
        }),
        Yn(() => {
          const { visible: f } = e;
          Ve && l === document.body && (ae = f && ae ? ae - 1 : ae),
            u(),
            Z.cancel(i.value);
        }),
        () => {
          const { forceRender: f, visible: h } = e;
          let m = null;
          const _ = { getOpenCount: () => ae, getContainer: d };
          return (
            a.value &&
              (f || h || r.value) &&
              (m = x(
                Qo,
                { getContainer: d, ref: r, didUpdate: e.didUpdate },
                {
                  default: () => {
                    var w;
                    return (w = n.default) === null || w === void 0
                      ? void 0
                      : w.call(n, _);
                  }
                }
              )),
            m
          );
        }
      );
    }
  }),
  Yl = [
    'onClick',
    'onMousedown',
    'onTouchstart',
    'onMouseenter',
    'onMouseleave',
    'onFocus',
    'onBlur',
    'onContextmenu'
  ],
  Gl = k({
    compatConfig: { MODE: 3 },
    name: 'Trigger',
    mixins: [Wl],
    inheritAttrs: !1,
    props: Xr(),
    setup(e) {
      const t = M(() => {
          const { popupPlacement: r, popupAlign: i, builtinPlacements: a } = e;
          return r && a ? In(a, r, i) : i;
        }),
        n = $(null),
        o = r => {
          n.value = r;
        };
      return {
        vcTriggerContext: qn('vcTriggerContext', {}),
        popupRef: n,
        setPopupRef: o,
        triggerRef: $(null),
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
        Yl.forEach(n => {
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
      Zn('vcTriggerContext', {
        onPopupMouseDown: this.onPopupMouseDown,
        onPopupMouseenter: this.onPopupMouseenter,
        onPopupMouseleave: this.onPopupMouseleave
      }),
        Jo(this);
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
        Z.cancel(this.attachId);
    },
    methods: {
      updatedCal() {
        const e = this.$props;
        if (this.$data.sPopupVisible) {
          let n;
          !this.clickOutsideHandler &&
            (this.isClickToHide() || this.isContextmenuToShow()) &&
            ((n = e.getDocument(this.getRootDomNode())),
            (this.clickOutsideHandler = Ce(
              n,
              'mousedown',
              this.onDocumentClick
            ))),
            this.touchOutsideHandler ||
              ((n = n || e.getDocument(this.getRootDomNode())),
              (this.touchOutsideHandler = Ce(
                n,
                'touchstart',
                this.onDocumentClick,
                pe ? { passive: !1 } : !1
              ))),
            !this.contextmenuOutsideHandler1 &&
              this.isContextmenuToShow() &&
              ((n = n || e.getDocument(this.getRootDomNode())),
              (this.contextmenuOutsideHandler1 = Ce(
                n,
                'scroll',
                this.onContextmenuClose
              ))),
            !this.contextmenuOutsideHandler2 &&
              this.isContextmenuToShow() &&
              (this.contextmenuOutsideHandler2 = Ce(
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
          de(
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
        de(e.target, e.relatedTarget || document.activeElement) ||
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
        (!de(n, t) || this.isContextMenuOnly()) &&
          !de(o, t) &&
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
              : Te(this.triggerRef);
          return Te(r(i));
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
              : Te(this.triggerRef);
          if (i) return i;
        } catch {}
        return Te(this);
      },
      handleGetPopupClassFromAlign(e) {
        const t = [],
          n = this.$props,
          {
            popupPlacement: o,
            builtinPlacements: r,
            prefixCls: i,
            alignPoint: a,
            getPopupClassNameFromAlign: s
          } = n;
        return o && r && t.push(Vl(r, i, e, a)), s && t.push(s(e)), t.join(' ');
      },
      getPopupAlign() {
        const e = this.$props,
          { popupPlacement: t, popupAlign: n, builtinPlacements: o } = e;
        return t && o ? In(o, t, n) : n;
      },
      getComponent() {
        const e = {};
        this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter),
          this.isMouseLeaveToHide() &&
            (e.onMouseleave = this.onPopupMouseleave),
          (e.onMousedown = this.onPopupMouseDown),
          (e[
            pe ? 'onTouchstartPassive' : 'onTouchstart'
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
            popupAnimation: s,
            popupTransitionName: u,
            popupStyle: l,
            mask: c,
            maskAnimation: d,
            maskTransitionName: p,
            zIndex: f,
            stretch: h,
            alignPoint: m,
            mobile: _,
            arrow: w,
            forceRender: b
          } = this.$props,
          { sPopupVisible: T, point: N } = this.$data,
          D = v(
            v(
              {
                prefixCls: r,
                arrow: w,
                destroyPopupOnHide: i,
                visible: T,
                point: m ? N : null,
                align: this.align,
                animation: s,
                getClassNameFromAlign: t,
                stretch: h,
                getRootDomNode: n,
                mask: c,
                zIndex: f,
                transitionName: u,
                maskAnimation: d,
                maskTransitionName: p,
                class: a,
                style: l,
                onAlign: o.onPopupAlign || co
              },
              e
            ),
            { ref: this.setPopupRef, mobile: _, forceRender: b }
          );
        return x(Hl, D, {
          default: this.$slots.popup || (() => er(this, 'popup'))
        });
      },
      attachParent(e) {
        Z.cancel(this.attachId);
        const { getPopupContainer: t, getDocument: n } = this.$props,
          o = this.getRootDomNode();
        let r;
        t
          ? (o || t.length === 0) && (r = t(o))
          : (r = n(this.getRootDomNode()).body),
          r
            ? r.appendChild(e)
            : (this.attachId = Z(() => {
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
            (tr(this, 'popupVisible') ||
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
        const n = kt(this);
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
        t = $t(nr(this)),
        { alignPoint: n, getPopupContainer: o } = this.$props,
        r = t[0];
      this.childOriginEvents = kt(r);
      const i = { key: 'trigger' };
      this.isContextmenuToShow()
        ? (i.onContextmenu = this.onContextmenu)
        : (i.onContextmenu = this.createTwoChains('onContextmenu')),
        this.isClickToHide() || this.isClickToShow()
          ? ((i.onClick = this.onClick),
            (i.onMousedown = this.onMousedown),
            (i[
              pe ? 'onTouchstartPassive' : 'onTouchstart'
            ] = this.onTouchstart))
          : ((i.onClick = this.createTwoChains('onClick')),
            (i.onMousedown = this.createTwoChains('onMousedown')),
            (i[
              pe ? 'onTouchstartPassive' : 'onTouchstart'
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
            (i.onBlur = l => {
              l &&
                (!l.relatedTarget || !de(l.target, l.relatedTarget)) &&
                this.createTwoChains('onBlur')(l);
            }));
      const a = J(r && r.props && r.props.class, e.class);
      a && (i.class = a);
      const s = qe(r, v(v({}, i), { ref: 'triggerRef' }), !0, !0),
        u = x(
          Xl,
          {
            key: 'portal',
            getContainer: o && (() => o(this.getRootDomNode())),
            didUpdate: this.handlePortalUpdate,
            visible: this.$data.sPopupVisible
          },
          { default: this.getComponent }
        );
      return x(Gn, null, [s, u]);
    }
  }),
  O = {
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
      if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= O.F1 && n <= O.F12))
        return !1;
      switch (n) {
        case O.ALT:
        case O.CAPS_LOCK:
        case O.CONTEXT_MENU:
        case O.CTRL:
        case O.DOWN:
        case O.END:
        case O.ESC:
        case O.HOME:
        case O.INSERT:
        case O.LEFT:
        case O.MAC_FF_META:
        case O.META:
        case O.NUMLOCK:
        case O.NUM_CENTER:
        case O.PAGE_DOWN:
        case O.PAGE_UP:
        case O.PAUSE:
        case O.PRINT_SCREEN:
        case O.RIGHT:
        case O.SHIFT:
        case O.UP:
        case O.WIN_KEY:
        case O.WIN_KEY_RIGHT:
          return !1;
        default:
          return !0;
      }
    },
    isCharacterKey: function(t) {
      if (
        (t >= O.ZERO && t <= O.NINE) ||
        (t >= O.NUM_ZERO && t <= O.NUM_MULTIPLY) ||
        (t >= O.A && t <= O.Z) ||
        (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
      )
        return !0;
      switch (t) {
        case O.SPACE:
        case O.QUESTION_MARK:
        case O.NUM_PLUS:
        case O.NUM_MINUS:
        case O.NUM_PERIOD:
        case O.NUM_DIVISION:
        case O.SEMICOLON:
        case O.DASH:
        case O.EQUALS:
        case O.COMMA:
        case O.PERIOD:
        case O.SLASH:
        case O.APOSTROPHE:
        case O.SINGLE_QUOTE:
        case O.OPEN_SQUARE_BRACKET:
        case O.BACKSLASH:
        case O.CLOSE_SQUARE_BRACKET:
          return !0;
        default:
          return !1;
      }
    }
  },
  tc = O,
  Io = Symbol('OverflowContextProviderKey'),
  At = k({
    compatConfig: { MODE: 3 },
    name: 'OverflowContextProvider',
    inheritAttrs: !1,
    props: { value: { type: Object } },
    setup(e, t) {
      let { slots: n } = t;
      return (
        Zn(
          Io,
          M(() => e.value)
        ),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    }
  }),
  ql = () =>
    qn(
      Io,
      M(() => null)
    );
var Zl =
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
const fe = void 0,
  We = k({
    compatConfig: { MODE: 3 },
    name: 'Item',
    props: {
      prefixCls: String,
      item: P.any,
      renderItem: Function,
      responsive: Boolean,
      itemKey: { type: [String, Number] },
      registerSize: Function,
      display: Boolean,
      order: Number,
      component: P.any,
      invalidate: Boolean
    },
    setup(e, t) {
      let { slots: n, expose: o } = t;
      const r = M(() => e.responsive && !e.display),
        i = X();
      o({ itemNodeRef: i });
      function a(s) {
        e.registerSize(e.itemKey, s);
      }
      return (
        Nt(() => {
          a(null);
        }),
        () => {
          var s;
          const {
              prefixCls: u,
              invalidate: l,
              item: c,
              renderItem: d,
              responsive: p,
              registerSize: f,
              itemKey: h,
              display: m,
              order: _,
              component: w = 'div'
            } = e,
            b = Zl(e, [
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
            T = (s = n.default) === null || s === void 0 ? void 0 : s.call(n),
            N = d && c !== fe ? d(c) : T;
          let D;
          l ||
            (D = {
              opacity: r.value ? 0 : 1,
              height: r.value ? 0 : fe,
              overflowY: r.value ? 'hidden' : fe,
              order: p ? _ : fe,
              pointerEvents: r.value ? 'none' : fe,
              position: r.value ? 'absolute' : fe
            });
          const S = {};
          return (
            r.value && (S['aria-hidden'] = !0),
            x(
              ro,
              {
                disabled: !p,
                onResize: z => {
                  let { offsetWidth: F } = z;
                  a(F);
                }
              },
              {
                default: () =>
                  x(
                    w,
                    j(
                      j(j({ class: J(!l && u), style: D }, S), b),
                      {},
                      { ref: i }
                    ),
                    { default: () => [N] }
                  )
              }
            )
          );
        }
      );
    }
  });
var mt =
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
const Ql = k({
  compatConfig: { MODE: 3 },
  name: 'RawItem',
  inheritAttrs: !1,
  props: {
    component: P.any,
    title: P.any,
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
    const r = ql();
    return () => {
      var i;
      if (!r.value) {
        const { component: d = 'div' } = e,
          p = mt(e, ['component']);
        return x(d, j(j({}, p), o), {
          default: () => [
            (i = n.default) === null || i === void 0 ? void 0 : i.call(n)
          ]
        });
      }
      const a = r.value,
        { className: s } = a,
        u = mt(a, ['className']),
        { class: l } = o,
        c = mt(o, ['class']);
      return x(
        At,
        { value: null },
        { default: () => [x(We, j(j(j({ class: J(s, l) }, u), c), e), n)] }
      );
    };
  }
});
var Jl =
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
const jo = 'responsive',
  Fo = 'invalidate';
function eu(e) {
  return `+ ${e.length} ...`;
}
const tu = () => ({
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
    suffix: P.any,
    component: String,
    itemComponent: P.any,
    onVisibleChange: Function,
    ssr: String,
    onMousedown: Function,
    role: String
  }),
  rt = k({
    name: 'Overflow',
    inheritAttrs: !1,
    props: tu(),
    emits: ['visibleChange'],
    setup(e, t) {
      let { attrs: n, emit: o, slots: r } = t;
      const i = M(() => e.ssr === 'full'),
        a = $(null),
        s = M(() => a.value || 0),
        u = $(new Map()),
        l = $(0),
        c = $(0),
        d = $(0),
        p = $(null),
        f = $(null),
        h = M(() =>
          f.value === null && i.value ? Number.MAX_SAFE_INTEGER : f.value || 0
        ),
        m = $(!1),
        _ = M(() => `${e.prefixCls}-item`),
        w = M(() => Math.max(l.value, c.value)),
        b = M(() => !!(e.data.length && e.maxCount === jo)),
        T = M(() => e.maxCount === Fo),
        N = M(
          () =>
            b.value ||
            (typeof e.maxCount == 'number' && e.data.length > e.maxCount)
        ),
        D = M(() => {
          let y = e.data;
          return (
            b.value
              ? a.value === null && i.value
                ? (y = e.data)
                : (y = e.data.slice(
                    0,
                    Math.min(e.data.length, s.value / e.itemWidth)
                  ))
              : typeof e.maxCount == 'number' &&
                (y = e.data.slice(0, e.maxCount)),
            y
          );
        }),
        S = M(() =>
          b.value ? e.data.slice(h.value + 1) : e.data.slice(D.value.length)
        ),
        z = (y, A) => {
          var I;
          return typeof e.itemKey == 'function'
            ? e.itemKey(y)
            : (I = e.itemKey && (y == null ? void 0 : y[e.itemKey])) !== null &&
              I !== void 0
            ? I
            : A;
        },
        F = M(() => e.renderItem || (y => y)),
        L = (y, A) => {
          (f.value = y),
            A || ((m.value = y < e.data.length - 1), o('visibleChange', y));
        },
        g = (y, A) => {
          a.value = A.clientWidth;
        },
        E = (y, A) => {
          const I = new Map(u.value);
          A === null ? I.delete(y) : I.set(y, A), (u.value = I);
        },
        K = (y, A) => {
          (l.value = c.value), (c.value = A);
        },
        B = (y, A) => {
          d.value = A;
        },
        W = y => u.value.get(z(D.value[y], y));
      return (
        q([s, u, c, d, () => e.itemKey, D], () => {
          if (s.value && w.value && D.value) {
            let y = d.value;
            const A = D.value.length,
              I = A - 1;
            if (!A) {
              L(0), (p.value = null);
              return;
            }
            for (let V = 0; V < A; V += 1) {
              const ne = W(V);
              if (ne === void 0) {
                L(V - 1, !0);
                break;
              }
              if (
                ((y += ne),
                (I === 0 && y <= s.value) ||
                  (V === I - 1 && y + W(I) <= s.value))
              ) {
                L(I), (p.value = null);
                break;
              } else if (y + w.value > s.value) {
                L(V - 1), (p.value = y - ne - d.value + c.value);
                break;
              }
            }
            e.suffix && W(0) + d.value > s.value && (p.value = null);
          }
        }),
        () => {
          const y = m.value && !!S.value.length,
            {
              itemComponent: A,
              renderRawItem: I,
              renderRawRest: V,
              renderRest: ne,
              prefixCls: ye = 'rc-overflow',
              suffix: Re,
              component: it = 'div',
              id: at,
              onMousedown: zo
            } = e,
            { class: Vo, style: Wo } = n,
            Uo = Jl(n, ['class', 'style']);
          let Vt = {};
          p.value !== null &&
            b.value &&
            (Vt = { position: 'absolute', left: `${p.value}px`, top: 0 });
          const be = {
              prefixCls: _.value,
              responsive: b.value,
              component: A,
              invalidate: T.value
            },
            ko = I
              ? (U, oe) => {
                  const we = z(U, oe);
                  return x(
                    At,
                    {
                      key: we,
                      value: v(v({}, be), {
                        order: oe,
                        item: U,
                        itemKey: we,
                        registerSize: E,
                        display: oe <= h.value
                      })
                    },
                    { default: () => [I(U, oe)] }
                  );
                }
              : (U, oe) => {
                  const we = z(U, oe);
                  return x(
                    We,
                    j(
                      j({}, be),
                      {},
                      {
                        order: oe,
                        key: we,
                        item: U,
                        renderItem: F.value,
                        itemKey: we,
                        registerSize: E,
                        display: oe <= h.value
                      }
                    ),
                    null
                  );
                };
          let st = () => null;
          const Wt = {
            order: y ? h.value : Number.MAX_SAFE_INTEGER,
            className: `${_.value} ${_.value}-rest`,
            registerSize: K,
            display: y
          };
          if (V)
            V &&
              (st = () =>
                x(
                  At,
                  { value: v(v({}, be), Wt) },
                  { default: () => [V(S.value)] }
                ));
          else {
            const U = ne || eu;
            st = () =>
              x(We, j(j({}, be), Wt), {
                default: () => (typeof U == 'function' ? U(S.value) : U)
              });
          }
          const Ko = () => {
            var U;
            return x(
              it,
              j(
                {
                  id: at,
                  class: J(!T.value && ye, Vo),
                  style: Wo,
                  onMousedown: zo,
                  role: e.role
                },
                Uo
              ),
              {
                default: () => [
                  D.value.map(ko),
                  N.value ? st() : null,
                  Re &&
                    x(
                      We,
                      j(
                        j({}, be),
                        {},
                        {
                          order: h.value,
                          class: `${_.value}-suffix`,
                          registerSize: B,
                          display: !0,
                          style: Vt
                        }
                      ),
                      { default: () => Re }
                    ),
                  (U = r.default) === null || U === void 0 ? void 0 : U.call(r)
                ]
              }
            );
          };
          return x(ro, { disabled: !b.value, onResize: g }, { default: Ko });
        }
      );
    }
  });
rt.Item = Ql;
rt.RESPONSIVE = jo;
rt.INVALIDATE = Fo;
const nc = rt,
  oc = () => {
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
function rc(e, t) {
  const { defaultValue: n, value: o = X() } = t || {};
  let r = typeof e == 'function' ? e() : e;
  o.value !== void 0 && (r = wr(o)),
    n !== void 0 && (r = typeof n == 'function' ? n() : n);
  const i = X(r),
    a = X(r);
  Dt(() => {
    let u = o.value !== void 0 ? o.value : i.value;
    t.postState && (u = t.postState(u)), (a.value = u);
  });
  function s(u) {
    const l = a.value;
    (i.value = u), gt(a.value) !== u && t.onChange && t.onChange(u, l);
  }
  return (
    q(o, () => {
      i.value = o.value;
    }),
    [a, s]
  );
}
function ic(e) {
  const t = typeof e == 'function' ? e() : e,
    n = X(t);
  function o(r) {
    n.value = r;
  }
  return [n, o];
}
const nu = e => ({ animationDuration: e, animationFillMode: 'both' }),
  ou = e => ({ animationDuration: e, animationFillMode: 'both' }),
  Lo = function(e, t, n, o) {
    const i = (arguments.length > 4 && arguments[4] !== void 0
    ? arguments[4]
    : !1)
      ? '&'
      : '';
    return {
      [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: v(v({}, nu(o)), { animationPlayState: 'paused' }),
      [`${i}${e}-leave`]: v(v({}, ou(o)), { animationPlayState: 'paused' }),
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
  ru = new H('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 }
  }),
  iu = new H('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 }
  }),
  au = new H('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0
    },
    '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 }
  }),
  su = new H('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0
    }
  }),
  lu = new H('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 }
  }),
  uu = new H('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 }
  }),
  cu = new H('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 }
  }),
  fu = new H('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 }
  }),
  du = {
    'slide-up': { inKeyframes: ru, outKeyframes: iu },
    'slide-down': { inKeyframes: au, outKeyframes: su },
    'slide-left': { inKeyframes: lu, outKeyframes: uu },
    'slide-right': { inKeyframes: cu, outKeyframes: fu }
  },
  ac = (e, t) => {
    const { antCls: n } = e,
      o = `${n}-${t}`,
      { inKeyframes: r, outKeyframes: i } = du[t];
    return [
      Lo(o, r, i, e.motionDurationMid),
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
  pu = new H('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 }
  }),
  hu = new H('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 }
  }),
  Bn = new H('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 }
  }),
  Hn = new H('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 }
  }),
  vu = new H('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' }
  }),
  mu = new H('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 }
  }),
  gu = new H('antZoomLeftIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' }
  }),
  yu = new H('antZoomLeftOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 }
  }),
  bu = new H('antZoomRightIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' }
  }),
  wu = new H('antZoomRightOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 }
  }),
  Ou = new H('antZoomDownIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' }
  }),
  _u = new H('antZoomDownOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 }
  }),
  Tu = {
    zoom: { inKeyframes: pu, outKeyframes: hu },
    'zoom-big': { inKeyframes: Bn, outKeyframes: Hn },
    'zoom-big-fast': { inKeyframes: Bn, outKeyframes: Hn },
    'zoom-left': { inKeyframes: gu, outKeyframes: yu },
    'zoom-right': { inKeyframes: bu, outKeyframes: wu },
    'zoom-up': { inKeyframes: vu, outKeyframes: mu },
    'zoom-down': { inKeyframes: Ou, outKeyframes: _u }
  },
  Cu = (e, t) => {
    const { antCls: n } = e,
      o = `${n}-${t}`,
      { inKeyframes: r, outKeyframes: i } = Tu[t];
    return [
      Lo(
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
  Y = { adjustX: 1, adjustY: 1 },
  G = [0, 0],
  Bo = {
    left: {
      points: ['cr', 'cl'],
      overflow: Y,
      offset: [-4, 0],
      targetOffset: G
    },
    right: {
      points: ['cl', 'cr'],
      overflow: Y,
      offset: [4, 0],
      targetOffset: G
    },
    top: {
      points: ['bc', 'tc'],
      overflow: Y,
      offset: [0, -4],
      targetOffset: G
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: Y,
      offset: [0, 4],
      targetOffset: G
    },
    topLeft: {
      points: ['bl', 'tl'],
      overflow: Y,
      offset: [0, -4],
      targetOffset: G
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: Y,
      offset: [-4, 0],
      targetOffset: G
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: Y,
      offset: [0, -4],
      targetOffset: G
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: Y,
      offset: [4, 0],
      targetOffset: G
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: Y,
      offset: [0, 4],
      targetOffset: G
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: Y,
      offset: [4, 0],
      targetOffset: G
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: Y,
      offset: [0, 4],
      targetOffset: G
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: Y,
      offset: [-4, 0],
      targetOffset: G
    }
  },
  Pu = { prefixCls: String, id: String, overlayInnerStyle: P.any },
  Su = k({
    compatConfig: { MODE: 3 },
    name: 'TooltipContent',
    props: Pu,
    setup(e, t) {
      let { slots: n } = t;
      return () => {
        var o;
        return x(
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
var Eu =
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
function zn() {}
const xu = k({
    compatConfig: { MODE: 3 },
    name: 'Tooltip',
    inheritAttrs: !1,
    props: {
      trigger: P.any.def(['hover']),
      defaultVisible: { type: Boolean, default: void 0 },
      visible: { type: Boolean, default: void 0 },
      placement: P.string.def('right'),
      transitionName: String,
      animation: P.any,
      afterVisibleChange: P.func.def(() => {}),
      overlayStyle: { type: Object, default: void 0 },
      overlayClassName: String,
      prefixCls: P.string.def('rc-tooltip'),
      mouseEnterDelay: P.number.def(0.1),
      mouseLeaveDelay: P.number.def(0.1),
      getPopupContainer: Function,
      destroyTooltipOnHide: { type: Boolean, default: !1 },
      align: P.object.def(() => ({})),
      arrowContent: P.any.def(null),
      tipId: String,
      builtinPlacements: P.object,
      overlayInnerStyle: { type: Object, default: void 0 },
      popupVisible: { type: Boolean, default: void 0 },
      onVisibleChange: Function,
      onPopupAlign: Function,
      arrow: { type: Boolean, default: !0 }
    },
    setup(e, t) {
      let { slots: n, attrs: o, expose: r } = t;
      const i = $(),
        a = () => {
          const { prefixCls: c, tipId: d, overlayInnerStyle: p } = e;
          return [
            e.arrow
              ? x('div', { class: `${c}-arrow`, key: 'arrow' }, [
                  or(n, e, 'arrowContent')
                ])
              : null,
            x(
              Su,
              { key: 'content', prefixCls: c, id: d, overlayInnerStyle: p },
              { overlay: n.overlay }
            )
          ];
        };
      r({
        getPopupDomNode: () => i.value.getPopupDomNode(),
        triggerDOM: i,
        forcePopupAlign: () => {
          var c;
          return (c = i.value) === null || c === void 0
            ? void 0
            : c.forcePopupAlign();
        }
      });
      const u = $(!1),
        l = $(!1);
      return (
        Dt(() => {
          const { destroyTooltipOnHide: c } = e;
          if (typeof c == 'boolean') u.value = c;
          else if (c && typeof c == 'object') {
            const { keepParent: d } = c;
            (u.value = d === !0), (l.value = d === !1);
          }
        }),
        () => {
          const {
              overlayClassName: c,
              trigger: d,
              mouseEnterDelay: p,
              mouseLeaveDelay: f,
              overlayStyle: h,
              prefixCls: m,
              afterVisibleChange: _,
              transitionName: w,
              animation: b,
              placement: T,
              align: N,
              destroyTooltipOnHide: D,
              defaultVisible: S
            } = e,
            z = Eu(e, [
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
            F = v({}, z);
          e.visible !== void 0 && (F.popupVisible = e.visible);
          const L = v(
            v(
              v(
                {
                  popupClassName: c,
                  prefixCls: m,
                  action: d,
                  builtinPlacements: Bo,
                  popupPlacement: T,
                  popupAlign: N,
                  afterPopupVisibleChange: _,
                  popupTransitionName: w,
                  popupAnimation: b,
                  defaultPopupVisible: S,
                  destroyPopupOnHide: u.value,
                  autoDestroy: l.value,
                  mouseLeaveDelay: f,
                  popupStyle: h,
                  mouseEnterDelay: p
                },
                F
              ),
              o
            ),
            {
              onPopupVisibleChange: e.onVisibleChange || zn,
              onPopupAlign: e.onPopupAlign || zn,
              ref: i,
              arrow: !!e.arrow,
              popup: a()
            }
          );
          return x(Gl, L, { default: n.default });
        }
      );
    }
  }),
  Au = () => ({
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
  $u = { adjustX: 1, adjustY: 1 },
  Vn = { adjustX: 0, adjustY: 0 },
  Mu = [0, 0];
function Wn(e) {
  return typeof e == 'boolean' ? (e ? $u : Vn) : v(v({}, Vn), e);
}
function Nu(e) {
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
    Object.keys(a).forEach(s => {
      (a[s] = i
        ? v(v({}, a[s]), { overflow: Wn(r), targetOffset: Mu })
        : v(v({}, Bo[s]), { overflow: Wn(r) })),
        (a[s].ignoreShake = !0);
    }),
    a
  );
}
function Ru() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++) if (e[t] !== void 0) return e[t];
}
const Du = Ye.map(e => `${e}-inverse`),
  Iu = ['success', 'processing', 'error', 'default', 'warning'];
function ju(e) {
  return (arguments.length > 1 && arguments[1] !== void 0
  ? arguments[1]
  : !0)
    ? [...Du, ...Ye].includes(e)
    : Ye.includes(e);
}
function sc(e) {
  return Iu.includes(e);
}
function Fu(e, t) {
  const n = ju(t),
    o = J({ [`${e}-${t}`]: t && n }),
    r = {},
    i = {};
  return (
    t && !n && ((r.background = t), (i['--antd-arrow-background-color'] = t)),
    { className: o, overlayStyle: r, arrowStyle: i }
  );
}
function He(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
  return e.map(n => `${t}${n}`).join(',');
}
const Ho = 8;
function Lu(e) {
  const t = Ho,
    {
      sizePopupArrow: n,
      contentRadius: o,
      borderRadiusOuter: r,
      limitVerticalRadius: i
    } = e,
    a = n / 2 - Math.ceil(r * (Math.sqrt(2) - 1)),
    s = (o > 12 ? o + 2 : 12) - a,
    u = i ? t - a : s;
  return { dropdownArrowOffset: s, dropdownArrowOffsetVertical: u };
}
function Bu(e, t) {
  const {
      componentCls: n,
      sizePopupArrow: o,
      marginXXS: r,
      borderRadiusXS: i,
      borderRadiusOuter: a,
      boxShadowPopoverArrow: s
    } = e,
    {
      colorBg: u,
      showArrowCls: l,
      contentRadius: c = e.borderRadiusLG,
      limitVerticalRadius: d
    } = t,
    { dropdownArrowOffsetVertical: p, dropdownArrowOffset: f } = Lu({
      sizePopupArrow: o,
      contentRadius: c,
      borderRadiusOuter: a,
      limitVerticalRadius: d
    }),
    h = o / 2 + r;
  return {
    [n]: {
      [`${n}-arrow`]: [
        v(
          v(
            { position: 'absolute', zIndex: 1, display: 'block' },
            Wr(o, i, a, u, s)
          ),
          { '&:before': { background: u } }
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
        left: { _skip_check_: !0, value: f }
      },
      [`&-placement-topRight ${n}-arrow`]: {
        right: { _skip_check_: !0, value: f }
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
        left: { _skip_check_: !0, value: f }
      },
      [`&-placement-bottomRight ${n}-arrow`]: {
        right: { _skip_check_: !0, value: f }
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
      [`&-placement-leftTop ${n}-arrow`]: { top: p },
      [`&-placement-leftBottom ${n}-arrow`]: { bottom: p },
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
      [`&-placement-rightTop ${n}-arrow`]: { top: p },
      [`&-placement-rightBottom ${n}-arrow`]: { bottom: p },
      [He(
        ['&-placement-topLeft', '&-placement-top', '&-placement-topRight'].map(
          m => (m += ':not(&-arrow-hidden)')
        ),
        l
      )]: { paddingBottom: h },
      [He(
        [
          '&-placement-bottomLeft',
          '&-placement-bottom',
          '&-placement-bottomRight'
        ].map(m => (m += ':not(&-arrow-hidden)')),
        l
      )]: { paddingTop: h },
      [He(
        [
          '&-placement-leftTop',
          '&-placement-left',
          '&-placement-leftBottom'
        ].map(m => (m += ':not(&-arrow-hidden)')),
        l
      )]: { paddingRight: { _skip_check_: !0, value: h } },
      [He(
        [
          '&-placement-rightTop',
          '&-placement-right',
          '&-placement-rightBottom'
        ].map(m => (m += ':not(&-arrow-hidden)')),
        l
      )]: { paddingLeft: { _skip_check_: !0, value: h } }
    }
  };
}
const Hu = e => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: o,
      tooltipBg: r,
      tooltipBorderRadius: i,
      zIndexPopup: a,
      controlHeight: s,
      boxShadowSecondary: u,
      paddingSM: l,
      paddingXS: c,
      tooltipRadiusOuter: d
    } = e;
    return [
      {
        [t]: v(
          v(
            v(v({}, ir(e)), {
              position: 'absolute',
              zIndex: a,
              display: 'block',
              '&': [{ width: 'max-content' }, { width: 'intrinsic' }],
              maxWidth: n,
              visibility: 'visible',
              '&-hidden': { display: 'none' },
              '--antd-arrow-background-color': r,
              [`${t}-inner`]: {
                minWidth: s,
                minHeight: s,
                padding: `${l / 2}px ${c}px`,
                color: o,
                textAlign: 'start',
                textDecoration: 'none',
                wordWrap: 'break-word',
                backgroundColor: r,
                borderRadius: i,
                boxShadow: u
              },
              [[
                '&-placement-left',
                '&-placement-leftTop',
                '&-placement-leftBottom',
                '&-placement-right',
                '&-placement-rightTop',
                '&-placement-rightBottom'
              ].join(',')]: {
                [`${t}-inner`]: { borderRadius: Math.min(i, Ho) }
              },
              [`${t}-content`]: { position: 'relative' }
            }),
            Ur(e, (p, f) => {
              let { darkColor: h } = f;
              return {
                [`&${t}-${p}`]: {
                  [`${t}-inner`]: { backgroundColor: h },
                  [`${t}-arrow`]: { '--antd-arrow-background-color': h }
                }
              };
            })
          ),
          { '&-rtl': { direction: 'rtl' } }
        )
      },
      Bu(Kn(e, { borderRadiusOuter: d }), {
        colorBg: 'var(--antd-arrow-background-color)',
        showArrowCls: '',
        contentRadius: i,
        limitVerticalRadius: !0
      }),
      { [`${t}-pure`]: { position: 'relative', maxWidth: 'none' } }
    ];
  },
  zu = (e, t) =>
    rr(
      'Tooltip',
      o => {
        if ((t == null ? void 0 : t.value) === !1) return [];
        const {
            borderRadius: r,
            colorTextLightSolid: i,
            colorBgDefault: a,
            borderRadiusOuter: s
          } = o,
          u = Kn(o, {
            tooltipMaxWidth: 250,
            tooltipColor: i,
            tooltipBorderRadius: r,
            tooltipBg: a,
            tooltipRadiusOuter: s > 4 ? 4 : s
          });
        return [Hu(u), Cu(o, 'zoom-big-fast')];
      },
      o => {
        let { zIndexPopupBase: r, colorBgSpotlight: i } = o;
        return { zIndexPopup: r + 70, colorBgDefault: i };
      }
    )(e),
  Vu = (e, t) => {
    const n = {},
      o = v({}, e);
    return (
      t.forEach(r => {
        e && r in e && ((n[r] = e[r]), delete o[r]);
      }),
      { picked: n, omitted: o }
    );
  },
  Wu = () => v(v({}, Au()), { title: P.any }),
  lc = () => ({
    trigger: 'hover',
    align: {},
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0
  }),
  Uu = k({
    compatConfig: { MODE: 3 },
    name: 'ATooltip',
    inheritAttrs: !1,
    props: Br(Wu(), {
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
          getPopupContainer: s,
          direction: u,
          rootPrefixCls: l
        } = ar('tooltip', e),
        c = M(() => {
          var g;
          return (g = e.open) !== null && g !== void 0 ? g : e.visible;
        }),
        d = X(Ru([e.open, e.visible])),
        p = X();
      let f;
      q(c, g => {
        Z.cancel(f),
          (f = Z(() => {
            d.value = !!g;
          }));
      });
      const h = () => {
          var g;
          const E = (g = e.title) !== null && g !== void 0 ? g : n.title;
          return !E && E !== 0;
        },
        m = g => {
          const E = h();
          c.value === void 0 && (d.value = E ? !1 : g),
            E ||
              (o('update:visible', g),
              o('visibleChange', g),
              o('update:open', g),
              o('openChange', g));
        };
      i({
        getPopupDomNode: () => p.value.getPopupDomNode(),
        open: d,
        forcePopupAlign: () => {
          var g;
          return (g = p.value) === null || g === void 0
            ? void 0
            : g.forcePopupAlign();
        }
      });
      const w = M(() => {
          var g;
          const {
            builtinPlacements: E,
            autoAdjustOverflow: K,
            arrow: B,
            arrowPointAtCenter: W
          } = e;
          let y = W;
          return (
            typeof B == 'object' &&
              (y = (g = B.pointAtCenter) !== null && g !== void 0 ? g : W),
            E || Nu({ arrowPointAtCenter: y, autoAdjustOverflow: K })
          );
        }),
        b = g => g || g === '',
        T = g => {
          const E = g.type;
          if (
            typeof E == 'object' &&
            g.props &&
            (((E.__ANT_BUTTON === !0 || E === 'button') &&
              b(g.props.disabled)) ||
              (E.__ANT_SWITCH === !0 &&
                (b(g.props.disabled) || b(g.props.loading))) ||
              (E.__ANT_RADIO === !0 && b(g.props.disabled)))
          ) {
            const { picked: K, omitted: B } = Vu(cr(g), [
                'position',
                'left',
                'right',
                'top',
                'bottom',
                'float',
                'display',
                'zIndex'
              ]),
              W = v(v({ display: 'inline-block' }, K), {
                cursor: 'not-allowed',
                lineHeight: 1,
                width: g.props && g.props.block ? '100%' : void 0
              }),
              y = v(v({}, B), { pointerEvents: 'none' }),
              A = qe(g, { style: y }, !0);
            return x(
              'span',
              { style: W, class: `${a.value}-disabled-compatible-wrapper` },
              [A]
            );
          }
          return g;
        },
        N = () => {
          var g, E;
          return (g = e.title) !== null && g !== void 0
            ? g
            : (E = n.title) === null || E === void 0
            ? void 0
            : E.call(n);
        },
        D = (g, E) => {
          const K = w.value,
            B = Object.keys(K).find(W => {
              var y, A;
              return (
                K[W].points[0] ===
                  ((y = E.points) === null || y === void 0 ? void 0 : y[0]) &&
                K[W].points[1] ===
                  ((A = E.points) === null || A === void 0 ? void 0 : A[1])
              );
            });
          if (B) {
            const W = g.getBoundingClientRect(),
              y = { top: '50%', left: '50%' };
            B.indexOf('top') >= 0 || B.indexOf('Bottom') >= 0
              ? (y.top = `${W.height - E.offset[1]}px`)
              : (B.indexOf('Top') >= 0 || B.indexOf('bottom') >= 0) &&
                (y.top = `${-E.offset[1]}px`),
              B.indexOf('left') >= 0 || B.indexOf('Right') >= 0
                ? (y.left = `${W.width - E.offset[0]}px`)
                : (B.indexOf('right') >= 0 || B.indexOf('Left') >= 0) &&
                  (y.left = `${-E.offset[0]}px`),
              (g.style.transformOrigin = `${y.left} ${y.top}`);
          }
        },
        S = M(() => Fu(a.value, e.color)),
        z = M(() => r['data-popover-inject']),
        [F, L] = zu(
          a,
          M(() => !z.value)
        );
      return () => {
        var g, E;
        const {
          openClassName: K,
          overlayClassName: B,
          overlayStyle: W,
          overlayInnerStyle: y
        } = e;
        let A =
          (E = $t(
            (g = n.default) === null || g === void 0 ? void 0 : g.call(n)
          )) !== null && E !== void 0
            ? E
            : null;
        A = A.length === 1 ? A[0] : A;
        let I = d.value;
        if ((c.value === void 0 && h() && (I = !1), !A)) return null;
        const V = T(sr(A) && !lr(A) ? A : x('span', null, [A])),
          ne = J({
            [K || `${a.value}-open`]: !0,
            [V.props && V.props.class]: V.props && V.props.class
          }),
          ye = J(
            B,
            { [`${a.value}-rtl`]: u.value === 'rtl' },
            S.value.className,
            L.value
          ),
          Re = v(v({}, S.value.overlayStyle), y),
          it = S.value.arrowStyle,
          at = v(v(v({}, r), e), {
            prefixCls: a.value,
            arrow: !!e.arrow,
            getPopupContainer: s == null ? void 0 : s.value,
            builtinPlacements: w.value,
            visible: I,
            ref: p,
            overlayClassName: ye,
            overlayStyle: v(v({}, it), W),
            overlayInnerStyle: Re,
            onVisibleChange: m,
            onPopupAlign: D,
            transitionName: ur(l.value, 'zoom-big-fast', e.transitionName)
          });
        return F(
          x(xu, at, {
            default: () => [d.value ? qe(V, { class: ne }) : V],
            arrowContent: () =>
              x('span', { class: `${a.value}-arrow-content` }, null),
            overlay: N
          })
        );
      };
    }
  }),
  uc = fr(Uu);
function ku(e, t, n, o) {
  let r = n ? n.call(o, e, t) : void 0;
  if (r !== void 0) return !!r;
  if (e === t) return !0;
  if (typeof e != 'object' || !e || typeof t != 'object' || !t) return !1;
  const i = Object.keys(e),
    a = Object.keys(t);
  if (i.length !== a.length) return !1;
  const s = Object.prototype.hasOwnProperty.bind(t);
  for (let u = 0; u < i.length; u++) {
    const l = i[u];
    if (!s(l)) return !1;
    const c = e[l],
      d = t[l];
    if (
      ((r = n ? n.call(o, c, d, l) : void 0),
      r === !1 || (r === void 0 && c !== d))
    )
      return !1;
  }
  return !0;
}
function cc(e, t) {
  return ku(gt(e), gt(t));
}
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ku = e => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ze = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
};
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xu = (
  {
    size: e,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    color: o,
    iconNode: r,
    name: i,
    class: a,
    ...s
  },
  { slots: u }
) =>
  yt(
    'svg',
    {
      ...ze,
      width: e || ze.width,
      height: e || ze.height,
      stroke: o || ze.stroke,
      'stroke-width': n ? (Number(t) * 24) / Number(e) : t,
      class: ['lucide', `lucide-${Ku(i ?? 'icon')}`],
      ...s
    },
    [...r.map(l => yt(...l)), ...(u.default ? [u.default()] : [])]
  );
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fc = (e, t) => (n, { slots: o }) =>
  yt(Xu, { ...n, iconNode: t, name: e }, o);
export {
  $e as $,
  Hr as A,
  Ju as B,
  pe as C,
  Ce as D,
  Do as E,
  ec as F,
  uc as G,
  Bu as H,
  lc as I,
  Au as J,
  tc as K,
  Wl as L,
  Ru as M,
  oc as N,
  nc as O,
  Ye as P,
  Lo as Q,
  ro as R,
  gl as S,
  Gl as T,
  Qe as U,
  Ct as V,
  No as W,
  _s as X,
  An as Y,
  cl as Z,
  ml as _,
  Vr as a,
  Ne as a0,
  me as a1,
  ge as a2,
  _o as a3,
  ce as a4,
  ls as a5,
  fl as a6,
  $o as a7,
  As as a8,
  Et as a9,
  Xa as aa,
  Ze as ab,
  Va as ac,
  ic as b,
  qe as c,
  au as d,
  ru as e,
  su as f,
  iu as g,
  ac as h,
  Ei as i,
  Ur as j,
  ju as k,
  sc as l,
  fc as m,
  qu as n,
  Zu as o,
  Po as p,
  te as q,
  Wr as r,
  cc as s,
  Lu as t,
  rc as u,
  Cu as v,
  Z as w,
  Br as x,
  Qu as y,
  Nu as z
};
