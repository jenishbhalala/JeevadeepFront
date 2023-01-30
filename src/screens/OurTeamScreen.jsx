import React from "react";
import { useTranslation } from "react-i18next";
import { Animation } from "../common/Animation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurTeam from "../components/OurTeam";
import PageHeader from "../components/PageHeader";

const OurTeamScreen = () => {
    const {t} = useTranslation();
    return (
        <div>
            <Header />
            <PageHeader Animation={Animation} title={t("our_team")} />
            <OurTeam Animation={Animation} />
            <Footer Animation={Animation} />
        </div>
    )
}
export default OurTeamScreen;