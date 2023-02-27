<script setup lang="ts">
import { computed } from "vue";

import useDoor from "@/useDoor";
import OpendDoor from "@/OpendDoor.vue";
import ClosedDoor from "@/ClosedDoor.vue";

const { isOpen, open, toggle, close } = useDoor(false);

const showDoor = computed(() => {
  if (isOpen.value === true) {
    return OpendDoor;
  }
  return ClosedDoor;
});

const openDoor = () => {
  if (isOpen.value === true) {
    return;
  }
  open();
};

const closeDoor = () => {
  if (isOpen.value === false) {
    return;
  }
  close();
};
</script>

<template>
  <component :is="showDoor" />

  <button @click="toggle" v-text="'toggle'" />
  <button @click="openDoor" v-text="'open'" />
  <button @click="closeDoor" v-text="'close'" />
</template>
