
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
    </Layout>
  );
};

export default Home;
