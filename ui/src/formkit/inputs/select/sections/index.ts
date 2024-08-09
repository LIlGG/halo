import { createSection } from "@formkit/inputs";

export const SelectSection = createSection("SelectSection", () => ({
  $cmp: "SelectContainer",
  props: {
    context: "$node.context",
  },
}));
