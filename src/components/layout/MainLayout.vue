<script setup lang="ts">
import { RouterView } from "vue-router";

import { AppSidebar, UserNavigation } from "@/components/misc";
</script>

<template>
  <div>我是主頁面layout</div>
  <div style="border: 5px solid blue">
    <AppSidebar />
    <div>
      <div>
        <UserNavigation />
      </div>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
