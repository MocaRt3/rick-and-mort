<template>
	<div 
		v-for="num in tenPages"
		:key="num"
		:class="{'current-page': num === activePage, 'not-current-page': num !== activePage,}"
		class="pages-item "
		@click="handlePageClick"
	>	
		{{ num }}	
	</div>
</template>

<script setup>
import {ref} from 'vue';
const props = defineProps({
	tenPages: {
		type: Number
	}
});
const emit = defineEmits({});

const activePage = ref(1);
const handlePageClick = (event) => {
  if (!event.target.classList.contains('current-page')) {
    activePage.value = +(event.target.textContent) ;
	emit('send-active-page', activePage.value);
  }
};



</script>

<style lang="scss" scoped>
.pages-item{
	background-color: #4e5053;
	color: white;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
}
.current-page{
	color: #FF9800;
}

.not-current-page{
	transition: all 0.4s ease;
}
.not-current-page:hover{
	transform: scale(110%);
}

.arrow{
		width: 40px;
		height: 40px;
	}

</style>