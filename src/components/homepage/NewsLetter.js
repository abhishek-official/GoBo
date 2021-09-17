import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './NewsLetter.css';
import { Link } from 'react-router-dom';

export class NewsLetter extends Component {
    render() {
        return (
            <>
                <div className="news_letter_wrapper jb_cover">
                    <div className="sha1 bubble-180">
                        <img src="images/bubble2.png" className="img-fluid " alt="img" />
                    </div>
                    <Container>
                        <Row>
                            <Col lg="12" md="12" xs="12">
                                <div className="job_newsletter_wrapper jb_cover">
                                    <div className="jb_newslwtteter_left">
                                        <h2> Looking For A Job</h2>
                                        <p>Your next level Product developemnt company assetsYour next level Product </p>
                                    </div>
                                    <div className="jb_newslwtteter_button">
                                        <div className="btn_hover slider_btn jobs_btn_3">
                                            <Link to="/">submit</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="sha2 bubble-185">
                        <img src={'assets/img/homepage/bubble2.png'}  className="img-fluid " alt="img" />
                    </div>
                </div>
            </>
        )
    }
}

export default NewsLetter
