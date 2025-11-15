<template>
  <AuthForm
    title="Signup"
    btnText="Register"
    :fields="[
      { name: 'username', type: 'text', placeholder: 'USERNAME' },
      { name: 'password', type: 'password', placeholder: 'PASSWORD' },
      { name: 'email', type: 'email', placeholder: 'EMAIL' },
    ]"
    redirectTo="/" />
</template>

<script setup>
import AuthForm from "~/components/AuthForm.vue";

definePageMeta({
  layout: "auth",
});
</script>
