import {Container, Row, Col, Card} from 'react-bootstrap';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import {vData} from '../data.js'


function Header(){
    const [myData, setMyData] = useState(vData)

    return(
        <Container className='mb-2 mb-md-5'>
            <div className='text-center mb-3'>
                <h3 className='title dot'>MY TOOLS</h3>
                <p>My tools when am on develope</p>
            </div>
            <Row>
                {
                myData.map(function(item, i){
                    return <CardView product={myData[i]} />
                })
                }
                
            </Row>
        </Container>
    )
}

function CardView({product}){
    return(
      <>
        <Col sm={6} md={4} className='mb-2'>
          <Card className='card'>
            <Card.Img variant="top" src={`./img/${product.img}`} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.content}
                </Card.Text>
              </Card.Body>
          </Card>
        </Col>
      </>
    )
  }

export default Header;