import {
  d as D,
  L as F,
  r as y,
  q as K,
  u as e,
  o as f,
  N as w,
  c as h,
  w as I,
  O as _,
  a0 as V,
  P as u,
  U,
  V as $
} from '../common/vendor.ff933118.js';
import { U as q, c as n } from '../main.df9e2abb.js';
import { J as A, S as J } from '../common/VendorStore.9a3ea1f4.js';
import { _ as Z } from '../common/_plugin-vue_export-helper.c27b6911.js';
import '../common/antd.01cefdb7.js';
import '../common/initDefaultProps.14498c5d.js';
const j = { key: 0, class: 'gmap' },
  H = ['placeholder'],
  Q = { class: 'gmap__map', id: 'gmap' },
  W = { key: 1 },
  X = { key: 2 },
  Y = D({
    __name: 'GMap',
    setup(ee) {
      const E = q(),
        { vendorSettings: t } = F(E),
        M = Number.parseInt(window.wcv_avp.map_zoom_level),
        S = window.google && window.google.maps,
        G = window.wcv_avp.is_pro_active,
        L = `${window.wcv_avp.admin_url}admin.php?page=wcv-settings&tab=forms`,
        O = () => {
          S && z();
        };
      let s = y(),
        i = y(),
        v,
        g;
      const c = y(!1);
      let b = [];
      const r = l => b.find(a => a.types.includes(l)),
        z = () => {
          const l = {
              center: {
                lat: Number.parseFloat(t.value.store_lat) || 0,
                lng: Number.parseFloat(t.value.store_lng) || 0
              },
              zoom: M,
              mapTypeId: google.maps.MapTypeId.TERRAIN,
              mapTypeControl: !1
            },
            p = {
              fields: [
                'formatted_address',
                'geometry',
                'name',
                'address_components',
                'vicinity'
              ],
              strictBounds: !1,
              types: ['establishment']
            };
          if (
            ((v = document.getElementById('gmap')),
            (g = document.getElementById('searchInput')),
            !v || !g)
          )
            return !1;
          (s.value = new google.maps.Map(v, l)),
            (i.value = new google.maps.Marker({
              map: s.value,
              anchorPoint: new google.maps.Point(0, -29)
            })),
            i.value.setVisible(!0),
            i.value.setPosition(l.center);
          const a = new google.maps.places.Autocomplete(g, p);
          a.bindTo('bounds', s.value),
            a.addListener('place_changed', () => {
              var m, k, N, x, C, P, T, B;
              const o = a.getPlace();
              if (!o.geometry || !o.geometry.location) return;
              const d = o.formatted_address ?? t.value.store_address1;
              (b = o.address_components ?? []),
                (m = s.value) == null || m.panTo(o.geometry.location),
                (k = s.value) == null || k.setZoom(M),
                (N = i.value) == null || N.setPosition(o.geometry.location),
                (t.value.store_postcode =
                  ((x = r('postal_code')) == null ? void 0 : x.long_name) ??
                  ''),
                (t.value.store_city =
                  ((C = r('locality')) == null ? void 0 : C.long_name) ??
                  ((P = r('administrative_area_level_2')) == null
                    ? void 0
                    : P.short_name) ??
                  ''),
                (t.value.store_state =
                  ((T = r('administrative_area_level_1')) == null
                    ? void 0
                    : T.short_name) ?? ''),
                (t.value.store_country =
                  ((B = r('country')) == null ? void 0 : B.short_name) ?? ''),
                (t.value.store_lat = o.geometry.location.lat().toString()),
                (t.value.store_lng = o.geometry.location.lng().toString()),
                (t.value.store_address = d);
            });
          var R = new google.maps.Geocoder();
          return (
            google.maps.event.addListener(s.value, 'click', function(o) {
              R.geocode({ location: o.latLng }, function(d, m) {
                m == google.maps.GeocoderStatus.OK && d && a.set('place', d[0]);
              });
            }),
            !0
          );
        };
      return (
        K(() => {
          O();
        }),
        (l, p) =>
          e(S)
            ? (f(),
              w('div', j, [
                h(e(J), null, {
                  default: I(() => [
                    _(
                      'input',
                      {
                        type: 'text',
                        id: 'searchInput',
                        placeholder: e(n)('mapSearch')
                      },
                      null,
                      8,
                      H
                    ),
                    h(
                      e(A),
                      {
                        type: 'primary',
                        onClick: p[0] || (p[0] = a => (c.value = !c.value))
                      },
                      {
                        default: I(() => [
                          V(u(c.value ? e(n)('hideMap') : e(n)('showMap')), 1)
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }),
                U(_('div', Q, null, 512), [[$, c.value]])
              ]))
            : e(G)
            ? (f(),
              w('div', X, [
                _('p', null, u(e(n)('mapNotLoaded')), 1),
                h(
                  e(A),
                  { type: 'primary', href: L },
                  { default: I(() => [V(u(e(n)('setMapAPIKey')), 1)]), _: 1 }
                )
              ]))
            : (f(), w('div', W, [_('p', null, u(e(n)('onlyPro')), 1)]))
      );
    }
  });
const pe = Z(Y, [['__scopeId', 'data-v-d3952438']]);
export { pe as default };
