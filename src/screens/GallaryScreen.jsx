import React from "react";
import { useTranslation } from "react-i18next";
import { Animation } from "../common/Animation";
import Footer from "../components/Footer";
import Gallary from "../components/Gallary";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

const GallaryScreen = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <PageHeader Animation={Animation} title={t("gallary")} />
            <Gallary Animation={Animation} />
            <Footer Animation={Animation} />
        </div>
    )
}
export default GallaryScreen;