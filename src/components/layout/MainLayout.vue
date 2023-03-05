<script setup lang="ts">
import { RouterView } from "vue-router";

import { AppSidebar, UserNavigation } from "@/components/misc";
</script>

<template>
  <div></div>
  <div>
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
