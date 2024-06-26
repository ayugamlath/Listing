import React from 'react'
import '../Styles/Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet, Link } from "react-router-dom"

function navbar() {

  return (
    
    <div className='w-25   bg-gradient ' style={{background:'#000000'}} >
      <div className='w-100'>
        <div className=' w-100'>
          <div className=' col-auto col-md-2 min-vh-100 w-100'>
            <a className='text-decoration-none text-white d-flex align-itemcenter m-lg-5 ' >

              <span className='ms-1 fs-4'>Realync</span>
            </a>
            <br />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0 ms-5 ">
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white  fs-5 d-flex" aria-current="page">
                  <i className='bi bi-speedometer2'></i>
                  <div className="opa">
                    <span className='ms-3 d-none d-sm-inline '>Dashboard</span></div>
                </a>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white  fs-5 d-flex" aria-current="page">
                  <i className='bi bi-calendar4-week'></i>
                  <div className="opa">
                    <span className='ms-3 d-none d-sm-inline  '><Link to={`Tours`} style={{ textDecoration: 'none' ,color:'inherit'}}> Tours </Link></span></div>
                </a>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white  fs-5 d-flex" aria-current="page">
                  <i className='bi bi-file-ruled'></i>
                  <div className="opa">
                    <span className='ms-3 d-none d-sm-inline'><Link to={`Properties`} style={{ textDecoration: 'none' ,color:'inherit'}}>Properties</Link></span></div>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white  fs-5 d-flex" aria-current="page">
                  <i className='bi bi-envelope'></i>
                  <div className="opa">
                    <span className='ms-3 d-none d-sm-inline'>Messages</span></div>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white  fs-5 d-flex" aria-current="page">
                  <i className='bi bi-gear'></i>
                  <div className="opa">
                    <span className='ms-3 d-none d-sm-inline'>Settings</span></div>
                </a>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
