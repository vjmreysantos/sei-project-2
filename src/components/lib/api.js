import axios from 'axios'

const randUrl = 'http://www.themealdb.com/api/json/v1/1/random.php'

export function getRandomMeal() {
  return axios.get(`${randUrl}`)
}

export function getMealFromId(foodId) {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
}


const catUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php'

export function getAllCategories() {
  return axios.get(`${catUrl}`)
}