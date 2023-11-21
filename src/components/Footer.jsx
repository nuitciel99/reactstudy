import {Button, Container, Row, Col} from 'react-bootstrap';
import { FaGithub, FaFacebook  } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiMariadb } from "react-icons/si";

function Footer(){
    return(
        <div style={{background:"#ddd"}} className='py-5'>
            <Container>
                <Row className='mb-5'>
                    <Col md={6}>
                        <ul className='d-flex justify-content-center justify-content-md-start'>
                            <li><a href="#!">Privacy</a></li>
                            <li className='px-3'>/</li>
                            <li><a href="#!">Team</a></li>
                            <li className='px-3'>/</li>
                            <li><a href="#!">Sitemap</a></li>
                        </ul>
                    </Col>
                    {/* justify-content-md-end : md 이상일 때 end */}
                    <Col md={6} className='d-flex justify-content-md-end justify-content-center'>
                        <ul className='d-flex gap-3 '>
                            <li><FaGithub /></li>
                            <li><GrOracle /></li>
                            <li><SiMariadb /></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center text-md-start px-3'>
                        <p className='small'>Java, DB, Spring, SpringBoot, React and etc</p>
                        <p className='small'>Basic of Tools, Mini Project, Semi Project, Final Project and etc</p>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Footer;
