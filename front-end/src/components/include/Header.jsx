import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Link 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link 3</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header