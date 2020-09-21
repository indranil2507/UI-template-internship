import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-brand">
                  Best Tenders
              </div>
              <div className="header-items">
                  <div className="header-item dollar">
                  $
                  </div>
                  <div className="header-item">
                  <i class="far fa-bell"></i>
                  </div>
                  <div className="header-item search-item">
                      <input className="input-field" placeholder="Search">
                      </input>
                  </div>
                  <div className="header-item">
                     <img src="public/Assets/avatar.jpg" alt="avatar" /> David
                  </div>
              </div>
            </div>

        </nav>

        </>
    )
}

export default Navbar
