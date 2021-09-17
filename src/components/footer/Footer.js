import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';

function Footer() {
    return (
        <>
            <div className="footer jb_cover">
                <div className="ft_shape bubble-18">
                    <img src={'assets/img/homepage/bubble2.png'} className="img-fluid " alt="img" />
                </div>

                <Container>
                    <Row>
                        <Col lg="3" sm="6" xs="12">
                            <div className="footerNav jb_cover">
                                <Link><img src={'assets/img/homepage/gobo_logo.png'} className="img-fluid site-logo" alt="img" /></Link>
                                

                                <ul className="icon_list_news index2_icon_list jb_cover">
                                    <li><Link><i className="fab fa-facebook-f"></i></Link></li>
                                    <li>
                                        <Link><i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li><Link><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link><i className="fab fa-google-plus-g"></i></Link></li>

                                </ul>
                            </div>
                        </Col>
                        <Col lg="3" sm="6" xs="12">
                            <div className="footerNav jb_cover footer_border_displ">
                                <h5>features</h5>
                                <ul className="nav-widget">
                                    <li><Link><i className="fa fa-square"></i>Job Management &amp; Billing
                                        </Link></li>

                                    <li><Link><i className="fa fa-square"></i>Time &amp; Materials Tracking
                                        </Link></li>

                                    <li><Link><i className="fa fa-square"></i>Standards Compliance
                                        </Link></li>

                                    <li><Link><i className="fa fa-square"></i>Real Time GPS Tracking
                                        </Link></li>

                                    <li><Link><i className="fa fa-square"></i>Client Portal
                                        </Link></li>

                                    <li><Link><i className="fa fa-square"></i> Powerful Workflow</Link></li>

                                </ul>
                            </div>
                        </Col>
                        <Col lg="3" sm="6" xs="12">
                            <div className="footerNav jb_cover footer_border_displ">
                                <h5>browse</h5>
                                <ul className="nav-widget">

                                    <li><Link><i className="fa fa-square"></i>Freelancers by Category</Link></li>

                                    <li><Link><i className="fa fa-square"></i> Freelancers in USA </Link></li>

                                    <li><Link><i className="fa fa-square"></i> Freelancers in UK</Link></li>

                                    <li><Link><i className="fa fa-square"></i> Freelancers in Canada</Link></li>
                                    <li><Link><i className="fa fa-square"></i> Freelancers in india</Link></li>
                                    <li><Link><i className="fa fa-square"></i> find jobs</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="3" sm="6" xs="12">
                            <div className="footerNav jb_cover">
                                <h5>Contact </h5>
                                <ul className="footer_first_contact">
                                    <li><i className="flaticon-location-pointer"></i>
                                        <p>123 City Avenue, Floor 10,
                                            <br /> malbourne, Australia.
                                        </p>
                                    </li>
                                    <li><i className="flaticon-telephone"></i>
                                        <p>1 -234 -456 -7890
                                            <br /> 1 -234 -456 -7890</p>
                                    </li>
                                    <li><i className="flaticon-envelope"></i><Link>info@Jbdesks.com </Link>
                                        <br />
                                        <Link>support@Jbdesks.com</Link>
                                    </li>

                                </ul>

                                
                            </div>
                        </Col>
                        <div className="copyright_left"><i className="fa fa-copyright"></i> 2021 <Link> GoBo. </Link> All Rights Reserved.
                        </div>

                        <div className="clearfix"></div>
                    </Row>
                </Container>
                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgTop gradient-color">
                        <div className="wave waveTop wavetop_3" style={{ backgroundImage: "url(/assets/img/homepage/wave3.png)" }}></div>
                    </div>
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle"></div>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom wavebottom_1 wavebottom_3" style={{ backgroundImage: "url(/assets/img/homepage/wave3.png)" }}></div>
                    </div>
                </div>
                <div className="ft_shape2 bubble-190">
                    <img src={'assets/img/homepage/bubble2.png'} className="img-fluid " alt="img" />
                </div>
                <div className="ft_shape1 bubble-19">
                    <img src={'assets/img/homepage/bubble2.png'} className="img-fluid " alt="img" />
                </div>
            </div>
        </>
    )
}

export default Footer
