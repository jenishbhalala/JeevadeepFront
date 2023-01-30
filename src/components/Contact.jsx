import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from "react-bootstrap";
import sectionImg from "../assets/Images/section-icon.png";
import { getCreateContact } from "../redux/actions/contactAction";
import { useTranslation } from "react-i18next";

const Contact = (props) => {
    const { t } = useTranslation();
    const ContactList = useSelector((state) => state.createContact);
    const { loading, error, createContact } = ContactList;
    const dispatch = useDispatch();
    const [contactData, setContactData] = useState();
    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    }
    const handleSubmitContact = (e) => {
        e.preventDefault();
        dispatch(getCreateContact(contactData))
    }
    useEffect(() => {
        window.addEventListener("scroll", props.Animation);
    }, [])
    return (
        <section className="contact-area reveal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 className="section__title">{t("get_in_touch")}</h2>
                            <p className="section__meta">{t("write_msg")}</p>
                            <p className="section__desc">Aliq is notm hendr erit a augue insu image pellen tes que id
                                erat quis sollicitud. Lorem ipsum is simply free text dolor sit amet, consectetur
                                adipiscing ullam blandit hendrerit faucibus suspendisse.</p>
                            <ul className="section__list">
                                <li><a href="https://twitter.com/jeevandeepfoun1?s=20&t=ZmUI9AqsXAfrEv3DA8PdfQ"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com/Jeevandeep2022/"><i className="fab fa-facebook"></i></a></li>
                                {/* <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest"></i></a></li> */}
                                <li><a href="https://www.instagram.com/jeevandeepfoundationsurat/?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-shared">
                            <form onSubmit={handleSubmitContact}>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input type="text" onChange={(e) => handleChange(e)} className="form-control" name="full_name" placeholder={t("full_name")} />
                                        <p>{error ? error?.full_name?.[0] : ""}</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 form-group">
                                        <input type="text" onChange={(e) => handleChange(e)} className="form-control" name="email" placeholder={t("email_add")} />
                                        <p>{error ? error?.email?.[0] : ""}</p>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <input type="number" className="form-control" onChange={(e) => handleChange(e)} name="number" placeholder={t("phone_no")} />
                                        <p>{error ? error?.number?.[0] : ""}</p>
                                    </div>
                                    <div className="col-lg-12 col-sm-12 form-group">
                                        <textarea className="textarea" name="message" onChange={(e) => handleChange(e)} placeholder={t("write_msg")}></textarea>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button className="theme-btn submit__btn" type="submit">{t("send_msg")}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Row className="contact-detail-action reveal" lg={3} xs={1}>
                    <Col className="mt-3">
                        <div className="contact-item contact-item1">
                            <h3 className="contact__title">{t("about")}</h3>
                            <p className="contact__desc">{t("about_donation")}</p>
                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div className="contact-item contact-item2">
                            <h3 className="contact__title">{t("address")}</h3>
                            <p className="contact__desc">{t("company_address")}</p>
                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div className="contact-item contact-item3">
                            <h3 className="contact__title">{t("contact")}</h3>
                            <p className="contact__desc">
                                <a href="mailto: info@jeevandeepfoundation.in"> info@jeevandeepfoundation.in</a>
                                <br /><a href="tel:+91 99784 41000">+91 99784 41000</a></p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
export default Contact;