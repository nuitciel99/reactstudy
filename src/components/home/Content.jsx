import {Button, Container, Row, Col} from 'react-bootstrap';
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";


function Content(){

    return(
        <Container className='mb-5'>
            <h3>About Tools</h3>
            <Row className='mb-5'>
                {/* d-flex flex-column align-items-center align-items-md-start */}
                <Col className='content1 d-flex justify-content-center align-items-center align-items-md-start mb-2'>
                    <div className='contentJava'>
                        <div className='icon'>
                            <FaJava style={ {color:"white", fontSize:"2em"} }/> 
                        </div>
                        <div className='text-center'>
                            <h4>JAVA : Mini Project</h4>
                            <p className='pOfcontent'>Topic : Movie ticketing logic with JAVA</p>
                            <p className='pOfcontent'>Essential logic : Singleton Pattern/Login User</p>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <img src="./img/img08.png" alt="" className='contentJavaImg mt-3' style={ {left:"10px", top:"10px"} } />
                </Col>
            </Row>
            <Row className='mb-5'>
                {/* sx 기본 12 */}
                <Col className='d-flex justify-content-center mb-3'> 
                    <img src="./img/img09.png" alt="" className='contentJsImg mt-3' style={ {left:"10px", top:"10px"} } />
                </Col>
                <Col className='content2 d-flex justify-content-center'>
                    {/* d-flex flex-column align-items-center : center */}
                    {/* flex-column >>> align-items-center */}
                    <div className='contentJs'>
                        <div className="icon">
                            <TbBrandJavascript style={ {color:"white", fontSize:"2em"} } />
                        </div>
                        <div className='text-center'>
                            <h4>Java Script</h4>
                            <p className='pOfcontent'>Basic of Java Script</p>
                            <p className='pOfcontent'>Java Script with Node.js</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='mb-5'>
                {/* d-flex flex-column align-items-center align-items-md-start */}
                <Col className='content1 d-flex justify-content-center align-items-center align-items-md-start mb-2'>
                    <div className='contentDB'>
                        <div className='icon'>
                            <FaDatabase style={ {color:"white", fontSize:"2em"} }/> 
                        </div>
                        <div className='text-center'>
                            <h4>Data Base</h4>
                            <p className='pOfcontent'>Used DB : Oracle, MariaDB</p>
                            <p className='pOfcontent'>Basic of Data Base</p>
                            <p className='pOfcontent'>Using ever since Semi Project</p>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <img src="./img/img10.png" alt="" className='contentDBImg mt-3' style={ {left:"10px", top:"10px"} } />
                </Col>
            </Row>
            <Row className='mb-5'>
                {/* sx 기본 12 */}
                <Col className='d-flex justify-content-center mb-3'> 
                    <img src="./img/img11.png" alt="" className='contentSpringImg mt-3' style={ {left:"10px", top:"10px"} } />
                </Col>
                <Col className='content2 d-flex justify-content-center'>
                    {/* d-flex flex-column align-items-center : center */}
                    {/* flex-column >>> align-items-center */}
                    <div className='contentSpring'>
                        <div className="icon">
                            <SiSpring style={ {color:"white", fontSize:"2em"} } />
                        </div>
                        <div className='text-center'>
                            <h4>Spring</h4>
                            <p className='pOfcontent'>Basic of Spring</p>
                            <p className='pOfcontent'>Studied with Member/Board logic/Attach</p>
                            <p className='pOfcontent'>Using ever since Semi Project</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='mb-5'>
                {/* d-flex flex-column align-items-center align-items-md-start */}
                <Col className='content1 d-flex justify-content-center align-items-center align-items-md-start mb-2'>
                    <div className='contentSpringBoot'>
                        <div className='icon'>
                            <SiSpringboot style={ {color:"white", fontSize:"2em"} }/> 
                        </div>
                        <div className='text-center'>
                            <h4>SpringBoot</h4>
                            <p className='pOfcontent'>Basic of SpringBoot</p>
                            <p className='pOfcontent'>Studied with Member/Board logic/Attach</p>
                            <p className='pOfcontent'>Using ever since Semi Project</p>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <img src="./img/img12.png" alt="" className='contentSpringBootImg mt-3' style={ {left:"10px", top:"10px"} } />
                </Col>
            </Row>
            <Row className='mb-5'>
                {/* sx 기본 12 */}
                <Col className='d-flex justify-content-center mb-3'> 
                    <img src="./img/img13.png" alt="" className='contentReactImg mt-3' style={ {left:"10px", top:"10px"} } />
                </Col>
                <Col className='content2 d-flex justify-content-center'>
                    {/* d-flex flex-column align-items-center : center */}
                    {/* flex-column >>> align-items-center */}
                    <div className='contentReact'>
                        <div className="icon">
                            <FaReact style={ {color:"white", fontSize:"2em"} } />
                        </div>
                        <div className='text-center'>
                        <h4>React</h4>
                            <p className='pOfcontent'>Basic of React</p>
                            <p className='pOfcontent'>Studied with Member/Board logic/Attach</p>
                            <p className='pOfcontent'>Using ever since Semi Project</p>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </Container>


    )
}

export default Content;