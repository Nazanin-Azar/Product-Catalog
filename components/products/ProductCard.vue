
<template>
  <NuxtLink :to="`/product/${product.id}`" class="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img :src="product.thumbnail" :alt="product.title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="font-bold text-lg truncate">{{ product.title }}</h3>
      <p class="text-gray-600">{{ product.category }}</p>
      <div class="flex justify-between items-center mt-4">
        <span class="font-semibold text-xl">${{ product.price }}</span>
        <div class="flex items-center gap-1">
    <Icon name="uil:star" class="text-yellow-400" />
          <span>{{ product.rating }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

const props = defineProps<{
  product: Product;
}>();
console.log('Data received by ProductCard:', props.product);

</script>
