import { Link } from "react-router-dom";
import { useAddSuperHeroData, useSuberHereosData } from "../hooks/useSuberHereosData";
import { useState } from "react";
const RQSuberHereos = () => {
  const [name , setName] = useState("");
  const [alterEgo , setAlterEgo] = useState("");
  const {mutate : addSuperHero} = useAddSuperHeroData();

 const handleAddHero = () => {
    console.log({name , alterEgo})
    const hero = {name , alterEgo}
    addSuperHero(hero)
  }
   const onSucess = (data) => {
    console.log("Sucess" , data)
   }
   const onError = (error) => {
    console.log("Error" , error)
   }
 
const {isLoading , data , isError , error , isFetching , refetch } = useSuberHereosData(onSucess , onError);
     if(isLoading || isFetching){
      return <h2 className="text-center">Loading...</h2>
     }
     if(isError){
      return <h2 className="text-center">{error.message}</h2>
     }
  return (
    <>
      <h2>RQSuberHereos</h2>
    <div>
    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="form-control" type="text" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
      <button className="btn btn-primary" onClick={handleAddHero}>add Heroes</button>
    </div>
      <button className="btn btn-primary" onClick={refetch}>fetch Heroes</button>
        {data?.data.map((hero) => (
            <div key={hero.id}>
              <Link to={`/rqsuberhereos/${hero.id}`}>{hero.name}</Link>
            </div>
        ))}
        </>
      )
}

export default RQSuberHereos
