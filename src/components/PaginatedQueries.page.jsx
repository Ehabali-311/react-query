import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"

const fetchColors =(pageNumaber) => {
    return axios.get(`http://localhost:5000/colors?_start=${pageNumaber * 2}&_limit=2&_page=${pageNumaber}`)
}
export const PaginatedQueries = () => {
    const [pageNumaber, setPageNumaber] = useState(1);
    const {isLoading , data , isError , error}= useQuery(['colors', pageNumaber],
        ()=> fetchColors(pageNumaber),
    {
        keepPreviousData : true ,
    })
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }   
  return (
    <>
      <div>
        {data?.data.map((color) => (
          <div key={color.id}>{color.id}-{color.label}</div>
        ))}
      </div>
      <button className="btn btn-primary m-3" disabled={pageNumaber === 1} onClick={() => setPageNumaber(page => page - 1)}>Previous</button>
      <button className="btn btn-primary m-3" disabled={pageNumaber === 4} onClick={() => setPageNumaber(page => page + 1)}>Next</button>
    </>
  )
}
