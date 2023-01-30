import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PageHeader = (props) => {
    const { t } = useTranslation();
    useEffect(() => {
        window.addEventListener("load", props.Animation);
    }, [])
    return (
        <section className="breadcrumb-area reveal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-content">
                            <h2 className="breadcrumb__title">{props.title}</h2>
                            <ul className="breadcrumb__list">
                                <li className="active__list-item"><a href="/">{t("home")}</a></li>
                                <li>{props.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PageHeader;