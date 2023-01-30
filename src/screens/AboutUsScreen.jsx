import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";
import OurVolunteer from "../components/OurVolunteer";
import HelpUs from "../components/HelpUs";
import PageHeader from "../components/PageHeader";

import sectionImg from "../assets/Images/section-icon.png";
import about1 from "../assets/Images/about-img.jpg";
import about2 from "../assets/Images/about-img2.jpg";
import faqImg from "../assets/Images/faq-img.jpg";

import "../assets/scss/About.scss";
import "../assets/scss/Common.scss";
import { Animation } from "../common/Animation";
import { useTranslation } from "react-i18next";

const AboutUsScreen = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])
    return (
        <>
            <Header />
            <PageHeader Animation={Animation} title={t("about")} />
            <section className="about-area reveal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-large-img"><img src={about1} alt="" /></div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-semi-img"><img src={about2} alt="" /></div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-heading">
                                <div className="section-heading">
                                    <div className="section-icon"><img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 className="section__title">{t("about_title")}</h2>
                                    <p className="section__meta">{t("about_support")}</p>
                                    <p className="section__desc">{t("about_jeevandeep")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OurVolunteer Animation={Animation} />
            {/* <section className="faq-area reveal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                                <h2 className="section__title">Have any Question?</h2>
                                <p className="section__meta">frequently asked questions</p>
                            </div>
                            <div className="faq-img-box"><img src={faqImg} alt="" /></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container">
                                <div className="ac">
                                    <h2 className="ac-q" tabindex="0">Make a difference in the life of a child</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-q" tabindex="0">Let’s do the right thing now</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-q" tabindex="0">Join your hand with us for a better life</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <HelpUs Animation={Animation} />
            <Map Animation={Animation} />
            <Footer Animation={Animation} />
        </>
    )
}

export default AboutUsScreen;