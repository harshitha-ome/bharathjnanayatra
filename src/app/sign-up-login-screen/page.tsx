import React from 'react';
import AuthIllustration from './components/AuthIllustration';
import AuthFormContainer from './components/AuthFormContainer';

export default function SignUpLoginPage() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left — illustrated world */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[42%] 2xl:w-[40%] flex-shrink-0">
        <AuthIllustration />
      </div>

      {/* Right — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-background">
        <AuthFormContainer />
      </div>
    </div>
  );
}