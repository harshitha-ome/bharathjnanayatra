import React from 'react';
import AppLayout from '@/components/AppLayout';
import AdventureWorldHeader from './components/AdventureWorldHeader';
import QuestMapSection from './components/QuestMapSection';
import ActiveQuestPanel from './components/ActiveQuestPanel';
import AdventureSidebar from './components/AdventureSidebar';

export default function KnowledgeWorldAdventurePage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-6">
        <AdventureWorldHeader />
        <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="xl:col-span-2 2xl:col-span-2 flex flex-col gap-6">
            <ActiveQuestPanel />
            <QuestMapSection />
          </div>
          {/* Sidebar */}
          <div className="xl:col-span-1 2xl:col-span-1">
            <AdventureSidebar />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}