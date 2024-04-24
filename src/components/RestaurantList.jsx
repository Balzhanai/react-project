import { useGetFoodQuery } from "../api/post";
import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
    const {data, restaurants, isLoading, error } = useGetFoodQuery()
    return (
        {
            restaurants.map(restaurant => <RestaurantCard
            name={restaurant})
        }
    )
        
    
}

export default RestaurantList;