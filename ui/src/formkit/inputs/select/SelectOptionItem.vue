<script lang="ts" setup>
defineProps<{
  option: Record<string, unknown> & { label: string; value: unknown };
}>();
</script>

<template>
  <div
    class="flex h-8 w-full items-center rounded-md px-3 py-1 text-base hover:bg-zinc-100"
  >
    <span class="flex-1 text-ellipsis text-sm"> {{ option.value }} </span>
  </div>
</template>
