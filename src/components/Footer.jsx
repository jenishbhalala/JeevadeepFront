import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer = ({ Animation }) => {
    const { t } = useTranslation();
    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])
    return (
        <div>
            <section className="footer-area reveal">
                <div className="footer-top">
                    <Container>
                        <Row className="footer-widget-wrap justify-content-end" xs={1} sm={2} md={2} lg={5} xl={5}>
                            {/* <Col className="footer-item footer-item1">
                                <h3 className="widget__title">about</h3>
                                <ul className="foot__links">
                                    <li><a href="#">causes</a></li>
                                    <li><a href="/about-us">about</a></li>
                                    <li><a href="#">New Campaign</a></li>
                                    <li><a href="#">Site Map</a></li>
                                    <li><a href="#">Events</a></li>
                                </ul>
                            </Col>
                            <Col className="footer-item footer-item2">
                                <h3 className="widget__title">explore</h3>
                                <ul className="foot__links">
                                    <li><a href="#">Press Release</a></li>
                                    <li><a href="/contact-us">contact</a></li>
                                    <li><a href="#">Blog Posts</a></li>
                                    <li><a href="#">Social Connect</a></li>
                                    <li><a href="#">Help Topics</a></li>
                                </ul>
                            </Col>
                            <Col className="footer-item footer-item3">
                                <h3 className="widget__title">links</h3>
                                <ul className="foot__links">
                                    <li><a href="#">Podcasts</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                </ul>
                            </Col>
                            <Col className="footer-item footer-item3">
                                <h3 className="widget__title">blog</h3>
                                <ul className="foot__links">
                                    <li><a href="#">Care for All People</a></li>
                                    <li><a href="#">Build school for kids</a></li>
                                    <li><a href="#">Being Volunteer</a></li>
                                    <li><a href="#">Raise fund to help</a></li>
                                </ul>
                            </Col> */}
                            <Col className="footer-item footer-item4">
                                <h3 className="widget__title">contact</h3>
                                <ul className="contact__info">
                                    <li>{t("company_address")}</li>
                                    <li><a href="mailto: info@jeevandeepfoundation.in"> info@jeevandeepfoundation.in</a></li>
                                    <li><a href="tel:+91 99784 41000">+91 99784 41000</a></li>
                                </ul>
                                <div className="footer__social">
                                    <ul>
                                        <li><a href="https://twitter.com/jeevandeepfoun1?s=20&t=ZmUI9AqsXAfrEv3DA8PdfQ"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.facebook.com/Jeevandeep2022/"><i className="fab fa-facebook"></i></a></li>
                                        {/* <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest"></i></a></li> */}
                                        <li><a href="https://www.instagram.com/jeevandeepfoundationsurat/?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <div className="footer-copyright">
                    <Container>
                        <Row>
                            <Col>
                                <div className="copyright-desc">
                                    <p>© Copyright {new Date().getFullYear()} by <a href="#">Layerdrops.com</a></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div> */}
            </section>
            <div id="back-to-top" className=""><i className="fa fa-angle-up" title="Go top"></i></div>
        </div>
    )
}
export default Footer;