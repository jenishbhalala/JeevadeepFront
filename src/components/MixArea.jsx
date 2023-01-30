import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import sectionImg from "../assets/Images/section-icon.png";

const MixArea = ({ Animation }) => {
    const { t } = useTranslation();
    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])
    return (
        <section className="mixer-area reveal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading mixer-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" />
                            </div>
                            <h2 className="section__title text__white">{t('fundraising_for_people')}</h2><a href="donate" className="theme-btn">{t('start_donation')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MixArea;