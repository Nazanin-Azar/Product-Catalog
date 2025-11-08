<template>
  <footer class="bg-stone-900 text-gray-300 pt-10 pb-8">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-xl mx-auto">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 justify-center mb-4">
          <Icon name="uil:cube" class="w-8 h-8 text-white" />
          <span class="text-xl font-bold text-white">Product Catalog</span>
        </NuxtLink>
        <p class="text-xl text-gray-400 mb-6">
          Smarter shopping, simpler living.
        </p>

        <form
          @submit.prevent="handleSubscription"
          class="flex items-center max-w-sm mx-auto">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email..."
            class="w-full bg-stone-800 text-white placeholder-gray-500 rounded-l-lg py-2.5 px-4 text-base border-2 border-transparent focus:border-[#8F5D45] focus:outline-none transition-colors" />
          <UiAppButton
            type="submit"
            variant="primary"
            size="md"
            class="!rounded-l-none !rounded-r-lg">
            Subscribe
          </UiAppButton>
        </form>
      </div>

      <hr class="border-stone-700 my-6" />

      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-4">
          <span class="font-semibold">Follow us</span>
          <div class="flex items-center gap-3">
            <a
              v-for="link in socialLinks"
              :key="link.icon"
              :href="link.url"
              class="hover:text-white transition-colors">
              <Icon :name="link.icon" class="text-xl" />
            </a>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <NuxtLink to="/" class="hover:text-white transition"
            >Contact us</NuxtLink
          >
          <NuxtLink to="/" class="hover:text-white transition"
            >Delivery & returns</NuxtLink
          >
          <NuxtLink to="/" class="hover:text-white transition">FAQ</NuxtLink>
          <NuxtLink to="/" class="hover:text-white transition"
            >Privacy policy</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
import { ref } from "vue";

const socialLinks = ref([
  { icon: "uil:envelope-alt", url: "#" },
  { icon: "uil:instagram", url: "#" },
  { icon: "uil:twitter-alt", url: "#" },
  { icon: "uil:youtube", url: "#" },
  { icon: "uil:linkedin-alt", url: "#" },
]);

const email = ref("");
const toast = useToast();

function handleSubscription() {
  if (!email.value || !email.value.includes("@")) {
    toast.error("Please enter a valid email address.");
    return;
  }
  toast.success("Thank you for subscribing!");

  email.value = "";
}
</script>
