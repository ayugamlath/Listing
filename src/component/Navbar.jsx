import React from 'react'
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HomeOutlined } from '@ant-design/icons';
import dash from '../assets/dash.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
function navbar() {
  const isCurrentLink = (path) => window.location.pathname === path;
  return (
    <div className='w-25 bg-info'>
      <div className='w-100'>
        <div className=' w-100'>
          <div className=' col-auto col-md-2 min-vh-100 w-100'>
            <a className='text-decoration-none text-white d-flex align-itemcenter' style={{ marginLeft: '40px', marginTop: '2rem' }}>

              <span className='ms-1 fs-4'>Realync</span>
            </a>
            <br />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white  fs-5 d-flex" aria-current="page">
                  <i className='bi bi-speedometer2'></i>
                  <div className="opa">
                    <span className={`ms-3 d-none d-sm-inline ${isCurrentLink('/') && 'text-dark'}`}>Dashboard</span></div>
                </a>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white  fs-5 d-flex" aria-current="page">
                  <i className='bi bi-speedometer2'></i>
                  <div className="opa">
                    <span className='ms-3 d-none d-sm-inline'>Tours</span></div>
                </a>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" className="nav-link text-white  fs-5 d-flex" aria-current="page">
                  <i className='bi bi-speedometer2'></i>
                  <div className="opa">
                    <span className='ms-3 d-none d-sm-inline'>Properties</span></div>
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
