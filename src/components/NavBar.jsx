import { useState } from 'react';
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Offcanvas} from 'react-bootstrap';

function NavBar(){

    return(
            
        <Container className='d-flex justify-content-center mb-3'>
            <div className="navWrap d-flex justify-content-center">
                <Row className="mainNavBar">
                    <Col className='navBar d-flex flex-row justify-content-between'>
                        <ul className='navBarTitle'>Intro
                            <li className='navBarDetail'><a href="#">Introduce</a></li>
                            <li className='navBarDetail'><a href="#">myHistory</a></li>
                        </ul>
                        <ul>Tools
                            <li className='navBarDetail'><a href="#">Java</a></li>
                            <li className='navBarDetail'><a href="#">JavaScript</a></li>
                            <li className='navBarDetail'><a href="#">DB</a></li>
                            <li className='navBarDetail'><a href="#">Spring</a></li>
                            <li className='navBarDetail'><a href="#">SpringBoot</a></li>
                            <li className='navBarDetail'><a href="#">React</a></li>
                        </ul>
                        <ul>Projects
                            <li className='navBarDetail'><a href="#">Mini Project</a></li>
                            <li className='navBarDetail'><a href="#">Semi Project</a></li>
                            <li className='navBarDetail'><a href="#">Final Project</a></li>
                        </ul>
                        <ul>Reference
                            <li className='navBarDetail'><a href="#">Reference URL</a></li>
                        </ul>
                        <ul>Others
                            <li className='navBarDetail'><a href="#">Others</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </Container>


    )
}

export default NavBar;