<script setup lang="ts">
const onSuccess = () => {
  console.log("登入成功");
};
</script>

<template>
  <input type="email" placeholder="email" />
  <input type="password" placeholder="password" />
  <button @click="onSuccess" v-text="'登入'" />
</template>
