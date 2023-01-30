import React from "react";
import Footer from "../components/Footer";
import Donate from "../components/Donate";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import "../assets/scss/Donate.scss";
import { Animation } from "../common/Animation";
import { useTranslation } from "react-i18next";

const DonateScreen = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Header />
            <PageHeader Animation={Animation} title={t("donate")} />
            <Donate Animation={Animation} />
            <Footer Animation={Animation} />
        </div>
    )
}
export default DonateScreen;