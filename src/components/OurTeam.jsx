import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listVolunteers } from "../redux/actions/volunteerActions";
import sectionImg from "../assets/Images/section-icon.png";
import team from "../assets/Images/team.jpg";
import { useTranslation } from "react-i18next";

const OurTeam = () => {
    const {t} = useTranslation();
    const volunteerList = useSelector((state) => state.volunteer);
    const { loading, error, volunteers } = volunteerList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listVolunteers({}));
    }, [dispatch]);
    useEffect(() => {
    }, [volunteers])
    return(
        <div>
            <section className="team-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 className="section__title">{t("our_volunteer")}</h2>
                            <p className="section__meta">{t("meet_profesion")}</p>
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
                                                <li><a href="https://twitter.com/jeevandeepfoun1?s=20&t=ZmUI9AqsXAfrEv3DA8PdfQ"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="https://www.facebook.com/Jeevandeep2022/"><i className="fa fa-facebook"></i></a></li>
                                                {/* <li><a href="#"><i className="fa fa-pinterest"></i></a></li> */}
                                                <li><a href="https://www.facebook.com/Jeevandeep2022/"><i className="fa fa-instagram"></i></a></li>
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
        </div>
    )
}
export default OurTeam;