import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Partners.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


export class Partners extends Component {
    render() {
        return (
            <>
                <div className="pricing_table_3 jb_cover">
                    <div className="slider_small_shape44">
                        <img src={'assets/img/homepage/p2.png'} className="img-fluid " alt="img" />
                    </div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10" xs="12">
                                <div className="jb_heading_wraper">
                                    <h3>Our Partners </h3>
                                </div>
                            </Col>

                            <Col lg="12" xs="12">
                            <OwlCarousel items={5} margin={10} autoplay ={true} loop={true} nav={false} dots={false} className="owl-theme" id="partner-slider">
                                
                                <div>
                                    <img src={'assets/img/homepage/partner-1.jpg'} class="img-fluid" alt="" />
                                </div>

                                <div>
                                    <img src={'assets/img/homepage/partner-2.png'} class="img-fluid" alt="" />
                                </div>

                                <div>
                                    <img src={'assets/img/homepage/partner-3.png'} class="img-fluid" alt="" />
                                </div>

                                <div>
                                    <img src={'assets/img/homepage/partner-4.png'} class="img-fluid" alt="" />
                                </div>

                                <div>
                                    <img src={'assets/img/homepage/partner-5.jpg'} class="img-fluid" alt="" />
                                </div>

                                <div>
                                    <img src={'assets/img/homepage/partner-6.jpg'} class="img-fluid" alt="" />
                                </div>

                            </OwlCarousel>
                            </Col>
                            
                        </Row>
                    </Container>

                    <div className="counter_jbbb2 jb_cover">
                        <img src={'assets/img/homepage/line.png'} className="img-fluid" alt="img" />
                    </div>
                </div>
            </>
        )
    }
}

export default Partners
