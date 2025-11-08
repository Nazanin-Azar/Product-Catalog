<template>
  <div class="container mx-auto p-4 md:p-8 bg-[#fffff0]">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside
        class="hidden lg:block lg:col-span-1 bg-[#8F5D45] p-6 rounded-lg h-fit">
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
            <div
              v-for="range in priceRanges"
              :key="range.value"
              class="flex items-center mb-2">
              <input
                type="radio"
                :id="`desktop-price-${range.value}`"
                :value="range.value"
                v-model="selectedPriceRange"
                class="h-4 w-4 focus:ring-0 accent-[#FFE68B]" />
              <label
                :for="`desktop-price-${range.value}`"
                class="ml-3 text-sm text-white"
                >{{ range.label }}</label
              >
            </div>
          </div>

          <div>
            <h3 class="font-semibold mb-3 border-b pb-2 text-[#FFE68B]">
              Rating
            </h3>
            <div
              v-for="option in ratingOptions"
              :key="option.value"
              class="flex items-center mb-2">
              <input
                type="radio"
                :id="`desktop-rating-${option.value}`"
                :value="option.value"
                v-model="selectedMinRating"
                class="h-4 w-4 focus:ring-0 accent-[#FFE68B]" />
              <label
                :for="`desktop-rating-${option.value}`"
                class="ml-3 text-sm text-white"
                >{{ option.label }}</label
              >
            </div>
          </div>
        </div>
      </aside>

      <div class="lg:col-span-3">
        <div class="mb-6 lg:hidden">
          <UiAppButton
            @click="openFilterModal"
            variant="outline"
            size="md"
            class="w-full">
            <Icon name="uil:filter" class="mr-2 text-[#8F5D45]" />
            <span>Filter Products</span>
          </UiAppButton>
        </div>
        <div
          v-if="pending"
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProductsProductCardSkeleton v-for="product in filteredProducts" />
        </div>
        <div v-else-if="error" class="text-center text-red-500 py-10">
          Failed to fetch products.
        </div>

        <div
          v-else-if="filteredProducts.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            loading="lazy" />
        </div>

        <div v-else class="text-center py-20 rounded-lg">
          <h3 class="text-xl font-semibold text-gray-700">No products found</h3>
          <p class="text-gray-500 mt-2">
            Try adjusting your filters to find what you're looking for.
          </p>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="filtersOpen"
        class="fixed inset-0 bg-white z-50 flex flex-col p-6 lg:hidden">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold">Filters</h2>
        </div>

        <div class="flex-grow overflow-y-auto">
          <div class="border-b">
            <UiAppButton
              @click="
                activeAccordion =
                  activeAccordion === 'category' ? null : 'category'
              "
              variant="accordion"
              class="w-full gap-3">
              <span>Category</span>
              <Icon
                name="uil:angle-down"
                :class="{ 'rotate-180': activeAccordion === 'category' }"
                class="transition-transform" />
            </UiAppButton>
            <div v-if="activeAccordion === 'category'" class="py-4 pl-2">
              <div
                v-for="cat in categories"
                :key="cat"
                class="flex items-center mb-3">
                <input
                  type="radio"
                  :id="`mobile-${cat}`"
                  :value="cat"
                  v-model="stagedCategory"
                  class="h-5 w-5 accent-[#8F5D45]" />
                <label :for="`mobile-${cat}`" class="ml-3 text-gray-700">{{
                  cat
                }}</label>
              </div>
            </div>
          </div>
          <div class="border-b">
            <UiAppButton
              @click="
                activeAccordion = activeAccordion === 'price' ? null : 'price'
              "
              variant="accordion"
              class="w-full gap-3">
              <span>Price</span>
              <Icon
                name="uil:angle-down"
                :class="{ 'rotate-180': activeAccordion === 'price' }"
                class="transition-transform" />
            </UiAppButton>
            <div v-if="activeAccordion === 'price'" class="py-4 pl-2">
              <div
                v-for="range in priceRanges"
                :key="range.value"
                class="flex items-center mb-3">
                <input
                  type="radio"
                  :id="`mobile-price-${range.value}`"
                  :value="range.value"
                  v-model="stagedPriceRange"
                  class="h-5 w-5 accent-[#8F5D45]" />
                <label
                  :for="`mobile-price-${range.value}`"
                  class="ml-3 text-gray-700"
                  >{{ range.label }}</label
                >
              </div>
            </div>
          </div>
          <div class="border-b">
            <UiAppButton
              @click="
                activeAccordion = activeAccordion === 'rating' ? null : 'rating'
              "
              variant="accordion"
              class="w-full gap-3">
              <span>Rating</span>
              <Icon
                name="uil:angle-down"
                :class="{ 'rotate-180': activeAccordion === 'rating' }"
                class="transition-transform" />
            </UiAppButton>
            <div v-if="activeAccordion === 'rating'" class="py-4 pl-2">
              <div
                v-for="option in ratingOptions"
                :key="option.value"
                class="flex items-center mb-3">
                <input
                  type="radio"
                  :id="`mobile-rating-${option.value}`"
                  :value="option.value"
                  v-model="stagedMinRating"
                  class="h-5 w-5 accent-[#8F5D45]" />
                <label
                  :for="`mobile-rating-${option.value}`"
                  class="ml-3 text-gray-700"
                  >{{ option.label }}</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="mt-auto pt-6 border-t grid grid-cols-2 gap-4">
          <UiAppButton @click="cancelFilters" variant="outline" size="lg"
            >Cancel</UiAppButton
          >
          <UiAppButton @click="applyFilters" variant="primary" size="lg"
            >Apply Filters</UiAppButton
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
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
const activeAccordion = ref<string | null>("category");
const searchQuery = useSearchQuery();

const stagedCategory = ref("All");
const stagedPriceRange = ref("All");
const stagedMinRating = ref(0);

const priceRanges = ref([
  { label: "All", value: "All" },
  { label: "Under $300", value: "0-300" },
  { label: "$300 - $500", value: "300-500" },
  { label: "$500 - $1000", value: "500-1000" },
  { label: "Over $1000", value: "1000" },
]);

const ratingOptions = ref([
  { label: "All", value: 0 },
  { label: "4 stars & up", value: 4 },
  { label: "3 stars & up", value: 3 },
]);

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

function openFilterModal() {
  stagedCategory.value = selectedCategory.value;
  stagedPriceRange.value = selectedPriceRange.value;
  stagedMinRating.value = selectedMinRating.value;
  filtersOpen.value = true;
}

function applyFilters() {
  selectedCategory.value = stagedCategory.value;
  selectedPriceRange.value = stagedPriceRange.value;
  selectedMinRating.value = stagedMinRating.value;
  filtersOpen.value = false;
}

function cancelFilters() {
  filtersOpen.value = false;
}

watch(filtersOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>
