import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';
import dash from '../assets/dash.svg';
import Input from '@mui/material/Input';
import useSearch from '../utils/Context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';


function header() {
  const [searchText, dispatch] = useSearch();
  return (
    <div className="header">
    <Navbar className="d-flex justify-content-between w-100 px-0 px-md-5" >
      <Form inline>
        <InputGroup>
        <Input placeholder='Search' value={searchText} sx={{  marginLeft:'50px' }} onChange={e=>dispatch(e.target.value)} />
         
        </InputGroup>
      </Form>
     
          <IconButton aria-label="user" size="large">
        <AccountCircleIcon />
      </IconButton>
    </Navbar>
    
    </div>
  );
}

export default header;