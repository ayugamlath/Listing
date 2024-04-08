import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../Styles/Header.css';
import Input from '@mui/material/Input';
import useSearch from '../utils/Context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchIcon from '@mui/icons-material/Search';

function header() {
  const [searchText, dispatch] = useSearch();
  return (
    <div className="header">
    <Navbar className="d-flex justify-content-between w-100 px-0 px-md-5" >
      <Form inline>
        <InputGroup>
         <SearchIcon sx={{ color:'black', marginRight:'5px', marginTop:'3px'}} />
        <Input placeholder='Search' value={searchText} sx={{  marginLeft:'50px', color:'black' }} onChange={e=>dispatch(e.target.value)}  />
       
        </InputGroup>
      </Form>
     
          <IconButton aria-label="user" size="large" sx={{ color:'#34B3F1'}} >
        <AccountCircleIcon />
      </IconButton>
    </Navbar>
    
    </div>
  );
}

export default header;