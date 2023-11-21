import {Button, Container, Row, Col} from 'react-bootstrap';
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Content(){ 

    return(
        <Container className='mb-5'>
            <Row>
                <Swiper
                    slidesPerView={1}
                    navigation={true} modules={[Navigation]} className='mb-5'>
                    <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/K8qVH8V0VvY?si=pNO_tvPUMOv72Yjx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
                    <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/dqcOa-fVWWo?si=WObzdCBG4RolbdGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
                    <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/XUEuYq64HKI?si=y3F2emXEF9xpR4rL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
                    <SwiperSlide><iframe width="560" height="315" src="https://www.youtube.com/embed/jdTsJzXmgU0?si=OqqmZ2GZpO3mK6tR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></SwiperSlide>
                </Swiper>
            </Row>
            <div className='topBanWrap mb-5'>
                <Container className='py-3 py-md-5'>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} className='text-center text-white'>
                            <h3>Records of My study</h3>
                            <p>이번 과제를 계기로 나의 개발에 대한 내용을 기록한 웹을 만들 예정</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row className='mb-5'>
                <Col className='mb-3 d-flex justify-content-center'>
                    <div className='contentVideo d-flex justify-content-between'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/E-PzX2mKGUQ?si=r0AxFy6BzLpbCuFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Col>
                <Col className='mb-3 d-flex justify-content-center'>
                    <div className='contentVideo d-flex justify-content-between'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EtwtZbmrzB4?si=GAOsAE6VeBmjtsea" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
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
                            <p className='pOfcontent'>Studied with Member/Board/Attach logic</p>
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
                            <p className='pOfcontent'>Studied with Member/Board/Attach logic</p>
                            <p className='pOfcontent'>Using ever since Semi Project</p>
                            <p className='pOfcontent'>Commit and push Semi Project to Git</p>
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
                            <p className='pOfcontent'>Studied with Member/Board/Attach logic</p>
                            <p className='pOfcontent'>Using ever since Semi Project</p>
                            <p className='pOfcontent'>Commit and push Semi Project to Git</p>
                        </div>
                    </div>
                </Col>
            </Row>
            
        </Container>


    )
}

export default Content;