<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden bg-background">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
useHead({
  link: [
    { rel: "preload", as: "image", href: "/img/banner.webp" },
    { rel: "preload", as: "image", href: "/img/about-us.webp" },
  ],
});
</script>
