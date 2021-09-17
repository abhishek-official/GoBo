import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './ArenaSec.css';

export class ArenaSec extends Component {
    render() {
        return (
            <>
                <div class="counter_wrapper">
                    <Container>
                        <Row>
                            <Col lg="6" md="12" xs="12">
                                <div class="counter_mockup_design">
                                    <img src={'assets/img/homepage/mockup6.png'} class="img-fluid" alt="img" />
                                </div>
                                <div class="counter_jbbb">
                                    <img src={'assets/img/homepage/line2.png'} class="img-fluid" alt="img" />
                                </div>
                            </Col>
                            <Col lg="6" md="12" xs="12">
                                <div class="counter_right_wrapper">
                                    <h1>Step into the arena</h1>
                                    <p>Join our growing community of singers, musicians, actors, dancers, magicians, DJs and so much more.
                                    </p>                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default ArenaSec
