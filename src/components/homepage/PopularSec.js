import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './PopularSec.css';
import { Link } from 'react-router-dom';

export class PopularSec extends Component {
    render() {
        return (
            <>
                <div className="popular_wrapper jb_cover">
                    <div className="slider_small3_shape shapenew">
                        <img src={'assets/img/homepage/shape4.png'} className="img-fluid " alt="img" />
                    </div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10" sm="12">
                                <div className="jb_heading_wraper">

                                    <h3>We are Popular Everywhere </h3>

                                    <p>Your next level Product developemnt company assets</p>
                                </div>
                            </Col>
                            <Col lg="12" xs="12">
                                <div className="jp_register_section_main_wrapper jb_cover bg-dark">
                                    <div className="jp_regis_left_side_box_wrapper">
                                        <div className="jp_regis_left_side_box">
                                            <i className="flaticon-laptop"></i>
                                            <h4>I’m a Producer</h4>
                                            <p>Signed in companies are able to post new
                                                <br /> job offers, searching for candidate...</p>
                                            <ul>
                                                <li><Link className="price_btn regis_btn"> register as company</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="jp_regis_right_side_box_wrapper">

                                        <div className="jp_regis_right_side_box">
                                            <i className="flaticon-doctor"></i>
                                            <h4>I’m an Artist</h4>
                                            <p>Signed in companies are able to post new
                                                <br /> job offers, searching for candidate...</p>
                                            <ul>
                                                <li><Link className="price_btn regis_btn">register as individual</Link></li>
                                            </ul>
                                        </div>
                                        <div className="jp_regis_center_tag_wrapper">
                                            <p>OR</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default PopularSec
