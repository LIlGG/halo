<script setup lang="ts">
import { onMounted, ref } from "vue";

import MultipleOverflow from "./MultipleOverflow.vue";
import MultipleOverflowItem from "./MultipleOverflowItem.vue";
import MultipleSelectItem from "./MultipleSelectItem.vue";
import SelectSearchInput from "./SelectSearchInput.vue";

const props = withDefaults(
  defineProps<{
    maxCount: number;
    sortable: boolean;
  }>(),
  {
    maxCount: NaN,
    sortable: false,
  }
);

const selectOptions = ref<
  Array<Record<string, unknown> & { label: string; value: unknown }>
>([
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
]);

onMounted(() => {
  console.log("SelectMultipleSelector", props);
});
</script>
<template>
  <MultipleOverflow>
    <template v-for="option in selectOptions" :key="option.value">
      <MultipleOverflowItem>
        <MultipleSelectItem>
          {{ option.label }}
        </MultipleSelectItem>
      </MultipleOverflowItem>
    </template>
    <template #input>
      <MultipleOverflowItem>
        <SelectSearchInput></SelectSearchInput>
      </MultipleOverflowItem>
    </template>
  </MultipleOverflow>
</template>
