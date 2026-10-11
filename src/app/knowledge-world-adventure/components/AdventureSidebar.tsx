import React from 'react';
import LearnerWorldStats from './LearnerWorldStats';
import EarnedBadgesPanel from './EarnedBadgesPanel';
import WorldLorePanel from './WorldLorePanel';
import AdventureActivityFeed from './AdventureActivityFeed';

export default function AdventureSidebar() {
  return (
    <div className="flex flex-col gap-5">
      <LearnerWorldStats />
      <EarnedBadgesPanel />
      <WorldLorePanel />
      <AdventureActivityFeed />
    </div>
  );
}