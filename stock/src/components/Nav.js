
import React from 'react';
function Nav(props) {
    return (
      <nav>
      {console.log(localStorage.getItem("id"))}
      {localStorage.getItem("id")==(null)? 
      <div style={{backgroundColor:"#caf2b1"}}class="nav-wrapper blue">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a  href="/login" class="waves-effect waves-light btn-small">Login</a></li>
          <li><a  href="/register" class="waves-effect waves-light btn-small">Register</a></li>
        </ul>
      </div>
      : <div style={{backgroundColor:"#caf2b1"}}class="nav-wrapper blue">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a  href="/portfolio" class="waves-effect waves-light btn-small">Portfolio</a></li>
        <li><a  href="/stock" class="waves-effect waves-light btn-small">Stocks</a></li>
        <li><a  href="/logout" class="waves-effect waves-light btn-small">Logout</a></li>
      </ul>
    </div>
    }
    </nav>
    )
  }

  export default Nav;