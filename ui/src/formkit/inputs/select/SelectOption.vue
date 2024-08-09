<script lang="ts" setup>
import { ref } from "vue";
import SelectOptionItem from "./SelectOptionItem.vue";

const props = defineProps<{
  options: Array<Record<string, unknown> & { label: string; value: unknown }>;
  selectedIndex: number;
}>();

const activeIndex = ref<number>(props.selectedIndex);
const handleKeydown = (event: KeyboardEvent) => {
  console.log("handleKeydown");
  const key = event.key;
  if (key === "ArrowUp") {
    activeIndex.value =
      activeIndex.value - 1 < 0
        ? props.options.length - 1
        : activeIndex.value - 1;
    event.preventDefault();
  }

  if (key === "ArrowDown") {
    activeIndex.value =
      activeIndex.value + 1 >= props.options.length ? 0 : activeIndex.value + 1;
    event.preventDefault();
  }

  if (key === "Enter") {
    console.log("Enter");
  }
};
</script>

<template>
  <div class="select max-h-64 cursor-pointer" @keydown="handleKeydown">
    <template v-for="(option, index) in options" :key="option.value">
      <SelectOptionItem
        :option="option"
        :class="{
          'bg-zinc-100': activeIndex === index,
        }"
      ></SelectOptionItem>
    </template>
  </div>
</template>
