<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div>Bulletproof E-Peer</div>
  初始頁面
  <button @click="router.push({ name: 'login' })" v-text="'登入'" />
</template>
