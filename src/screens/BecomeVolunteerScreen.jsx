import React from 'react';
import { useTranslation } from 'react-i18next';

import "../assets/scss/BecomeVolunteer.scss"
import { Animation } from '../common/Animation';
import BecomeVolunteer from '../components/BecomeVolunteer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

const BecomeVolunteerScreen = () => {
    const { t } = useTranslation();
   
    return (
        <div>
            <Header />
            <PageHeader Animation={Animation} title={t("become_volunteer")} />
            <BecomeVolunteer Animation={Animation} />
            <Footer />
        </div>
    );
};

export default BecomeVolunteerScreen;
