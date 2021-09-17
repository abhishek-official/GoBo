import React,{Component} from 'react';  
import '../../App.css';
import {Container,Row,Col} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './HeroSection.css';  
import {Link} from 'react-router-dom';


export class HeroSection extends Component {  

        render() 
        {  
          return (  

              <>  
                <div className="main_slider_wrapper">
                    <div className="mains_slider_shaper">
                        <img src={'assets/img/homepage/slider_bg.png'} className="img-fluid" alt="img" />
                    </div>
                    <div className="slider_small2_shape">
                        <img src={'assets/img/homepage/shape4.png'} className="img-fluid" alt="img" />
                    </div>
                    <div className="slider_shape_smt bubble-1">
                        <img src={'assets/img/homepage/bubble.png'} className="img-fluid" alt="img" />
                    </div>

                    <OwlCarousel items={1} margin={10} autoplay ={false} nav={true} dots={false} className="owl-theme" >  

                        <div>
                        <div className="carousel-captions caption-1">
                            <Container>
                                <Row className="align-items-center">
                                    <Col xl="6" lg="6" md="12" xs="12">
                                        <div className="content">
                                            <div className="slider_shape_smt1 bubble-2">
                                                <img src={'assets/img/homepage/bubble.png'} className="img-fluid " alt="img" />
                                            </div>
                                            <h2>BE AN <span> INSPIRATION </span></h2>

                                            <p>Showcase your talent.
                                            <br /> Make a name for yourself</p>
                                            <div className="btn_hover slider_btn">
                                                <Link>sign up free</Link>
                                            </div>
                                            <div className="slider_icon_list">
                                                <ul>

                                                    <li><Link><i className="fab fa-apple"></i></Link>
                                                    </li>
                                                    <li><Link><i className="fab fa-amazon"></i></Link>
                                                    </li>
                                                    <li><Link><i className="fab fa-angular"></i></Link>
                                                    </li>
                                                    <li><Link><i className="fas fa-th-large"></i></Link>
                                                    </li>
                                                    <li><Link><i className="fas fa-blog"></i></Link>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                            </div>
                                    </Col>
                                    
                                    <Col xl="6" lg="6" md="12" xs="12">
                                        <div className="slider_shape_sm3 bubble-3">
                                            <img src={'assets/img/homepage/bubble.png'} className="img-fluid " alt="img" />
                                        </div>
                                        <div className="slider_side_img jb_cover">
                                            <img src={'assets/img/homepage/banner-1.png'} className="img-fluid" alt="img" />

                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        
                        </div>

                        <div>                        
                        <div className="carousel-captions caption-1">
                            <Container>
                                <Row className="align-items-center">
                                    <Col xl="6" lg="6" md="12" xs="12">
                                        <div className="content">
                                            <div className="slider_shape_smt1 bubble-2">
                                                <img src={'assets/img/homepage/bubble.png'} className="img-fluid " alt="img" />
                                            </div>
                                            <h2>BE AN <span> INSPIRATION </span></h2>

                                            <p>Showcase your talent.
                                            <br /> Make a name for yourself</p>
                                            <div className="btn_hover slider_btn">
                                                <Link>sign up free</Link>
                                            </div>
                                            <div className="slider_icon_list">
                                                <ul>

                                                    <li><Link><i className="fab fa-apple"></i></Link>
                                                    </li>
                                                    <li><Link><i className="fab fa-amazon"></i></Link>
                                                    </li>
                                                    <li><Link><i className="fab fa-angular"></i></Link>
                                                    </li>
                                                    <li><Link><i className="fas fa-th-large"></i></Link>
                                                    </li>
                                                    <li><Link><i className="fas fa-blog"></i></Link>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="clear"></div>
                                            </div>
                                    </Col>
                                    
                                    <Col xl="6" lg="6" md="12" xs="12">
                                        <div className="slider_shape_sm3 bubble-3">
                                            <img src={'assets/img/homepage/bubble.png'} className="img-fluid " alt="img" />
                                        </div>
                                        <div className="slider_side_img jb_cover">
                                            <img src={'assets/img/homepage/banner-2.png'} className="img-fluid" alt="img" />

                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        </div> 

                    </OwlCarousel>       
                
                    <div className="slider_small_shape">
                        <img src={'assets/img/homepage/shape4.png'} className="img-fluid" alt="img" />
                    </div>
                </div>
             </>  

          )  

        }  

      }  

export default HeroSection;