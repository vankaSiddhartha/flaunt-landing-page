import RetroGrid from '@/components/ui/retro-grid';
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent sm:text-4xl">
This page is a surprise for you! We'll update it soon.
      </span>
      <RetroGrid className="my-6 w-full sm:w-auto" />
      <div className="w-full m-3">
        <Link 
          href="https://forms.gle/rvEv1WD88nFAVKcG8"
          className="block rounded-md bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Give Feedback
        </Link>
      </div>
    </div>
  );
};

export default Page;

