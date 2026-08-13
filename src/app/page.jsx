"use clint"
import React from 'react';
import Hero from './components/sections/Hero';
import LogoMarquee from './components/sections/LogoMarque/LogoMarquee';
import StackedCardHero from './components/sections/Stackedcardhero/Stackedcardhero';
import BankHero from './components/sections/Bankhero/Bankhero';

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <LogoMarquee/>
      <StackedCardHero/>
      <BankHero/>
    </div>
  );
};

export default page;