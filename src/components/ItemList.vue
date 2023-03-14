<template>
  <div class="item-list__container">
    <Card
      v-for="planet in planets"
      :image="planet.image"
      :key="planet.name"
      :name="planet.name"
      :description="`Climate is ${planet.climate} - you can find ${planet.terrain} terrain, the population is ${planet.population} habitants.`"
    >
    </Card>
  </div>
</template>
<script setup lang="ts">
import Card from "@/components/ItemCard.vue";
import { Planet } from "@/types/Planet";
import { defineProps } from "vue";

defineProps({
  planets: {
    type: Array<Planet>,
  },
});
</script>
<style lang="scss"></style>
