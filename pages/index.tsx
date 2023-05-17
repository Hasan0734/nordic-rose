import Articles from '@/components/Articles/Articles';
import HeroSection from '@/components/HeroSection/HeroSection';
import Layout from '@/components/Layout';
import React from 'react';

export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <Articles/>
    </Layout>
  )
}
