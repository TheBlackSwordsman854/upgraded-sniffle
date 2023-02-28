<script setup lang="ts">
type UserNavigationItem = {
  name: string;
  to: string;
  onClick?: () => void;
};

const userNavigation = [
  {
    name: "Sign out",
    to: "/", // FIXME: 未來應改為 "" 即導回同頁 然後要做取消auth 導致不符權限被退出
  },
].filter(Boolean) as UserNavigationItem[];
</script>

<template>
  <div>我控制使用者頁面跳轉的bar！</div>
  <div
    v-for="item in userNavigation"
    :key="item.name"
    style="border: 3px solid red"
  >
    <RouterLink :to="item.to" @click="item.onClick">
      {{ item.name }}
    </RouterLink>
  </div>
</template>
