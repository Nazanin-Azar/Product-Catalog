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
            type="text"
            placeholder="Search your product..."
            class="pl-4 pr-10 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            :class="{
              'bg-gray-700 bg-opacity-50 border-gray-600 text-white placeholder-gray-300':
                isHomePage,
              'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500':
                !isHomePage,
            }" />
          <Icon
            name="uil:search"
            class="absolute right-3 top-1/2 -translate-y-1/2"
            :class="{
              'text-gray-300': isHomePage,
              'text-gray-500': !isHomePage,
            }" />
        </div>
        <Icon
          name="uil:user"
          class="w-6 h-6 hover:text-gray-500 cursor-pointer transition-colors" />
        <Icon
          name="uil:shopping-bag"
          class="w-6 h-6 hover:text-gray-500 cursor-pointer transition-colors" />
        <Icon name="uil:bars" class="w-7 h-7 md:hidden cursor-pointer" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

const route = useRoute();

const isHomePage = computed(() => route.path === "/");
</script>
