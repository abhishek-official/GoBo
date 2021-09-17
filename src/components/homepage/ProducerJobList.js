import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import '../../App.css';

export class ProducerJobList extends Component {
    render() {
        return (
            <>
                <Row>
                <Col lg="6" md="12" sm="12">
                    <div className="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                        <Row>
                            <Col lg="12" sm="12">

                                <div className="jp_job_post_side_img">
                                    <img src={'assets/img/homepage/lt1.png'} alt="post_img" />
                                </div>
                                <div className="jp_job_post_right_cont">
                                    <h4><a href="#">Male Actor in Main Lead</a></h4>

                                    <ul>
                                        <li><i className="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                        <li><i className="flaticon-location-pointer"></i>&nbsp; Mumbai</li>
                                    </ul>
                                    <p>We are looking for Fresh Faces for lead and supporting roles with a dedication to acting.</p>
                                </div>
                            </Col>

                        </Row>
                    </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default ProducerJobList
