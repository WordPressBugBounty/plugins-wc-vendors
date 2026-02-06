import { z as s, d as e } from '../main.d2f63bca.js'
import {
  d as v,
  L as d,
  U as c,
  b as E,
  r as D,
  o as P,
  a as f,
  a7 as T,
  a8 as V,
  a9 as O,
  u as R
} from '../common/vendor.c7ac217d.js'
import '../common/antd.1fca4c02.js'
const A = (a, _) => {
    const t = a[_]
    return t
      ? typeof t == 'function'
        ? t()
        : Promise.resolve(t)
      : new Promise((n, i) => {
          ;(typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
            i.bind(null, new Error('Unknown variable dynamic import: ' + _))
          )
        })
  },
  I = v({
    __name: 'DynamicComponent',
    props: { name: String, params: Object },
    setup(a) {
      const _ = a,
        t = s(),
        { vendorSettings: n } = d(t),
        { name: i, params: r } = c(_),
        p = r == null ? void 0 : r.value,
        l = E(() =>
          A(
            Object.assign({
              './Admin.vue': () =>
                e(
                  () => import('./Admin.3f6f931c.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/Admin.3f6f931c.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js'
                  ],
                  import.meta.url
                ),
              './CommissionTiers.vue': () =>
                e(
                  () => import('./CommissionTiers.fa24825d.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/CommissionTiers.fa24825d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.d3a17d8d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.3bcb2aa9.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.e98ba066.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.2f9d31f8.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.d2b62d10.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.aa07ebbd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/hasIn.c63e6020.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-ec409874.css',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.88348e24.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.99e6b1c5.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.c3ec2d73.js'
                  ],
                  import.meta.url
                ),
              './DynamicComponent.vue': () =>
                e(
                  () => Promise.resolve().then(() => L),
                  void 0,
                  import.meta.url
                ),
              './DynamicControl.vue': () =>
                e(
                  () =>
                    import('../common/DynamicControl.3bcb2aa9.js').then(
                      o => o.D
                    ),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.3bcb2aa9.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.e98ba066.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.d3a17d8d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.2f9d31f8.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.d2b62d10.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.aa07ebbd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/hasIn.c63e6020.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-ec409874.css'
                  ],
                  import.meta.url
                ),
              './GMap.vue': () =>
                e(
                  () => import('./GMap.3b621ed5.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/GMap.3b621ed5.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/GMap-86d63f51.css'
                  ],
                  import.meta.url
                ),
              './OpeningHours.vue': () =>
                e(
                  () => import('./OpeningHours.e60d6d24.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/OpeningHours.e60d6d24.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.d3a17d8d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.aa07ebbd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.3bcb2aa9.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.e98ba066.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.2f9d31f8.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.d2b62d10.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/hasIn.c63e6020.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-ec409874.css',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.88348e24.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.99e6b1c5.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.c3ec2d73.js'
                  ],
                  import.meta.url
                ),
              './ShippingAddress.vue': () =>
                e(
                  () => import('./ShippingAddress.eba09565.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/ShippingAddress.eba09565.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.3bcb2aa9.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.e98ba066.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.d3a17d8d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.2f9d31f8.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.d2b62d10.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.aa07ebbd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/hasIn.c63e6020.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-ec409874.css'
                  ],
                  import.meta.url
                ),
              './ShippingFlat.vue': () =>
                e(
                  () => import('./ShippingFlat.f754bf0c.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/ShippingFlat.f754bf0c.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.3bcb2aa9.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.e98ba066.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.d3a17d8d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.2f9d31f8.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.d2b62d10.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.aa07ebbd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/hasIn.c63e6020.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-ec409874.css',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.f2b34937.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.c3ec2d73.js'
                  ],
                  import.meta.url
                ),
              './ShippingTableRates.vue': () =>
                e(
                  () => import('./ShippingTableRates.40831d90.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/ShippingTableRates.40831d90.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/DynamicControl.3bcb2aa9.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.e98ba066.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.d3a17d8d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.2f9d31f8.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.d2b62d10.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.aa07ebbd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/hasIn.c63e6020.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/DynamicControl-ec409874.css',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.88348e24.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.99e6b1c5.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.c3ec2d73.js'
                  ],
                  import.meta.url
                ),
              './Spinner.vue': () =>
                e(
                  () => import('./Spinner.3bc040a4.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/Spinner.3bc040a4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.99e6b1c5.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js'
                  ],
                  import.meta.url
                ),
              './VendorApprovalModal.vue': () =>
                e(
                  () => import('./VendorApprovalModal.6f3521c4.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/VendorApprovalModal.6f3521c4.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.99e6b1c5.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/hasIn.c63e6020.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.d3a17d8d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.f2b34937.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.c3ec2d73.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.88348e24.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/VendorApprovalModal-60c96757.css'
                  ],
                  import.meta.url
                ),
              './VendorDetailModal.vue': () =>
                e(
                  () => import('./VendorDetailModal.5fe7421d.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/VendorDetailModal.5fe7421d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.99e6b1c5.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.c3ec2d73.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.e98ba066.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.2f9d31f8.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/VendorDetailModal-010bd40d.css'
                  ],
                  import.meta.url
                ),
              './VendorEdit.vue': () =>
                e(
                  () =>
                    import('../common/VendorEdit.d2b62d10.js').then(o => o.V),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorEdit.d2b62d10.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.aa07ebbd.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/ActionButton.7aaa0aa3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/hasIn.c63e6020.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.2f9d31f8.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.231110d3.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.e98ba066.js'
                  ],
                  import.meta.url
                ),
              './VendorTable.vue': () =>
                e(
                  () => import('./VendorTable.ac1eeff9.js'),
                  [
                    window.wcv_avp.pluginDirUrl +
                      '/dist/components/VendorTable.ac1eeff9.js',
                    window.wcv_avp.pluginDirUrl + '/dist/main.d2f63bca.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/vendor.c7ac217d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/antd.1fca4c02.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/VendorStore.03335c4e.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/initDefaultProps.e3cf1eda.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/_plugin-vue_export-helper.c27b6911.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.88348e24.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.99e6b1c5.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.d3a17d8d.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/responsiveObserve.c3ec2d73.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/common/index.f2b34937.js',
                    window.wcv_avp.pluginDirUrl +
                      '/dist/assets/VendorTable-0c918a86.css'
                  ],
                  import.meta.url
                )
            }),
            `./${i == null ? void 0 : i.value}.vue`
          )
        ),
        u = D({})
      if (r != null && r.value)
        for (let o in p) {
          let m = p[o]
          o === 'rates'
            ? (u.value[o] = n == null ? void 0 : n.value[m])
            : (u.value[o] = m)
        }
      else u.value = {}
      return (o, m) => (P(), f(O(R(l)), T(V({ ...u.value })), null, 16))
    }
  }),
  L = Object.freeze(
    Object.defineProperty({ __proto__: null, default: I }, Symbol.toStringTag, {
      value: 'Module'
    })
  )
export { I as default }
