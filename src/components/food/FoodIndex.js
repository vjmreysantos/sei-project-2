import React from 'react'
import { useParams } from 'react-router'
import { getRandomMeal } from '../lib/api'

import FoodCard from './FoodCard'

function FoodIndex() {
  const { foodsId } = useParams()
  const [foods, setFoods] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !isError && !foods

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getRandomMeal(foodsId)
        setFoods(response.data.meals[0])
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [foodsId])
    
  // console.log(foods)
  return ( 
    <body className="background">
      <section className="section">
        <div className="container">
          {isError && <h1>Error</h1>}
          {isLoading && <h1>Fetching your dinner...</h1>}
          <div className="hero-body">
            <div>
              <FoodCard key={foods.idMeal} foods={foods} />           
            </div>
          </div>
        </div>
      </section>
    </body>
  )
}

export default FoodIndex