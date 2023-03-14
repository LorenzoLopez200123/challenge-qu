<template>
  <div class="card__container">
    <div class="card__image">
      <img :src="image" :alt="`${name}-image`" />
    </div>
    <div class="card__info">
      <h1 class="card__name">{{ name }}</h1>
      <h1 class="card__description">{{ description }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  name: {
    type: String,
    default: 'unknown',
  },
  image : {
    type: String,
    default: 'https://via.placeholder.com/150',
  },
  description: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius ad ipsam, fugiat quidem perspiciatis inventore optio in deserunt, itaque voluptatem nisi unde quam tempora expedita est. Atque, voluptatum maxime!',
  },
});

</script>

<style scoped lang="scss">

</style>
