import React from 'react';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
    </div>
  </>
);

export default IndexPage;
