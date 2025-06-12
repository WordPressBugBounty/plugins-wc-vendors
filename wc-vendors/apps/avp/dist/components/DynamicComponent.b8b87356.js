import { U as l, d as e } from '../main.df9e2abb.js';
import {
  d as v,
  L as c,
  Z as d,
  b as E,
  r as f,
  o as P,
  a as D,
  a4 as T,
  a5 as O,
  a6 as R,
  u as V
} from '../common/vendor.ff933118.js';
import '../common/antd.01cefdb7.js';
const A = (a, n) => {
    const t = a[n];
    return t
      ? typeof t == 'function'
        ? t()
        : Promise.resolve(t)
      : new Promise((_, i) => {
          (typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
            i.bind(null, new Error('Unknown variable dynamic import: ' + n))
          );
        });
  },
  y = v({
    __name: 'DynamicComponent',
    props: { name: String, params: Object },
    setup(a) {
      const n = a,
        t = l(),
        { vendorSettings: _ } = c(t),
        { name: i, params: r } = d(n),
        p = r == null ? void 0 : r.value,
        s = E(() =>
          A(
            Object.assign({
              './Admin.vue': () =>
                e(
                  () => import('./Admin.c38dc0b0.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/Admin.c38dc0b0.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js'
                  ],
                  import.meta.url
                ),
              './CommissionTiers.vue': () =>
                e(
                  () => import('./CommissionTiers.1411b613.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/CommissionTiers.1411b613.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0de37137.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.706beb75.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0e8dbddd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.6af322b2.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-3dce6b60.css',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.5816fc50.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.9883767e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.41613a82.js'
                  ],
                  import.meta.url
                ),
              './DynamicComponent.vue': () =>
                e(
                  () => Promise.resolve().then(() => I),
                  void 0,
                  import.meta.url
                ),
              './DynamicControl.vue': () =>
                e(
                  () =>
                    import('../common/DynamicControl.706beb75.js').then(
                      o => o.D
                    ),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.706beb75.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0e8dbddd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0de37137.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.6af322b2.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-3dce6b60.css'
                  ],
                  import.meta.url
                ),
              './GMap.vue': () =>
                e(
                  () => import('./GMap.3e1777ad.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/GMap.3e1777ad.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/GMap-86d63f51.css'
                  ],
                  import.meta.url
                ),
              './OpeningHours.vue': () =>
                e(
                  () => import('./OpeningHours.e848ec76.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/OpeningHours.e848ec76.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0de37137.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0e8dbddd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.706beb75.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.6af322b2.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-3dce6b60.css',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.5816fc50.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.9883767e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.41613a82.js'
                  ],
                  import.meta.url
                ),
              './ShippingAddress.vue': () =>
                e(
                  () => import('./ShippingAddress.51c0a2df.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/ShippingAddress.51c0a2df.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.706beb75.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0e8dbddd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0de37137.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.6af322b2.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-3dce6b60.css'
                  ],
                  import.meta.url
                ),
              './ShippingFlat.vue': () =>
                e(
                  () => import('./ShippingFlat.ab96bce7.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/ShippingFlat.ab96bce7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.706beb75.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0e8dbddd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0de37137.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.6af322b2.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-3dce6b60.css',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.5b92064e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.41613a82.js'
                  ],
                  import.meta.url
                ),
              './ShippingTableRates.vue': () =>
                e(
                  () => import('./ShippingTableRates.97254925.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/ShippingTableRates.97254925.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.706beb75.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0e8dbddd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0de37137.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.6af322b2.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-3dce6b60.css',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.5816fc50.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.9883767e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.41613a82.js'
                  ],
                  import.meta.url
                ),
              './Spinner.vue': () =>
                e(
                  () => import('./Spinner.c4c11ddf.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/Spinner.c4c11ddf.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.9883767e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js'
                  ],
                  import.meta.url
                ),
              './VendorEdit.vue': () =>
                e(
                  () =>
                    import('../common/VendorEdit.6af322b2.js').then(o => o.V),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.6af322b2.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0e8dbddd.js'
                  ],
                  import.meta.url
                ),
              './VendorTable.vue': () =>
                e(
                  () => import('./VendorTable.6c8041ae.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/VendorTable.6c8041ae.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.df9e2abb.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.ff933118.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.01cefdb7.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.9a3ea1f4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.14498c5d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.5816fc50.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.9883767e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.0de37137.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.41613a82.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.5b92064e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/VendorTable-baafd03b.css'
                  ],
                  import.meta.url
                )
            }),
            `./${i == null ? void 0 : i.value}.vue`
          )
        ),
        u = f({});
      if (r != null && r.value)
        for (let o in p) {
          let m = p[o];
          o === 'rates'
            ? (u.value[o] = _ == null ? void 0 : _.value[m])
            : (u.value[o] = m);
        }
      else u.value = {};
      return (o, m) => (P(), D(R(V(s)), T(O({ ...u.value })), null, 16));
    }
  }),
  I = Object.freeze(
    Object.defineProperty({ __proto__: null, default: y }, Symbol.toStringTag, {
      value: 'Module'
    })
  );
export { y as default };
