<template>
	<div class="pagination">

		<PaginationPage  :tenPages="tenPages" @send-active-page="changePagination" />

	</div>
</template>

<script setup>
import PaginationPage from './PaginationPage.vue';
import { useMainStore } from '../stores/mainStore.js';
import { ref, computed } from 'vue';

const mainStore = useMainStore();
const tenPages = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const maxPages = 42;

const changePagination = number => {
	if(number > 5 && number < 38) tenPages.value = Array.from({ length: 11 }, (_, index) => index + (number - 5));
	if(number > 37) tenPages.value = Array.from({ length: 11 }, (_, index) => index + 32);
	if(number < 6) tenPages.value = Array.from({ length: 11 }, (_, index) => index + 1);

	mainStore.getApiObject(number);
}



</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	column-gap: 20px;
	margin: 0 0 60px 0
}
</style>