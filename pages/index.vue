<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Product Catalog</h1>

    <div v-if="pending" class="text-center">Loading...</div>

    <!-- <div v-if="error" class="text-center text-red-500">
      Failed to fetch products. Please try again.
    </div> -->

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ProductCard from '~/components/products/ProductCard.vue';
import { useProducts } from '~/composables/useProducts';

const { getProducts } = useProducts();
const { data, pending, error } = getProducts();
const products = computed(() => data.value?.products || []);
console.log('Parent page: Computed products object:', products);
</script>
