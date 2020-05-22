import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <Footer>
            <Container>
                <Row>
                    <Col className="p-0" md={3} sm={12}>
                        Anshumant Sagar
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}

export default Footer;