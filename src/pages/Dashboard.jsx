import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Dashboard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useState, useEffect,  } from 'react';
import { toast } from 'react-toastify';
import { ListGroup } from 'react-bootstrap';
import Header from '../component/Header';
import DashboardPage from './DashboardPage';
import { Ellipsis } from 'react-bootstrap/esm/PageItem';
import { Hidden } from '@mui/material';
import LinesEllipsis from 'react-lines-ellipsis'
import Cards from '../component/Card';

const Dashboard = ({filteredData}) => {


  return (
    <div className='cards pt-4 '>
        
  <Container>
        <Row>
          <Col xs={{ order: 'first' }}>
            <span style={{ fontSize: 'x-large', fontStyle: 'bold' }}>Properties</span>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <span>Newest/Popular</span>
          </Col>
          <Col md={{ span: 3, offset: 2 }}>
            <Button variant="outline-danger  " >Add New Property</Button>

          </Col>
        </Row>
        <br></br>
        <Row className='align-items-start row-gap-4 '>
      
          {
            
            filteredData.map((data, index) => (
            
            <Cards key={index} data={data} />

            ))
          }

        </Row>
      </Container>
   
    </div>


  );
}

export default Dashboard;