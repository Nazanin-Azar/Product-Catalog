<template>
  <div class="bg-secondary py-12 md:py-16 p-0">
    <div class="container mx-auto">
      <div
        class="flex flex-col md:flex-row justify-around items-center gap-y-8 md:gap-0">
        <template v-for="(feature, index) in features" :key="index">
          <div class="flex items-center gap-4 w-full lg:w-auto px-4">
            <div>
              <Icon :name="feature.icon" class="text-4xl text-primary" />
            </div>
            <div class="text-left">
              <h3 class="font-semibold text-white">{{ feature.title }}</h3>
              <p class="text-sm text-gray-300">{{ feature.description }}</p>
            </div>
          </div>

          <div
            v-if="index < features.length - 1"
            class="hidden md:block h-20 w-px bg-graylight"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const features = ref([
  {
    icon: "uil:truck",
    title: "Free & Fast Shipping",
    description: "On all orders over $100",
  },
  {
    icon: "uil:exchange-alt",
    title: "Product Exchange Guarantee",
    description: "30-day return policy",
  },
  {
    icon: "uil:headphones-alt",
    title: "24/7 Customer Support",
    description: "Contact us anytime",
  },
  {
    icon: "uil:shield-check",
    title: "Authenticity Guaranteed",
    description: "100% genuine products",
  },
]);
</script>
