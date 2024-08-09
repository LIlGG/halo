import type { FormKitTypeDefinition } from "@formkit/core";
import {
  help,
  icon,
  inner,
  label,
  message,
  messages,
  outer,
  prefix,
  suffix,
  wrapper,
} from "@formkit/inputs";
import SelectContainer from "./SelectContainer.vue";
import { SelectSection } from "./sections/index";

/**
 * 自定义的 Select 组件。
 *
 * 要求的功能有：
 *
 * 1. 可以进行单选、多选，通过属性 multiple 控制。并且单选状态与多选状态下，input 的展示形式不同。
 * 2. 支持传入 options 属性，用于渲染下拉选项，也可以通过 action 属性，传入一个函数，用于动态获取 options。这里需要根据不同的方式，做不同的处理。
 *    a. 如果传入了 options，直接使用 options 渲染下拉选项。
 *    b. 如果传入了 action 属性，则需要根据目标接口返回的数据，渲染下拉选项。并且，同时将会启用一些额外的属性，比如分页、搜索等。
 * 3. 可支持排序功能，如果开启了排序功能，则列表将允许拖拽排序。并且，在 dropdown 中，还可以增加目标节点的当前排序位置。
 * 4. 可开启增加功能，如果列表中没有目标内容，则允许将现在输入的内容，作为 value 值。
 * 5. 允许限制最大选择数量，通过 max 属性控制。
 */
export const select: FormKitTypeDefinition = {
  schema: outer(
    wrapper(
      label("$label"),
      inner(icon("prefix"), prefix(), SelectSection(), suffix(), icon("suffix"))
    ),
    help("$help"),
    messages(message("$message.value"))
  ),

  type: "input",

  props: ["multiple", "max", "options", "action"],

  library: {
    SelectContainer: SelectContainer,
  },

  schemaMemoKey: "custom-select",
};
