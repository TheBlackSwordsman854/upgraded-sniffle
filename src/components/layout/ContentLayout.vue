<script setup lang="ts">
type ContentLayoutProps = {
  title: string;
};

defineProps<ContentLayoutProps>();
</script>

<template>
  <div>我是內容layout！</div>
  <div style="border: 3px solid green">
    <div>slot 內容標題：{{ title }}</div>
    <div>
      slot 內容訊息：
      <slot></slot>
    </div>
  </div>
</template>
