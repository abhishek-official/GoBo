import React, { Component } from 'react';
import { Container,Row, Col, ListGroup,Tab } from 'react-bootstrap';
import './BestJobs.css';
import ArtistJobList from './ArtistJobList';
import ProducerJobList from './ProducerJobList';
import { Link } from 'react-router-dom';

export class BestJobs extends Component {
    render() {
        return (
            <>
               <div className="best_jobs_wrapper">
                    <div className="line_shape">
                        <img src={'assets/img/homepage/line.png'} className="img-fluid" alt="img" />
                    </div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8">
                                <div className="jb_heading_wraper text-center pb-5">
                                    <h3>Our Best Jobs for You</h3>

                                    <p>Your next level Product developemnt company assets</p>
                                </div>
                            </Col>
                            
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                            <Col sm={12}>
                                <div className="latest_job_tabs">
                                    <ListGroup>
                                        <ListGroup.Item action href="#link1" as="li">
                                        Artist
                                        </ListGroup.Item>
                                        <ListGroup.Item action href="#link2" as="li">
                                        Producer
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Col>

                            <Col lg="12">
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link1">
                                    <ArtistJobList />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link2">
                                    <ProducerJobList />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>

                            <Col lg="12">
                                <div className="btn_hover text-center view-all jb_cover mt-5">
                                    <Link>view all</Link>
                                </div>
                            </Col>
                            </Tab.Container>
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

export default BestJobs
