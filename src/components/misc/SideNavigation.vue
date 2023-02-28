<script setup lang="ts">
import { RouterLink } from "vue-router";

type SideNavigationItem = {
  name: string;
  to: { name: string };
};

const navigation = [{ name: "Dashboard", to: { name: "dashboard" } }].filter(
  Boolean
) as SideNavigationItem[];
</script>

<template>
  <div>我控制頁面跳轉的bar！</div>
  <RouterLink
    v-for="item in navigation"
    :key="item.name"
    style="border: 3px solid green"
    :to="item.to"
  >
    {{ item.name }}
  </RouterLink>
</template>
