/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import logo from '../assets/Images/jeevandeep_foundation_logo.png';
import "../assets/scss/Home.scss";
import "../assets/scss/Common.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
    let navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <div className="header-area">
                <div className="header-top-action">
                    <Container>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="top-action-content">
                                    <div className="info-box info-box-1 d-flex align-items-center">
                                        <ul className="d-flex align-items-center">
                                            <li><a href="mailto: info@jeevandeepfoundation.in"><i className="fa fa-envelope"></i> info@jeevandeepfoundation.in</a></li>
                                            <li><a href="tel:+91 99784 41000"><i className="fa fa-phone-square"></i>+91 99784 41000</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="top-action-content-1 info-action-content">
                                    <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                                        <ul className="top-action-list d-flex align-items-center">
                                            <li><a href="/admin/login">Login</a></li>
                                            <li><a href="/register">{t('register')}</a></li>
                                            <li><a href="https://twitter.com/jeevandeepfoun1?s=20&t=ZmUI9AqsXAfrEv3DA8PdfQ"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href=" https://www.facebook.com/Jeevandeep2022/"><i className="fab fa-facebook"></i></a></li>
                                            {/* <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest"></i></a></li> */}
                                            <li><a href="https://instagram.com/jeevandeepfoundationsurat?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram"></i></a></li>
                                            <li>
                                                <select onChange={(e) => changeLanguage(e.target.value)}>
                                                    <option value="en">English</option>
                                                    <option value="hi">Hindi</option>
                                                    <option value="guj">Gujarati</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="header-top header-menu-action position-sticky">
                    <Container>
                        <>
                            {["xl"].map((expand) => (
                                <Navbar key={expand} sticky="top" bg="light" expand={expand} className="my-3">
                                    <Container fluid>
                                        <Navbar.Brand href="/"><img src={logo} alt="logo" style={{width: "125px"}} /></Navbar.Brand>
                                        {/* <Button className="donate-btn" variant="danger">Donate now</Button> */}
                                        <div className="ml-auto"><a className="donate-btn" href="donate">{t('donate_now')}</a></div>
                                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                        <Navbar.Offcanvas
                                            id={`offcanvasNavbar-expand-${expand}`}
                                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                            placement="end"
                                        >
                                            <Offcanvas.Header closeButton className="justify-content-end" />
                                            <Offcanvas.Body>
                                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                                    <Nav.Link href="/">{t("home")}</Nav.Link>
                                                    {/* <Nav.Link href="#action2">Causes</Nav.Link>
                                                    <Nav.Link href="#action2">Events</Nav.Link> */}
                                                    {/* <Nav.Link href="#action2">News</Nav.Link> */}
                                                    <Nav.Link href="/become-volunteer">{t("become_volunteer")}</Nav.Link>
                                                    <Nav.Link href="/our-team">{t("our_team")}</Nav.Link>
                                                    {/* <Nav.Link href="#action2">{t("sponsers")}</Nav.Link> */}
                                                    <Nav.Link href="/gallary">{t("gallary")}</Nav.Link>
                                                    <Nav.Link href="/about-us">{t("about")}</Nav.Link>
                                                    {/* <NavDropdown title="English" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                                        <NavDropdown.Item href="#">English</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action4">Hindi</NavDropdown.Item>
                                                    </NavDropdown> */}
                                                    <Nav.Link href="/contact-us">{t("contact")}</Nav.Link>
                                                </Nav>
                                                <div className="mobile_social_icon footer__social" style={{ display: "flex", justifyContent: "center" }}>
                                                    <ul style={{ paddingLeft: "0px" }}>
                                                        <li><a href="https://twitter.com/jeevandeepfoun1?s=20&t=ZmUI9AqsXAfrEv3DA8PdfQ"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="https://www.facebook.com/Jeevandeep2022/"><i className="fab fa-facebook"></i></a></li>
                                                        {/* <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest"></i></a></li> */}
                                                        <li><a href="https://www.instagram.com/jeevandeepfoundationsurat/?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div style={{ textAlign: "center" }}>
                                                    <Button className="donate-btn-block" onClick={() => navigate("/donate")} >{t('donate_now')}</Button>
                                                </div>
                                            </Offcanvas.Body>
                                        </Navbar.Offcanvas>
                                    </Container>
                                </Navbar>
                            ))}
                        </>
                    </Container>
                </div>
            </div>
        </>
    );
};
export default Header;
