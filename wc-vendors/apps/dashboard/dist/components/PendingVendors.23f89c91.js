import {
  d as K,
  l as i,
  g as Be,
  r as W,
  p as Pe,
  N as $e,
  f as _,
  w as Ce,
  F as Ie,
  o as ie,
  c as ye,
  I as y,
  u as g,
  L as R,
  Q as G,
  J as he,
  H as Me,
  S as Ee,
  m as Oe
} from '../common/vendor.47b1711b.js';
import {
  u as J,
  P as D,
  F as ze,
  a as M,
  c as ce,
  Q as Ve,
  R as je,
  S as De,
  g as He,
  m as ke,
  _ as L,
  r as Ge,
  T as Se,
  U as We,
  d as se,
  i as Ne,
  V as Q,
  o as xe,
  s as le,
  f as Re,
  W as Fe,
  D as Ke,
  X as be,
  n as Xe,
  p as j,
  q as Ue
} from '../common/Dashboard.9e45cc90.js';
import {
  c as qe,
  x as Qe,
  m as ue
} from '../common/createLucideIcon.42ab3542.js';
import { T as _e } from '../common/index.47c00042.js';
import { B as Je } from '../common/index.c74d9e7c.js';
import { a as Ye, C as de, B as oe } from '../common/index.56bcc88f.js';
import { S as Ze, C as et } from '../common/index.2af2cc8c.js';
import {
  u as tt,
  e as at,
  P as nt,
  S as it,
  A as lt
} from '../common/index.84b062db.js';
import { F as ot } from '../common/index.6e530893.js';
import '../main.1bdb0c68.js';
import '../common/antd.ddaabbc2.js';
import '../common/index.d0bc549f.js';
const rt = () => ({
    avatar: D.any,
    description: D.any,
    prefixCls: String,
    title: D.any
  }),
  st = K({
    compatConfig: { MODE: 3 },
    name: 'AListItemMeta',
    props: rt(),
    displayName: 'AListItemMeta',
    __ANT_LIST_ITEM_META: !0,
    slots: Object,
    setup(e, t) {
      let { slots: a } = t;
      const { prefixCls: l } = J('list', e);
      return () => {
        var d, u, f, s, h, m;
        const n = `${l.value}-item-meta`,
          c =
            (d = e.title) !== null && d !== void 0
              ? d
              : (u = a.title) === null || u === void 0
              ? void 0
              : u.call(a),
          o =
            (f = e.description) !== null && f !== void 0
              ? f
              : (s = a.description) === null || s === void 0
              ? void 0
              : s.call(a),
          S =
            (h = e.avatar) !== null && h !== void 0
              ? h
              : (m = a.avatar) === null || m === void 0
              ? void 0
              : m.call(a),
          x = i('div', { class: `${l.value}-item-meta-content` }, [
            c && i('h4', { class: `${l.value}-item-meta-title` }, [c]),
            o && i('div', { class: `${l.value}-item-meta-description` }, [o])
          ]);
        return i('div', { class: n }, [
          S && i('div', { class: `${l.value}-item-meta-avatar` }, [S]),
          (c || o) && x
        ]);
      };
    }
  }),
  we = Symbol('ListContextKey');
var dt =
  (globalThis && globalThis.__rest) ||
  function(e, t) {
    var a = {};
    for (var l in e)
      Object.prototype.hasOwnProperty.call(e, l) &&
        t.indexOf(l) < 0 &&
        (a[l] = e[l]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var d = 0, l = Object.getOwnPropertySymbols(e); d < l.length; d++)
        t.indexOf(l[d]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, l[d]) &&
          (a[l[d]] = e[l[d]]);
    return a;
  };
const ct = () => ({
    prefixCls: String,
    extra: D.any,
    actions: D.array,
    grid: Object,
    colStyle: { type: Object, default: void 0 }
  }),
  ut = K({
    compatConfig: { MODE: 3 },
    name: 'AListItem',
    inheritAttrs: !1,
    Meta: st,
    props: ct(),
    slots: Object,
    setup(e, t) {
      let { slots: a, attrs: l } = t;
      const { itemLayout: d, grid: u } = Be(we, { grid: W(), itemLayout: W() }),
        { prefixCls: f } = J('list', e),
        s = () => {
          var m;
          const n =
            ((m = a.default) === null || m === void 0 ? void 0 : m.call(a)) ||
            [];
          let c;
          return (
            n.forEach(o => {
              je(o) && !De(o) && (c = !0);
            }),
            c && n.length > 1
          );
        },
        h = () => {
          var m, n;
          const c =
            (m = e.extra) !== null && m !== void 0
              ? m
              : (n = a.extra) === null || n === void 0
              ? void 0
              : n.call(a);
          return d.value === 'vertical' ? !!c : !s();
        };
      return () => {
        var m, n, c, o, S;
        const { class: x } = l,
          w = dt(l, ['class']),
          C = f.value,
          v =
            (m = e.extra) !== null && m !== void 0
              ? m
              : (n = a.extra) === null || n === void 0
              ? void 0
              : n.call(a),
          I = (c = a.default) === null || c === void 0 ? void 0 : c.call(a);
        let $ =
          (o = e.actions) !== null && o !== void 0
            ? o
            : ze((S = a.actions) === null || S === void 0 ? void 0 : S.call(a));
        $ = $ && !Array.isArray($) ? [$] : $;
        const B =
            $ &&
            $.length > 0 &&
            i('ul', { class: `${C}-item-action`, key: 'actions' }, [
              $.map((z, A) =>
                i('li', { key: `${C}-item-action-${A}` }, [
                  z,
                  A !== $.length - 1 &&
                    i('em', { class: `${C}-item-action-split` }, null)
                ])
              )
            ]),
          E = u.value ? 'div' : 'li',
          O = i(
            E,
            M(
              M({}, w),
              {},
              { class: ce(`${C}-item`, { [`${C}-item-no-flex`]: !h() }, x) }
            ),
            {
              default: () => [
                d.value === 'vertical' && v
                  ? [
                      i('div', { class: `${C}-item-main`, key: 'content' }, [
                        I,
                        B
                      ]),
                      i('div', { class: `${C}-item-extra`, key: 'extra' }, [v])
                    ]
                  : [I, B, qe(v, { key: 'extra' })]
              ]
            }
          );
        return u.value
          ? i(Ve, { flex: 1, style: e.colStyle }, { default: () => [O] })
          : O;
      };
    }
  }),
  mt = e => {
    const {
      listBorderedCls: t,
      componentCls: a,
      paddingLG: l,
      margin: d,
      padding: u,
      listItemPaddingSM: f,
      marginLG: s,
      borderRadiusLG: h
    } = e;
    return {
      [`${t}`]: {
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        borderRadius: h,
        [`${a}-header,${a}-footer,${a}-item`]: { paddingInline: l },
        [`${a}-pagination`]: { margin: `${d}px ${s}px` }
      },
      [`${t}${a}-sm`]: {
        [`${a}-item,${a}-header,${a}-footer`]: { padding: f }
      },
      [`${t}${a}-lg`]: {
        [`${a}-item,${a}-header,${a}-footer`]: { padding: `${u}px ${l}px` }
      }
    };
  },
  gt = e => {
    const {
      componentCls: t,
      screenSM: a,
      screenMD: l,
      marginLG: d,
      marginSM: u,
      margin: f
    } = e;
    return {
      [`@media screen and (max-width:${l})`]: {
        [`${t}`]: {
          [`${t}-item`]: { [`${t}-item-action`]: { marginInlineStart: d } }
        },
        [`${t}-vertical`]: {
          [`${t}-item`]: { [`${t}-item-extra`]: { marginInlineStart: d } }
        }
      },
      [`@media screen and (max-width: ${a})`]: {
        [`${t}`]: {
          [`${t}-item`]: {
            flexWrap: 'wrap',
            [`${t}-action`]: { marginInlineStart: u }
          }
        },
        [`${t}-vertical`]: {
          [`${t}-item`]: {
            flexWrap: 'wrap-reverse',
            [`${t}-item-main`]: { minWidth: e.contentWidth },
            [`${t}-item-extra`]: { margin: `auto auto ${f}px` }
          }
        }
      }
    };
  },
  vt = e => {
    const {
      componentCls: t,
      antCls: a,
      controlHeight: l,
      minHeight: d,
      paddingSM: u,
      marginLG: f,
      padding: s,
      listItemPadding: h,
      colorPrimary: m,
      listItemPaddingSM: n,
      listItemPaddingLG: c,
      paddingXS: o,
      margin: S,
      colorText: x,
      colorTextDescription: w,
      motionDurationSlow: C,
      lineWidth: v
    } = e;
    return {
      [`${t}`]: L(L({}, Ge(e)), {
        position: 'relative',
        '*': { outline: 'none' },
        [`${t}-header, ${t}-footer`]: {
          background: 'transparent',
          paddingBlock: u
        },
        [`${t}-pagination`]: {
          marginBlockStart: f,
          textAlign: 'end',
          [`${a}-pagination-options`]: { textAlign: 'start' }
        },
        [`${t}-spin`]: { minHeight: d, textAlign: 'center' },
        [`${t}-items`]: { margin: 0, padding: 0, listStyle: 'none' },
        [`${t}-item`]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: h,
          color: x,
          [`${t}-item-meta`]: {
            display: 'flex',
            flex: 1,
            alignItems: 'flex-start',
            maxWidth: '100%',
            [`${t}-item-meta-avatar`]: { marginInlineEnd: s },
            [`${t}-item-meta-content`]: { flex: '1 0', width: 0, color: x },
            [`${t}-item-meta-title`]: {
              marginBottom: e.marginXXS,
              color: x,
              fontSize: e.fontSize,
              lineHeight: e.lineHeight,
              '> a': {
                color: x,
                transition: `all ${C}`,
                '&:hover': { color: m }
              }
            },
            [`${t}-item-meta-description`]: {
              color: w,
              fontSize: e.fontSize,
              lineHeight: e.lineHeight
            }
          },
          [`${t}-item-action`]: {
            flex: '0 0 auto',
            marginInlineStart: e.marginXXL,
            padding: 0,
            fontSize: 0,
            listStyle: 'none',
            '& > li': {
              position: 'relative',
              display: 'inline-block',
              padding: `0 ${o}px`,
              color: w,
              fontSize: e.fontSize,
              lineHeight: e.lineHeight,
              textAlign: 'center',
              '&:first-child': { paddingInlineStart: 0 }
            },
            [`${t}-item-action-split`]: {
              position: 'absolute',
              insetBlockStart: '50%',
              insetInlineEnd: 0,
              width: v,
              height: Math.ceil(e.fontSize * e.lineHeight) - e.marginXXS * 2,
              transform: 'translateY(-50%)',
              backgroundColor: e.colorSplit
            }
          }
        },
        [`${t}-empty`]: {
          padding: `${s}px 0`,
          color: w,
          fontSize: e.fontSizeSM,
          textAlign: 'center'
        },
        [`${t}-empty-text`]: {
          padding: s,
          color: e.colorTextDisabled,
          fontSize: e.fontSize,
          textAlign: 'center'
        },
        [`${t}-item-no-flex`]: { display: 'block' }
      }),
      [`${t}-grid ${a}-col > ${t}-item`]: {
        display: 'block',
        maxWidth: '100%',
        marginBlockEnd: S,
        paddingBlock: 0,
        borderBlockEnd: 'none'
      },
      [`${t}-vertical ${t}-item`]: {
        alignItems: 'initial',
        [`${t}-item-main`]: { display: 'block', flex: 1 },
        [`${t}-item-extra`]: { marginInlineStart: f },
        [`${t}-item-meta`]: {
          marginBlockEnd: s,
          [`${t}-item-meta-title`]: {
            marginBlockEnd: u,
            color: x,
            fontSize: e.fontSizeLG,
            lineHeight: e.lineHeightLG
          }
        },
        [`${t}-item-action`]: {
          marginBlockStart: s,
          marginInlineStart: 'auto',
          '> li': {
            padding: `0 ${s}px`,
            '&:first-child': { paddingInlineStart: 0 }
          }
        }
      },
      [`${t}-split ${t}-item`]: {
        borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
        '&:last-child': { borderBlockEnd: 'none' }
      },
      [`${t}-split ${t}-header`]: {
        borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
      },
      [`${t}-split${t}-empty ${t}-footer`]: {
        borderTop: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
      },
      [`${t}-loading ${t}-spin-nested-loading`]: { minHeight: l },
      [`${t}-split${t}-something-after-last-item ${a}-spin-container > ${t}-items > ${t}-item:last-child`]: {
        borderBlockEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`
      },
      [`${t}-lg ${t}-item`]: { padding: c },
      [`${t}-sm ${t}-item`]: { padding: n },
      [`${t}:not(${t}-vertical)`]: {
        [`${t}-item-no-flex`]: { [`${t}-item-action`]: { float: 'right' } }
      }
    };
  },
  pt = He(
    'List',
    e => {
      const t = ke(e, {
        listBorderedCls: `${e.componentCls}-bordered`,
        minHeight: e.controlHeightLG,
        listItemPadding: `${e.paddingContentVertical}px ${e.paddingContentHorizontalLG}px`,
        listItemPaddingSM: `${e.paddingContentVerticalSM}px ${e.paddingContentHorizontal}px`,
        listItemPaddingLG: `${e.paddingContentVerticalLG}px ${e.paddingContentHorizontalLG}px`
      });
      return [vt(t), mt(t), gt(t)];
    },
    { contentWidth: 220 }
  ),
  ft = () => ({
    bordered: se(),
    dataSource: Ne(),
    extra: Q(),
    grid: xe(),
    itemLayout: String,
    loading: le([Boolean, Object]),
    loadMore: Q(),
    pagination: le([Boolean, Object]),
    prefixCls: String,
    rowKey: le([String, Number, Function]),
    renderItem: Re(),
    size: String,
    split: se(),
    header: Q(),
    footer: Q(),
    locale: xe()
  }),
  P = K({
    compatConfig: { MODE: 3 },
    name: 'AList',
    inheritAttrs: !1,
    Item: ut,
    props: Qe(ft(), {
      dataSource: [],
      bordered: !1,
      split: !0,
      loading: !1,
      pagination: !1
    }),
    slots: Object,
    setup(e, t) {
      let { slots: a, attrs: l } = t;
      var d, u;
      Pe(we, { grid: $e(e, 'grid'), itemLayout: $e(e, 'itemLayout') });
      const f = { current: 1, total: 0 },
        { prefixCls: s, direction: h, renderEmpty: m } = J('list', e),
        [n, c] = pt(s),
        o = _(() =>
          e.pagination && typeof e.pagination == 'object' ? e.pagination : {}
        ),
        S = W((d = o.value.defaultCurrent) !== null && d !== void 0 ? d : 1),
        x = W((u = o.value.defaultPageSize) !== null && u !== void 0 ? u : 10);
      Ce(o, () => {
        'current' in o.value && (S.value = o.value.current),
          'pageSize' in o.value && (x.value = o.value.pageSize);
      });
      const w = [],
        C = r => (p, b) => {
          (S.value = p), (x.value = b), o.value[r] && o.value[r](p, b);
        },
        v = C('onChange'),
        I = C('onShowSizeChange'),
        $ = _(() =>
          typeof e.loading == 'boolean' ? { spinning: e.loading } : e.loading
        ),
        B = _(() => $.value && $.value.spinning),
        E = _(() => {
          let r = '';
          switch (e.size) {
            case 'large':
              r = 'lg';
              break;
            case 'small':
              r = 'sm';
              break;
          }
          return r;
        }),
        O = _(() => ({
          [`${s.value}`]: !0,
          [`${s.value}-vertical`]: e.itemLayout === 'vertical',
          [`${s.value}-${E.value}`]: E.value,
          [`${s.value}-split`]: e.split,
          [`${s.value}-bordered`]: e.bordered,
          [`${s.value}-loading`]: B.value,
          [`${s.value}-grid`]: !!e.grid,
          [`${s.value}-rtl`]: h.value === 'rtl'
        })),
        z = _(() => {
          const r = L(
              L(L({}, f), {
                total: e.dataSource.length,
                current: S.value,
                pageSize: x.value
              }),
              e.pagination || {}
            ),
            p = Math.ceil(r.total / r.pageSize);
          return r.current > p && (r.current = p), r;
        }),
        A = _(() => {
          let r = [...e.dataSource];
          return (
            e.pagination &&
              e.dataSource.length > (z.value.current - 1) * z.value.pageSize &&
              (r = [...e.dataSource].splice(
                (z.value.current - 1) * z.value.pageSize,
                z.value.pageSize
              )),
            r
          );
        }),
        X = tt(),
        H = at(() => {
          for (let r = 0; r < Se.length; r += 1) {
            const p = Se[r];
            if (X.value[p]) return p;
          }
        }),
        N = _(() => {
          if (!e.grid) return;
          const r =
            H.value && e.grid[H.value] ? e.grid[H.value] : e.grid.column;
          if (r) return { width: `${100 / r}%`, maxWidth: `${100 / r}%` };
        }),
        U = (r, p) => {
          var b;
          const k =
            (b = e.renderItem) !== null && b !== void 0 ? b : a.renderItem;
          if (!k) return null;
          let T;
          const V = typeof e.rowKey;
          return (
            V === 'function'
              ? (T = e.rowKey(r))
              : V === 'string' || V === 'number'
              ? (T = r[e.rowKey])
              : (T = r.key),
            T || (T = `list-item-${p}`),
            (w[p] = T),
            k({ item: r, index: p })
          );
        };
      return () => {
        var r, p, b, k, T, V, Y, Z;
        const me =
            (r = e.loadMore) !== null && r !== void 0
              ? r
              : (p = a.loadMore) === null || p === void 0
              ? void 0
              : p.call(a),
          ee =
            (b = e.footer) !== null && b !== void 0
              ? b
              : (k = a.footer) === null || k === void 0
              ? void 0
              : k.call(a),
          ge =
            (T = e.header) !== null && T !== void 0
              ? T
              : (V = a.header) === null || V === void 0
              ? void 0
              : V.call(a),
          ve = ze(
            (Y = a.default) === null || Y === void 0 ? void 0 : Y.call(a)
          ),
          Le = !!(me || e.pagination || ee),
          Ae = ce(
            L(L({}, O.value), { [`${s.value}-something-after-last-item`]: Le }),
            l.class,
            c.value
          ),
          pe = e.pagination
            ? i('div', { class: `${s.value}-pagination` }, [
                i(
                  nt,
                  M(M({}, z.value), {}, { onChange: v, onShowSizeChange: I }),
                  null
                )
              ])
            : null;
        let te = B.value && i('div', { style: { minHeight: '53px' } }, null);
        if (A.value.length > 0) {
          w.length = 0;
          const fe = A.value.map((ae, ne) => U(ae, ne)),
            Te = fe.map((ae, ne) =>
              i('div', { key: w[ne], style: N.value }, [ae])
            );
          te = e.grid
            ? i(We, { gutter: e.grid.gutter }, { default: () => [Te] })
            : i('ul', { class: `${s.value}-items` }, [fe]);
        } else
          !ve.length &&
            !B.value &&
            (te = i('div', { class: `${s.value}-empty-text` }, [
              ((Z = e.locale) === null || Z === void 0
                ? void 0
                : Z.emptyText) || m('List')
            ]));
        const q = z.value.position || 'bottom';
        return n(
          i('div', M(M({}, l), {}, { class: Ae }), [
            (q === 'top' || q === 'both') && pe,
            ge && i('div', { class: `${s.value}-header` }, [ge]),
            i(it, $.value, { default: () => [te, ve] }),
            ee && i('div', { class: `${s.value}-footer` }, [ee]),
            me || ((q === 'bottom' || q === 'both') && pe)
          ])
        );
      };
    }
  });
P.install = function(e) {
  return (
    e.component(P.name, P),
    e.component(P.Item.name, P.Item),
    e.component(P.Item.Meta.name, P.Item.Meta),
    e
  );
};
const re = P,
  $t = { small: 8, middle: 16, large: 24 },
  yt = () => ({
    prefixCls: String,
    size: { type: [String, Number, Array] },
    direction: D.oneOf(be('horizontal', 'vertical')).def('horizontal'),
    align: D.oneOf(be('start', 'end', 'center', 'baseline')),
    wrap: se()
  });
function ht(e) {
  return typeof e == 'string' ? $t[e] : e || 0;
}
const F = K({
  compatConfig: { MODE: 3 },
  name: 'ASpace',
  inheritAttrs: !1,
  props: yt(),
  slots: Object,
  setup(e, t) {
    let { slots: a, attrs: l } = t;
    const { prefixCls: d, space: u, direction: f } = J('space', e),
      [s, h] = Ye(d),
      m = Fe(),
      n = _(() => {
        var v, I, $;
        return ($ =
          (v = e.size) !== null && v !== void 0
            ? v
            : (I = u == null ? void 0 : u.value) === null || I === void 0
            ? void 0
            : I.size) !== null && $ !== void 0
          ? $
          : 'small';
      }),
      c = W(),
      o = W();
    Ce(
      n,
      () => {
        [c.value, o.value] = (Array.isArray(n.value)
          ? n.value
          : [n.value, n.value]
        ).map(v => ht(v));
      },
      { immediate: !0 }
    );
    const S = _(() =>
        e.align === void 0 && e.direction === 'horizontal' ? 'center' : e.align
      ),
      x = _(() =>
        ce(d.value, h.value, `${d.value}-${e.direction}`, {
          [`${d.value}-rtl`]: f.value === 'rtl',
          [`${d.value}-align-${S.value}`]: S.value
        })
      ),
      w = _(() => (f.value === 'rtl' ? 'marginLeft' : 'marginRight')),
      C = _(() => {
        const v = {};
        return (
          m.value &&
            ((v.columnGap = `${c.value}px`), (v.rowGap = `${o.value}px`)),
          L(
            L({}, v),
            e.wrap && { flexWrap: 'wrap', marginBottom: `${-o.value}px` }
          )
        );
      });
    return () => {
      var v, I;
      const { wrap: $, direction: B = 'horizontal' } = e,
        E = (v = a.default) === null || v === void 0 ? void 0 : v.call(a),
        O = Ke(E),
        z = O.length;
      if (z === 0) return null;
      const A = (I = a.split) === null || I === void 0 ? void 0 : I.call(a),
        X = `${d.value}-item`,
        H = c.value,
        N = z - 1;
      return i(
        'div',
        M(
          M({}, l),
          {},
          { class: [x.value, l.class], style: [C.value, l.style] }
        ),
        [
          O.map((U, r) => {
            let p = E.indexOf(U);
            p === -1 && (p = `$$space-${r}`);
            let b = {};
            return (
              m.value ||
                (B === 'vertical'
                  ? r < N && (b = { marginBottom: `${H / (A ? 2 : 1)}px` })
                  : (b = L(
                      L({}, r < N && { [w.value]: `${H / (A ? 2 : 1)}px` }),
                      $ && { paddingBottom: `${o.value}px` }
                    ))),
              s(
                i(Ie, { key: p }, [
                  i('div', { class: X, style: b }, [U]),
                  r < N &&
                    A &&
                    i('span', { class: `${X}-split`, style: b }, [A])
                ])
              )
            );
          })
        ]
      );
    };
  }
});
F.Compact = de;
F.install = function(e) {
  return e.component(F.name, F), e.component(de.name, de), e;
};
const St = F;
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xt = ue('ChevronRightIcon', [
  ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]
]);
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bt = ue('ClockIcon', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }]
]);
/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _t = ue('UserIcon', [
    ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
    ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }]
  ]),
  Ct = { style: { 'vertical-align': 'middle' } },
  It = K({
    __name: 'PendingVendors',
    setup(e) {
      const t = Xe(),
        a = _(() => {
          var n, c;
          return (
            ((c = (n = t.dashboardData) == null ? void 0 : n.data) == null
              ? void 0
              : c.pending_vendors) || []
          );
        }),
        l = _(() => t.isLoading),
        d = n => {
          if (!n) return '';
          try {
            return new Date(n).toISOString().split('T')[0];
          } catch (c) {
            return console.error('Error parsing date:', c), '';
          }
        },
        u = n => {
          var c;
          (c = t.dashboardData) != null &&
            c.data &&
            (t.dashboardData.data.pending_vendors = t.dashboardData.data.pending_vendors.filter(
              o => o.id !== n
            ));
        },
        f = async n => {
          !n ||
            !n.id ||
            (await t.setVendorApprovalAction(n.id, 'approve'), u(n.id));
        },
        s = async n => {
          !n ||
            !n.id ||
            (await t.setVendorApprovalAction(n.id, 'deny'), u(n.id));
        },
        h = () => {
          window.location.href = window.wcv_dashboard_data.all_vendors_page_url;
        },
        m = n => n || j().pendingVendors.unknownVendor;
      return (n, c) => (
        ie(),
        ye(
          g(et),
          { class: 'vendors-card', loading: l.value, bordered: !1 },
          {
            title: y(() => [
              i(
                g(ot),
                { align: 'center', gap: 'small' },
                {
                  default: y(() => [
                    i(g(bt), { color: '#fa8c16', size: 24 }),
                    i(
                      g(_e).Title,
                      { level: 5, style: { margin: '0' } },
                      {
                        default: y(() => [
                          R(G(g(j)().pendingVendors.title), 1)
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      g(Je),
                      {
                        count: a.value.length,
                        'number-style': { backgroundColor: '#ff4d4f' }
                      },
                      null,
                      8,
                      ['count']
                    )
                  ]),
                  _: 1
                }
              )
            ]),
            extra: y(() => [
              i(
                g(oe),
                {
                  type: 'link',
                  style: {
                    color: '#fa8c16',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center'
                  },
                  onClick: h
                },
                {
                  default: y(() => [
                    he('span', Ct, G(g(j)().pendingVendors.viewAll), 1),
                    i(g(xt), {
                      class: 'chevron-right',
                      color: '#fa8c16',
                      size: 16
                    })
                  ]),
                  _: 1
                }
              )
            ]),
            default: y(() => [
              l.value
                ? (ie(),
                  Me(
                    Ie,
                    { key: 0 },
                    Ee(3, o =>
                      he('div', { key: o, class: 'skeleton-item' }, [
                        i(g(Ze), {
                          avatar: '',
                          paragraph: { rows: 1 },
                          active: ''
                        })
                      ])
                    ),
                    64
                  ))
                : (ie(),
                  ye(
                    g(re),
                    {
                      key: 1,
                      'item-layout': 'horizontal',
                      'data-source': a.value,
                      pagination: !1,
                      loading: l.value,
                      locale: { emptyText: g(j)().pendingVendors.noData }
                    },
                    {
                      renderItem: y(({ item: o }) => [
                        i(
                          g(re).Item,
                          null,
                          {
                            actions: y(() => [
                              i(
                                g(St),
                                null,
                                {
                                  default: y(() => [
                                    i(
                                      g(oe),
                                      {
                                        type: 'primary',
                                        style: {
                                          'background-color': '#52c41a',
                                          'border-color': '#52c41a'
                                        },
                                        disabled: l.value,
                                        onClick: () => f(o)
                                      },
                                      {
                                        default: y(() => [
                                          R(
                                            G(
                                              g(j)().pendingVendors.actions
                                                .approve
                                            ),
                                            1
                                          )
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ['disabled', 'onClick']
                                    ),
                                    i(
                                      g(oe),
                                      {
                                        danger: '',
                                        disabled: l.value,
                                        onClick: () => s(o)
                                      },
                                      {
                                        default: y(() => [
                                          R(
                                            G(
                                              g(j)().pendingVendors.actions
                                                .reject
                                            ),
                                            1
                                          )
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ['disabled', 'onClick']
                                    )
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            ]),
                            default: y(() => [
                              i(
                                g(re).Item.Meta,
                                { class: 'list-item-meta' },
                                {
                                  avatar: y(() => [
                                    i(
                                      g(lt),
                                      {
                                        style: { backgroundColor: '#5cdbd3' },
                                        icon: Oe(g(_t)),
                                        src: o.avatar,
                                        size: {
                                          xs: 24,
                                          sm: 24,
                                          md: 32,
                                          lg: 32,
                                          xl: 32,
                                          xxl: 32
                                        }
                                      },
                                      null,
                                      8,
                                      ['icon', 'src']
                                    )
                                  ]),
                                  title: y(() => [
                                    i(
                                      g(_e).Title,
                                      {
                                        level: 5,
                                        style: { marginTop: '-1.33em' }
                                      },
                                      {
                                        default: y(() => [
                                          R(G(m(o.display_name)), 1)
                                        ]),
                                        _: 2
                                      },
                                      1024
                                    )
                                  ]),
                                  description: y(() => [
                                    R(
                                      G(
                                        g(j)().pendingVendors.registered +
                                          ': ' +
                                          d(o.registered)
                                      ),
                                      1
                                    )
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            ]),
                            _: 2
                          },
                          1024
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['data-source', 'loading', 'locale']
                  ))
            ]),
            _: 1
          },
          8,
          ['loading']
        )
      );
    }
  });
const Dt = Ue(It, [['__scopeId', 'data-v-76356855']]);
export { Dt as default };
