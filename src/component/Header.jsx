import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../Styles/Header.css';
import Input from '@mui/material/Input';
// import useSearch from '../utils/Context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



const Header = ({value,getInput,titles}) => {

  
  return (
    <div className="header">
      <div>
          {titles}
        </div>
    <Navbar className="d-flex justify-content-between w-100 px-0 px-md-5 mt-4 mb-1 " >
      <Form inline>
        <InputGroup>
         <SearchIcon sx={{ color:'black', marginRight:'5px', marginTop:'3px'}} />
        <Input placeholder='Search' value={value} sx={{  marginLeft:'50px', color:'black' }} onChange={(e) => getInput(e.target.value)} />
       {/* <Button type='submit' className='btn btn-primary' onClick={searchText}>Search</Button> */}
        </InputGroup>
        
      </Form>
     
          <IconButton aria-label="user" size="large" sx={{ color:'#34B3F1'}} >
        <AccountCircleIcon />
      </IconButton>
    </Navbar>
    
    </div>
  );
}

export default Header;