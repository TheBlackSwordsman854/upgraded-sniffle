<template>
  <div class="relative">
    <div class="carousel-container">
      <div class="carousel">
        <div
          v-for="(assetsURL, index) in carousels"
          :id="index.toString()"
          :key="index"
          class="slide"
        >
          <img :src="assetsURL" />
        </div>
      </div>
    </div>
    <img :src="postTagsURL" class="absolute left-2 bottom-2" />
  </div>
  <nav>
    <a href="#0">0</a>
    <a href="#1">1</a>
    <a href="#2">2</a>
    <a href="#3">3</a>
    <a href="#4">4</a>
  </nav>
</template>

<script setup lang="ts">
import { postTagsURL } from "@/assets";
import { CarouselsEntity } from "@/types";

type BaseCardProps = {
  carousels: CarouselsEntity;
};

defineProps<BaseCardProps>();
</script>

<style lang="scss" scoped>
.carousel-container {
  padding: 0;
  --slide-count: v-bind(carousels.length);
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  @apply overflow-x-hidden w-sm h-sm;
}

.carousel {
  width: calc(100% * var(--slide-count));
  display: flex;
  -webkit-overflow-scrolling: touch;
}

.slide > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
}

a {
  margin: 20px;
}
nav {
  @apply flex justify-center w-sm;
  text-align: center;
}

.slide {
  opacity: 0;
  transition: opacity 300ms;
}
.slide:target {
  opacity: 1;
}
</style>
