import React from 'react';
import '../../App.css';
// import HeroSection from '../homepage/HeroSection';
import HeroSection from '../homepage/HeroSection';
// import '../../components/homepage/HeroSection.css';
import SearchForm from '../homepage/SearchForm';
import BestJobs from '../homepage/BestJobs';
import ArenaSec from '../homepage/ArenaSec';
import CompetitionSec from '../homepage/CompetitionSec';
import DownloadApp from '../homepage/DownloadApp';
import Testimonials from '../homepage/Testimonials';
import PopularSec from '../homepage/PopularSec';
import Partners from '../homepage/Partners';
import NewsLetter from '../homepage/NewsLetter';

function Homepage() {
    return (
        <>
            <HeroSection />
            <SearchForm />
            <BestJobs />
            <ArenaSec />
            <CompetitionSec />
            <DownloadApp />
            <Testimonials />
            <PopularSec />
            <Partners />
            <NewsLetter />
        </>
    )
}

export default Homepage;
