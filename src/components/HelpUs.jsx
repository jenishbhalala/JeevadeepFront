import React, { useEffect } from "react";

import sectionImg from "../assets/Images/section-icon.png";
import heart1 from "../assets/Images/heart-icon1.png";
import heart2 from "../assets/Images/heart-icon2.png";
import heart3 from "../assets/Images/heart-icon3.png";
import heart4 from "../assets/Images/heart-icon4.png";
import heart5 from "../assets/Images/heart-icon5.png";
import heart6 from "../assets/Images/heart-icon6.png";
import heart7 from "../assets/Images/heart-icon7.png";
import heart8 from "../assets/Images/heart-icon8.png";
import heart9 from "../assets/Images/heart-icon9.png";
import heart10 from "../assets/Images/heart-icon10.png";
import heart11 from "../assets/Images/heart-icon11.png";
import hope from "../assets/Images/hope.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const HelpUs = ({ Animation }) => {
    const { t } = useTranslation();
    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])
    return (
        <section className="service-area text-center"><img src={heart1} alt=""
            className="heart-icon heart-icon-1" /><img src={heart2} alt=""
                className="heart-icon heart-icon-2" /><img src={heart3} alt=""
                    className="heart-icon heart-icon-3" /><img src={heart4} alt=""
                        className="heart-icon heart-icon-4" /><img src={heart5} alt=""
                            className="heart-icon heart-icon-5" /><img src={heart6} alt=""
                                className="heart-icon heart-icon-6" /><img src={heart7} alt=""
                                    className="heart-icon heart-icon-7" /><img src={heart8} alt=""
                                        className="heart-icon heart-icon-8" /><img src={heart9} alt=""
                                            className="heart-icon heart-icon-9" /><img src={heart10} alt=""
                                                className="heart-icon heart-icon-10" /><img src={heart11} alt=""
                                                    className="heart-icon heart-icon-11" />
            <Container className="reveal">
                <Row>
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading service-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 className="section__title">{t('we_believe')}</h2>
                            <p className="section__meta">{t('help_us')}</p>
                        </div>
                    </div>
                </Row>
                <Row className="service-wrap" md={4} sm={2} xs={1}>
                    <Col>
                        <div className="service-item service-item1">
                            <div className="service-item-inner">
                                <div className="service-icon"><i class="fa fa-hands-helping"></i></div>
                                <div className="service-content">
                                    <h4 className="service__title">{t('hope')}</h4>
                                    <p className="service__desc">{t("hope_desc")}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="service-item service-item2">
                            <div className="service-item-inner">
                                <div className="service-icon"><i class="fa fa-hands-praying"></i></div>
                                <div className="service-content">
                                    <h4 className="service__title">{t('prayer')}</h4>
                                    <p className="service__desc">{t("prayer_desc")}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="service-item service-item3">
                            <div className="service-item-inner">
                                <div className="service-icon"><i className="fa fa-earth"></i></div>
                                <div className="service-content">
                                    <h4 className="service__title">{t('peace')}</h4>
                                    <p className="service__desc">{t("peace_desc")}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="service-item service-item4">
                            <div className="service-item-inner">
                                <div className="service-icon"><i className="fa fa-hand-holding-heart"></i></div>
                                <div className="service-content">
                                    <h4 className="service__title">{t("donation")}</h4>
                                    <p className="service__desc">{t("donation_desc")}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="button-shared"><a href="donate" className="theme-btn">{t('donate_now')}</a></div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HelpUs;