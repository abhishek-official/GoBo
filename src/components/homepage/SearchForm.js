import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import '../../App.css';
import './SearchForm.css';

  
export class SearchForm extends Component {
    render() {
        return (
            <>
                <div className="index3_form_wrapper">
                    <div className="slider_small3_shape">
                        <img src={'assets/img/homepage/shape4.png'} className="img-fluid" alt="img" />
                    </div>
                    <Container>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <div className="index3_form_box">
                                    <div className="select_box">

                                        <select style={{display:"none"}}>
                                            <option>category</option>
                                            <option>real estate</option>
                                            <option>electronics</option>
                                            <option>marketing</option>
                                            <option>education</option>
                                        </select>

                                        <div className="nice-select"><span className="current">category</span><ul className="list"><li data-value="category" className="option selected">category</li><li data-value="real estate" className="option">real estate</li><li data-value="electronics" className="option">electronics</li><li data-value="marketing" className="option">marketing</li><li data-value="education" className="option">education</li></ul></div>

                                    </div>
                                    <div className="select_box">

                                        <select style={{display:"none"}}>
                                            <option>job title</option>
                                            <option>teacher</option>
                                            <option>marketing</option>
                                            <option>doctor</option>
                                            <option>graphic</option>

                                        </select>
                                        <div className="nice-select"><span className="current">job title</span><ul className="list"><li data-value="job title" className="option selected">job title</li><li data-value="teacher" className="option">teacher</li><li data-value="marketing" className="option">marketing</li><li data-value="doctor" className="option">doctor</li><li data-value="graphic" className="option">graphic</li></ul></div>

                                    </div>
                                    <div className="select_box">

                                        <select style={{display:"none"}}>
                                            <option>location</option>
                                            <option>pune</option>
                                            <option>banglore</option>
                                            <option>indore</option>
                                            <option>bhopal</option>

                                        </select>
                                    <div className="nice-select"><span className="current">location</span><ul className="list"><li data-value="location" className="option selected">location</li><li data-value="pune" className="option">pune</li><li data-value="banglore" className="option">banglore</li><li data-value="indore" className="option">indore</li><li data-value="bhopal" className="option">bhopal</li></ul></div>

                                    </div>
                                    <div className="contct_form_new3">
                                        <input type="text" name="name" placeholder="Keyword" />
                                    </div>
                                    <div className="index3_form_search">
                                        <a href="/"><i className="fas fa-search"></i></a>
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

export default SearchForm;
