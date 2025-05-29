import {
  K as Lr,
  p as Ta,
  g as Oa,
  l as g,
  L as Wt,
  d as Ie,
  s as Ee,
  r as L,
  w as pe,
  k as Mn,
  x as Ra,
  f as B,
  M as jr,
  j as Tn,
  N as de,
  q as Ia,
  O as zr,
  P as Ur,
  u as _e,
  h as qr,
  F as Dt,
  o as Kr,
  H as Qr,
  I as Rt,
  Q as da,
  R as fa,
  J as Gr
} from '../common/vendor.47b1711b.js';
import {
  _ as Y,
  a as O,
  c as se,
  g as Na,
  m as Ft,
  r as hn,
  t as Xr,
  b as Zr,
  u as Ut,
  P as va,
  e as Jr,
  C as eo,
  A as On,
  o as mn,
  d as Ke,
  s as dt,
  f as ae,
  h as pt,
  i as at,
  j as Ya,
  k as Ea,
  l as Ha,
  n as to,
  p as qe,
  q as no
} from '../common/Dashboard.9e45cc90.js';
import {
  i as ao,
  g as ro,
  a as bn,
  b as oo,
  c as lo,
  u as Va,
  F as _a,
  d as Aa,
  e as Ba,
  T as io
} from '../common/index.47c00042.js';
import { F as ga } from '../common/index.6e530893.js';
import {
  n as so,
  K as ce,
  w as Xe,
  i as uo,
  c as co,
  u as Ae,
  T as fo,
  s as vo,
  a as go,
  b as pa,
  d as po,
  e as ho,
  f as mo,
  g as bo,
  r as Co,
  h as ha,
  j as wo,
  k as $o,
  l as yo,
  o as xo,
  m as ko
} from '../common/createLucideIcon.42ab3542.js';
import { u as So, i as ma, S as Do } from '../common/index.d0bc549f.js';
import { B as Wa, W as Po, u as Fa } from '../common/index.56bcc88f.js';
import { T as Lt, i as Mo, j as To, S as Oo } from '../common/antd.ddaabbc2.js';
import '../main.1bdb0c68.js';
var ot =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function lt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var La = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(ot, function() {
    var n = 1e3,
      a = 6e4,
      r = 36e5,
      l = 'millisecond',
      o = 'second',
      i = 'minute',
      c = 'hour',
      s = 'day',
      d = 'week',
      u = 'month',
      v = 'quarter',
      h = 'year',
      y = 'date',
      $ = 'Invalid Date',
      f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      p = {
        name: 'en',
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
          '_'
        ),
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_'
        ),
        ordinal: function(N) {
          var P = ['th', 'st', 'nd', 'rd'],
            S = N % 100;
          return '[' + N + (P[(S - 20) % 10] || P[S] || P[0]) + ']';
        }
      },
      x = function(N, P, S) {
        var b = String(N);
        return !b || b.length >= P
          ? N
          : '' + Array(P + 1 - b.length).join(S) + N;
      },
      k = {
        s: x,
        z: function(N) {
          var P = -N.utcOffset(),
            S = Math.abs(P),
            b = Math.floor(S / 60),
            w = S % 60;
          return (P <= 0 ? '+' : '-') + x(b, 2, '0') + ':' + x(w, 2, '0');
        },
        m: function N(P, S) {
          if (P.date() < S.date()) return -N(S, P);
          var b = 12 * (S.year() - P.year()) + (S.month() - P.month()),
            w = P.clone().add(b, u),
            I = S - w < 0,
            m = P.clone().add(b + (I ? -1 : 1), u);
          return +(-(b + (S - w) / (I ? w - m : m - w)) || 0);
        },
        a: function(N) {
          return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
        },
        p: function(N) {
          return (
            { M: u, y: h, w: d, d: s, D: y, h: c, m: i, s: o, ms: l, Q: v }[
              N
            ] ||
            String(N || '')
              .toLowerCase()
              .replace(/s$/, '')
          );
        },
        u: function(N) {
          return N === void 0;
        }
      },
      T = 'en',
      E = {};
    E[T] = p;
    var U = '$isDayjsObject',
      z = function(N) {
        return N instanceof W || !(!N || !N[U]);
      },
      j = function N(P, S, b) {
        var w;
        if (!P) return T;
        if (typeof P == 'string') {
          var I = P.toLowerCase();
          E[I] && (w = I), S && ((E[I] = S), (w = I));
          var m = P.split('-');
          if (!w && m.length > 1) return N(m[0]);
        } else {
          var D = P.name;
          (E[D] = P), (w = D);
        }
        return !b && w && (T = w), w || (!b && T);
      },
      _ = function(N, P) {
        if (z(N)) return N.clone();
        var S = typeof P == 'object' ? P : {};
        return (S.date = N), (S.args = arguments), new W(S);
      },
      R = k;
    (R.l = j),
      (R.i = z),
      (R.w = function(N, P) {
        return _(N, { locale: P.$L, utc: P.$u, x: P.$x, $offset: P.$offset });
      });
    var W = (function() {
        function N(S) {
          (this.$L = j(S.locale, null, !0)),
            this.parse(S),
            (this.$x = this.$x || S.x || {}),
            (this[U] = !0);
        }
        var P = N.prototype;
        return (
          (P.parse = function(S) {
            (this.$d = (function(b) {
              var w = b.date,
                I = b.utc;
              if (w === null) return new Date(NaN);
              if (R.u(w)) return new Date();
              if (w instanceof Date) return new Date(w);
              if (typeof w == 'string' && !/Z$/i.test(w)) {
                var m = w.match(f);
                if (m) {
                  var D = m[2] - 1 || 0,
                    H = (m[7] || '0').substring(0, 3);
                  return I
                    ? new Date(
                        Date.UTC(
                          m[1],
                          D,
                          m[3] || 1,
                          m[4] || 0,
                          m[5] || 0,
                          m[6] || 0,
                          H
                        )
                      )
                    : new Date(
                        m[1],
                        D,
                        m[3] || 1,
                        m[4] || 0,
                        m[5] || 0,
                        m[6] || 0,
                        H
                      );
                }
              }
              return new Date(w);
            })(S)),
              this.init();
          }),
          (P.init = function() {
            var S = this.$d;
            (this.$y = S.getFullYear()),
              (this.$M = S.getMonth()),
              (this.$D = S.getDate()),
              (this.$W = S.getDay()),
              (this.$H = S.getHours()),
              (this.$m = S.getMinutes()),
              (this.$s = S.getSeconds()),
              (this.$ms = S.getMilliseconds());
          }),
          (P.$utils = function() {
            return R;
          }),
          (P.isValid = function() {
            return this.$d.toString() !== $;
          }),
          (P.isSame = function(S, b) {
            var w = _(S);
            return this.startOf(b) <= w && w <= this.endOf(b);
          }),
          (P.isAfter = function(S, b) {
            return _(S) < this.startOf(b);
          }),
          (P.isBefore = function(S, b) {
            return this.endOf(b) < _(S);
          }),
          (P.$g = function(S, b, w) {
            return R.u(S) ? this[b] : this.set(w, S);
          }),
          (P.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (P.valueOf = function() {
            return this.$d.getTime();
          }),
          (P.startOf = function(S, b) {
            var w = this,
              I = !!R.u(b) || b,
              m = R.p(S),
              D = function(ne, G) {
                var Z = R.w(
                  w.$u ? Date.UTC(w.$y, G, ne) : new Date(w.$y, G, ne),
                  w
                );
                return I ? Z : Z.endOf(s);
              },
              H = function(ne, G) {
                return R.w(
                  w
                    .toDate()
                    [ne].apply(
                      w.toDate('s'),
                      (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)
                    ),
                  w
                );
              },
              A = this.$W,
              Q = this.$M,
              ee = this.$D,
              ie = 'set' + (this.$u ? 'UTC' : '');
            switch (m) {
              case h:
                return I ? D(1, 0) : D(31, 11);
              case u:
                return I ? D(1, Q) : D(0, Q + 1);
              case d:
                var oe = this.$locale().weekStart || 0,
                  q = (A < oe ? A + 7 : A) - oe;
                return D(I ? ee - q : ee + (6 - q), Q);
              case s:
              case y:
                return H(ie + 'Hours', 0);
              case c:
                return H(ie + 'Minutes', 1);
              case i:
                return H(ie + 'Seconds', 2);
              case o:
                return H(ie + 'Milliseconds', 3);
              default:
                return this.clone();
            }
          }),
          (P.endOf = function(S) {
            return this.startOf(S, !1);
          }),
          (P.$set = function(S, b) {
            var w,
              I = R.p(S),
              m = 'set' + (this.$u ? 'UTC' : ''),
              D = ((w = {}),
              (w[s] = m + 'Date'),
              (w[y] = m + 'Date'),
              (w[u] = m + 'Month'),
              (w[h] = m + 'FullYear'),
              (w[c] = m + 'Hours'),
              (w[i] = m + 'Minutes'),
              (w[o] = m + 'Seconds'),
              (w[l] = m + 'Milliseconds'),
              w)[I],
              H = I === s ? this.$D + (b - this.$W) : b;
            if (I === u || I === h) {
              var A = this.clone().set(y, 1);
              A.$d[D](H),
                A.init(),
                (this.$d = A.set(y, Math.min(this.$D, A.daysInMonth())).$d);
            } else D && this.$d[D](H);
            return this.init(), this;
          }),
          (P.set = function(S, b) {
            return this.clone().$set(S, b);
          }),
          (P.get = function(S) {
            return this[R.p(S)]();
          }),
          (P.add = function(S, b) {
            var w,
              I = this;
            S = Number(S);
            var m = R.p(b),
              D = function(Q) {
                var ee = _(I);
                return R.w(ee.date(ee.date() + Math.round(Q * S)), I);
              };
            if (m === u) return this.set(u, this.$M + S);
            if (m === h) return this.set(h, this.$y + S);
            if (m === s) return D(1);
            if (m === d) return D(7);
            var H = ((w = {}), (w[i] = a), (w[c] = r), (w[o] = n), w)[m] || 1,
              A = this.$d.getTime() + S * H;
            return R.w(A, this);
          }),
          (P.subtract = function(S, b) {
            return this.add(-1 * S, b);
          }),
          (P.format = function(S) {
            var b = this,
              w = this.$locale();
            if (!this.isValid()) return w.invalidDate || $;
            var I = S || 'YYYY-MM-DDTHH:mm:ssZ',
              m = R.z(this),
              D = this.$H,
              H = this.$m,
              A = this.$M,
              Q = w.weekdays,
              ee = w.months,
              ie = w.meridiem,
              oe = function(G, Z, ue, re) {
                return (G && (G[Z] || G(b, I))) || ue[Z].slice(0, re);
              },
              q = function(G) {
                return R.s(D % 12 || 12, G, '0');
              },
              ne =
                ie ||
                function(G, Z, ue) {
                  var re = G < 12 ? 'AM' : 'PM';
                  return ue ? re.toLowerCase() : re;
                };
            return I.replace(C, function(G, Z) {
              return (
                Z ||
                (function(ue) {
                  switch (ue) {
                    case 'YY':
                      return String(b.$y).slice(-2);
                    case 'YYYY':
                      return R.s(b.$y, 4, '0');
                    case 'M':
                      return A + 1;
                    case 'MM':
                      return R.s(A + 1, 2, '0');
                    case 'MMM':
                      return oe(w.monthsShort, A, ee, 3);
                    case 'MMMM':
                      return oe(ee, A);
                    case 'D':
                      return b.$D;
                    case 'DD':
                      return R.s(b.$D, 2, '0');
                    case 'd':
                      return String(b.$W);
                    case 'dd':
                      return oe(w.weekdaysMin, b.$W, Q, 2);
                    case 'ddd':
                      return oe(w.weekdaysShort, b.$W, Q, 3);
                    case 'dddd':
                      return Q[b.$W];
                    case 'H':
                      return String(D);
                    case 'HH':
                      return R.s(D, 2, '0');
                    case 'h':
                      return q(1);
                    case 'hh':
                      return q(2);
                    case 'a':
                      return ne(D, H, !0);
                    case 'A':
                      return ne(D, H, !1);
                    case 'm':
                      return String(H);
                    case 'mm':
                      return R.s(H, 2, '0');
                    case 's':
                      return String(b.$s);
                    case 'ss':
                      return R.s(b.$s, 2, '0');
                    case 'SSS':
                      return R.s(b.$ms, 3, '0');
                    case 'Z':
                      return m;
                  }
                  return null;
                })(G) ||
                m.replace(':', '')
              );
            });
          }),
          (P.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (P.diff = function(S, b, w) {
            var I,
              m = this,
              D = R.p(b),
              H = _(S),
              A = (H.utcOffset() - this.utcOffset()) * a,
              Q = this - H,
              ee = function() {
                return R.m(m, H);
              };
            switch (D) {
              case h:
                I = ee() / 12;
                break;
              case u:
                I = ee();
                break;
              case v:
                I = ee() / 3;
                break;
              case d:
                I = (Q - A) / 6048e5;
                break;
              case s:
                I = (Q - A) / 864e5;
                break;
              case c:
                I = Q / r;
                break;
              case i:
                I = Q / a;
                break;
              case o:
                I = Q / n;
                break;
              default:
                I = Q;
            }
            return w ? I : R.a(I);
          }),
          (P.daysInMonth = function() {
            return this.endOf(u).$D;
          }),
          (P.$locale = function() {
            return E[this.$L];
          }),
          (P.locale = function(S, b) {
            if (!S) return this.$L;
            var w = this.clone(),
              I = j(S, b, !0);
            return I && (w.$L = I), w;
          }),
          (P.clone = function() {
            return R.w(this.$d, this);
          }),
          (P.toDate = function() {
            return new Date(this.valueOf());
          }),
          (P.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }),
          (P.toISOString = function() {
            return this.$d.toISOString();
          }),
          (P.toString = function() {
            return this.$d.toUTCString();
          }),
          N
        );
      })(),
      X = W.prototype;
    return (
      (_.prototype = X),
      [
        ['$ms', l],
        ['$s', o],
        ['$m', i],
        ['$H', c],
        ['$W', s],
        ['$M', u],
        ['$y', h],
        ['$D', y]
      ].forEach(function(N) {
        X[N[1]] = function(P) {
          return this.$g(P, N[0], N[1]);
        };
      }),
      (_.extend = function(N, P) {
        return N.$i || (N(P, W, _), (N.$i = !0)), _;
      }),
      (_.locale = j),
      (_.isDayjs = z),
      (_.unix = function(N) {
        return _(1e3 * N);
      }),
      (_.en = E[T]),
      (_.Ls = E),
      (_.p = {}),
      _
    );
  });
})(La);
var Ro = La.exports;
const ge = lt(Ro);
var ja = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(ot, function() {
    return function(n, a) {
      a.prototype.weekday = function(r) {
        var l = this.$locale().weekStart || 0,
          o = this.$W,
          i = (o < l ? o + 7 : o) - l;
        return this.$utils().u(r) ? i : this.subtract(i, 'day').add(r, 'day');
      };
    };
  });
})(ja);
var Io = ja.exports;
const No = lt(Io);
var za = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(ot, function() {
    return function(n, a, r) {
      var l = a.prototype,
        o = function(u) {
          return u && (u.indexOf ? u : u.s);
        },
        i = function(u, v, h, y, $) {
          var f = u.name ? u : u.$locale(),
            C = o(f[v]),
            p = o(f[h]),
            x =
              C ||
              p.map(function(T) {
                return T.slice(0, y);
              });
          if (!$) return x;
          var k = f.weekStart;
          return x.map(function(T, E) {
            return x[(E + (k || 0)) % 7];
          });
        },
        c = function() {
          return r.Ls[r.locale()];
        },
        s = function(u, v) {
          return (
            u.formats[v] ||
            (function(h) {
              return h.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(
                y,
                $,
                f
              ) {
                return $ || f.slice(1);
              });
            })(u.formats[v.toUpperCase()])
          );
        },
        d = function() {
          var u = this;
          return {
            months: function(v) {
              return v ? v.format('MMMM') : i(u, 'months');
            },
            monthsShort: function(v) {
              return v ? v.format('MMM') : i(u, 'monthsShort', 'months', 3);
            },
            firstDayOfWeek: function() {
              return u.$locale().weekStart || 0;
            },
            weekdays: function(v) {
              return v ? v.format('dddd') : i(u, 'weekdays');
            },
            weekdaysMin: function(v) {
              return v ? v.format('dd') : i(u, 'weekdaysMin', 'weekdays', 2);
            },
            weekdaysShort: function(v) {
              return v ? v.format('ddd') : i(u, 'weekdaysShort', 'weekdays', 3);
            },
            longDateFormat: function(v) {
              return s(u.$locale(), v);
            },
            meridiem: this.$locale().meridiem,
            ordinal: this.$locale().ordinal
          };
        };
      (l.localeData = function() {
        return d.bind(this)();
      }),
        (r.localeData = function() {
          var u = c();
          return {
            firstDayOfWeek: function() {
              return u.weekStart || 0;
            },
            weekdays: function() {
              return r.weekdays();
            },
            weekdaysShort: function() {
              return r.weekdaysShort();
            },
            weekdaysMin: function() {
              return r.weekdaysMin();
            },
            months: function() {
              return r.months();
            },
            monthsShort: function() {
              return r.monthsShort();
            },
            longDateFormat: function(v) {
              return s(u, v);
            },
            meridiem: u.meridiem,
            ordinal: u.ordinal
          };
        }),
        (r.months = function() {
          return i(c(), 'months');
        }),
        (r.monthsShort = function() {
          return i(c(), 'monthsShort', 'months', 3);
        }),
        (r.weekdays = function(u) {
          return i(c(), 'weekdays', null, null, u);
        }),
        (r.weekdaysShort = function(u) {
          return i(c(), 'weekdaysShort', 'weekdays', 3, u);
        }),
        (r.weekdaysMin = function(u) {
          return i(c(), 'weekdaysMin', 'weekdays', 2, u);
        });
    };
  });
})(za);
var Yo = za.exports;
const Eo = lt(Yo);
var Ua = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(ot, function() {
    var n = 'week',
      a = 'year';
    return function(r, l, o) {
      var i = l.prototype;
      (i.week = function(c) {
        if ((c === void 0 && (c = null), c !== null))
          return this.add(7 * (c - this.week()), 'day');
        var s = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = o(this)
              .startOf(a)
              .add(1, a)
              .date(s),
            u = o(this).endOf(n);
          if (d.isBefore(u)) return 1;
        }
        var v = o(this)
            .startOf(a)
            .date(s)
            .startOf(n)
            .subtract(1, 'millisecond'),
          h = this.diff(v, n, !0);
        return h < 0
          ? o(this)
              .startOf('week')
              .week()
          : Math.ceil(h);
      }),
        (i.weeks = function(c) {
          return c === void 0 && (c = null), this.week(c);
        });
    };
  });
})(Ua);
var Ho = Ua.exports;
const Vo = lt(Ho);
var qa = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(ot, function() {
    return function(n, a) {
      a.prototype.weekYear = function() {
        var r = this.month(),
          l = this.week(),
          o = this.year();
        return l === 1 && r === 11 ? o + 1 : r === 0 && l >= 52 ? o - 1 : o;
      };
    };
  });
})(qa);
var _o = qa.exports;
const Ao = lt(_o);
var Ka = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(ot, function() {
    var n = 'month',
      a = 'quarter';
    return function(r, l) {
      var o = l.prototype;
      o.quarter = function(s) {
        return this.$utils().u(s)
          ? Math.ceil((this.month() + 1) / 3)
          : this.month((this.month() % 3) + 3 * (s - 1));
      };
      var i = o.add;
      o.add = function(s, d) {
        return (
          (s = Number(s)),
          this.$utils().p(d) === a ? this.add(3 * s, n) : i.bind(this)(s, d)
        );
      };
      var c = o.startOf;
      o.startOf = function(s, d) {
        var u = this.$utils(),
          v = !!u.u(d) || d;
        if (u.p(s) === a) {
          var h = this.quarter() - 1;
          return v
            ? this.month(3 * h)
                .startOf(n)
                .startOf('day')
            : this.month(3 * h + 2)
                .endOf(n)
                .endOf('day');
        }
        return c.bind(this)(s, d);
      };
    };
  });
})(Ka);
var Bo = Ka.exports;
const Wo = lt(Bo);
var Qa = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(ot, function() {
    return function(n, a) {
      var r = a.prototype,
        l = r.format;
      r.format = function(o) {
        var i = this,
          c = this.$locale();
        if (!this.isValid()) return l.bind(this)(o);
        var s = this.$utils(),
          d = (o || 'YYYY-MM-DDTHH:mm:ssZ').replace(
            /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
            function(u) {
              switch (u) {
                case 'Q':
                  return Math.ceil((i.$M + 1) / 3);
                case 'Do':
                  return c.ordinal(i.$D);
                case 'gggg':
                  return i.weekYear();
                case 'GGGG':
                  return i.isoWeekYear();
                case 'wo':
                  return c.ordinal(i.week(), 'W');
                case 'w':
                case 'ww':
                  return s.s(i.week(), u === 'w' ? 1 : 2, '0');
                case 'W':
                case 'WW':
                  return s.s(i.isoWeek(), u === 'W' ? 1 : 2, '0');
                case 'k':
                case 'kk':
                  return s.s(
                    String(i.$H === 0 ? 24 : i.$H),
                    u === 'k' ? 1 : 2,
                    '0'
                  );
                case 'X':
                  return Math.floor(i.$d.getTime() / 1e3);
                case 'x':
                  return i.$d.getTime();
                case 'z':
                  return '[' + i.offsetName() + ']';
                case 'zzz':
                  return '[' + i.offsetName('long') + ']';
                default:
                  return u;
              }
            }
          );
        return l.bind(this)(d);
      };
    };
  });
})(Qa);
var Fo = Qa.exports;
const Lo = lt(Fo);
var Ga = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(ot, function() {
    var n = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
      },
      a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      r = /\d/,
      l = /\d\d/,
      o = /\d\d?/,
      i = /\d*[^-_:/,()\s\d]+/,
      c = {},
      s = function(f) {
        return (f = +f) + (f > 68 ? 1900 : 2e3);
      },
      d = function(f) {
        return function(C) {
          this[f] = +C;
        };
      },
      u = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function(f) {
          (this.zone || (this.zone = {})).offset = (function(C) {
            if (!C || C === 'Z') return 0;
            var p = C.match(/([+-]|\d\d)/g),
              x = 60 * p[1] + (+p[2] || 0);
            return x === 0 ? 0 : p[0] === '+' ? -x : x;
          })(f);
        }
      ],
      v = function(f) {
        var C = c[f];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      },
      h = function(f, C) {
        var p,
          x = c.meridiem;
        if (x) {
          for (var k = 1; k <= 24; k += 1)
            if (f.indexOf(x(k, 0, C)) > -1) {
              p = k > 12;
              break;
            }
        } else p = f === (C ? 'pm' : 'PM');
        return p;
      },
      y = {
        A: [
          i,
          function(f) {
            this.afternoon = h(f, !1);
          }
        ],
        a: [
          i,
          function(f) {
            this.afternoon = h(f, !0);
          }
        ],
        Q: [
          r,
          function(f) {
            this.month = 3 * (f - 1) + 1;
          }
        ],
        S: [
          r,
          function(f) {
            this.milliseconds = 100 * +f;
          }
        ],
        SS: [
          l,
          function(f) {
            this.milliseconds = 10 * +f;
          }
        ],
        SSS: [
          /\d{3}/,
          function(f) {
            this.milliseconds = +f;
          }
        ],
        s: [o, d('seconds')],
        ss: [o, d('seconds')],
        m: [o, d('minutes')],
        mm: [o, d('minutes')],
        H: [o, d('hours')],
        h: [o, d('hours')],
        HH: [o, d('hours')],
        hh: [o, d('hours')],
        D: [o, d('day')],
        DD: [l, d('day')],
        Do: [
          i,
          function(f) {
            var C = c.ordinal,
              p = f.match(/\d+/);
            if (((this.day = p[0]), C))
              for (var x = 1; x <= 31; x += 1)
                C(x).replace(/\[|\]/g, '') === f && (this.day = x);
          }
        ],
        w: [o, d('week')],
        ww: [l, d('week')],
        M: [o, d('month')],
        MM: [l, d('month')],
        MMM: [
          i,
          function(f) {
            var C = v('months'),
              p =
                (
                  v('monthsShort') ||
                  C.map(function(x) {
                    return x.slice(0, 3);
                  })
                ).indexOf(f) + 1;
            if (p < 1) throw new Error();
            this.month = p % 12 || p;
          }
        ],
        MMMM: [
          i,
          function(f) {
            var C = v('months').indexOf(f) + 1;
            if (C < 1) throw new Error();
            this.month = C % 12 || C;
          }
        ],
        Y: [/[+-]?\d+/, d('year')],
        YY: [
          l,
          function(f) {
            this.year = s(f);
          }
        ],
        YYYY: [/\d{4}/, d('year')],
        Z: u,
        ZZ: u
      };
    function $(f) {
      var C, p;
      (C = f), (p = c && c.formats);
      for (
        var x = (f = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(
            _,
            R,
            W
          ) {
            var X = W && W.toUpperCase();
            return (
              R ||
              p[W] ||
              n[W] ||
              p[X].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, P, S) {
                return P || S.slice(1);
              })
            );
          })).match(a),
          k = x.length,
          T = 0;
        T < k;
        T += 1
      ) {
        var E = x[T],
          U = y[E],
          z = U && U[0],
          j = U && U[1];
        x[T] = j ? { regex: z, parser: j } : E.replace(/^\[|\]$/g, '');
      }
      return function(_) {
        for (var R = {}, W = 0, X = 0; W < k; W += 1) {
          var N = x[W];
          if (typeof N == 'string') X += N.length;
          else {
            var P = N.regex,
              S = N.parser,
              b = _.slice(X),
              w = P.exec(b)[0];
            S.call(R, w), (_ = _.replace(w, ''));
          }
        }
        return (
          (function(I) {
            var m = I.afternoon;
            if (m !== void 0) {
              var D = I.hours;
              m ? D < 12 && (I.hours += 12) : D === 12 && (I.hours = 0),
                delete I.afternoon;
            }
          })(R),
          R
        );
      };
    }
    return function(f, C, p) {
      (p.p.customParseFormat = !0),
        f && f.parseTwoDigitYear && (s = f.parseTwoDigitYear);
      var x = C.prototype,
        k = x.parse;
      x.parse = function(T) {
        var E = T.date,
          U = T.utc,
          z = T.args;
        this.$u = U;
        var j = z[1];
        if (typeof j == 'string') {
          var _ = z[2] === !0,
            R = z[3] === !0,
            W = _ || R,
            X = z[2];
          R && (X = z[2]),
            (c = this.$locale()),
            !_ && X && (c = p.Ls[X]),
            (this.$d = (function(b, w, I, m) {
              try {
                if (['x', 'X'].indexOf(w) > -1)
                  return new Date((w === 'X' ? 1e3 : 1) * b);
                var D = $(w)(b),
                  H = D.year,
                  A = D.month,
                  Q = D.day,
                  ee = D.hours,
                  ie = D.minutes,
                  oe = D.seconds,
                  q = D.milliseconds,
                  ne = D.zone,
                  G = D.week,
                  Z = new Date(),
                  ue = Q || (H || A ? 1 : Z.getDate()),
                  re = H || Z.getFullYear(),
                  he = 0;
                (H && !A) || (he = A > 0 ? A - 1 : Z.getMonth());
                var K,
                  te = ee || 0,
                  we = ie || 0,
                  ye = oe || 0,
                  Me = q || 0;
                return ne
                  ? new Date(
                      Date.UTC(
                        re,
                        he,
                        ue,
                        te,
                        we,
                        ye,
                        Me + 60 * ne.offset * 1e3
                      )
                    )
                  : I
                  ? new Date(Date.UTC(re, he, ue, te, we, ye, Me))
                  : ((K = new Date(re, he, ue, te, we, ye, Me)),
                    G &&
                      (K = m(K)
                        .week(G)
                        .toDate()),
                    K);
              } catch {
                return new Date('');
              }
            })(E, j, U, p)),
            this.init(),
            X && X !== !0 && (this.$L = this.locale(X).$L),
            W && E != this.format(j) && (this.$d = new Date('')),
            (c = {});
        } else if (j instanceof Array)
          for (var N = j.length, P = 1; P <= N; P += 1) {
            z[1] = j[P - 1];
            var S = p.apply(this, z);
            if (S.isValid()) {
              (this.$d = S.$d), (this.$L = S.$L), this.init();
              break;
            }
            P === N && (this.$d = new Date(''));
          }
        else k.call(this, T);
      };
    };
  });
})(Ga);
var jo = Ga.exports;
const zo = lt(jo);
ge.extend(zo);
ge.extend(Lo);
ge.extend(No);
ge.extend(Eo);
ge.extend(Vo);
ge.extend(Ao);
ge.extend(Wo);
ge.extend((e, t) => {
  const n = t.prototype,
    a = n.format;
  n.format = function(l) {
    const o = (l || '').replace('Wo', 'wo');
    return a.bind(this)(o);
  };
});
const Uo = {
    bn_BD: 'bn-bd',
    by_BY: 'be',
    en_GB: 'en-gb',
    en_US: 'en',
    fr_BE: 'fr',
    fr_CA: 'fr-ca',
    hy_AM: 'hy-am',
    kmr_IQ: 'ku',
    nl_BE: 'nl-be',
    pt_BR: 'pt-br',
    zh_CN: 'zh-cn',
    zh_HK: 'zh-hk',
    zh_TW: 'zh-tw'
  },
  ct = e => Uo[e] || e.split('_')[0],
  ba = () => {
    so(!1, 'Not match any format. Please help to fire a issue about this.');
  },
  qo = /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|k{1,2}|S/g;
function Ca(e, t, n) {
  const a = [...new Set(e.split(n))];
  let r = 0;
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (((r += o.length), r > t)) return o;
    r += n.length;
  }
}
const wa = (e, t) => {
    if (!e) return null;
    if (ge.isDayjs(e)) return e;
    const n = t.matchAll(qo);
    let a = ge(e, t);
    if (n === null) return a;
    for (const r of n) {
      const l = r[0],
        o = r.index;
      if (l === 'Q') {
        const i = e.slice(o - 1, o),
          c = Ca(e, o, i).match(/\d+/)[0];
        a = a.quarter(parseInt(c));
      }
      if (l.toLowerCase() === 'wo') {
        const i = e.slice(o - 1, o),
          c = Ca(e, o, i).match(/\d+/)[0];
        a = a.week(parseInt(c));
      }
      l.toLowerCase() === 'ww' &&
        (a = a.week(parseInt(e.slice(o, o + l.length)))),
        l.toLowerCase() === 'w' &&
          (a = a.week(parseInt(e.slice(o, o + l.length + 1))));
    }
    return a;
  },
  Ko = {
    getNow: () => ge(),
    getFixedDate: e => ge(e, ['YYYY-M-DD', 'YYYY-MM-DD']),
    getEndDate: e => e.endOf('month'),
    getWeekDay: e => {
      const t = e.locale('en');
      return t.weekday() + t.localeData().firstDayOfWeek();
    },
    getYear: e => e.year(),
    getMonth: e => e.month(),
    getDate: e => e.date(),
    getHour: e => e.hour(),
    getMinute: e => e.minute(),
    getSecond: e => e.second(),
    addYear: (e, t) => e.add(t, 'year'),
    addMonth: (e, t) => e.add(t, 'month'),
    addDate: (e, t) => e.add(t, 'day'),
    setYear: (e, t) => e.year(t),
    setMonth: (e, t) => e.month(t),
    setDate: (e, t) => e.date(t),
    setHour: (e, t) => e.hour(t),
    setMinute: (e, t) => e.minute(t),
    setSecond: (e, t) => e.second(t),
    isAfter: (e, t) => e.isAfter(t),
    isValidate: e => e.isValid(),
    locale: {
      getWeekFirstDay: e =>
        ge()
          .locale(ct(e))
          .localeData()
          .firstDayOfWeek(),
      getWeekFirstDate: (e, t) => t.locale(ct(e)).weekday(0),
      getWeek: (e, t) => t.locale(ct(e)).week(),
      getShortWeekDays: e =>
        ge()
          .locale(ct(e))
          .localeData()
          .weekdaysMin(),
      getShortMonths: e =>
        ge()
          .locale(ct(e))
          .localeData()
          .monthsShort(),
      format: (e, t, n) => t.locale(ct(e)).format(n),
      parse: (e, t, n) => {
        const a = ct(e);
        for (let r = 0; r < n.length; r += 1) {
          const l = n[r],
            o = t;
          if (l.includes('wo') || l.includes('Wo')) {
            const c = o.split('-')[0],
              s = o.split('-')[1],
              d = ge(c, 'YYYY')
                .startOf('year')
                .locale(a);
            for (let u = 0; u <= 52; u += 1) {
              const v = d.add(u, 'week');
              if (v.format('Wo') === s) return v;
            }
            return ba(), null;
          }
          const i = ge(o, l, !0).locale(a);
          if (i.isValid()) return i;
        }
        return t || ba(), null;
      }
    },
    toDate: (e, t) => (Array.isArray(e) ? e.map(n => wa(n, t)) : wa(e, t)),
    toString: (e, t) =>
      Array.isArray(e)
        ? e.map(n => (ge.isDayjs(n) ? n.format(t) : n))
        : ge.isDayjs(e)
        ? e.format(t)
        : e
  },
  Qo = Ko;
function fe(e) {
  const t = Lr();
  return Y(Y({}, e), t);
}
const Xa = Symbol('PanelContextProps'),
  Rn = e => {
    Ta(Xa, e);
  },
  Be = () => Oa(Xa, {}),
  It = { visibility: 'hidden' };
function it(e, t) {
  let { slots: n } = t;
  var a;
  const r = fe(e),
    {
      prefixCls: l,
      prevIcon: o = '‹',
      nextIcon: i = '›',
      superPrevIcon: c = '«',
      superNextIcon: s = '»',
      onSuperPrev: d,
      onSuperNext: u,
      onPrev: v,
      onNext: h
    } = r,
    { hideNextBtn: y, hidePrevBtn: $ } = Be();
  return g('div', { class: l }, [
    d &&
      g(
        'button',
        {
          type: 'button',
          onClick: d,
          tabindex: -1,
          class: `${l}-super-prev-btn`,
          style: $.value ? It : {}
        },
        [c]
      ),
    v &&
      g(
        'button',
        {
          type: 'button',
          onClick: v,
          tabindex: -1,
          class: `${l}-prev-btn`,
          style: $.value ? It : {}
        },
        [o]
      ),
    g('div', { class: `${l}-view` }, [
      (a = n.default) === null || a === void 0 ? void 0 : a.call(n)
    ]),
    h &&
      g(
        'button',
        {
          type: 'button',
          onClick: h,
          tabindex: -1,
          class: `${l}-next-btn`,
          style: y.value ? It : {}
        },
        [i]
      ),
    u &&
      g(
        'button',
        {
          type: 'button',
          onClick: u,
          tabindex: -1,
          class: `${l}-super-next-btn`,
          style: y.value ? It : {}
        },
        [s]
      )
  ]);
}
it.displayName = 'Header';
it.inheritAttrs = !1;
function In(e) {
  const t = fe(e),
    {
      prefixCls: n,
      generateConfig: a,
      viewDate: r,
      onPrevDecades: l,
      onNextDecades: o
    } = t,
    { hideHeader: i } = Be();
  if (i) return null;
  const c = `${n}-header`,
    s = a.getYear(r),
    d = Math.floor(s / Qe) * Qe,
    u = d + Qe - 1;
  return g(
    it,
    O(O({}, t), {}, { prefixCls: c, onSuperPrev: l, onSuperNext: o }),
    { default: () => [d, Wt('-'), u] }
  );
}
In.displayName = 'DecadeHeader';
In.inheritAttrs = !1;
function Za(e, t, n, a, r) {
  let l = e.setHour(t, n);
  return (l = e.setMinute(l, a)), (l = e.setSecond(l, r)), l;
}
function _t(e, t, n) {
  if (!n) return t;
  let a = t;
  return (
    (a = e.setHour(a, e.getHour(n))),
    (a = e.setMinute(a, e.getMinute(n))),
    (a = e.setSecond(a, e.getSecond(n))),
    a
  );
}
function Go(e, t, n, a, r, l) {
  const o = Math.floor(e / a) * a;
  if (o < e) return [o, 60 - r, 60 - l];
  const i = Math.floor(t / r) * r;
  if (i < t) return [o, i, 60 - l];
  const c = Math.floor(n / l) * l;
  return [o, i, c];
}
function Xo(e, t) {
  const n = e.getYear(t),
    a = e.getMonth(t) + 1,
    r = e.getEndDate(e.getFixedDate(`${n}-${a}-01`)),
    l = e.getDate(r),
    o = a < 10 ? `0${a}` : `${a}`;
  return `${n}-${o}-${l}`;
}
function ft(e) {
  const {
      prefixCls: t,
      disabledDate: n,
      onSelect: a,
      picker: r,
      rowNum: l,
      colNum: o,
      prefixColumn: i,
      rowClassName: c,
      baseDate: s,
      getCellClassName: d,
      getCellText: u,
      getCellNode: v,
      getCellDate: h,
      generateConfig: y,
      titleCell: $,
      headerCells: f
    } = fe(e),
    { onDateMouseenter: C, onDateMouseleave: p, mode: x } = Be(),
    k = `${t}-cell`,
    T = [];
  for (let E = 0; E < l; E += 1) {
    const U = [];
    let z;
    for (let j = 0; j < o; j += 1) {
      const _ = E * o + j,
        R = h(s, _),
        W = yn({
          cellDate: R,
          mode: x.value,
          disabledDate: n,
          generateConfig: y
        });
      j === 0 && ((z = R), i && U.push(i(z)));
      const X = $ && $(R);
      U.push(
        g(
          'td',
          {
            key: j,
            title: X,
            class: se(
              k,
              Y(
                {
                  [`${k}-disabled`]: W,
                  [`${k}-start`]:
                    u(R) === 1 || (r === 'year' && Number(X) % 10 === 0),
                  [`${k}-end`]:
                    X === Xo(y, R) || (r === 'year' && Number(X) % 10 === 9)
                },
                d(R)
              )
            ),
            onClick: N => {
              N.stopPropagation(), W || a(R);
            },
            onMouseenter: () => {
              !W && C && C(R);
            },
            onMouseleave: () => {
              !W && p && p(R);
            }
          },
          [v ? v(R) : g('div', { class: `${k}-inner` }, [u(R)])]
        )
      );
    }
    T.push(g('tr', { key: E, class: c && c(z) }, [U]));
  }
  return g('div', { class: `${t}-body` }, [
    g('table', { class: `${t}-content` }, [
      f && g('thead', null, [g('tr', null, [f])]),
      g('tbody', null, [T])
    ])
  ]);
}
ft.displayName = 'PanelBody';
ft.inheritAttrs = !1;
const Cn = 3,
  $a = 4;
function Nn(e) {
  const t = fe(e),
    n = He - 1,
    { prefixCls: a, viewDate: r, generateConfig: l } = t,
    o = `${a}-cell`,
    i = l.getYear(r),
    c = Math.floor(i / He) * He,
    s = Math.floor(i / Qe) * Qe,
    d = s + Qe - 1,
    u = l.setYear(r, s - Math.ceil((Cn * $a * He - Qe) / 2)),
    v = h => {
      const y = l.getYear(h),
        $ = y + n;
      return { [`${o}-in-view`]: s <= y && $ <= d, [`${o}-selected`]: y === c };
    };
  return g(
    ft,
    O(
      O({}, t),
      {},
      {
        rowNum: $a,
        colNum: Cn,
        baseDate: u,
        getCellText: h => {
          const y = l.getYear(h);
          return `${y}-${y + n}`;
        },
        getCellClassName: v,
        getCellDate: (h, y) => l.addYear(h, y * He)
      }
    ),
    null
  );
}
Nn.displayName = 'DecadeBody';
Nn.inheritAttrs = !1;
const Nt = new Map();
function Zo(e, t) {
  let n;
  function a() {
    uo(e)
      ? t()
      : (n = Xe(() => {
          a();
        }));
  }
  return (
    a(),
    () => {
      Xe.cancel(n);
    }
  );
}
function wn(e, t, n) {
  if ((Nt.get(e) && Xe.cancel(Nt.get(e)), n <= 0)) {
    Nt.set(
      e,
      Xe(() => {
        e.scrollTop = t;
      })
    );
    return;
  }
  const r = ((t - e.scrollTop) / n) * 10;
  Nt.set(
    e,
    Xe(() => {
      (e.scrollTop += r), e.scrollTop !== t && wn(e, t, n - 10);
    })
  );
}
function mt(e, t) {
  let {
    onLeftRight: n,
    onCtrlLeftRight: a,
    onUpDown: r,
    onPageUpDown: l,
    onEnter: o
  } = t;
  const { which: i, ctrlKey: c, metaKey: s } = e;
  switch (i) {
    case ce.LEFT:
      if (c || s) {
        if (a) return a(-1), !0;
      } else if (n) return n(-1), !0;
      break;
    case ce.RIGHT:
      if (c || s) {
        if (a) return a(1), !0;
      } else if (n) return n(1), !0;
      break;
    case ce.UP:
      if (r) return r(-1), !0;
      break;
    case ce.DOWN:
      if (r) return r(1), !0;
      break;
    case ce.PAGE_UP:
      if (l) return l(-1), !0;
      break;
    case ce.PAGE_DOWN:
      if (l) return l(1), !0;
      break;
    case ce.ENTER:
      if (o) return o(), !0;
      break;
  }
  return !1;
}
function Ja(e, t, n, a) {
  let r = e;
  if (!r)
    switch (t) {
      case 'time':
        r = a ? 'hh:mm:ss a' : 'HH:mm:ss';
        break;
      case 'week':
        r = 'gggg-wo';
        break;
      case 'month':
        r = 'YYYY-MM';
        break;
      case 'quarter':
        r = 'YYYY-[Q]Q';
        break;
      case 'year':
        r = 'YYYY';
        break;
      default:
        r = n ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    }
  return r;
}
function er(e, t, n) {
  const a = e === 'time' ? 8 : 10,
    r = typeof t == 'function' ? t(n.getNow()).length : t.length;
  return Math.max(a, r) + 2;
}
let yt = null;
const Yt = new Set();
function Jo(e) {
  return (
    !yt &&
      typeof window < 'u' &&
      window.addEventListener &&
      ((yt = t => {
        [...Yt].forEach(n => {
          n(t);
        });
      }),
      window.addEventListener('mousedown', yt)),
    Yt.add(e),
    () => {
      Yt.delete(e),
        Yt.size === 0 &&
          (window.removeEventListener('mousedown', yt), (yt = null));
    }
  );
}
function el(e) {
  var t;
  const n = e.target;
  return (
    (e.composed &&
      n.shadowRoot &&
      ((t = e.composedPath) === null || t === void 0
        ? void 0
        : t.call(e)[0])) ||
    n
  );
}
const tl = e => (e === 'month' || e === 'date' ? 'year' : e),
  nl = e => (e === 'date' ? 'month' : e),
  al = e => (e === 'month' || e === 'date' ? 'quarter' : e),
  rl = e => (e === 'date' ? 'week' : e),
  ol = { year: tl, month: nl, quarter: al, week: rl, time: null, date: null };
function tr(e, t) {
  return e.some(n => n && n.contains(t));
}
const He = 10,
  Qe = He * 10;
function Yn(e) {
  const t = fe(e),
    {
      prefixCls: n,
      onViewDateChange: a,
      generateConfig: r,
      viewDate: l,
      operationRef: o,
      onSelect: i,
      onPanelChange: c
    } = t,
    s = `${n}-decade-panel`;
  o.value = {
    onKeydown: v =>
      mt(v, {
        onLeftRight: h => {
          i(r.addYear(l, h * He), 'key');
        },
        onCtrlLeftRight: h => {
          i(r.addYear(l, h * Qe), 'key');
        },
        onUpDown: h => {
          i(r.addYear(l, h * He * Cn), 'key');
        },
        onEnter: () => {
          c('year', l);
        }
      })
  };
  const d = v => {
      const h = r.addYear(l, v * Qe);
      a(h), c(null, h);
    },
    u = v => {
      i(v, 'mouse'), c('year', v);
    };
  return g('div', { class: s }, [
    g(
      In,
      O(
        O({}, t),
        {},
        {
          prefixCls: n,
          onPrevDecades: () => {
            d(-1);
          },
          onNextDecades: () => {
            d(1);
          }
        }
      ),
      null
    ),
    g(Nn, O(O({}, t), {}, { prefixCls: n, onSelect: u }), null)
  ]);
}
Yn.displayName = 'DecadePanel';
Yn.inheritAttrs = !1;
const At = 7;
function vt(e, t) {
  if (!e && !t) return !0;
  if (!e || !t) return !1;
}
function ll(e, t, n) {
  const a = vt(t, n);
  if (typeof a == 'boolean') return a;
  const r = Math.floor(e.getYear(t) / 10),
    l = Math.floor(e.getYear(n) / 10);
  return r === l;
}
function qt(e, t, n) {
  const a = vt(t, n);
  return typeof a == 'boolean' ? a : e.getYear(t) === e.getYear(n);
}
function $n(e, t) {
  return Math.floor(e.getMonth(t) / 3) + 1;
}
function nr(e, t, n) {
  const a = vt(t, n);
  return typeof a == 'boolean' ? a : qt(e, t, n) && $n(e, t) === $n(e, n);
}
function En(e, t, n) {
  const a = vt(t, n);
  return typeof a == 'boolean'
    ? a
    : qt(e, t, n) && e.getMonth(t) === e.getMonth(n);
}
function Ge(e, t, n) {
  const a = vt(t, n);
  return typeof a == 'boolean'
    ? a
    : e.getYear(t) === e.getYear(n) &&
        e.getMonth(t) === e.getMonth(n) &&
        e.getDate(t) === e.getDate(n);
}
function il(e, t, n) {
  const a = vt(t, n);
  return typeof a == 'boolean'
    ? a
    : e.getHour(t) === e.getHour(n) &&
        e.getMinute(t) === e.getMinute(n) &&
        e.getSecond(t) === e.getSecond(n);
}
function ar(e, t, n, a) {
  const r = vt(n, a);
  return typeof r == 'boolean'
    ? r
    : e.locale.getWeek(t, n) === e.locale.getWeek(t, a);
}
function ht(e, t, n) {
  return Ge(e, t, n) && il(e, t, n);
}
function Et(e, t, n, a) {
  return !t || !n || !a
    ? !1
    : !Ge(e, t, a) && !Ge(e, n, a) && e.isAfter(a, t) && e.isAfter(n, a);
}
function sl(e, t, n) {
  const a = t.locale.getWeekFirstDay(e),
    r = t.setDate(n, 1),
    l = t.getWeekDay(r);
  let o = t.addDate(r, a - l);
  return (
    t.getMonth(o) === t.getMonth(n) &&
      t.getDate(o) > 1 &&
      (o = t.addDate(o, -7)),
    o
  );
}
function kt(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  switch (t) {
    case 'year':
      return n.addYear(e, a * 10);
    case 'quarter':
    case 'month':
      return n.addYear(e, a);
    default:
      return n.addMonth(e, a);
  }
}
function Ce(e, t) {
  let { generateConfig: n, locale: a, format: r } = t;
  return typeof r == 'function' ? r(e) : n.locale.format(a.locale, e, r);
}
function rr(e, t) {
  let { generateConfig: n, locale: a, formatList: r } = t;
  return !e || typeof r[0] == 'function'
    ? null
    : n.locale.parse(a.locale, e, r);
}
function yn(e) {
  let { cellDate: t, mode: n, disabledDate: a, generateConfig: r } = e;
  if (!a) return !1;
  const l = (o, i, c) => {
    let s = i;
    for (; s <= c; ) {
      let d;
      switch (o) {
        case 'date': {
          if (((d = r.setDate(t, s)), !a(d))) return !1;
          break;
        }
        case 'month': {
          if (
            ((d = r.setMonth(t, s)),
            !yn({
              cellDate: d,
              mode: 'month',
              generateConfig: r,
              disabledDate: a
            }))
          )
            return !1;
          break;
        }
        case 'year': {
          if (
            ((d = r.setYear(t, s)),
            !yn({
              cellDate: d,
              mode: 'year',
              generateConfig: r,
              disabledDate: a
            }))
          )
            return !1;
          break;
        }
      }
      s += 1;
    }
    return !0;
  };
  switch (n) {
    case 'date':
    case 'week':
      return a(t);
    case 'month': {
      const i = r.getDate(r.getEndDate(t));
      return l('date', 1, i);
    }
    case 'quarter': {
      const o = Math.floor(r.getMonth(t) / 3) * 3,
        i = o + 2;
      return l('month', o, i);
    }
    case 'year':
      return l('month', 0, 11);
    case 'decade': {
      const o = r.getYear(t),
        i = Math.floor(o / He) * He,
        c = i + He - 1;
      return l('year', i, c);
    }
  }
}
function Hn(e) {
  const t = fe(e),
    { hideHeader: n } = Be();
  if (n.value) return null;
  const { prefixCls: a, generateConfig: r, locale: l, value: o, format: i } = t,
    c = `${a}-header`;
  return g(
    it,
    { prefixCls: c },
    {
      default: () => [
        o ? Ce(o, { locale: l, format: i, generateConfig: r }) : ' '
      ]
    }
  );
}
Hn.displayName = 'TimeHeader';
Hn.inheritAttrs = !1;
const Ht = Ie({
  name: 'TimeUnitColumn',
  props: [
    'prefixCls',
    'units',
    'onSelect',
    'value',
    'active',
    'hideDisabledOptions'
  ],
  setup(e) {
    const { open: t } = Be(),
      n = Ee(null),
      a = L(new Map()),
      r = L();
    return (
      pe(
        () => e.value,
        () => {
          const l = a.value.get(e.value);
          l && t.value !== !1 && wn(n.value, l.offsetTop, 120);
        }
      ),
      Mn(() => {
        var l;
        (l = r.value) === null || l === void 0 || l.call(r);
      }),
      pe(
        t,
        () => {
          var l;
          (l = r.value) === null || l === void 0 || l.call(r),
            Ra(() => {
              if (t.value) {
                const o = a.value.get(e.value);
                o &&
                  (r.value = Zo(o, () => {
                    wn(n.value, o.offsetTop, 0);
                  }));
              }
            });
        },
        { immediate: !0, flush: 'post' }
      ),
      () => {
        const {
            prefixCls: l,
            units: o,
            onSelect: i,
            value: c,
            active: s,
            hideDisabledOptions: d
          } = e,
          u = `${l}-cell`;
        return g(
          'ul',
          {
            class: se(`${l}-column`, { [`${l}-column-active`]: s }),
            ref: n,
            style: { position: 'relative' }
          },
          [
            o.map(v =>
              d && v.disabled
                ? null
                : g(
                    'li',
                    {
                      key: v.value,
                      ref: h => {
                        a.value.set(v.value, h);
                      },
                      class: se(u, {
                        [`${u}-disabled`]: v.disabled,
                        [`${u}-selected`]: c === v.value
                      }),
                      onClick: () => {
                        v.disabled || i(v.value);
                      }
                    },
                    [g('div', { class: `${u}-inner` }, [v.label])]
                  )
            )
          ]
        );
      }
    );
  }
});
function or(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0',
    a = String(e);
  for (; a.length < t; ) a = `${n}${e}`;
  return a;
}
const ul = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
};
function lr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ir(e) {
  const t = {};
  return (
    Object.keys(e).forEach(n => {
      (n.startsWith('data-') ||
        n.startsWith('aria-') ||
        n === 'role' ||
        n === 'name') &&
        !n.startsWith('data-__') &&
        (t[n] = e[n]);
    }),
    t
  );
}
function J(e, t) {
  return e ? e[t] : null;
}
function Re(e, t, n) {
  const a = [J(e, 0), J(e, 1)];
  return (
    (a[n] = typeof t == 'function' ? t(a[n]) : t), !a[0] && !a[1] ? null : a
  );
}
function un(e, t, n, a) {
  const r = [];
  for (let l = e; l <= t; l += n)
    r.push({ label: or(l, 2), value: l, disabled: (a || []).includes(l) });
  return r;
}
const cl = Ie({
    compatConfig: { MODE: 3 },
    name: 'TimeBody',
    inheritAttrs: !1,
    props: [
      'generateConfig',
      'prefixCls',
      'operationRef',
      'activeColumnIndex',
      'value',
      'showHour',
      'showMinute',
      'showSecond',
      'use12Hours',
      'hourStep',
      'minuteStep',
      'secondStep',
      'disabledHours',
      'disabledMinutes',
      'disabledSeconds',
      'disabledTime',
      'hideDisabledOptions',
      'onSelect'
    ],
    setup(e) {
      const t = B(() => (e.value ? e.generateConfig.getHour(e.value) : -1)),
        n = B(() => (e.use12Hours ? t.value >= 12 : !1)),
        a = B(() => (e.use12Hours ? t.value % 12 : t.value)),
        r = B(() => (e.value ? e.generateConfig.getMinute(e.value) : -1)),
        l = B(() => (e.value ? e.generateConfig.getSecond(e.value) : -1)),
        o = L(e.generateConfig.getNow()),
        i = L(),
        c = L(),
        s = L();
      jr(() => {
        o.value = e.generateConfig.getNow();
      }),
        Tn(() => {
          if (e.disabledTime) {
            const f = e.disabledTime(o);
            [i.value, c.value, s.value] = [
              f.disabledHours,
              f.disabledMinutes,
              f.disabledSeconds
            ];
          } else
            [i.value, c.value, s.value] = [
              e.disabledHours,
              e.disabledMinutes,
              e.disabledSeconds
            ];
        });
      const d = (f, C, p, x) => {
          let k = e.value || e.generateConfig.getNow();
          const T = Math.max(0, C),
            E = Math.max(0, p),
            U = Math.max(0, x);
          return (
            (k = Za(
              e.generateConfig,
              k,
              !e.use12Hours || !f ? T : T + 12,
              E,
              U
            )),
            k
          );
        },
        u = B(() => {
          var f;
          return un(
            0,
            23,
            (f = e.hourStep) !== null && f !== void 0 ? f : 1,
            i.value && i.value()
          );
        }),
        v = B(() => {
          if (!e.use12Hours) return [!1, !1];
          const f = [!0, !0];
          return (
            u.value.forEach(C => {
              let { disabled: p, value: x } = C;
              p || (x >= 12 ? (f[1] = !1) : (f[0] = !1));
            }),
            f
          );
        }),
        h = B(() =>
          e.use12Hours
            ? u.value
                .filter(n.value ? f => f.value >= 12 : f => f.value < 12)
                .map(f => {
                  const C = f.value % 12,
                    p = C === 0 ? '12' : or(C, 2);
                  return Y(Y({}, f), { label: p, value: C });
                })
            : u.value
        ),
        y = B(() => {
          var f;
          return un(
            0,
            59,
            (f = e.minuteStep) !== null && f !== void 0 ? f : 1,
            c.value && c.value(t.value)
          );
        }),
        $ = B(() => {
          var f;
          return un(
            0,
            59,
            (f = e.secondStep) !== null && f !== void 0 ? f : 1,
            s.value && s.value(t.value, r.value)
          );
        });
      return () => {
        const {
            prefixCls: f,
            operationRef: C,
            activeColumnIndex: p,
            showHour: x,
            showMinute: k,
            showSecond: T,
            use12Hours: E,
            hideDisabledOptions: U,
            onSelect: z
          } = e,
          j = [],
          _ = `${f}-content`,
          R = `${f}-time-panel`;
        C.value = {
          onUpDown: N => {
            const P = j[p];
            if (P) {
              const S = P.units.findIndex(w => w.value === P.value),
                b = P.units.length;
              for (let w = 1; w < b; w += 1) {
                const I = P.units[(S + N * w + b) % b];
                if (I.disabled !== !0) {
                  P.onSelect(I.value);
                  break;
                }
              }
            }
          }
        };
        function W(N, P, S, b, w) {
          N !== !1 &&
            j.push({
              node: co(P, {
                prefixCls: R,
                value: S,
                active: p === j.length,
                onSelect: w,
                units: b,
                hideDisabledOptions: U
              }),
              onSelect: w,
              value: S,
              units: b
            });
        }
        W(x, g(Ht, { key: 'hour' }, null), a.value, h.value, N => {
          z(d(n.value, N, r.value, l.value), 'mouse');
        }),
          W(k, g(Ht, { key: 'minute' }, null), r.value, y.value, N => {
            z(d(n.value, a.value, N, l.value), 'mouse');
          }),
          W(T, g(Ht, { key: 'second' }, null), l.value, $.value, N => {
            z(d(n.value, a.value, r.value, N), 'mouse');
          });
        let X = -1;
        return (
          typeof n.value == 'boolean' && (X = n.value ? 1 : 0),
          W(
            E === !0,
            g(Ht, { key: '12hours' }, null),
            X,
            [
              { label: 'AM', value: 0, disabled: v.value[0] },
              { label: 'PM', value: 1, disabled: v.value[1] }
            ],
            N => {
              z(d(!!N, a.value, r.value, l.value), 'mouse');
            }
          ),
          g('div', { class: _ }, [
            j.map(N => {
              let { node: P } = N;
              return P;
            })
          ])
        );
      };
    }
  }),
  dl = cl,
  fl = e => e.filter(t => t !== !1).length;
function Kt(e) {
  const t = fe(e),
    {
      generateConfig: n,
      format: a = 'HH:mm:ss',
      prefixCls: r,
      active: l,
      operationRef: o,
      showHour: i,
      showMinute: c,
      showSecond: s,
      use12Hours: d = !1,
      onSelect: u,
      value: v
    } = t,
    h = `${r}-time-panel`,
    y = L(),
    $ = L(-1),
    f = fl([i, c, s, d]);
  return (
    (o.value = {
      onKeydown: C =>
        mt(C, {
          onLeftRight: p => {
            $.value = ($.value + p + f) % f;
          },
          onUpDown: p => {
            $.value === -1 ? ($.value = 0) : y.value && y.value.onUpDown(p);
          },
          onEnter: () => {
            u(v || n.getNow(), 'key'), ($.value = -1);
          }
        }),
      onBlur: () => {
        $.value = -1;
      }
    }),
    g('div', { class: se(h, { [`${h}-active`]: l }) }, [
      g(Hn, O(O({}, t), {}, { format: a, prefixCls: r }), null),
      g(
        dl,
        O(
          O({}, t),
          {},
          { prefixCls: r, activeColumnIndex: $.value, operationRef: y }
        ),
        null
      )
    ])
  );
}
Kt.displayName = 'TimePanel';
Kt.inheritAttrs = !1;
function Qt(e) {
  let {
    cellPrefixCls: t,
    generateConfig: n,
    rangedValue: a,
    hoverRangedValue: r,
    isInView: l,
    isSameCell: o,
    offsetCell: i,
    today: c,
    value: s
  } = e;
  function d(u) {
    const v = i(u, -1),
      h = i(u, 1),
      y = J(a, 0),
      $ = J(a, 1),
      f = J(r, 0),
      C = J(r, 1),
      p = Et(n, f, C, u);
    function x(j) {
      return o(y, j);
    }
    function k(j) {
      return o($, j);
    }
    const T = o(f, u),
      E = o(C, u),
      U = (p || E) && (!l(v) || k(v)),
      z = (p || T) && (!l(h) || x(h));
    return {
      [`${t}-in-view`]: l(u),
      [`${t}-in-range`]: Et(n, y, $, u),
      [`${t}-range-start`]: x(u),
      [`${t}-range-end`]: k(u),
      [`${t}-range-start-single`]: x(u) && !$,
      [`${t}-range-end-single`]: k(u) && !y,
      [`${t}-range-start-near-hover`]: x(u) && (o(v, f) || Et(n, f, C, v)),
      [`${t}-range-end-near-hover`]: k(u) && (o(h, C) || Et(n, f, C, h)),
      [`${t}-range-hover`]: p,
      [`${t}-range-hover-start`]: T,
      [`${t}-range-hover-end`]: E,
      [`${t}-range-hover-edge-start`]: U,
      [`${t}-range-hover-edge-end`]: z,
      [`${t}-range-hover-edge-start-near-range`]: U && o(v, $),
      [`${t}-range-hover-edge-end-near-range`]: z && o(h, y),
      [`${t}-today`]: o(c, u),
      [`${t}-selected`]: o(s, u)
    };
  }
  return d;
}
const sr = Symbol('RangeContextProps'),
  vl = e => {
    Ta(sr, e);
  },
  Pt = () =>
    Oa(sr, {
      rangedValue: L(),
      hoverRangedValue: L(),
      inRange: L(),
      panelPosition: L()
    }),
  gl = Ie({
    compatConfig: { MODE: 3 },
    name: 'PanelContextProvider',
    inheritAttrs: !1,
    props: { value: { type: Object, default: () => ({}) } },
    setup(e, t) {
      let { slots: n } = t;
      const a = {
        rangedValue: L(e.value.rangedValue),
        hoverRangedValue: L(e.value.hoverRangedValue),
        inRange: L(e.value.inRange),
        panelPosition: L(e.value.panelPosition)
      };
      return (
        vl(a),
        pe(
          () => e.value,
          () => {
            Object.keys(e.value).forEach(r => {
              a[r] && (a[r].value = e.value[r]);
            });
          }
        ),
        () => {
          var r;
          return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
        }
      );
    }
  });
function Gt(e) {
  const t = fe(e),
    {
      prefixCls: n,
      generateConfig: a,
      prefixColumn: r,
      locale: l,
      rowCount: o,
      viewDate: i,
      value: c,
      dateRender: s
    } = t,
    { rangedValue: d, hoverRangedValue: u } = Pt(),
    v = sl(l.locale, a, i),
    h = `${n}-cell`,
    y = a.locale.getWeekFirstDay(l.locale),
    $ = a.getNow(),
    f = [],
    C =
      l.shortWeekDays ||
      (a.locale.getShortWeekDays ? a.locale.getShortWeekDays(l.locale) : []);
  r && f.push(g('th', { key: 'empty', 'aria-label': 'empty cell' }, null));
  for (let k = 0; k < At; k += 1)
    f.push(g('th', { key: k }, [C[(k + y) % At]]));
  const p = Qt({
      cellPrefixCls: h,
      today: $,
      value: c,
      generateConfig: a,
      rangedValue: r ? null : d.value,
      hoverRangedValue: r ? null : u.value,
      isSameCell: (k, T) => Ge(a, k, T),
      isInView: k => En(a, k, i),
      offsetCell: (k, T) => a.addDate(k, T)
    }),
    x = s ? k => s({ current: k, today: $ }) : void 0;
  return g(
    ft,
    O(
      O({}, t),
      {},
      {
        rowNum: o,
        colNum: At,
        baseDate: v,
        getCellNode: x,
        getCellText: a.getDate,
        getCellClassName: p,
        getCellDate: a.addDate,
        titleCell: k =>
          Ce(k, { locale: l, format: 'YYYY-MM-DD', generateConfig: a }),
        headerCells: f
      }
    ),
    null
  );
}
Gt.displayName = 'DateBody';
Gt.inheritAttrs = !1;
Gt.props = [
  'prefixCls',
  'generateConfig',
  'value?',
  'viewDate',
  'locale',
  'rowCount',
  'onSelect',
  'dateRender?',
  'disabledDate?',
  'prefixColumn?',
  'rowClassName?'
];
function Vn(e) {
  const t = fe(e),
    {
      prefixCls: n,
      generateConfig: a,
      locale: r,
      viewDate: l,
      onNextMonth: o,
      onPrevMonth: i,
      onNextYear: c,
      onPrevYear: s,
      onYearClick: d,
      onMonthClick: u
    } = t,
    { hideHeader: v } = Be();
  if (v.value) return null;
  const h = `${n}-header`,
    y =
      r.shortMonths ||
      (a.locale.getShortMonths ? a.locale.getShortMonths(r.locale) : []),
    $ = a.getMonth(l),
    f = g(
      'button',
      {
        type: 'button',
        key: 'year',
        onClick: d,
        tabindex: -1,
        class: `${n}-year-btn`
      },
      [Ce(l, { locale: r, format: r.yearFormat, generateConfig: a })]
    ),
    C = g(
      'button',
      {
        type: 'button',
        key: 'month',
        onClick: u,
        tabindex: -1,
        class: `${n}-month-btn`
      },
      [
        r.monthFormat
          ? Ce(l, { locale: r, format: r.monthFormat, generateConfig: a })
          : y[$]
      ]
    ),
    p = r.monthBeforeYear ? [C, f] : [f, C];
  return g(
    it,
    O(
      O({}, t),
      {},
      { prefixCls: h, onSuperPrev: s, onPrev: i, onNext: o, onSuperNext: c }
    ),
    { default: () => [p] }
  );
}
Vn.displayName = 'DateHeader';
Vn.inheritAttrs = !1;
const pl = 6;
function Mt(e) {
  const t = fe(e),
    {
      prefixCls: n,
      panelName: a = 'date',
      keyboardConfig: r,
      active: l,
      operationRef: o,
      generateConfig: i,
      value: c,
      viewDate: s,
      onViewDateChange: d,
      onPanelChange: u,
      onSelect: v
    } = t,
    h = `${n}-${a}-panel`;
  o.value = {
    onKeydown: f =>
      mt(
        f,
        Y(
          {
            onLeftRight: C => {
              v(i.addDate(c || s, C), 'key');
            },
            onCtrlLeftRight: C => {
              v(i.addYear(c || s, C), 'key');
            },
            onUpDown: C => {
              v(i.addDate(c || s, C * At), 'key');
            },
            onPageUpDown: C => {
              v(i.addMonth(c || s, C), 'key');
            }
          },
          r
        )
      )
  };
  const y = f => {
      const C = i.addYear(s, f);
      d(C), u(null, C);
    },
    $ = f => {
      const C = i.addMonth(s, f);
      d(C), u(null, C);
    };
  return g('div', { class: se(h, { [`${h}-active`]: l }) }, [
    g(
      Vn,
      O(
        O({}, t),
        {},
        {
          prefixCls: n,
          value: c,
          viewDate: s,
          onPrevYear: () => {
            y(-1);
          },
          onNextYear: () => {
            y(1);
          },
          onPrevMonth: () => {
            $(-1);
          },
          onNextMonth: () => {
            $(1);
          },
          onMonthClick: () => {
            u('month', s);
          },
          onYearClick: () => {
            u('year', s);
          }
        }
      ),
      null
    ),
    g(
      Gt,
      O(
        O({}, t),
        {},
        {
          onSelect: f => v(f, 'mouse'),
          prefixCls: n,
          value: c,
          viewDate: s,
          rowCount: pl
        }
      ),
      null
    )
  ]);
}
Mt.displayName = 'DatePanel';
Mt.inheritAttrs = !1;
const ya = ul('date', 'time');
function _n(e) {
  const t = fe(e),
    {
      prefixCls: n,
      operationRef: a,
      generateConfig: r,
      value: l,
      defaultValue: o,
      disabledTime: i,
      showTime: c,
      onSelect: s
    } = t,
    d = `${n}-datetime-panel`,
    u = L(null),
    v = L({}),
    h = L({}),
    y = typeof c == 'object' ? Y({}, c) : {};
  function $(x) {
    const k = ya.indexOf(u.value) + x;
    return ya[k] || null;
  }
  const f = x => {
    h.value.onBlur && h.value.onBlur(x), (u.value = null);
  };
  a.value = {
    onKeydown: x => {
      if (x.which === ce.TAB) {
        const k = $(x.shiftKey ? -1 : 1);
        return (u.value = k), k && x.preventDefault(), !0;
      }
      if (u.value) {
        const k = u.value === 'date' ? v : h;
        return k.value && k.value.onKeydown && k.value.onKeydown(x), !0;
      }
      return [ce.LEFT, ce.RIGHT, ce.UP, ce.DOWN].includes(x.which)
        ? ((u.value = 'date'), !0)
        : !1;
    },
    onBlur: f,
    onClose: f
  };
  const C = (x, k) => {
      let T = x;
      k === 'date' && !l && y.defaultValue
        ? ((T = r.setHour(T, r.getHour(y.defaultValue))),
          (T = r.setMinute(T, r.getMinute(y.defaultValue))),
          (T = r.setSecond(T, r.getSecond(y.defaultValue))))
        : k === 'time' &&
          !l &&
          o &&
          ((T = r.setYear(T, r.getYear(o))),
          (T = r.setMonth(T, r.getMonth(o))),
          (T = r.setDate(T, r.getDate(o)))),
        s && s(T, 'mouse');
    },
    p = i ? i(l || null) : {};
  return g('div', { class: se(d, { [`${d}-active`]: u.value }) }, [
    g(
      Mt,
      O(
        O({}, t),
        {},
        {
          operationRef: v,
          active: u.value === 'date',
          onSelect: x => {
            C(
              _t(r, x, !l && typeof c == 'object' ? c.defaultValue : null),
              'date'
            );
          }
        }
      ),
      null
    ),
    g(
      Kt,
      O(
        O(O(O({}, t), {}, { format: void 0 }, y), p),
        {},
        {
          disabledTime: null,
          defaultValue: void 0,
          operationRef: h,
          active: u.value === 'time',
          onSelect: x => {
            C(x, 'time');
          }
        }
      ),
      null
    )
  ]);
}
_n.displayName = 'DatetimePanel';
_n.inheritAttrs = !1;
function An(e) {
  const t = fe(e),
    { prefixCls: n, generateConfig: a, locale: r, value: l } = t,
    o = `${n}-cell`,
    i = d =>
      g('td', { key: 'week', class: se(o, `${o}-week`) }, [
        a.locale.getWeek(r.locale, d)
      ]),
    c = `${n}-week-panel-row`,
    s = d => se(c, { [`${c}-selected`]: ar(a, r.locale, l, d) });
  return g(
    Mt,
    O(
      O({}, t),
      {},
      {
        panelName: 'week',
        prefixColumn: i,
        rowClassName: s,
        keyboardConfig: { onLeftRight: null }
      }
    ),
    null
  );
}
An.displayName = 'WeekPanel';
An.inheritAttrs = !1;
function Bn(e) {
  const t = fe(e),
    {
      prefixCls: n,
      generateConfig: a,
      locale: r,
      viewDate: l,
      onNextYear: o,
      onPrevYear: i,
      onYearClick: c
    } = t,
    { hideHeader: s } = Be();
  if (s.value) return null;
  const d = `${n}-header`;
  return g(
    it,
    O(O({}, t), {}, { prefixCls: d, onSuperPrev: i, onSuperNext: o }),
    {
      default: () => [
        g('button', { type: 'button', onClick: c, class: `${n}-year-btn` }, [
          Ce(l, { locale: r, format: r.yearFormat, generateConfig: a })
        ])
      ]
    }
  );
}
Bn.displayName = 'MonthHeader';
Bn.inheritAttrs = !1;
const ur = 3,
  hl = 4;
function Wn(e) {
  const t = fe(e),
    {
      prefixCls: n,
      locale: a,
      value: r,
      viewDate: l,
      generateConfig: o,
      monthCellRender: i
    } = t,
    { rangedValue: c, hoverRangedValue: s } = Pt(),
    d = `${n}-cell`,
    u = Qt({
      cellPrefixCls: d,
      value: r,
      generateConfig: o,
      rangedValue: c.value,
      hoverRangedValue: s.value,
      isSameCell: ($, f) => En(o, $, f),
      isInView: () => !0,
      offsetCell: ($, f) => o.addMonth($, f)
    }),
    v =
      a.shortMonths ||
      (o.locale.getShortMonths ? o.locale.getShortMonths(a.locale) : []),
    h = o.setMonth(l, 0),
    y = i ? $ => i({ current: $, locale: a }) : void 0;
  return g(
    ft,
    O(
      O({}, t),
      {},
      {
        rowNum: hl,
        colNum: ur,
        baseDate: h,
        getCellNode: y,
        getCellText: $ =>
          a.monthFormat
            ? Ce($, { locale: a, format: a.monthFormat, generateConfig: o })
            : v[o.getMonth($)],
        getCellClassName: u,
        getCellDate: o.addMonth,
        titleCell: $ =>
          Ce($, { locale: a, format: 'YYYY-MM', generateConfig: o })
      }
    ),
    null
  );
}
Wn.displayName = 'MonthBody';
Wn.inheritAttrs = !1;
function Fn(e) {
  const t = fe(e),
    {
      prefixCls: n,
      operationRef: a,
      onViewDateChange: r,
      generateConfig: l,
      value: o,
      viewDate: i,
      onPanelChange: c,
      onSelect: s
    } = t,
    d = `${n}-month-panel`;
  a.value = {
    onKeydown: v =>
      mt(v, {
        onLeftRight: h => {
          s(l.addMonth(o || i, h), 'key');
        },
        onCtrlLeftRight: h => {
          s(l.addYear(o || i, h), 'key');
        },
        onUpDown: h => {
          s(l.addMonth(o || i, h * ur), 'key');
        },
        onEnter: () => {
          c('date', o || i);
        }
      })
  };
  const u = v => {
    const h = l.addYear(i, v);
    r(h), c(null, h);
  };
  return g('div', { class: d }, [
    g(
      Bn,
      O(
        O({}, t),
        {},
        {
          prefixCls: n,
          onPrevYear: () => {
            u(-1);
          },
          onNextYear: () => {
            u(1);
          },
          onYearClick: () => {
            c('year', i);
          }
        }
      ),
      null
    ),
    g(
      Wn,
      O(
        O({}, t),
        {},
        {
          prefixCls: n,
          onSelect: v => {
            s(v, 'mouse'), c('date', v);
          }
        }
      ),
      null
    )
  ]);
}
Fn.displayName = 'MonthPanel';
Fn.inheritAttrs = !1;
function Ln(e) {
  const t = fe(e),
    {
      prefixCls: n,
      generateConfig: a,
      locale: r,
      viewDate: l,
      onNextYear: o,
      onPrevYear: i,
      onYearClick: c
    } = t,
    { hideHeader: s } = Be();
  if (s.value) return null;
  const d = `${n}-header`;
  return g(
    it,
    O(O({}, t), {}, { prefixCls: d, onSuperPrev: i, onSuperNext: o }),
    {
      default: () => [
        g('button', { type: 'button', onClick: c, class: `${n}-year-btn` }, [
          Ce(l, { locale: r, format: r.yearFormat, generateConfig: a })
        ])
      ]
    }
  );
}
Ln.displayName = 'QuarterHeader';
Ln.inheritAttrs = !1;
const ml = 4,
  bl = 1;
function jn(e) {
  const t = fe(e),
    { prefixCls: n, locale: a, value: r, viewDate: l, generateConfig: o } = t,
    { rangedValue: i, hoverRangedValue: c } = Pt(),
    s = `${n}-cell`,
    d = Qt({
      cellPrefixCls: s,
      value: r,
      generateConfig: o,
      rangedValue: i.value,
      hoverRangedValue: c.value,
      isSameCell: (v, h) => nr(o, v, h),
      isInView: () => !0,
      offsetCell: (v, h) => o.addMonth(v, h * 3)
    }),
    u = o.setDate(o.setMonth(l, 0), 1);
  return g(
    ft,
    O(
      O({}, t),
      {},
      {
        rowNum: bl,
        colNum: ml,
        baseDate: u,
        getCellText: v =>
          Ce(v, {
            locale: a,
            format: a.quarterFormat || '[Q]Q',
            generateConfig: o
          }),
        getCellClassName: d,
        getCellDate: (v, h) => o.addMonth(v, h * 3),
        titleCell: v =>
          Ce(v, { locale: a, format: 'YYYY-[Q]Q', generateConfig: o })
      }
    ),
    null
  );
}
jn.displayName = 'QuarterBody';
jn.inheritAttrs = !1;
function zn(e) {
  const t = fe(e),
    {
      prefixCls: n,
      operationRef: a,
      onViewDateChange: r,
      generateConfig: l,
      value: o,
      viewDate: i,
      onPanelChange: c,
      onSelect: s
    } = t,
    d = `${n}-quarter-panel`;
  a.value = {
    onKeydown: v =>
      mt(v, {
        onLeftRight: h => {
          s(l.addMonth(o || i, h * 3), 'key');
        },
        onCtrlLeftRight: h => {
          s(l.addYear(o || i, h), 'key');
        },
        onUpDown: h => {
          s(l.addYear(o || i, h), 'key');
        }
      })
  };
  const u = v => {
    const h = l.addYear(i, v);
    r(h), c(null, h);
  };
  return g('div', { class: d }, [
    g(
      Ln,
      O(
        O({}, t),
        {},
        {
          prefixCls: n,
          onPrevYear: () => {
            u(-1);
          },
          onNextYear: () => {
            u(1);
          },
          onYearClick: () => {
            c('year', i);
          }
        }
      ),
      null
    ),
    g(
      jn,
      O(
        O({}, t),
        {},
        {
          prefixCls: n,
          onSelect: v => {
            s(v, 'mouse');
          }
        }
      ),
      null
    )
  ]);
}
zn.displayName = 'QuarterPanel';
zn.inheritAttrs = !1;
function Un(e) {
  const t = fe(e),
    {
      prefixCls: n,
      generateConfig: a,
      viewDate: r,
      onPrevDecade: l,
      onNextDecade: o,
      onDecadeClick: i
    } = t,
    { hideHeader: c } = Be();
  if (c.value) return null;
  const s = `${n}-header`,
    d = a.getYear(r),
    u = Math.floor(d / rt) * rt,
    v = u + rt - 1;
  return g(
    it,
    O(O({}, t), {}, { prefixCls: s, onSuperPrev: l, onSuperNext: o }),
    {
      default: () => [
        g('button', { type: 'button', onClick: i, class: `${n}-decade-btn` }, [
          u,
          Wt('-'),
          v
        ])
      ]
    }
  );
}
Un.displayName = 'YearHeader';
Un.inheritAttrs = !1;
const xn = 3,
  xa = 4;
function qn(e) {
  const t = fe(e),
    { prefixCls: n, value: a, viewDate: r, locale: l, generateConfig: o } = t,
    { rangedValue: i, hoverRangedValue: c } = Pt(),
    s = `${n}-cell`,
    d = o.getYear(r),
    u = Math.floor(d / rt) * rt,
    v = u + rt - 1,
    h = o.setYear(r, u - Math.ceil((xn * xa - rt) / 2)),
    y = f => {
      const C = o.getYear(f);
      return u <= C && C <= v;
    },
    $ = Qt({
      cellPrefixCls: s,
      value: a,
      generateConfig: o,
      rangedValue: i.value,
      hoverRangedValue: c.value,
      isSameCell: (f, C) => qt(o, f, C),
      isInView: y,
      offsetCell: (f, C) => o.addYear(f, C)
    });
  return g(
    ft,
    O(
      O({}, t),
      {},
      {
        rowNum: xa,
        colNum: xn,
        baseDate: h,
        getCellText: o.getYear,
        getCellClassName: $,
        getCellDate: o.addYear,
        titleCell: f => Ce(f, { locale: l, format: 'YYYY', generateConfig: o })
      }
    ),
    null
  );
}
qn.displayName = 'YearBody';
qn.inheritAttrs = !1;
const rt = 10;
function Kn(e) {
  const t = fe(e),
    {
      prefixCls: n,
      operationRef: a,
      onViewDateChange: r,
      generateConfig: l,
      value: o,
      viewDate: i,
      sourceMode: c,
      onSelect: s,
      onPanelChange: d
    } = t,
    u = `${n}-year-panel`;
  a.value = {
    onKeydown: h =>
      mt(h, {
        onLeftRight: y => {
          s(l.addYear(o || i, y), 'key');
        },
        onCtrlLeftRight: y => {
          s(l.addYear(o || i, y * rt), 'key');
        },
        onUpDown: y => {
          s(l.addYear(o || i, y * xn), 'key');
        },
        onEnter: () => {
          d(c === 'date' ? 'date' : 'month', o || i);
        }
      })
  };
  const v = h => {
    const y = l.addYear(i, h * 10);
    r(y), d(null, y);
  };
  return g('div', { class: u }, [
    g(
      Un,
      O(
        O({}, t),
        {},
        {
          prefixCls: n,
          onPrevDecade: () => {
            v(-1);
          },
          onNextDecade: () => {
            v(1);
          },
          onDecadeClick: () => {
            d('decade', i);
          }
        }
      ),
      null
    ),
    g(
      qn,
      O(
        O({}, t),
        {},
        {
          prefixCls: n,
          onSelect: h => {
            d(c === 'date' ? 'date' : 'month', h), s(h, 'mouse');
          }
        }
      ),
      null
    )
  ]);
}
Kn.displayName = 'YearPanel';
Kn.inheritAttrs = !1;
function cr(e, t, n) {
  return n ? g('div', { class: `${e}-footer-extra` }, [n(t)]) : null;
}
function dr(e) {
  let {
      prefixCls: t,
      components: n = {},
      needConfirmButton: a,
      onNow: r,
      onOk: l,
      okDisabled: o,
      showNow: i,
      locale: c
    } = e,
    s,
    d;
  if (a) {
    const u = n.button || 'button';
    r &&
      i !== !1 &&
      (s = g('li', { class: `${t}-now` }, [
        g('a', { class: `${t}-now-btn`, onClick: r }, [c.now])
      ])),
      (d =
        a &&
        g('li', { class: `${t}-ok` }, [
          g(
            u,
            {
              disabled: o,
              onClick: v => {
                v.stopPropagation(), l && l();
              }
            },
            { default: () => [c.ok] }
          )
        ]));
  }
  return !s && !d ? null : g('ul', { class: `${t}-ranges` }, [s, d]);
}
function Cl() {
  return Ie({
    name: 'PickerPanel',
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      locale: Object,
      generateConfig: Object,
      value: Object,
      defaultValue: Object,
      pickerValue: Object,
      defaultPickerValue: Object,
      disabledDate: Function,
      mode: String,
      picker: { type: String, default: 'date' },
      tabindex: { type: [Number, String], default: 0 },
      showNow: { type: Boolean, default: void 0 },
      showTime: [Boolean, Object],
      showToday: Boolean,
      renderExtraFooter: Function,
      dateRender: Function,
      hideHeader: { type: Boolean, default: void 0 },
      onSelect: Function,
      onChange: Function,
      onPanelChange: Function,
      onMousedown: Function,
      onPickerValueChange: Function,
      onOk: Function,
      components: Object,
      direction: String,
      hourStep: { type: Number, default: 1 },
      minuteStep: { type: Number, default: 1 },
      secondStep: { type: Number, default: 1 }
    },
    setup(e, t) {
      let { attrs: n } = t;
      const a = B(
          () => (e.picker === 'date' && !!e.showTime) || e.picker === 'time'
        ),
        r = B(() => 24 % e.hourStep === 0),
        l = B(() => 60 % e.minuteStep === 0),
        o = B(() => 60 % e.secondStep === 0),
        i = Be(),
        {
          operationRef: c,
          onSelect: s,
          hideRanges: d,
          defaultOpenValue: u
        } = i,
        {
          inRange: v,
          panelPosition: h,
          rangedValue: y,
          hoverRangedValue: $
        } = Pt(),
        f = L({}),
        [C, p] = Ae(null, {
          value: de(e, 'value'),
          defaultValue: e.defaultValue,
          postState: b =>
            !b && u != null && u.value && e.picker === 'time' ? u.value : b
        }),
        [x, k] = Ae(null, {
          value: de(e, 'pickerValue'),
          defaultValue: e.defaultPickerValue || C.value,
          postState: b => {
            const { generateConfig: w, showTime: I, defaultValue: m } = e,
              D = w.getNow();
            return b
              ? !C.value && e.showTime
                ? typeof I == 'object'
                  ? _t(w, Array.isArray(b) ? b[0] : b, I.defaultValue || D)
                  : m
                  ? _t(w, Array.isArray(b) ? b[0] : b, m)
                  : _t(w, Array.isArray(b) ? b[0] : b, D)
                : b
              : D;
          }
        }),
        T = b => {
          k(b), e.onPickerValueChange && e.onPickerValueChange(b);
        },
        E = b => {
          const w = ol[e.picker];
          return w ? w(b) : b;
        },
        [U, z] = Ae(() => (e.picker === 'time' ? 'time' : E('date')), {
          value: de(e, 'mode')
        });
      pe(
        () => e.picker,
        () => {
          z(e.picker);
        }
      );
      const j = L(U.value),
        _ = b => {
          j.value = b;
        },
        R = (b, w) => {
          const { onPanelChange: I, generateConfig: m } = e,
            D = E(b || U.value);
          _(U.value),
            z(D),
            I && (U.value !== D || ht(m, x.value, x.value)) && I(w, D);
        },
        W = function(b, w) {
          let I =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          const {
            picker: m,
            generateConfig: D,
            onSelect: H,
            onChange: A,
            disabledDate: Q
          } = e;
          (U.value === m || I) &&
            (p(b),
            H && H(b),
            s && s(b, w),
            A && !ht(D, b, C.value) && !(Q != null && Q(b)) && A(b));
        },
        X = b =>
          f.value && f.value.onKeydown
            ? ([
                ce.LEFT,
                ce.RIGHT,
                ce.UP,
                ce.DOWN,
                ce.PAGE_UP,
                ce.PAGE_DOWN,
                ce.ENTER
              ].includes(b.which) && b.preventDefault(),
              f.value.onKeydown(b))
            : !1,
        N = b => {
          f.value && f.value.onBlur && f.value.onBlur(b);
        },
        P = () => {
          const {
              generateConfig: b,
              hourStep: w,
              minuteStep: I,
              secondStep: m
            } = e,
            D = b.getNow(),
            H = Go(
              b.getHour(D),
              b.getMinute(D),
              b.getSecond(D),
              r.value ? w : 1,
              l.value ? I : 1,
              o.value ? m : 1
            ),
            A = Za(b, D, H[0], H[1], H[2]);
          W(A, 'submit');
        },
        S = B(() => {
          const { prefixCls: b, direction: w } = e;
          return se(`${b}-panel`, {
            [`${b}-panel-has-range`]: y && y.value && y.value[0] && y.value[1],
            [`${b}-panel-has-range-hover`]:
              $ && $.value && $.value[0] && $.value[1],
            [`${b}-panel-rtl`]: w === 'rtl'
          });
        });
      return (
        Rn(
          Y(Y({}, i), {
            mode: U,
            hideHeader: B(() => {
              var b;
              return e.hideHeader !== void 0
                ? e.hideHeader
                : (b = i.hideHeader) === null || b === void 0
                ? void 0
                : b.value;
            }),
            hidePrevBtn: B(() => v.value && h.value === 'right'),
            hideNextBtn: B(() => v.value && h.value === 'left')
          })
        ),
        pe(
          () => e.value,
          () => {
            e.value && k(e.value);
          }
        ),
        () => {
          const {
            prefixCls: b = 'ant-picker',
            locale: w,
            generateConfig: I,
            disabledDate: m,
            picker: D = 'date',
            tabindex: H = 0,
            showNow: A,
            showTime: Q,
            showToday: ee,
            renderExtraFooter: ie,
            onMousedown: oe,
            onOk: q,
            components: ne
          } = e;
          c &&
            h.value !== 'right' &&
            (c.value = {
              onKeydown: X,
              onClose: () => {
                f.value && f.value.onClose && f.value.onClose();
              }
            });
          let G;
          const Z = Y(Y(Y({}, n), e), {
            operationRef: f,
            prefixCls: b,
            viewDate: x.value,
            value: C.value,
            onViewDateChange: T,
            sourceMode: j.value,
            onPanelChange: R,
            disabledDate: m
          });
          switch ((delete Z.onChange, delete Z.onSelect, U.value)) {
            case 'decade':
              G = g(
                Yn,
                O(
                  O({}, Z),
                  {},
                  {
                    onSelect: (K, te) => {
                      T(K), W(K, te);
                    }
                  }
                ),
                null
              );
              break;
            case 'year':
              G = g(
                Kn,
                O(
                  O({}, Z),
                  {},
                  {
                    onSelect: (K, te) => {
                      T(K), W(K, te);
                    }
                  }
                ),
                null
              );
              break;
            case 'month':
              G = g(
                Fn,
                O(
                  O({}, Z),
                  {},
                  {
                    onSelect: (K, te) => {
                      T(K), W(K, te);
                    }
                  }
                ),
                null
              );
              break;
            case 'quarter':
              G = g(
                zn,
                O(
                  O({}, Z),
                  {},
                  {
                    onSelect: (K, te) => {
                      T(K), W(K, te);
                    }
                  }
                ),
                null
              );
              break;
            case 'week':
              G = g(
                An,
                O(
                  O({}, Z),
                  {},
                  {
                    onSelect: (K, te) => {
                      T(K), W(K, te);
                    }
                  }
                ),
                null
              );
              break;
            case 'time':
              delete Z.showTime,
                (G = g(
                  Kt,
                  O(
                    O(O({}, Z), typeof Q == 'object' ? Q : null),
                    {},
                    {
                      onSelect: (K, te) => {
                        T(K), W(K, te);
                      }
                    }
                  ),
                  null
                ));
              break;
            default:
              Q
                ? (G = g(
                    _n,
                    O(
                      O({}, Z),
                      {},
                      {
                        onSelect: (K, te) => {
                          T(K), W(K, te);
                        }
                      }
                    ),
                    null
                  ))
                : (G = g(
                    Mt,
                    O(
                      O({}, Z),
                      {},
                      {
                        onSelect: (K, te) => {
                          T(K), W(K, te);
                        }
                      }
                    ),
                    null
                  ));
          }
          let ue, re;
          (d != null && d.value) ||
            ((ue = cr(b, U.value, ie)),
            (re = dr({
              prefixCls: b,
              components: ne,
              needConfirmButton: a.value,
              okDisabled: !C.value || (m && m(C.value)),
              locale: w,
              showNow: A,
              onNow: a.value && P,
              onOk: () => {
                C.value && (W(C.value, 'submit', !0), q && q(C.value));
              }
            })));
          let he;
          if (ee && U.value === 'date' && D === 'date' && !Q) {
            const K = I.getNow(),
              te = `${b}-today-btn`,
              we = m && m(K);
            he = g(
              'a',
              {
                class: se(te, we && `${te}-disabled`),
                'aria-disabled': we,
                onClick: () => {
                  we || W(K, 'mouse', !0);
                }
              },
              [w.today]
            );
          }
          return g(
            'div',
            {
              tabindex: H,
              class: se(S.value, n.class),
              style: n.style,
              onKeydown: X,
              onBlur: N,
              onMousedown: oe
            },
            [
              G,
              ue || re || he
                ? g('div', { class: `${b}-footer` }, [ue, re, he])
                : null
            ]
          );
        }
      );
    }
  });
}
const wl = Cl(),
  fr = e => g(wl, e),
  $l = {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: { adjustX: 1, adjustY: 1 }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: { adjustX: 1, adjustY: 1 }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: { adjustX: 0, adjustY: 1 }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: { adjustX: 0, adjustY: 1 }
    }
  };
function vr(e, t) {
  let { slots: n } = t;
  const {
      prefixCls: a,
      popupStyle: r,
      visible: l,
      dropdownClassName: o,
      dropdownAlign: i,
      transitionName: c,
      getPopupContainer: s,
      range: d,
      popupPlacement: u,
      direction: v
    } = fe(e),
    h = `${a}-dropdown`;
  return g(
    fo,
    {
      showAction: [],
      hideAction: [],
      popupPlacement: (() =>
        u !== void 0 ? u : v === 'rtl' ? 'bottomRight' : 'bottomLeft')(),
      builtinPlacements: $l,
      prefixCls: h,
      popupTransitionName: c,
      popupAlign: i,
      popupVisible: l,
      popupClassName: se(o, { [`${h}-range`]: d, [`${h}-rtl`]: v === 'rtl' }),
      popupStyle: r,
      getPopupContainer: s
    },
    { default: n.default, popup: n.popupElement }
  );
}
const gr = Ie({
  name: 'PresetPanel',
  props: {
    prefixCls: String,
    presets: { type: Array, default: () => [] },
    onClick: Function,
    onHover: Function
  },
  setup(e) {
    return () =>
      e.presets.length
        ? g('div', { class: `${e.prefixCls}-presets` }, [
            g('ul', null, [
              e.presets.map((t, n) => {
                let { label: a, value: r } = t;
                return g(
                  'li',
                  {
                    key: n,
                    onClick: l => {
                      l.stopPropagation(), e.onClick(r);
                    },
                    onMouseenter: () => {
                      var l;
                      (l = e.onHover) === null || l === void 0 || l.call(e, r);
                    },
                    onMouseleave: () => {
                      var l;
                      (l = e.onHover) === null ||
                        l === void 0 ||
                        l.call(e, null);
                    }
                  },
                  [a]
                );
              })
            ])
          ])
        : null;
  }
});
function kn(e) {
  let {
    open: t,
    value: n,
    isClickOutside: a,
    triggerOpen: r,
    forwardKeydown: l,
    onKeydown: o,
    blurToCancel: i,
    onSubmit: c,
    onCancel: s,
    onFocus: d,
    onBlur: u
  } = e;
  const v = Ee(!1),
    h = Ee(!1),
    y = Ee(!1),
    $ = Ee(!1),
    f = Ee(!1),
    C = B(() => ({
      onMousedown: () => {
        (v.value = !0), r(!0);
      },
      onKeydown: x => {
        if (
          (o(x, () => {
            f.value = !0;
          }),
          !f.value)
        ) {
          switch (x.which) {
            case ce.ENTER: {
              t.value ? c() !== !1 && (v.value = !0) : r(!0),
                x.preventDefault();
              return;
            }
            case ce.TAB: {
              v.value && t.value && !x.shiftKey
                ? ((v.value = !1), x.preventDefault())
                : !v.value &&
                  t.value &&
                  !l(x) &&
                  x.shiftKey &&
                  ((v.value = !0), x.preventDefault());
              return;
            }
            case ce.ESC: {
              (v.value = !0), s();
              return;
            }
          }
          !t.value && ![ce.SHIFT].includes(x.which) ? r(!0) : v.value || l(x);
        }
      },
      onFocus: x => {
        (v.value = !0), (h.value = !0), d && d(x);
      },
      onBlur: x => {
        if (y.value || !a(document.activeElement)) {
          y.value = !1;
          return;
        }
        i.value
          ? setTimeout(() => {
              let { activeElement: k } = document;
              for (; k && k.shadowRoot; ) k = k.shadowRoot.activeElement;
              a(k) && s();
            }, 0)
          : t.value && (r(!1), $.value && c()),
          (h.value = !1),
          u && u(x);
      }
    }));
  pe(t, () => {
    $.value = !1;
  }),
    pe(n, () => {
      $.value = !0;
    });
  const p = Ee();
  return (
    Ia(() => {
      p.value = Jo(x => {
        const k = el(x);
        if (t.value) {
          const T = a(k);
          T
            ? (!h.value || T) && r(!1)
            : ((y.value = !0),
              Xe(() => {
                y.value = !1;
              }));
        }
      });
    }),
    Mn(() => {
      p.value && p.value();
    }),
    [C, { focused: h, typing: v }]
  );
}
function Sn(e) {
  let { valueTexts: t, onTextChange: n } = e;
  const a = L('');
  function r(o) {
    (a.value = o), n(o);
  }
  function l() {
    a.value = t.value[0];
  }
  return (
    pe(
      () => [...t.value],
      function(o) {
        let i =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        o.join('||') !== i.join('||') &&
          t.value.every(c => c !== a.value) &&
          l();
      },
      { immediate: !0 }
    ),
    [a, r, l]
  );
}
function jt(e, t) {
  let { formatList: n, generateConfig: a, locale: r } = t;
  const l = So(
      () => {
        if (!e.value) return [[''], ''];
        let c = '';
        const s = [];
        for (let d = 0; d < n.value.length; d += 1) {
          const u = n.value[d],
            v = Ce(e.value, {
              generateConfig: a.value,
              locale: r.value,
              format: u
            });
          s.push(v), d === 0 && (c = v);
        }
        return [s, c];
      },
      [e, n],
      (c, s) => s[0] !== c[0] || !vo(s[1], c[1])
    ),
    o = B(() => l.value[0]),
    i = B(() => l.value[1]);
  return [o, i];
}
function Dn(e, t) {
  let { formatList: n, generateConfig: a, locale: r } = t;
  const l = L(null);
  let o;
  function i(u) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if ((Xe.cancel(o), v)) {
      l.value = u;
      return;
    }
    o = Xe(() => {
      l.value = u;
    });
  }
  const [, c] = jt(l, { formatList: n, generateConfig: a, locale: r });
  function s(u) {
    i(u);
  }
  function d() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    i(null, u);
  }
  return (
    pe(e, () => {
      d(!0);
    }),
    Mn(() => {
      Xe.cancel(o);
    }),
    [c, s, d]
  );
}
function pr(e, t) {
  return B(() =>
    e != null && e.value
      ? e.value
      : t != null && t.value
      ? (go(!1, '`ranges` is deprecated. Please use `presets` instead.'),
        Object.keys(t.value).map(a => {
          const r = t.value[a],
            l = typeof r == 'function' ? r() : r;
          return { label: a, value: l };
        }))
      : []
  );
}
function yl() {
  return Ie({
    name: 'Picker',
    inheritAttrs: !1,
    props: [
      'prefixCls',
      'id',
      'tabindex',
      'dropdownClassName',
      'dropdownAlign',
      'popupStyle',
      'transitionName',
      'generateConfig',
      'locale',
      'inputReadOnly',
      'allowClear',
      'autofocus',
      'showTime',
      'showNow',
      'showHour',
      'showMinute',
      'showSecond',
      'picker',
      'format',
      'use12Hours',
      'value',
      'defaultValue',
      'open',
      'defaultOpen',
      'defaultOpenValue',
      'suffixIcon',
      'presets',
      'clearIcon',
      'disabled',
      'disabledDate',
      'placeholder',
      'getPopupContainer',
      'panelRender',
      'inputRender',
      'onChange',
      'onOpenChange',
      'onPanelChange',
      'onFocus',
      'onBlur',
      'onMousedown',
      'onMouseup',
      'onMouseenter',
      'onMouseleave',
      'onContextmenu',
      'onClick',
      'onKeydown',
      'onSelect',
      'direction',
      'autocomplete',
      'showToday',
      'renderExtraFooter',
      'dateRender',
      'minuteStep',
      'hourStep',
      'secondStep',
      'hideDisabledOptions'
    ],
    setup(e, t) {
      let { attrs: n, expose: a } = t;
      const r = L(null),
        l = B(() => e.presets),
        o = pr(l),
        i = B(() => {
          var m;
          return (m = e.picker) !== null && m !== void 0 ? m : 'date';
        }),
        c = B(() => (i.value === 'date' && !!e.showTime) || i.value === 'time'),
        s = B(() => lr(Ja(e.format, i.value, e.showTime, e.use12Hours))),
        d = L(null),
        u = L(null),
        v = L(null),
        [h, y] = Ae(null, {
          value: de(e, 'value'),
          defaultValue: e.defaultValue
        }),
        $ = L(h.value),
        f = m => {
          $.value = m;
        },
        C = L(null),
        [p, x] = Ae(!1, {
          value: de(e, 'open'),
          defaultValue: e.defaultOpen,
          postState: m => (e.disabled ? !1 : m),
          onChange: m => {
            e.onOpenChange && e.onOpenChange(m),
              !m && C.value && C.value.onClose && C.value.onClose();
          }
        }),
        [k, T] = jt($, {
          formatList: s,
          generateConfig: de(e, 'generateConfig'),
          locale: de(e, 'locale')
        }),
        [E, U, z] = Sn({
          valueTexts: k,
          onTextChange: m => {
            const D = rr(m, {
              locale: e.locale,
              formatList: s.value,
              generateConfig: e.generateConfig
            });
            D && (!e.disabledDate || !e.disabledDate(D)) && f(D);
          }
        }),
        j = m => {
          const { onChange: D, generateConfig: H, locale: A } = e;
          f(m),
            y(m),
            D &&
              !ht(H, h.value, m) &&
              D(
                m,
                m
                  ? Ce(m, { generateConfig: H, locale: A, format: s.value[0] })
                  : ''
              );
        },
        _ = m => {
          (e.disabled && m) || x(m);
        },
        R = m =>
          p.value && C.value && C.value.onKeydown ? C.value.onKeydown(m) : !1,
        W = function() {
          e.onMouseup && e.onMouseup(...arguments),
            r.value && (r.value.focus(), _(!0));
        },
        [X, { focused: N, typing: P }] = kn({
          blurToCancel: c,
          open: p,
          value: E,
          triggerOpen: _,
          forwardKeydown: R,
          isClickOutside: m => !tr([d.value, u.value, v.value], m),
          onSubmit: () =>
            !$.value || (e.disabledDate && e.disabledDate($.value))
              ? !1
              : (j($.value), _(!1), z(), !0),
          onCancel: () => {
            _(!1), f(h.value), z();
          },
          onKeydown: (m, D) => {
            var H;
            (H = e.onKeydown) === null || H === void 0 || H.call(e, m, D);
          },
          onFocus: m => {
            var D;
            (D = e.onFocus) === null || D === void 0 || D.call(e, m);
          },
          onBlur: m => {
            var D;
            (D = e.onBlur) === null || D === void 0 || D.call(e, m);
          }
        });
      pe([p, k], () => {
        p.value ||
          (f(h.value),
          !k.value.length || k.value[0] === ''
            ? U('')
            : T.value !== E.value && z());
      }),
        pe(i, () => {
          p.value || z();
        }),
        pe(h, () => {
          f(h.value);
        });
      const [S, b, w] = Dn(E, {
          formatList: s,
          generateConfig: de(e, 'generateConfig'),
          locale: de(e, 'locale')
        }),
        I = (m, D) => {
          (D === 'submit' || (D !== 'key' && !c.value)) && (j(m), _(!1));
        };
      return (
        Rn({
          operationRef: C,
          hideHeader: B(() => i.value === 'time'),
          onSelect: I,
          open: p,
          defaultOpenValue: de(e, 'defaultOpenValue'),
          onDateMouseenter: b,
          onDateMouseleave: w
        }),
        a({
          focus: () => {
            r.value && r.value.focus();
          },
          blur: () => {
            r.value && r.value.blur();
          }
        }),
        () => {
          const {
              prefixCls: m = 'rc-picker',
              id: D,
              tabindex: H,
              dropdownClassName: A,
              dropdownAlign: Q,
              popupStyle: ee,
              transitionName: ie,
              generateConfig: oe,
              locale: q,
              inputReadOnly: ne,
              allowClear: G,
              autofocus: Z,
              picker: ue = 'date',
              defaultOpenValue: re,
              suffixIcon: he,
              clearIcon: K,
              disabled: te,
              placeholder: we,
              getPopupContainer: ye,
              panelRender: Me,
              onMousedown: We,
              onMouseenter: Se,
              onMouseleave: Fe,
              onContextmenu: Le,
              onClick: Te,
              onSelect: me,
              direction: Ne,
              autocomplete: gt = 'off'
            } = e,
            st = Y(Y(Y({}, e), n), {
              class: se({ [`${m}-panel-focused`]: !P.value }),
              style: void 0,
              pickerValue: void 0,
              onPickerValueChange: void 0,
              onChange: null
            });
          let De = g('div', { class: `${m}-panel-layout` }, [
            g(
              gr,
              {
                prefixCls: m,
                presets: o.value,
                onClick: ve => {
                  j(ve), _(!1);
                }
              },
              null
            ),
            g(
              fr,
              O(
                O({}, st),
                {},
                {
                  generateConfig: oe,
                  value: $.value,
                  locale: q,
                  tabindex: -1,
                  onSelect: ve => {
                    me == null || me(ve), f(ve);
                  },
                  direction: Ne,
                  onPanelChange: (ve, Zt) => {
                    const { onPanelChange: bt } = e;
                    w(!0), bt == null || bt(ve, Zt);
                  }
                }
              ),
              null
            )
          ]);
          Me && (De = Me(De));
          const je = g(
            'div',
            {
              class: `${m}-panel-container`,
              ref: d,
              onMousedown: ve => {
                ve.preventDefault();
              }
            },
            [De]
          );
          let Ye;
          he && (Ye = g('span', { class: `${m}-suffix` }, [he]));
          let Pe;
          G &&
            h.value &&
            !te &&
            (Pe = g(
              'span',
              {
                onMousedown: ve => {
                  ve.preventDefault(), ve.stopPropagation();
                },
                onMouseup: ve => {
                  ve.preventDefault(), ve.stopPropagation(), j(null), _(!1);
                },
                class: `${m}-clear`,
                role: 'button'
              },
              [K || g('span', { class: `${m}-clear-btn` }, null)]
            ));
          const Ze = Y(
              Y(
                Y(
                  Y(
                    {
                      id: D,
                      tabindex: H,
                      disabled: te,
                      readonly:
                        ne || typeof s.value[0] == 'function' || !P.value,
                      value: S.value || E.value,
                      onInput: ve => {
                        U(ve.target.value);
                      },
                      autofocus: Z,
                      placeholder: we,
                      ref: r,
                      title: E.value
                    },
                    X.value
                  ),
                  { size: er(ue, s.value[0], oe) }
                ),
                ir(e)
              ),
              { autocomplete: gt }
            ),
            Tt = e.inputRender ? e.inputRender(Ze) : g('input', Ze, null),
            Xt = Ne === 'rtl' ? 'bottomRight' : 'bottomLeft';
          return g(
            'div',
            {
              ref: v,
              class: se(m, n.class, {
                [`${m}-disabled`]: te,
                [`${m}-focused`]: N.value,
                [`${m}-rtl`]: Ne === 'rtl'
              }),
              style: n.style,
              onMousedown: We,
              onMouseup: W,
              onMouseenter: Se,
              onMouseleave: Fe,
              onContextmenu: Le,
              onClick: Te
            },
            [
              g(
                'div',
                {
                  class: se(`${m}-input`, {
                    [`${m}-input-placeholder`]: !!S.value
                  }),
                  ref: u
                },
                [Tt, Ye, Pe]
              ),
              g(
                vr,
                {
                  visible: p.value,
                  popupStyle: ee,
                  prefixCls: m,
                  dropdownClassName: A,
                  dropdownAlign: Q,
                  getPopupContainer: ye,
                  transitionName: ie,
                  popupPlacement: Xt,
                  direction: Ne
                },
                {
                  default: () => [
                    g(
                      'div',
                      {
                        style: {
                          pointerEvents: 'none',
                          position: 'absolute',
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0
                        }
                      },
                      null
                    )
                  ],
                  popupElement: () => je
                }
              )
            ]
          );
        }
      );
    }
  });
}
const xl = yl();
function kl(e, t) {
  let {
    picker: n,
    locale: a,
    selectedValue: r,
    disabledDate: l,
    disabled: o,
    generateConfig: i
  } = e;
  const c = B(() => J(r.value, 0)),
    s = B(() => J(r.value, 1));
  function d($) {
    return i.value.locale.getWeekFirstDate(a.value.locale, $);
  }
  function u($) {
    const f = i.value.getYear($),
      C = i.value.getMonth($);
    return f * 100 + C;
  }
  function v($) {
    const f = i.value.getYear($),
      C = $n(i.value, $);
    return f * 10 + C;
  }
  return [
    $ => {
      var f;
      if (
        l &&
        !((f = l == null ? void 0 : l.value) === null || f === void 0) &&
        f.call(l, $)
      )
        return !0;
      if (o[1] && s)
        return !Ge(i.value, $, s.value) && i.value.isAfter($, s.value);
      if (t.value[1] && s.value)
        switch (n.value) {
          case 'quarter':
            return v($) > v(s.value);
          case 'month':
            return u($) > u(s.value);
          case 'week':
            return d($) > d(s.value);
          default:
            return !Ge(i.value, $, s.value) && i.value.isAfter($, s.value);
        }
      return !1;
    },
    $ => {
      var f;
      if (!((f = l.value) === null || f === void 0) && f.call(l, $)) return !0;
      if (o[0] && c)
        return !Ge(i.value, $, s.value) && i.value.isAfter(c.value, $);
      if (t.value[0] && c.value)
        switch (n.value) {
          case 'quarter':
            return v($) < v(c.value);
          case 'month':
            return u($) < u(c.value);
          case 'week':
            return d($) < d(c.value);
          default:
            return !Ge(i.value, $, c.value) && i.value.isAfter(c.value, $);
        }
      return !1;
    }
  ];
}
function Sl(e, t, n, a) {
  const r = kt(e, n, a, 1);
  function l(o) {
    return o(e, t) ? 'same' : o(r, t) ? 'closing' : 'far';
  }
  switch (n) {
    case 'year':
      return l((o, i) => ll(a, o, i));
    case 'quarter':
    case 'month':
      return l((o, i) => qt(a, o, i));
    default:
      return l((o, i) => En(a, o, i));
  }
}
function Dl(e, t, n, a) {
  const r = J(e, 0),
    l = J(e, 1);
  if (t === 0) return r;
  if (r && l)
    switch (Sl(r, l, n, a)) {
      case 'same':
        return r;
      case 'closing':
        return r;
      default:
        return kt(l, n, a, -1);
    }
  return r;
}
function Pl(e) {
  let { values: t, picker: n, defaultDates: a, generateConfig: r } = e;
  const l = L([J(a, 0), J(a, 1)]),
    o = L(null),
    i = B(() => J(t.value, 0)),
    c = B(() => J(t.value, 1)),
    s = h =>
      l.value[h]
        ? l.value[h]
        : J(o.value, h) ||
          Dl(t.value, h, n.value, r.value) ||
          i.value ||
          c.value ||
          r.value.getNow(),
    d = L(null),
    u = L(null);
  Tn(() => {
    (d.value = s(0)), (u.value = s(1));
  });
  function v(h, y) {
    if (h) {
      let $ = Re(o.value, h, y);
      l.value = Re(l.value, null, y) || [null, null];
      const f = (y + 1) % 2;
      J(t.value, f) || ($ = Re($, h, f)), (o.value = $);
    } else (i.value || c.value) && (o.value = null);
  }
  return [d, u, v];
}
function Ml(e) {
  return zr() ? (Ur(e), !0) : !1;
}
function Tl(e) {
  return typeof e == 'function' ? e() : _e(e);
}
function hr(e) {
  var t;
  const n = Tl(e);
  return (t = n == null ? void 0 : n.$el) !== null && t !== void 0 ? t : n;
}
function Ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  qr() ? Ia(e) : t ? e() : Ra(e);
}
function Rl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = Ee(),
    a = () => (n.value = !!e());
  return a(), Ol(a, t), n;
}
var cn;
const mr = typeof window < 'u';
mr &&
  !(
    (cn = window == null ? void 0 : window.navigator) === null || cn === void 0
  ) &&
  cn.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
const Il = mr ? window : void 0;
var Nl =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var a in e)
      Object.prototype.hasOwnProperty.call(e, a) &&
        t.indexOf(a) < 0 &&
        (n[a] = e[a]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
        t.indexOf(a[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
          (n[a[r]] = e[a[r]]);
    return n;
  };
function Yl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { window: a = Il } = n,
    r = Nl(n, ['window']);
  let l;
  const o = Rl(() => a && 'ResizeObserver' in a),
    i = () => {
      l && (l.disconnect(), (l = void 0));
    },
    c = pe(
      () => hr(e),
      d => {
        i(),
          o.value && a && d && ((l = new ResizeObserver(t)), l.observe(d, r));
      },
      { immediate: !0, flush: 'post' }
    ),
    s = () => {
      i(), c();
    };
  return Ml(s), { isSupported: o, stop: s };
}
function xt(e) {
  let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { width: 0, height: 0 },
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { box: a = 'content-box' } = n,
    r = Ee(t.width),
    l = Ee(t.height);
  return (
    Yl(
      e,
      o => {
        let [i] = o;
        const c =
          a === 'border-box'
            ? i.borderBoxSize
            : a === 'content-box'
            ? i.contentBoxSize
            : i.devicePixelContentBoxSize;
        c
          ? ((r.value = c.reduce((s, d) => {
              let { inlineSize: u } = d;
              return s + u;
            }, 0)),
            (l.value = c.reduce((s, d) => {
              let { blockSize: u } = d;
              return s + u;
            }, 0)))
          : ((r.value = i.contentRect.width), (l.value = i.contentRect.height));
      },
      n
    ),
    pe(
      () => hr(e),
      o => {
        (r.value = o ? t.width : 0), (l.value = o ? t.height : 0);
      }
    ),
    { width: r, height: l }
  );
}
function ka(e, t) {
  return e && e[0] && e[1] && t.isAfter(e[0], e[1]) ? [e[1], e[0]] : e;
}
function Sa(e, t, n, a) {
  return !!(e || (a && a[t]) || n[(t + 1) % 2]);
}
function El() {
  return Ie({
    name: 'RangerPicker',
    inheritAttrs: !1,
    props: [
      'prefixCls',
      'id',
      'popupStyle',
      'dropdownClassName',
      'transitionName',
      'dropdownAlign',
      'getPopupContainer',
      'generateConfig',
      'locale',
      'placeholder',
      'autofocus',
      'disabled',
      'format',
      'picker',
      'showTime',
      'showNow',
      'showHour',
      'showMinute',
      'showSecond',
      'use12Hours',
      'separator',
      'value',
      'defaultValue',
      'defaultPickerValue',
      'open',
      'defaultOpen',
      'disabledDate',
      'disabledTime',
      'dateRender',
      'panelRender',
      'ranges',
      'allowEmpty',
      'allowClear',
      'suffixIcon',
      'clearIcon',
      'pickerRef',
      'inputReadOnly',
      'mode',
      'renderExtraFooter',
      'onChange',
      'onOpenChange',
      'onPanelChange',
      'onCalendarChange',
      'onFocus',
      'onBlur',
      'onMousedown',
      'onMouseup',
      'onMouseenter',
      'onMouseleave',
      'onClick',
      'onOk',
      'onKeydown',
      'components',
      'order',
      'direction',
      'activePickerIndex',
      'autocomplete',
      'minuteStep',
      'hourStep',
      'secondStep',
      'hideDisabledOptions',
      'disabledMinutes',
      'presets',
      'prevIcon',
      'nextIcon',
      'superPrevIcon',
      'superNextIcon'
    ],
    setup(e, t) {
      let { attrs: n, expose: a } = t;
      const r = B(
          () => (e.picker === 'date' && !!e.showTime) || e.picker === 'time'
        ),
        l = B(() => e.presets),
        o = B(() => e.ranges),
        i = pr(l, o),
        c = L({}),
        s = L(null),
        d = L(null),
        u = L(null),
        v = L(null),
        h = L(null),
        y = L(null),
        $ = L(null),
        f = L(null),
        C = B(() => lr(Ja(e.format, e.picker, e.showTime, e.use12Hours))),
        [p, x] = Ae(0, { value: de(e, 'activePickerIndex') }),
        k = L(null),
        T = B(() => {
          const { disabled: M } = e;
          return Array.isArray(M) ? M : [M || !1, M || !1];
        }),
        [E, U] = Ae(null, {
          value: de(e, 'value'),
          defaultValue: e.defaultValue,
          postState: M =>
            e.picker === 'time' && !e.order ? M : ka(M, e.generateConfig)
        }),
        [z, j, _] = Pl({
          values: E,
          picker: de(e, 'picker'),
          defaultDates: e.defaultPickerValue,
          generateConfig: de(e, 'generateConfig')
        }),
        [R, W] = Ae(E.value, {
          postState: M => {
            let F = M;
            if (T.value[0] && T.value[1]) return F;
            for (let V = 0; V < 2; V += 1)
              T.value[V] &&
                !J(F, V) &&
                !J(e.allowEmpty, V) &&
                (F = Re(F, e.generateConfig.getNow(), V));
            return F;
          }
        }),
        [X, N] = Ae([e.picker, e.picker], { value: de(e, 'mode') });
      pe(
        () => e.picker,
        () => {
          N([e.picker, e.picker]);
        }
      );
      const P = (M, F) => {
          var V;
          N(M),
            (V = e.onPanelChange) === null || V === void 0 || V.call(e, F, M);
        },
        [S, b] = kl(
          {
            picker: de(e, 'picker'),
            selectedValue: R,
            locale: de(e, 'locale'),
            disabled: T,
            disabledDate: de(e, 'disabledDate'),
            generateConfig: de(e, 'generateConfig')
          },
          c
        ),
        [w, I] = Ae(!1, {
          value: de(e, 'open'),
          defaultValue: e.defaultOpen,
          postState: M => (T.value[p.value] ? !1 : M),
          onChange: M => {
            var F;
            (F = e.onOpenChange) === null || F === void 0 || F.call(e, M),
              !M && k.value && k.value.onClose && k.value.onClose();
          }
        }),
        m = B(() => w.value && p.value === 0),
        D = B(() => w.value && p.value === 1),
        H = L(0),
        A = L(0),
        Q = L(0),
        { width: ee } = xt(s);
      pe([w, ee], () => {
        !w.value && s.value && (Q.value = ee.value);
      });
      const { width: ie } = xt(d),
        { width: oe } = xt(f),
        { width: q } = xt(u),
        { width: ne } = xt(h);
      pe(
        [p, w, ie, oe, q, ne, () => e.direction],
        () => {
          (A.value = 0),
            p.value
              ? u.value &&
                h.value &&
                ((A.value = q.value + ne.value),
                ie.value &&
                  oe.value &&
                  A.value >
                    ie.value -
                      oe.value -
                      (e.direction === 'rtl' || f.value.offsetLeft > A.value
                        ? 0
                        : f.value.offsetLeft) &&
                  (H.value = A.value))
              : p.value === 0 && (H.value = 0);
        },
        { immediate: !0 }
      );
      const G = L();
      function Z(M, F) {
        if (M)
          clearTimeout(G.value),
            (c.value[F] = !0),
            x(F),
            I(M),
            w.value || _(null, F);
        else if (p.value === F) {
          I(M);
          const V = c.value;
          G.value = setTimeout(() => {
            V === c.value && (c.value = {});
          });
        }
      }
      function ue(M) {
        Z(!0, M),
          setTimeout(() => {
            const F = [y, $][M];
            F.value && F.value.focus();
          }, 0);
      }
      function re(M, F) {
        let V = M,
          le = J(V, 0),
          $e = J(V, 1);
        const {
          generateConfig: xe,
          locale: Je,
          picker: Oe,
          order: Ct,
          onCalendarChange: et,
          allowEmpty: ut,
          onChange: be,
          showTime: ze
        } = e;
        le &&
          $e &&
          xe.isAfter(le, $e) &&
          ((Oe === 'week' && !ar(xe, Je.locale, le, $e)) ||
          (Oe === 'quarter' && !nr(xe, le, $e)) ||
          (Oe !== 'week' &&
            Oe !== 'quarter' &&
            Oe !== 'time' &&
            !(ze ? ht(xe, le, $e) : Ge(xe, le, $e)))
            ? (F === 0
                ? ((V = [le, null]), ($e = null))
                : ((le = null), (V = [null, $e])),
              (c.value = { [F]: !0 }))
            : (Oe !== 'time' || Ct !== !1) && (V = ka(V, xe))),
          W(V);
        const Ve =
            V && V[0]
              ? Ce(V[0], { generateConfig: xe, locale: Je, format: C.value[0] })
              : '',
          wt =
            V && V[1]
              ? Ce(V[1], { generateConfig: xe, locale: Je, format: C.value[0] })
              : '';
        et && et(V, [Ve, wt], { range: F === 0 ? 'start' : 'end' });
        const Ot = Sa(le, 0, T.value, ut),
          en = Sa($e, 1, T.value, ut);
        (V === null || (Ot && en)) &&
          (U(V),
          be &&
            (!ht(xe, J(E.value, 0), le) || !ht(xe, J(E.value, 1), $e)) &&
            be(V, [Ve, wt]));
        let Ue = null;
        F === 0 && !T.value[1] ? (Ue = 1) : F === 1 && !T.value[0] && (Ue = 0),
          Ue !== null &&
          Ue !== p.value &&
          (!c.value[Ue] || !J(V, Ue)) &&
          J(V, F)
            ? ue(Ue)
            : Z(!1, F);
      }
      const he = M =>
          w && k.value && k.value.onKeydown ? k.value.onKeydown(M) : !1,
        K = {
          formatList: C,
          generateConfig: de(e, 'generateConfig'),
          locale: de(e, 'locale')
        },
        [te, we] = jt(
          B(() => J(R.value, 0)),
          K
        ),
        [ye, Me] = jt(
          B(() => J(R.value, 1)),
          K
        ),
        We = (M, F) => {
          const V = rr(M, {
            locale: e.locale,
            formatList: C.value,
            generateConfig: e.generateConfig
          });
          V && !(F === 0 ? S : b)(V) && (W(Re(R.value, V, F)), _(V, F));
        },
        [Se, Fe, Le] = Sn({ valueTexts: te, onTextChange: M => We(M, 0) }),
        [Te, me, Ne] = Sn({ valueTexts: ye, onTextChange: M => We(M, 1) }),
        [gt, st] = pa(null),
        [De, je] = pa(null),
        [Ye, Pe, Ze] = Dn(Se, K),
        [Tt, Xt, ve] = Dn(Te, K),
        Zt = M => {
          je(Re(R.value, M, p.value)), p.value === 0 ? Pe(M) : Xt(M);
        },
        bt = () => {
          je(Re(R.value, null, p.value)), p.value === 0 ? Ze() : ve();
        },
        Zn = (M, F) => ({
          forwardKeydown: he,
          onBlur: V => {
            var le;
            (le = e.onBlur) === null || le === void 0 || le.call(e, V);
          },
          isClickOutside: V => !tr([d.value, u.value, v.value, s.value], V),
          onFocus: V => {
            var le;
            x(M), (le = e.onFocus) === null || le === void 0 || le.call(e, V);
          },
          triggerOpen: V => {
            Z(V, M);
          },
          onSubmit: () => {
            if (!R.value || (e.disabledDate && e.disabledDate(R.value[M])))
              return !1;
            re(R.value, M), F();
          },
          onCancel: () => {
            Z(!1, M), W(E.value), F();
          }
        }),
        [Sr, { focused: Jn, typing: ea }] = kn(
          Y(Y({}, Zn(0, Le)), {
            blurToCancel: r,
            open: m,
            value: Se,
            onKeydown: (M, F) => {
              var V;
              (V = e.onKeydown) === null || V === void 0 || V.call(e, M, F);
            }
          })
        ),
        [Dr, { focused: ta, typing: na }] = kn(
          Y(Y({}, Zn(1, Ne)), {
            blurToCancel: r,
            open: D,
            value: Te,
            onKeydown: (M, F) => {
              var V;
              (V = e.onKeydown) === null || V === void 0 || V.call(e, M, F);
            }
          })
        ),
        Pr = M => {
          var F;
          (F = e.onClick) === null || F === void 0 || F.call(e, M),
            !w.value &&
              !y.value.contains(M.target) &&
              !$.value.contains(M.target) &&
              (T.value[0] ? T.value[1] || ue(1) : ue(0));
        },
        Mr = M => {
          var F;
          (F = e.onMousedown) === null || F === void 0 || F.call(e, M),
            w.value &&
              (Jn.value || ta.value) &&
              !y.value.contains(M.target) &&
              !$.value.contains(M.target) &&
              M.preventDefault();
        },
        Tr = B(() => {
          var M;
          return !((M = E.value) === null || M === void 0) && M[0]
            ? Ce(E.value[0], {
                locale: e.locale,
                format: 'YYYYMMDDHHmmss',
                generateConfig: e.generateConfig
              })
            : '';
        }),
        Or = B(() => {
          var M;
          return !((M = E.value) === null || M === void 0) && M[1]
            ? Ce(E.value[1], {
                locale: e.locale,
                format: 'YYYYMMDDHHmmss',
                generateConfig: e.generateConfig
              })
            : '';
        });
      pe([w, te, ye], () => {
        w.value ||
          (W(E.value),
          !te.value.length || te.value[0] === ''
            ? Fe('')
            : we.value !== Se.value && Le(),
          !ye.value.length || ye.value[0] === ''
            ? me('')
            : Me.value !== Te.value && Ne());
      }),
        pe([Tr, Or], () => {
          W(E.value);
        }),
        a({
          focus: () => {
            y.value && y.value.focus();
          },
          blur: () => {
            y.value && y.value.blur(), $.value && $.value.blur();
          }
        });
      const Rr = B(() =>
        w.value &&
        De.value &&
        De.value[0] &&
        De.value[1] &&
        e.generateConfig.isAfter(De.value[1], De.value[0])
          ? De.value
          : null
      );
      function Jt() {
        let M =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          F =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          generateConfig: V,
          showTime: le,
          dateRender: $e,
          direction: xe,
          disabledTime: Je,
          prefixCls: Oe,
          locale: Ct
        } = e;
        let et = le;
        if (le && typeof le == 'object' && le.defaultValue) {
          const be = le.defaultValue;
          et = Y(Y({}, le), { defaultValue: J(be, p.value) || void 0 });
        }
        let ut = null;
        return (
          $e &&
            (ut = be => {
              let { current: ze, today: Ve } = be;
              return $e({
                current: ze,
                today: Ve,
                info: { range: p.value ? 'end' : 'start' }
              });
            }),
          g(
            gl,
            {
              value: {
                inRange: !0,
                panelPosition: M,
                rangedValue: gt.value || R.value,
                hoverRangedValue: Rr.value
              }
            },
            {
              default: () => [
                g(
                  fr,
                  O(
                    O(O({}, e), F),
                    {},
                    {
                      dateRender: ut,
                      showTime: et,
                      mode: X.value[p.value],
                      generateConfig: V,
                      style: void 0,
                      direction: xe,
                      disabledDate: p.value === 0 ? S : b,
                      disabledTime: be =>
                        Je ? Je(be, p.value === 0 ? 'start' : 'end') : !1,
                      class: se({
                        [`${Oe}-panel-focused`]:
                          p.value === 0 ? !ea.value : !na.value
                      }),
                      value: J(R.value, p.value),
                      locale: Ct,
                      tabIndex: -1,
                      onPanelChange: (be, ze) => {
                        p.value === 0 && Ze(!0),
                          p.value === 1 && ve(!0),
                          P(Re(X.value, ze, p.value), Re(R.value, be, p.value));
                        let Ve = be;
                        M === 'right' &&
                          X.value[p.value] === ze &&
                          (Ve = kt(Ve, ze, V, -1)),
                          _(Ve, p.value);
                      },
                      onOk: null,
                      onSelect: void 0,
                      onChange: void 0,
                      defaultValue:
                        p.value === 0 ? J(R.value, 1) : J(R.value, 0)
                    }
                  ),
                  null
                )
              ]
            }
          )
        );
      }
      const Ir = (M, F) => {
        const V = Re(R.value, M, p.value);
        F === 'submit' || (F !== 'key' && !r.value)
          ? (re(V, p.value), p.value === 0 ? Ze() : ve())
          : W(V);
      };
      return (
        Rn({
          operationRef: k,
          hideHeader: B(() => e.picker === 'time'),
          onDateMouseenter: Zt,
          onDateMouseleave: bt,
          hideRanges: B(() => !0),
          onSelect: Ir,
          open: w
        }),
        () => {
          const {
              prefixCls: M = 'rc-picker',
              id: F,
              popupStyle: V,
              dropdownClassName: le,
              transitionName: $e,
              dropdownAlign: xe,
              getPopupContainer: Je,
              generateConfig: Oe,
              locale: Ct,
              placeholder: et,
              autofocus: ut,
              picker: be = 'date',
              showTime: ze,
              separator: Ve = '~',
              disabledDate: wt,
              panelRender: Ot,
              allowClear: en,
              suffixIcon: tn,
              clearIcon: Ue,
              inputReadOnly: nn,
              renderExtraFooter: Nr,
              onMouseenter: Yr,
              onMouseleave: Er,
              onMouseup: Hr,
              onOk: aa,
              components: Vr,
              direction: $t,
              autocomplete: ra = 'off'
            } = e,
            _r =
              $t === 'rtl'
                ? { right: `${A.value}px` }
                : { left: `${A.value}px` };
          function Ar() {
            let ke;
            const tt = cr(M, X.value[p.value], Nr),
              sa = dr({
                prefixCls: M,
                components: Vr,
                needConfirmButton: r.value,
                okDisabled:
                  !J(R.value, p.value) || (wt && wt(R.value[p.value])),
                locale: Ct,
                onOk: () => {
                  J(R.value, p.value) &&
                    (re(R.value, p.value), aa && aa(R.value));
                }
              });
            if (be !== 'time' && !ze) {
              const nt = p.value === 0 ? z.value : j.value,
                Fr = kt(nt, be, Oe),
                ln = X.value[p.value] === be,
                ua = Jt(ln ? 'left' : !1, {
                  pickerValue: nt,
                  onPickerValueChange: sn => {
                    _(sn, p.value);
                  }
                }),
                ca = Jt('right', {
                  pickerValue: Fr,
                  onPickerValueChange: sn => {
                    _(kt(sn, be, Oe, -1), p.value);
                  }
                });
              $t === 'rtl'
                ? (ke = g(Dt, null, [ca, ln && ua]))
                : (ke = g(Dt, null, [ua, ln && ca]));
            } else ke = Jt();
            let on = g('div', { class: `${M}-panel-layout` }, [
              g(
                gr,
                {
                  prefixCls: M,
                  presets: i.value,
                  onClick: nt => {
                    re(nt, null), Z(!1, p.value);
                  },
                  onHover: nt => {
                    st(nt);
                  }
                },
                null
              ),
              g('div', null, [
                g('div', { class: `${M}-panels` }, [ke]),
                (tt || sa) && g('div', { class: `${M}-footer` }, [tt, sa])
              ])
            ]);
            return (
              Ot && (on = Ot(on)),
              g(
                'div',
                {
                  class: `${M}-panel-container`,
                  style: { marginLeft: `${H.value}px` },
                  ref: d,
                  onMousedown: nt => {
                    nt.preventDefault();
                  }
                },
                [on]
              )
            );
          }
          const Br = g(
            'div',
            {
              class: se(`${M}-range-wrapper`, `${M}-${be}-range-wrapper`),
              style: { minWidth: `${Q.value}px` }
            },
            [
              g('div', { ref: f, class: `${M}-range-arrow`, style: _r }, null),
              Ar()
            ]
          );
          let oa;
          tn && (oa = g('span', { class: `${M}-suffix` }, [tn]));
          let la;
          en &&
            ((J(E.value, 0) && !T.value[0]) ||
              (J(E.value, 1) && !T.value[1])) &&
            (la = g(
              'span',
              {
                onMousedown: ke => {
                  ke.preventDefault(), ke.stopPropagation();
                },
                onMouseup: ke => {
                  ke.preventDefault(), ke.stopPropagation();
                  let tt = E.value;
                  T.value[0] || (tt = Re(tt, null, 0)),
                    T.value[1] || (tt = Re(tt, null, 1)),
                    re(tt, null),
                    Z(!1, p.value);
                },
                class: `${M}-clear`
              },
              [Ue || g('span', { class: `${M}-clear-btn` }, null)]
            ));
          const ia = { size: er(be, C.value[0], Oe) };
          let an = 0,
            rn = 0;
          u.value &&
            v.value &&
            h.value &&
            (p.value === 0
              ? (rn = u.value.offsetWidth)
              : ((an = A.value), (rn = v.value.offsetWidth)));
          const Wr = $t === 'rtl' ? { right: `${an}px` } : { left: `${an}px` };
          return g(
            'div',
            O(
              {
                ref: s,
                class: se(M, `${M}-range`, n.class, {
                  [`${M}-disabled`]: T.value[0] && T.value[1],
                  [`${M}-focused`]: p.value === 0 ? Jn.value : ta.value,
                  [`${M}-rtl`]: $t === 'rtl'
                }),
                style: n.style,
                onClick: Pr,
                onMouseenter: Yr,
                onMouseleave: Er,
                onMousedown: Mr,
                onMouseup: Hr
              },
              ir(e)
            ),
            [
              g(
                'div',
                {
                  class: se(`${M}-input`, {
                    [`${M}-input-active`]: p.value === 0,
                    [`${M}-input-placeholder`]: !!Ye.value
                  }),
                  ref: u
                },
                [
                  g(
                    'input',
                    O(
                      O(
                        O(
                          {
                            id: F,
                            disabled: T.value[0],
                            readonly:
                              nn ||
                              typeof C.value[0] == 'function' ||
                              !ea.value,
                            value: Ye.value || Se.value,
                            onInput: ke => {
                              Fe(ke.target.value);
                            },
                            autofocus: ut,
                            placeholder: J(et, 0) || '',
                            ref: y
                          },
                          Sr.value
                        ),
                        ia
                      ),
                      {},
                      { autocomplete: ra }
                    ),
                    null
                  )
                ]
              ),
              g('div', { class: `${M}-range-separator`, ref: h }, [Ve]),
              g(
                'div',
                {
                  class: se(`${M}-input`, {
                    [`${M}-input-active`]: p.value === 1,
                    [`${M}-input-placeholder`]: !!Tt.value
                  }),
                  ref: v
                },
                [
                  g(
                    'input',
                    O(
                      O(
                        O(
                          {
                            disabled: T.value[1],
                            readonly:
                              nn ||
                              typeof C.value[0] == 'function' ||
                              !na.value,
                            value: Tt.value || Te.value,
                            onInput: ke => {
                              me(ke.target.value);
                            },
                            placeholder: J(et, 1) || '',
                            ref: $
                          },
                          Dr.value
                        ),
                        ia
                      ),
                      {},
                      { autocomplete: ra }
                    ),
                    null
                  )
                ]
              ),
              g(
                'div',
                {
                  class: `${M}-active-bar`,
                  style: Y(Y({}, Wr), {
                    width: `${rn}px`,
                    position: 'absolute'
                  })
                },
                null
              ),
              oa,
              la,
              g(
                vr,
                {
                  visible: w.value,
                  popupStyle: V,
                  prefixCls: M,
                  dropdownClassName: le,
                  dropdownAlign: xe,
                  getPopupContainer: Je,
                  transitionName: $e,
                  range: !0,
                  direction: $t
                },
                {
                  default: () => [
                    g(
                      'div',
                      {
                        style: {
                          pointerEvents: 'none',
                          position: 'absolute',
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0
                        }
                      },
                      null
                    )
                  ],
                  popupElement: () => Br
                }
              )
            ]
          );
        }
      );
    }
  });
}
const Hl = El(),
  Vl = Hl,
  dn = (e, t, n, a) => {
    const { lineHeight: r } = e,
      l = Math.floor(n * r) + 2,
      o = Math.max((t - l) / 2, 0),
      i = Math.max(t - l - o, 0);
    return { padding: `${o}px ${a}px ${i}px` };
  },
  _l = e => {
    const {
      componentCls: t,
      pickerCellCls: n,
      pickerCellInnerCls: a,
      pickerPanelCellHeight: r,
      motionDurationSlow: l,
      borderRadiusSM: o,
      motionDurationMid: i,
      controlItemBgHover: c,
      lineWidth: s,
      lineType: d,
      colorPrimary: u,
      controlItemBgActive: v,
      colorTextLightSolid: h,
      controlHeightSM: y,
      pickerDateHoverRangeBorderColor: $,
      pickerCellBorderGap: f,
      pickerBasicCellHoverWithRangeColor: C,
      pickerPanelCellWidth: p,
      colorTextDisabled: x,
      colorBgContainerDisabled: k
    } = e;
    return {
      '&::before': {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1,
        height: r,
        transform: 'translateY(-50%)',
        transition: `all ${l}`,
        content: '""'
      },
      [a]: {
        position: 'relative',
        zIndex: 2,
        display: 'inline-block',
        minWidth: r,
        height: r,
        lineHeight: `${r}px`,
        borderRadius: o,
        transition: `background ${i}, border ${i}`
      },
      [`&:hover:not(${n}-in-view),
    &:hover:not(${n}-selected):not(${n}-range-start):not(${n}-range-end):not(${n}-range-hover-start):not(${n}-range-hover-end)`]: {
        [a]: { background: c }
      },
      [`&-in-view${n}-today ${a}`]: {
        '&::before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 1,
          border: `${s}px ${d} ${u}`,
          borderRadius: o,
          content: '""'
        }
      },
      [`&-in-view${n}-in-range`]: {
        position: 'relative',
        '&::before': { background: v }
      },
      [`&-in-view${n}-selected ${a},
      &-in-view${n}-range-start ${a},
      &-in-view${n}-range-end ${a}`]: { color: h, background: u },
      [`&-in-view${n}-range-start:not(${n}-range-start-single),
      &-in-view${n}-range-end:not(${n}-range-end-single)`]: {
        '&::before': { background: v }
      },
      [`&-in-view${n}-range-start::before`]: { insetInlineStart: '50%' },
      [`&-in-view${n}-range-end::before`]: { insetInlineEnd: '50%' },
      [`&-in-view${n}-range-hover-start:not(${n}-in-range):not(${n}-range-start):not(${n}-range-end),
      &-in-view${n}-range-hover-end:not(${n}-in-range):not(${n}-range-start):not(${n}-range-end),
      &-in-view${n}-range-hover-start${n}-range-start-single,
      &-in-view${n}-range-hover-start${n}-range-start${n}-range-end${n}-range-end-near-hover,
      &-in-view${n}-range-hover-end${n}-range-start${n}-range-end${n}-range-start-near-hover,
      &-in-view${n}-range-hover-end${n}-range-end-single,
      &-in-view${n}-range-hover:not(${n}-in-range)`]: {
        '&::after': {
          position: 'absolute',
          top: '50%',
          zIndex: 0,
          height: y,
          borderTop: `${s}px dashed ${$}`,
          borderBottom: `${s}px dashed ${$}`,
          transform: 'translateY(-50%)',
          transition: `all ${l}`,
          content: '""'
        }
      },
      '&-range-hover-start::after,\n      &-range-hover-end::after,\n      &-range-hover::after': {
        insetInlineEnd: 0,
        insetInlineStart: f
      },
      [`&-in-view${n}-in-range${n}-range-hover::before,
      &-in-view${n}-range-start${n}-range-hover::before,
      &-in-view${n}-range-end${n}-range-hover::before,
      &-in-view${n}-range-start:not(${n}-range-start-single)${n}-range-hover-start::before,
      &-in-view${n}-range-end:not(${n}-range-end-single)${n}-range-hover-end::before,
      ${t}-panel
      > :not(${t}-date-panel)
      &-in-view${n}-in-range${n}-range-hover-start::before,
      ${t}-panel
      > :not(${t}-date-panel)
      &-in-view${n}-in-range${n}-range-hover-end::before`]: { background: C },
      [`&-in-view${n}-range-start:not(${n}-range-start-single):not(${n}-range-end) ${a}`]: {
        borderStartStartRadius: o,
        borderEndStartRadius: o,
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      },
      [`&-in-view${n}-range-end:not(${n}-range-end-single):not(${n}-range-start) ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        borderStartEndRadius: o,
        borderEndEndRadius: o
      },
      [`&-range-hover${n}-range-end::after`]: { insetInlineStart: '50%' },
      [`tr > &-in-view${n}-range-hover:first-child::after,
      tr > &-in-view${n}-range-hover-end:first-child::after,
      &-in-view${n}-start${n}-range-hover-edge-start${n}-range-hover-edge-start-near-range::after,
      &-in-view${n}-range-hover-edge-start:not(${n}-range-hover-edge-start-near-range)::after,
      &-in-view${n}-range-hover-start::after`]: {
        insetInlineStart: (p - r) / 2,
        borderInlineStart: `${s}px dashed ${$}`,
        borderStartStartRadius: s,
        borderEndStartRadius: s
      },
      [`tr > &-in-view${n}-range-hover:last-child::after,
      tr > &-in-view${n}-range-hover-start:last-child::after,
      &-in-view${n}-end${n}-range-hover-edge-end${n}-range-hover-edge-end-near-range::after,
      &-in-view${n}-range-hover-edge-end:not(${n}-range-hover-edge-end-near-range)::after,
      &-in-view${n}-range-hover-end::after`]: {
        insetInlineEnd: (p - r) / 2,
        borderInlineEnd: `${s}px dashed ${$}`,
        borderStartEndRadius: s,
        borderEndEndRadius: s
      },
      '&-disabled': {
        color: x,
        pointerEvents: 'none',
        [a]: { background: 'transparent' },
        '&::before': { background: k }
      },
      [`&-disabled${n}-today ${a}::before`]: { borderColor: x }
    };
  },
  Al = e => {
    const {
        componentCls: t,
        pickerCellInnerCls: n,
        pickerYearMonthCellWidth: a,
        pickerControlIconSize: r,
        pickerPanelCellWidth: l,
        paddingSM: o,
        paddingXS: i,
        paddingXXS: c,
        colorBgContainer: s,
        lineWidth: d,
        lineType: u,
        borderRadiusLG: v,
        colorPrimary: h,
        colorTextHeading: y,
        colorSplit: $,
        pickerControlIconBorderWidth: f,
        colorIcon: C,
        pickerTextHeight: p,
        motionDurationMid: x,
        colorIconHover: k,
        fontWeightStrong: T,
        pickerPanelCellHeight: E,
        pickerCellPaddingVertical: U,
        colorTextDisabled: z,
        colorText: j,
        fontSize: _,
        pickerBasicCellHoverWithRangeColor: R,
        motionDurationSlow: W,
        pickerPanelWithoutTimeCellHeight: X,
        pickerQuarterPanelContentHeight: N,
        colorLink: P,
        colorLinkActive: S,
        colorLinkHover: b,
        pickerDateHoverRangeBorderColor: w,
        borderRadiusSM: I,
        colorTextLightSolid: m,
        borderRadius: D,
        controlItemBgHover: H,
        pickerTimePanelColumnHeight: A,
        pickerTimePanelColumnWidth: Q,
        pickerTimePanelCellHeight: ee,
        controlItemBgActive: ie,
        marginXXS: oe
      } = e,
      q = l * 7 + o * 2 + 4,
      ne = (q - i * 2) / 3 - a - o;
    return {
      [t]: {
        '&-panel': {
          display: 'inline-flex',
          flexDirection: 'column',
          textAlign: 'center',
          background: s,
          border: `${d}px ${u} ${$}`,
          borderRadius: v,
          outline: 'none',
          '&-focused': { borderColor: h },
          '&-rtl': {
            direction: 'rtl',
            [`${t}-prev-icon,
              ${t}-super-prev-icon`]: { transform: 'rotate(45deg)' },
            [`${t}-next-icon,
              ${t}-super-next-icon`]: { transform: 'rotate(-135deg)' }
          }
        },
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel': {
          display: 'flex',
          flexDirection: 'column',
          width: q
        },
        '&-header': {
          display: 'flex',
          padding: `0 ${i}px`,
          color: y,
          borderBottom: `${d}px ${u} ${$}`,
          '> *': { flex: 'none' },
          button: {
            padding: 0,
            color: C,
            lineHeight: `${p}px`,
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            transition: `color ${x}`
          },
          '> button': {
            minWidth: '1.6em',
            fontSize: _,
            '&:hover': { color: k }
          },
          '&-view': {
            flex: 'auto',
            fontWeight: T,
            lineHeight: `${p}px`,
            button: {
              color: 'inherit',
              fontWeight: 'inherit',
              verticalAlign: 'top',
              '&:not(:first-child)': { marginInlineStart: i },
              '&:hover': { color: h }
            }
          }
        },
        '&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon': {
          position: 'relative',
          display: 'inline-block',
          width: r,
          height: r,
          '&::before': {
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            display: 'inline-block',
            width: r,
            height: r,
            border: '0 solid currentcolor',
            borderBlockStartWidth: f,
            borderBlockEndWidth: 0,
            borderInlineStartWidth: f,
            borderInlineEndWidth: 0,
            content: '""'
          }
        },
        '&-super-prev-icon,\n        &-super-next-icon': {
          '&::after': {
            position: 'absolute',
            top: Math.ceil(r / 2),
            insetInlineStart: Math.ceil(r / 2),
            display: 'inline-block',
            width: r,
            height: r,
            border: '0 solid currentcolor',
            borderBlockStartWidth: f,
            borderBlockEndWidth: 0,
            borderInlineStartWidth: f,
            borderInlineEndWidth: 0,
            content: '""'
          }
        },
        '&-prev-icon,\n        &-super-prev-icon': {
          transform: 'rotate(-45deg)'
        },
        '&-next-icon,\n        &-super-next-icon': {
          transform: 'rotate(135deg)'
        },
        '&-content': {
          width: '100%',
          tableLayout: 'fixed',
          borderCollapse: 'collapse',
          'th, td': { position: 'relative', minWidth: E, fontWeight: 'normal' },
          th: { height: E + U * 2, color: j, verticalAlign: 'middle' }
        },
        '&-cell': Y(
          {
            padding: `${U}px 0`,
            color: z,
            cursor: 'pointer',
            '&-in-view': { color: j }
          },
          _l(e)
        ),
        [`&-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-start ${n},
        &-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-end ${n}`]: {
          '&::after': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            zIndex: -1,
            background: R,
            transition: `all ${W}`,
            content: '""'
          }
        },
        [`&-date-panel
        ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-start
        ${n}::after`]: { insetInlineEnd: -(l - E) / 2, insetInlineStart: 0 },
        [`&-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-end ${n}::after`]: {
          insetInlineEnd: 0,
          insetInlineStart: -(l - E) / 2
        },
        [`&-range-hover${t}-range-start::after`]: { insetInlineEnd: '50%' },
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel': {
          [`${t}-content`]: { height: X * 4 },
          [n]: { padding: `0 ${i}px` }
        },
        '&-quarter-panel': { [`${t}-content`]: { height: N } },
        [`&-panel ${t}-footer`]: { borderTop: `${d}px ${u} ${$}` },
        '&-footer': {
          width: 'min-content',
          minWidth: '100%',
          lineHeight: `${p - 2 * d}px`,
          textAlign: 'center',
          '&-extra': {
            padding: `0 ${o}`,
            lineHeight: `${p - 2 * d}px`,
            textAlign: 'start',
            '&:not(:last-child)': { borderBottom: `${d}px ${u} ${$}` }
          }
        },
        '&-now': { textAlign: 'start' },
        '&-today-btn': {
          color: P,
          '&:hover': { color: b },
          '&:active': { color: S },
          [`&${t}-today-btn-disabled`]: { color: z, cursor: 'not-allowed' }
        },
        '&-decade-panel': {
          [n]: { padding: `0 ${i / 2}px` },
          [`${t}-cell::before`]: { display: 'none' }
        },
        '&-year-panel,\n        &-quarter-panel,\n        &-month-panel': {
          [`${t}-body`]: { padding: `0 ${i}px` },
          [n]: { width: a },
          [`${t}-cell-range-hover-start::after`]: {
            insetInlineStart: ne,
            borderInlineStart: `${d}px dashed ${w}`,
            borderStartStartRadius: I,
            borderBottomStartRadius: I,
            borderStartEndRadius: 0,
            borderBottomEndRadius: 0,
            [`${t}-panel-rtl &`]: {
              insetInlineEnd: ne,
              borderInlineEnd: `${d}px dashed ${w}`,
              borderStartStartRadius: 0,
              borderBottomStartRadius: 0,
              borderStartEndRadius: I,
              borderBottomEndRadius: I
            }
          },
          [`${t}-cell-range-hover-end::after`]: {
            insetInlineEnd: ne,
            borderInlineEnd: `${d}px dashed ${w}`,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            borderStartEndRadius: D,
            borderEndEndRadius: D,
            [`${t}-panel-rtl &`]: {
              insetInlineStart: ne,
              borderInlineStart: `${d}px dashed ${w}`,
              borderStartStartRadius: D,
              borderEndStartRadius: D,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          }
        },
        '&-week-panel': {
          [`${t}-body`]: { padding: `${i}px ${o}px` },
          [`${t}-cell`]: {
            [`&:hover ${n},
            &-selected ${n},
            ${n}`]: { background: 'transparent !important' }
          },
          '&-row': {
            td: {
              transition: `background ${x}`,
              '&:first-child': {
                borderStartStartRadius: I,
                borderEndStartRadius: I
              },
              '&:last-child': { borderStartEndRadius: I, borderEndEndRadius: I }
            },
            '&:hover td': { background: H },
            '&-selected td,\n            &-selected:hover td': {
              background: h,
              [`&${t}-cell-week`]: {
                color: new Lt(m).setAlpha(0.5).toHexString()
              },
              [`&${t}-cell-today ${n}::before`]: { borderColor: m },
              [n]: { color: m }
            }
          }
        },
        '&-date-panel': {
          [`${t}-body`]: { padding: `${i}px ${o}px` },
          [`${t}-content`]: { width: l * 7, th: { width: l } }
        },
        '&-datetime-panel': {
          display: 'flex',
          [`${t}-time-panel`]: { borderInlineStart: `${d}px ${u} ${$}` },
          [`${t}-date-panel,
          ${t}-time-panel`]: { transition: `opacity ${W}` },
          '&-active': {
            [`${t}-date-panel,
            ${t}-time-panel`]: { opacity: 0.3, '&-active': { opacity: 1 } }
          }
        },
        '&-time-panel': {
          width: 'auto',
          minWidth: 'auto',
          direction: 'ltr',
          [`${t}-content`]: { display: 'flex', flex: 'auto', height: A },
          '&-column': {
            flex: '1 0 auto',
            width: Q,
            margin: `${c}px 0`,
            padding: 0,
            overflowY: 'hidden',
            textAlign: 'start',
            listStyle: 'none',
            transition: `background ${x}`,
            overflowX: 'hidden',
            '&::after': { display: 'block', height: A - ee, content: '""' },
            '&:not(:first-child)': { borderInlineStart: `${d}px ${u} ${$}` },
            '&-active': { background: new Lt(ie).setAlpha(0.2).toHexString() },
            '&:hover': { overflowY: 'auto' },
            '> li': {
              margin: 0,
              padding: 0,
              [`&${t}-time-panel-cell`]: {
                marginInline: oe,
                [`${t}-time-panel-cell-inner`]: {
                  display: 'block',
                  width: Q - 2 * oe,
                  height: ee,
                  margin: 0,
                  paddingBlock: 0,
                  paddingInlineEnd: 0,
                  paddingInlineStart: (Q - ee) / 2,
                  color: j,
                  lineHeight: `${ee}px`,
                  borderRadius: I,
                  cursor: 'pointer',
                  transition: `background ${x}`,
                  '&:hover': { background: H }
                },
                '&-selected': {
                  [`${t}-time-panel-cell-inner`]: { background: ie }
                },
                '&-disabled': {
                  [`${t}-time-panel-cell-inner`]: {
                    color: z,
                    background: 'transparent',
                    cursor: 'not-allowed'
                  }
                }
              }
            }
          }
        },
        [`&-datetime-panel ${t}-time-panel-column:after`]: {
          height: A - ee + c * 2
        }
      }
    };
  },
  Bl = e => {
    const {
      componentCls: t,
      colorBgContainer: n,
      colorError: a,
      colorErrorOutline: r,
      colorWarning: l,
      colorWarningOutline: o
    } = e;
    return {
      [t]: {
        [`&-status-error${t}`]: {
          '&, &:not([disabled]):hover': { backgroundColor: n, borderColor: a },
          '&-focused, &:focus': Y(
            {},
            bn(
              Ft(e, {
                inputBorderActiveColor: a,
                inputBorderHoverColor: a,
                controlOutline: r
              })
            )
          ),
          [`${t}-active-bar`]: { background: a }
        },
        [`&-status-warning${t}`]: {
          '&, &:not([disabled]):hover': { backgroundColor: n, borderColor: l },
          '&-focused, &:focus': Y(
            {},
            bn(
              Ft(e, {
                inputBorderActiveColor: l,
                inputBorderHoverColor: l,
                controlOutline: o
              })
            )
          ),
          [`${t}-active-bar`]: { background: l }
        }
      }
    };
  },
  Wl = e => {
    const {
      componentCls: t,
      antCls: n,
      boxShadowPopoverArrow: a,
      controlHeight: r,
      fontSize: l,
      inputPaddingHorizontal: o,
      colorBgContainer: i,
      lineWidth: c,
      lineType: s,
      colorBorder: d,
      borderRadius: u,
      motionDurationMid: v,
      colorBgContainerDisabled: h,
      colorTextDisabled: y,
      colorTextPlaceholder: $,
      controlHeightLG: f,
      fontSizeLG: C,
      controlHeightSM: p,
      inputPaddingHorizontalSM: x,
      paddingXS: k,
      marginXS: T,
      colorTextDescription: E,
      lineWidthBold: U,
      lineHeight: z,
      colorPrimary: j,
      motionDurationSlow: _,
      zIndexPopup: R,
      paddingXXS: W,
      paddingSM: X,
      pickerTextHeight: N,
      controlItemBgActive: P,
      colorPrimaryBorder: S,
      sizePopupArrow: b,
      borderRadiusXS: w,
      borderRadiusOuter: I,
      colorBgElevated: m,
      borderRadiusLG: D,
      boxShadowSecondary: H,
      borderRadiusSM: A,
      colorSplit: Q,
      controlItemBgHover: ee,
      presetsWidth: ie,
      presetsMaxWidth: oe
    } = e;
    return [
      {
        [t]: Y(Y(Y({}, hn(e)), dn(e, r, l, o)), {
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          background: i,
          lineHeight: 1,
          border: `${c}px ${s} ${d}`,
          borderRadius: u,
          transition: `border ${v}, box-shadow ${v}`,
          '&:hover, &-focused': Y({}, oo(e)),
          '&-focused': Y({}, bn(e)),
          [`&${t}-disabled`]: {
            background: h,
            borderColor: d,
            cursor: 'not-allowed',
            [`${t}-suffix`]: { color: y }
          },
          [`&${t}-borderless`]: {
            backgroundColor: 'transparent !important',
            borderColor: 'transparent !important',
            boxShadow: 'none !important'
          },
          [`${t}-input`]: {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            width: '100%',
            '> input': Y(Y({}, lo(e)), {
              flex: 'auto',
              minWidth: 1,
              height: 'auto',
              padding: 0,
              background: 'transparent',
              border: 0,
              '&:focus': { boxShadow: 'none' },
              '&[disabled]': { background: 'transparent' }
            }),
            '&:hover': { [`${t}-clear`]: { opacity: 1 } },
            '&-placeholder': { '> input': { color: $ } }
          },
          '&-large': Y(Y({}, dn(e, f, C, o)), {
            [`${t}-input > input`]: { fontSize: C }
          }),
          '&-small': Y({}, dn(e, p, l, x)),
          [`${t}-suffix`]: {
            display: 'flex',
            flex: 'none',
            alignSelf: 'center',
            marginInlineStart: k / 2,
            color: y,
            lineHeight: 1,
            pointerEvents: 'none',
            '> *': {
              verticalAlign: 'top',
              '&:not(:last-child)': { marginInlineEnd: T }
            }
          },
          [`${t}-clear`]: {
            position: 'absolute',
            top: '50%',
            insetInlineEnd: 0,
            color: y,
            lineHeight: 1,
            background: i,
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            opacity: 0,
            transition: `opacity ${v}, color ${v}`,
            '> *': { verticalAlign: 'top' },
            '&:hover': { color: E }
          },
          [`${t}-separator`]: {
            position: 'relative',
            display: 'inline-block',
            width: '1em',
            height: C,
            color: y,
            fontSize: C,
            verticalAlign: 'top',
            cursor: 'default',
            [`${t}-focused &`]: { color: E },
            [`${t}-range-separator &`]: {
              [`${t}-disabled &`]: { cursor: 'not-allowed' }
            }
          },
          '&-range': {
            position: 'relative',
            display: 'inline-flex',
            [`${t}-clear`]: { insetInlineEnd: o },
            '&:hover': { [`${t}-clear`]: { opacity: 1 } },
            [`${t}-active-bar`]: {
              bottom: -c,
              height: U,
              marginInlineStart: o,
              background: j,
              opacity: 0,
              transition: `all ${_} ease-out`,
              pointerEvents: 'none'
            },
            [`&${t}-focused`]: { [`${t}-active-bar`]: { opacity: 1 } },
            [`${t}-range-separator`]: {
              alignItems: 'center',
              padding: `0 ${k}px`,
              lineHeight: 1
            },
            [`&${t}-small`]: {
              [`${t}-clear`]: { insetInlineEnd: x },
              [`${t}-active-bar`]: { marginInlineStart: x }
            }
          },
          '&-dropdown': Y(Y(Y({}, hn(e)), Al(e)), {
            position: 'absolute',
            top: -9999,
            left: { _skip_check_: !0, value: -9999 },
            zIndex: R,
            [`&${t}-dropdown-hidden`]: { display: 'none' },
            [`&${t}-dropdown-placement-bottomLeft`]: {
              [`${t}-range-arrow`]: {
                top: 0,
                display: 'block',
                transform: 'translateY(-100%)'
              }
            },
            [`&${t}-dropdown-placement-topLeft`]: {
              [`${t}-range-arrow`]: {
                bottom: 0,
                display: 'block',
                transform: 'translateY(100%) rotate(180deg)'
              }
            },
            [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topRight`]: {
              animationName: po
            },
            [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]: {
              animationName: ho
            },
            [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topRight`]: {
              animationName: mo
            },
            [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]: {
              animationName: bo
            },
            [`${t}-panel > ${t}-time-panel`]: { paddingTop: W },
            [`${t}-ranges`]: {
              marginBottom: 0,
              padding: `${W}px ${X}px`,
              overflow: 'hidden',
              lineHeight: `${N - 2 * c - k / 2}px`,
              textAlign: 'start',
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              '> li': { display: 'inline-block' },
              [`${t}-preset > ${n}-tag-blue`]: {
                color: j,
                background: P,
                borderColor: S,
                cursor: 'pointer'
              },
              [`${t}-ok`]: { marginInlineStart: 'auto' }
            },
            [`${t}-range-wrapper`]: { display: 'flex', position: 'relative' },
            [`${t}-range-arrow`]: Y(
              {
                position: 'absolute',
                zIndex: 1,
                display: 'none',
                marginInlineStart: o * 1.5,
                transition: `left ${_} ease-out`
              },
              Co(b, w, I, m, a)
            ),
            [`${t}-panel-container`]: {
              overflow: 'hidden',
              verticalAlign: 'top',
              background: m,
              borderRadius: D,
              boxShadow: H,
              transition: `margin ${_}`,
              [`${t}-panel-layout`]: {
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'stretch'
              },
              [`${t}-presets`]: {
                display: 'flex',
                flexDirection: 'column',
                minWidth: ie,
                maxWidth: oe,
                ul: {
                  height: 0,
                  flex: 'auto',
                  listStyle: 'none',
                  overflow: 'auto',
                  margin: 0,
                  padding: k,
                  borderInlineEnd: `${c}px ${s} ${Q}`,
                  li: Y(Y({}, Xr), {
                    borderRadius: A,
                    paddingInline: k,
                    paddingBlock: (p - Math.round(l * z)) / 2,
                    cursor: 'pointer',
                    transition: `all ${_}`,
                    '+ li': { marginTop: T },
                    '&:hover': { background: ee }
                  })
                }
              },
              [`${t}-panels`]: {
                display: 'inline-flex',
                flexWrap: 'nowrap',
                direction: 'ltr',
                [`${t}-panel`]: { borderWidth: `0 0 ${c}px` },
                '&:last-child': { [`${t}-panel`]: { borderWidth: 0 } }
              },
              [`${t}-panel`]: {
                verticalAlign: 'top',
                background: 'transparent',
                borderRadius: 0,
                borderWidth: 0,
                [`${t}-content,
            table`]: { textAlign: 'center' },
                '&-focused': { borderColor: d }
              }
            }
          }),
          '&-dropdown-range': {
            padding: `${(b * 2) / 3}px 0`,
            '&-hidden': { display: 'none' }
          },
          '&-rtl': {
            direction: 'rtl',
            [`${t}-separator`]: { transform: 'rotate(180deg)' },
            [`${t}-footer`]: { '&-extra': { direction: 'rtl' } }
          }
        })
      },
      ha(e, 'slide-up'),
      ha(e, 'slide-down'),
      ma(e, 'move-up'),
      ma(e, 'move-down')
    ];
  },
  Fl = e => {
    const {
      componentCls: n,
      controlHeightLG: a,
      controlHeightSM: r,
      colorPrimary: l,
      paddingXXS: o
    } = e;
    return {
      pickerCellCls: `${n}-cell`,
      pickerCellInnerCls: `${n}-cell-inner`,
      pickerTextHeight: a,
      pickerPanelCellWidth: r * 1.5,
      pickerPanelCellHeight: r,
      pickerDateHoverRangeBorderColor: new Lt(l).lighten(20).toHexString(),
      pickerBasicCellHoverWithRangeColor: new Lt(l).lighten(35).toHexString(),
      pickerPanelWithoutTimeCellHeight: a * 1.65,
      pickerYearMonthCellWidth: a * 1.5,
      pickerTimePanelColumnHeight: 28 * 8,
      pickerTimePanelColumnWidth: a * 1.4,
      pickerTimePanelCellHeight: 28,
      pickerQuarterPanelContentHeight: a * 1.4,
      pickerCellPaddingVertical: o,
      pickerCellBorderGap: 2,
      pickerControlIconSize: 7,
      pickerControlIconBorderWidth: 1.5
    };
  },
  br = Na(
    'DatePicker',
    e => {
      const t = Ft(ao(e), Fl(e));
      return [Wl(t), Bl(t), ro(e, { focusElCls: `${e.componentCls}-focused` })];
    },
    e => ({
      presetsWidth: 120,
      presetsMaxWidth: 200,
      zIndexPopup: e.zIndexPopupBase + 50
    })
  ),
  Ll = (e, t) => {
    let { attrs: n, slots: a } = t;
    return g(Wa, O(O({ size: 'small', type: 'primary' }, e), n), a);
  },
  jl = Ll,
  Vt = (e, t, n) => {
    const a = Zr(n);
    return {
      [`${e.componentCls}-${t}`]: {
        color: e[`color${n}`],
        background: e[`color${a}Bg`],
        borderColor: e[`color${a}Border`],
        [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' }
      }
    };
  },
  zl = e =>
    wo(e, (t, n) => {
      let {
        textColor: a,
        lightBorderColor: r,
        lightColor: l,
        darkColor: o
      } = n;
      return {
        [`${e.componentCls}-${t}`]: {
          color: a,
          background: l,
          borderColor: r,
          '&-inverse': {
            color: e.colorTextLightSolid,
            background: o,
            borderColor: o
          },
          [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' }
        }
      };
    }),
  Ul = e => {
    const {
        paddingXXS: t,
        lineWidth: n,
        tagPaddingHorizontal: a,
        componentCls: r
      } = e,
      l = a - n,
      o = t - n;
    return {
      [r]: Y(Y({}, hn(e)), {
        display: 'inline-block',
        height: 'auto',
        marginInlineEnd: e.marginXS,
        paddingInline: l,
        fontSize: e.tagFontSize,
        lineHeight: `${e.tagLineHeight}px`,
        whiteSpace: 'nowrap',
        background: e.tagDefaultBg,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadiusSM,
        opacity: 1,
        transition: `all ${e.motionDurationMid}`,
        textAlign: 'start',
        [`&${r}-rtl`]: { direction: 'rtl' },
        '&, a, a:hover': { color: e.tagDefaultColor },
        [`${r}-close-icon`]: {
          marginInlineStart: o,
          color: e.colorTextDescription,
          fontSize: e.tagIconSize,
          cursor: 'pointer',
          transition: `all ${e.motionDurationMid}`,
          '&:hover': { color: e.colorTextHeading }
        },
        [`&${r}-has-color`]: {
          borderColor: 'transparent',
          [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
            color: e.colorTextLightSolid
          }
        },
        '&-checkable': {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          cursor: 'pointer',
          [`&:not(${r}-checkable-checked):hover`]: {
            color: e.colorPrimary,
            backgroundColor: e.colorFillSecondary
          },
          '&:active, &-checked': { color: e.colorTextLightSolid },
          '&-checked': {
            backgroundColor: e.colorPrimary,
            '&:hover': { backgroundColor: e.colorPrimaryHover }
          },
          '&:active': { backgroundColor: e.colorPrimaryActive }
        },
        '&-hidden': { display: 'none' },
        [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
          marginInlineStart: l
        }
      }),
      [`${r}-borderless`]: {
        borderColor: 'transparent',
        background: e.tagBorderlessBg
      }
    };
  },
  Cr = Na('Tag', e => {
    const { fontSize: t, lineHeight: n, lineWidth: a, fontSizeIcon: r } = e,
      l = Math.round(t * n),
      o = e.fontSizeSM,
      i = l - a * 2,
      c = e.colorFillAlter,
      s = e.colorText,
      d = Ft(e, {
        tagFontSize: o,
        tagLineHeight: i,
        tagDefaultBg: c,
        tagDefaultColor: s,
        tagIconSize: r - 2 * a,
        tagPaddingHorizontal: 8,
        tagBorderlessBg: e.colorFillTertiary
      });
    return [
      Ul(d),
      zl(d),
      Vt(d, 'success', 'Success'),
      Vt(d, 'processing', 'Info'),
      Vt(d, 'error', 'Error'),
      Vt(d, 'warning', 'Warning')
    ];
  }),
  ql = () => ({
    prefixCls: String,
    checked: { type: Boolean, default: void 0 },
    onChange: { type: Function },
    onClick: { type: Function },
    'onUpdate:checked': Function
  }),
  Kl = Ie({
    compatConfig: { MODE: 3 },
    name: 'ACheckableTag',
    inheritAttrs: !1,
    props: ql(),
    setup(e, t) {
      let { slots: n, emit: a, attrs: r } = t;
      const { prefixCls: l } = Ut('tag', e),
        [o, i] = Cr(l),
        c = d => {
          const { checked: u } = e;
          a('update:checked', !u), a('change', !u), a('click', d);
        },
        s = B(() =>
          se(l.value, i.value, {
            [`${l.value}-checkable`]: !0,
            [`${l.value}-checkable-checked`]: e.checked
          })
        );
      return () => {
        var d;
        return o(
          g(
            'span',
            O(O({}, r), {}, { class: [s.value, r.class], onClick: c }),
            [(d = n.default) === null || d === void 0 ? void 0 : d.call(n)]
          )
        );
      };
    }
  }),
  Pn = Kl,
  Ql = () => ({
    prefixCls: String,
    color: { type: String },
    closable: { type: Boolean, default: !1 },
    closeIcon: va.any,
    visible: { type: Boolean, default: void 0 },
    onClose: { type: Function },
    onClick: Jr(),
    'onUpdate:visible': Function,
    icon: va.any,
    bordered: { type: Boolean, default: !0 }
  }),
  St = Ie({
    compatConfig: { MODE: 3 },
    name: 'ATag',
    inheritAttrs: !1,
    props: Ql(),
    slots: Object,
    setup(e, t) {
      let { slots: n, emit: a, attrs: r } = t;
      const { prefixCls: l, direction: o } = Ut('tag', e),
        [i, c] = Cr(l),
        s = Ee(!0);
      Tn(() => {
        e.visible !== void 0 && (s.value = e.visible);
      });
      const d = y => {
          y.stopPropagation(),
            a('update:visible', !1),
            a('close', y),
            !y.defaultPrevented && e.visible === void 0 && (s.value = !1);
        },
        u = B(() => $o(e.color) || yo(e.color)),
        v = B(() =>
          se(l.value, c.value, {
            [`${l.value}-${e.color}`]: u.value,
            [`${l.value}-has-color`]: e.color && !u.value,
            [`${l.value}-hidden`]: !s.value,
            [`${l.value}-rtl`]: o.value === 'rtl',
            [`${l.value}-borderless`]: !e.bordered
          })
        ),
        h = y => {
          a('click', y);
        };
      return () => {
        var y, $, f;
        const {
            icon: C = (y = n.icon) === null || y === void 0
              ? void 0
              : y.call(n),
            color: p,
            closeIcon: x = ($ = n.closeIcon) === null || $ === void 0
              ? void 0
              : $.call(n),
            closable: k = !1
          } = e,
          T = () =>
            k
              ? x
                ? g('span', { class: `${l.value}-close-icon`, onClick: d }, [x])
                : g(eo, { class: `${l.value}-close-icon`, onClick: d }, null)
              : null,
          E = { backgroundColor: p && !u.value ? p : void 0 },
          U = C || null,
          z = (f = n.default) === null || f === void 0 ? void 0 : f.call(n),
          j = U ? g(Dt, null, [U, g('span', null, [z])]) : z,
          _ = e.onClick !== void 0,
          R = g(
            'span',
            O(
              O({}, r),
              {},
              { onClick: h, class: [v.value, r.class], style: [E, r.style] }
            ),
            [j, T()]
          );
        return i(_ ? g(Po, null, { default: () => [R] }) : R);
      };
    }
  });
St.CheckableTag = Pn;
St.install = function(e) {
  return e.component(St.name, St), e.component(Pn.name, Pn), e;
};
const Gl = St;
function Xl(e, t) {
  let { slots: n, attrs: a } = t;
  return g(Gl, O(O({ color: 'blue' }, e), a), n);
}
function Da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (a = a.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      a.forEach(function(r) {
        Zl(e, r, n[r]);
      });
  }
  return e;
}
function Zl(e, t, n) {
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
  var a = Da({}, t, n.attrs);
  return g(On, Da({}, a, { icon: Mo }), null);
};
Qn.displayName = 'CalendarOutlined';
Qn.inheritAttrs = !1;
const wr = Qn;
function Pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (a = a.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      a.forEach(function(r) {
        Jl(e, r, n[r]);
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
var Gn = function(t, n) {
  var a = Pa({}, t, n.attrs);
  return g(On, Pa({}, a, { icon: To }), null);
};
Gn.displayName = 'ClockCircleOutlined';
Gn.inheritAttrs = !1;
const $r = Gn;
function ei(e, t, n) {
  return n !== void 0
    ? n
    : t === 'year' && e.lang.yearPlaceholder
    ? e.lang.yearPlaceholder
    : t === 'quarter' && e.lang.quarterPlaceholder
    ? e.lang.quarterPlaceholder
    : t === 'month' && e.lang.monthPlaceholder
    ? e.lang.monthPlaceholder
    : t === 'week' && e.lang.weekPlaceholder
    ? e.lang.weekPlaceholder
    : t === 'time' && e.timePickerLocale.placeholder
    ? e.timePickerLocale.placeholder
    : e.lang.placeholder;
}
function ti(e, t, n) {
  return n !== void 0
    ? n
    : t === 'year' && e.lang.yearPlaceholder
    ? e.lang.rangeYearPlaceholder
    : t === 'month' && e.lang.monthPlaceholder
    ? e.lang.rangeMonthPlaceholder
    : t === 'week' && e.lang.weekPlaceholder
    ? e.lang.rangeWeekPlaceholder
    : t === 'time' && e.timePickerLocale.placeholder
    ? e.timePickerLocale.rangePlaceholder
    : e.lang.rangePlaceholder;
}
function yr(e, t) {
  const n = { adjustX: 1, adjustY: 1 };
  switch (t) {
    case 'bottomLeft':
      return { points: ['tl', 'bl'], offset: [0, 4], overflow: n };
    case 'bottomRight':
      return { points: ['tr', 'br'], offset: [0, 4], overflow: n };
    case 'topLeft':
      return { points: ['bl', 'tl'], offset: [0, -4], overflow: n };
    case 'topRight':
      return { points: ['br', 'tr'], offset: [0, -4], overflow: n };
    default:
      return {
        points: e === 'rtl' ? ['tr', 'br'] : ['tl', 'bl'],
        offset: [0, 4],
        overflow: n
      };
  }
}
function xr() {
  return {
    id: String,
    dropdownClassName: String,
    popupClassName: String,
    popupStyle: mn(),
    transitionName: String,
    placeholder: String,
    allowClear: Ke(),
    autofocus: Ke(),
    disabled: Ke(),
    tabindex: Number,
    open: Ke(),
    defaultOpen: Ke(),
    inputReadOnly: Ke(),
    format: dt([String, Function, Array]),
    getPopupContainer: ae(),
    panelRender: ae(),
    onChange: ae(),
    'onUpdate:value': ae(),
    onOk: ae(),
    onOpenChange: ae(),
    'onUpdate:open': ae(),
    onFocus: ae(),
    onBlur: ae(),
    onMousedown: ae(),
    onMouseup: ae(),
    onMouseenter: ae(),
    onMouseleave: ae(),
    onClick: ae(),
    onContextmenu: ae(),
    onKeydown: ae(),
    role: String,
    name: String,
    autocomplete: String,
    direction: pt(),
    showToday: Ke(),
    showTime: dt([Boolean, Object]),
    locale: mn(),
    size: pt(),
    bordered: Ke(),
    dateRender: ae(),
    disabledDate: ae(),
    mode: pt(),
    picker: pt(),
    valueFormat: String,
    placement: pt(),
    status: pt(),
    disabledHours: ae(),
    disabledMinutes: ae(),
    disabledSeconds: ae()
  };
}
function ni() {
  return {
    defaultPickerValue: dt([Object, String]),
    defaultValue: dt([Object, String]),
    value: dt([Object, String]),
    presets: at(),
    disabledTime: ae(),
    renderExtraFooter: ae(),
    showNow: Ke(),
    monthCellRender: ae(),
    monthCellContentRender: ae()
  };
}
function ai() {
  return {
    allowEmpty: at(),
    dateRender: ae(),
    defaultPickerValue: at(),
    defaultValue: at(),
    value: at(),
    presets: at(),
    disabledTime: ae(),
    disabled: dt([Boolean, Array]),
    renderExtraFooter: ae(),
    separator: { type: String },
    showTime: dt([Boolean, Object]),
    ranges: mn(),
    placeholder: at(),
    mode: at(),
    onChange: ae(),
    'onUpdate:value': ae(),
    onCalendarChange: ae(),
    onPanelChange: ae(),
    onOk: ae()
  };
}
var ri =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var a in e)
      Object.prototype.hasOwnProperty.call(e, a) &&
        t.indexOf(a) < 0 &&
        (n[a] = e[a]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
        t.indexOf(a[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
          (n[a[r]] = e[a[r]]);
    return n;
  };
function oi(e, t) {
  function n(s, d) {
    const u = Y(Y(Y({}, xr()), ni()), t);
    return Ie({
      compatConfig: { MODE: 3 },
      name: d,
      inheritAttrs: !1,
      props: u,
      slots: Object,
      setup(v, h) {
        let { slots: y, expose: $, attrs: f, emit: C } = h;
        const p = v,
          x = Va(),
          k = _a.useInject(),
          {
            prefixCls: T,
            direction: E,
            getPopupContainer: U,
            size: z,
            rootPrefixCls: j,
            disabled: _
          } = Ut('picker', p),
          { compactSize: R, compactItemClassnames: W } = Fa(T, E),
          X = B(() => R.value || z.value),
          [N, P] = br(T),
          S = L();
        $({
          focus: () => {
            var q;
            (q = S.value) === null || q === void 0 || q.focus();
          },
          blur: () => {
            var q;
            (q = S.value) === null || q === void 0 || q.blur();
          }
        });
        const b = q => (p.valueFormat ? e.toString(q, p.valueFormat) : q),
          w = (q, ne) => {
            const G = b(q);
            C('update:value', G), C('change', G, ne), x.onFieldChange();
          },
          I = q => {
            C('update:open', q), C('openChange', q);
          },
          m = q => {
            C('focus', q);
          },
          D = q => {
            C('blur', q), x.onFieldBlur();
          },
          H = (q, ne) => {
            const G = b(q);
            C('panelChange', G, ne);
          },
          A = q => {
            const ne = b(q);
            C('ok', ne);
          },
          [Q] = Ya('DatePicker', Ea),
          ee = B(() =>
            p.value
              ? p.valueFormat
                ? e.toDate(p.value, p.valueFormat)
                : p.value
              : p.value === ''
              ? void 0
              : p.value
          ),
          ie = B(() =>
            p.defaultValue
              ? p.valueFormat
                ? e.toDate(p.defaultValue, p.valueFormat)
                : p.defaultValue
              : p.defaultValue === ''
              ? void 0
              : p.defaultValue
          ),
          oe = B(() =>
            p.defaultPickerValue
              ? p.valueFormat
                ? e.toDate(p.defaultPickerValue, p.valueFormat)
                : p.defaultPickerValue
              : p.defaultPickerValue === ''
              ? void 0
              : p.defaultPickerValue
          );
        return () => {
          var q, ne, G, Z, ue, re;
          const he = Y(Y({}, Q.value), p.locale),
            K = Y(Y({}, p), f),
            {
              bordered: te = !0,
              placeholder: we,
              suffixIcon: ye = (q = y.suffixIcon) === null || q === void 0
                ? void 0
                : q.call(y),
              showToday: Me = !0,
              transitionName: We,
              allowClear: Se = !0,
              dateRender: Fe = y.dateRender,
              renderExtraFooter: Le = y.renderExtraFooter,
              monthCellRender: Te = y.monthCellRender ||
                p.monthCellContentRender ||
                y.monthCellContentRender,
              clearIcon: me = (ne = y.clearIcon) === null || ne === void 0
                ? void 0
                : ne.call(y),
              id: Ne = x.id.value
            } = K,
            gt = ri(K, [
              'bordered',
              'placeholder',
              'suffixIcon',
              'showToday',
              'transitionName',
              'allowClear',
              'dateRender',
              'renderExtraFooter',
              'monthCellRender',
              'clearIcon',
              'id'
            ]),
            st = K.showTime === '' ? !0 : K.showTime,
            { format: De } = K;
          let je = {};
          s && (je.picker = s);
          const Ye = s || K.picker || 'date';
          je = Y(
            Y(
              Y({}, je),
              st
                ? zt(
                    Y(
                      { format: De, picker: Ye },
                      typeof st == 'object' ? st : {}
                    )
                  )
                : {}
            ),
            Ye === 'time' ? zt(Y(Y({ format: De }, gt), { picker: Ye })) : {}
          );
          const Pe = T.value,
            Ze = g(Dt, null, [
              ye || (s === 'time' ? g($r, null, null) : g(wr, null, null)),
              k.hasFeedback && k.feedbackIcon
            ]);
          return N(
            g(
              xl,
              O(
                O(
                  O(
                    {
                      monthCellRender: Te,
                      dateRender: Fe,
                      renderExtraFooter: Le,
                      ref: S,
                      placeholder: ei(he, Ye, we),
                      suffixIcon: Ze,
                      dropdownAlign: yr(E.value, p.placement),
                      clearIcon: me || g(Ha, null, null),
                      allowClear: Se,
                      transitionName: We || `${j.value}-slide-up`
                    },
                    gt
                  ),
                  je
                ),
                {},
                {
                  id: Ne,
                  picker: Ye,
                  value: ee.value,
                  defaultValue: ie.value,
                  defaultPickerValue: oe.value,
                  showToday: Me,
                  locale: he.lang,
                  class: se(
                    {
                      [`${Pe}-${X.value}`]: X.value,
                      [`${Pe}-borderless`]: !te
                    },
                    Aa(Pe, Ba(k.status, p.status), k.hasFeedback),
                    f.class,
                    P.value,
                    W.value
                  ),
                  disabled: _.value,
                  prefixCls: Pe,
                  getPopupContainer: f.getCalendarContainer || U.value,
                  generateConfig: e,
                  prevIcon:
                    ((G = y.prevIcon) === null || G === void 0
                      ? void 0
                      : G.call(y)) ||
                    g('span', { class: `${Pe}-prev-icon` }, null),
                  nextIcon:
                    ((Z = y.nextIcon) === null || Z === void 0
                      ? void 0
                      : Z.call(y)) ||
                    g('span', { class: `${Pe}-next-icon` }, null),
                  superPrevIcon:
                    ((ue = y.superPrevIcon) === null || ue === void 0
                      ? void 0
                      : ue.call(y)) ||
                    g('span', { class: `${Pe}-super-prev-icon` }, null),
                  superNextIcon:
                    ((re = y.superNextIcon) === null || re === void 0
                      ? void 0
                      : re.call(y)) ||
                    g('span', { class: `${Pe}-super-next-icon` }, null),
                  components: kr,
                  direction: E.value,
                  dropdownClassName: se(
                    P.value,
                    p.popupClassName,
                    p.dropdownClassName
                  ),
                  onChange: w,
                  onOpenChange: I,
                  onFocus: m,
                  onBlur: D,
                  onPanelChange: H,
                  onOk: A
                }
              ),
              null
            )
          );
        };
      }
    });
  }
  const a = n(void 0, 'ADatePicker'),
    r = n('week', 'AWeekPicker'),
    l = n('month', 'AMonthPicker'),
    o = n('year', 'AYearPicker'),
    i = n('time', 'TimePicker'),
    c = n('quarter', 'AQuarterPicker');
  return {
    DatePicker: a,
    WeekPicker: r,
    MonthPicker: l,
    YearPicker: o,
    TimePicker: i,
    QuarterPicker: c
  };
}
function Ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      a = Object.keys(n);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (a = a.concat(
        Object.getOwnPropertySymbols(n).filter(function(r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })
      )),
      a.forEach(function(r) {
        li(e, r, n[r]);
      });
  }
  return e;
}
function li(e, t, n) {
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
var Xn = function(t, n) {
  var a = Ma({}, t, n.attrs);
  return g(On, Ma({}, a, { icon: Oo }), null);
};
Xn.displayName = 'SwapRightOutlined';
Xn.inheritAttrs = !1;
const ii = Xn;
var si =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var n = {};
    for (var a in e)
      Object.prototype.hasOwnProperty.call(e, a) &&
        t.indexOf(a) < 0 &&
        (n[a] = e[a]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
        t.indexOf(a[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
          (n[a[r]] = e[a[r]]);
    return n;
  };
function ui(e, t) {
  return Ie({
    compatConfig: { MODE: 3 },
    name: 'ARangePicker',
    inheritAttrs: !1,
    props: Y(Y(Y({}, xr()), ai()), t),
    slots: Object,
    setup(a, r) {
      let { expose: l, slots: o, attrs: i, emit: c } = r;
      const s = a,
        d = Va(),
        u = _a.useInject(),
        {
          prefixCls: v,
          direction: h,
          getPopupContainer: y,
          size: $,
          rootPrefixCls: f,
          disabled: C
        } = Ut('picker', s),
        { compactSize: p, compactItemClassnames: x } = Fa(v, h),
        k = B(() => p.value || $.value),
        [T, E] = br(v),
        U = L();
      l({
        focus: () => {
          var m;
          (m = U.value) === null || m === void 0 || m.focus();
        },
        blur: () => {
          var m;
          (m = U.value) === null || m === void 0 || m.blur();
        }
      });
      const z = m => (s.valueFormat ? e.toString(m, s.valueFormat) : m),
        j = (m, D) => {
          const H = z(m);
          c('update:value', H), c('change', H, D), d.onFieldChange();
        },
        _ = m => {
          c('update:open', m), c('openChange', m);
        },
        R = m => {
          c('focus', m);
        },
        W = m => {
          c('blur', m), d.onFieldBlur();
        },
        X = (m, D) => {
          const H = z(m);
          c('panelChange', H, D);
        },
        N = m => {
          const D = z(m);
          c('ok', D);
        },
        P = (m, D, H) => {
          const A = z(m);
          c('calendarChange', A, D, H);
        },
        [S] = Ya('DatePicker', Ea),
        b = B(() =>
          s.value && s.valueFormat ? e.toDate(s.value, s.valueFormat) : s.value
        ),
        w = B(() =>
          s.defaultValue && s.valueFormat
            ? e.toDate(s.defaultValue, s.valueFormat)
            : s.defaultValue
        ),
        I = B(() =>
          s.defaultPickerValue && s.valueFormat
            ? e.toDate(s.defaultPickerValue, s.valueFormat)
            : s.defaultPickerValue
        );
      return () => {
        var m, D, H, A, Q, ee, ie;
        const oe = Y(Y({}, S.value), s.locale),
          q = Y(Y({}, s), i),
          {
            prefixCls: ne,
            bordered: G = !0,
            placeholder: Z,
            suffixIcon: ue = (m = o.suffixIcon) === null || m === void 0
              ? void 0
              : m.call(o),
            picker: re = 'date',
            transitionName: he,
            allowClear: K = !0,
            dateRender: te = o.dateRender,
            renderExtraFooter: we = o.renderExtraFooter,
            separator: ye = (D = o.separator) === null || D === void 0
              ? void 0
              : D.call(o),
            clearIcon: Me = (H = o.clearIcon) === null || H === void 0
              ? void 0
              : H.call(o),
            id: We = d.id.value
          } = q,
          Se = si(q, [
            'prefixCls',
            'bordered',
            'placeholder',
            'suffixIcon',
            'picker',
            'transitionName',
            'allowClear',
            'dateRender',
            'renderExtraFooter',
            'separator',
            'clearIcon',
            'id'
          ]);
        delete Se['onUpdate:value'], delete Se['onUpdate:open'];
        const { format: Fe, showTime: Le } = q;
        let Te = {};
        Te = Y(
          Y(Y({}, Te), Le ? zt(Y({ format: Fe, picker: re }, Le)) : {}),
          re === 'time'
            ? zt(Y(Y({ format: Fe }, xo(Se, ['disabledTime'])), { picker: re }))
            : {}
        );
        const me = v.value,
          Ne = g(Dt, null, [
            ue || (re === 'time' ? g($r, null, null) : g(wr, null, null)),
            u.hasFeedback && u.feedbackIcon
          ]);
        return T(
          g(
            Vl,
            O(
              O(
                O(
                  {
                    dateRender: te,
                    renderExtraFooter: we,
                    separator:
                      ye ||
                      g(
                        'span',
                        { 'aria-label': 'to', class: `${me}-separator` },
                        [g(ii, null, null)]
                      ),
                    ref: U,
                    dropdownAlign: yr(h.value, s.placement),
                    placeholder: ti(oe, re, Z),
                    suffixIcon: Ne,
                    clearIcon: Me || g(Ha, null, null),
                    allowClear: K,
                    transitionName: he || `${f.value}-slide-up`
                  },
                  Se
                ),
                Te
              ),
              {},
              {
                disabled: C.value,
                id: We,
                value: b.value,
                defaultValue: w.value,
                defaultPickerValue: I.value,
                picker: re,
                class: se(
                  { [`${me}-${k.value}`]: k.value, [`${me}-borderless`]: !G },
                  Aa(me, Ba(u.status, s.status), u.hasFeedback),
                  i.class,
                  E.value,
                  x.value
                ),
                locale: oe.lang,
                prefixCls: me,
                getPopupContainer: i.getCalendarContainer || y.value,
                generateConfig: e,
                prevIcon:
                  ((A = o.prevIcon) === null || A === void 0
                    ? void 0
                    : A.call(o)) ||
                  g('span', { class: `${me}-prev-icon` }, null),
                nextIcon:
                  ((Q = o.nextIcon) === null || Q === void 0
                    ? void 0
                    : Q.call(o)) ||
                  g('span', { class: `${me}-next-icon` }, null),
                superPrevIcon:
                  ((ee = o.superPrevIcon) === null || ee === void 0
                    ? void 0
                    : ee.call(o)) ||
                  g('span', { class: `${me}-super-prev-icon` }, null),
                superNextIcon:
                  ((ie = o.superNextIcon) === null || ie === void 0
                    ? void 0
                    : ie.call(o)) ||
                  g('span', { class: `${me}-super-next-icon` }, null),
                components: kr,
                direction: h.value,
                dropdownClassName: se(
                  E.value,
                  s.popupClassName,
                  s.dropdownClassName
                ),
                onChange: j,
                onOpenChange: _,
                onFocus: R,
                onBlur: W,
                onPanelChange: X,
                onOk: N,
                onCalendarChange: P
              }
            ),
            null
          )
        );
      };
    }
  });
}
const kr = { button: jl, rangeItem: Xl };
function ci(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function zt(e) {
  const {
      format: t,
      picker: n,
      showHour: a,
      showMinute: r,
      showSecond: l,
      use12Hours: o
    } = e,
    i = ci(t)[0],
    c = Y({}, e);
  return (
    i &&
      typeof i == 'string' &&
      (!i.includes('s') && l === void 0 && (c.showSecond = !1),
      !i.includes('m') && r === void 0 && (c.showMinute = !1),
      !i.includes('H') && !i.includes('h') && a === void 0 && (c.showHour = !1),
      (i.includes('a') || i.includes('A')) &&
        o === void 0 &&
        (c.use12Hours = !0)),
    n === 'time'
      ? c
      : (typeof i == 'function' && delete c.format, { showTime: c })
  );
}
function di(e, t) {
  const {
      DatePicker: n,
      WeekPicker: a,
      MonthPicker: r,
      YearPicker: l,
      TimePicker: o,
      QuarterPicker: i
    } = oi(e, t),
    c = ui(e, t);
  return {
    DatePicker: n,
    WeekPicker: a,
    MonthPicker: r,
    YearPicker: l,
    TimePicker: o,
    QuarterPicker: i,
    RangePicker: c
  };
}
const {
  DatePicker: fn,
  WeekPicker: vn,
  MonthPicker: gn,
  YearPicker: fi,
  TimePicker: vi,
  QuarterPicker: pn,
  RangePicker: Bt
} = di(Qo);
Y(fn, {
  WeekPicker: vn,
  MonthPicker: gn,
  YearPicker: fi,
  RangePicker: Bt,
  TimePicker: vi,
  QuarterPicker: pn,
  install: e => (
    e.component(fn.name, fn),
    e.component(Bt.name, Bt),
    e.component(gn.name, gn),
    e.component(vn.name, vn),
    e.component(pn.name, pn),
    e
  )
});
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gi = ko('CalendarIcon', [
    ['path', { d: 'M8 2v4', key: '1cmpym' }],
    ['path', { d: 'M16 2v4', key: '4m81vk' }],
    [
      'rect',
      { width: '18', height: '18', x: '3', y: '4', rx: '2', key: '1hopcy' }
    ],
    ['path', { d: 'M3 10h18', key: '8toen8' }]
  ]),
  pi = { class: 'filter-container' },
  hi = Ie({
    __name: 'Filter',
    setup(e) {
      const t = to(),
        n = L(t.period),
        a = B(() => t.isLoading),
        r = L([
          { label: qe().filter.last7Days, value: 'last_7_days' },
          { label: qe().filter.last14Days, value: 'last_14_days' },
          { label: qe().filter.last30Days, value: 'last_30_days' },
          { label: qe().filter.last3Months, value: 'last_3_months' },
          { label: qe().filter.last6Months, value: 'last_6_months' },
          { label: qe().filter.lastYear, value: 'last_year' },
          { label: qe().filter.custom, value: 'custom' }
        ]),
        l = L(!1),
        o = L([]),
        i = d => {
          var v;
          const u = (v = r.value) == null ? void 0 : v.find(h => h.value === d);
          u && (t.period = u),
            d === 'custom'
              ? (l.value = !0)
              : ((l.value = !1),
                (t.startDate = null),
                (t.endDate = null),
                t.fetchDashboardData());
        },
        c = d => {
          d &&
            ((t.startDate = d[0].format('YYYY-MM-DD')),
            (t.endDate = d[1].format('YYYY-MM-DD')));
        },
        s = () => {
          t.startDate === null || t.endDate === null || t.fetchDashboardData();
        };
      return (d, u) => (
        Kr(),
        Qr('div', pi, [
          g(
            _e(ga),
            { align: 'center', justify: 'space-between', wrap: 'wrap' },
            {
              default: Rt(() => [
                g(
                  _e(io).Title,
                  {
                    level: 3,
                    style: { margin: 0, fontSize: '23px', fontWeight: 'normal' }
                  },
                  {
                    default: Rt(() => [Wt(da(_e(qe)().dashboard.title), 1)]),
                    _: 1
                  }
                ),
                g(
                  _e(ga),
                  {
                    align: 'center',
                    gap: 'small',
                    class: fa([
                      'filter-controls',
                      { 'with-custom-range': l.value }
                    ]),
                    style: {
                      backgroundColor: '#f5f5f5',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0'
                    }
                  },
                  {
                    default: Rt(() => [
                      g(_e(gi), { size: '23', color: '#000' }),
                      g(
                        _e(Do),
                        {
                          value: n.value,
                          'onUpdate:value': u[0] || (u[0] = v => (n.value = v)),
                          options: r.value,
                          style: {
                            width: '200px',
                            paddingTop: '4px',
                            paddingBottom: '4px'
                          },
                          bordered: !0,
                          'dropdown-match-select-width': !1,
                          disabled: a.value,
                          onChange: i
                        },
                        null,
                        8,
                        ['value', 'options', 'disabled']
                      ),
                      Gr(
                        'div',
                        {
                          class: fa([
                            'custom-range-container',
                            { show: l.value }
                          ])
                        },
                        [
                          g(
                            _e(Bt),
                            {
                              value: o.value,
                              'onUpdate:value':
                                u[1] || (u[1] = v => (o.value = v)),
                              style: {
                                paddingTop: '5px',
                                paddingBottom: '5px'
                              },
                              disabled: a.value,
                              onChange: c
                            },
                            null,
                            8,
                            ['value', 'disabled']
                          ),
                          g(
                            _e(Wa),
                            {
                              type: 'primary',
                              size: 'middle',
                              disabled: a.value || !o.value,
                              onClick: s
                            },
                            {
                              default: Rt(() => [
                                Wt(da(_e(qe)().filter.apply), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['disabled']
                          )
                        ],
                        2
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['class']
                )
              ]),
              _: 1
            }
          )
        ])
      );
    }
  });
const Pi = no(hi, [['__scopeId', 'data-v-1efabf3a']]);
export { Pi as default };
