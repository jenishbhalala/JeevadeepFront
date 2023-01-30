import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import sectionImg from "../assets/Images/section-icon.png";
import formImage from "../assets/Images/form-img.jpg";
import { becomeCreateVolunteer } from '../redux/actions/volunteerActions';
import { useTranslation } from 'react-i18next';

const BecomeVolunteer = (props) => {
    const { t } = useTranslation();
    const BecomeList = useSelector((state) => state.becomeCreate);
    const { loading, error, becomeCreate } = BecomeList;
    console.log("loading, error, becomeCreate", loading, error, becomeCreate);
    const [becomeData, setBecomeData] = useState();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBecomeData({ ...becomeData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(becomeCreateVolunteer(becomeData));
    }
    useEffect(() => {
        window.addEventListener("scroll", props.Animation);
    }, [])
    return (
        <section className="contact-form-area register-area">
            <div className="container reveal">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading text-center">
                            <div className="section-icon">
                                <img src={sectionImg} alt="section-icon" />
                            </div>
                            <h2 className="section__title">{t("regi_now")}</h2>
                            <p className="section__meta">{t("join_us")}</p>
                        </div>
                    </div>
                </div>
                <div className="row form-shared-wrap reveal">
                    <div className="col-lg-6 reveal">
                        <div className="form-shared-content">
                            <div className="form-img">
                                <img src={formImage} alt="" />
                            </div>
                            <div className="form-content">
                                <h3 className="form__title">{t("requirement")}</h3>
                                <p className="form__desc">
                                    Aliquam hendrerit a augue insu image pellentes que id erat quis sollicitud null
                                    mattis Ipsum is simply dummy typesetting industry. Alienum phaedrum torquatos nec
                                    eu,
                                    vis detraxit periculis ex, nihil expetendis in meifn pericula euripidis, hinc partem
                                    ei est.
                                    Eos ei nisl graecis, aperiri consequat anlorem tincidunt vix at
                                </p>
                                <ul className="form__list">
                                    <li><i className="fa fa-check"></i> Eos ei nisl graecis vix aperiri consequat</li>
                                    <li><i className="fa fa-check"></i> Alienum phaedrum torquatos</li>
                                    <li><i className="fa fa-check"></i> Dius lorem tincidunt vixat</li>
                                </ul>
                                <div className="contact-us-box">
                                    <div className="contact__item">
                                        <h4>{t("call_us")}</h4>
                                        <a href="tel:+91 99784 41000">+91 99784 41000</a>
                                    </div>
                                    <div className="contact__item contact__item2">
                                        <h4>{t("send_email")}</h4>
                                        <a href="mailto: info@jeevandeepfoundation.in"> info@jeevandeepfoundation.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 reveal">
                        <div className="form-shared">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" onChange={(e) => handleChange(e)} name="full_name" className="form-control" placeholder={t("full_name")} />
                                        </div>
                                        <p>{error ? error?.full_name?.[0] : ""}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email" onChange={(e) => handleChange(e)} name="email" className="form-control" placeholder={t("email_add")} />
                                        </div>
                                        <p>{error ? error?.email?.[0] : ""}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" onChange={(e) => handleChange(e)} name="number" className="form-control" placeholder={t("phone_no")} />
                                        </div>
                                        <p>{error ? error?.number?.[0] : ""}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" onChange={(e) => handleChange(e)} name="address" className="form-control" placeholder={t("address")} />
                                        </div>
                                        {/* <p>{error ? error.full_name[0] : ""}</p> */}
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" onChange={(e) => handleChange(e)} name="birth_date" className="form-control" placeholder={t("dob")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" onChange={(e) => handleChange(e)} name="occupation" className="form-control" placeholder={t("occupation")} />
                                        </div>
                                        <p>{error ? error?.occupation?.[0] : ""}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="textarea" onChange={(e) => handleChange(e)} name="message"
                                                placeholder={t("write_msg")}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="theme-btn submit__btn">{t("send_msg")}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeVolunteer;
