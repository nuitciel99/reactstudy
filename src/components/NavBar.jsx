import { useState } from 'react';
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Offcanvas} from 'react-bootstrap';

function NavBar(){

    return(
            
        <Container className='d-flex justify-content-center mb-3'>
            <div className="navWrap d-flex justify-content-center">
                <Row className="mainNavBar">
                    <Col className='navBar d-flex flex-row justify-content-between'>
                        <li>Intro</li>
                        <li>Tools</li>
                        <li>Projects</li>
                        <li>Spring</li>
                        <li>Others</li>
                    </Col>
                </Row>
            </div>
        </Container>


    )
}

export default NavBar;