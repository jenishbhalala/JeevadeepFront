import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import logo from "../assets/Images/jeevandeep.png";
import "../assets/scss/Register.scss";
import { createRegister } from "../redux/actions/donateRegister";

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const createRegi = useSelector((state) => state.createRegister);
    const { loading, createRegistration, error } = createRegi;
    const [registerData, setRegisterData] = useState();
    const [organList, setOrganList] = useState([]);
    const [tissueList, setTissueList] = useState([]);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }

    const handleOrgan = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setOrganList((prev) => [...prev, value])
        }
        else {
            setOrganList(organList?.filter((organ) => organ !== value));
        }
    }

    const handleTissues = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setTissueList((prev) => [...prev, value])
        }
        else {
            setTissueList(tissueList?.filter((tie) => tie !== value))
        }
    }

    const organData = [
        { name: "Heart", value: "Heart", id: 1 },
        { name: "Lungs", value: "Lungs", id: 2 },
        { name: "Kidneys", value: "Kidneys", id: 3 },
        { name: "Liver", value: "Liver", id: 4 },
        { name: "Pancreas", value: "Pancreas", id: 5 },
        { name: "Intestine", value: "Intestine", id: 6 },
        { name: "All", value: "All", id: 7 },
    ]

    const tissueData = [
        { name: "Corneas/Eye Balls", value: "Corneas/Eye Balls", id: 1 },
        { name: "Skin", value: "Skin", id: 2 },
        { name: "Bones", value: "Bones", id: 3 },
        { name: "Heart Valves", value: "Heart Valves", id: 4 },
        { name: "Blood Valves", value: "Blood Valves", id: 5 },
        { name: "All", value: "All", id: 6 },
    ]


    const handleSubmit = () => {
        const registerList = {
            ...registerData,
            organs: organList,
            tissue: tissueList
        };
        dispatch(createRegister(registerList));
        if (createRegistration?.id) {
            setShow(true);  
        } else {
            setShow(false)
        }
    }

    return (
        <>
            <div className="register">
                <div className="register_main">
                    <div className="register_logo">
                        <span className="line"></span>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <span className="line"></span>
                    </div>
                    <span className="line_hr"></span>
                    <h4>For Organs / Tissue Pledging</h4>
                    <span className="form_sub_title">
                        (To be filled by individual of age 18 years or above)
                    </span>
                    <div className="fill_form_title">
                        <span className="line"></span>
                        <h6>fill form in capital letters only</h6>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="register_form mt-3">
                    <form>
                        <Row>
                            <Col xs="12">
                                <div className="register_date">
                                    <label>Date : </label>
                                    <input type="date" placeholder="date" />
                                </div>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <label>
                                    Name (As it appears on goverment issued identify card)
                                </label>
                            </Col>
                            <Col md="4">
                                <input type="text" name="first_name" onChange={(e) => handleChange(e)} placeholder="First Name" className="w-100" />
                                <p className="error_msg">{error ? error?.first_name?.[0] : ""}</p>
                            </Col>
                            <Col md="4">
                                <input type="text" name="middle_name" onChange={(e) => handleChange(e)} placeholder="Middle Name" className="w-100" />
                                <p className="error_msg">{error ? error?.middle_name?.[0] : ""}</p>
                            </Col>
                            <Col md="4">
                                <input type="text" name="last_name" onChange={(e) => handleChange(e)} placeholder="Last Name" className="w-100" />
                                <p className="error_msg">{error ? error?.last_name?.[0] : ""}</p>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <label>Mother's / Father's Name*</label>
                                <input type="text" name="parent_name" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.parent_name?.[0] : ""}</p>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <label>Current Residential Address*</label>
                                <input type="text" name="address" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.address?.[0] : ""}</p>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <label>Address Line 2*</label>
                                <input type="text" name="address2" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.address2?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>City*</label>
                                <input type="text" name="city" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.city?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>District*</label>
                                <input type="text" name="district" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.district?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>State*</label>
                                <input type="text" name="state" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.state?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>Pin Code*</label>
                                <input type="text" name="pin_code" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.pin_code?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>Mobile Number*</label>
                                <input type="text" name="number" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.number?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>Occupation*</label>
                                <input type="text" name="occupation" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.occupation?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>Email*</label>
                                <input type="email" name="email" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.email?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>Date Of Birth(DD/MM/YY)*</label>
                                <input type="date" name="birth_date" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.birth_date?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>Age*</label>
                                <input type="number" name="age" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.age?.[0] : ""}</p>
                            </Col>
                            <Col md="4" className="mt-2">
                                <label>Gender*</label>
                                <select className="w-100" name="gender" onChange={(e) => handleChange(e)} placeholder="Gender">
                                    <option value="MALE">MALE</option>
                                    <option value="FEMALE">FEMALE</option>
                                    <option value="OTHER">OTHER</option>
                                </select>
                                <p className="error_msg">{error ? error?.gender?.[0] : ""}</p>
                                {/* <input type="text" name="gender" onChange={(e) => handleChange(e)} className="w-100" /> */}
                            </Col>
                            <Col md="3" className="mt-2">
                                <label>Blood Group*</label>
                                <input type="text" name="blood_group" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.blood_group?.[0] : ""}</p>
                            </Col>
                            <Col md="5" className="mt-2">
                                <label>Emergency Contact Name*</label>
                                <input type="text" name="emergency_name" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.emergency_name?.[0] : ""}</p>
                            </Col>
                            <Col md="6" className="mt-2">
                                <label>Emergency Contact Number*</label>
                                <input type="text" name="emergency_number" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.emergency_number?.[0] : ""}</p>
                            </Col>
                            <Col md="6" className="mt-2">
                                <label>Emergency Contact Address*</label>
                                <input type="text" name="emergency_address" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.emergency_address?.[0] : ""}</p>
                            </Col>
                            <Col md="6" className="mt-2">
                                <label>Identify Card*</label>
                                <input type="text" name="identity_card" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.identity_card?.[0] : ""}</p>
                            </Col>
                            <Col md="6" className="mt-2">
                                <label>Enter Identify Card Number*</label>
                                <input type="text" name="card_number" onChange={(e) => handleChange(e)} className="w-100" />
                                <p className="error_msg">{error ? error?.card_number?.[0] : ""}</p>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <p className="mb-0">
                                    <b>Please Tick as Applicable</b>
                                </p>
                                <div className="form_organs">
                                    <span><b>Organ(s) : </b></span>
                                    {organData.map((organ) => {
                                        return (<Form.Check onChange={(e) => handleOrgan(e)} value={organ.value} type="checkbox" id="organ" name={organ.name} label={organ.value} />)
                                    })}
                                </div>
                                <div className="form_organs">
                                    <span><b>Tissue (s) : </b></span>
                                    {tissueData.map((organ) => {
                                        return (<Form.Check onChange={(e) => handleTissues(e)} type="checkbox" value={organ.value} id="tissue" name={organ.name} label={organ.value} />)
                                    })}
                                </div>
                                <p className="mb-0">
                                    <b>
                                        (Tissues can also be donated after brain stem death as well as
                                        cardiac death)
                                    </b>
                                </p>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <p className="mb-1">
                                    <b>Note : </b>
                                </p>
                                <p className="mb-1">
                                    1. Organ Donation is a family decision. So, it is important that
                                    you discuss your decision with family members and loved ones so
                                    that is will be easier for them so follow through with your
                                    wishes.
                                </p>
                                <Row>
                                    <Col md="8">
                                        <p className="mb-1">
                                            2. The person making the pledge has the option to withdraw
                                            the pledge.
                                        </p>
                                    </Col>
                                    <Col md="4">
                                        <div className="sign-box">
                                            <input className="w-100" type="text"
                                                placeholder="Sign,.............................................................................................................."
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button onClick={() => handleSubmit()}>Submit</Button>
                            </div>
                            <Col xs="12" className="mt-2 register_main">
                                <span class="line_hr"></span>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <p className="slogen">
                                    तुम्हारे जाने के बाद भी तुम जीवित रहेंगे |<br /> एक सरल कदम उठाए
                                    अपना अंग दान करे |
                                </p>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <div className="bottom-part">
                                    <div className="line">
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-xl-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-lg-block d-none"></span>
                                        <span className="d-md-block d-none"></span>
                                        <span className="d-md-block d-none"></span>
                                        <span className="d-md-block d-none"></span>
                                        <span className="d-md-block d-none"></span>
                                        <span className="d-md-block d-none"></span>
                                        <span className="d-md-block d-none"></span>
                                        <span className="d-md-block d-none"></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span className="long"></span>
                                    </div>
                                    <div className="email">
                                        <div className="top"></div>
                                        <p>E-mail:  info@jeevandeepfoundation.in</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>Submitted sucessfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default RegisterScreen;
