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
            <Button variant="outline-primary  " >Add New Property</Button>

          </Col>
        </Row>
        <br></br>
        <Row className='align-items-start row-gap-4 '>
      
          {
            
            filteredData.map((data, index) => (
              <Col xs={{ order: 'first' }} key={index} className='rounded-5 col-12 col-md-6 col-lg-4 '>
                <Card className='' style={{ maxWidth: '300px',height:'450px' }}>
                  <div className='' style={{ height: '200px' }}>
                    <Card.Img variant="top" src={data.image} className='w-100 h-100 object-fit-contain' />
                  </div>

                  <Card.Body>
                    <div style={{ textOverflow: 'clip' }} className='w-100'>
                    <div className=''>
                    <i className="bi bi-star-fill d-flex align-items-center justify-content-center  gap-2  "  >
                    <i className="bi bi-star-fill d-flex align-items-center justify-content-center  gap-2 "  >
                    <i className="bi bi-star-fill d-flex align-items-center justify-content-center  gap-2 "  >
                         {data.rating.rate}</i></i></i>
                      </div>
                      <br />
                      <div className=''>
                      <Card.Title className='crd' >
                          <LinesEllipsis
                                      title={data.title}
                                      text={data.title}
                                      maxLine='2'
                                      ellipsis='...'
                                      trimRight
                                      basedOn='letters'/>
                      </Card.Title>
                      </div>
                    </div>
                    <div className='col-12 d-flex align-items-center justify-content-center  gap-2'>
                      <div className=''>
                        {data.category}
                      </div>
                    </div>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                  <ListGroup.Item><div className='border-1 border-secondary justify-content-center d-flex '>
                       USD {data.price}
                      </div>
                     </ListGroup.Item>
                    </ListGroup>
                  <Button className='rounded-0 ' style={{background:'#F15412'}}>View Property</Button>
                </Card>
              </Col>

            ))
          }

        </Row>
      </Container>
   
    </div>


  );
}

export default Dashboard;