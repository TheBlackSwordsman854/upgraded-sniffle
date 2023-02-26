<script setup>
import { ref, onMounted } from "vue";

const hello = ref();

onMounted(()=>{
    hello.value.innerHTML = "Hello! I am VUE 3 + WebPack 5!";
})
</script>

<template>
<h1 ref="hello">Loading...</h1>
</template>