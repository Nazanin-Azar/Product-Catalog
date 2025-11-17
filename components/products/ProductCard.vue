<template>
  <NuxtLink :to="`/product/${product.id}`" class="block">
    <div
      class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group relative">
      <div
        class="relative w-full h-52 overflow-hidden flex items-center justify-center">
        <NuxtImg
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy" />
      </div>
      <div class="p-3 border-t border-muted">
        <h3
          class="text-base font-semibold text-graydarker mb-1 leading-tight truncate">
          {{ product.title }}
        </h3>
        <p class="text-sm text-graylight">{{ product.category }}</p>
        <div class="flex justify-between items-center mt-3">
          <span class="font-bold text-base text-primary"
            >${{ product.price }}</span
          >
          <div class="flex items-center gap-1">
            <Icon name="uil:star" class="text-yellowlight" />
            <span class="text-sm text-graylight">{{ product.rating }}</span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

const props = defineProps<{
  product: Product;
}>();
</script>
