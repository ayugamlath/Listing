import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Cards = ({getData}) => {

  return (


    <Col xs={{ order: 'first' }} key={index} className='rounded-5 col-12 col-md-6 col-lg-4 '>
                <Card className='' style={{ maxWidth: '300px' }}>
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
                      
                      <Card.Title className='col-12 d-flex align-items-center justify-content-center  gap-2'>{data.title.length > 20 ? data.title.slice(0, 23) : data.title}</Card.Title>
                     
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
  )
}

export default Cards