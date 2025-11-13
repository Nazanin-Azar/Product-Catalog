<template>
  <div class="box-border bg-[#1c1917]">
    <section class="flex justify-center items-center min-h-[110vh]">
      <div class="relative z-0">
        <div
          class="w-32 h-32 bg-[#8F5D45] absolute top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div
          class="w-32 h-32 bg-[#8F5D45] absolute bottom-0 right-0 rounded-full translate-x-1/2 translate-y-1/2 z-0"></div>
        <div
          class="border border-[hsla(0,0%,65%,0.158)] shadow-[0_0_36px_1px_rgba(0,0,0,0.2)] rounded-xl backdrop-blur-md p-8 outline-none z-40 w-11/12 sm:w-96 md:w-90">
          <NuxtImg
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            class="absolute -top-12 right-0 w-full" />
          <h1 class="text-white text-4xl">LOGIN</h1>
          <form>
            <input
              type="text"
              placeholder="USERNAME"
              class="block p-5 w-full my-8 text-white bg-[#9191911f] border-none outline-none font-medium rounded-md tracking-wider text-base backdrop-blur-md focus:shadow-[0_0_16px_1px_rgba(0,0,0,0.2)] focus:animate-heartbeat" />
            <input
              type="password"
              placeholder="PASSWORD"
              class="block p-5 w-full my-8 text-white bg-[#9191911f] border-none outline-none font-medium rounded-md tracking-wider text-base backdrop-blur-md focus:shadow-[0_0_16px_1px_rgba(0,0,0,0.2)] focus:animate-heartbeat" />
            <button
              class="bg-[#8F5D45] text-white block p-4 rounded-md border-none outline-none text-lg font-bold tracking-widest w-full cursor-pointer mb-8 hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.15)] transition-all duration-100 ease-in-out hover:scale-105">
              SUBMIT
            </button>
          </form>
          <div
            class="my-8 mx-0 flex flex-col gap-2 sm:flex-row sm:justify-between items-center text-white text-sm sm:text-base">
            <a href="">REGISTER</a>
            <a href="">FORGOT PASSWORD</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});
</script>
