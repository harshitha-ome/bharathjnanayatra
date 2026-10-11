'use client';

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function AuthFormContainer() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="w-full max-w-md">
      {/* Mobile logo */}
      <div className="flex lg:hidden items-center gap-2.5 mb-8 justify-center">
        <AppLogo size={36} />
        <div>
          <span className="font-extrabold text-indigo-deep text-base block">Bharath JnanaYatra</span>
          <span className="text-muted-foreground text-xs">भारत ज्ञानयात्रा</span>
        </div>
      </div>

      {/* Sanskrit welcome */}
      <p className="text-center text-muted-foreground text-sm italic mb-2">
        स्वागतम् — Welcome, Explorer
      </p>

      {/* Tab switcher */}
      <div className="flex bg-muted rounded-2xl p-1 mb-8 border border-border">
        <button
          onClick={() => setTab('login')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 ${
            tab === 'login' ?'bg-card text-foreground shadow-warm border border-border' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setTab('signup')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 ${
            tab === 'signup' ?'bg-card text-foreground shadow-warm border border-border' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          Begin Journey
        </button>
      </div>

      {tab === 'login' ? <LoginForm onSwitchTab={() => setTab('signup')} /> : <SignupForm onSwitchTab={() => setTab('login')} />}

      {/* Back to home */}
      <p className="text-center mt-6 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-primary transition-colors font-semibold">← Back to home</Link>
      </p>
    </div>
  );
}