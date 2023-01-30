import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";
import PageHeader from "../components/PageHeader";

import "../assets/scss/Common.scss";
import "../assets/scss/Contact.scss";
import Contact from "../components/Contact";
import { Animation } from "../common/Animation";
import { useTranslation } from "react-i18next";

const ContactScreen = () => {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <PageHeader Animation={Animation} title={t("contact")} />
            <Contact Animation={Animation} />
            <Map Animation={Animation} />
            <Footer Animation={Animation} />
        </>
    )
}

export default ContactScreen;