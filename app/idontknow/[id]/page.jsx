"use client"
import RetroGrid from '@/components/ui/retro-grid';
import React from 'react';
import { useRouter } from 'next/navigation';

const SurprisePage = ({ params }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button clicked, navigating to feedback form...');
    router.push('https://forms.gle/rvEv1WD88nFAVKcG8');
  };

  const { id } = params;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent sm:text-4xl">
        This page is a surprise for you! We'll update it soon.
      </span>
      <RetroGrid className="my-6 w-full sm:w-auto" />
      <button
        onClick={handleClick}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] text-white rounded-full hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#8c1eff] font-semibold"
      >
        feedback
      </button>
    </div>
  );
};

export default SurprisePage;