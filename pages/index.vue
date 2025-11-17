<template>
  <div class="bg-background">
    <section class="relative flex text-center h-screen justify-center">
      <NuxtImg
        src="/img/banner.webp"
        alt="Banner"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager" />
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="relative z-10 text-white p-14 flex justify-center flex-col">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Discover Your Next Favourite Thing
        </h1>
        <p class="text-base md:text-xl mb-8 leading-relaxed">
          We've curated the best products from around the globe so you can find
          everything you need for a better life, all with a few simple clicks.
          From the latest tech to home essentials, your next discovery awaits.
        </p>
      </div>
    </section>

    <div class="mx-auto px-10">
      <div v-if="pending">
        <ProductsProductCardSkeleton v-for="product in featuredProducts" />
      </div>

      <div v-if="error" class="text-center text-error">
        Failed to fetch products. Please try again.
      </div>

      <div v-else>
        <h1 class="flex justify-center text-4xl mt-14 mb-10 font-bold">
          Products
        </h1>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
            loading="lazy" />
        </div>
      </div>
      <div v-if="products.length > 8" class="flex justify-end mt-10 mb-10">
        <UiAppButton to="/product/products" variant="outline" size="sm">
          <span>More</span>
          <Icon name="uil:angle-right-b" class="ml-2" />
        </UiAppButton>
      </div>
    </div>
    <FeaturesFeatureBar />
    <FeaturesAboutusSection />
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
