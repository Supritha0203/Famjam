import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link , useNavigate} from "react-router-dom";

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="#"><b>The FamJam Project</b></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item active">
    <Link className="btn bg-white text-success mx-1" to="/createalbum">Create album</Link>
        </li>
    <li className="nav-item">
<Link to="/about" className="btn bg-white text-success mx-1">About</Link>    </li>
    
    
  </ul>
</div>
</nav>
  </div>
  )
}

export default Navbar
