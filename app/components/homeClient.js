"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './nav/nav';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import { ChevronRight } from "lucide-react";
import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import SparklesText from '@/components/ui/sparkles-text';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppleCardsCarouselDemo } from './features/featuresComp';
import WaitlistForm from './waitlist/waitlist';
import { WobbleCardDemo } from './cardFeatures/cardFeatures';
import { Notification } from './notification/notification';

const Home = () => {
  const [startTime] = useState(new Date());
  const [showForm, setShowForm] = useState(false);

  const handleWaitlistClick = () => {
    setShowForm(true);
  
  };

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden'>
      <ToastContainer />
      <div className="fixed inset-0 z-[-2] bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      </div>
      <Navbar />
      <div className='container mx-auto px-4'>
        <div className='mt-10'>
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span className={cn(
              `inline animate-gradient bg-gradient-to-r from-black via-gray-500 to-black bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}>
              Introducing Flaunt
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
        <div className='mt-6'>
          <SparklesText
            className="font-display text-center text-3xl font-bold text-black dark:text-white md:text-6xl md:leading-[5rem]"
            text="Future of Fashion Shopping!"
          />
        </div>
        <div className='mt-4 text-center'>
          <h1 className="font-semibold text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Explore Top Clothes from Every Brand! Let Our AI Algorithm Help You Choose Your Dress, and Share Your Favorites with Friends
          </h1>
        </div>
        <div className="my-12 flex justify-center items-center space-x-4 md:space-x-8">
          <div className="w-16 h-16 md:w-28 md:h-28 flex items-center justify-center">
            <img src="https://logolook.net/wp-content/uploads/2023/01/Myntra-Emblem-2048x1152.png" alt="Brand 1" />
          </div>
          <div className="w-16 h-16 md:w-28 md:h-28 flex items-center justify-center">
            <img src="https://pluspng.com/img-png/zara-logo-png-zara-logo-png-and-vector-logo-img-4096x4096.png" alt="Brand 2" />
          </div>
          <div className="w-16 h-16 md:w-28 md:h-28 flex items-center justify-center">
            <img src="https://beeimg.com/images/a07628137044.png" alt="Brand 3" />
          </div>
          <div className="w-16 h-16 md:w-28 md:h-28 flex items-center justify-center">
            <img src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" alt="Brand 4" />
          </div>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          {!showForm && (
            <>
              <button
                onClick={handleWaitlistClick}
                className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                  <span>
                    Get on the Waitlist!
                  </span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
              <h1 className='font-semibold text-black text-sm'> Be First in Line! Pre-Register Now </h1>
            </>
          )}

          {showForm && <WaitlistForm />}
        </div>

        <div className='py-12'>
          <div className="relative">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/xA3tgFUigmw?si=bQlPDFPzMgFx8IQ1"
              thumbnailSrc="https://res.cloudinary.com/dilblkyox/image/upload/v1729664851/tumbnail-flaunt_tsssty.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
        <AppleCardsCarouselDemo />
        <section id="photos">
          <WobbleCardDemo />
        </section>
      </div>
      <section className="py-10 bg-transparent sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
              <span className="text-3xl font-semibold tracking-wider text-gray-800"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                flaunt.
              </span>
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Hey! If you can contribute to our team, please reach out. We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-transparent py-4 text-center shadow-lg">
        <div className="container mx-auto px-4">
          <p className="text-sm mt-1 text-black">
            © {new Date().getFullYear()} All rights reserved to flaunt
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;