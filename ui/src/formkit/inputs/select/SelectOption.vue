<script lang="ts" setup>
import SelectOptionItem from "./SelectOptionItem.vue";

defineProps<{
  options: Array<Record<string, unknown> & { label: string; value: unknown }>;
}>();
</script>

<template>
  <div class="select max-h-64 cursor-pointer p-1">
    <template v-for="option in options" :key="option.value">
      <SelectOptionItem :option="option"></SelectOptionItem>
    </template>
  </div>
</template>
