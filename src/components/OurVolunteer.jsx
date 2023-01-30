import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listVolunteers } from "../redux/actions/volunteerActions";
import sectionImg from "../assets/Images/section-icon.png";
import team from "../assets/Images/team.jpg";
import team2 from "../assets/Images/team2.jpg";
import team3 from "../assets/Images/team3.jpg";
import team4 from "../assets/Images/team4.jpg";
import { useTranslation } from "react-i18next";

const OurVolunteer = ({ Animation }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const volunteerList = useSelector((state) => state.volunteer);
    const { loading, error, volunteers } = volunteerList;
    useEffect(() => {
        dispatch(listVolunteers());
        window.addEventListener("scroll", Animation);
    }, []);
    useEffect(() => {
    },[volunteers])
    return (
        <section className="team-area text-center reveal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 className="section__title">{t('our_volunteer')}</h2>
                            <p className="section__meta">{t('meet_profesion')}</p>
                        </div>
                    </div>
                </div>
                <div className="row team-content-wrap">
                    {loading ? "loading........." :
                        volunteers?.results?.map((data) => {
                            return <div className="col-lg-3 col-sm-6">
                                <div className="team-item team-item1">
                                    <div className="team__img"><img src={data.image} alt="team image" />
                                        <div className="team__img-links">
                                            <ul>
                                                <li><a href="https://twitter.com/jeevandeepfoun1?s=20&t=ZmUI9AqsXAfrEv3DA8PdfQ"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="https://www.facebook.com/Jeevandeep2022/"><i className="fab fa-facebook"></i></a></li>
                                                <li><a href="https://www.instagram.com/jeevandeepfoundationsurat/?igshid=YmMyMTA2M2Y="><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team__title">
                                        <h3 className="team__title-title"><a href="#">{data.name}</a></h3><span
                                            className="team__title-meta">{data.occupation}</span>
                                    </div>
                                </div>
                            </div>
                        })}
                </div>
            </div>
        </section>
    )
}

export default OurVolunteer;