<template>
  <div> 
    <div class="w-screen">
            <img src="../assets/img/banner.png" alt="banner" class="w-full">
        </div>
  <div class=" mx-auto p-4">
   
    <div v-if="pending" class="text-center">Loading...</div>

    <div v-if="error" class="text-center text-red-500">
      Failed to fetch products. Please try again.
    </div>

    <div
    v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </div>

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
