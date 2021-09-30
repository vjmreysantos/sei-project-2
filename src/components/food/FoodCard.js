import { Link } from 'react-router-dom'

function FoodCard({ foods }) {
  return (
    <section className="hero">
      <div className="hero-head">
        <div className="column has-text-centered">
          <h2 className="title is-white is-2">{foods.strMeal}</h2>
          <div className="container is-medium">
            <div className="image is-centered is-4by3">
              <img src={foods.strMealThumb} alt={foods.strMeal} />
            </div>
            <div className="column has-text-centered">
              <h2 className="subtitle is-white is-4">{foods.strArea}</h2>
              <button className="button is-centered is-medium is-light">
                <Link to={`/food/${foods.idMeal}`}>Scran It</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodCard