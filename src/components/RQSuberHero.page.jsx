import { useParams } from "react-router-dom";
import { useSuberHereosById } from "../hooks/useSuberHereosById";

export const RQSuberHeroPage = () => {
  const {heroId} = useParams();
  const { isLoading, error, data } = useSuberHereosById(heroId);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  )
}

