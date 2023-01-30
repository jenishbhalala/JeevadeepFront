import React from 'react';
import img15 from "../assets/Images/img15.jpg"
import author_avatar from "../assets/Images/author-avatar.jpg";
import { useTranslation } from 'react-i18next';

const Donate = () => {    
    const { t } = useTranslation();
    return (
        <section className="donate-area2">
        <div className="container">
            <div className="row donate-content-wrap">
                <div className="col-lg-8">
                    <div className="donate-item">
                        <h3 className="donate__title">{t("enter_donate")}</h3>
                        <div className="form-shared">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="yellow-form">
                                            <input type="number" className="form-control" />
                                                <span className="dollar-sign">₹</span>
                                                <span className="number-symble">.00</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="donate-item">
                        <h3 className="donate__title">{t("personal_info")}</h3>
                        <div className="form-shared">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder={t("first_name")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder={t("last_name")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control"
                                                   placeholder={t("email_add")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder={t("phone_no")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder={t("address")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <div className="select-group">
                                                <select className="select-option">
                                                    <option value="Country">{t("country")}</option>
                                                    <option value="usa">Usa</option>
                                                    <option value="Uk">Uk</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="India">India</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea className="textarea" name="message"
                                                  placeholder={t("leave_comment")}></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="donate-item">
                        <h3 className="donate__title">{t("payment_info")}</h3>
                        <div className="form-shared">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder={t("card_no")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="MM/YY" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   placeholder={t("card_code")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                   placeholder={t("billing_add")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder={t("city")} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                            <div className="select-group">
                                                <select className="select-option">
                                                    <option value="Country">{t("country")}</option>
                                                    <option value="usa">Usa</option>
                                                    <option value="Uk">Uk</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="India">India</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="theme-btn submit__btn">{t("donate_now")}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4">
                    <div className="sidebar-shared">
                        <div className="side-widget blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={img15} alt="" />
                                </div>
                                <div className="blog-inner-content">
                                    <h3 className="blog__title"><a href="#">They Want to Study</a>
                                    </h3>
                                    <ul className="blog__list">
                                        <li><i class="fa fa-bullseye"></i> Goal: <span>$30,000</span></li>
                                        <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                    </ul>
                                    <p className="blog__desc">Raised by 25 donors</p>
                                </div>
                            </div>
                        </div>
                        <div className="side-widget">
                            <div className="author-box">
                                <div className="author__avatar">
                                    <img src={author_avatar} alt="" />
                                </div>
                                <div className="author__detail">
                                    <span className="author__meta">created april 11, 2018</span>
                                    <h4 className="author__title">Organizer: <a href="#">Jessica Smith</a></h4>
                                    <ul className="author__list">
                                        <li><i className="fa fa-tag"></i> Education</li>
                                        <li><i className="fa fa-map-marker"></i> Wrightwood, Canada</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    )
}
export default Donate;