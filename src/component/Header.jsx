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

function header() {
  const [searchText, dispatch] = useSearch();
  return (
    <div className="header">
    <Navbar className="d-flex justify-content-between w-100 px-0 px-md-5" >
      <Form inline>
        <InputGroup>
        <Input placeholder='Search' value={searchText} sx={{  marginLeft:'50px' }} onChange={e=>dispatch(e.target.value)} />
          {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          /> */}
        </InputGroup>
      </Form>
      <div className=' ' style={{borderRadius:'25%', width:'50px', height:'50px'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" className='w-100 h-100 object-fit-cover ' />
          </div>
    </Navbar>
    
    </div>
  );
}

export default header;