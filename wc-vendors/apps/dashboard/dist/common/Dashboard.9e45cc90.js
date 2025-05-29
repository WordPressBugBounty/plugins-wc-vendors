import { _ as Oe } from '../main.1bdb0c68.js';
import {
  F as De,
  i as ut,
  C as Ta,
  T as wo,
  f as _,
  g as te,
  p as ce,
  r as B,
  u as D,
  d as k,
  s as K,
  w as ue,
  h as Oo,
  j as Lt,
  k as $o,
  t as Ea,
  l as b,
  m as Re,
  n as Pa,
  q as Fe,
  v as Aa,
  x as _o,
  y as To,
  z as tt,
  A as Ra,
  B as Eo,
  D as vr,
  E as Ia,
  G as ja,
  a as $e,
  o as Ma,
  H as Na,
  I as _e,
  J as ka
} from './vendor.47b1711b.js';
import {
  T as F,
  g as nt,
  b as La,
  L as Da,
  C as Fa,
  a as Ha,
  c as Ba,
  E as za,
  I as Ua,
  d as Ga,
  e as qa,
  f as Wa,
  h as Xa
} from './antd.ddaabbc2.js';
function rt(e) {
  '@babel/helpers - typeof';
  return (
    (rt =
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
    rt(e)
  );
}
function Va(e, t) {
  if (rt(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (rt(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Ka(e) {
  var t = Va(e, 'string');
  return rt(t) === 'symbol' ? t : String(t);
}
function Ja(e, t, n) {
  return (
    (t = Ka(t)),
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
function br(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function(o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? br(Object(n), !0).forEach(function(r) {
          Ja(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : br(Object(n)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function v() {
  return (
    (v = Object.assign
      ? Object.assign.bind()
      : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    v.apply(this, arguments)
  );
}
const Ya = e => typeof e == 'function',
  Qa = Array.isArray,
  Za = e => typeof e == 'string',
  es = e => e !== null && typeof e == 'object',
  ts = /^on[^a-z]/,
  ns = e => ts.test(e),
  Fn = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n));
  },
  rs = /-(\w)/g,
  Hn = Fn(e => e.replace(rs, (t, n) => (n ? n.toUpperCase() : ''))),
  os = /\B([A-Z])/g,
  is = Fn(e => e.replace(os, '-$1').toLowerCase()),
  Pp = Fn(e => e.charAt(0).toUpperCase() + e.slice(1)),
  as = Object.prototype.hasOwnProperty,
  Cr = (e, t) => as.call(e, t);
function ss(e, t, n, r) {
  const o = e[n];
  if (o != null) {
    const i = Cr(o, 'default');
    if (i && r === void 0) {
      const a = o.default;
      r = o.type !== Function && Ya(a) ? a() : a;
    }
    o.type === Boolean && (!Cr(t, n) && !i ? (r = !1) : r === '' && (r = !0));
  }
  return r;
}
function Ap(e) {
  return typeof e == 'number' ? `${e}px` : e;
}
function Te(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == 'function' ? e(t) : e ?? n;
}
function ls(e) {
  let t;
  const n = new Promise(o => {
      t = e(() => {
        o(!0);
      });
    }),
    r = () => {
      t == null || t();
    };
  return (r.then = (o, i) => n.then(o, i)), (r.promise = n), r;
}
function G() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Za(n)) e.push(n);
      else if (Qa(n))
        for (let r = 0; r < n.length; r++) {
          const o = G(n[r]);
          o && e.push(o);
        }
      else if (es(n)) for (const r in n) n[r] && e.push(r);
    }
  }
  return e.join(' ');
}
const cs = e => e != null && e !== '',
  us = cs,
  fs = e => {
    const t = Object.keys(e),
      n = {},
      r = {},
      o = {};
    for (let i = 0, a = t.length; i < a; i++) {
      const s = t[i];
      ns(s)
        ? ((n[s[2].toLowerCase() + s.slice(3)] = e[s]), (r[s] = e[s]))
        : (o[s] = e[s]);
    }
    return { onEvents: r, events: n, extraAttrs: o };
  },
  ds = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const n = {},
      r = /;(?![^(]*\))/g,
      o = /:(.+)/;
    return typeof e == 'object'
      ? e
      : (e.split(r).forEach(function(i) {
          if (i) {
            const a = i.split(o);
            if (a.length > 1) {
              const s = t ? Hn(a[0].trim()) : a[0].trim();
              n[s] = a[1].trim();
            }
          }
        }),
        n);
  },
  Rp = (e, t) => e[t] !== void 0,
  ps = Symbol('skipFlatten'),
  Pe = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const n = Array.isArray(e) ? e : [e],
      r = [];
    return (
      n.forEach(o => {
        Array.isArray(o)
          ? r.push(...Pe(o, t))
          : o && o.type === De
          ? o.key === ps
            ? r.push(o)
            : r.push(...Pe(o.children, t))
          : o && ut(o)
          ? t && !Po(o)
            ? r.push(o)
            : t || r.push(o)
          : us(o) && r.push(o);
      }),
      r
    );
  },
  Ip = function(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : 'default',
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (ut(e))
      return e.type === De
        ? t === 'default'
          ? Pe(e.children)
          : []
        : e.children && e.children[t]
        ? Pe(e.children[t](n))
        : [];
    {
      const r = e.$slots[t] && e.$slots[t](n);
      return Pe(r);
    }
  },
  jp = e => {
    var t;
    let n =
      ((t = e == null ? void 0 : e.vnode) === null || t === void 0
        ? void 0
        : t.el) ||
      (e && (e.$el || e));
    for (; n && !n.tagName; ) n = n.nextSibling;
    return n;
  },
  Mp = e => {
    const t = {};
    if (e.$ && e.$.vnode) {
      const n = e.$.vnode.props || {};
      Object.keys(e.$props).forEach(r => {
        const o = e.$props[r],
          i = is(r);
        (o !== void 0 || i in n) && (t[r] = o);
      });
    } else if (ut(e) && typeof e.type == 'object') {
      const n = e.props || {},
        r = {};
      Object.keys(n).forEach(i => {
        r[Hn(i)] = n[i];
      });
      const o = e.type.props || {};
      Object.keys(o).forEach(i => {
        const a = ss(o, r, i, r[i]);
        (a !== void 0 || i in r) && (t[i] = a);
      });
    }
    return t;
  },
  Np = function(e) {
    let t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : 'default',
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0,
      o;
    if (e.$) {
      const i = e[t];
      if (i !== void 0) return typeof i == 'function' && r ? i(n) : i;
      (o = e.$slots[t]), (o = r && o ? o(n) : o);
    } else if (ut(e)) {
      const i = e.props && e.props[t];
      if (i !== void 0 && e.props !== null)
        return typeof i == 'function' && r ? i(n) : i;
      e.type === De
        ? (o = e.children)
        : e.children &&
          e.children[t] &&
          ((o = e.children[t]), (o = r && o ? o(n) : o));
    }
    return (
      Array.isArray(o) &&
        ((o = Pe(o)),
        (o = o.length === 1 ? o[0] : o),
        (o = o.length === 0 ? void 0 : o)),
      o
    );
  };
function kp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
    n = {};
  return (
    e.$ ? (n = v(v({}, n), e.$attrs)) : (n = v(v({}, n), e.props)),
    fs(n)[t ? 'onEvents' : 'events']
  );
}
function Lp(e, t) {
  let r = ((ut(e) ? e.props : e.$attrs) || {}).style || {};
  if (typeof r == 'string') r = ds(r, t);
  else if (t && r) {
    const o = {};
    return Object.keys(r).forEach(i => (o[Hn(i)] = r[i])), o;
  }
  return r;
}
function Dp(e) {
  return e.length === 1 && e[0].type === De;
}
function Po(e) {
  return (
    e &&
    (e.type === Ta ||
      (e.type === De && e.children.length === 0) ||
      (e.type === wo && e.children.trim() === ''))
  );
}
function Fp(e) {
  return e && e.type === wo;
}
function Bn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return (
    e.forEach(n => {
      Array.isArray(n)
        ? t.push(...n)
        : (n == null ? void 0 : n.type) === De
        ? t.push(...Bn(n.children))
        : t.push(n);
    }),
    t.filter(n => !Po(n))
  );
}
function Hp(e) {
  if (e) {
    const t = Bn(e);
    return t.length ? t : void 0;
  } else return e;
}
function Bp(e) {
  return (
    Array.isArray(e) && e.length === 1 && (e = e[0]),
    e && e.__v_isVNode && typeof e.type != 'symbol'
  );
}
function zp(e, t) {
  let n =
    arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'default';
  var r, o;
  return (r = t[n]) !== null && r !== void 0
    ? r
    : (o = e[n]) === null || o === void 0
    ? void 0
    : o.call(e);
}
const ms = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t;
  },
  Up = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t;
  },
  ft = e => {
    const t = e;
    return (
      (t.install = function(n) {
        n.component(t.displayName || t.name, e);
      }),
      e
    );
  };
function Gp() {
  return { type: [Function, Array] };
}
function X(e) {
  return { type: Object, default: e };
}
function rn(e) {
  return { type: Boolean, default: e };
}
function qp(e) {
  return { type: Function, default: e };
}
function hn(e, t) {
  const n = { validator: () => !0, default: e };
  return n;
}
function Wp() {
  return { validator: () => !0 };
}
function Sr(e) {
  return { type: Array, default: e };
}
function xr(e) {
  return { type: String, default: e };
}
function St(e, t) {
  return e ? { type: e, default: t } : hn(t);
}
const zn = 'anticon',
  gs = Symbol('GlobalFormContextKey'),
  hs = e => {
    ce(gs, e);
  },
  ys = () => ({
    iconPrefixCls: String,
    getTargetContainer: { type: Function },
    getPopupContainer: { type: Function },
    prefixCls: String,
    getPrefixCls: { type: Function },
    renderEmpty: { type: Function },
    transformCellText: { type: Function },
    csp: X(),
    input: X(),
    autoInsertSpaceInButton: { type: Boolean, default: void 0 },
    locale: X(),
    pageHeader: X(),
    componentSize: { type: String },
    componentDisabled: { type: Boolean, default: void 0 },
    direction: { type: String, default: 'ltr' },
    space: X(),
    virtual: { type: Boolean, default: void 0 },
    dropdownMatchSelectWidth: { type: [Number, Boolean], default: !0 },
    form: X(),
    pagination: X(),
    theme: X(),
    select: X(),
    wave: X()
  }),
  Un = Symbol('configProvider'),
  Ao = {
    getPrefixCls: (e, t) => t || (e ? `ant-${e}` : 'ant'),
    iconPrefixCls: _(() => zn),
    getPopupContainer: _(() => () => document.body),
    direction: _(() => 'ltr')
  },
  Ro = () => te(Un, Ao),
  vs = e => ce(Un, e),
  Io = Symbol('DisabledContextKey'),
  jo = () => te(Io, B(void 0)),
  bs = e => {
    const t = jo();
    return (
      ce(
        Io,
        _(() => {
          var n;
          return (n = e.value) !== null && n !== void 0 ? n : t.value;
        })
      ),
      e
    );
  },
  Cs = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: '',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages'
  },
  Ss = {
    locale: 'en_US',
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'Ok',
    clear: 'Clear',
    month: 'Month',
    year: 'Year',
    timeSelect: 'select time',
    dateSelect: 'select date',
    weekSelect: 'Choose a week',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: !0,
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century'
  },
  xs = Ss,
  ws = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time']
  },
  Mo = ws,
  Os = {
    lang: v(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week']
      },
      xs
    ),
    timePickerLocale: v({}, Mo)
  },
  wr = Os,
  W = '${label} is not a valid ${type}',
  $s = {
    locale: 'en',
    Pagination: Cs,
    DatePicker: wr,
    TimePicker: Mo,
    Calendar: wr,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting'
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page'
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file'
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
    PageHeader: { back: 'Back' },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date'
        },
        types: {
          string: W,
          method: W,
          array: W,
          object: W,
          number: W,
          date: W,
          boolean: W,
          integer: W,
          float: W,
          regexp: W,
          email: W,
          url: W,
          hex: W
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters'
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}'
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}'
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' }
      }
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned'
    }
  },
  Ie = $s,
  No = k({
    compatConfig: { MODE: 3 },
    name: 'LocaleReceiver',
    props: {
      componentName: String,
      defaultLocale: { type: [Object, Function] },
      children: { type: Function }
    },
    setup(e, t) {
      let { slots: n } = t;
      const r = te('localeData', {}),
        o = _(() => {
          const { componentName: a = 'global', defaultLocale: s } = e,
            u = s || Ie[a || 'global'],
            { antLocale: c } = r,
            l = a && c ? c[a] : {};
          return v(v({}, typeof u == 'function' ? u() : u), l || {});
        }),
        i = _(() => {
          const { antLocale: a } = r,
            s = a && a.locale;
          return a && a.exist && !s ? Ie.locale : s;
        });
      return () => {
        const a = e.children || n.default,
          { antLocale: s } = r;
        return a == null ? void 0 : a(o.value, i.value, s);
      };
    }
  });
function Xp(e, t, n) {
  const r = te('localeData', {});
  return [
    _(() => {
      const { antLocale: i } = r,
        a = D(t) || Ie[e || 'global'],
        s = e && i ? i[e] : {};
      return v(v(v({}, typeof a == 'function' ? a() : a), s || {}), D(n) || {});
    })
  ];
}
function Gn(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
const Or = '%';
class _s {
  constructor(t) {
    (this.cache = new Map()), (this.instanceId = t);
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Or) : t) || null;
  }
  update(t, n) {
    const r = Array.isArray(t) ? t.join(Or) : t,
      o = this.cache.get(r),
      i = n(o);
    i === null ? this.cache.delete(r) : this.cache.set(r, i);
  }
}
const Ts = _s,
  ko = 'data-token-hash',
  ye = 'data-css-hash',
  Ee = '__cssinjs_instance__';
function ot() {
  const e = Math.random()
    .toString(12)
    .slice(2);
  if (typeof document < 'u' && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${ye}]`) || [],
      { firstChild: n } = document.head;
    Array.from(t).forEach(o => {
      (o[Ee] = o[Ee] || e), o[Ee] === e && document.head.insertBefore(o, n);
    });
    const r = {};
    Array.from(document.querySelectorAll(`style[${ye}]`)).forEach(o => {
      var i;
      const a = o.getAttribute(ye);
      r[a]
        ? o[Ee] === e &&
          ((i = o.parentNode) === null || i === void 0 || i.removeChild(o))
        : (r[a] = !0);
    });
  }
  return new Ts(e);
}
const Lo = Symbol('StyleContextKey'),
  Es = () => {
    var e, t, n;
    const r = Oo();
    let o;
    if (r && r.appContext) {
      const i =
        (n =
          (t =
            (e = r.appContext) === null || e === void 0 ? void 0 : e.config) ===
            null || t === void 0
            ? void 0
            : t.globalProperties) === null || n === void 0
          ? void 0
          : n.__ANTDV_CSSINJS_CACHE__;
      i
        ? (o = i)
        : ((o = ot()),
          r.appContext.config.globalProperties &&
            (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
    } else o = ot();
    return o;
  },
  Do = { cache: ot(), defaultCache: !0, hashPriority: 'low' },
  Dt = () => {
    const e = Es();
    return te(Lo, K(v(v({}, Do), { cache: e })));
  },
  Ps = e => {
    const t = Dt(),
      n = K(v(v({}, Do), { cache: ot() }));
    return (
      ue(
        [() => D(e), t],
        () => {
          const r = v({}, t.value),
            o = D(e);
          Object.keys(o).forEach(a => {
            const s = o[a];
            o[a] !== void 0 && (r[a] = s);
          });
          const { cache: i } = o;
          (r.cache = r.cache || ot()),
            (r.defaultCache = !i && t.value.defaultCache),
            (n.value = r);
        },
        { immediate: !0 }
      ),
      ce(Lo, n),
      n
    );
  },
  As = () => ({
    autoClear: rn(),
    mock: xr(),
    cache: X(),
    defaultCache: rn(),
    hashPriority: xr(),
    container: St(),
    ssrInline: rn(),
    transformers: Sr(),
    linters: Sr()
  });
ft(
  k({
    name: 'AStyleProvider',
    inheritAttrs: !1,
    props: As(),
    setup(e, t) {
      let { slots: n } = t;
      return (
        Ps(e),
        () => {
          var r;
          return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
        }
      );
    }
  })
);
function Fo(e, t, n, r) {
  const o = Dt(),
    i = K(''),
    a = K();
  Lt(() => {
    i.value = [e, ...t.value].join('%');
  });
  const s = u => {
    o.value.cache.update(u, c => {
      const [l = 0, f] = c || [];
      return l - 1 === 0 ? (r == null || r(f, !1), null) : [l - 1, f];
    });
  };
  return (
    ue(
      i,
      (u, c) => {
        c && s(c),
          o.value.cache.update(u, l => {
            const [f = 0, d] = l || [],
              p = d || n();
            return [f + 1, p];
          }),
          (a.value = o.value.cache.get(i.value)[1]);
      },
      { immediate: !0 }
    ),
    $o(() => {
      s(i.value);
    }),
    a
  );
}
function me() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
function Rs(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const $r = 'data-vc-order',
  Is = 'vc-util-key',
  yn = new Map();
function Ho() {
  let { mark: e } =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? (e.startsWith('data-') ? e : `data-${e}`) : Is;
}
function Ft(e) {
  return e.attachTo
    ? e.attachTo
    : document.querySelector('head') || document.body;
}
function js(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
}
function Bo(e) {
  return Array.from((yn.get(e) || e).children).filter(
    t => t.tagName === 'STYLE'
  );
}
function zo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!me()) return null;
  const { csp: n, prepend: r } = t,
    o = document.createElement('style');
  o.setAttribute($r, js(r)),
    n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce),
    (o.innerHTML = e);
  const i = Ft(t),
    { firstChild: a } = i;
  if (r) {
    if (r === 'queue') {
      const s = Bo(i).filter(u =>
        ['prepend', 'prependQueue'].includes(u.getAttribute($r))
      );
      if (s.length) return i.insertBefore(o, s[s.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else i.appendChild(o);
  return o;
}
function Uo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = Ft(t);
  return Bo(n).find(r => r.getAttribute(Ho(t)) === e);
}
function Go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = Uo(e, t);
  n && Ft(t).removeChild(n);
}
function Ms(e, t) {
  const n = yn.get(e);
  if (!n || !Rs(document, n)) {
    const r = zo('', t),
      { parentNode: o } = r;
    yn.set(e, o), e.removeChild(r);
  }
}
function Rt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var r, o, i;
  const a = Ft(n);
  Ms(a, n);
  const s = Uo(t, n);
  if (s)
    return (
      !((r = n.csp) === null || r === void 0) &&
        r.nonce &&
        s.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) &&
        (s.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce),
      s.innerHTML !== e && (s.innerHTML = e),
      s
    );
  const u = zo(e, n);
  return u.setAttribute(Ho(n), t), u;
}
function Ns(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
class je {
  constructor() {
    (this.cache = new Map()), (this.keys = []), (this.cacheCallTimes = 0);
  }
  size() {
    return this.keys.length;
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = { map: this.cache };
    return (
      t.forEach(o => {
        var i;
        r
          ? (r =
              (i = r == null ? void 0 : r.map) === null || i === void 0
                ? void 0
                : i.get(o))
          : (r = void 0);
      }),
      r != null && r.value && n && (r.value[1] = this.cacheCallTimes++),
      r == null ? void 0 : r.value
    );
  }
  get(t) {
    var n;
    return (n = this.internalGet(t, !0)) === null || n === void 0
      ? void 0
      : n[0];
  }
  has(t) {
    return !!this.internalGet(t);
  }
  set(t, n) {
    if (!this.has(t)) {
      if (this.size() + 1 > je.MAX_CACHE_SIZE + je.MAX_CACHE_OFFSET) {
        const [o] = this.keys.reduce(
          (i, a) => {
            const [, s] = i;
            return this.internalGet(a)[1] < s ? [a, this.internalGet(a)[1]] : i;
          },
          [this.keys[0], this.cacheCallTimes]
        );
        this.delete(o);
      }
      this.keys.push(t);
    }
    let r = this.cache;
    t.forEach((o, i) => {
      if (i === t.length - 1) r.set(o, { value: [n, this.cacheCallTimes++] });
      else {
        const a = r.get(o);
        a ? a.map || (a.map = new Map()) : r.set(o, { map: new Map() }),
          (r = r.get(o).map);
      }
    });
  }
  deleteByPath(t, n) {
    var r;
    const o = t.get(n[0]);
    if (n.length === 1)
      return (
        o.map ? t.set(n[0], { map: o.map }) : t.delete(n[0]),
        (r = o.value) === null || r === void 0 ? void 0 : r[0]
      );
    const i = this.deleteByPath(o.map, n.slice(1));
    return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), i;
  }
  delete(t) {
    if (this.has(t))
      return (
        (this.keys = this.keys.filter(n => !Ns(n, t))),
        this.deleteByPath(this.cache, t)
      );
  }
}
je.MAX_CACHE_SIZE = 20;
je.MAX_CACHE_OFFSET = 5;
function ks() {}
let Ls = ks;
const qn = Ls;
let _r = 0;
class qo {
  constructor(t) {
    (this.derivatives = Array.isArray(t) ? t : [t]),
      (this.id = _r),
      t.length === 0 && qn(t.length > 0),
      (_r += 1);
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, r) => r(t, n), void 0);
  }
}
const on = new je();
function Wo(e) {
  const t = Array.isArray(e) ? e : [e];
  return on.has(t) || on.set(t, new qo(t)), on.get(t);
}
const Tr = new WeakMap();
function It(e) {
  let t = Tr.get(e) || '';
  return (
    t ||
      (Object.keys(e).forEach(n => {
        const r = e[n];
        (t += n),
          r instanceof qo
            ? (t += r.id)
            : r && typeof r == 'object'
            ? (t += It(r))
            : (t += r);
      }),
      Tr.set(e, t)),
    t
  );
}
function Ds(e, t) {
  return Gn(`${t}_${It(e)}`);
}
const Qe = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ''),
  Xo = '_bAmBoO_';
function Fs(e, t, n) {
  var r, o;
  if (me()) {
    Rt(e, Qe);
    const i = document.createElement('div');
    (i.style.position = 'fixed'),
      (i.style.left = '0'),
      (i.style.top = '0'),
      t == null || t(i),
      document.body.appendChild(i);
    const a = n
      ? n(i)
      : (r = getComputedStyle(i).content) === null || r === void 0
      ? void 0
      : r.includes(Xo);
    return (
      (o = i.parentNode) === null || o === void 0 || o.removeChild(i), Go(Qe), a
    );
  }
  return !1;
}
let an;
function Hs() {
  return (
    an === void 0 &&
      (an = Fs(`@layer ${Qe} { .${Qe} { content: "${Xo}"!important; } }`, e => {
        e.className = Qe;
      })),
    an
  );
}
const Er = {},
  Bs = !0,
  zs = !1,
  Us = !Bs && !zs ? 'css-dev-only-do-not-override' : 'css',
  ge = new Map();
function Gs(e) {
  ge.set(e, (ge.get(e) || 0) + 1);
}
function qs(e, t) {
  typeof document < 'u' &&
    document.querySelectorAll(`style[${ko}="${e}"]`).forEach(r => {
      var o;
      r[Ee] === t &&
        ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
    });
}
const Ws = 0;
function Xs(e, t) {
  ge.set(e, (ge.get(e) || 0) - 1);
  const n = Array.from(ge.keys()),
    r = n.filter(o => (ge.get(o) || 0) <= 0);
  n.length - r.length > Ws &&
    r.forEach(o => {
      qs(o, t), ge.delete(o);
    });
}
const Vs = (e, t, n, r) => {
  const o = n.getDerivativeToken(e);
  let i = v(v({}, o), t);
  return r && (i = r(i)), i;
};
function Ks(e, t) {
  let n =
    arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : B({});
  const r = Dt(),
    o = _(() => v({}, ...t.value)),
    i = _(() => It(o.value)),
    a = _(() => It(n.value.override || Er));
  return Fo(
    'token',
    _(() => [n.value.salt || '', e.value.id, i.value, a.value]),
    () => {
      const {
          salt: u = '',
          override: c = Er,
          formatToken: l,
          getComputedToken: f
        } = n.value,
        d = f ? f(o.value, c, e.value) : Vs(o.value, c, e.value, l),
        m = Ds(d, u);
      (d._tokenKey = m), Gs(m);
      const p = `${Us}-${Gn(m)}`;
      return (d._hashId = p), [d, p];
    },
    u => {
      var c;
      Xs(
        u[0]._tokenKey,
        (c = r.value) === null || c === void 0 ? void 0 : c.cache.instanceId
      );
    }
  );
}
var Js = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  Vo = 'comm',
  Ko = 'rule',
  Jo = 'decl',
  Ys = '@import',
  Qs = '@keyframes',
  Zs = '@layer',
  el = Math.abs,
  Wn = String.fromCharCode;
function Yo(e) {
  return e.trim();
}
function xt(e, t, n) {
  return e.replace(t, n);
}
function tl(e, t) {
  return e.indexOf(t);
}
function it(e, t) {
  return e.charCodeAt(t) | 0;
}
function at(e, t, n) {
  return e.slice(t, n);
}
function pe(e) {
  return e.length;
}
function Qo(e) {
  return e.length;
}
function ht(e, t) {
  return t.push(e), e;
}
var Ht = 1,
  Me = 1,
  Zo = 0,
  Y = 0,
  M = 0,
  He = '';
function Xn(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Ht,
    column: Me,
    length: a,
    return: ''
  };
}
function nl() {
  return M;
}
function rl() {
  return (M = Y > 0 ? it(He, --Y) : 0), Me--, M === 10 && ((Me = 1), Ht--), M;
}
function Q() {
  return (M = Y < Zo ? it(He, Y++) : 0), Me++, M === 10 && ((Me = 1), Ht++), M;
}
function ve() {
  return it(He, Y);
}
function wt() {
  return Y;
}
function Bt(e, t) {
  return at(He, e, t);
}
function vn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ol(e) {
  return (Ht = Me = 1), (Zo = pe((He = e))), (Y = 0), [];
}
function il(e) {
  return (He = ''), e;
}
function sn(e) {
  return Yo(Bt(Y - 1, bn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function al(e) {
  for (; (M = ve()) && M < 33; ) Q();
  return vn(e) > 2 || vn(M) > 3 ? '' : ' ';
}
function sl(e, t) {
  for (
    ;
    --t &&
    Q() &&
    !(M < 48 || M > 102 || (M > 57 && M < 65) || (M > 70 && M < 97));

  );
  return Bt(e, wt() + (t < 6 && ve() == 32 && Q() == 32));
}
function bn(e) {
  for (; Q(); )
    switch (M) {
      case e:
        return Y;
      case 34:
      case 39:
        e !== 34 && e !== 39 && bn(M);
        break;
      case 40:
        e === 41 && bn(e);
        break;
      case 92:
        Q();
        break;
    }
  return Y;
}
function ll(e, t) {
  for (; Q() && e + M !== 47 + 10; )
    if (e + M === 42 + 42 && ve() === 47) break;
  return '/*' + Bt(t, Y - 1) + '*' + Wn(e === 47 ? e : Q());
}
function cl(e) {
  for (; !vn(ve()); ) Q();
  return Bt(e, Y);
}
function ul(e) {
  return il(Ot('', null, null, null, [''], (e = ol(e)), 0, [0], e));
}
function Ot(e, t, n, r, o, i, a, s, u) {
  for (
    var c = 0,
      l = 0,
      f = a,
      d = 0,
      m = 0,
      p = 0,
      g = 1,
      w = 1,
      C = 1,
      $ = 0,
      S = '',
      x = o,
      O = i,
      E = r,
      y = S;
    w;

  )
    switch (((p = $), ($ = Q()))) {
      case 40:
        if (p != 108 && it(y, f - 1) == 58) {
          tl((y += xt(sn($), '&', '&\f')), '&\f') != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += sn($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += al(p);
        break;
      case 92:
        y += sl(wt() - 1, 7);
        continue;
      case 47:
        switch (ve()) {
          case 42:
          case 47:
            ht(fl(ll(Q(), wt()), t, n), u);
            break;
          default:
            y += '/';
        }
        break;
      case 123 * g:
        s[c++] = pe(y) * C;
      case 125 * g:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            w = 0;
          case 59 + l:
            C == -1 && (y = xt(y, /\f/g, '')),
              m > 0 &&
                pe(y) - f &&
                ht(
                  m > 32
                    ? Ar(y + ';', r, n, f - 1)
                    : Ar(xt(y, ' ', '') + ';', r, n, f - 2),
                  u
                );
            break;
          case 59:
            y += ';';
          default:
            if (
              (ht((E = Pr(y, t, n, c, l, o, s, S, (x = []), (O = []), f)), i),
              $ === 123)
            )
              if (l === 0) Ot(y, t, E, E, x, i, f, s, O);
              else
                switch (d === 99 && it(y, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ot(
                      e,
                      E,
                      E,
                      r && ht(Pr(e, E, E, 0, 0, o, s, S, o, (x = []), f), O),
                      o,
                      O,
                      f,
                      s,
                      r ? x : O
                    );
                    break;
                  default:
                    Ot(y, E, E, E, [''], O, 0, s, O);
                }
        }
        (c = l = m = 0), (g = C = 1), (S = y = ''), (f = a);
        break;
      case 58:
        (f = 1 + pe(y)), (m = p);
      default:
        if (g < 1) {
          if ($ == 123) --g;
          else if ($ == 125 && g++ == 0 && rl() == 125) continue;
        }
        switch (((y += Wn($)), $ * g)) {
          case 38:
            C = l > 0 ? 1 : ((y += '\f'), -1);
            break;
          case 44:
            (s[c++] = (pe(y) - 1) * C), (C = 1);
            break;
          case 64:
            ve() === 45 && (y += sn(Q())),
              (d = ve()),
              (l = f = pe((S = y += cl(wt())))),
              $++;
            break;
          case 45:
            p === 45 && pe(y) == 2 && (g = 0);
        }
    }
  return i;
}
function Pr(e, t, n, r, o, i, a, s, u, c, l) {
  for (
    var f = o - 1, d = o === 0 ? i : [''], m = Qo(d), p = 0, g = 0, w = 0;
    p < r;
    ++p
  )
    for (var C = 0, $ = at(e, f + 1, (f = el((g = a[p])))), S = e; C < m; ++C)
      (S = Yo(g > 0 ? d[C] + ' ' + $ : xt($, /&\f/g, d[C]))) && (u[w++] = S);
  return Xn(e, t, n, o === 0 ? Ko : s, u, c, l);
}
function fl(e, t, n) {
  return Xn(e, t, n, Vo, Wn(nl()), at(e, 2, -2), 0);
}
function Ar(e, t, n, r) {
  return Xn(e, t, n, Jo, at(e, 0, r), at(e, r + 1, -1), r);
}
function Cn(e, t) {
  for (var n = '', r = Qo(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function dl(e, t, n, r) {
  switch (e.type) {
    case Zs:
      if (e.children.length) break;
    case Ys:
    case Jo:
      return (e.return = e.return || e.value);
    case Vo:
      return '';
    case Qs:
      return (e.return = e.value + '{' + Cn(e.children, r) + '}');
    case Ko:
      e.value = e.props.join(',');
  }
  return pe((n = Cn(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
const Rr = 'data-ant-cssinjs-cache-path',
  pl = '_FILE_STYLE__';
let be,
  ei = !0;
function ml() {
  var e;
  if (!be && ((be = {}), me())) {
    const t = document.createElement('div');
    (t.className = Rr),
      (t.style.position = 'fixed'),
      (t.style.visibility = 'hidden'),
      (t.style.top = '-9999px'),
      document.body.appendChild(t);
    let n = getComputedStyle(t).content || '';
    (n = n.replace(/^"/, '').replace(/"$/, '')),
      n.split(';').forEach(o => {
        const [i, a] = o.split(':');
        be[i] = a;
      });
    const r = document.querySelector(`style[${Rr}]`);
    r &&
      ((ei = !1),
      (e = r.parentNode) === null || e === void 0 || e.removeChild(r)),
      document.body.removeChild(t);
  }
}
function gl(e) {
  return ml(), !!be[e];
}
function hl(e) {
  const t = be[e];
  let n = null;
  if (t && me())
    if (ei) n = pl;
    else {
      const r = document.querySelector(`style[${ye}="${be[e]}"]`);
      r ? (n = r.innerHTML) : delete be[e];
    }
  return [n, t];
}
const Ir = me(),
  yl = '_skip_check_',
  ti = '_multi_value_';
function jr(e) {
  return Cn(ul(e), dl).replace(/\{%%%\:[^;];}/g, ';');
}
function vl(e) {
  return typeof e == 'object' && e && (yl in e || ti in e);
}
function bl(e, t, n) {
  if (!t) return e;
  const r = `.${t}`,
    o = n === 'low' ? `:where(${r})` : r;
  return e
    .split(',')
    .map(a => {
      var s;
      const u = a.trim().split(/\s+/);
      let c = u[0] || '';
      const l =
        ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || '';
      return (c = `${l}${o}${c.slice(l.length)}`), [c, ...u.slice(1)].join(' ');
    })
    .join(',');
}
const Mr = new Set(),
  Sn = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      { root: n, injectHash: r, parentSelectors: o } =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { root: !0, parentSelectors: [] };
    const {
      hashId: i,
      layer: a,
      path: s,
      hashPriority: u,
      transformers: c = [],
      linters: l = []
    } = t;
    let f = '',
      d = {};
    function m(w) {
      const C = w.getName(i);
      if (!d[C]) {
        const [$] = Sn(w.style, t, { root: !1, parentSelectors: o });
        d[C] = `@keyframes ${w.getName(i)}${$}`;
      }
    }
    function p(w) {
      let C =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return (
        w.forEach($ => {
          Array.isArray($) ? p($, C) : $ && C.push($);
        }),
        C
      );
    }
    if (
      (p(Array.isArray(e) ? e : [e]).forEach(w => {
        const C = typeof w == 'string' && !n ? {} : w;
        if (typeof C == 'string')
          f += `${C}
`;
        else if (C._keyframe) m(C);
        else {
          const $ = c.reduce((S, x) => {
            var O;
            return (
              ((O = x == null ? void 0 : x.visit) === null || O === void 0
                ? void 0
                : O.call(x, S)) || S
            );
          }, C);
          Object.keys($).forEach(S => {
            var x;
            const O = $[S];
            if (
              typeof O == 'object' &&
              O &&
              (S !== 'animationName' || !O._keyframe) &&
              !vl(O)
            ) {
              let E = !1,
                y = S.trim(),
                P = !1;
              (n || r) && i
                ? y.startsWith('@')
                  ? (E = !0)
                  : (y = bl(S, i, u))
                : n && !i && (y === '&' || y === '') && ((y = ''), (P = !0));
              const [I, q] = Sn(O, t, {
                root: P,
                injectHash: E,
                parentSelectors: [...o, y]
              });
              (d = v(v({}, d), q)), (f += `${y}${I}`);
            } else {
              let E = function(P, I) {
                const q = P.replace(/[A-Z]/g, oe => `-${oe.toLowerCase()}`);
                let re = I;
                !Js[P] && typeof re == 'number' && re !== 0 && (re = `${re}px`),
                  P === 'animationName' &&
                    I != null &&
                    I._keyframe &&
                    (m(I), (re = I.getName(i))),
                  (f += `${q}:${re};`);
              };
              const y =
                (x = O == null ? void 0 : O.value) !== null && x !== void 0
                  ? x
                  : O;
              typeof O == 'object' && O != null && O[ti] && Array.isArray(y)
                ? y.forEach(P => {
                    E(S, P);
                  })
                : E(S, y);
            }
          });
        }
      }),
      !n)
    )
      f = `{${f}}`;
    else if (a && Hs()) {
      const w = a.split(',');
      (f = `@layer ${w[w.length - 1].trim()} {${f}}`),
        w.length > 1 && (f = `@layer ${a}{%%%:%}${f}`);
    }
    return [f, d];
  };
function Cl(e, t) {
  return Gn(`${e.join('%')}${t}`);
}
function xn(e, t) {
  const n = Dt(),
    r = _(() => e.value.token._tokenKey),
    o = _(() => [r.value, ...e.value.path]);
  let i = Ir;
  return (
    Fo(
      'style',
      o,
      () => {
        const {
            path: a,
            hashId: s,
            layer: u,
            nonce: c,
            clientOnly: l,
            order: f = 0
          } = e.value,
          d = o.value.join('|');
        if (gl(d)) {
          const [y, P] = hl(d);
          if (y) return [y, r.value, P, {}, l, f];
        }
        const m = t(),
          {
            hashPriority: p,
            container: g,
            transformers: w,
            linters: C,
            cache: $
          } = n.value,
          [S, x] = Sn(m, {
            hashId: s,
            hashPriority: p,
            layer: u,
            path: a.join('-'),
            transformers: w,
            linters: C
          }),
          O = jr(S),
          E = Cl(o.value, O);
        if (i) {
          const y = { mark: ye, prepend: 'queue', attachTo: g, priority: f },
            P = typeof c == 'function' ? c() : c;
          P && (y.csp = { nonce: P });
          const I = Rt(O, E, y);
          (I[Ee] = $.instanceId),
            I.setAttribute(ko, r.value),
            Object.keys(x).forEach(q => {
              Mr.has(q) ||
                (Mr.add(q),
                Rt(jr(x[q]), `_effect-${q}`, {
                  mark: ye,
                  prepend: 'queue',
                  attachTo: g
                }));
            });
        }
        return [O, r.value, E, x, l, f];
      },
      (a, s) => {
        let [, , u] = a;
        (s || n.value.autoClear) && Ir && Go(u, { mark: ye });
      }
    ),
    a => a
  );
}
class Sl {
  constructor(t, n) {
    (this._keyframe = !0), (this.name = t), (this.style = n);
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    return t ? `${t}-${this.name}` : this.name;
  }
}
const Ce = Sl,
  xl = '4.2.6',
  wl = e => {
    const { controlHeight: t } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25
    };
  },
  Ol = wl;
function $l(e) {
  const { sizeUnit: t, sizeStep: n } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
  };
}
const ni = {
    blue: '#1677ff',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#eb2f96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
  },
  _l = v(v({}, ni), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1
  }),
  zt = _l;
function Tl(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
  const {
      colorSuccess: o,
      colorWarning: i,
      colorError: a,
      colorInfo: s,
      colorPrimary: u,
      colorBgBase: c,
      colorTextBase: l
    } = e,
    f = n(u),
    d = n(o),
    m = n(i),
    p = n(a),
    g = n(s),
    w = r(c, l);
  return v(v({}, w), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: p[1],
    colorErrorBgHover: p[2],
    colorErrorBorder: p[3],
    colorErrorBorderHover: p[4],
    colorErrorHover: p[5],
    colorError: p[6],
    colorErrorActive: p[7],
    colorErrorTextHover: p[8],
    colorErrorText: p[9],
    colorErrorTextActive: p[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorBgMask: new F('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  });
}
const El = e => {
    let t = e,
      n = e,
      r = e,
      o = e;
    return (
      e < 6 && e >= 5
        ? (t = e + 1)
        : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (n = 4)
        : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
        ? (n = 6)
        : e < 16 && e >= 14
        ? (n = 7)
        : e >= 16 && (n = 8),
      e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
      e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
      {
        borderRadius: e > 16 ? 16 : e,
        borderRadiusXS: r,
        borderRadiusSM: n,
        borderRadiusLG: t,
        borderRadiusOuter: o
      }
    );
  },
  Pl = El;
function Al(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e;
  return v(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: o + 1
    },
    Pl(r)
  );
}
const le = (e, t) => new F(e).setAlpha(t).toRgbString(),
  Xe = (e, t) => new F(e).darken(t).toHexString(),
  Rl = e => {
    const t = nt(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6]
    };
  },
  Il = (e, t) => {
    const n = e || '#fff',
      r = t || '#000';
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: le(r, 0.88),
      colorTextSecondary: le(r, 0.65),
      colorTextTertiary: le(r, 0.45),
      colorTextQuaternary: le(r, 0.25),
      colorFill: le(r, 0.15),
      colorFillSecondary: le(r, 0.06),
      colorFillTertiary: le(r, 0.04),
      colorFillQuaternary: le(r, 0.02),
      colorBgLayout: Xe(n, 4),
      colorBgContainer: Xe(n, 0),
      colorBgElevated: Xe(n, 0),
      colorBgSpotlight: le(r, 0.85),
      colorBorder: Xe(n, 15),
      colorBorderSecondary: Xe(n, 6)
    };
  };
function jl(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1,
      i = e * Math.pow(2.71828, o / 5),
      a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return (
    (t[1] = e),
    t.map(n => {
      const r = n + 8;
      return { size: n, lineHeight: r / n };
    })
  );
}
const Ml = e => {
    const t = jl(e),
      n = t.map(o => o.size),
      r = t.map(o => o.lineHeight);
    return {
      fontSizeSM: n[0],
      fontSize: n[1],
      fontSizeLG: n[2],
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: r[1],
      lineHeightLG: r[2],
      lineHeightSM: r[0],
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2]
    };
  },
  Nl = Ml;
function kl(e) {
  const t = Object.keys(ni)
    .map(n => {
      const r = nt(e[n]);
      return new Array(10)
        .fill(1)
        .reduce((o, i, a) => ((o[`${n}-${a + 1}`] = r[a]), o), {});
    })
    .reduce((n, r) => ((n = v(v({}, n), r)), n), {});
  return v(
    v(
      v(
        v(
          v(
            v(v({}, e), t),
            Tl(e, {
              generateColorPalettes: Rl,
              generateNeutralColorPalettes: Il
            })
          ),
          Nl(e.fontSize)
        ),
        $l(e)
      ),
      Ol(e)
    ),
    Al(e)
  );
}
function ln(e) {
  return e >= 0 && e <= 255;
}
function yt(e, t) {
  const { r: n, g: r, b: o, a: i } = new F(e).toRgb();
  if (i < 1) return e;
  const { r: a, g: s, b: u } = new F(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const l = Math.round((n - a * (1 - c)) / c),
      f = Math.round((r - s * (1 - c)) / c),
      d = Math.round((o - u * (1 - c)) / c);
    if (ln(l) && ln(f) && ln(d))
      return new F({
        r: l,
        g: f,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new F({ r: n, g: r, b: o, a: 1 }).toRgbString();
}
var Ll =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function Dl(e) {
  const { override: t } = e,
    n = Ll(e, ['override']),
    r = v({}, t);
  Object.keys(zt).forEach(m => {
    delete r[m];
  });
  const o = v(v({}, n), r),
    i = 480,
    a = 576,
    s = 768,
    u = 992,
    c = 1200,
    l = 1600,
    f = 2e3;
  return v(
    v(v({}, o), {
      colorLink: o.colorInfoText,
      colorLinkHover: o.colorInfoHover,
      colorLinkActive: o.colorInfoActive,
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      colorBorderBg: o.colorBgContainer,
      colorSplit: yt(o.colorBorderSecondary, o.colorBgContainer),
      colorTextPlaceholder: o.colorTextQuaternary,
      colorTextDisabled: o.colorTextQuaternary,
      colorTextHeading: o.colorText,
      colorTextLabel: o.colorTextSecondary,
      colorTextDescription: o.colorTextTertiary,
      colorTextLightSolid: o.colorWhite,
      colorHighlight: o.colorError,
      colorBgTextHover: o.colorFillSecondary,
      colorBgTextActive: o.colorFill,
      colorIcon: o.colorTextTertiary,
      colorIconHover: o.colorText,
      colorErrorOutline: yt(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: yt(o.colorWarningBg, o.colorBgContainer),
      fontSizeIcon: o.fontSizeSM,
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: yt(o.colorPrimaryBg, o.colorBgContainer),
      lineType: o.lineType,
      borderRadius: o.borderRadius,
      borderRadiusXS: o.borderRadiusXS,
      borderRadiusSM: o.borderRadiusSM,
      borderRadiusLG: o.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: o.sizeXXS,
      paddingXS: o.sizeXS,
      paddingSM: o.sizeSM,
      padding: o.size,
      paddingMD: o.sizeMD,
      paddingLG: o.sizeLG,
      paddingXL: o.sizeXL,
      paddingContentHorizontalLG: o.sizeLG,
      paddingContentVerticalLG: o.sizeMS,
      paddingContentHorizontal: o.sizeMS,
      paddingContentVertical: o.sizeSM,
      paddingContentHorizontalSM: o.size,
      paddingContentVerticalSM: o.sizeXS,
      marginXXS: o.sizeXXS,
      marginXS: o.sizeXS,
      marginSM: o.sizeSM,
      margin: o.size,
      marginMD: o.sizeMD,
      marginLG: o.sizeLG,
      marginXL: o.sizeXL,
      marginXXL: o.sizeXXL,
      boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: i,
      screenXSMin: i,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: s - 1,
      screenMD: s,
      screenMDMin: s,
      screenMDMax: u - 1,
      screenLG: u,
      screenLGMin: u,
      screenLGMax: c - 1,
      screenXL: c,
      screenXLMin: c,
      screenXLMax: l - 1,
      screenXXL: l,
      screenXXLMin: l,
      screenXXLMax: f - 1,
      screenXXXL: f,
      screenXXXLMin: f,
      boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
      boxShadowCard: `
      0 1px 2px -2px ${new F('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new F('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new F('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
    }),
    r
  );
}
const Vp = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  ri = e => ({
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    listStyle: 'none',
    fontFamily: e.fontFamily
  }),
  Fl = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' }
  }),
  Kp = () => ({
    '&::before': { display: 'table', content: '""' },
    '&::after': { display: 'table', clear: 'both', content: '""' }
  }),
  Hl = e => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      '&:active,\n  &:hover': {
        textDecoration: e.linkHoverDecoration,
        outline: 0
      },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' }
    }
  }),
  Bl = (e, t) => {
    const { fontFamily: n, fontSize: r } = e,
      o = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [o]: {
        fontFamily: n,
        fontSize: r,
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
        [o]: {
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' }
        }
      }
    };
  },
  zl = e => ({
    outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s'
  }),
  Jp = e => ({ '&:focus-visible': v({}, zl(e)) });
function dt(e, t, n) {
  return r => {
    const o = _(() => (r == null ? void 0 : r.value)),
      [i, a, s] = mt(),
      { getPrefixCls: u, iconPrefixCls: c } = Ro(),
      l = _(() => u()),
      f = _(() => ({
        theme: i.value,
        token: a.value,
        hashId: s.value,
        path: ['Shared', l.value]
      }));
    xn(f, () => [{ '&': Hl(a.value) }]);
    const d = _(() => ({
      theme: i.value,
      token: a.value,
      hashId: s.value,
      path: [e, o.value, c.value]
    }));
    return [
      xn(d, () => {
        const { token: m, flush: p } = Gl(a.value),
          g = typeof n == 'function' ? n(m) : n,
          w = v(v({}, g), a.value[e]),
          C = `.${o.value}`,
          $ = pt(
            m,
            {
              componentCls: C,
              prefixCls: o.value,
              iconCls: `.${c.value}`,
              antCls: `.${l.value}`
            },
            w
          ),
          S = t($, {
            hashId: s.value,
            prefixCls: o.value,
            rootPrefixCls: l.value,
            iconPrefixCls: c.value,
            overrideComponentToken: a.value[e]
          });
        return p(e, w), [Bl(a.value, o.value), S];
      }),
      s
    ];
  };
}
const oi = typeof CSSINJS_STATISTIC < 'u';
let wn = !0;
function pt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!oi) return v({}, ...t);
  wn = !1;
  const r = {};
  return (
    t.forEach(o => {
      Object.keys(o).forEach(a => {
        Object.defineProperty(r, a, {
          configurable: !0,
          enumerable: !0,
          get: () => o[a]
        });
      });
    }),
    (wn = !0),
    r
  );
}
function Ul() {}
function Gl(e) {
  let t,
    n = e,
    r = Ul;
  return (
    oi &&
      ((t = new Set()),
      (n = new Proxy(e, {
        get(o, i) {
          return wn && t.add(i), o[i];
        }
      })),
      (r = (o, i) => {
        Array.from(t);
      })),
    { token: n, keys: t, flush: r }
  );
}
const ql = Wo(kl),
  ii = { token: zt, hashed: !0 },
  ai = Symbol('DesignTokenContext'),
  On = K(),
  Wl = e => {
    ce(ai, e),
      ue(
        e,
        () => {
          (On.value = D(e)), Ea(On);
        },
        { immediate: !0, deep: !0 }
      );
  },
  Xl = k({
    props: { value: X() },
    setup(e, t) {
      let { slots: n } = t;
      return (
        Wl(_(() => e.value)),
        () => {
          var r;
          return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
        }
      );
    }
  });
function mt() {
  const e = te(
      ai,
      _(() => On.value || ii)
    ),
    t = _(() => `${xl}-${e.value.hashed || ''}`),
    n = _(() => e.value.theme || ql),
    r = Ks(
      n,
      _(() => [zt, e.value.token]),
      _(() => ({
        salt: t.value,
        override: v({ override: e.value.token }, e.value.components),
        formatToken: Dl
      }))
    );
  return [n, _(() => r.value[0]), _(() => (e.value.hashed ? r.value[1] : ''))];
}
const si = k({
  compatConfig: { MODE: 3 },
  setup() {
    const [, e] = mt(),
      t = _(() =>
        new F(e.value.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {}
      );
    return () =>
      b(
        'svg',
        {
          style: t.value,
          width: '184',
          height: '152',
          viewBox: '0 0 184 152',
          xmlns: 'http://www.w3.org/2000/svg'
        },
        [
          b('g', { fill: 'none', 'fill-rule': 'evenodd' }, [
            b('g', { transform: 'translate(24 31.67)' }, [
              b(
                'ellipse',
                {
                  'fill-opacity': '.8',
                  fill: '#F5F5F7',
                  cx: '67.797',
                  cy: '106.89',
                  rx: '67.797',
                  ry: '12.668'
                },
                null
              ),
              b(
                'path',
                {
                  d:
                    'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                  fill: '#AEB8C2'
                },
                null
              ),
              b(
                'path',
                {
                  d:
                    'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                  fill: 'url(#linearGradient-1)',
                  transform: 'translate(13.56)'
                },
                null
              ),
              b(
                'path',
                {
                  d:
                    'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                  fill: '#F5F5F7'
                },
                null
              ),
              b(
                'path',
                {
                  d:
                    'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                  fill: '#DCE0E6'
                },
                null
              )
            ]),
            b(
              'path',
              {
                d:
                  'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
                fill: '#DCE0E6'
              },
              null
            ),
            b('g', { transform: 'translate(149.65 15.383)', fill: '#FFF' }, [
              b(
                'ellipse',
                { cx: '20.654', cy: '3.167', rx: '2.849', ry: '2.815' },
                null
              ),
              b(
                'path',
                { d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' },
                null
              )
            ])
          ])
        ]
      );
  }
});
si.PRESENTED_IMAGE_DEFAULT = !0;
const li = si,
  ci = k({
    compatConfig: { MODE: 3 },
    setup() {
      const [, e] = mt(),
        t = _(() => {
          const {
            colorFill: n,
            colorFillTertiary: r,
            colorFillQuaternary: o,
            colorBgContainer: i
          } = e.value;
          return {
            borderColor: new F(n).onBackground(i).toHexString(),
            shadowColor: new F(r).onBackground(i).toHexString(),
            contentColor: new F(o).onBackground(i).toHexString()
          };
        });
      return () =>
        b(
          'svg',
          {
            width: '64',
            height: '41',
            viewBox: '0 0 64 41',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            b(
              'g',
              {
                transform: 'translate(0 1)',
                fill: 'none',
                'fill-rule': 'evenodd'
              },
              [
                b(
                  'ellipse',
                  {
                    fill: t.value.shadowColor,
                    cx: '32',
                    cy: '33',
                    rx: '32',
                    ry: '7'
                  },
                  null
                ),
                b(
                  'g',
                  { 'fill-rule': 'nonzero', stroke: t.value.borderColor },
                  [
                    b(
                      'path',
                      {
                        d:
                          'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z'
                      },
                      null
                    ),
                    b(
                      'path',
                      {
                        d:
                          'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                        fill: t.value.contentColor
                      },
                      null
                    )
                  ]
                )
              ]
            )
          ]
        );
    }
  });
ci.PRESENTED_IMAGE_SIMPLE = !0;
const Vl = ci,
  Kl = e => {
    const {
      componentCls: t,
      margin: n,
      marginXS: r,
      marginXL: o,
      fontSize: i,
      lineHeight: a
    } = e;
    return {
      [t]: {
        marginInline: r,
        fontSize: i,
        lineHeight: a,
        textAlign: 'center',
        [`${t}-image`]: {
          height: e.emptyImgHeight,
          marginBottom: r,
          opacity: e.opacityImage,
          img: { height: '100%' },
          svg: { height: '100%', margin: 'auto' }
        },
        [`${t}-footer`]: { marginTop: n },
        '&-normal': {
          marginBlock: o,
          color: e.colorTextDisabled,
          [`${t}-image`]: { height: e.emptyImgHeightMD }
        },
        '&-small': {
          marginBlock: r,
          color: e.colorTextDisabled,
          [`${t}-image`]: { height: e.emptyImgHeightSM }
        }
      }
    };
  },
  Jl = dt('Empty', e => {
    const { componentCls: t, controlHeightLG: n } = e,
      r = pt(e, {
        emptyImgCls: `${t}-img`,
        emptyImgHeight: n * 2.5,
        emptyImgHeightMD: n,
        emptyImgHeightSM: n * 0.875
      });
    return [Kl(r)];
  });
var Yl =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const Ql = () => ({
    prefixCls: String,
    imageStyle: X(),
    image: hn(),
    description: hn()
  }),
  Vn = k({
    name: 'AEmpty',
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: Ql(),
    setup(e, t) {
      let { slots: n = {}, attrs: r } = t;
      const { direction: o, prefixCls: i } = Be('empty', e),
        [a, s] = Jl(i);
      return () => {
        var u, c;
        const l = i.value,
          f = v(v({}, e), r),
          {
            image: d = ((u = n.image) === null || u === void 0
              ? void 0
              : u.call(n)) || Re(li),
            description: m = ((c = n.description) === null || c === void 0
              ? void 0
              : c.call(n)) || void 0,
            imageStyle: p,
            class: g = ''
          } = f,
          w = Yl(f, ['image', 'description', 'imageStyle', 'class']),
          C = typeof d == 'function' ? d() : d,
          $ =
            typeof C == 'object' &&
            'type' in C &&
            C.type.PRESENTED_IMAGE_SIMPLE;
        return a(
          b(
            No,
            {
              componentName: 'Empty',
              children: S => {
                const x = typeof m < 'u' ? m : S.description,
                  O = typeof x == 'string' ? x : 'empty';
                let E = null;
                return (
                  typeof C == 'string'
                    ? (E = b('img', { alt: O, src: C }, null))
                    : (E = C),
                  b(
                    'div',
                    j(
                      {
                        class: G(l, g, s.value, {
                          [`${l}-normal`]: $,
                          [`${l}-rtl`]: o.value === 'rtl'
                        })
                      },
                      w
                    ),
                    [
                      b('div', { class: `${l}-image`, style: p }, [E]),
                      x && b('p', { class: `${l}-description` }, [x]),
                      n.default &&
                        b('div', { class: `${l}-footer` }, [Bn(n.default())])
                    ]
                  )
                );
              }
            },
            null
          )
        );
      };
    }
  });
Vn.PRESENTED_IMAGE_DEFAULT = () => Re(li);
Vn.PRESENTED_IMAGE_SIMPLE = () => Re(Vl);
const Ve = ft(Vn),
  ui = e => {
    const { prefixCls: t } = Be('empty', e);
    return (r => {
      switch (r) {
        case 'Table':
        case 'List':
          return b(Ve, { image: Ve.PRESENTED_IMAGE_SIMPLE }, null);
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return b(
            Ve,
            { image: Ve.PRESENTED_IMAGE_SIMPLE, class: `${t.value}-small` },
            null
          );
        default:
          return b(Ve, null, null);
      }
    })(e.componentName);
  };
function Zl(e) {
  return b(ui, { componentName: e }, null);
}
const fi = Symbol('SizeContextKey'),
  di = () => te(fi, B(void 0)),
  ec = e => {
    const t = di();
    return (
      ce(
        fi,
        _(() => e.value || t.value)
      ),
      e
    );
  },
  Be = (e, t) => {
    const n = di(),
      r = jo(),
      o = te(
        Un,
        v(v({}, Ao), { renderEmpty: y => Re(ui, { componentName: y }) })
      ),
      i = _(() => o.getPrefixCls(e, t.prefixCls)),
      a = _(() => {
        var y, P;
        return (y = t.direction) !== null && y !== void 0
          ? y
          : (P = o.direction) === null || P === void 0
          ? void 0
          : P.value;
      }),
      s = _(() => {
        var y;
        return (y = t.iconPrefixCls) !== null && y !== void 0
          ? y
          : o.iconPrefixCls.value;
      }),
      u = _(() => o.getPrefixCls()),
      c = _(() => {
        var y;
        return (y = o.autoInsertSpaceInButton) === null || y === void 0
          ? void 0
          : y.value;
      }),
      l = o.renderEmpty,
      f = o.space,
      d = o.pageHeader,
      m = o.form,
      p = _(() => {
        var y, P;
        return (y = t.getTargetContainer) !== null && y !== void 0
          ? y
          : (P = o.getTargetContainer) === null || P === void 0
          ? void 0
          : P.value;
      }),
      g = _(() => {
        var y, P, I;
        return (P =
          (y = t.getContainer) !== null && y !== void 0
            ? y
            : t.getPopupContainer) !== null && P !== void 0
          ? P
          : (I = o.getPopupContainer) === null || I === void 0
          ? void 0
          : I.value;
      }),
      w = _(() => {
        var y, P;
        return (y = t.dropdownMatchSelectWidth) !== null && y !== void 0
          ? y
          : (P = o.dropdownMatchSelectWidth) === null || P === void 0
          ? void 0
          : P.value;
      }),
      C = _(() => {
        var y;
        return (
          (t.virtual === void 0
            ? ((y = o.virtual) === null || y === void 0 ? void 0 : y.value) !==
              !1
            : t.virtual !== !1) && w.value !== !1
        );
      }),
      $ = _(() => t.size || n.value),
      S = _(() => {
        var y, P, I;
        return (y = t.autocomplete) !== null && y !== void 0
          ? y
          : (I = (P = o.input) === null || P === void 0 ? void 0 : P.value) ===
              null || I === void 0
          ? void 0
          : I.autocomplete;
      }),
      x = _(() => {
        var y;
        return (y = t.disabled) !== null && y !== void 0 ? y : r.value;
      }),
      O = _(() => {
        var y;
        return (y = t.csp) !== null && y !== void 0 ? y : o.csp;
      }),
      E = _(() => {
        var y, P;
        return (y = t.wave) !== null && y !== void 0
          ? y
          : (P = o.wave) === null || P === void 0
          ? void 0
          : P.value;
      });
    return {
      configProvider: o,
      prefixCls: i,
      direction: a,
      size: $,
      getTargetContainer: p,
      getPopupContainer: g,
      space: f,
      pageHeader: d,
      form: m,
      autoInsertSpaceInButton: c,
      renderEmpty: l,
      virtual: C,
      dropdownMatchSelectWidth: w,
      rootPrefixCls: u,
      getPrefixCls: o.getPrefixCls,
      autocomplete: S,
      csp: O,
      iconPrefixCls: s,
      disabled: x,
      select: o.select,
      wave: E
    };
  };
function Nr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function pi(e, t, n) {
  return t && Nr(e.prototype, t), n && Nr(e, n), e;
}
function $t() {
  return ($t =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function mi(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function gi(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = {},
    i = Object.keys(e);
  for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
  return o;
}
function kr(e) {
  return (
    ((t = e) != null && typeof t == 'object' && Array.isArray(t) === !1) == 1 &&
    Object.prototype.toString.call(e) === '[object Object]'
  );
  var t;
}
var hi = Object.prototype,
  yi = hi.toString,
  tc = hi.hasOwnProperty,
  vi = /^\s*function (\w+)/;
function Lr(e) {
  var t,
    n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(vi);
    return r ? r[1] : '';
  }
  return '';
}
var Se = function(e) {
    var t, n;
    return (
      kr(e) !== !1 &&
      typeof (t = e.constructor) == 'function' &&
      kr((n = t.prototype)) !== !1 &&
      n.hasOwnProperty('isPrototypeOf') !== !1
    );
  },
  nc = function(e) {
    return e;
  },
  z = nc,
  st = function(e, t) {
    return tc.call(e, t);
  },
  rc =
    Number.isInteger ||
    function(e) {
      return typeof e == 'number' && isFinite(e) && Math.floor(e) === e;
    },
  Ne =
    Array.isArray ||
    function(e) {
      return yi.call(e) === '[object Array]';
    },
  ke = function(e) {
    return yi.call(e) === '[object Function]';
  },
  jt = function(e) {
    return Se(e) && st(e, '_vueTypes_name');
  },
  bi = function(e) {
    return (
      Se(e) &&
      (st(e, 'type') ||
        ['_vueTypes_name', 'validator', 'default', 'required'].some(function(
          t
        ) {
          return st(e, t);
        }))
    );
  };
function Kn(e, t) {
  return Object.defineProperty(e.bind(t), '__original', { value: e });
}
function we(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0,
    i = '';
  r = Se(e) ? e : { type: e };
  var a = jt(r) ? r._vueTypes_name + ' - ' : '';
  if (bi(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || (!r.required && t === void 0))
      return o;
    Ne(r.type)
      ? ((o = r.type.some(function(f) {
          return we(f, t, !0) === !0;
        })),
        (i = r.type
          .map(function(f) {
            return Lr(f);
          })
          .join(' or ')))
      : (o =
          (i = Lr(r)) === 'Array'
            ? Ne(t)
            : i === 'Object'
            ? Se(t)
            : i === 'String' ||
              i === 'Number' ||
              i === 'Boolean' ||
              i === 'Function'
            ? (function(f) {
                if (f == null) return '';
                var d = f.constructor.toString().match(vi);
                return d ? d[1] : '';
              })(t) === i
            : t instanceof r.type);
  }
  if (!o) {
    var s = a + 'value "' + t + '" should be of type "' + i + '"';
    return n === !1 ? (z(s), !1) : s;
  }
  if (st(r, 'validator') && ke(r.validator)) {
    var u = z,
      c = [];
    if (
      ((z = function(f) {
        c.push(f);
      }),
      (o = r.validator(t)),
      (z = u),
      !o)
    ) {
      var l =
        (c.length > 1 ? '* ' : '') +
        c.join(`
* `);
      return (c.length = 0), n === !1 ? (z(l), o) : l;
    }
  }
  return o;
}
function V(e, t) {
  var n = Object.defineProperties(t, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get: function() {
          return (this.required = !0), this;
        }
      },
      def: {
        value: function(o) {
          return o !== void 0 || this.default
            ? ke(o) || we(this, o, !0) === !0
              ? ((this.default = Ne(o)
                  ? function() {
                      return [].concat(o);
                    }
                  : Se(o)
                  ? function() {
                      return Object.assign({}, o);
                    }
                  : o),
                this)
              : (z(
                  this._vueTypes_name + ' - invalid default value: "' + o + '"'
                ),
                this)
            : this;
        }
      }
    }),
    r = n.validator;
  return ke(r) && (n.validator = Kn(r, n)), n;
}
function ae(e, t) {
  var n = V(e, t);
  return Object.defineProperty(n, 'validate', {
    value: function(r) {
      return (
        ke(this.validator) &&
          z(
            this._vueTypes_name +
              ` - calling .validate() will overwrite the current custom validator function. Validator info:
` +
              JSON.stringify(this)
          ),
        (this.validator = Kn(r, this)),
        this
      );
    }
  });
}
function Dr(e, t, n) {
  var r,
    o,
    i =
      ((r = t),
      (o = {}),
      Object.getOwnPropertyNames(r).forEach(function(f) {
        o[f] = Object.getOwnPropertyDescriptor(r, f);
      }),
      Object.defineProperties({}, o));
  if (((i._vueTypes_name = e), !Se(n))) return i;
  var a,
    s,
    u = n.validator,
    c = gi(n, ['validator']);
  if (ke(u)) {
    var l = i.validator;
    l && (l = (s = (a = l).__original) !== null && s !== void 0 ? s : a),
      (i.validator = Kn(
        l
          ? function(f) {
              return l.call(this, f) && u.call(this, f);
            }
          : u,
        i
      ));
  }
  return Object.assign(i, c);
}
function Ut(e) {
  return e.replace(/^(?!\s*$)/gm, '  ');
}
var oc = function() {
    return ae('any', {});
  },
  ic = function() {
    return ae('function', { type: Function });
  },
  ac = function() {
    return ae('boolean', { type: Boolean });
  },
  sc = function() {
    return ae('string', { type: String });
  },
  lc = function() {
    return ae('number', { type: Number });
  },
  cc = function() {
    return ae('array', { type: Array });
  },
  uc = function() {
    return ae('object', { type: Object });
  },
  fc = function() {
    return V('integer', {
      type: Number,
      validator: function(e) {
        return rc(e);
      }
    });
  },
  dc = function() {
    return V('symbol', {
      validator: function(e) {
        return typeof e == 'symbol';
      }
    });
  };
function pc(e, t) {
  if (
    (t === void 0 && (t = 'custom validation failed'), typeof e != 'function')
  )
    throw new TypeError(
      '[VueTypes error]: You must provide a function as argument'
    );
  return V(e.name || '<<anonymous function>>', {
    validator: function(n) {
      var r = e(n);
      return r || z(this._vueTypes_name + ' - ' + t), r;
    }
  });
}
function mc(e) {
  if (!Ne(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument.'
    );
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".',
    n = e.reduce(function(r, o) {
      if (o != null) {
        var i = o.constructor;
        r.indexOf(i) === -1 && r.push(i);
      }
      return r;
    }, []);
  return V('oneOf', {
    type: n.length > 0 ? n : void 0,
    validator: function(r) {
      var o = e.indexOf(r) !== -1;
      return o || z(t), o;
    }
  });
}
function gc(e) {
  if (!Ne(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument'
    );
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (bi(o)) {
      if (jt(o) && o._vueTypes_name === 'oneOf') {
        n = n.concat(o.type);
        continue;
      }
      if ((ke(o.validator) && (t = !0), o.type !== !0 && o.type)) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return (
    (n = n.filter(function(i, a) {
      return n.indexOf(i) === a;
    })),
    V(
      'oneOfType',
      t
        ? {
            type: n,
            validator: function(i) {
              var a = [],
                s = e.some(function(u) {
                  var c = we(
                    jt(u) && u._vueTypes_name === 'oneOf' ? u.type || null : u,
                    i,
                    !0
                  );
                  return typeof c == 'string' && a.push(c), c === !0;
                });
              return (
                s ||
                  z(
                    'oneOfType - provided value does not match any of the ' +
                      a.length +
                      ` passed-in validators:
` +
                      Ut(
                        a.join(`
`)
                      )
                  ),
                s
              );
            }
          }
        : { type: n }
    )
  );
}
function hc(e) {
  return V('arrayOf', {
    type: Array,
    validator: function(t) {
      var n,
        r = t.every(function(o) {
          return (n = we(e, o, !0)) === !0;
        });
      return (
        r ||
          z(
            `arrayOf - value validation error:
` + Ut(n)
          ),
        r
      );
    }
  });
}
function yc(e) {
  return V('instanceOf', { type: e });
}
function vc(e) {
  return V('objectOf', {
    type: Object,
    validator: function(t) {
      var n,
        r = Object.keys(t).every(function(o) {
          return (n = we(e, t[o], !0)) === !0;
        });
      return (
        r ||
          z(
            `objectOf - value validation error:
` + Ut(n)
          ),
        r
      );
    }
  });
}
function bc(e) {
  var t = Object.keys(e),
    n = t.filter(function(o) {
      var i;
      return !!(!((i = e[o]) === null || i === void 0) && i.required);
    }),
    r = V('shape', {
      type: Object,
      validator: function(o) {
        var i = this;
        if (!Se(o)) return !1;
        var a = Object.keys(o);
        if (
          n.length > 0 &&
          n.some(function(u) {
            return a.indexOf(u) === -1;
          })
        ) {
          var s = n.filter(function(u) {
            return a.indexOf(u) === -1;
          });
          return (
            z(
              s.length === 1
                ? 'shape - required property "' + s[0] + '" is not defined.'
                : 'shape - required properties "' +
                    s.join('", "') +
                    '" are not defined.'
            ),
            !1
          );
        }
        return a.every(function(u) {
          if (t.indexOf(u) === -1)
            return (
              i._vueTypes_isLoose === !0 ||
              (z(
                'shape - shape definition does not include a "' +
                  u +
                  '" property. Allowed keys: "' +
                  t.join('", "') +
                  '".'
              ),
              !1)
            );
          var c = we(e[u], o[u], !0);
          return (
            typeof c == 'string' &&
              z(
                'shape - "' +
                  u +
                  `" property validation error:
 ` +
                  Ut(c)
              ),
            c === !0
          );
        });
      }
    });
  return (
    Object.defineProperty(r, '_vueTypes_isLoose', { writable: !0, value: !1 }),
    Object.defineProperty(r, 'loose', {
      get: function() {
        return (this._vueTypes_isLoose = !0), this;
      }
    }),
    r
  );
}
var ie = (function() {
  function e() {}
  return (
    (e.extend = function(t) {
      var n = this;
      if (Ne(t))
        return (
          t.forEach(function(f) {
            return n.extend(f);
          }),
          this
        );
      var r = t.name,
        o = t.validate,
        i = o !== void 0 && o,
        a = t.getter,
        s = a !== void 0 && a,
        u = gi(t, ['name', 'validate', 'getter']);
      if (st(this, r))
        throw new TypeError(
          '[VueTypes error]: Type "' + r + '" already defined'
        );
      var c,
        l = u.type;
      return jt(l)
        ? (delete u.type,
          Object.defineProperty(
            this,
            r,
            s
              ? {
                  get: function() {
                    return Dr(r, l, u);
                  }
                }
              : {
                  value: function() {
                    var f,
                      d = Dr(r, l, u);
                    return (
                      d.validator &&
                        (d.validator = (f = d.validator).bind.apply(
                          f,
                          [d].concat([].slice.call(arguments))
                        )),
                      d
                    );
                  }
                }
          ))
        : ((c = s
            ? {
                get: function() {
                  var f = Object.assign({}, u);
                  return i ? ae(r, f) : V(r, f);
                },
                enumerable: !0
              }
            : {
                value: function() {
                  var f,
                    d,
                    m = Object.assign({}, u);
                  return (
                    (f = i ? ae(r, m) : V(r, m)),
                    m.validator &&
                      (f.validator = (d = m.validator).bind.apply(
                        d,
                        [f].concat([].slice.call(arguments))
                      )),
                    f
                  );
                },
                enumerable: !0
              }),
          Object.defineProperty(this, r, c));
    }),
    pi(e, null, [
      {
        key: 'any',
        get: function() {
          return oc();
        }
      },
      {
        key: 'func',
        get: function() {
          return ic().def(this.defaults.func);
        }
      },
      {
        key: 'bool',
        get: function() {
          return ac().def(this.defaults.bool);
        }
      },
      {
        key: 'string',
        get: function() {
          return sc().def(this.defaults.string);
        }
      },
      {
        key: 'number',
        get: function() {
          return lc().def(this.defaults.number);
        }
      },
      {
        key: 'array',
        get: function() {
          return cc().def(this.defaults.array);
        }
      },
      {
        key: 'object',
        get: function() {
          return uc().def(this.defaults.object);
        }
      },
      {
        key: 'integer',
        get: function() {
          return fc().def(this.defaults.integer);
        }
      },
      {
        key: 'symbol',
        get: function() {
          return dc();
        }
      }
    ]),
    e
  );
})();
function Ci(e) {
  var t;
  return (
    e === void 0 &&
      (e = {
        func: function() {},
        bool: !0,
        string: '',
        number: 0,
        array: function() {
          return [];
        },
        object: function() {
          return {};
        },
        integer: 0
      }),
    ((t = (function(n) {
      function r() {
        return n.apply(this, arguments) || this;
      }
      return (
        mi(r, n),
        pi(r, null, [
          {
            key: 'sensibleDefaults',
            get: function() {
              return $t({}, this.defaults);
            },
            set: function(o) {
              this.defaults = o !== !1 ? $t({}, o !== !0 ? o : e) : {};
            }
          }
        ]),
        r
      );
    })(ie)).defaults = $t({}, e)),
    t
  );
}
(ie.defaults = {}),
  (ie.custom = pc),
  (ie.oneOf = mc),
  (ie.instanceOf = yc),
  (ie.oneOfType = gc),
  (ie.arrayOf = hc),
  (ie.objectOf = vc),
  (ie.shape = bc),
  (ie.utils = {
    validate: function(e, t) {
      return we(t, e, !0) === !0;
    },
    toType: function(e, t, n) {
      return n === void 0 && (n = !1), n ? ae(e, t) : V(e, t);
    }
  });
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return mi(t, e), t;
})(Ci());
const Si = Ci({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
Si.extend([
  { name: 'looseBool', getter: !0, type: Boolean, default: void 0 },
  { name: 'style', getter: !0, type: [String, Object], default: void 0 },
  { name: 'VueNode', getter: !0, type: null }
]);
const Cc = Si;
function Sc(e) {
  let { prefixCls: t, animation: n, transitionName: r } = e;
  return n ? { name: `${t}-${n}` } : r ? { name: r } : {};
}
ms('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
const Yp = e =>
    e !== void 0 && (e === 'topLeft' || e === 'topRight')
      ? 'slide-down'
      : 'slide-up',
  Qp = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return v(
      e
        ? {
            name: e,
            appear: !0,
            enterFromClass: `${e}-enter ${e}-enter-prepare ${e}-enter-start`,
            enterActiveClass: `${e}-enter ${e}-enter-prepare`,
            enterToClass: `${e}-enter ${e}-enter-active`,
            leaveFromClass: ` ${e}-leave`,
            leaveActiveClass: `${e}-leave ${e}-leave-active`,
            leaveToClass: `${e}-leave ${e}-leave-active`
          }
        : { css: !1 },
      t
    );
  },
  xi = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return v(
      e
        ? {
            name: e,
            appear: !0,
            appearActiveClass: `${e}`,
            appearToClass: `${e}-appear ${e}-appear-active`,
            enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
            enterActiveClass: `${e}`,
            enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
            leaveActiveClass: `${e} ${e}-leave`,
            leaveToClass: `${e}-leave-active`
          }
        : { css: !1 },
      t
    );
  },
  Zp = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  wi = Symbol('PortalContextKey'),
  xc = function(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { inTriggerContext: !0 };
    ce(wi, {
      inTriggerContext: t.inTriggerContext,
      shouldRender: _(() => {
        const {
          sPopupVisible: n,
          popupRef: r,
          forceRender: o,
          autoDestroy: i
        } = e || {};
        let a = !1;
        return (n || r || o) && (a = !0), !n && i && (a = !1), a;
      })
    });
  },
  wc = () => {
    xc({}, { inTriggerContext: !1 });
    const e = te(wi, { shouldRender: _(() => !1), inTriggerContext: !1 });
    return {
      shouldRender: _(() => e.shouldRender.value || e.inTriggerContext === !1)
    };
  },
  Oc = k({
    compatConfig: { MODE: 3 },
    name: 'Portal',
    inheritAttrs: !1,
    props: { getContainer: Cc.func.isRequired, didUpdate: Function },
    setup(e, t) {
      let { slots: n } = t,
        r = !0,
        o;
      const { shouldRender: i } = wc();
      function a() {
        i.value && (o = e.getContainer());
      }
      Pa(() => {
        (r = !1), a();
      }),
        Fe(() => {
          o || a();
        });
      const s = ue(i, () => {
        i.value && !o && (o = e.getContainer()), o && s();
      });
      return (
        Aa(() => {
          _o(() => {
            var u;
            i.value &&
              ((u = e.didUpdate) === null || u === void 0 || u.call(e, e));
          });
        }),
        () => {
          var u;
          return i.value
            ? r
              ? (u = n.default) === null || u === void 0
                ? void 0
                : u.call(n)
              : o
              ? b(To, { to: o }, n)
              : null
            : null;
        }
      );
    }
  });
var $c = Symbol('iconContext'),
  Oi = function() {
    return te($c, { prefixCls: B('anticon'), rootClassName: B(''), csp: B() });
  };
function _c() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
function Tc(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var Fr = 'data-vc-order',
  Ec = 'vc-icon-key',
  $n = new Map();
function $i() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : Ec;
}
function Jn(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector('head');
  return t || document.body;
}
function Pc(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
}
function _i(e) {
  return Array.from(($n.get(e) || e).children).filter(function(t) {
    return t.tagName === 'STYLE';
  });
}
function Ti(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!_c()) return null;
  var n = t.csp,
    r = t.prepend,
    o = document.createElement('style');
  o.setAttribute(Fr, Pc(r)),
    n && n.nonce && (o.nonce = n.nonce),
    (o.innerHTML = e);
  var i = Jn(t),
    a = i.firstChild;
  if (r) {
    if (r === 'queue') {
      var s = _i(i).filter(function(u) {
        return ['prepend', 'prependQueue'].includes(u.getAttribute(Fr));
      });
      if (s.length) return i.insertBefore(o, s[s.length - 1].nextSibling), o;
    }
    i.insertBefore(o, a);
  } else i.appendChild(o);
  return o;
}
function Ac(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Jn(t);
  return _i(n).find(function(r) {
    return r.getAttribute($i(t)) === e;
  });
}
function Rc(e, t) {
  var n = $n.get(e);
  if (!n || !Tc(document, n)) {
    var r = Ti('', t),
      o = r.parentNode;
    $n.set(e, o), e.removeChild(r);
  }
}
function Ic(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Jn(n);
  Rc(r, n);
  var o = Ac(t, n);
  if (o)
    return (
      n.csp &&
        n.csp.nonce &&
        o.nonce !== n.csp.nonce &&
        (o.nonce = n.csp.nonce),
      o.innerHTML !== e && (o.innerHTML = e),
      o
    );
  var i = Ti(e, n);
  return i.setAttribute($i(n), t), i;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        jc(e, o, n[o]);
      });
  }
  return e;
}
function jc(e, t, n) {
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
function Br(e) {
  return (
    typeof e == 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (typeof e.icon == 'object' || typeof e.icon == 'function')
  );
}
function _n(e, t, n) {
  return n
    ? Re(
        e.tag,
        Hr({ key: t }, n, e.attrs),
        (e.children || []).map(function(r, o) {
          return _n(
            r,
            ''
              .concat(t, '-')
              .concat(e.tag, '-')
              .concat(o)
          );
        })
      )
    : Re(
        e.tag,
        Hr({ key: t }, e.attrs),
        (e.children || []).map(function(r, o) {
          return _n(
            r,
            ''
              .concat(t, '-')
              .concat(e.tag, '-')
              .concat(o)
          );
        })
      );
}
function Ei(e) {
  return nt(e)[0];
}
function Pi(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Mc = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function Ai(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Nc(e) {
  return Ai(e) instanceof ShadowRoot;
}
function kc(e) {
  return Nc(e) ? Ai(e) : null;
}
var Lc = function() {
    var t = Oi(),
      n = t.prefixCls,
      r = t.csp,
      o = Oo(),
      i = Mc;
    n && (i = i.replace(/anticon/g, n.value)),
      _o(function() {
        var a = o.vnode.el,
          s = kc(a);
        Ic(i, '@ant-design-vue-icons', {
          prepend: !0,
          csp: r.value,
          attachTo: s
        });
      });
  },
  Dc = ['icon', 'primaryColor', 'secondaryColor'];
function Fc(e, t) {
  if (e == null) return {};
  var n = Hc(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Hc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        Bc(e, o, n[o]);
      });
  }
  return e;
}
function Bc(e, t, n) {
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
var Ze = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
function zc(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (Ze.primaryColor = t),
    (Ze.secondaryColor = n || Ei(t)),
    (Ze.calculated = !!n);
}
function Uc() {
  return _t({}, Ze);
}
var ze = function(t, n) {
  var r = _t({}, t, n.attrs),
    o = r.icon,
    i = r.primaryColor,
    a = r.secondaryColor,
    s = Fc(r, Dc),
    u = Ze;
  if (
    (i && (u = { primaryColor: i, secondaryColor: a || Ei(i) }), Br(o), !Br(o))
  )
    return null;
  var c = o;
  return (
    c &&
      typeof c.icon == 'function' &&
      (c = _t({}, c, { icon: c.icon(u.primaryColor, u.secondaryColor) })),
    _n(
      c.icon,
      'svg-'.concat(c.name),
      _t({}, s, {
        'data-icon': c.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
      })
    )
  );
};
ze.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ze.inheritAttrs = !1;
ze.displayName = 'IconBase';
ze.getTwoToneColors = Uc;
ze.setTwoToneColors = zc;
const Yn = ze;
function Gc(e, t) {
  return Vc(e) || Xc(e, t) || Wc(e, t) || qc();
}
function qc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wc(e, t) {
  if (e) {
    if (typeof e == 'string') return zr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return zr(e, t);
  }
}
function zr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Xc(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      o = !0,
      i = !1,
      a,
      s;
    try {
      for (
        n = n.call(e);
        !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        o = !0
      );
    } catch (u) {
      (i = !0), (s = u);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw s;
      }
    }
    return r;
  }
}
function Vc(e) {
  if (Array.isArray(e)) return e;
}
function Ri(e) {
  var t = Pi(e),
    n = Gc(t, 2),
    r = n[0],
    o = n[1];
  return Yn.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function Kc() {
  var e = Yn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Jc = k({
    name: 'InsertStyles',
    setup: function() {
      return (
        Lc(),
        function() {
          return null;
        }
      );
    }
  }),
  Yc = [
    'class',
    'icon',
    'spin',
    'rotate',
    'tabindex',
    'twoToneColor',
    'onClick'
  ];
function Qc(e, t) {
  return nu(e) || tu(e, t) || eu(e, t) || Zc();
}
function Zc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eu(e, t) {
  if (e) {
    if (typeof e == 'string') return Ur(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ur(e, t);
  }
}
function Ur(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function tu(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      o = !0,
      i = !1,
      a,
      s;
    try {
      for (
        n = n.call(e);
        !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        o = !0
      );
    } catch (u) {
      (i = !0), (s = u);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i) throw s;
      }
    }
    return r;
  }
}
function nu(e) {
  if (Array.isArray(e)) return e;
}
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        Je(e, o, n[o]);
      });
  }
  return e;
}
function Je(e, t, n) {
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
function ru(e, t) {
  if (e == null) return {};
  var n = ou(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function ou(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
Ri(La.primary);
var Ue = function(t, n) {
  var r,
    o = Gr({}, t, n.attrs),
    i = o.class,
    a = o.icon,
    s = o.spin,
    u = o.rotate,
    c = o.tabindex,
    l = o.twoToneColor,
    f = o.onClick,
    d = ru(o, Yc),
    m = Oi(),
    p = m.prefixCls,
    g = m.rootClassName,
    w =
      ((r = {}),
      Je(r, g.value, !!g.value),
      Je(r, p.value, !0),
      Je(r, ''.concat(p.value, '-').concat(a.name), !!a.name),
      Je(r, ''.concat(p.value, '-spin'), !!s || a.name === 'loading'),
      r),
    C = c;
  C === void 0 && f && (C = -1);
  var $ = u
      ? {
          msTransform: 'rotate('.concat(u, 'deg)'),
          transform: 'rotate('.concat(u, 'deg)')
        }
      : void 0,
    S = Pi(l),
    x = Qc(S, 2),
    O = x[0],
    E = x[1];
  return b(
    'span',
    Gr({ role: 'img', 'aria-label': a.name }, d, {
      onClick: f,
      class: [w, i],
      tabindex: C
    }),
    [
      b(Yn, { icon: a, primaryColor: O, secondaryColor: E, style: $ }, null),
      b(Jc, null, null)
    ]
  );
};
Ue.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Ue.displayName = 'AntdIcon';
Ue.inheritAttrs = !1;
Ue.getTwoToneColor = Kc;
Ue.setTwoToneColor = Ri;
const se = Ue;
function qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        iu(e, o, n[o]);
      });
  }
  return e;
}
function iu(e, t, n) {
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
var Qn = function(t, n) {
  var r = qr({}, t, n.attrs);
  return b(se, qr({}, r, { icon: Da }), null);
};
Qn.displayName = 'LoadingOutlined';
Qn.inheritAttrs = !1;
const Zn = Qn;
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        au(e, o, n[o]);
      });
  }
  return e;
}
function au(e, t, n) {
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
var er = function(t, n) {
  var r = Wr({}, t, n.attrs);
  return b(se, Wr({}, r, { icon: Fa }), null);
};
er.displayName = 'CloseOutlined';
er.inheritAttrs = !1;
const tr = er;
function Xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        su(e, o, n[o]);
      });
  }
  return e;
}
function su(e, t, n) {
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
var nr = function(t, n) {
  var r = Xr({}, t, n.attrs);
  return b(se, Xr({}, r, { icon: Ha }), null);
};
nr.displayName = 'CloseCircleFilled';
nr.inheritAttrs = !1;
const Gt = nr;
function Vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        lu(e, o, n[o]);
      });
  }
  return e;
}
function lu(e, t, n) {
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
var rr = function(t, n) {
  var r = Vr({}, t, n.attrs);
  return b(se, Vr({}, r, { icon: Ba }), null);
};
rr.displayName = 'CheckCircleOutlined';
rr.inheritAttrs = !1;
const cu = rr;
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        uu(e, o, n[o]);
      });
  }
  return e;
}
function uu(e, t, n) {
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
var or = function(t, n) {
  var r = Kr({}, t, n.attrs);
  return b(se, Kr({}, r, { icon: za }), null);
};
or.displayName = 'ExclamationCircleOutlined';
or.inheritAttrs = !1;
const fu = or;
function Jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        du(e, o, n[o]);
      });
  }
  return e;
}
function du(e, t, n) {
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
var ir = function(t, n) {
  var r = Jr({}, t, n.attrs);
  return b(se, Jr({}, r, { icon: Ua }), null);
};
ir.displayName = 'InfoCircleOutlined';
ir.inheritAttrs = !1;
const pu = ir;
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        mu(e, o, n[o]);
      });
  }
  return e;
}
function mu(e, t, n) {
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
var ar = function(t, n) {
  var r = Yr({}, t, n.attrs);
  return b(se, Yr({}, r, { icon: Ga }), null);
};
ar.displayName = 'CloseCircleOutlined';
ar.inheritAttrs = !1;
const gu = ar;
function Qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        hu(e, o, n[o]);
      });
  }
  return e;
}
function hu(e, t, n) {
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
var sr = function(t, n) {
  var r = Qr({}, t, n.attrs);
  return b(se, Qr({}, r, { icon: qa }), null);
};
sr.displayName = 'CheckCircleFilled';
sr.inheritAttrs = !1;
const qt = sr;
function Zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        yu(e, o, n[o]);
      });
  }
  return e;
}
function yu(e, t, n) {
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
var lr = function(t, n) {
  var r = Zr({}, t, n.attrs);
  return b(se, Zr({}, r, { icon: Wa }), null);
};
lr.displayName = 'ExclamationCircleFilled';
lr.inheritAttrs = !1;
const Wt = lr;
function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function(o) {
          return Object.getOwnPropertyDescriptor(n, o).enumerable;
        })
      )),
      r.forEach(function(o) {
        vu(e, o, n[o]);
      });
  }
  return e;
}
function vu(e, t, n) {
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
var cr = function(t, n) {
  var r = eo({}, t, n.attrs);
  return b(se, eo({}, r, { icon: Xa }), null);
};
cr.displayName = 'InfoCircleFilled';
cr.inheritAttrs = !1;
const Xt = cr,
  vt = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  bu = e => ({
    xs: `(max-width: ${e.screenXSMax}px)`,
    sm: `(min-width: ${e.screenSM}px)`,
    md: `(min-width: ${e.screenMD}px)`,
    lg: `(min-width: ${e.screenLG}px)`,
    xl: `(min-width: ${e.screenXL}px)`,
    xxl: `(min-width: ${e.screenXXL}px)`,
    xxxl: `{min-width: ${e.screenXXXL}px}`
  });
function Cu() {
  const [, e] = mt();
  return _(() => {
    const t = bu(e.value),
      n = new Map();
    let r = -1,
      o = {};
    return {
      matchHandlers: {},
      dispatch(i) {
        return (o = i), n.forEach(a => a(o)), n.size >= 1;
      },
      subscribe(i) {
        return n.size || this.register(), (r += 1), n.set(r, i), i(o), r;
      },
      unsubscribe(i) {
        n.delete(i), n.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach(i => {
          const a = t[i],
            s = this.matchHandlers[a];
          s == null || s.mql.removeListener(s == null ? void 0 : s.listener);
        }),
          n.clear();
      },
      register() {
        Object.keys(t).forEach(i => {
          const a = t[i],
            s = c => {
              let { matches: l } = c;
              this.dispatch(v(v({}, o), { [i]: l }));
            },
            u = window.matchMedia(a);
          u.addListener(s),
            (this.matchHandlers[a] = { mql: u, listener: s }),
            s(u);
        });
      },
      responsiveMap: t
    };
  });
}
const Su = () => me() && window.document.documentElement,
  Ii = e => {
    if (me() && window.document.documentElement) {
      const t = Array.isArray(e) ? e : [e],
        { documentElement: n } = window.document;
      return t.some(r => r in n.style);
    }
    return !1;
  },
  xu = (e, t) => {
    if (!Ii(e)) return !1;
    const n = document.createElement('div'),
      r = n.style[e];
    return (n.style[e] = t), n.style[e] !== r;
  };
function em(e, t) {
  return !Array.isArray(e) && t !== void 0 ? xu(e, t) : Ii(e);
}
let bt;
const wu = () => {
    if (!Su()) return !1;
    if (bt !== void 0) return bt;
    const e = document.createElement('div');
    return (
      (e.style.display = 'flex'),
      (e.style.flexDirection = 'column'),
      (e.style.rowGap = '1px'),
      e.appendChild(document.createElement('div')),
      e.appendChild(document.createElement('div')),
      document.body.appendChild(e),
      (bt = e.scrollHeight === 1),
      document.body.removeChild(e),
      bt
    );
  },
  Ou = () => {
    const e = K(!1);
    return (
      Fe(() => {
        e.value = wu();
      }),
      e
    );
  },
  ji = Symbol('rowContextKey'),
  $u = e => {
    ce(ji, e);
  },
  _u = () =>
    te(ji, {
      gutter: _(() => {}),
      wrap: _(() => {}),
      supportFlexGap: _(() => {})
    }),
  Tu = e => {
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
  Eu = e => {
    const { componentCls: t } = e;
    return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } };
  },
  Pu = (e, t) => {
    const { componentCls: n, gridColumns: r } = e,
      o = {};
    for (let i = r; i >= 0; i--)
      i === 0
        ? ((o[`${n}${t}-${i}`] = { display: 'none' }),
          (o[`${n}-push-${i}`] = { insetInlineStart: 'auto' }),
          (o[`${n}-pull-${i}`] = { insetInlineEnd: 'auto' }),
          (o[`${n}${t}-push-${i}`] = { insetInlineStart: 'auto' }),
          (o[`${n}${t}-pull-${i}`] = { insetInlineEnd: 'auto' }),
          (o[`${n}${t}-offset-${i}`] = { marginInlineEnd: 0 }),
          (o[`${n}${t}-order-${i}`] = { order: 0 }))
        : ((o[`${n}${t}-${i}`] = {
            display: 'block',
            flex: `0 0 ${(i / r) * 100}%`,
            maxWidth: `${(i / r) * 100}%`
          }),
          (o[`${n}${t}-push-${i}`] = { insetInlineStart: `${(i / r) * 100}%` }),
          (o[`${n}${t}-pull-${i}`] = { insetInlineEnd: `${(i / r) * 100}%` }),
          (o[`${n}${t}-offset-${i}`] = {
            marginInlineStart: `${(i / r) * 100}%`
          }),
          (o[`${n}${t}-order-${i}`] = { order: i }));
    return o;
  },
  Tn = (e, t) => Pu(e, t),
  Au = (e, t, n) => ({ [`@media (min-width: ${t}px)`]: v({}, Tn(e, n)) }),
  Ru = dt('Grid', e => [Tu(e)]),
  Iu = dt('Grid', e => {
    const t = pt(e, { gridColumns: 24 }),
      n = {
        '-sm': t.screenSMMin,
        '-md': t.screenMDMin,
        '-lg': t.screenLGMin,
        '-xl': t.screenXLMin,
        '-xxl': t.screenXXLMin
      };
    return [
      Eu(t),
      Tn(t, ''),
      Tn(t, '-xs'),
      Object.keys(n)
        .map(r => Au(t, n[r], r))
        .reduce((r, o) => v(v({}, r), o), {})
    ];
  }),
  ju = () => ({
    align: St([String, Object]),
    justify: St([String, Object]),
    prefixCls: String,
    gutter: St([Number, Array, Object], 0),
    wrap: { type: Boolean, default: void 0 }
  }),
  Mu = k({
    compatConfig: { MODE: 3 },
    name: 'ARow',
    inheritAttrs: !1,
    props: ju(),
    setup(e, t) {
      let { slots: n, attrs: r } = t;
      const { prefixCls: o, direction: i } = Be('row', e),
        [a, s] = Ru(o);
      let u;
      const c = Cu(),
        l = B({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
        f = B({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
        d = S =>
          _(() => {
            if (typeof e[S] == 'string') return e[S];
            if (typeof e[S] != 'object') return '';
            for (let x = 0; x < vt.length; x++) {
              const O = vt[x];
              if (!f.value[O]) continue;
              const E = e[S][O];
              if (E !== void 0) return E;
            }
            return '';
          }),
        m = d('align'),
        p = d('justify'),
        g = Ou();
      Fe(() => {
        u = c.value.subscribe(S => {
          f.value = S;
          const x = e.gutter || 0;
          ((!Array.isArray(x) && typeof x == 'object') ||
            (Array.isArray(x) &&
              (typeof x[0] == 'object' || typeof x[1] == 'object'))) &&
            (l.value = S);
        });
      }),
        $o(() => {
          c.value.unsubscribe(u);
        });
      const w = _(() => {
        const S = [void 0, void 0],
          { gutter: x = 0 } = e;
        return (
          (Array.isArray(x) ? x : [x, void 0]).forEach((E, y) => {
            if (typeof E == 'object')
              for (let P = 0; P < vt.length; P++) {
                const I = vt[P];
                if (l.value[I] && E[I] !== void 0) {
                  S[y] = E[I];
                  break;
                }
              }
            else S[y] = E;
          }),
          S
        );
      });
      $u({ gutter: w, supportFlexGap: g, wrap: _(() => e.wrap) });
      const C = _(() =>
          G(
            o.value,
            {
              [`${o.value}-no-wrap`]: e.wrap === !1,
              [`${o.value}-${p.value}`]: p.value,
              [`${o.value}-${m.value}`]: m.value,
              [`${o.value}-rtl`]: i.value === 'rtl'
            },
            r.class,
            s.value
          )
        ),
        $ = _(() => {
          const S = w.value,
            x = {},
            O = S[0] != null && S[0] > 0 ? `${S[0] / -2}px` : void 0,
            E = S[1] != null && S[1] > 0 ? `${S[1] / -2}px` : void 0;
          return (
            O && ((x.marginLeft = O), (x.marginRight = O)),
            g.value
              ? (x.rowGap = `${S[1]}px`)
              : E && ((x.marginTop = E), (x.marginBottom = E)),
            x
          );
        });
      return () => {
        var S;
        return a(
          b(
            'div',
            j(
              j({}, r),
              {},
              { class: C.value, style: v(v({}, $.value), r.style) }
            ),
            [(S = n.default) === null || S === void 0 ? void 0 : S.call(n)]
          )
        );
      };
    }
  }),
  Nu = Mu;
function ku(e) {
  return typeof e == 'number'
    ? `${e} ${e} auto`
    : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
    ? `0 0 ${e}`
    : e;
}
const Lu = () => ({
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
  Du = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  Fu = k({
    compatConfig: { MODE: 3 },
    name: 'ACol',
    inheritAttrs: !1,
    props: Lu(),
    setup(e, t) {
      let { slots: n, attrs: r } = t;
      const { gutter: o, supportFlexGap: i, wrap: a } = _u(),
        { prefixCls: s, direction: u } = Be('col', e),
        [c, l] = Iu(s),
        f = _(() => {
          const { span: m, order: p, offset: g, push: w, pull: C } = e,
            $ = s.value;
          let S = {};
          return (
            Du.forEach(x => {
              let O = {};
              const E = e[x];
              typeof E == 'number'
                ? (O.span = E)
                : typeof E == 'object' && (O = E || {}),
                (S = v(v({}, S), {
                  [`${$}-${x}-${O.span}`]: O.span !== void 0,
                  [`${$}-${x}-order-${O.order}`]: O.order || O.order === 0,
                  [`${$}-${x}-offset-${O.offset}`]: O.offset || O.offset === 0,
                  [`${$}-${x}-push-${O.push}`]: O.push || O.push === 0,
                  [`${$}-${x}-pull-${O.pull}`]: O.pull || O.pull === 0,
                  [`${$}-rtl`]: u.value === 'rtl'
                }));
            }),
            G(
              $,
              {
                [`${$}-${m}`]: m !== void 0,
                [`${$}-order-${p}`]: p,
                [`${$}-offset-${g}`]: g,
                [`${$}-push-${w}`]: w,
                [`${$}-pull-${C}`]: C
              },
              S,
              r.class,
              l.value
            )
          );
        }),
        d = _(() => {
          const { flex: m } = e,
            p = o.value,
            g = {};
          if (p && p[0] > 0) {
            const w = `${p[0] / 2}px`;
            (g.paddingLeft = w), (g.paddingRight = w);
          }
          if (p && p[1] > 0 && !i.value) {
            const w = `${p[1] / 2}px`;
            (g.paddingTop = w), (g.paddingBottom = w);
          }
          return (
            m &&
              ((g.flex = ku(m)),
              a.value === !1 && !g.minWidth && (g.minWidth = 0)),
            g
          );
        });
      return () => {
        var m;
        return c(
          b(
            'div',
            j(j({}, r), {}, { class: f.value, style: [d.value, r.style] }),
            [(m = n.default) === null || m === void 0 ? void 0 : m.call(n)]
          )
        );
      };
    }
  }),
  Ct = ft(Fu);
let cn = v({}, Ie.Modal);
function Hu(e) {
  e ? (cn = v(v({}, cn), e)) : (cn = v({}, Ie.Modal));
}
const En = 'internalMark',
  Tt = k({
    compatConfig: { MODE: 3 },
    name: 'ALocaleProvider',
    props: { locale: { type: Object }, ANT_MARK__: String },
    setup(e, t) {
      let { slots: n } = t;
      qn(e.ANT_MARK__ === En);
      const r = tt({
        antLocale: v(v({}, e.locale), { exist: !0 }),
        ANT_MARK__: En
      });
      return (
        ce('localeData', r),
        ue(
          () => e.locale,
          o => {
            Hu(o && o.Modal), (r.antLocale = v(v({}, o), { exist: !0 }));
          },
          { immediate: !0 }
        ),
        () => {
          var o;
          return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
        }
      );
    }
  });
Tt.install = function(e) {
  return e.component(Tt.name, Tt), e;
};
const Bu = ft(Tt),
  Mi = k({
    name: 'Notice',
    inheritAttrs: !1,
    props: [
      'prefixCls',
      'duration',
      'updateMark',
      'noticeKey',
      'closeIcon',
      'closable',
      'props',
      'onClick',
      'onClose',
      'holder',
      'visible'
    ],
    setup(e, t) {
      let { attrs: n, slots: r } = t,
        o,
        i = !1;
      const a = _(() => (e.duration === void 0 ? 4.5 : e.duration)),
        s = () => {
          a.value &&
            !i &&
            (o = setTimeout(() => {
              c();
            }, a.value * 1e3));
        },
        u = () => {
          o && (clearTimeout(o), (o = null));
        },
        c = f => {
          f && f.stopPropagation(), u();
          const { onClose: d, noticeKey: m } = e;
          d && d(m);
        },
        l = () => {
          u(), s();
        };
      return (
        Fe(() => {
          s();
        }),
        Ra(() => {
          (i = !0), u();
        }),
        ue(
          [a, () => e.updateMark, () => e.visible],
          (f, d) => {
            let [m, p, g] = f,
              [w, C, $] = d;
            (m !== w || p !== C || (g !== $ && $)) && l();
          },
          { flush: 'post' }
        ),
        () => {
          var f, d;
          const {
              prefixCls: m,
              closable: p,
              closeIcon: g = (f = r.closeIcon) === null || f === void 0
                ? void 0
                : f.call(r),
              onClick: w,
              holder: C
            } = e,
            { class: $, style: S } = n,
            x = `${m}-notice`,
            O = Object.keys(n).reduce(
              (y, P) => (
                (P.startsWith('data-') ||
                  P.startsWith('aria-') ||
                  P === 'role') &&
                  (y[P] = n[P]),
                y
              ),
              {}
            ),
            E = b(
              'div',
              j(
                {
                  class: G(x, $, { [`${x}-closable`]: p }),
                  style: S,
                  onMouseenter: u,
                  onMouseleave: s,
                  onClick: w
                },
                O
              ),
              [
                b('div', { class: `${x}-content` }, [
                  (d = r.default) === null || d === void 0 ? void 0 : d.call(r)
                ]),
                p
                  ? b('a', { tabindex: 0, onClick: c, class: `${x}-close` }, [
                      g || b('span', { class: `${x}-close-x` }, null)
                    ])
                  : null
              ]
            );
          return C ? b(To, { to: C }, { default: () => E }) : E;
        }
      );
    }
  });
var zu =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
let to = 0;
const Uu = Date.now();
function no() {
  const e = to;
  return (to += 1), `rcNotification_${Uu}_${e}`;
}
const Pn = k({
  name: 'Notification',
  inheritAttrs: !1,
  props: [
    'prefixCls',
    'transitionName',
    'animation',
    'maxCount',
    'closeIcon',
    'hashId'
  ],
  setup(e, t) {
    let { attrs: n, expose: r, slots: o } = t;
    const i = new Map(),
      a = B([]),
      s = _(() => {
        const { prefixCls: l, animation: f = 'fade' } = e;
        let d = e.transitionName;
        return !d && f && (d = `${l}-${f}`), xi(d);
      }),
      u = (l, f) => {
        const d = l.key || no(),
          m = v(v({}, l), { key: d }),
          { maxCount: p } = e,
          g = a.value.map(C => C.notice.key).indexOf(d),
          w = a.value.concat();
        g !== -1
          ? w.splice(g, 1, { notice: m, holderCallback: f })
          : (p &&
              a.value.length >= p &&
              ((m.key = w[0].notice.key),
              (m.updateMark = no()),
              (m.userPassKey = d),
              w.shift()),
            w.push({ notice: m, holderCallback: f })),
          (a.value = w);
      },
      c = l => {
        a.value = Ia(a.value).filter(f => {
          let {
            notice: { key: d, userPassKey: m }
          } = f;
          return (m || d) !== l;
        });
      };
    return (
      r({ add: u, remove: c, notices: a }),
      () => {
        var l;
        const {
            prefixCls: f,
            closeIcon: d = (l = o.closeIcon) === null || l === void 0
              ? void 0
              : l.call(o, { prefixCls: f })
          } = e,
          m = a.value.map((g, w) => {
            let { notice: C, holderCallback: $ } = g;
            const S = w === a.value.length - 1 ? C.updateMark : void 0,
              { key: x, userPassKey: O } = C,
              { content: E } = C,
              y = v(
                v(
                  v(
                    {
                      prefixCls: f,
                      closeIcon:
                        typeof d == 'function' ? d({ prefixCls: f }) : d
                    },
                    C
                  ),
                  C.props
                ),
                {
                  key: x,
                  noticeKey: O || x,
                  updateMark: S,
                  onClose: P => {
                    var I;
                    c(P), (I = C.onClose) === null || I === void 0 || I.call(C);
                  },
                  onClick: C.onClick
                }
              );
            return $
              ? b(
                  'div',
                  {
                    key: x,
                    class: `${f}-hook-holder`,
                    ref: P => {
                      typeof x > 'u' ||
                        (P ? (i.set(x, P), $(P, y)) : i.delete(x));
                    }
                  },
                  null
                )
              : b(Mi, j(j({}, y), {}, { class: G(y.class, e.hashId) }), {
                  default: () => [
                    typeof E == 'function' ? E({ prefixCls: f }) : E
                  ]
                });
          }),
          p = { [f]: 1, [n.class]: !!n.class, [e.hashId]: !0 };
        return b(
          'div',
          { class: p, style: n.style || { top: '65px', left: '50%' } },
          [b(Eo, j({ tag: 'div' }, s.value), { default: () => [m] })]
        );
      }
    );
  }
});
Pn.newInstance = function(t, n) {
  const r = t || {},
    {
      name: o = 'notification',
      getContainer: i,
      appContext: a,
      prefixCls: s,
      rootPrefixCls: u,
      transitionName: c,
      hasTransitionName: l,
      useStyle: f
    } = r,
    d = zu(r, [
      'name',
      'getContainer',
      'appContext',
      'prefixCls',
      'rootPrefixCls',
      'transitionName',
      'hasTransitionName',
      'useStyle'
    ]),
    m = document.createElement('div');
  i ? i().appendChild(m) : document.body.appendChild(m);
  const p = k({
      compatConfig: { MODE: 3 },
      name: 'NotificationWrapper',
      setup(w, C) {
        let { attrs: $ } = C;
        const S = K(),
          x = _(() => H.getPrefixCls(o, s)),
          [, O] = f(x);
        return (
          Fe(() => {
            n({
              notice(E) {
                var y;
                (y = S.value) === null || y === void 0 || y.add(E);
              },
              removeNotice(E) {
                var y;
                (y = S.value) === null || y === void 0 || y.remove(E);
              },
              destroy() {
                vr(null, m), m.parentNode && m.parentNode.removeChild(m);
              },
              component: S
            });
          }),
          () => {
            const E = H,
              y = E.getRootPrefixCls(u, x.value),
              P = l ? c : `${x.value}-${c}`;
            return b(et, j(j({}, E), {}, { prefixCls: y }), {
              default: () => [
                b(
                  Pn,
                  j(
                    j({ ref: S }, $),
                    {},
                    { prefixCls: x.value, transitionName: P, hashId: O.value }
                  ),
                  null
                )
              ]
            });
          }
        );
      }
    }),
    g = b(p, d);
  (g.appContext = a || g.appContext), vr(g, m);
};
const Ni = Pn;
let ro = 0;
const Gu = Date.now();
function oo() {
  const e = ro;
  return (ro += 1), `rcNotification_${Gu}_${e}`;
}
const qu = k({
    name: 'HookNotification',
    inheritAttrs: !1,
    props: [
      'prefixCls',
      'transitionName',
      'animation',
      'maxCount',
      'closeIcon',
      'hashId',
      'remove',
      'notices',
      'getStyles',
      'getClassName',
      'onAllRemoved',
      'getContainer'
    ],
    setup(e, t) {
      let { attrs: n, slots: r } = t;
      const o = new Map(),
        i = _(() => e.notices),
        a = _(() => {
          let l = e.transitionName;
          if (!l && e.animation)
            switch (typeof e.animation) {
              case 'string':
                l = e.animation;
                break;
              case 'function':
                l = e.animation().name;
                break;
              case 'object':
                l = e.animation.name;
                break;
              default:
                l = `${e.prefixCls}-fade`;
                break;
            }
          return xi(l);
        }),
        s = l => e.remove(l),
        u = B({});
      ue(i, () => {
        const l = {};
        Object.keys(u.value).forEach(f => {
          l[f] = [];
        }),
          e.notices.forEach(f => {
            const { placement: d = 'topRight' } = f.notice;
            d && ((l[d] = l[d] || []), l[d].push(f));
          }),
          (u.value = l);
      });
      const c = _(() => Object.keys(u.value));
      return () => {
        var l;
        const {
            prefixCls: f,
            closeIcon: d = (l = r.closeIcon) === null || l === void 0
              ? void 0
              : l.call(r, { prefixCls: f })
          } = e,
          m = c.value.map(p => {
            var g, w;
            const C = u.value[p],
              $ =
                (g = e.getClassName) === null || g === void 0
                  ? void 0
                  : g.call(e, p),
              S =
                (w = e.getStyles) === null || w === void 0
                  ? void 0
                  : w.call(e, p),
              x = C.map((y, P) => {
                let { notice: I, holderCallback: q } = y;
                const re = P === i.value.length - 1 ? I.updateMark : void 0,
                  { key: oe, userPassKey: tn } = I,
                  { content: We } = I,
                  T = v(
                    v(
                      v(
                        {
                          prefixCls: f,
                          closeIcon:
                            typeof d == 'function' ? d({ prefixCls: f }) : d
                        },
                        I
                      ),
                      I.props
                    ),
                    {
                      key: oe,
                      noticeKey: tn || oe,
                      updateMark: re,
                      onClose: A => {
                        var L;
                        s(A),
                          (L = I.onClose) === null || L === void 0 || L.call(I);
                      },
                      onClick: I.onClick
                    }
                  );
                return q
                  ? b(
                      'div',
                      {
                        key: oe,
                        class: `${f}-hook-holder`,
                        ref: A => {
                          typeof oe > 'u' ||
                            (A ? (o.set(oe, A), q(A, T)) : o.delete(oe));
                        }
                      },
                      null
                    )
                  : b(Mi, j(j({}, T), {}, { class: G(T.class, e.hashId) }), {
                      default: () => [
                        typeof We == 'function' ? We({ prefixCls: f }) : We
                      ]
                    });
              }),
              O = {
                [f]: 1,
                [`${f}-${p}`]: 1,
                [n.class]: !!n.class,
                [e.hashId]: !0,
                [$]: !!$
              };
            function E() {
              var y;
              C.length > 0 ||
                (Reflect.deleteProperty(u.value, p),
                (y = e.onAllRemoved) === null || y === void 0 || y.call(e));
            }
            return b(
              'div',
              {
                key: p,
                class: O,
                style: n.style || S || { top: '65px', left: '50%' }
              },
              [
                b(Eo, j(j({ tag: 'div' }, a.value), {}, { onAfterLeave: E }), {
                  default: () => [x]
                })
              ]
            );
          });
        return b(Oc, { getContainer: e.getContainer }, { default: () => [m] });
      };
    }
  }),
  Wu = qu;
var Xu =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const Vu = () => document.body;
let io = 0;
function Ku() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return (
    n.forEach(o => {
      o &&
        Object.keys(o).forEach(i => {
          const a = o[i];
          a !== void 0 && (e[i] = a);
        });
    }),
    e
  );
}
function ki() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
      getContainer: t = Vu,
      motion: n,
      prefixCls: r,
      maxCount: o,
      getClassName: i,
      getStyles: a,
      onAllRemoved: s
    } = e,
    u = Xu(e, [
      'getContainer',
      'motion',
      'prefixCls',
      'maxCount',
      'getClassName',
      'getStyles',
      'onAllRemoved'
    ]),
    c = K([]),
    l = K(),
    f = (C, $) => {
      const S = C.key || oo(),
        x = v(v({}, C), { key: S }),
        O = c.value.map(y => y.notice.key).indexOf(S),
        E = c.value.concat();
      O !== -1
        ? E.splice(O, 1, { notice: x, holderCallback: $ })
        : (o &&
            c.value.length >= o &&
            ((x.key = E[0].notice.key),
            (x.updateMark = oo()),
            (x.userPassKey = S),
            E.shift()),
          E.push({ notice: x, holderCallback: $ })),
        (c.value = E);
    },
    d = C => {
      c.value = c.value.filter($ => {
        let {
          notice: { key: S, userPassKey: x }
        } = $;
        return (x || S) !== C;
      });
    },
    m = () => {
      c.value = [];
    },
    p = () =>
      b(
        Wu,
        {
          ref: l,
          prefixCls: r,
          maxCount: o,
          notices: c.value,
          remove: d,
          getClassName: i,
          getStyles: a,
          animation: n,
          hashId: e.hashId,
          onAllRemoved: s,
          getContainer: t
        },
        null
      ),
    g = K([]),
    w = {
      open: C => {
        const $ = Ku(u, C);
        ($.key === null || $.key === void 0) &&
          (($.key = `vc-notification-${io}`), (io += 1)),
          (g.value = [...g.value, { type: 'open', config: $ }]);
      },
      close: C => {
        g.value = [...g.value, { type: 'close', key: C }];
      },
      destroy: () => {
        g.value = [...g.value, { type: 'destroy' }];
      }
    };
  return (
    ue(g, () => {
      g.value.length &&
        (g.value.forEach(C => {
          switch (C.type) {
            case 'open':
              f(C.config);
              break;
            case 'close':
              d(C.key);
              break;
            case 'destroy':
              m();
              break;
          }
        }),
        (g.value = []));
    }),
    [w, p]
  );
}
const Ju = e => {
    const {
        componentCls: t,
        iconCls: n,
        boxShadowSecondary: r,
        colorBgElevated: o,
        colorSuccess: i,
        colorError: a,
        colorWarning: s,
        colorInfo: u,
        fontSizeLG: c,
        motionEaseInOutCirc: l,
        motionDurationSlow: f,
        marginXS: d,
        paddingXS: m,
        borderRadiusLG: p,
        zIndexPopup: g,
        messageNoticeContentPadding: w
      } = e,
      C = new Ce('MessageMoveIn', {
        '0%': { padding: 0, transform: 'translateY(-100%)', opacity: 0 },
        '100%': { padding: m, transform: 'translateY(0)', opacity: 1 }
      }),
      $ = new Ce('MessageMoveOut', {
        '0%': { maxHeight: e.height, padding: m, opacity: 1 },
        '100%': { maxHeight: 0, padding: 0, opacity: 0 }
      });
    return [
      {
        [t]: v(v({}, ri(e)), {
          position: 'fixed',
          top: d,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          pointerEvents: 'none',
          zIndex: g,
          [`${t}-move-up`]: { animationFillMode: 'forwards' },
          [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
            animationName: C,
            animationDuration: f,
            animationPlayState: 'paused',
            animationTimingFunction: l
          },
          [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: { animationPlayState: 'running' },
          [`${t}-move-up-leave`]: {
            animationName: $,
            animationDuration: f,
            animationPlayState: 'paused',
            animationTimingFunction: l
          },
          [`${t}-move-up-leave${t}-move-up-leave-active`]: {
            animationPlayState: 'running'
          },
          '&-rtl': { direction: 'rtl', span: { direction: 'rtl' } }
        })
      },
      {
        [`${t}-notice`]: {
          padding: m,
          textAlign: 'center',
          [n]: {
            verticalAlign: 'text-bottom',
            marginInlineEnd: d,
            fontSize: c
          },
          [`${t}-notice-content`]: {
            display: 'inline-block',
            padding: w,
            background: o,
            borderRadius: p,
            boxShadow: r,
            pointerEvents: 'all'
          },
          [`${t}-success ${n}`]: { color: i },
          [`${t}-error ${n}`]: { color: a },
          [`${t}-warning ${n}`]: { color: s },
          [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: { color: u }
        }
      },
      { [`${t}-notice-pure-panel`]: { padding: 0, textAlign: 'start' } }
    ];
  },
  Li = dt(
    'Message',
    e => {
      const t = pt(e, {
        messageNoticeContentPadding: `${(e.controlHeightLG -
          e.fontSize * e.lineHeight) /
          2}px ${e.paddingSM}px`
      });
      return [Ju(t)];
    },
    e => ({ height: 150, zIndexPopup: e.zIndexPopupBase + 10 })
  ),
  Yu = {
    info: b(Xt, null, null),
    success: b(qt, null, null),
    error: b(Gt, null, null),
    warning: b(Wt, null, null),
    loading: b(Zn, null, null)
  },
  Qu = k({
    name: 'PureContent',
    inheritAttrs: !1,
    props: ['prefixCls', 'type', 'icon'],
    setup(e, t) {
      let { slots: n } = t;
      return () => {
        var r;
        return b(
          'div',
          {
            class: G(
              `${e.prefixCls}-custom-content`,
              `${e.prefixCls}-${e.type}`
            )
          },
          [
            e.icon || Yu[e.type],
            b('span', null, [
              (r = n.default) === null || r === void 0 ? void 0 : r.call(n)
            ])
          ]
        );
      };
    }
  });
var Zu =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const ef = 8,
  tf = 3,
  nf = k({
    name: 'Holder',
    inheritAttrs: !1,
    props: [
      'top',
      'prefixCls',
      'getContainer',
      'maxCount',
      'duration',
      'rtl',
      'transitionName',
      'onAllRemoved',
      'animation',
      'staticGetContainer'
    ],
    setup(e, t) {
      let { expose: n } = t;
      var r, o;
      const { getPrefixCls: i, getPopupContainer: a } = Be('message', e),
        s = _(() => i('message', e.prefixCls)),
        [, u] = Li(s),
        c = () => {
          var g;
          const w = (g = e.top) !== null && g !== void 0 ? g : ef;
          return {
            left: '50%',
            transform: 'translateX(-50%)',
            top: typeof w == 'number' ? `${w}px` : w
          };
        },
        l = () => G(u.value, e.rtl ? `${s.value}-rtl` : ''),
        f = () => {
          var g;
          return Sc({
            prefixCls: s.value,
            animation:
              (g = e.animation) !== null && g !== void 0 ? g : 'move-up',
            transitionName: e.transitionName
          });
        },
        d = b('span', { class: `${s.value}-close-x` }, [
          b(tr, { class: `${s.value}-close-icon` }, null)
        ]),
        [m, p] = ki({
          getStyles: c,
          prefixCls: s.value,
          getClassName: l,
          motion: f,
          closable: !1,
          closeIcon: d,
          duration: (r = e.duration) !== null && r !== void 0 ? r : tf,
          getContainer:
            (o = e.staticGetContainer) !== null && o !== void 0 ? o : a.value,
          maxCount: e.maxCount,
          onAllRemoved: e.onAllRemoved
        });
      return n(v(v({}, m), { prefixCls: s, hashId: u })), p;
    }
  });
let ao = 0;
function rf(e) {
  const t = K(null),
    n = Symbol('messageHolderKey'),
    r = u => {
      var c;
      (c = t.value) === null || c === void 0 || c.close(u);
    },
    o = u => {
      if (!t.value) {
        const O = () => {};
        return (O.then = () => {}), O;
      }
      const { open: c, prefixCls: l, hashId: f } = t.value,
        d = `${l}-notice`,
        { content: m, icon: p, type: g, key: w, class: C, onClose: $ } = u,
        S = Zu(u, ['content', 'icon', 'type', 'key', 'class', 'onClose']);
      let x = w;
      return (
        x == null && ((ao += 1), (x = `antd-message-${ao}`)),
        ls(
          O => (
            c(
              v(v({}, S), {
                key: x,
                content: () =>
                  b(
                    Qu,
                    {
                      prefixCls: l,
                      type: g,
                      icon: typeof p == 'function' ? p() : p
                    },
                    { default: () => [typeof m == 'function' ? m() : m] }
                  ),
                placement: 'top',
                class: G(g && `${d}-${g}`, f, C),
                onClose: () => {
                  $ == null || $(), O();
                }
              })
            ),
            () => {
              r(x);
            }
          )
        )
      );
    },
    a = {
      open: o,
      destroy: u => {
        var c;
        u !== void 0
          ? r(u)
          : (c = t.value) === null || c === void 0 || c.destroy();
      }
    };
  return (
    ['info', 'success', 'warning', 'error', 'loading'].forEach(u => {
      const c = (l, f, d) => {
        let m;
        l && typeof l == 'object' && 'content' in l
          ? (m = l)
          : (m = { content: l });
        let p, g;
        typeof f == 'function' ? (g = f) : ((p = f), (g = d));
        const w = v(v({ onClose: g, duration: p }, m), { type: u });
        return o(w);
      };
      a[u] = c;
    }),
    [a, () => b(nf, j(j({ key: n }, e), {}, { ref: t }), null)]
  );
}
function of(e) {
  return rf(e);
}
let Di = 3,
  Fi,
  U,
  af = 1,
  Hi = '',
  Bi = 'move-up',
  zi = !1,
  Ui = () => document.body,
  Gi,
  qi = !1;
function sf() {
  return af++;
}
function lf(e) {
  e.top !== void 0 && ((Fi = e.top), (U = null)),
    e.duration !== void 0 && (Di = e.duration),
    e.prefixCls !== void 0 && (Hi = e.prefixCls),
    e.getContainer !== void 0 && ((Ui = e.getContainer), (U = null)),
    e.transitionName !== void 0 &&
      ((Bi = e.transitionName), (U = null), (zi = !0)),
    e.maxCount !== void 0 && ((Gi = e.maxCount), (U = null)),
    e.rtl !== void 0 && (qi = e.rtl);
}
function cf(e, t) {
  if (U) {
    t(U);
    return;
  }
  Ni.newInstance(
    {
      appContext: e.appContext,
      prefixCls: e.prefixCls || Hi,
      rootPrefixCls: e.rootPrefixCls,
      transitionName: Bi,
      hasTransitionName: zi,
      style: { top: Fi },
      getContainer: Ui || e.getPopupContainer,
      maxCount: Gi,
      name: 'message',
      useStyle: Li
    },
    n => {
      if (U) {
        t(U);
        return;
      }
      (U = n), t(n);
    }
  );
}
const Wi = { info: Xt, success: qt, error: Gt, warning: Wt, loading: Zn },
  uf = Object.keys(Wi);
function ff(e) {
  const t = e.duration !== void 0 ? e.duration : Di,
    n = e.key || sf(),
    r = new Promise(i => {
      const a = () => (typeof e.onClose == 'function' && e.onClose(), i(!0));
      cf(e, s => {
        s.notice({
          key: n,
          duration: t,
          style: e.style || {},
          class: e.class,
          content: u => {
            let { prefixCls: c } = u;
            const l = Wi[e.type],
              f = l ? b(l, null, null) : '',
              d = G(`${c}-custom-content`, {
                [`${c}-${e.type}`]: e.type,
                [`${c}-rtl`]: qi === !0
              });
            return b('div', { class: d }, [
              typeof e.icon == 'function' ? e.icon() : e.icon || f,
              b('span', null, [
                typeof e.content == 'function' ? e.content() : e.content
              ])
            ]);
          },
          onClose: a,
          onClick: e.onClick
        });
      });
    }),
    o = () => {
      U && U.removeNotice(n);
    };
  return (o.then = (i, a) => r.then(i, a)), (o.promise = r), o;
}
function df(e) {
  return Object.prototype.toString.call(e) === '[object Object]' && !!e.content;
}
const lt = {
  open: ff,
  config: lf,
  destroy(e) {
    if (U)
      if (e) {
        const { removeNotice: t } = U;
        t(e);
      } else {
        const { destroy: t } = U;
        t(), (U = null);
      }
  }
};
function pf(e, t) {
  e[t] = (n, r, o) =>
    df(n)
      ? e.open(v(v({}, n), { type: t }))
      : (typeof r == 'function' && ((o = r), (r = void 0)),
        e.open({ content: n, duration: r, type: t, onClose: o }));
}
uf.forEach(e => pf(lt, e));
lt.warn = lt.warning;
lt.useMessage = of;
const mf = lt,
  gf = e => {
    const { componentCls: t, width: n, notificationMarginEdge: r } = e,
      o = new Ce('antNotificationTopFadeIn', {
        '0%': { marginTop: '-100%', opacity: 0 },
        '100%': { marginTop: 0, opacity: 1 }
      }),
      i = new Ce('antNotificationBottomFadeIn', {
        '0%': { marginBottom: '-100%', opacity: 0 },
        '100%': { marginBottom: 0, opacity: 1 }
      }),
      a = new Ce('antNotificationLeftFadeIn', {
        '0%': { right: { _skip_check_: !0, value: n }, opacity: 0 },
        '100%': { right: { _skip_check_: !0, value: 0 }, opacity: 1 }
      });
    return {
      [`&${t}-top, &${t}-bottom`]: { marginInline: 0 },
      [`&${t}-top`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: o
        }
      },
      [`&${t}-bottom`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: i
        }
      },
      [`&${t}-topLeft, &${t}-bottomLeft`]: {
        marginInlineEnd: 0,
        marginInlineStart: r,
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: a
        }
      }
    };
  },
  hf = gf,
  yf = e => {
    const {
        iconCls: t,
        componentCls: n,
        boxShadowSecondary: r,
        fontSizeLG: o,
        notificationMarginBottom: i,
        borderRadiusLG: a,
        colorSuccess: s,
        colorInfo: u,
        colorWarning: c,
        colorError: l,
        colorTextHeading: f,
        notificationBg: d,
        notificationPadding: m,
        notificationMarginEdge: p,
        motionDurationMid: g,
        motionEaseInOut: w,
        fontSize: C,
        lineHeight: $,
        width: S,
        notificationIconSize: x
      } = e,
      O = `${n}-notice`,
      E = new Ce('antNotificationFadeIn', {
        '0%': { left: { _skip_check_: !0, value: S }, opacity: 0 },
        '100%': { left: { _skip_check_: !0, value: 0 }, opacity: 1 }
      }),
      y = new Ce('antNotificationFadeOut', {
        '0%': { maxHeight: e.animationMaxHeight, marginBottom: i, opacity: 1 },
        '100%': {
          maxHeight: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0
        }
      });
    return [
      {
        [n]: v(
          v(
            v(v({}, ri(e)), {
              position: 'fixed',
              zIndex: e.zIndexPopup,
              marginInlineEnd: p,
              [`${n}-hook-holder`]: { position: 'relative' },
              [`&${n}-top, &${n}-bottom`]: {
                [`${n}-notice`]: { marginInline: 'auto auto' }
              },
              [`&${n}-topLeft, &${n}-bottomLeft`]: {
                [`${n}-notice`]: {
                  marginInlineEnd: 'auto',
                  marginInlineStart: 0
                }
              },
              [`${n}-fade-enter, ${n}-fade-appear`]: {
                animationDuration: e.motionDurationMid,
                animationTimingFunction: w,
                animationFillMode: 'both',
                opacity: 0,
                animationPlayState: 'paused'
              },
              [`${n}-fade-leave`]: {
                animationTimingFunction: w,
                animationFillMode: 'both',
                animationDuration: g,
                animationPlayState: 'paused'
              },
              [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
                animationName: E,
                animationPlayState: 'running'
              },
              [`${n}-fade-leave${n}-fade-leave-active`]: {
                animationName: y,
                animationPlayState: 'running'
              }
            }),
            hf(e)
          ),
          {
            '&-rtl': {
              direction: 'rtl',
              [`${n}-notice-btn`]: { float: 'left' }
            }
          }
        )
      },
      {
        [O]: {
          position: 'relative',
          width: S,
          maxWidth: `calc(100vw - ${p * 2}px)`,
          marginBottom: i,
          marginInlineStart: 'auto',
          padding: m,
          overflow: 'hidden',
          lineHeight: $,
          wordWrap: 'break-word',
          background: d,
          borderRadius: a,
          boxShadow: r,
          [`${n}-close-icon`]: { fontSize: C, cursor: 'pointer' },
          [`${O}-message`]: {
            marginBottom: e.marginXS,
            color: f,
            fontSize: o,
            lineHeight: e.lineHeightLG
          },
          [`${O}-description`]: { fontSize: C },
          [`&${O}-closable ${O}-message`]: { paddingInlineEnd: e.paddingLG },
          [`${O}-with-icon ${O}-message`]: {
            marginBottom: e.marginXS,
            marginInlineStart: e.marginSM + x,
            fontSize: o
          },
          [`${O}-with-icon ${O}-description`]: {
            marginInlineStart: e.marginSM + x,
            fontSize: C
          },
          [`${O}-icon`]: {
            position: 'absolute',
            fontSize: x,
            lineHeight: 0,
            [`&-success${t}`]: { color: s },
            [`&-info${t}`]: { color: u },
            [`&-warning${t}`]: { color: c },
            [`&-error${t}`]: { color: l }
          },
          [`${O}-close`]: {
            position: 'absolute',
            top: e.notificationPaddingVertical,
            insetInlineEnd: e.notificationPaddingHorizontal,
            color: e.colorIcon,
            outline: 'none',
            width: e.notificationCloseButtonSize,
            height: e.notificationCloseButtonSize,
            borderRadius: e.borderRadiusSM,
            transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              color: e.colorIconHover,
              backgroundColor: e.wireframe ? 'transparent' : e.colorFillContent
            }
          },
          [`${O}-btn`]: { float: 'right', marginTop: e.marginSM }
        }
      },
      { [`${O}-pure-panel`]: { margin: 0 } }
    ];
  },
  Xi = dt(
    'Notification',
    e => {
      const t = e.paddingMD,
        n = e.paddingLG,
        r = pt(e, {
          notificationBg: e.colorBgElevated,
          notificationPaddingVertical: t,
          notificationPaddingHorizontal: n,
          notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
          notificationMarginBottom: e.margin,
          notificationMarginEdge: e.marginLG,
          animationMaxHeight: 150,
          notificationIconSize: e.fontSizeLG * e.lineHeightLG,
          notificationCloseButtonSize: e.controlHeightLG * 0.55
        });
      return [yf(r)];
    },
    e => ({ zIndexPopup: e.zIndexPopupBase + 50, width: 384 })
  );
function vf(e, t) {
  return (
    t ||
    b('span', { class: `${e}-close-x` }, [
      b(tr, { class: `${e}-close-icon` }, null)
    ])
  );
}
b(Xt, null, null),
  b(qt, null, null),
  b(Gt, null, null),
  b(Wt, null, null),
  b(Zn, null, null);
const bf = { success: qt, info: Xt, error: Gt, warning: Wt };
function Cf(e) {
  let {
      prefixCls: t,
      icon: n,
      type: r,
      message: o,
      description: i,
      btn: a
    } = e,
    s = null;
  if (n) s = b('span', { class: `${t}-icon` }, [Te(n)]);
  else if (r) {
    const u = bf[r];
    s = b(u, { class: `${t}-icon ${t}-icon-${r}` }, null);
  }
  return b('div', { class: G({ [`${t}-with-icon`]: s }), role: 'alert' }, [
    s,
    b('div', { class: `${t}-message` }, [o]),
    b('div', { class: `${t}-description` }, [i]),
    a && b('div', { class: `${t}-btn` }, [a])
  ]);
}
function Vi(e, t, n) {
  let r;
  switch (
    ((t = typeof t == 'number' ? `${t}px` : t),
    (n = typeof n == 'number' ? `${n}px` : n),
    e)
  ) {
    case 'top':
      r = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: t,
        bottom: 'auto'
      };
      break;
    case 'topLeft':
      r = { left: 0, top: t, bottom: 'auto' };
      break;
    case 'topRight':
      r = { right: 0, top: t, bottom: 'auto' };
      break;
    case 'bottom':
      r = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: 'auto',
        bottom: n
      };
      break;
    case 'bottomLeft':
      r = { left: 0, top: 'auto', bottom: n };
      break;
    default:
      r = { right: 0, top: 'auto', bottom: n };
      break;
  }
  return r;
}
function Sf(e) {
  return { name: `${e}-fade` };
}
var xf =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const so = 24,
  wf = 4.5,
  Of = k({
    name: 'Holder',
    inheritAttrs: !1,
    props: ['prefixCls', 'class', 'type', 'icon', 'content', 'onAllRemoved'],
    setup(e, t) {
      let { expose: n } = t;
      const { getPrefixCls: r, getPopupContainer: o } = Be('notification', e),
        i = _(() => e.prefixCls || r('notification')),
        a = d => {
          var m, p;
          return Vi(
            d,
            (m = e.top) !== null && m !== void 0 ? m : so,
            (p = e.bottom) !== null && p !== void 0 ? p : so
          );
        },
        [, s] = Xi(i),
        u = () => G(s.value, { [`${i.value}-rtl`]: e.rtl }),
        c = () => Sf(i.value),
        [l, f] = ki({
          prefixCls: i.value,
          getStyles: a,
          getClassName: u,
          motion: c,
          closable: !0,
          closeIcon: vf(i.value),
          duration: wf,
          getContainer: () => {
            var d, m;
            return (
              ((d = e.getPopupContainer) === null || d === void 0
                ? void 0
                : d.call(e)) ||
              ((m = o.value) === null || m === void 0 ? void 0 : m.call(o)) ||
              document.body
            );
          },
          maxCount: e.maxCount,
          hashId: s.value,
          onAllRemoved: e.onAllRemoved
        });
      return n(v(v({}, l), { prefixCls: i.value, hashId: s })), f;
    }
  });
function $f(e) {
  const t = K(null),
    n = Symbol('notificationHolderKey'),
    r = s => {
      if (!t.value) return;
      const { open: u, prefixCls: c, hashId: l } = t.value,
        f = `${c}-notice`,
        { message: d, description: m, icon: p, type: g, btn: w, class: C } = s,
        $ = xf(s, ['message', 'description', 'icon', 'type', 'btn', 'class']);
      return u(
        v(v({ placement: 'topRight' }, $), {
          content: () =>
            b(
              Cf,
              {
                prefixCls: f,
                icon: typeof p == 'function' ? p() : p,
                type: g,
                message: typeof d == 'function' ? d() : d,
                description: typeof m == 'function' ? m() : m,
                btn: typeof w == 'function' ? w() : w
              },
              null
            ),
          class: G(g && `${f}-${g}`, l, C)
        })
      );
    },
    i = {
      open: r,
      destroy: s => {
        var u, c;
        s !== void 0
          ? (u = t.value) === null || u === void 0 || u.close(s)
          : (c = t.value) === null || c === void 0 || c.destroy();
      }
    };
  return (
    ['success', 'info', 'warning', 'error'].forEach(s => {
      i[s] = u => r(v(v({}, u), { type: s }));
    }),
    [i, () => b(Of, j(j({ key: n }, e), {}, { ref: t }), null)]
  );
}
function _f(e) {
  return $f(e);
}
globalThis && globalThis.__awaiter;
const he = {};
let Ki = 4.5,
  Ji = '24px',
  Yi = '24px',
  An = '',
  Qi = 'topRight',
  Zi = () => document.body,
  ea = null,
  Rn = !1,
  ta;
function Tf(e) {
  const {
    duration: t,
    placement: n,
    bottom: r,
    top: o,
    getContainer: i,
    closeIcon: a,
    prefixCls: s
  } = e;
  s !== void 0 && (An = s),
    t !== void 0 && (Ki = t),
    n !== void 0 && (Qi = n),
    r !== void 0 && (Yi = typeof r == 'number' ? `${r}px` : r),
    o !== void 0 && (Ji = typeof o == 'number' ? `${o}px` : o),
    i !== void 0 && (Zi = i),
    a !== void 0 && (ea = a),
    e.rtl !== void 0 && (Rn = e.rtl),
    e.maxCount !== void 0 && (ta = e.maxCount);
}
function Ef(e, t) {
  let {
    prefixCls: n,
    placement: r = Qi,
    getContainer: o = Zi,
    top: i,
    bottom: a,
    closeIcon: s = ea,
    appContext: u
  } = e;
  const { getPrefixCls: c } = Bf(),
    l = c('notification', n || An),
    f = `${l}-${r}-${Rn}`,
    d = he[f];
  if (d) {
    Promise.resolve(d).then(p => {
      t(p);
    });
    return;
  }
  const m = G(`${l}-${r}`, { [`${l}-rtl`]: Rn === !0 });
  Ni.newInstance(
    {
      name: 'notification',
      prefixCls: n || An,
      useStyle: Xi,
      class: m,
      style: Vi(r, i ?? Ji, a ?? Yi),
      appContext: u,
      getContainer: o,
      closeIcon: p => {
        let { prefixCls: g } = p;
        return b('span', { class: `${g}-close-x` }, [
          Te(s, {}, b(tr, { class: `${g}-close-icon` }, null))
        ]);
      },
      maxCount: ta,
      hasTransitionName: !0
    },
    p => {
      (he[f] = p), t(p);
    }
  );
}
const Pf = { success: cu, info: pu, error: gu, warning: fu };
function Af(e) {
  const { icon: t, type: n, description: r, message: o, btn: i } = e,
    a = e.duration === void 0 ? Ki : e.duration;
  Ef(e, s => {
    s.notice({
      content: u => {
        let { prefixCls: c } = u;
        const l = `${c}-notice`;
        let f = null;
        if (t) f = () => b('span', { class: `${l}-icon` }, [Te(t)]);
        else if (n) {
          const d = Pf[n];
          f = () => b(d, { class: `${l}-icon ${l}-icon-${n}` }, null);
        }
        return b('div', { class: f ? `${l}-with-icon` : '' }, [
          f && f(),
          b('div', { class: `${l}-message` }, [
            !r && f
              ? b(
                  'span',
                  { class: `${l}-message-single-line-auto-margin` },
                  null
                )
              : null,
            Te(o)
          ]),
          b('div', { class: `${l}-description` }, [Te(r)]),
          i ? b('span', { class: `${l}-btn` }, [Te(i)]) : null
        ]);
      },
      duration: a,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
const Le = {
    open: Af,
    close(e) {
      Object.keys(he).forEach(t =>
        Promise.resolve(he[t]).then(n => {
          n.removeNotice(e);
        })
      );
    },
    config: Tf,
    destroy() {
      Object.keys(he).forEach(e => {
        Promise.resolve(he[e]).then(t => {
          t.destroy();
        }),
          delete he[e];
      });
    }
  },
  Rf = ['success', 'info', 'warning', 'error'];
Rf.forEach(e => {
  Le[e] = t => Le.open(v(v({}, t), { type: e }));
});
Le.warn = Le.warning;
Le.useNotification = _f;
const Ye = Le,
  If = `-ant-${Date.now()}-${Math.random()}`;
function jf(e, t) {
  const n = {},
    r = (a, s) => {
      let u = a.clone();
      return (u = (s == null ? void 0 : s(u)) || u), u.toRgbString();
    },
    o = (a, s) => {
      const u = new F(a),
        c = nt(u.toRgbString());
      (n[`${s}-color`] = r(u)),
        (n[`${s}-color-disabled`] = c[1]),
        (n[`${s}-color-hover`] = c[4]),
        (n[`${s}-color-active`] = c[6]),
        (n[`${s}-color-outline`] = u
          .clone()
          .setAlpha(0.2)
          .toRgbString()),
        (n[`${s}-color-deprecated-bg`] = c[0]),
        (n[`${s}-color-deprecated-border`] = c[2]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, 'primary');
    const a = new F(t.primaryColor),
      s = nt(a.toRgbString());
    s.forEach((c, l) => {
      n[`primary-${l + 1}`] = c;
    }),
      (n['primary-color-deprecated-l-35'] = r(a, c => c.lighten(35))),
      (n['primary-color-deprecated-l-20'] = r(a, c => c.lighten(20))),
      (n['primary-color-deprecated-t-20'] = r(a, c => c.tint(20))),
      (n['primary-color-deprecated-t-50'] = r(a, c => c.tint(50))),
      (n['primary-color-deprecated-f-12'] = r(a, c =>
        c.setAlpha(c.getAlpha() * 0.12)
      ));
    const u = new F(s[0]);
    (n['primary-color-active-deprecated-f-30'] = r(u, c =>
      c.setAlpha(c.getAlpha() * 0.3)
    )),
      (n['primary-color-active-deprecated-d-02'] = r(u, c => c.darken(2)));
  }
  return (
    t.successColor && o(t.successColor, 'success'),
    t.warningColor && o(t.warningColor, 'warning'),
    t.errorColor && o(t.errorColor, 'error'),
    t.infoColor && o(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(n).map(a => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  );
}
function Mf(e, t) {
  const n = jf(e, t);
  me() ? Rt(n, `${If}-dynamic-theme`) : qn();
}
const Nf = e => {
    const [t, n] = mt();
    return xn(
      _(() => ({
        theme: t.value,
        token: n.value,
        hashId: '',
        path: ['ant-design-icons', e.value]
      })),
      () => [
        {
          [`.${e.value}`]: v(v({}, Fl()), {
            [`.${e.value} .${e.value}-icon`]: { display: 'block' }
          })
        }
      ]
    );
  },
  kf = Nf;
function Lf(e, t) {
  const n = _(() => (e == null ? void 0 : e.value) || {}),
    r = _(() =>
      n.value.inherit === !1 || !(t != null && t.value) ? ii : t.value
    );
  return _(() => {
    if (!(e != null && e.value)) return t == null ? void 0 : t.value;
    const i = v({}, r.value.components);
    return (
      Object.keys(e.value.components || {}).forEach(a => {
        i[a] = v(v({}, i[a]), e.value.components[a]);
      }),
      v(v(v({}, r.value), n.value), {
        token: v(v({}, r.value.token), n.value.token),
        components: i
      })
    );
  });
}
var Df =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const Ff = 'ant';
function Ae() {
  return H.prefixCls || Ff;
}
function na() {
  return H.iconPrefixCls || zn;
}
const ur = tt({}),
  H = tt({});
Lt(() => {
  v(H, ur),
    (H.prefixCls = Ae()),
    (H.iconPrefixCls = na()),
    (H.getPrefixCls = (e, t) => t || (e ? `${H.prefixCls}-${e}` : H.prefixCls)),
    (H.getRootPrefixCls = () => (H.prefixCls ? H.prefixCls : Ae()));
});
let un;
const Hf = e => {
    un && un(),
      (un = Lt(() => {
        v(ur, tt(e)), v(H, tt(e));
      })),
      e.theme && Mf(Ae(), e.theme);
  },
  Bf = () => ({
    getPrefixCls: (e, t) => t || (e ? `${Ae()}-${e}` : Ae()),
    getIconPrefixCls: na,
    getRootPrefixCls: () => (H.prefixCls ? H.prefixCls : Ae())
  }),
  et = k({
    compatConfig: { MODE: 3 },
    name: 'AConfigProvider',
    inheritAttrs: !1,
    props: ys(),
    setup(e, t) {
      let { slots: n } = t;
      const r = Ro(),
        o = (T, A) => {
          const { prefixCls: L = 'ant' } = e;
          if (A) return A;
          const fe = L || r.getPrefixCls('');
          return T ? `${fe}-${T}` : fe;
        },
        i = _(() => e.iconPrefixCls || r.iconPrefixCls.value || zn),
        a = _(() => i.value !== r.iconPrefixCls.value),
        s = _(() => {
          var T;
          return (
            e.csp || ((T = r.csp) === null || T === void 0 ? void 0 : T.value)
          );
        }),
        u = kf(i),
        c = Lf(
          _(() => e.theme),
          _(() => {
            var T;
            return (T = r.theme) === null || T === void 0 ? void 0 : T.value;
          })
        ),
        l = T => (e.renderEmpty || n.renderEmpty || r.renderEmpty || Zl)(T),
        f = _(() => {
          var T, A;
          return (T = e.autoInsertSpaceInButton) !== null && T !== void 0
            ? T
            : (A = r.autoInsertSpaceInButton) === null || A === void 0
            ? void 0
            : A.value;
        }),
        d = _(() => {
          var T;
          return (
            e.locale ||
            ((T = r.locale) === null || T === void 0 ? void 0 : T.value)
          );
        });
      ue(
        d,
        () => {
          ur.locale = d.value;
        },
        { immediate: !0 }
      );
      const m = _(() => {
          var T;
          return (
            e.direction ||
            ((T = r.direction) === null || T === void 0 ? void 0 : T.value)
          );
        }),
        p = _(() => {
          var T, A;
          return (T = e.space) !== null && T !== void 0
            ? T
            : (A = r.space) === null || A === void 0
            ? void 0
            : A.value;
        }),
        g = _(() => {
          var T, A;
          return (T = e.virtual) !== null && T !== void 0
            ? T
            : (A = r.virtual) === null || A === void 0
            ? void 0
            : A.value;
        }),
        w = _(() => {
          var T, A;
          return (T = e.dropdownMatchSelectWidth) !== null && T !== void 0
            ? T
            : (A = r.dropdownMatchSelectWidth) === null || A === void 0
            ? void 0
            : A.value;
        }),
        C = _(() => {
          var T;
          return e.getTargetContainer !== void 0
            ? e.getTargetContainer
            : (T = r.getTargetContainer) === null || T === void 0
            ? void 0
            : T.value;
        }),
        $ = _(() => {
          var T;
          return e.getPopupContainer !== void 0
            ? e.getPopupContainer
            : (T = r.getPopupContainer) === null || T === void 0
            ? void 0
            : T.value;
        }),
        S = _(() => {
          var T;
          return e.pageHeader !== void 0
            ? e.pageHeader
            : (T = r.pageHeader) === null || T === void 0
            ? void 0
            : T.value;
        }),
        x = _(() => {
          var T;
          return e.input !== void 0
            ? e.input
            : (T = r.input) === null || T === void 0
            ? void 0
            : T.value;
        }),
        O = _(() => {
          var T;
          return e.pagination !== void 0
            ? e.pagination
            : (T = r.pagination) === null || T === void 0
            ? void 0
            : T.value;
        }),
        E = _(() => {
          var T;
          return e.form !== void 0
            ? e.form
            : (T = r.form) === null || T === void 0
            ? void 0
            : T.value;
        }),
        y = _(() => {
          var T;
          return e.select !== void 0
            ? e.select
            : (T = r.select) === null || T === void 0
            ? void 0
            : T.value;
        }),
        P = _(() => e.componentSize),
        I = _(() => e.componentDisabled),
        q = _(() => {
          var T, A;
          return (T = e.wave) !== null && T !== void 0
            ? T
            : (A = r.wave) === null || A === void 0
            ? void 0
            : A.value;
        }),
        re = {
          csp: s,
          autoInsertSpaceInButton: f,
          locale: d,
          direction: m,
          space: p,
          virtual: g,
          dropdownMatchSelectWidth: w,
          getPrefixCls: o,
          iconPrefixCls: i,
          theme: _(() => {
            var T, A;
            return (T = c.value) !== null && T !== void 0
              ? T
              : (A = r.theme) === null || A === void 0
              ? void 0
              : A.value;
          }),
          renderEmpty: l,
          getTargetContainer: C,
          getPopupContainer: $,
          pageHeader: S,
          input: x,
          pagination: O,
          form: E,
          select: y,
          componentSize: P,
          componentDisabled: I,
          transformCellText: _(() => e.transformCellText),
          wave: q
        },
        oe = _(() => {
          const T = c.value || {},
            { algorithm: A, token: L } = T,
            fe = Df(T, ['algorithm', 'token']),
            nn = A && (!Array.isArray(A) || A.length > 0) ? Wo(A) : void 0;
          return v(v({}, fe), { theme: nn, token: v(v({}, zt), L) });
        }),
        tn = _(() => {
          var T, A;
          let L = {};
          return (
            d.value &&
              (L =
                ((T = d.value.Form) === null || T === void 0
                  ? void 0
                  : T.defaultValidateMessages) ||
                ((A = Ie.Form) === null || A === void 0
                  ? void 0
                  : A.defaultValidateMessages) ||
                {}),
            e.form &&
              e.form.validateMessages &&
              (L = v(v({}, L), e.form.validateMessages)),
            L
          );
        });
      vs(re), hs({ validateMessages: tn }), ec(P), bs(I);
      const We = T => {
        var A, L;
        let fe = a.value
          ? u((A = n.default) === null || A === void 0 ? void 0 : A.call(n))
          : (L = n.default) === null || L === void 0
          ? void 0
          : L.call(n);
        if (e.theme) {
          const nn = (function() {
            return fe;
          })();
          fe = b(Xl, { value: oe.value }, { default: () => [nn] });
        }
        return b(
          Bu,
          { locale: d.value || T, ANT_MARK__: En },
          { default: () => [fe] }
        );
      };
      return (
        Lt(() => {
          m.value &&
            (mf.config({ rtl: m.value === 'rtl' }),
            Ye.config({ rtl: m.value === 'rtl' }));
        }),
        () => b(No, { children: (T, A, L) => We(L) }, null)
      );
    }
  });
et.config = Hf;
et.install = function(e) {
  e.component(et.name, et);
};
const lo = ft(Nu);
function ra(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: zf } = Object.prototype,
  { getPrototypeOf: fr } = Object,
  Vt = (e => t => {
    const n = zf.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ne = e => ((e = e.toLowerCase()), t => Vt(t) === e),
  Kt = e => t => typeof t === e,
  { isArray: Ge } = Array,
  ct = Kt('undefined');
function Uf(e) {
  return (
    e !== null &&
    !ct(e) &&
    e.constructor !== null &&
    !ct(e.constructor) &&
    J(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const oa = ne('ArrayBuffer');
function Gf(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && oa(e.buffer)),
    t
  );
}
const qf = Kt('string'),
  J = Kt('function'),
  ia = Kt('number'),
  Jt = e => e !== null && typeof e == 'object',
  Wf = e => e === !0 || e === !1,
  Et = e => {
    if (Vt(e) !== 'object') return !1;
    const t = fr(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Xf = ne('Date'),
  Vf = ne('File'),
  Kf = ne('Blob'),
  Jf = ne('FileList'),
  Yf = e => Jt(e) && J(e.pipe),
  Qf = e => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (J(e.append) &&
          ((t = Vt(e)) === 'formdata' ||
            (t === 'object' &&
              J(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Zf = ne('URLSearchParams'),
  [ed, td, nd, rd] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    ne
  ),
  od = e =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function gt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), Ge(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let s;
    for (r = 0; r < a; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function aa(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const sa = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  la = e => !ct(e) && e !== sa;
function In() {
  const { caseless: e } = (la(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && aa(t, o)) || o;
      Et(t[i]) && Et(r)
        ? (t[i] = In(t[i], r))
        : Et(r)
        ? (t[i] = In({}, r))
        : Ge(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && gt(arguments[r], n);
  return t;
}
const id = (e, t, n, { allOwnKeys: r } = {}) => (
    gt(
      t,
      (o, i) => {
        n && J(o) ? (e[i] = ra(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ad = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  sd = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  ld = (e, t, n, r) => {
    let o, i, a;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
      e = n !== !1 && fr(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  cd = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  ud = e => {
    if (!e) return null;
    if (Ge(e)) return e;
    let t = e.length;
    if (!ia(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  fd = (e => t => e && t instanceof e)(
    typeof Uint8Array < 'u' && fr(Uint8Array)
  ),
  dd = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  pd = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  md = ne('HTMLFormElement'),
  gd = e =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
      return r.toUpperCase() + o;
    }),
  co = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype),
  hd = ne('RegExp'),
  ca = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    gt(n, (o, i) => {
      let a;
      (a = t(o, i, e)) !== !1 && (r[i] = a || o);
    }),
      Object.defineProperties(e, r);
  },
  yd = e => {
    ca(e, (t, n) => {
      if (J(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (J(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  vd = (e, t) => {
    const n = {},
      r = o => {
        o.forEach(i => {
          n[i] = !0;
        });
      };
    return Ge(e) ? r(e) : r(String(e).split(t)), n;
  },
  bd = () => {},
  Cd = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  fn = 'abcdefghijklmnopqrstuvwxyz',
  uo = '0123456789',
  ua = { DIGIT: uo, ALPHA: fn, ALPHA_DIGIT: fn + fn.toUpperCase() + uo },
  Sd = (e = 16, t = ua.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function xd(e) {
  return !!(
    e &&
    J(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const wd = e => {
    const t = new Array(10),
      n = (r, o) => {
        if (Jt(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = Ge(r) ? [] : {};
            return (
              gt(r, (a, s) => {
                const u = n(a, o + 1);
                !ct(u) && (i[s] = u);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Od = ne('AsyncFunction'),
  $d = e => e && (Jt(e) || J(e)) && J(e.then) && J(e.catch),
  h = {
    isArray: Ge,
    isArrayBuffer: oa,
    isBuffer: Uf,
    isFormData: Qf,
    isArrayBufferView: Gf,
    isString: qf,
    isNumber: ia,
    isBoolean: Wf,
    isObject: Jt,
    isPlainObject: Et,
    isReadableStream: ed,
    isRequest: td,
    isResponse: nd,
    isHeaders: rd,
    isUndefined: ct,
    isDate: Xf,
    isFile: Vf,
    isBlob: Kf,
    isRegExp: hd,
    isFunction: J,
    isStream: Yf,
    isURLSearchParams: Zf,
    isTypedArray: fd,
    isFileList: Jf,
    forEach: gt,
    merge: In,
    extend: id,
    trim: od,
    stripBOM: ad,
    inherits: sd,
    toFlatObject: ld,
    kindOf: Vt,
    kindOfTest: ne,
    endsWith: cd,
    toArray: ud,
    forEachEntry: dd,
    matchAll: pd,
    isHTMLForm: md,
    hasOwnProperty: co,
    hasOwnProp: co,
    reduceDescriptors: ca,
    freezeMethods: yd,
    toObjectSet: vd,
    toCamelCase: gd,
    noop: bd,
    toFiniteNumber: Cd,
    findKey: aa,
    global: sa,
    isContextDefined: la,
    ALPHABET: ua,
    generateString: Sd,
    isSpecCompliantForm: xd,
    toJSONObject: wd,
    isAsyncFn: Od,
    isThenable: $d
  };
function R(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
h.inherits(R, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: h.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null
    };
  }
});
const fa = R.prototype,
  da = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach(e => {
  da[e] = { value: e };
});
Object.defineProperties(R, da);
Object.defineProperty(fa, 'isAxiosError', { value: !0 });
R.from = (e, t, n, r, o, i) => {
  const a = Object.create(fa);
  return (
    h.toFlatObject(
      e,
      a,
      function(u) {
        return u !== Error.prototype;
      },
      s => s !== 'isAxiosError'
    ),
    R.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const _d = null;
function jn(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function pa(e) {
  return h.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function fo(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function(o, i) {
          return (o = pa(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function Td(e) {
  return h.isArray(e) && !e.some(jn);
}
const Ed = h.toFlatObject(h, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Yt(e, t, n) {
  if (!h.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = h.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function(g, w) {
        return !h.isUndefined(w[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || l,
    i = n.dots,
    a = n.indexes,
    u = (n.Blob || (typeof Blob < 'u' && Blob)) && h.isSpecCompliantForm(t);
  if (!h.isFunction(o)) throw new TypeError('visitor must be a function');
  function c(p) {
    if (p === null) return '';
    if (h.isDate(p)) return p.toISOString();
    if (!u && h.isBlob(p))
      throw new R('Blob is not supported. Use a Buffer instead.');
    return h.isArrayBuffer(p) || h.isTypedArray(p)
      ? u && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function l(p, g, w) {
    let C = p;
    if (p && !w && typeof p == 'object') {
      if (h.endsWith(g, '{}'))
        (g = r ? g : g.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (h.isArray(p) && Td(p)) ||
        ((h.isFileList(p) || h.endsWith(g, '[]')) && (C = h.toArray(p)))
      )
        return (
          (g = pa(g)),
          C.forEach(function(S, x) {
            !(h.isUndefined(S) || S === null) &&
              t.append(
                a === !0 ? fo([g], x, i) : a === null ? g : g + '[]',
                c(S)
              );
          }),
          !1
        );
    }
    return jn(p) ? !0 : (t.append(fo(w, g, i), c(p)), !1);
  }
  const f = [],
    d = Object.assign(Ed, {
      defaultVisitor: l,
      convertValue: c,
      isVisitable: jn
    });
  function m(p, g) {
    if (!h.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + g.join('.'));
      f.push(p),
        h.forEach(p, function(C, $) {
          (!(h.isUndefined(C) || C === null) &&
            o.call(t, C, h.isString($) ? $.trim() : $, g, d)) === !0 &&
            m(C, g ? g.concat($) : [$]);
        }),
        f.pop();
    }
  }
  if (!h.isObject(e)) throw new TypeError('data must be an object');
  return m(e), t;
}
function po(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0'
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function dr(e, t) {
  (this._pairs = []), e && Yt(e, this, t);
}
const ma = dr.prototype;
ma.append = function(t, n) {
  this._pairs.push([t, n]);
};
ma.toString = function(t) {
  const n = t
    ? function(r) {
        return t.call(this, r, po);
      }
    : po;
  return this._pairs
    .map(function(o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function Pd(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function ga(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Pd,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = h.isURLSearchParams(t) ? t.toString() : new dr(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf('#');
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class Ad {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    h.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const mo = Ad,
  ha = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  Rd = typeof URLSearchParams < 'u' ? URLSearchParams : dr,
  Id = typeof FormData < 'u' ? FormData : null,
  jd = typeof Blob < 'u' ? Blob : null,
  Md = {
    isBrowser: !0,
    classes: { URLSearchParams: Rd, FormData: Id, Blob: jd },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  pr = typeof window < 'u' && typeof document < 'u',
  Nd = (e => pr && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  kd = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  Ld = (pr && window.location.href) || 'http://localhost',
  Dd = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: pr,
        hasStandardBrowserEnv: Nd,
        hasStandardBrowserWebWorkerEnv: kd,
        origin: Ld
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Z = { ...Dd, ...Md };
function Fd(e, t) {
  return Yt(
    e,
    new Z.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function(n, r, o, i) {
          return Z.isNode && h.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        }
      },
      t
    )
  );
}
function Hd(e) {
  return h
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map(t => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function Bd(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function ya(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === '__proto__') return !0;
    const s = Number.isFinite(+a),
      u = i >= n.length;
    return (
      (a = !a && h.isArray(o) ? o.length : a),
      u
        ? (h.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !s)
        : ((!o[a] || !h.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], i) && h.isArray(o[a]) && (o[a] = Bd(o[a])),
          !s)
    );
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const n = {};
    return (
      h.forEachEntry(e, (r, o) => {
        t(Hd(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function zd(e, t, n) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const mr = {
  transitional: ha,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = h.isObject(t);
      if ((i && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t)))
        return o ? JSON.stringify(ya(t)) : t;
      if (
        h.isArrayBuffer(t) ||
        h.isBuffer(t) ||
        h.isStream(t) ||
        h.isFile(t) ||
        h.isBlob(t) ||
        h.isReadableStream(t)
      )
        return t;
      if (h.isArrayBufferView(t)) return t.buffer;
      if (h.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Fd(t, this.formSerializer).toString();
        if ((s = h.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData;
          return Yt(
            s ? { 'files[]': t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), zd(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || mr.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (h.isResponse(t) || h.isReadableStream(t)) return t;
      if (t && h.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (a)
            throw s.name === 'SyntaxError'
              ? R.from(s, R.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Z.classes.FormData, Blob: Z.classes.Blob },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0
    }
  }
};
h.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], e => {
  mr.headers[e] = {};
});
const gr = mr,
  Ud = h.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  Gd = e => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function(a) {
            (o = a.indexOf(':')),
              (n = a
                .substring(0, o)
                .trim()
                .toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (t[n] && Ud[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  go = Symbol('internals');
function Ke(e) {
  return (
    e &&
    String(e)
      .trim()
      .toLowerCase()
  );
}
function Pt(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(Pt) : String(e);
}
function qd(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Wd = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dn(e, t, n, r, o) {
  if (h.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!h.isString(t))) {
    if (h.isString(r)) return t.indexOf(r) !== -1;
    if (h.isRegExp(r)) return r.test(t);
  }
}
function Xd(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Vd(e, t) {
  const n = h.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach(r => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class Qt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, u, c) {
      const l = Ke(u);
      if (!l) throw new Error('header name must be a non-empty string');
      const f = h.findKey(o, l);
      (!f || o[f] === void 0 || c === !0 || (c === void 0 && o[f] !== !1)) &&
        (o[f || u] = Pt(s));
    }
    const a = (s, u) => h.forEach(s, (c, l) => i(c, l, u));
    if (h.isPlainObject(t) || t instanceof this.constructor) a(t, n);
    else if (h.isString(t) && (t = t.trim()) && !Wd(t)) a(Gd(t), n);
    else if (h.isHeaders(t)) for (const [s, u] of t.entries()) i(u, s, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Ke(t)), t)) {
      const r = h.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return qd(o);
        if (h.isFunction(n)) return n.call(this, o, r);
        if (h.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Ke(t)), t)) {
      const r = h.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || dn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = Ke(a)), a)) {
        const s = h.findKey(r, a);
        s && (!n || dn(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return h.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || dn(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      h.forEach(this, (o, i) => {
        const a = h.findKey(r, i);
        if (a) {
          (n[a] = Pt(o)), delete n[i];
          return;
        }
        const s = t ? Xd(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = Pt(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      h.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && h.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach(o => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[go] = this[go] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const s = Ke(a);
      r[s] || (Vd(o, a), (r[s] = !0));
    }
    return h.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Qt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
]);
h.reduceDescriptors(Qt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
h.freezeMethods(Qt);
const ee = Qt;
function pn(e, t) {
  const n = this || gr,
    r = t || n,
    o = ee.from(r.headers);
  let i = r.data;
  return (
    h.forEach(e, function(s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function va(e) {
  return !!(e && e.__CANCEL__);
}
function qe(e, t, n) {
  R.call(this, e ?? 'canceled', R.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
h.inherits(qe, R, { __CANCEL__: !0 });
function ba(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new R(
          'Request failed with status code ' + n.status,
          [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Kd(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Jd(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function(u) {
      const c = Date.now(),
        l = r[i];
      a || (a = c), (n[o] = u), (r[o] = c);
      let f = i,
        d = 0;
      for (; f !== o; ) (d += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), c - a < t)) return;
      const m = l && c - l;
      return m ? Math.round((d * 1e3) / m) : void 0;
    }
  );
}
function Yd(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let o = null;
  return function() {
    const a = this === !0,
      s = Date.now();
    if (a || s - n > r)
      return (
        o && (clearTimeout(o), (o = null)), (n = s), e.apply(null, arguments)
      );
    o ||
      (o = setTimeout(
        () => ((o = null), (n = Date.now()), e.apply(null, arguments)),
        r - (s - n)
      ));
  };
}
const Mt = (e, t, n = 3) => {
    let r = 0;
    const o = Jd(50, 250);
    return Yd(i => {
      const a = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        u = a - r,
        c = o(u),
        l = a <= s;
      r = a;
      const f = {
        loaded: a,
        total: s,
        progress: s ? a / s : void 0,
        bytes: u,
        rate: c || void 0,
        estimated: c && s && l ? (s - a) / c : void 0,
        event: i,
        lengthComputable: s != null
      };
      (f[t ? 'download' : 'upload'] = !0), e(f);
    }, n);
  },
  Qd = Z.hasStandardBrowserEnv
    ? (function() {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement('a');
        let r;
        function o(i) {
          let a = i;
          return (
            t && (n.setAttribute('href', a), (a = n.href)),
            n.setAttribute('href', a),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function(a) {
            const s = h.isString(a) ? o(a) : a;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function() {
        return function() {
          return !0;
        };
      })(),
  Zd = Z.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const a = [e + '=' + encodeURIComponent(t)];
          h.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
            h.isString(r) && a.push('path=' + r),
            h.isString(o) && a.push('domain=' + o),
            i === !0 && a.push('secure'),
            (document.cookie = a.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        }
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {}
      };
function ep(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tp(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Ca(e, t) {
  return e && !ep(t) ? tp(e, t) : t;
}
const ho = e => (e instanceof ee ? { ...e } : e);
function xe(e, t) {
  t = t || {};
  const n = {};
  function r(c, l, f) {
    return h.isPlainObject(c) && h.isPlainObject(l)
      ? h.merge.call({ caseless: f }, c, l)
      : h.isPlainObject(l)
      ? h.merge({}, l)
      : h.isArray(l)
      ? l.slice()
      : l;
  }
  function o(c, l, f) {
    if (h.isUndefined(l)) {
      if (!h.isUndefined(c)) return r(void 0, c, f);
    } else return r(c, l, f);
  }
  function i(c, l) {
    if (!h.isUndefined(l)) return r(void 0, l);
  }
  function a(c, l) {
    if (h.isUndefined(l)) {
      if (!h.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, l);
  }
  function s(c, l, f) {
    if (f in t) return r(c, l);
    if (f in e) return r(void 0, c);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, l) => o(ho(c), ho(l), !0)
  };
  return (
    h.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
      const f = u[l] || o,
        d = f(e[l], t[l], l);
      (h.isUndefined(d) && f !== s) || (n[l] = d);
    }),
    n
  );
}
const Sa = e => {
    const t = xe({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: a,
      auth: s
    } = t;
    (t.headers = a = ee.from(a)),
      (t.url = ga(Ca(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        a.set(
          'Authorization',
          'Basic ' +
            btoa(
              (s.username || '') +
                ':' +
                (s.password ? unescape(encodeURIComponent(s.password)) : '')
            )
        );
    let u;
    if (h.isFormData(n)) {
      if (Z.hasStandardBrowserEnv || Z.hasStandardBrowserWebWorkerEnv)
        a.setContentType(void 0);
      else if ((u = a.getContentType()) !== !1) {
        const [c, ...l] = u
          ? u
              .split(';')
              .map(f => f.trim())
              .filter(Boolean)
          : [];
        a.setContentType([c || 'multipart/form-data', ...l].join('; '));
      }
    }
    if (
      Z.hasStandardBrowserEnv &&
      (r && h.isFunction(r) && (r = r(t)), r || (r !== !1 && Qd(t.url)))
    ) {
      const c = o && i && Zd.read(i);
      c && a.set(o, c);
    }
    return t;
  },
  np = typeof XMLHttpRequest < 'u',
  rp =
    np &&
    function(e) {
      return new Promise(function(n, r) {
        const o = Sa(e);
        let i = o.data;
        const a = ee.from(o.headers).normalize();
        let { responseType: s } = o,
          u;
        function c() {
          o.cancelToken && o.cancelToken.unsubscribe(u),
            o.signal && o.signal.removeEventListener('abort', u);
        }
        let l = new XMLHttpRequest();
        l.open(o.method.toUpperCase(), o.url, !0), (l.timeout = o.timeout);
        function f() {
          if (!l) return;
          const m = ee.from(
              'getAllResponseHeaders' in l && l.getAllResponseHeaders()
            ),
            g = {
              data:
                !s || s === 'text' || s === 'json'
                  ? l.responseText
                  : l.response,
              status: l.status,
              statusText: l.statusText,
              headers: m,
              config: e,
              request: l
            };
          ba(
            function(C) {
              n(C), c();
            },
            function(C) {
              r(C), c();
            },
            g
          ),
            (l = null);
        }
        'onloadend' in l
          ? (l.onloadend = f)
          : (l.onreadystatechange = function() {
              !l ||
                l.readyState !== 4 ||
                (l.status === 0 &&
                  !(l.responseURL && l.responseURL.indexOf('file:') === 0)) ||
                setTimeout(f);
            }),
          (l.onabort = function() {
            l &&
              (r(new R('Request aborted', R.ECONNABORTED, o, l)), (l = null));
          }),
          (l.onerror = function() {
            r(new R('Network Error', R.ERR_NETWORK, o, l)), (l = null);
          }),
          (l.ontimeout = function() {
            let p = o.timeout
              ? 'timeout of ' + o.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const g = o.transitional || ha;
            o.timeoutErrorMessage && (p = o.timeoutErrorMessage),
              r(
                new R(
                  p,
                  g.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,
                  o,
                  l
                )
              ),
              (l = null);
          }),
          i === void 0 && a.setContentType(null),
          'setRequestHeader' in l &&
            h.forEach(a.toJSON(), function(p, g) {
              l.setRequestHeader(g, p);
            }),
          h.isUndefined(o.withCredentials) ||
            (l.withCredentials = !!o.withCredentials),
          s && s !== 'json' && (l.responseType = o.responseType),
          typeof o.onDownloadProgress == 'function' &&
            l.addEventListener('progress', Mt(o.onDownloadProgress, !0)),
          typeof o.onUploadProgress == 'function' &&
            l.upload &&
            l.upload.addEventListener('progress', Mt(o.onUploadProgress)),
          (o.cancelToken || o.signal) &&
            ((u = m => {
              l &&
                (r(!m || m.type ? new qe(null, e, l) : m),
                l.abort(),
                (l = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(u),
            o.signal &&
              (o.signal.aborted ? u() : o.signal.addEventListener('abort', u)));
        const d = Kd(o.url);
        if (d && Z.protocols.indexOf(d) === -1) {
          r(new R('Unsupported protocol ' + d + ':', R.ERR_BAD_REQUEST, e));
          return;
        }
        l.send(i || null);
      });
    },
  op = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function(u) {
      if (!r) {
        (r = !0), a();
        const c = u instanceof Error ? u : this.reason;
        n.abort(
          c instanceof R ? c : new qe(c instanceof Error ? c.message : c)
        );
      }
    };
    let i =
      t &&
      setTimeout(() => {
        o(new R(`timeout ${t} of ms exceeded`, R.ETIMEDOUT));
      }, t);
    const a = () => {
      e &&
        (i && clearTimeout(i),
        (i = null),
        e.forEach(u => {
          u &&
            (u.removeEventListener
              ? u.removeEventListener('abort', o)
              : u.unsubscribe(o));
        }),
        (e = null));
    };
    e.forEach(u => u && u.addEventListener && u.addEventListener('abort', o));
    const { signal: s } = n;
    return (
      (s.unsubscribe = a),
      [
        s,
        () => {
          i && clearTimeout(i), (i = null);
        }
      ]
    );
  },
  ip = op,
  ap = function*(e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  sp = async function*(e, t, n) {
    for await (const r of e)
      yield* ap(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  yo = (e, t, n, r, o) => {
    const i = sp(e, t, o);
    let a = 0;
    return new ReadableStream(
      {
        type: 'bytes',
        async pull(s) {
          const { done: u, value: c } = await i.next();
          if (u) {
            s.close(), r();
            return;
          }
          let l = c.byteLength;
          n && n((a += l)), s.enqueue(new Uint8Array(c));
        },
        cancel(s) {
          return r(s), i.return();
        }
      },
      { highWaterMark: 2 }
    );
  },
  vo = (e, t) => {
    const n = e != null;
    return r =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  Zt =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  xa = Zt && typeof ReadableStream == 'function',
  Mn =
    Zt &&
    (typeof TextEncoder == 'function'
      ? (e => t => e.encode(t))(new TextEncoder())
      : async e => new Uint8Array(await new Response(e).arrayBuffer())),
  lp =
    xa &&
    (() => {
      let e = !1;
      const t = new Request(Z.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        }
      }).headers.has('Content-Type');
      return e && !t;
    })(),
  bo = 64 * 1024,
  Nn =
    xa &&
    !!(() => {
      try {
        return h.isReadableStream(new Response('').body);
      } catch {}
    })(),
  Nt = { stream: Nn && (e => e.body) };
Zt &&
  (e => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(t => {
      !Nt[t] &&
        (Nt[t] = h.isFunction(e[t])
          ? n => n[t]()
          : (n, r) => {
              throw new R(
                `Response type '${t}' is not supported`,
                R.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const cp = async e => {
    if (e == null) return 0;
    if (h.isBlob(e)) return e.size;
    if (h.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (h.isArrayBufferView(e)) return e.byteLength;
    if ((h.isURLSearchParams(e) && (e = e + ''), h.isString(e)))
      return (await Mn(e)).byteLength;
  },
  up = async (e, t) => {
    const n = h.toFiniteNumber(e.getContentLength());
    return n ?? cp(t);
  },
  fp =
    Zt &&
    (async e => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: a,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: c,
        headers: l,
        withCredentials: f = 'same-origin',
        fetchOptions: d
      } = Sa(e);
      c = c ? (c + '').toLowerCase() : 'text';
      let [m, p] = o || i || a ? ip([o, i], a) : [],
        g,
        w;
      const C = () => {
        !g &&
          setTimeout(() => {
            m && m.unsubscribe();
          }),
          (g = !0);
      };
      let $;
      try {
        if (
          u &&
          lp &&
          n !== 'get' &&
          n !== 'head' &&
          ($ = await up(l, r)) !== 0
        ) {
          let E = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            y;
          h.isFormData(r) &&
            (y = E.headers.get('content-type')) &&
            l.setContentType(y),
            E.body && (r = yo(E.body, bo, vo($, Mt(u)), null, Mn));
        }
        h.isString(f) || (f = f ? 'cors' : 'omit'),
          (w = new Request(t, {
            ...d,
            signal: m,
            method: n.toUpperCase(),
            headers: l.normalize().toJSON(),
            body: r,
            duplex: 'half',
            withCredentials: f
          }));
        let S = await fetch(w);
        const x = Nn && (c === 'stream' || c === 'response');
        if (Nn && (s || x)) {
          const E = {};
          ['status', 'statusText', 'headers'].forEach(P => {
            E[P] = S[P];
          });
          const y = h.toFiniteNumber(S.headers.get('content-length'));
          S = new Response(
            yo(S.body, bo, s && vo(y, Mt(s, !0)), x && C, Mn),
            E
          );
        }
        c = c || 'text';
        let O = await Nt[h.findKey(Nt, c) || 'text'](S, e);
        return (
          !x && C(),
          p && p(),
          await new Promise((E, y) => {
            ba(E, y, {
              data: O,
              headers: ee.from(S.headers),
              status: S.status,
              statusText: S.statusText,
              config: e,
              request: w
            });
          })
        );
      } catch (S) {
        throw (C(),
        S && S.name === 'TypeError' && /fetch/i.test(S.message)
          ? Object.assign(new R('Network Error', R.ERR_NETWORK, e, w), {
              cause: S.cause || S
            })
          : R.from(S, S && S.code, e, w));
      }
    }),
  kn = { http: _d, xhr: rp, fetch: fp };
h.forEach(kn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Co = e => `- ${e}`,
  dp = e => h.isFunction(e) || e === null || e === !1,
  wa = {
    getAdapter: e => {
      e = h.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let a;
        if (
          ((r = n),
          !dp(n) && ((r = kn[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new R(`Unknown adapter '${a}'`);
        if (r) break;
        o[a || '#' + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        );
        let a = t
          ? i.length > 1
            ? `since :
` +
              i.map(Co).join(`
`)
            : ' ' + Co(i[0])
          : 'as no adapter specified';
        throw new R(
          'There is no suitable adapter to dispatch the request ' + a,
          'ERR_NOT_SUPPORT'
        );
      }
      return r;
    },
    adapters: kn
  };
function mn(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new qe(null, e);
}
function So(e) {
  return (
    mn(e),
    (e.headers = ee.from(e.headers)),
    (e.data = pn.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    wa
      .getAdapter(e.adapter || gr.adapter)(e)
      .then(
        function(r) {
          return (
            mn(e),
            (r.data = pn.call(e, e.transformResponse, r)),
            (r.headers = ee.from(r.headers)),
            r
          );
        },
        function(r) {
          return (
            va(r) ||
              (mn(e),
              r &&
                r.response &&
                ((r.response.data = pn.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = ee.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Oa = '1.7.2',
  hr = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    hr[e] = function(r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const xo = {};
hr.transitional = function(t, n, r) {
  function o(i, a) {
    return (
      '[Axios v' +
      Oa +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? '. ' + r : '')
    );
  }
  return (i, a, s) => {
    if (t === !1)
      throw new R(
        o(a, ' has been removed' + (n ? ' in ' + n : '')),
        R.ERR_DEPRECATED
      );
    return (
      n &&
        !xo[a] &&
        ((xo[a] = !0),
        console.warn(
          o(
            a,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, a, s) : !0
    );
  };
};
function pp(e, t, n) {
  if (typeof e != 'object')
    throw new R('options must be an object', R.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = t[i];
    if (a) {
      const s = e[i],
        u = s === void 0 || a(s, i, e);
      if (u !== !0)
        throw new R('option ' + i + ' must be ' + u, R.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new R('Unknown option ' + i, R.ERR_BAD_OPTION);
  }
}
const Ln = { assertOptions: pp, validators: hr },
  de = Ln.validators;
class kt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new mo(), response: new mo() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, '') : '';
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = xe(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Ln.assertOptions(
        r,
        {
          silentJSONParsing: de.transitional(de.boolean),
          forcedJSONParsing: de.transitional(de.boolean),
          clarifyTimeoutError: de.transitional(de.boolean)
        },
        !1
      ),
      o != null &&
        (h.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ln.assertOptions(
              o,
              { encode: de.function, serialize: de.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let a = i && h.merge(i.common, i[n.method]);
    i &&
      h.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        p => {
          delete i[p];
        }
      ),
      (n.headers = ee.concat(a, i));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(g) {
      (typeof g.runWhen == 'function' && g.runWhen(n) === !1) ||
        ((u = u && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let l,
      f = 0,
      d;
    if (!u) {
      const p = [So.bind(this), void 0];
      for (
        p.unshift.apply(p, s),
          p.push.apply(p, c),
          d = p.length,
          l = Promise.resolve(n);
        f < d;

      )
        l = l.then(p[f++], p[f++]);
      return l;
    }
    d = s.length;
    let m = n;
    for (f = 0; f < d; ) {
      const p = s[f++],
        g = s[f++];
      try {
        m = p(m);
      } catch (w) {
        g.call(this, w);
        break;
      }
    }
    try {
      l = So.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, d = c.length; f < d; ) l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = xe(this.defaults, t);
    const n = Ca(t.baseURL, t.url);
    return ga(n, t.params, t.paramsSerializer);
  }
}
h.forEach(['delete', 'get', 'head', 'options'], function(t) {
  kt.prototype[t] = function(n, r) {
    return this.request(
      xe(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
h.forEach(['post', 'put', 'patch'], function(t) {
  function n(r) {
    return function(i, a, s) {
      return this.request(
        xe(s || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: a
        })
      );
    };
  }
  (kt.prototype[t] = n()), (kt.prototype[t + 'Form'] = n(!0));
});
const At = kt;
class yr {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then(o => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = o => {
        let i;
        const a = new Promise(s => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (a.cancel = function() {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function(i, a, s) {
        r.reason || ((r.reason = new qe(i, a, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new yr(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const mp = yr;
function gp(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function hp(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}
const Dn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Dn).forEach(([e, t]) => {
  Dn[t] = e;
});
const yp = Dn;
function $a(e) {
  const t = new At(e),
    n = ra(At.prototype.request, t);
  return (
    h.extend(n, At.prototype, t, { allOwnKeys: !0 }),
    h.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function(o) {
      return $a(xe(e, o));
    }),
    n
  );
}
const N = $a(gr);
N.Axios = At;
N.CanceledError = qe;
N.CancelToken = mp;
N.isCancel = va;
N.VERSION = Oa;
N.toFormData = Yt;
N.AxiosError = R;
N.Cancel = N.CanceledError;
N.all = function(t) {
  return Promise.all(t);
};
N.spread = gp;
N.isAxiosError = hp;
N.mergeConfig = xe;
N.AxiosHeaders = ee;
N.formToJSON = e => ya(h.isHTMLForm(e) ? new FormData(e) : e);
N.getAdapter = wa.getAdapter;
N.HttpStatusCode = yp;
N.default = N;
const _a = N,
  en = _a.create({
    baseURL: window.wcv_dashboard_data.rest_url,
    headers: { 'Content-Type': 'application/json' }
  });
en.interceptors.request.use(
  e => ((e.headers['X-WP-Nonce'] = window.wcv_dashboard_data.nonce), e),
  async e => await Promise.reject(e)
);
const vp = async (e, t, n) =>
    (
      await en.get('/reports', {
        params: { period: e, start_date: t, end_date: n }
      })
    ).data,
  tm = async () => {
    const e = await en.get('/reports/premium-plugins');
    return e.data.success ? e.data.data : [];
  },
  nm = async e => {
    const t = window.wcv_dashboard_data.activate_plugin_nonce,
      n = window.wcv_dashboard_data.ajax_url,
      r = 'wcv_activate_plugin',
      o = new FormData();
    return (
      o.append('action', r),
      o.append('plugin_slug', e),
      o.append('nonce', t),
      (await _a.post(n, o)).data
    );
  },
  bp = async (e, t) => (await en.post(`/vendors/action/${e}/${t}`)).data,
  rm = e => {
    const {
      currency_symbol: t,
      decimals: n,
      decimal_separator: r,
      thousand_separator: o,
      price_format: i
    } = window.wcv_dashboard_data;
    if (typeof e != 'number') return '0.00';
    let a = e.toFixed(n);
    return (
      (a = a.replace('.', r)),
      (a = a.replace(/\B(?=(\d{3})+(?!\d))/g, o)),
      i.replace('%1$s', t).replace('%2$s', a)
    );
  },
  gn = () => window.wcv_dashboard_data.i18n,
  Cp = ja('dashboard', () => {
    const e = B(null),
      t = B(!1),
      n = B({ label: gn().filter.last30Days, value: 'last_30_days' }),
      r = B(null),
      o = B(null);
    return {
      dashboardData: e,
      isLoading: t,
      period: n,
      startDate: r,
      endDate: o,
      fetchDashboardData: async () => {
        t.value = !0;
        try {
          const s = await vp(n.value.value, r.value, o.value);
          e.value = s;
        } catch (s) {
          Ye.error({
            message: gn().dashboard.errorLoadingDashboardData,
            description: s.response.data.message,
            placement: 'topRight',
            duration: 5
          });
        } finally {
          t.value = !1;
        }
      },
      setVendorApprovalAction: async (s, u) => {
        t.value = !0;
        const c = await bp(s, u),
          { success: l, message: f } = c;
        try {
          l
            ? Ye.success({ message: f, placement: 'topRight', duration: 5 })
            : Ye.error({ message: f, placement: 'topRight', duration: 5 });
        } catch {
          Ye.error({
            message: gn().dashboard.errorUpdatingVendorApproval,
            placement: 'topRight',
            duration: 5
          });
        } finally {
          t.value = !1;
        }
      }
    };
  }),
  Sp = { class: 'dashboard-container' },
  xp = { class: 'filter-card' },
  wp = k({
    __name: 'Dashboard',
    setup(e) {
      const t = $e(() =>
          Oe(
            () => import('../components/Filter.f62003ec.js'),
            [
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/components/Filter.f62003ec.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/vendor.47b1711b.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.47c00042.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/createLucideIcon.42ab3542.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/antd.ddaabbc2.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.6e530893.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.d0bc549f.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.56bcc88f.js',
              window.wcv_dashboard_data.pluginDirUrl + '/dist/main.1bdb0c68.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/assets/Filter-24cfb96b.css'
            ],
            import.meta.url
          )
        ),
        n = $e(() =>
          Oe(
            () => import('../components/Metrics.100974e2.js'),
            [
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/components/Metrics.100974e2.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/vendor.47b1711b.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.2af2cc8c.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/createLucideIcon.42ab3542.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/antd.ddaabbc2.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.47c00042.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.6e530893.js',
              window.wcv_dashboard_data.pluginDirUrl + '/dist/main.1bdb0c68.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/assets/Metrics-5529a9eb.css'
            ],
            import.meta.url
          )
        ),
        r = $e(() =>
          Oe(
            () => import('../components/TopVendors.7bd90630.js'),
            [
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/components/TopVendors.7bd90630.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/vendor.47b1711b.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.84b062db.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/createLucideIcon.42ab3542.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/antd.ddaabbc2.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.d0bc549f.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.47c00042.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.56bcc88f.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.2af2cc8c.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.6e530893.js',
              window.wcv_dashboard_data.pluginDirUrl + '/dist/main.1bdb0c68.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/assets/TopVendors-5790b9a4.css'
            ],
            import.meta.url
          )
        ),
        o = $e(() =>
          Oe(
            () => import('../components/PendingVendors.23f89c91.js'),
            [
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/components/PendingVendors.23f89c91.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/vendor.47b1711b.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/createLucideIcon.42ab3542.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.47c00042.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/antd.ddaabbc2.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.c74d9e7c.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.56bcc88f.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.2af2cc8c.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.84b062db.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.d0bc549f.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.6e530893.js',
              window.wcv_dashboard_data.pluginDirUrl + '/dist/main.1bdb0c68.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/assets/PendingVendors-12fb8aa3.css'
            ],
            import.meta.url
          )
        ),
        i = $e(() =>
          Oe(
            () => import('../components/HelpFulLinks.288fb457.js'),
            [
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/components/HelpFulLinks.288fb457.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/vendor.47b1711b.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/createLucideIcon.42ab3542.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.2af2cc8c.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/antd.ddaabbc2.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/settings.4112ead0.js',
              window.wcv_dashboard_data.pluginDirUrl + '/dist/main.1bdb0c68.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/assets/HelpFulLinks-28919b27.css'
            ],
            import.meta.url
          )
        ),
        a = $e(() =>
          Oe(
            () => import('../components/LicenseInfo.be6c04a4.js'),
            [
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/components/LicenseInfo.be6c04a4.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/vendor.47b1711b.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/createLucideIcon.42ab3542.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.2af2cc8c.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/antd.ddaabbc2.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.47c00042.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.56bcc88f.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/index.c74d9e7c.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/common/settings.4112ead0.js',
              window.wcv_dashboard_data.pluginDirUrl + '/dist/main.1bdb0c68.js',
              window.wcv_dashboard_data.pluginDirUrl +
                '/dist/assets/LicenseInfo-bd14d151.css'
            ],
            import.meta.url
          )
        ),
        s = Cp();
      return (
        Fe(() => {
          s.fetchDashboardData();
        }),
        (u, c) => (
          Ma(),
          Na('div', Sp, [
            b(
              D(Ct),
              { xs: 24, sm: 24, md: 24, lg: 20, xl: 20, class: 'main-content' },
              {
                default: _e(() => [
                  b(D(lo), null, {
                    default: _e(() => [
                      b(
                        D(Ct),
                        { span: 24 },
                        { default: _e(() => [ka('div', xp, [b(D(t))])]), _: 1 }
                      )
                    ]),
                    _: 1
                  }),
                  b(
                    D(lo),
                    { gutter: 24 },
                    {
                      default: _e(() => [
                        b(
                          D(Ct),
                          { xs: 24, sm: 24, md: 24, lg: 16, xl: 16 },
                          {
                            default: _e(() => [b(D(n)), b(D(r)), b(D(o))]),
                            _: 1
                          }
                        ),
                        b(
                          D(Ct),
                          {
                            xs: 24,
                            sm: 24,
                            md: 24,
                            lg: 8,
                            xl: 8,
                            class: 'sidebar-column'
                          },
                          { default: _e(() => [b(D(i)), b(D(a))]), _: 1 }
                        )
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            )
          ])
        )
      );
    }
  });
const Op = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  $p = Op(wp, [['__scopeId', 'data-v-f5cccdcf']]),
  om = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $p },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
export {
  ft as $,
  se as A,
  jo as B,
  tr as C,
  Bn as D,
  Hn as E,
  Pe as F,
  em as G,
  jp as H,
  me as I,
  Ap as J,
  Ce as K,
  Zn as L,
  Ve as M,
  Kp as N,
  Ie as O,
  Cc as P,
  Fu as Q,
  Fp as R,
  Po as S,
  vt as T,
  Nu as U,
  Wp as V,
  Ou as W,
  ms as X,
  Cu as Y,
  zp as Z,
  v as _,
  j as a,
  Zp as a0,
  hn as a1,
  Rp as a2,
  Np as a3,
  fs as a4,
  Cs as a5,
  Fl as a6,
  Yp as a7,
  ui as a8,
  Ro as a9,
  nm as aa,
  Ye as ab,
  tm as ac,
  Qp as ad,
  mt as ae,
  No as af,
  Up as ag,
  ps as ah,
  us as ai,
  Hp as aj,
  Sc as ak,
  Rs as al,
  Mp as am,
  Rt as an,
  Go as ao,
  Oc as ap,
  xc as aq,
  kp as ar,
  Ip as as,
  Dp as at,
  Lp as au,
  om as av,
  Pp as b,
  G as c,
  rn as d,
  Gp as e,
  qp as f,
  dt as g,
  xr as h,
  Sr as i,
  Xp as j,
  wr as k,
  Gt as l,
  pt as m,
  Cp as n,
  X as o,
  gn as p,
  Op as q,
  ri as r,
  St as s,
  Vp as t,
  Be as u,
  rm as v,
  Jp as w,
  qn as x,
  Bp as y,
  zl as z
};
