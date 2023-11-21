import {Container, Row, Col} from 'react-bootstrap';

function Banner(){
    return(
        <div className='banWrap'>
            <Container className='py-3 py-md-5'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className='text-center text-white'>
                        <h3>Records of My study</h3>
                        <p>이번 과제를 계기로 나의 개발에 대한 내용을 기록한 웹을 만들 예정</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;