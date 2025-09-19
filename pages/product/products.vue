<template>
  <div class="container mx-auto p-4 md:p-8 bg-[#fffff0]">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside class="lg:col-span-1 bg-[#8F5D45] p-6 rounded-lg h-fit">
        <button
          @click="filtersOpen = !filtersOpen"
          class="w-full flex justify-between items-center lg:hidden rounded-md"
          :class="{ 'mb-5': filtersOpen }">
          <span class="font-semibold text-white text-xl">Filters</span>
          <Icon
            name="uil:angle-down"
            :class="{ 'rotate-180': filtersOpen }"
            class="transition-transform text-white" />
        </button>

        <div
          :class="{ hidden: !filtersOpen, block: filtersOpen }"
          class="lg:block">
          <div class="mb-6">
            <h3 class="font-semibold mb-3 border-b pb-2 text-[#FFE68B]">
              Category
            </h3>
            <div
              v-for="category in categories"
              :key="category"
              class="flex items-center mb-2">
              <input
                type="radio"
                :id="category"
                :value="category"
                v-model="selectedCategory"
                class="h-4 w-4 text-white focus:ring-0 accent-[#FFE68B]" />
              <label :for="category" class="ml-3 text-sm text-white">{{
                category
              }}</label>
            </div>
          </div>

          <div class="mb-6">
            <h3 class="font-semibold mb-3 border-b pb-2 text-[#FFE68B]">
              Price
            </h3>
            <div class="flex items-center mb-2">
              <input
                type="radio"
                id="price-all"
                value="All"
                v-model="selectedPriceRange"
                class="h-4 w-4 focus:ring-gray-500 accent-[#FFE68B]" />
              <label for="price-all" class="ml-3 text-sm text-white">All</label>
            </div>
            <div class="flex items-center mb-2">
              <input
                type="radio"
                id="price-1"
                value="0-300"
                v-model="selectedPriceRange"
                class="h-4 w-4 focus:ring-0" />
              <label for="price-1" class="ml-3 text-sm text-white"
                >Under $300</label
              >
            </div>
            <div class="flex items-center mb-2">
              <input
                type="radio"
                id="price-2"
                value="300-500"
                v-model="selectedPriceRange"
                class="h-4 w-4 focus:ring-0 accent-[#FFE68B]" />
              <label for="price-2" class="ml-3 text-sm text-white"
                >$300 - $500</label
              >
            </div>
            <div class="flex items-center mb-2">
              <input
                type="radio"
                id="price-3"
                value="500-1000"
                v-model="selectedPriceRange"
                class="h-4 w-4 focus:ring-0 accent-[#FFE68B]" />
              <label for="price-3" class="ml-3 text-sm text-white"
                >$500 - $1000</label
              >
            </div>
            <div class="flex items-center mb-2">
              <input
                type="radio"
                id="price-4"
                value="1000"
                v-model="selectedPriceRange"
                class="h-4 w-4 focus:ring-0 accent-[#FFE68B]" />
              <label for="price-4" class="ml-3 text-sm text-white"
                >Over $1000</label
              >
            </div>
          </div>

          <div>
            <h3 class="font-semibold mb-3 border-b pb-2 text-[#FFE68B]">
              Rating
            </h3>
            <div class="flex items-center mb-2">
              <input
                type="radio"
                id="rating-all"
                :value="0"
                v-model="selectedMinRating"
                class="h-4 w-4 focus:ring-0 accent-[#FFE68B]" />
              <label for="rating-all" class="ml-3 text-sm text-white"
                >All</label
              >
            </div>
            <div class="flex items-center mb-2">
              <input
                type="radio"
                id="rating-4"
                :value="4"
                v-model="selectedMinRating"
                class="h-4 w-4 focus:ring-0 accent-[#FFE68B]" />
              <label for="rating-4" class="ml-3 text-sm text-white"
                >4 stars & up</label
              >
            </div>
            <div class="flex items-center mb-2">
              <input
                type="radio"
                id="rating-3"
                :value="3"
                v-model="selectedMinRating"
                class="h-4 w-4 focus:ring-0 accent-[#FFE68B]" />
              <label for="rating-3" class="ml-3 text-sm text-white"
                >3 stars & up</label
              >
            </div>
          </div>
        </div>
      </aside>

      <div class="lg:col-span-3">
        <div v-if="pending" class="text-center py-10">Loading...</div>
        <div v-else-if="error" class="text-center text-red-500 py-10">
          Failed to fetch products.
        </div>

        <div
          v-else-if="filteredProducts.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product" />
        </div>

        <div v-else class="text-center py-20 bg-gray-50 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-700">No products found</h3>
          <p class="text-gray-500 mt-2">
            Try adjusting your filters to find what you're looking for.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ProductCard from "~/components/products/ProductCard.vue";
import { useProducts } from "~/composables/useProducts";
import { useSearchQuery } from "~/composables/useStates";

const { getProducts } = useProducts();
const { data, pending, error } = await getProducts();
const allProducts = computed(() => data.value?.products || []);

const selectedCategory = ref("All");
const selectedPriceRange = ref("All");
const selectedMinRating = ref(0);
const filtersOpen = ref(false);
const searchQuery = useSearchQuery();

const categories = computed(() => {
  if (!allProducts.value) return [];
  const uniqueCategories = new Set(allProducts.value.map((p) => p.category));
  return ["All", ...uniqueCategories];
});

const filteredProducts = computed(() => {
  let productsToFilter = allProducts.value;

  if (searchQuery.value && searchQuery.value.trim() !== "") {
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    productsToFilter = productsToFilter.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseQuery)
    );
  }

  if (selectedCategory.value !== "All") {
    productsToFilter = productsToFilter.filter(
      (p) => p.category === selectedCategory.value
    );
  }

  if (selectedPriceRange.value !== "All") {
    const [min, max] = selectedPriceRange.value.split("-").map(Number);
    productsToFilter = productsToFilter.filter((p) => {
      if (max) {
        return p.price >= min && p.price <= max;
      }
      return p.price >= min;
    });
  }

  if (selectedMinRating.value > 0) {
    productsToFilter = productsToFilter.filter(
      (p) => p.rating >= selectedMinRating.value
    );
  }

  return productsToFilter;
});
</script>
