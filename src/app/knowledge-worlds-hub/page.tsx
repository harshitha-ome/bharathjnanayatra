import React from 'react';
import AppLayout from '@/components/AppLayout';
import LearnerStatsBar from './components/LearnerStatsBar';
import WorldsGrid from './components/WorldsGrid';
import FeaturedWorldSpotlight from './components/FeaturedWorldSpotlight';
import WorldsHubHeader from './components/WorldsHubHeader';
import ProgressOverview from './components/ProgressOverview';

export default function KnowledgeWorldsHubPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <WorldsHubHeader />
        <LearnerStatsBar />
        <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 2xl:col-span-2 flex flex-col gap-8">
            <WorldsGrid />
          </div>
          <div className="xl:col-span-1 2xl:col-span-1 flex flex-col gap-6">
            <FeaturedWorldSpotlight />
            <ProgressOverview />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}