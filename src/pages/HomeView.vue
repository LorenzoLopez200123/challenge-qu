<template>
  <div class="bg">
    <HeaderNav />
    <ItemList :planets="planets" />
    <div class="load-more__container">
      <button class="load-more__btn" v-if="haveNextPage" @click="loadNextPage">
        Load Next Page
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemList from "@/components/ItemList.vue";
import apiSwapi from "@/services/apiSwapi";
import apiUnsplash from "@/services/apiUnplash";
import { Planet } from "@/types/Planet";
import { onMounted, ref } from "vue";
import HeaderNav from "@/components/HeaderNav.vue";

let planets = ref<Array<Planet>>([]);
let haveNextPage = ref<boolean>(false);
let page = ref<number>(1);

const loadNextPage = async () => {
  const axiosInstance = apiSwapi();
  const { results, next } = await axiosInstance.get(
    "/planets",
    {
      cacheTime: 1000 * 60 * 60 * 24,
    },
    page.value
  );
  const images = await getImages();
  const planetsWithImages = results!.map((planet: Planet, index: number) => {
    return {
      ...planet,
      image: images[index],
    };
  });
  planets.value = planets.value.concat(planetsWithImages);
  haveNextPage.value = !!next;
  page.value += 1;
};

const getImages = async () => {
  const axiosIntancesUnplash = apiUnsplash();
  const { results } = await axiosIntancesUnplash.get(
    `search/photos?page=${page.value}&query=planet-star-wars`
  );
  if (!results) return [];
  return results!.map((result: any) => result.urls.small);
};

onMounted(async () => {
  const axiosInstance = apiSwapi();
  const { results, next } = await axiosInstance.get("/planets", {
    cacheTime: 1000 * 60 * 60 * 24,
  });
  const images = await getImages();
  planets.value = results!.map((planet: Planet, index: number) => {
    return {
      ...planet,
      image: images[index],
    };
  });
  haveNextPage.value = !!next;
  page.value += 1;
});
</script>
