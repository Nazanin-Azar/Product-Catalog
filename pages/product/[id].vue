<template>
  <div class="m-12">
    <NuxtLink to="/product/products">
      <Icon name="uil:arrow-left" class="w-5 h-5" />
    </NuxtLink>
    <div class="container mx-auto py-12 flex justify-center items-center">
      <div v-if="product" class="grid lg:grid-cols-2 gap-8">
        <div>
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-80 rounded-lg shadow-md bg-white"
            loading="lazy" />
        </div>
        <div>
          <h1 class="lg:text-5xl text-3xl font-bold mb-6">
            {{ product.title }}
          </h1>
          <p class="text-gray-500 mb-4">
            {{ product.brand }} -
            <span class="font-semibold">{{ product.category }}</span>
          </p>
          <p class="text-xl mb-4">{{ product.description }}</p>
          <div class="flex items-center justify-between mb-4">
            <span class="text-3xl font-bold text-[#8F5D45]"
              >${{ product.price }}</span
            >
            <div class="flex items-center gap-1 text-lg">
              <Icon name="uil:star" class="text-yellow-400" />
              <span>{{ product.rating }} / 5</span>
            </div>
          </div>
          <p class="text-sm text-gray-700">
            Only <span class="font-bold">{{ product.stock }}</span> left in
            stock!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const productId = Number(route.params.id);

const { getProductById } = useProducts();
const { data: product, pending, error } = getProductById(productId);
</script>
