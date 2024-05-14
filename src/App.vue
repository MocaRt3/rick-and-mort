<template>
  <div class="wrapper">
    <div class="title-container">
      <h1 class="title-container__title">The Rick and Morty API</h1>
    </div>
    <CardsHeroes @sendFalse="sendFalse"/>
    <PaginationsOfPages v-if="bool" />
  </div>
</template>

<script setup>
import CardsHeroes from './components/CardsHeroes.vue';
import PaginationsOfPages from './components/PaginationsOfPages.vue';
import { useMainStore } from './stores/mainStore.js';
import {ref} from 'vue'

const bool = ref(true)
const mainStore = useMainStore();
const sendFalse = (fal) => {
  bool.value = fal;
}
</script>

<style lang="scss" scoped>

.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vw;
  &__title {
    font-size: 3em;
    font-weight: 700;
    color: rgb(6, 7, 88);
  }
}

</style>
