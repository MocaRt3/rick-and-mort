<template>
	<div>
		<FiltrCards @sendFalse="sendFalse" />
		<CardHeroes/>
	</div>
</template>

<script setup>
import CardHeroes from './CardHeroes.vue';
import {useMainStore} from '../stores/mainStore.js';
import FiltrCards from './FiltrCards.vue';
const emit = defineEmits({})
const mainStore = useMainStore();
mainStore.getApiObject(1);
function sendFalse(fal){
	emit('sendFalse', fal)
}

</script>

<style lang="scss" scoped>

</style>