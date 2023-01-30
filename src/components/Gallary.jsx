import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../assets/scss/Gallary.scss";
import img4 from '../assets/Images/gallery-img4.jpg';
import img5 from '../assets/Images/gallery-img5.jpg';
import img6 from '../assets/Images/gallery-img6.jpg';
import img7 from '../assets/Images/gallery-img7.jpg';
import img8 from '../assets/Images/gallery-img8.jpg';
import img9 from '../assets/Images/gallery-img9.jpg';
import img10 from '../assets/Images/gallery-img10.jpg';
import img11 from '../assets/Images/gallery-img11.jpg';
import img12 from '../assets/Images/gallery-img12.jpg';
import { useDispatch, useSelector } from "react-redux";
import { getGallary } from "../redux/actions/gallaryAction";

const Gallary = () => {
    const dispatch = useDispatch();
    const gallaryList = useSelector((state) => state.getGallary);
    

    useEffect(()=> {
        dispatch(getGallary());
    },[])

    return (
        <div>
            <section className="gallery-area2">
                <Container>
                    <Row lg={3} sm={2}>
                        {gallaryList?.getGallary?.results.map((data) => {
                            return (<Col>
                                <div className="gallery-item">
                                    <img src={data?.image} alt="" />
                                    {/* <a href="#" className="glightbox">
                                        <span className="gallery-icon"></span></a> */}
                                </div>
                            </Col>)
                        })}
                        
                    </Row>
                </Container>
            </section>
        </div>)
}
export default Gallary;