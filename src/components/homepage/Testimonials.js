import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Testimonials.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

export class Testimonials extends Component {
    render() {
        return (
            <>
              <div className="client_wrapper_top">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="10" xs="12">
                            <div className="jb_heading_wraper">

                                <h3>success stories </h3>

                                <p>Your next level Product developemnt company assets</p>
                            </div>
                        </Col>
                        <Col lg="12" xs="12">
                            <div className="client_wrapper">
                                <OwlCarousel items={1} margin={10} autoplay ={false} nav={true} dots={false} navText={['<i class="flaticon-left-arrow"></i>','<i class="flaticon-right-arrow"></i>']} className="owl-theme" >  
                                    <div>                          
                                        <Row className="align-items-center">
                                            <Col xl="8" lg="12" md="12" xs="12">
                                                <div class="client_wrapper_cntnt jb_cover">
                                                    <div class="client_shap1 bubble-5">
                                                        <img src={'assets/img/homepage/bubble.png'} class="img-fluid" alt="img" />
                                                    </div>
                                                    <div class="client_shap2 bubble-7">
                                                        <img src={'assets/img/homepage/bubble.png'} class="img-fluid" alt="img" />
                                                    </div>
                                                    <img src={'assets/img/homepage/quote1.png'} alt="img" />

                                                    <h1><a href="#">Marita Irene</a> <span>(business)</span></h1>

                                                    <p>Packages and web page editors now use Lorem Ipsum as their am efault model text yr,and a search.</p>
                                                    <div class="client_shap3 bubble-6">
                                                        <img src={'assets/img/homepage/bubble.png'} class="img-fluid" alt="img" />
                                                    </div>
                                                </div>
                                            </Col>
                                            
                                            <Col xl="4" lg="12" md="12" xs="12">
                                                <div class="clinnt_slider_img jb_cover">
                                                    <img src={'assets/img/homepage/vv.png'}  class="img-fluid" alt="img" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div>                          
                                        <Row className="align-items-center">
                                            <Col xl="8" lg="12" md="12" xs="12">
                                                <div class="client_wrapper_cntnt jb_cover">
                                                    <div class="client_shap1 bubble-5">
                                                        <img src={'assets/img/homepage/bubble.png'} class="img-fluid" alt="img" />
                                                    </div>
                                                    <div class="client_shap2 bubble-7">
                                                        <img src={'assets/img/homepage/bubble.png'} class="img-fluid" alt="img" />
                                                    </div>
                                                    <img src={'assets/img/homepage/quote1.png'} alt="img" />

                                                    <h1><a href="#">Marita Irene</a> <span>(business)</span></h1>

                                                    <p>Packages and web page editors now use Lorem Ipsum as their am efault model text yr,and a search.</p>
                                                    <div class="client_shap3 bubble-6">
                                                        <img src={'assets/img/homepage/bubble.png'} class="img-fluid" alt="img" />
                                                    </div>
                                                </div>
                                            </Col>
                                            
                                            <Col xl="4" lg="12" md="12" xs="12">
                                                <div class="clinnt_slider_img jb_cover">
                                                    <img src={'assets/img/homepage/vv.png'}  class="img-fluid" alt="img" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </OwlCarousel>
                                </div>                                    
                        </Col>
                    </Row>
                </Container>

                <div className="slider_small3_shape shapenew">
                    <img src={'assets/img/homepage/shape4.png'} className="img-fluid" alt="img" />
                </div>
              </div> 
            </>
        )
    }
}

export default Testimonials
