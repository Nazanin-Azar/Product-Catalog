<template>
  <header
    class="w-full z-20 p-4 md:p-6 transition-colors duration-300"
    :class="{
      'absolute top-0 left-0 text-white': isHomePage,
      'sticky top-0 bg-white text-gray-800 shadow-md rounded-b-2xl':
        !isHomePage,
    }">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2">
        <Icon
          name="uil:cube"
          class="w-8 h-8"
          :class="{ 'text-white': isHomePage, 'text-gray-800': !isHomePage }" />
        <span class="text-xl font-bold">Catalog</span>
      </NuxtLink>

      <div class="flex items-center gap-4">
        <div class="relative hidden lg:block">
          <input
            v-model="searchQuery"
            @keydown.enter="handleSearch"
            type="text"
            placeholder="Search your product..."
            class="pl-4 pr-10 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            :class="{
              'bg-gray-700 bg-opacity-50 border-gray-600 text-white placeholder-gray-300':
                isHomePage,
              'bg-[#8F5D45] text-white placeholder-white ': !isHomePage,
            }" />
          <Icon
            name="uil:i-lucide-search"
            class="absolute right-3 top-1/2 -translate-y-1/2"
            :class="{
              'text-gray-300': isHomePage,
              'text-white': !isHomePage,
            }" />
        </div>
        <NuxtLink to="/login">
          <Icon
            name="uil:user"
            class="w-6 h-6 hover:text-gray-500 cursor-pointer transition-colors" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSearchQuery } from "~/composables/useStates";
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isHomePage = computed(() => route.path === "/");
const searchQuery = useSearchQuery();

function handleSearch() {
  if (isHomePage.value && searchQuery.value.trim() !== "") {
    router.push("/product/products");
  }
}
</script>
