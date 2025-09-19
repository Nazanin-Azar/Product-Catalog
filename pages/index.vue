<template>
  <div>
    <div class="w-screen">
      <img src="../assets/img/banner.png" alt="banner" class="w-full" />
    </div>
    <div class="mx-auto p-4">
      <div v-if="pending" class="text-center">Loading...</div>

      <div v-if="error" class="text-center text-red-500">
        Failed to fetch products. Please try again.
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in displayedProducts"
          :key="product.id"
          :product="product" />
      </div>
      <div
        v-if="displayedProductsCount < products.length"
        class="flex justify-end mt-10 mb-10">
        <button
          @click="showMoreProducts"
          class="text-[#8F5D45] font-medium py-3 px-4 rounded-3xl flex items-center gap-2 hover:shadow-lg transition-colors border border-[#8F5D45]">
          <span>More </span>
          <Icon
            name="uil:angle-right-b"
            class="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        </button>
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
const { data, pending, error } = getProducts();
const products = computed(() => data.value?.products || []);

const displayedProductsCount = ref(8);
const displayedProducts = computed(() => {
  return products.value.slice(0, displayedProductsCount.value);
});

function showMoreProducts() {
  displayedProductsCount.value = products.value.length;
}
</script>
