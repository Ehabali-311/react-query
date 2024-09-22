import axios from "axios"
import { useQuery } from "react-query"

// eslint-disable-next-line react/prop-types
export const DependentQueries = ({email}) => {
    const fetchUserByEmail = () => {
        return axios.get(`http://localhost:5000/users?email=${email}`)
    }
    
 const {data : user}  = useQuery(["user", email] , () => fetchUserByEmail(email),

{
  enabled : !email
});
  return (
    <div>
     {user?.data.email}
    </div>
  )
}

