import { Link } from "react-router-dom"

function RestaurantCard({ name, photoUrl, rating, specialty, categories}) {
    const categoriesList = categories.map(category => {
        return (
            <p key={category}>{category}</p>
        )
    })

    return (
        <Link to={'/restaurants/${name}'}>
            <img src={photoUrl} alt="" width={427} />
            <p>{name}</p>
            <div>
                <img src={starIcon} alt="" />
                <span>{rating}</span>
            </div>
            <p>{specialty}</p>
            <div>
                {categoriesList}
            </div>
        </Link>
    )
}

export default RestaurantCard;