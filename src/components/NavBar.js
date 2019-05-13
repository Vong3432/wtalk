import React,{Component} from 'react'
import {NavLink,Link } from 'react-router-dom'
import Logo from '../images/logo.png'

class NavBar extends Component {

  state = {
  }
   
  render(){

    

    return (        
      <>    
      <nav className="navbar navbar-expand-lg navbar-light">   
      <div className="container">   
        <Link to="https://vong3432.github.io/wtalk/" className="navbar-brand"><img width="130" height="70" style={{objectFit:"contain"}} src={Logo} alt="logo"/></Link>                
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="https://vong3432.github.io/wtalk/" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="https://vong3432.github.io/wtalk/main" activeClassName="active">Main</NavLink>
          </li>                  
  
          </ul>
          
          <form className="form-inline ml-auto my-2 my-lg-0">
              {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <button className="btn primaryBTN my-2 my-sm-0" type="submit">Start posting</button>
          </form>
        </div>             
  
      </div>
    </nav>
    
    </>
    )
  }
}



export default NavBar
