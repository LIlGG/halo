<script lang="ts" setup>
import { computed, defineProps } from "vue";
import SelectOption from "./SelectOption.vue";

const props = defineProps<{
  options?: Array<Record<string, unknown> & { label: string; value: unknown }>;
  keyword?: string;
  selectedValues?: Array<string>;
}>();

/**
 * 根据关键字过滤选项
 */
const filterOptions = computed(() => {
  if (!props.options) {
    return [];
  }

  if (!props.keyword) {
    return props.options;
  }

  return props.options.filter((option) => {
    if (!props.keyword) {
      return true;
    }

    return option.label.includes(props.keyword);
  });
});
</script>

<template>
  <div v-if="filterOptions && filterOptions.length > 0">
    <SelectOption :options="filterOptions"></SelectOption>
  </div>
  <div v-else>
    <div>No options</div>
  </div>
</template>
