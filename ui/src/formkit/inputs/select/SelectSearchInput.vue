<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits<{
  (event: "search", value: string): void;
  (event: "enter", value: string): void;
  (event: "click", value: string): void;
  (event: "blur", value: string): void;
}>();

const inputHTMLRef = ref<HTMLInputElement | null>(null);
const inputValue = ref("");

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    emit("enter", inputValue.value);
  }
};

const handleBlur = () => {
  inputValue.value = "";
  emit("blur", inputValue.value);
};
</script>

<template>
  <div class="relative w-full cursor-text">
    <span class="w-full">
      <input
        ref="inputHTMLRef"
        v-model="inputValue"
        type="text"
        autocomplete="off"
        class="m-0 h-full w-full cursor-auto !appearance-none border-none bg-transparent p-0 pe-0 ps-0 outline-none"
        @input="emit('search', inputValue)"
        @keydown="handleKeyDown"
        @blur="handleBlur"
        @click="emit('click', inputValue)"
      />
    </span>
    <span class="pointer-events-none absolute left-0 text-ellipsis text-sm">
      <slot name="placeholder"></slot>
    </span>
  </div>
</template>
