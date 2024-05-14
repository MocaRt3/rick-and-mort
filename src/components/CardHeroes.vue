<template>
	<div class="wrapper">
		<div class="cards-container" v-for="hero in mainStore.heroes" :key="hero.id">
			<section class="cards-container__block heroes-card">
				<img :src="hero.image" alt="" class="heroes-card__img">
				<div class="heroes-card__text-block">
					<h2 class="heroes-card__name">{{ hero.name }}</h2>
					<div class="heroes-card__information-container">
						<div 
							:class="{'red':hero.status == 'Dead','green':hero.status == 'Alive','grey':hero.status == 'unknown',  }"
							class="heroes-card__color">
						</div>
						<p class="heroes-card__status">{{ hero.status }} </p>
						<p class="heroes-card__tab">-</p>
						<p class="heroes-card__species">{{ hero.species }}</p>
					</div>

					<div class="heroes-card__locations-block">
						<h3 class="heroes-card__subtitle">Last known location:</h3>
						<p class="heroes-card__location">{{ hero.location.name }}</p>
					</div>

					<div class="heroes-card__locations-block">
						<h3 class="heroes-card__subtitle">First seen in:</h3>
						<p class="heroes-card__location">{{ }}</p>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore.js';


const mainStore = useMainStore();


</script>

<style lang="scss" scoped>
.wrapper {
	
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(3, 600px);
	grid-gap: 30px;
	padding: 80px 0;
	margin: 0 0 20px 0;
	
}

.cards-container {
	&__block {}
}

.heroes-card {
	background-color: #3C3E44;
	width: 600px;
	height: 220px;
	display: flex;
	column-gap: 15px;
	border-radius: 12px;

	&__img {
		width: 230px;
		height: 100%;
		border-radius: 12px;
	}

	&__text-block {
		width: 370px;
		padding: 15px 0 0 0;
	}

	&__name {
		color: #fff;
		font-size: 32px;
		font-weight: 700;
	}

	&__information-container {
		padding: 5px 0 0px 0;
		display: flex;
		color: #fff;
		align-items: center;
	}

	&__color {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		margin: 0 10px 0 0;
		
	}

	&__status {
		color: #fff;
		font-size: 18px;
	}

	&__tab {
		padding: 0 10px;
	}

	&__species {
		color: #fff;
		font-size: 18px;
	}

	&__locations-block {
		padding: 20px 0 0 0;
	}

	&__subtitle {
		color: rgb(158, 158, 158);
		font-size: 16px;
	}

	&__location {
		color: #fff;
		font-size: 18px;
		padding: 5px 0 0 0;
	}
}

.red{
	background-color: red;
}
.green{
	background-color: rgb(29, 187, 29);
}
.grey{
	background-color: grey;
}
</style>