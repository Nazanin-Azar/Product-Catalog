<template>
  <component :is="tag" :class="combinedClasses" :to="to" :disabled="disabled">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    to?: string | null;
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    size: "md",
    to: null,
    disabled: false,
  }
);

const tag = computed(() => (props.to ? resolveComponent('NuxtLink') : "button"));

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out cursor-pointer";

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
    default:
      return "bg-[#8F5D45] text-white font-semibold py-3 px-6 rounded-r-md hover:bg-opacity-90 transition";
    case "secondary":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400";
    case "outline":
      return "bg-transparent text-gray-800 border border-gray-300 rounded-xl hover:bg-gray-100 focus:ring-gray-400";
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "py-2 px-4 text-sm";
    case "md":
    default:
      return "py-2.5 px-6 text-base";
    case "lg":
      return "py-3 px-8 text-lg";
  }
});

const disabledClasses = computed(() =>
  props.disabled ? "opacity-50 cursor-not-allowed" : ""
);

const combinedClasses = computed(() => {
  return `${baseClasses} ${variantClasses.value} ${sizeClasses.value} ${disabledClasses.value}`;
});
</script>
