import React from 'react';
import Topbar from './Topbar';

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function AppLayout({ children, className = '' }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background lotus-pattern-bg">
      <Topbar />
      <main className={`flex-1 w-full max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-10 2xl:px-16 py-8 ${className}`}>
        {children}
      </main>
    </div>
  );
}