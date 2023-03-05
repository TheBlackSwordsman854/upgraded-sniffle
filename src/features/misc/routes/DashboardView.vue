<script setup lang="ts">
import { ref, computed } from "vue";
import { ContentLayout } from "@/components/layout";
import { BaseCarousel } from "@/components/elements/basecarousel";
import { PostsEntity, PostEntity, CarouselEntity } from "@/types";

import { demoPostImageURL } from "@/assets";

const posts = ref<PostsEntity>([]);

posts.value.push(
  {
    imgURL: demoPostImageURL,
  },
  {
    imgURL: demoPostImageURL,
  },
  {
    imgURL: demoPostImageURL,
  },
  {
    imgURL: demoPostImageURL,
  },
  {
    imgURL: demoPostImageURL,
  }
);

const carouselsTransformer = (post: PostEntity) => {
  if (typeof post.imgURL !== "string") {
    return "";
  }

  const carouselItem: CarouselEntity = post.imgURL;

  return carouselItem;
};

const getCarousels = computed(() =>
  posts.value.map(carouselsTransformer).filter((carousel) => carousel !== "")
);
</script>

<template>
  <div></div>
  <div>
    <ContentLayout :title="'Feeds'">
      <BaseCarousel :carousels="getCarousels"></BaseCarousel>
    </ContentLayout>
  </div>
</template>
