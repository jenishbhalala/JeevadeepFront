import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import sectionImg from "../assets/Images/section-icon.png";
import helpingImg from "../assets/Images/helping-img.jpg";
import { createMakeDonate } from "../redux/actions/makeDonation";

const HelpingArea = ({ Animation }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const createDonate = useSelector((state) => state.createMakeDonation);
    const { loading, error, createDonation } = createDonate;
    const [donationData, setDonationData] = useState();

    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])

    const handleChange = (e) => {
        setDonationData({ ...donationData, [e.target.name]: e.target.value });
    }

    const handleMakeDonation = (e) => {
        e.preventDefault();
        dispatch(createMakeDonate(donationData));
    }

    return (
        <div className="reveal">
            <section className="mixer-area helping-area reveal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading mixer-heading">
                                <div className="section-icon">
                                    <img src={sectionImg} alt="section-icon" />
                                </div>
                                <h2 className="section__title">{t('helping_hand')}</h2>
                            </div>
                            <div className="helping-item">
                                <div className="row">
                                    <div className="col">
                                        <div className="helping-box helping-box1">
                                            <i className="fa fa-hamburger"></i>
                                            <h4>{t('food')}</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box2">
                                            <i className="fa fa-wine-bottle"></i>
                                            <h4>{t('water')}</h4>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="helping-box helping-box3">
                                            <i className="fa fa-heart-circle-plus"></i>
                                            <h4>{t('medical')}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-text-box">
                                <p className="helping__text">
                                    {/* Aliq is notm hendr erit a augue insu image pellen tes que
                                    id erat quis simply free text sollicitud. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing ullam blandit hendrerit faucibus suspendisse.
                                    Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incidi labore et dolore magna aliqua enim ad minim veniam. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mixer-area2 helping-area2 reveal">
                <div className="container">
                    <div className="row fun-content-wrap">
                        <div className="col-lg-6">
                            <div className="fun-content">
                                <div className="fun-item fun-item1">
                                    <img src={helpingImg} alt="" />
                                </div>
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 className="section__title">{t('charity_activities')}</h2>
                                    <p className="section__desc">
                                        {/* Aliq is notm hendr erit a augue insu image pellen tes que id erat
                                        quis simply free text sollicitud. Lorem ipsum dolor
                                        sit not amet, consectetur adipiscing ullam
                                        blandit simply free text hendrerit faucibus suspendisse. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="helping-form">
                                <div className="section-heading">
                                    <div className="section-icon">
                                        <img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 className="section__title text__white">{t('make_donation')}</h2>
                                    <p className="section__meta text__white">{t('donate_us_now')}</p>
                                </div>
                                <div className="form-shared">
                                    <form onSubmit={handleMakeDonation}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="value" onChange={(e) => handleChange(e)} placeholder={t("custom_value")} />
                                                    <p>{error ? error?.value?.[0] : ""}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="full_name" onChange={(e) => handleChange(e)} placeholder={t("full_name")} />
                                                    <p>{error ? error?.full_name?.[0] : ""}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" onChange={(e) => handleChange(e)} placeholder={t("email_add")} />
                                                    <p>{error ? error?.email?.[0] : ""}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="location" onChange={(e) => handleChange(e)} placeholder={t("location")} />
                                                    <p>{error ? error?.location?.[0] : ""}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="textarea" name="comment" onChange={(e) => handleChange(e)} placeholder={t('leave_comment')}></textarea>
                                                    <p>{error ? error?.comment?.[0] : ""}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="theme-btn submit__btn">{t('continue_now')}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HelpingArea;