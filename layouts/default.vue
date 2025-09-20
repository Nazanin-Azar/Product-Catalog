<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden bg-[#fffff0]">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
