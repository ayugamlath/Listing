import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/Dashboard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useState, useEffect,  } from 'react';
import { toast } from 'react-toastify';
import useSearch from '../utils/Context';
import { ListGroup } from 'react-bootstrap';



const Dashboard = () => {
  //Since Server doesnt have a Search API, I have implemented the search function in the frontend
  const [data, setData] = useState([])
  const [searchText, dispatch] = useSearch();
  const [filteredData, setFilteredData] = useState([])

  const getData = async () => {
    try {
      const data = await axios.get('https://fakestoreapi.com/products');
      console.log(data.data);
      setData(data.data)
      setFilteredData(data.data)
    } catch (error) {
      toast.error('Error in fetching data');
      console.log(error);
    }
  }

  const filterResults = () => {
    const filtered = data.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredData(filtered);
  }

  useEffect(() => {
    filterResults();
  }, [searchText])




  useEffect(() => {
    getData()
  }, [])
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
                      
                      <Card.Title className='col-12 d-flex align-items-center justify-content-center  gap-2'>{data.title.length > 20 ? data.title.slice(0, 24) : data.title}</Card.Title>
                     
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




          {/* <Col xs><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card></Col>
        <Col xs={{ order: 'last' }}><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card></Col> */}
        </Row>
      </Container>
    </div>


  );
}

export default Dashboard;