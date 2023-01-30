import React, { useEffect } from "react";
import sectionImg from "../assets/Images/section-icon.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "../redux/actions/blogAction";

const BlogHome = ({ Animation }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const blogList = useSelector((state) => state.getBlog);
    const { loading, getBlog } = blogList;

    const getBlogList = async () => {
        await dispatch(getBlogData());
    }

    useEffect(() => {
        getBlogList()
        window.addEventListener("scroll", Animation);
    }, [])

    const firstBlog = getBlog?.results?.slice(0, 1);
    const allBlog = getBlog?.results?.slice(1, getBlog?.length);
console.log("getBlog",firstBlog)
    return (
        <section className="blog-area reveal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="section-heading blog-heading">
                            <div className="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                            <h2 className="section__title">{t('recent_blog')}</h2>
                            <p className="section__meta">{t('news_and_update')}</p>
                        </div>
                    </div>
                </div>
                <div className="row recent-post-wrap">
                    <div className="col-lg-6">
                        {firstBlog?.map((blog) => {
                            return <div className="recent-item">
                                <div className="recent__img"><span className="meta__date-date">{blog?.date}</span><img
                                    src={blog?.image} alt="service-image" /></div>
                                <div className="news__content">
                                    <h3 className="news__content-title"><a href="single-news">{blog?.heading}</a></h3>
                                    {/* <ul className="news__content-list">
                                        <li className="news__content-active__dot"><a href="#">mike hardson</a></li>
                                        <li><a href="#">3 {t("comments")}</a></li>
                                    </ul> */}
                                    <p className="news__content-text">{blog?.description}</p><a href="single-news"
                                        className="theme-btn">{t("read_more")}</a>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="col-lg-6">
                        <div className="third-recent-box">
                            <ul className="third-recent-item">
                                {allBlog?.map((blog) => {
                                    return  <li>
                                    <div className="recent__img"><a href="single-news"><img src={blog?.image}
                                        alt="" /></a></div>
                                    <div className="recent__content"><span>{blog?.date}</span>
                                        <h4><a href="404">{blog?.heading}</a></h4>
                                    </div>
                                </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogHome;