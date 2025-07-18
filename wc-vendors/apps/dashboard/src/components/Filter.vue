<script setup lang="ts">
  import { i18n } from '@/helpers/dashboard.helper'
  import { ref, computed } from 'vue'
  import type { SelectProps } from 'ant-design-vue'
  import { RangePicker, Select, Typography, Flex, Button } from 'ant-design-vue'
  import { Calendar } from 'lucide-vue-next'
  import { useDashboardStore } from '../stores/dashboard.store'
  import type { Dayjs } from 'dayjs'
  import type { Period } from '../types'
  const dashboardStore = useDashboardStore()

  const period = ref < Period > (dashboardStore.period)
  const isLoading = computed(() => dashboardStore.isLoading)
  const periodOptions = ref < SelectProps['options'] > ([
    {
      label: i18n().filter.last7Days,
      value: 'last_7_days'
    },
    {
      label: i18n().filter.last14Days,
      value: 'last_14_days'
    },
    {
      label: i18n().filter.last30Days,
      value: 'last_30_days'
    },
    {
      label: i18n().filter.last3Months,
      value: 'last_3_months'
    },
    {
      label: i18n().filter.last6Months,
      value: 'last_6_months'
    },
    {
      label: i18n().filter.lastYear,
      value: 'last_year'
    },
    {
      label: i18n().filter.custom,
      value: 'custom'
    }
  ])

  const showCustomRange = ref < boolean > (false)
  const customRange = ref < Dayjs[] > ([])

  const handlePeriodChange = (value: string) => {
    const selectedPeriod = periodOptions.value?.find(option => option.value === value)
    if (selectedPeriod) {
      dashboardStore.period = selectedPeriod as Period
    }

    if (value === 'custom') {
      showCustomRange.value = true
    } else {
      showCustomRange.value = false
      dashboardStore.startDate = null
      dashboardStore.endDate = null
      dashboardStore.fetchDashboardData()
    }
  }

  const handleCustomRange = (value: Dayjs[]) => {
    if (value) {
      dashboardStore.startDate = value[0].format('YYYY-MM-DD')
      dashboardStore.endDate = value[1].format('YYYY-MM-DD')
    }
  }

  const applyCustomRange = () => {
    // Check for custom range first in case of custom range is cleared
    if (dashboardStore.startDate === null || dashboardStore.endDate === null) {

    } else {
      dashboardStore.fetchDashboardData()
    }
  }
</script>

<template>
  <div class="filter-container">
    <Flex align="center" justify="space-between" wrap="wrap">
      <Typography.Title :level="3" :style="{ margin: 0, fontSize: '23px', fontWeight: 'normal' }">
        {{ i18n().dashboard.title }}
      </Typography.Title>

      <Flex align="center" gap="small" :class="['filter-controls', { 'with-custom-range': showCustomRange }]"
        :style="{ backgroundColor: '#f5f5f5', padding: '8px 16px', borderRadius: '4px', border: '1px solid #e0e0e0' }">
        <Calendar size="23" color="#000" />

        <!-- Period Select -->
        <Select v-model:value="period" :options="periodOptions"
          :style="{ width: '200px', paddingTop: '4px', paddingBottom: '4px' }" :bordered="true"
          :dropdown-match-select-width="false" :disabled="isLoading" @change="handlePeriodChange" />

        <!-- Custom Range Container (on the right) -->
        <div :class="['custom-range-container', { 'show': showCustomRange }]">
          <RangePicker v-model:value="customRange" :style="{ paddingTop: '5px', paddingBottom: '5px' }"
            :disabled="isLoading" @change="handleCustomRange" />
          <Button type="primary" size="middle" :disabled="isLoading || !customRange" @click="applyCustomRange">
            {{ i18n().filter.apply }}
          </Button>
        </div>
      </Flex>
    </Flex>
  </div>
</template>

<style scoped>
  /* Parent container animation */
  .filter-controls {
    transition: width 0.5s ease;
  }

  /* Custom range container - default state (hidden) */
  .custom-range-container {
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0;
    max-width: 0;
    overflow: hidden;
    /* Hide transition: fade out first, then collapse width */
    transition:
      opacity 0.2s ease,
      max-width 0.4s ease 0.15s;
    /* Start collapsing after fade out begins */
  }

  /* Custom range container - shown state */
  .custom-range-container.show {
    opacity: 1;
    max-width: 450px;
    /* Adjust based on your content width */
    /* Show transition: expand width first, then fade in */
    transition:
      max-width 0.4s ease,
      opacity 0.3s ease 0.15s;
    /* Start fading in after expansion begins */
  }
</style>