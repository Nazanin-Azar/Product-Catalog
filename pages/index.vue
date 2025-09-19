<template>
  <div class="bg-[#fffff0]">
    <div class="w-screen">
      <img src="../assets/img/banner.png" alt="banner" class="w-full" />
    </div>
    <div class="mx-auto px-6">
      <div v-if="pending" class="text-center">Loading...</div>

      <div v-if="error" class="text-center text-red-500">
        Failed to fetch products. Please try again.
      </div>

      <div v-else>
        <h1 class="flex justify-center text-4xl m-6 font-bold">Products</h1>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product" />
        </div>
      </div>
      <div v-if="products.length > 8" class="flex justify-end mt-10 mb-10">
        <NuxtLink
          to="/product/products"
          class="inline-flex items-center gap-2 py-2 px-6 border border-gray-300 rounded-full text-gray-800 font-semibold hover:bg-gray-100 hover:shadow-sm transition-all">
          <span>More</span>
          <Icon name="uil:angle-right-b" />
        </NuxtLink>
      </div>
    </div>
    <FeaturesFeatureBar />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ProductCard from "~/components/products/ProductCard.vue";
import { useProducts } from "~/composables/useProducts";

const { getProducts } = useProducts();
const { data, pending, error } = await getProducts();
const products = computed(() => data.value?.products || []);

const featuredProducts = computed(() => {
  return products.value.slice(0, 8);
});
</script>
