<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const onSuccess = () => {
  router.push({ path: "/app" });
};
</script>

<template>
  登入頁面
  <input type="email" placeholder="email" />
  <input type="password" placeholder="password" />
  <button @click="onSuccess" v-text="'登入'" />
</template>
