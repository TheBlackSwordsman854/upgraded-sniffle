<script setup lang="ts">
type ContentLayoutProps = {
  title: string;
};

defineProps<ContentLayoutProps>();
</script>

<template>
  <div></div>
  <div>
    <div>{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
