import { useGetFoodQuery } from "../api/post";
import RestaurantCard from "./RestaurantCard"; 

function RestaurantList() {
    const {data, restaurants, isLoading, error } = useGetFoodQuery()

    if(isLoading) {
        return(
            <p>Идет загрузка...</p>
        )
    }

    return (
        <div>
        {
             restaurants.map(restaurant => <RestaurantCard
             key={restaurant.id}
            name={restaurant.name}
            categories={restaurant.categories}
        />)
        }
        </div>
    )
        
    
}

export default RestaurantList;