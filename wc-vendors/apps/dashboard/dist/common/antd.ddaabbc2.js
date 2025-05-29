import './vendor.47b1711b.js';
function o(e, t) {
  U(e) && (e = '100%');
  var a = $(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    a && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function m(e) {
  return Math.min(1, Math.max(0, e));
}
function U(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function $(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function P(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function M(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function g(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function Q(e, t, a) {
  return { r: o(e, 255) * 255, g: o(t, 255) * 255, b: o(a, 255) * 255 };
}
function B(e, t, a) {
  (e = o(e, 255)), (t = o(t, 255)), (a = o(a, 255));
  var r = Math.max(e, t, a),
    n = Math.min(e, t, a),
    i = 0,
    s = 0,
    c = (r + n) / 2;
  if (r === n) (s = 0), (i = 0);
  else {
    var h = r - n;
    switch (((s = c > 0.5 ? h / (2 - r - n) : h / (r + n)), r)) {
      case e:
        i = (t - a) / h + (t < a ? 6 : 0);
        break;
      case t:
        i = (a - e) / h + 2;
        break;
      case a:
        i = (e - t) / h + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, l: c };
}
function H(e, t, a) {
  return (
    a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6
      ? e + (t - e) * (6 * a)
      : a < 1 / 2
      ? t
      : a < 2 / 3
      ? e + (t - e) * (2 / 3 - a) * 6
      : e
  );
}
function Z(e, t, a) {
  var r, n, i;
  if (((e = o(e, 360)), (t = o(t, 100)), (a = o(a, 100)), t === 0))
    (n = a), (i = a), (r = a);
  else {
    var s = a < 0.5 ? a * (1 + t) : a + t - a * t,
      c = 2 * a - s;
    (r = H(c, s, e + 1 / 3)), (n = H(c, s, e)), (i = H(c, s, e - 1 / 3));
  }
  return { r: r * 255, g: n * 255, b: i * 255 };
}
function L(e, t, a) {
  (e = o(e, 255)), (t = o(t, 255)), (a = o(a, 255));
  var r = Math.max(e, t, a),
    n = Math.min(e, t, a),
    i = 0,
    s = r,
    c = r - n,
    h = r === 0 ? 0 : c / r;
  if (r === n) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - a) / c + (t < a ? 6 : 0);
        break;
      case t:
        i = (a - e) / c + 2;
        break;
      case a:
        i = (e - t) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: h, v: s };
}
function J(e, t, a) {
  (e = o(e, 360) * 6), (t = o(t, 100)), (a = o(a, 100));
  var r = Math.floor(e),
    n = e - r,
    i = a * (1 - t),
    s = a * (1 - n * t),
    c = a * (1 - (1 - n) * t),
    h = r % 6,
    S = [a, s, i, i, c, a][h],
    b = [c, a, a, s, i, i][h],
    w = [i, i, c, a, a, s][h];
  return { r: S * 255, g: b * 255, b: w * 255 };
}
function A(e, t, a, r) {
  var n = [
    g(Math.round(e).toString(16)),
    g(Math.round(t).toString(16)),
    g(Math.round(a).toString(16))
  ];
  return r &&
    n[0].startsWith(n[0].charAt(1)) &&
    n[1].startsWith(n[1].charAt(1)) &&
    n[2].startsWith(n[2].charAt(1))
    ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0)
    : n.join('');
}
function K(e, t, a, r, n) {
  var i = [
    g(Math.round(e).toString(16)),
    g(Math.round(t).toString(16)),
    g(Math.round(a).toString(16)),
    g(X(r))
  ];
  return n &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1)) &&
    i[3].startsWith(i[3].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
    : i.join('');
}
function X(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function R(e) {
  return l(e) / 255;
}
function l(e) {
  return parseInt(e, 16);
}
function Y(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var F = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};
function v(e) {
  var t = { r: 0, g: 0, b: 0 },
    a = 1,
    r = null,
    n = null,
    i = null,
    s = !1,
    c = !1;
  return (
    typeof e == 'string' && (e = et(e)),
    typeof e == 'object' &&
      (u(e.r) && u(e.g) && u(e.b)
        ? ((t = Q(e.r, e.g, e.b)),
          (s = !0),
          (c = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : u(e.h) && u(e.s) && u(e.v)
        ? ((r = M(e.s)),
          (n = M(e.v)),
          (t = J(e.h, r, n)),
          (s = !0),
          (c = 'hsv'))
        : u(e.h) &&
          u(e.s) &&
          u(e.l) &&
          ((r = M(e.s)),
          (i = M(e.l)),
          (t = Z(e.h, r, i)),
          (s = !0),
          (c = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (a = e.a)),
    (a = P(a)),
    {
      ok: s,
      format: e.format || c,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a
    }
  );
}
var _ = '[-\\+]?\\d+%?',
  tt = '[-\\+]?\\d*\\.\\d+%?',
  d = '(?:'.concat(tt, ')|(?:').concat(_, ')'),
  z = '[\\s|\\(]+('
    .concat(d, ')[,|\\s]+(')
    .concat(d, ')[,|\\s]+(')
    .concat(d, ')\\s*\\)?'),
  C = '[\\s|\\(]+('
    .concat(d, ')[,|\\s]+(')
    .concat(d, ')[,|\\s]+(')
    .concat(d, ')[,|\\s]+(')
    .concat(d, ')\\s*\\)?'),
  f = {
    CSS_UNIT: new RegExp(d),
    rgb: new RegExp('rgb' + z),
    rgba: new RegExp('rgba' + C),
    hsl: new RegExp('hsl' + z),
    hsla: new RegExp('hsla' + C),
    hsv: new RegExp('hsv' + z),
    hsva: new RegExp('hsva' + C),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
function et(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (F[e]) (e = F[e]), (t = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var a = f.rgb.exec(e);
  return a
    ? { r: a[1], g: a[2], b: a[3] }
    : ((a = f.rgba.exec(e)),
      a
        ? { r: a[1], g: a[2], b: a[3], a: a[4] }
        : ((a = f.hsl.exec(e)),
          a
            ? { h: a[1], s: a[2], l: a[3] }
            : ((a = f.hsla.exec(e)),
              a
                ? { h: a[1], s: a[2], l: a[3], a: a[4] }
                : ((a = f.hsv.exec(e)),
                  a
                    ? { h: a[1], s: a[2], v: a[3] }
                    : ((a = f.hsva.exec(e)),
                      a
                        ? { h: a[1], s: a[2], v: a[3], a: a[4] }
                        : ((a = f.hex8.exec(e)),
                          a
                            ? {
                                r: l(a[1]),
                                g: l(a[2]),
                                b: l(a[3]),
                                a: R(a[4]),
                                format: t ? 'name' : 'hex8'
                              }
                            : ((a = f.hex6.exec(e)),
                              a
                                ? {
                                    r: l(a[1]),
                                    g: l(a[2]),
                                    b: l(a[3]),
                                    format: t ? 'name' : 'hex'
                                  }
                                : ((a = f.hex4.exec(e)),
                                  a
                                    ? {
                                        r: l(a[1] + a[1]),
                                        g: l(a[2] + a[2]),
                                        b: l(a[3] + a[3]),
                                        a: R(a[4] + a[4]),
                                        format: t ? 'name' : 'hex8'
                                      }
                                    : ((a = f.hex3.exec(e)),
                                      a
                                        ? {
                                            r: l(a[1] + a[1]),
                                            g: l(a[2] + a[2]),
                                            b: l(a[3] + a[3]),
                                            format: t ? 'name' : 'hex'
                                          }
                                        : !1)))))))));
}
function u(e) {
  return !!f.CSS_UNIT.exec(String(e));
}
var Wt = (function() {
    function e(t, a) {
      t === void 0 && (t = ''), a === void 0 && (a = {});
      var r;
      if (t instanceof e) return t;
      typeof t == 'number' && (t = Y(t)), (this.originalInput = t);
      var n = v(t);
      (this.originalInput = t),
        (this.r = n.r),
        (this.g = n.g),
        (this.b = n.b),
        (this.a = n.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = a.format) !== null && r !== void 0 ? r : n.format),
        (this.gradientType = a.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = n.ok);
    }
    return (
      (e.prototype.isDark = function() {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function() {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function() {
        var t = this.toRgb(),
          a,
          r,
          n,
          i = t.r / 255,
          s = t.g / 255,
          c = t.b / 255;
        return (
          i <= 0.03928
            ? (a = i / 12.92)
            : (a = Math.pow((i + 0.055) / 1.055, 2.4)),
          s <= 0.03928
            ? (r = s / 12.92)
            : (r = Math.pow((s + 0.055) / 1.055, 2.4)),
          c <= 0.03928
            ? (n = c / 12.92)
            : (n = Math.pow((c + 0.055) / 1.055, 2.4)),
          0.2126 * a + 0.7152 * r + 0.0722 * n
        );
      }),
      (e.prototype.getAlpha = function() {
        return this.a;
      }),
      (e.prototype.setAlpha = function(t) {
        return (
          (this.a = P(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function() {
        var t = this.toHsl().s;
        return t === 0;
      }),
      (e.prototype.toHsv = function() {
        var t = L(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function() {
        var t = L(this.r, this.g, this.b),
          a = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          n = Math.round(t.v * 100);
        return this.a === 1
          ? 'hsv('
              .concat(a, ', ')
              .concat(r, '%, ')
              .concat(n, '%)')
          : 'hsva('
              .concat(a, ', ')
              .concat(r, '%, ')
              .concat(n, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHsl = function() {
        var t = B(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function() {
        var t = B(this.r, this.g, this.b),
          a = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          n = Math.round(t.l * 100);
        return this.a === 1
          ? 'hsl('
              .concat(a, ', ')
              .concat(r, '%, ')
              .concat(n, '%)')
          : 'hsla('
              .concat(a, ', ')
              .concat(r, '%, ')
              .concat(n, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1), A(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t);
      }),
      (e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1), K(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t);
      }),
      (e.prototype.toHexShortString = function(t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        );
      }),
      (e.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      }),
      (e.prototype.toRgbString = function() {
        var t = Math.round(this.r),
          a = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? 'rgb('
              .concat(t, ', ')
              .concat(a, ', ')
              .concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(a, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toPercentageRgb = function() {
        var t = function(a) {
          return ''.concat(Math.round(o(a, 255) * 100), '%');
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function() {
        var t = function(a) {
          return Math.round(o(a, 255) * 100);
        };
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toName = function() {
        if (this.a === 0) return 'transparent';
        if (this.a < 1) return !1;
        for (
          var t = '#' + A(this.r, this.g, this.b, !1),
            a = 0,
            r = Object.entries(F);
          a < r.length;
          a++
        ) {
          var n = r[a],
            i = n[0],
            s = n[1];
          if (t === s) return i;
        }
        return !1;
      }),
      (e.prototype.toString = function(t) {
        var a = !!t;
        t = t ?? this.format;
        var r = !1,
          n = this.a < 1 && this.a >= 0,
          i = !a && n && (t.startsWith('hex') || t === 'name');
        return i
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function() {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function() {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var a = this.toHsl();
        return (a.l += t / 100), (a.l = m(a.l)), new e(a);
      }),
      (e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var a = this.toRgb();
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(t / 100)))
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(t / 100)))
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(t / 100)))
          )),
          new e(a)
        );
      }),
      (e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var a = this.toHsl();
        return (a.l -= t / 100), (a.l = m(a.l)), new e(a);
      }),
      (e.prototype.tint = function(t) {
        return t === void 0 && (t = 10), this.mix('white', t);
      }),
      (e.prototype.shade = function(t) {
        return t === void 0 && (t = 10), this.mix('black', t);
      }),
      (e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var a = this.toHsl();
        return (a.s -= t / 100), (a.s = m(a.s)), new e(a);
      }),
      (e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var a = this.toHsl();
        return (a.s += t / 100), (a.s = m(a.s)), new e(a);
      }),
      (e.prototype.greyscale = function() {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function(t) {
        var a = this.toHsl(),
          r = (a.h + t) % 360;
        return (a.h = r < 0 ? 360 + r : r), new e(a);
      }),
      (e.prototype.mix = function(t, a) {
        a === void 0 && (a = 50);
        var r = this.toRgb(),
          n = new e(t).toRgb(),
          i = a / 100,
          s = {
            r: (n.r - r.r) * i + r.r,
            g: (n.g - r.g) * i + r.g,
            b: (n.b - r.b) * i + r.b,
            a: (n.a - r.a) * i + r.a
          };
        return new e(s);
      }),
      (e.prototype.analogous = function(t, a) {
        t === void 0 && (t = 6), a === void 0 && (a = 30);
        var r = this.toHsl(),
          n = 360 / a,
          i = [this];
        for (r.h = (r.h - ((n * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + n) % 360), i.push(new e(r));
        return i;
      }),
      (e.prototype.complement = function() {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (
          var a = this.toHsv(), r = a.h, n = a.s, i = a.v, s = [], c = 1 / t;
          t--;

        )
          s.push(new e({ h: r, s: n, v: i })), (i = (i + c) % 1);
        return s;
      }),
      (e.prototype.splitcomplement = function() {
        var t = this.toHsl(),
          a = t.h;
        return [
          this,
          new e({ h: (a + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (a + 216) % 360, s: t.s, l: t.l })
        ];
      }),
      (e.prototype.onBackground = function(t) {
        var a = this.toRgb(),
          r = new e(t).toRgb(),
          n = a.a + r.a * (1 - a.a);
        return new e({
          r: (a.r * a.a + r.r * r.a * (1 - a.a)) / n,
          g: (a.g * a.a + r.g * r.a * (1 - a.a)) / n,
          b: (a.b * a.a + r.b * r.a * (1 - a.a)) / n,
          a: n
        });
      }),
      (e.prototype.triad = function() {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function() {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function(t) {
        for (
          var a = this.toHsl(), r = a.h, n = [this], i = 360 / t, s = 1;
          s < t;
          s++
        )
          n.push(new e({ h: (r + s * i) % 360, s: a.s, l: a.l }));
        return n;
      }),
      (e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  x = 2,
  V = 0.16,
  at = 0.05,
  rt = 0.05,
  nt = 0.15,
  N = 5,
  j = 4,
  it = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 }
  ];
function E(e) {
  var t = e.r,
    a = e.g,
    r = e.b,
    n = L(t, a, r);
  return { h: n.h * 360, s: n.s, v: n.v };
}
function y(e) {
  var t = e.r,
    a = e.g,
    r = e.b;
  return '#'.concat(A(t, a, r, !1));
}
function st(e, t, a) {
  var r = a / 100,
    n = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    };
  return n;
}
function q(e, t, a) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = a ? Math.round(e.h) - x * t : Math.round(e.h) + x * t)
      : (r = a ? Math.round(e.h) + x * t : Math.round(e.h) - x * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function T(e, t, a) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    a ? (r = e.s - V * t) : t === j ? (r = e.s + V) : (r = e.s + at * t),
    r > 1 && (r = 1),
    a && t === N && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function I(e, t, a) {
  var r;
  return (
    a ? (r = e.v + rt * t) : (r = e.v - nt * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function D(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      a = [],
      r = v(e),
      n = N;
    n > 0;
    n -= 1
  ) {
    var i = E(r),
      s = y(v({ h: q(i, n, !0), s: T(i, n, !0), v: I(i, n, !0) }));
    a.push(s);
  }
  a.push(y(r));
  for (var c = 1; c <= j; c += 1) {
    var h = E(r),
      S = y(v({ h: q(h, c), s: T(h, c), v: I(h, c) }));
    a.push(S);
  }
  return t.theme === 'dark'
    ? it.map(function(b) {
        var w = b.index,
          G = b.opacity,
          W = y(st(v(t.backgroundColor || '#141414'), v(a[w]), G * 100));
        return W;
      })
    : a;
}
var O = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666'
  },
  p = {},
  k = {};
Object.keys(O).forEach(function(e) {
  (p[e] = D(O[e])),
    (p[e].primary = p[e][5]),
    (k[e] = D(O[e], { theme: 'dark', backgroundColor: '#141414' })),
    (k[e].primary = k[e][5]);
});
var Ut = p.gold,
  $t = p.blue,
  ct = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d:
              'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
          }
        }
      ]
    },
    name: 'down',
    theme: 'outlined'
  };
const Qt = ct;
var ot = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z'
        }
      }
    ]
  },
  name: 'loading',
  theme: 'outlined'
};
const Zt = ot;
var ht = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
        }
      }
    ]
  },
  name: 'check',
  theme: 'outlined'
};
const Jt = ht;
var lt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'
        }
      }
    ]
  },
  name: 'close',
  theme: 'outlined'
};
const Kt = lt;
var ft = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z'
        }
      }
    ]
  },
  name: 'close-circle',
  theme: 'filled'
};
const Xt = ft;
var ut = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'
        }
      }
    ]
  },
  name: 'search',
  theme: 'outlined'
};
const Yt = ut;
var dt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      }
    ]
  },
  name: 'check-circle',
  theme: 'outlined'
};
const _t = dt;
var gt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'
        }
      }
    ]
  },
  name: 'exclamation-circle',
  theme: 'outlined'
};
const te = gt;
var vt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z'
        }
      }
    ]
  },
  name: 'info-circle',
  theme: 'outlined'
};
const ee = vt;
var pt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      }
    ]
  },
  name: 'close-circle',
  theme: 'outlined'
};
const ae = pt;
var bt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z'
        }
      }
    ]
  },
  name: 'check-circle',
  theme: 'filled'
};
const re = bt;
var mt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z'
        }
      }
    ]
  },
  name: 'exclamation-circle',
  theme: 'filled'
};
const ne = mt;
var Mt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z'
        }
      }
    ]
  },
  name: 'info-circle',
  theme: 'filled'
};
const ie = Mt;
var xt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z'
        }
      }
    ]
  },
  name: 'ellipsis',
  theme: 'outlined'
};
const se = xt;
var yt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z'
        }
      }
    ]
  },
  name: 'right',
  theme: 'outlined'
};
const ce = yt;
var St = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
      {
        tag: 'path',
        attrs: {
          d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z'
        }
      }
    ]
  },
  name: 'plus',
  theme: 'outlined'
};
const oe = St;
var wt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z'
        }
      }
    ]
  },
  name: 'left',
  theme: 'outlined'
};
const he = wt;
var Ht = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z'
        }
      }
    ]
  },
  name: 'calendar',
  theme: 'outlined'
};
const le = Ht;
var zt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z'
        }
      }
    ]
  },
  name: 'clock-circle',
  theme: 'outlined'
};
const fe = zt;
var Ct = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z'
        }
      }
    ]
  },
  name: 'swap-right',
  theme: 'outlined'
};
const ue = Ct;
var Ot = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'
        }
      }
    ]
  },
  name: 'eye',
  theme: 'outlined'
};
const de = Ot;
var kt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z'
        }
      }
    ]
  },
  name: 'eye-invisible',
  theme: 'outlined'
};
const ge = kt;
var Lt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z'
        }
      }
    ]
  },
  name: 'double-left',
  theme: 'outlined'
};
const ve = Lt;
var At = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z'
        }
      }
    ]
  },
  name: 'double-right',
  theme: 'outlined'
};
const pe = At;
var Ft = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
        }
      }
    ]
  },
  name: 'caret-down',
  theme: 'outlined'
};
const be = Ft;
var Bt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z'
        }
      }
    ]
  },
  name: 'caret-up',
  theme: 'outlined'
};
const me = Bt;
var Rt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z'
        }
      }
    ]
  },
  name: 'filter',
  theme: 'filled'
};
const Me = Rt;
var Vt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z'
        }
      }
    ]
  },
  name: 'file',
  theme: 'outlined'
};
const xe = Vt;
var Et = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z'
        }
      }
    ]
  },
  name: 'minus-square',
  theme: 'outlined'
};
const ye = Et;
var qt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z'
        }
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z'
        }
      }
    ]
  },
  name: 'plus-square',
  theme: 'outlined'
};
const Se = qt;
var Tt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
        }
      }
    ]
  },
  name: 'caret-down',
  theme: 'filled'
};
const we = Tt;
var It = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z'
        }
      }
    ]
  },
  name: 'folder-open',
  theme: 'outlined'
};
const He = It;
var Dt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z'
        }
      }
    ]
  },
  name: 'folder',
  theme: 'outlined'
};
const ze = Dt;
var Pt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z'
        }
      }
    ]
  },
  name: 'enter',
  theme: 'outlined'
};
const Ce = Pt;
var Nt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
        }
      }
    ]
  },
  name: 'copy',
  theme: 'outlined'
};
const Oe = Nt;
var jt = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
        }
      }
    ]
  },
  name: 'edit',
  theme: 'outlined'
};
const ke = jt;
export {
  ke as A,
  se as B,
  Kt as C,
  ve as D,
  te as E,
  Me as F,
  oe as G,
  ee as I,
  Zt as L,
  ye as M,
  Se as P,
  ce as R,
  ue as S,
  Wt as T,
  Xt as a,
  $t as b,
  _t as c,
  ae as d,
  re as e,
  ne as f,
  D as g,
  ie as h,
  le as i,
  fe as j,
  de as k,
  ge as l,
  be as m,
  me as n,
  xe as o,
  we as p,
  He as q,
  ze as r,
  he as s,
  pe as t,
  Qt as u,
  Yt as v,
  Jt as w,
  Ce as x,
  Ut as y,
  Oe as z
};
