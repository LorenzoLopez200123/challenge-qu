<template>
  <div class="bg">
    <HeaderNav />
    <div v-if="isLoading" class="loading__container">
      <h2 class="loading__text">Loading...</h2>
      <h3 class="loading__subtitle-text">May the Force be with you.</h3>
    </div>
    <ItemList :planets="planets" />
    <div class="load-more__container">
      <button
        :disabled="isLoadingMorePages"
        class="load-more__btn"
        v-if="haveNextPage"
        @click="loadNextPage"
      >
        {{ !isLoadingMorePages ? "Load Next Page" : "Loading..." }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemList from "@/components/ItemList.vue";
import apiSwapi from "@/services/apiSwapi";
import apiUnsplash from "@/services/apiUnplash";
import { Planet } from "@/types/Planet";
import { ImageUnsplash } from "@/types/Unplash";
import { onMounted, ref, computed } from "vue";
import HeaderNav from "@/components/HeaderNav.vue";

const TIME_CACHE = 1000 * 60 * 60 * 24;
let planets = ref<Array<Planet>>([]);
let haveNextPage = ref<boolean>(false);
let loadMore = ref<boolean>(false);
let page = ref<number>(1);

const isLoading = computed(() => {
  return planets.value.length === 0;
});

const isLoadingMorePages = computed(() => {
  return planets.value.length > 0 && loadMore.value;
});

const loadNextPage = async () => {
  try {
    loadMore.value = true;
    const axiosInstance = apiSwapi();
    const { results, next } = await axiosInstance.get(
      "/planets",
      {
        cacheTime: TIME_CACHE,
      },
      page.value
    );
    const images = await getImages();
    const planetsWithImages = results!.map((planet: Planet, index: number) => {
      return {
        ...planet,
        image: images![index],
      };
    });
    planets.value = planets.value.concat(planetsWithImages);
    loadMore.value = false;
    haveNextPage.value = !!next;
    page.value += 1;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

const getImages = async () => {
  try {
    const axiosIntancesUnplash = apiUnsplash();
    const { results }: { results: Array<ImageUnsplash> } =
      await axiosIntancesUnplash.get(
        `search/photos?page=${page.value}&query=planet-star-wars`
      );
    if (!results) return [];
    return results!.map((image: ImageUnsplash) => image.urls.small);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

onMounted(async () => {
  try {
    const axiosInstance = apiSwapi();
    const { results, next }: { results: Array<Planet>; next: string } =
      await axiosInstance.get("/planets", {
        cacheTime: TIME_CACHE,
      });
    const images = await getImages();
    planets.value = results!.map((planet: Planet, index: number) => {
      return {
        ...planet,
        image: images![index],
      };
    });
    haveNextPage.value = !!next;
    page.value += 1;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});
</script>
