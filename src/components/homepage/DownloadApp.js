import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DownloadApp.css';

export class DownloadApp extends Component {
    render() {
        return (
            <>
                <div className="download_wrapper" style={{ backgroundImage: "url(/assets/img/homepage/apps.jpg)" }}>
                    <div className="line_shape">
                        <img src={'assets/img/homepage/line.png'} className="img-fluid" alt="img" />
                    </div>
                    <Container>
                        <Row>
                            <Col lg="6" md="12" sm="12" xs="12">
                                <div className="download_mockup_design">
                                    <img src={'assets/img/homepage/mockup7.png'} className="img-fluid" alt="img" />
                                </div>
                            </Col>
                            <Col lg="6" md="12" sm="12" xs="12">
                                <div className="download_app_store text-right">
                                    <h1>Download</h1>
                                    <h2>GOBO App Now!</h2>
                                    <p>All it takes is 30 seconds to Download. Your Mobile App for Job
                                         <br />Fast, Simple &amp; Delightful.</p>
                                    <div className="app_btn playstore_2">
                                        <Link className="ss_playstore"><span><i className="flaticon-android-logo"></i></span> Play Store</Link>
                                        <Link className="ss_appstore"><span><i className="flaticon-apple"></i></span> App Store</Link>

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

export default DownloadApp
