import React, { useEffect, useState } from "react";
import sectionImg from "../assets/Images/section-icon.png";
import entryVideo from "../assets/Images/entry-video-img.jpg";
import { useTranslation } from "react-i18next";
import ModalVideo from 'react-modal-video';

const EntryArea = ({ Animation }) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleModal = () => {
        setOpen(!open);
    }
    useEffect(() => {
        window.addEventListener("scroll", Animation);
    }, [])
    return (
        <section className="entry-area reveal">
            <div className="container">
                <div className="row entry-static-wrap">
                    <div className="col-lg-3">
                        <div className="entry-static-box entry-static-box1">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h4 className="entry__title">{t('hunger')}</h4>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="entry-video-img"> {!open?  <img src={entryVideo} alt="entry-video-img" />: 
                                    <ModalVideo channel='youtube' isOpen={open} videoId='PbUxi2Lx8x8' onClose={() => handleModal()} />}
                                        
                                        <div onClick={() => handleModal()} className="mfp-iframe video-play-btn"
                                            title="Play Video"><i className="fa fa-play"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="entry-video-text">
                                        <h4 className="entry__title">{t('we_are_support')}
                                        </h4>
                                        <p className="entry__text">{t('watch_us')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EntryArea;