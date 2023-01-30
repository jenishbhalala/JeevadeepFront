/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import Header from "../components/Header";
import Map from "../components/Map";
import OurVolunteer from "../components/OurVolunteer";
import HelpUs from "../components/HelpUs";
import HomeCarousel from "../components/HomeCarousel";
import Footer from "../components/Footer";
import EntryArea from "../components/EntryArea";
import MixArea from "../components/MixArea";
import MixAreaTwo from "../components/MixAreaTwo";
import HelpingArea from "../components/HelpingArea";
import BlogHome from "../components/BlogHome";
import '../assets/scss/Animation.scss'
import { Animation } from "../common/Animation";

const HomeScreen = () => {

    return (
        <>
            <Header />
            <HomeCarousel Animation={Animation} />
            <EntryArea Animation={Animation} />
            <HelpUs Animation={Animation} />
            <div>
                {/* <MixArea Animation={Animation} /> */}
                {/* <MixAreaTwo Animation={Animation} /> */}
            </div>
            <HelpingArea Animation={Animation} />
            <OurVolunteer Animation={Animation} />
            <BlogHome Animation={Animation} />
            <Map Animation={Animation} />
            {/* <Footer Animation={Animation} /> */}
        </>
    );
};
export default HomeScreen;
