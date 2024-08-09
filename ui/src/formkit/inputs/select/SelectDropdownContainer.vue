<script lang="ts" setup>
import { computed, defineProps } from "vue";
import SelectOption from "./SelectOption.vue";

const props = defineProps<{
  options?: Array<Record<string, unknown> & { label: string; value: unknown }>;
  keyword?: string;
  selectedValues?: Array<string>;
  multiple: boolean;
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

const selectedIndex = computed(() => {
  if (props.multiple) {
    return 0;
  }
  if (props.selectedValues && props.selectedValues.length > 0) {
    const value = props.selectedValues[0];
    return (
      filterOptions.value.findIndex((option) => option.value === value) ?? 0
    );
  }
  return 0;
});

const handleKeydown = () => {
  console.log("handleKeydown");
};
</script>

<template>
  <div class="w-full" @keydown="handleKeydown">
    <div v-if="filterOptions && filterOptions.length > 0">
      <SelectOption
        :options="filterOptions"
        :selected-index="selectedIndex"
      ></SelectOption>
    </div>
    <div v-else>
      <div>No options</div>
    </div>
  </div>
</template>
