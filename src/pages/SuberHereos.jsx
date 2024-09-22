import axios from "axios";
import { useEffect, useState } from "react";

const SuberHereos = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error , setError] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:5000/superHeroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    }).catch((error) => {
      setError(error)
      setIsLoading(false)
    })
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h1>SuberHereos</h1>
      <ul>
        {data.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuberHereos;
