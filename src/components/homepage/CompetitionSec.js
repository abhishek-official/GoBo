import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CompetitionSec.css';
import { Link } from 'react-router-dom';
import '../../App.css';

export class CompetitionSec extends Component {
    render() {
        return (
            <>
                <div className="services_wrapper">
                    <div className="slider_small_shape44">
                        <img src={'assets/img/homepage/shape4.png'} className="img-fluid " alt="img" />
                    </div>
                    <div className="counter_jbbb2 jb_cover">
                        <img src={'assets/img/homepage/line.png'} className="img-fluid" alt="img" />
                    </div>

                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10" sm="12">
                                <div className="jb_heading_wraper text-center">

                                    <h3>Competition</h3>

                                    <p>Work with GOBO global creative community through a unique contest engine. Source the right talent for any written, audio or video production!</p>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" xs="12">
                                <div className="services_content">
                                    <img src={'assets/img/homepage/c1.png'} alt="img" />
                                    <h3><Link>Acting </Link></h3>
                                    <p>Create jobs, allocate to technicians, track time &amp; materials to determine job profitability </p>

                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" xs="12">
                                <div className="services_content">
                                    <img src={'assets/img/homepage/c2.png'} alt="img" />
                                    <h3><Link>Short Films</Link></h3>
                                    <p>Create jobs, allocate to technicians, track time &amp; materials to determine job profitability </p>

                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" xs="12">
                                <div className="services_content">
                                    <img src={'assets/img/homepage/c3.png'} alt="img" />
                                    <h3><Link>Dance</Link></h3>
                                    <p>Create jobs, allocate to technicians, track time &amp; materials to determine job profitability </p>

                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" xs="12">
                                <div className="services_content">
                                    <img src={'assets/img/homepage/c4.png'} alt="img" />
                                    <h3><Link>Action</Link></h3>
                                    <p>Create jobs, allocate to technicians, track time &amp; materials to determine job profitability </p>
                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" xs="12">
                                <div className="services_content">
                                    <img src={'assets/img/homepage/c5.png'} alt="img" />
                                    <h3><Link>Music</Link></h3>
                                    <p>Create jobs, allocate to technicians, track time &amp; materials to determine job profitability </p>

                                </div>
                            </Col>
                            <Col lg="4" md="6" sm="12" xs="12">
                                <div className="services_content">
                                    <img src={'assets/img/homepage/c6.png'} alt="img" />
                                    <h3><Link>Others</Link></h3>
                                    <p>Create jobs, allocate to technicians, track time &amp; materials to determine job profitability </p>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="slider_small3_shape">
                        <img src={'assets/img/homepage/shape4.png'} className="img-fluid" alt="img" />
                    </div>

                </div>
            </>
        )
    }
}

export default CompetitionSec
