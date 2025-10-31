
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} HUMANOSVERSE™. All Rights Reserved. This document provides a high-level overview of our proposed strategy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
