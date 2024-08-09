<script lang="ts" setup>
import type { FormKitFrameworkContext } from "@formkit/core";
import { IconArrowDownLine, VDropdown } from "@halo-dev/components";
import { onMounted, ref, shallowReactive, type PropType } from "vue";

import SelectSelector from "./SelectSelector.vue";
import SelectMultipleSelector from "./SelectMultipleSelector.vue";
import SelectDropdownContainer from "./SelectDropdownContainer.vue";

export interface SelectProps {
  /**
   * 是否多选, 默认为 false
   */
  multiple?: boolean;

  /**
   * 多选时最大的数量，仅当 multiple 为 true 时有效
   */
  maxCount?: number;

  /**
   * 多选时是否可排序, 默认为 false。仅当 multiple 为 true 时有效
   */
  sortable?: boolean;

  /**
   * 默认提示文本
   */
  placeholder?: string;

  /**
   * 选项列表
   */
  options?: Array<
    Record<string, unknown> & {
      label: string;
      value: unknown;
    }
  >;
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true,
  },
});

const selectProps: SelectProps = shallowReactive({
  multiple: false,
  maxCount: NaN,
  sortable: false,
  placeholder: "",
  options: [],
});

const initSelectProps = () => {
  const { attrs } = props.context;
  selectProps.multiple =
    props.context.multiple == undefined || props.context.multiple === false
      ? false
      : true;
  selectProps.maxCount = attrs.maxCount || NaN;
  selectProps.sortable =
    props.context.sortable == undefined || props.context.sortable === false
      ? false
      : true;
  selectProps.placeholder = attrs.placeholder || "";
  selectProps.options = props.context.options || [];
};

onMounted(() => {
  initSelectProps();
});

// TODO 需要使用容器宽度来设置 popper 的宽度
const selectContainerHTMLRef = ref<HTMLElement | null>(null);
// input 输入的值作为 keyword 过滤选项
const keyword = ref<string>("");
// 显示 dropdown
const showDropdown = ref<boolean>(false);
</script>

<template>
  <VDropdown
    :triggers="[]"
    :shown="showDropdown"
    :auto-hide="false"
    :distance="10"
    :container="'body'"
    class="flex-1"
    :popper-class="`w-[32rem] `"
  >
    <div ref="selectContainerHTMLRef" class="flex items-center">
      <div
        class="relative mx-3 h-full flex-1 cursor-pointer items-center rounded-md text-sm"
      >
        <!-- 选择器，根据单选和多选采用不同的组件 -->
        <component
          :is="selectProps.multiple ? SelectMultipleSelector : SelectSelector"
          v-bind="{
            placeholder: selectProps.placeholder,
            showDropdown,
          }"
          @search="(value) => (keyword = value)"
          @click="showDropdown = !showDropdown"
          @blur="showDropdown = false"
        ></component>
      </div>
      <!-- 选择器图标（可尝试使用 formkit 传入的） -->
      <span class="pr-3">
        <IconArrowDownLine />
      </span>
    </div>
    <template #popper>
      <SelectDropdownContainer
        :options="selectProps.options"
        :keyword="keyword"
        :multiple="selectProps.multiple"
      />
    </template>
  </VDropdown>
</template>
