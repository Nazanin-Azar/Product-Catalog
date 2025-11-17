<template>
  <component :is="tag" :class="combinedClasses" :to="to" :disabled="disabled">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "accordion" | "outline";
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

const tag = computed(() =>
  props.to ? resolveComponent("NuxtLink") : "button"
);

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none transition-all duration-200 ease-in-out";

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
    default:
      return "bg-primary text-white hover:bg-opacity-60 border-2 border-transparent";
    case "accordion":
      return "bg-transparent text-current hover:bg-muted";
    case "outline":
      return "bg-transparent text-secondary hover:bg-primary hover:bg-opacity-20 border-2 border-secondary";
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
