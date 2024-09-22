import axios from "axios"
import { useQuery } from "react-query"
const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:5000/superHeroes/${heroId}`)
}
export const useSuberHereosById = (heroId) => {
 return useQuery(["superHero", heroId], () => fetchSuperHero(heroId))
}

