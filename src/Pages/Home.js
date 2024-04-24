import { Link } from "react-router-dom"
import '../App.css'
import cartico from '../Assets/shopping-cart-add.png'

const HomeScr = () =>{
    return(
    <>
        <nav   className="navbar navbar-expand-lg navbar-light nav-bgc">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand">
      Navigations
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to={'/'} className="nav-link active" aria-current="page">
         Home
         </Link>
        </li>
        <li className="nav-item">
          <Link to={'/products'} className="nav-link active" aria-current="page">
          Products
          </Link>
        </li>
        <li className="nav-item">
        <Link to={'/contact'} className="nav-link active" aria-current="page">
          contact Us
          </Link>
        </li>
        <li className="nav-item">
         <Link to={'/about'} className="nav-link active" aria-current="page" >
            About Us
            </Link>
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      
      <span className="nav-icon">
        <Link to={'*'} >
          <img src={cartico} height={'35px'}/>
          </Link>
          </span>
       
    </div>
  </div>
</nav>



{/* card */}

</>

    )
}
export default HomeScr