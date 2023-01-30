import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swiper from 'react-id-swiper';
import { useDispatch, useSelector } from 'react-redux';
import { getSlider } from '../redux/actions/volunteerActions';
 import 'swiper/swiper.min.css'

const SliderOne = ({ Animation }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const sliderList = useSelector((state) => state?.getSlider)
    const { loading, sliderData, error } = sliderList;
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    const params = {
        initialSlide: 0,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        spaceBetween: 30,
        loop: false,
        autoplay: true
    };

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    useEffect(() => {
        console.log("-----------", sliderData)
        dispatch(getSlider());
        window.addEventListener("load", Animation);
    }, [])

    return (
        <section className="slider-area reveal">
            <div className="homepage-slide1">

                <Swiper getSwiper={setSwiper} {...params} ref={swiperRef} >
                    {loading ? "loading ............" :
                        sliderData.results && sliderData.results?.map((slider, i) => {
                            return <div className={`single-slide-item slide-bg${i + 1}`}>
                                <div className="slide-item-table">
                                    <div className="slide-item-tablecell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="slider-heading">
                                                        <p className="slider__meta">{slider?.name}</p>
                                                        <h2 className="slider__title">{slider.desc}</h2>
                                                        <a href="#" className="theme-btn">{t('discover_more')}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                </Swiper>
                <div className="owl-dots">
                    <div onClick={goNext} className="owl-dot"><span></span></div>
                    <div onClick={goPrev} className="owl-dot"><span></span></div>
                </div>
            </div>
        </section>
    );
};

export default SliderOne;
