<template>
  <div class="box-border bg-[#1c1917]">
    <section class="flex justify-center items-center min-h-[100vh]">
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
          <h1 class="text-white text-4xl">{{ title }}</h1>
          <form @submit="handleSubmit">
            <div
              v-for="field in fields"
              :key="field.name"
              class="flex flex-col">
              <input
                :id="field.name"
                :type="field.type"
                :placeholder="field.placeholder"
                v-model="formData[field.name]"
                class="block p-5 w-full mt-8 text-white bg-[#9191911f] border-none outline-none font-medium rounded-md tracking-wider text-base backdrop-blur-md focus:shadow-[0_0_16px_1px_rgba(0,0,0,0.2)] focus:animate-heartbeat" />

              <p v-if="errors[field.name]" class="text-red-500 text-xs">
                {{ errors[field.name] }}
              </p>
            </div>
            <button
              type="submit"
              class="relative bg-[#8F5D45] text-white block p-4 rounded-md border-none outline-none text-lg font-bold tracking-widest w-full cursor-pointer my-8 hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.15)] transition-all duration-100 ease-in-out hover:scale-105">
              {{ btnText }}
            </button>
          </form>
          <div>
            <div
              v-if="route.path !== '/signup'"
              class="my-8 mx-0 flex flex-col gap-2 sm:flex-row sm:justify-between items-center text-white text-sm sm:text-base">
              <NuxtLink to="/signup">REGISTER</NuxtLink>
              <a href="">FORGOT PASSWORD</a>
            </div>
            <div
              v-else
              class="my-8 mx-0 flex flex-col gap-2 items-center text-white text-sm sm:text-base">
              <NuxtLink to="/login">I HAVE ACCOUNT</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const props = defineProps({
  title: String,
  fields: {
    type: Array,
    required: true,
  },
  btnText: String,
  redirectTo: {
    type: String,
    default: "/",
  },
});

const toast = useToast();
const router = useRouter();
const route = useRoute();

const formData = reactive({});
const errors = reactive({});

onMounted(() => {
  if (props.fields && props.fields.length) {
    props.fields.forEach((f) => {
      if (!(f.name in formData)) formData[f.name] = "";
      if (!(f.name in errors)) errors[f.name] = "";
    });
  }
});

const handleSubmit = (e) => {
  e.preventDefault();

  Object.keys(errors).forEach((key) => (errors[key] = ""));

  let valid = true;

  props.fields.forEach((field) => {
    if (!formData[field.name]) {
      errors[field.name] = `${field.placeholder} is required`;
      valid = false;
    }
  });

  if (!valid) return;
  toast.success(`${props.title} successful! ✅`);
  router.push(props.redirectTo);
};
</script>
