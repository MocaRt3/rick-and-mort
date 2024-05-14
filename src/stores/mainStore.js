import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import axios from 'axios';
import { BASE_URL, ALL_EPISODE } from '../constans/index.js';

export const useMainStore = defineStore('mainStore', () => {
	const heroes = ref([]);
	
	
	const getApiObject = async (page) => {
		const pages = page;
		try {
			const data = await axios.get(`${BASE_URL}${pages}`);
			heroes.value = data?.data?.results;

			
		} catch (error) {
			console.error('Error axios API:', error);
		}
	};

	const getFiltrApi = async (name, status) => {
		try{
			const data = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
			heroes.value = data?.data?.results;
		}
		catch (error) {
			console.error('Error axios API:', error);
		}
	}

	



	return {
		heroes,
		getApiObject,
		getFiltrApi,
		
	}
});