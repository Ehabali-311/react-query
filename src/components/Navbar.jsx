
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/home"} >home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/superhereos"} >SuberHereos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/rqsuberhereos"}>rqsuberhereos</Link>
            </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
