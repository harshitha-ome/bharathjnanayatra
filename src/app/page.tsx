import React from 'react';
import AppLayout from '@/components/AppLayout';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import WorldsPreview from './components/WorldsPreview';
import HowItWorks from './components/HowItWorks';
import ProblemSolution from './components/ProblemSolution';
import FounderStory from './components/FounderStory';
import ForSchools from './components/ForSchools';
import WaitlistSignup from './components/WaitlistSignup';
import HomeFooter from './components/HomeFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background lotus-pattern-bg">
      {/* Topbar is inside AppLayout but we need full-width hero, so use custom layout here */}
      <AppLayout className="!px-0 !py-0 !max-w-none">
        <div className="w-full">
          <HeroSection />
          <StatsBar />
          <ProblemSolution />
          <WorldsPreview />
          <HowItWorks />
          <ForSchools />
          <FounderStory />
          <WaitlistSignup />
          <HomeFooter />
        </div>
      </AppLayout>
    </div>
  );
}