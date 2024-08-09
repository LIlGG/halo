<script setup lang="ts">
import { ref } from "vue";
import SelectSearchInput from "./SelectSearchInput.vue";

defineProps<{
  placeholder?: string;
  selectValue?: string;
  showDropdown: boolean;
}>();

const emit = defineEmits<{
  (event: "search", value: string): void;
  (event: "click", value: string): void;
  (event: "blur", value: string): void;
}>();

const showPlaceholder = ref<boolean>(true);

const handleSearch = (value: string) => {
  showPlaceholder.value = !value;
  emit("search", value);
};

const handleBlur = (value: string) => {
  showPlaceholder.value = true;
  emit("blur", value);
};
</script>

<template>
  <SelectSearchInput
    @search="handleSearch"
    @click="(value) => emit('click', value)"
    @blur="handleBlur"
  >
    <template #placeholder>
      <span
        v-if="showPlaceholder"
        :class="{
          'text-gray-400': showDropdown || !selectValue,
        }"
      >
        {{ selectValue || placeholder }}
      </span>
    </template>
  </SelectSearchInput>
</template>
