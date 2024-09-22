import axios from "axios";
import { useMutation, useQuery } from "react-query"

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:5000/superHeroes")
  }
  const addSuperHero = (hero) => {
    return axios.post("http://localhost:5000/superHeroes" , hero)
  }
export const useSuberHereosData = (onSuccess , onError) => {
  return useQuery("superHeroes", fetchSuperHeroes ,
        {
          enabled:false,
          onSuccess,
          onError,
        }
      );

}
export const useAddSuperHeroData = () => {
  return useMutation( addSuperHero )
}

