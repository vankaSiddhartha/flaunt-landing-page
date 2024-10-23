"use client"
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

// Loading Text Component
const LoadingText = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <ShoppingBag className="w-12 h-12 mb-4 text-blue-500 animate-bounce" />
      <div className="text-2xl font-medium text-gray-700 flex items-center">
        Please wait loading{dots}
        <span className="opacity-0">...</span>
      </div>
    </div>
  );
};

// Import the client component with no SSR
const HomeClient = dynamic(() => import('./components/homeClient'), {
  ssr: false,
  loading: LoadingText
});

// Server Component
export default function Page() {
  return <HomeClient />;
}