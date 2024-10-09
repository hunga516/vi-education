import React from 'react';
import Header from '../layouts/components/LandingPage/Header';
import HeroSection from '../layouts/components/LandingPage/HeroSection';
import CourseSection from '../layouts/components/LandingPage/CourseSection';
import PracticeSection from '../layouts/components/LandingPage/PracticeSection';
import LazySection from '../layouts/components/LandingPage/LazySection';

const LandingPage = () => {
    return (
        <main className="flex overflow-hidden flex-col items-center px-20 pt-5 pb-96 bg-black max-md:px-5 max-md:pb-24">
            <div className="flex flex-col items-start ml-4 w-full max-w-[1155px] max-md:max-w-full">
                <Header />
                <HeroSection />
                <LazySection />
                <CourseSection />
                <PracticeSection />
            </div>
        </main>
    );
};

export default LandingPage;