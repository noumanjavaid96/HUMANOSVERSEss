
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 tracking-wider">
              HUMANOSVERSE<span className="text-cyan-600">™</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;