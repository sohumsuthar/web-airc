'use client';
import Link from '@/components/Link'
import sponsorsData from '@/data/sponsorsData'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Player } from 'video-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import { createRoot } from 'react-dom/client';
import PlayerComponent from './PlayerComponent';


import { FaDiscord, FaGithub } from 'react-icons/fa'; // Import the Discord icon
import {TbArrowsJoin } from 'react-icons/tb'; // Import the Discord icon

export default function Home({ posts }) {
  useRef(null);
  const animateRef = useRef<HTMLElement>(null); // Explicitly specify the type

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (animateRef.current) {
        const topOffset = animateRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (topOffset < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const animateClass = isVisible ? 'animate-scroll' : 'animate-hidden';

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-4">
          <div className="space-y-1 pb-4 pt-3">
            <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-2xl md:leading-8">
              Let us help you add some projects to your resume.
            </h1>
            <p className="text-md leading-7 text-gray-500 dark:text-gray-400 pr-4 md:text-2sm">

              Join OSU's AI Robotics Club to gain hands-on robotics experience. Work on projects using the latest AI and robotics tech. Develop real-world skills in programming, machine learning, computer vision, and mechanical design. Experienced members provide mentoring. Guests discuss careers and emerging technologies. Boost your resume. Join our Discord below for more information on how to get involved!
            </p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-3  md:grid-cols-2 md:gap-12 sm:gap-12 sm:grid-cols-4 pb-8 pt-0">

            <div className="my-0 grid items-start gap-0 mb-3 p-0 w-fit">
              <div className="group relative flex items-center">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="https://discord.com/invite/FCA7j3rP8H">
                  <div className="relative items-center divide-gray-600 rounded-lg bg-indigo-600 px-4 py-3  leading-none dark:bg-indigo-600">
                    <div className="flex items-center">
                      <FaDiscord className="text-white mr-2" />
                      <div className="max-w-max text-white transition duration-200 group-hover:text-white text-lg dark:group-hover:text-gray-100 py-0 pr-1">
                        Discord
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="my-0 grid items-start gap-0 mb-3 p-0 w-fit">
              <div className="group relative flex items-center">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-black to-black   opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="https://discord.com/invite/FCA7j3rP8H">
                  <div className="relative items-center divide-gray-600 rounded-lg bg-black px-4 py-3  leading-none dark:black">
                    <div className="flex items-center">
                      <FaGithub className="text-white mr-2" />
                      <div className="max-w-max text-white transition duration-200 group-hover:text-white text-lg dark:group-hover:text-gray-100 py-0 pr-1">
                        GitHub
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 pb-5 ">


          <iframe className = "rounded-3xl"width="100%" height="350px" src="https://www.youtube.com/embed/KcyQ0gMhYwg?si=D4NM-HIyN0KeFF2i&amp;controls=0&muted;" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>

        </div>
      </div >
      <div className="flex flex-col md:flex-row">
       {/* <div className={`w-full md:w-1/2 ${animateClass}`} ref={animateRef}>*/}
        <div className="w-full md:w-1/2 pb-5 ">
          <div className="space-y-1 pb-4 pt-3">
            <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-2xl md:leading-8">
              Why join us?
            </h1>
            <p className="text-md leading-7 text-gray-500 dark:text-gray-400 pr-4 md:text-2sm">
              {/*{siteMetadata.description}*/}

              Joining an AI and robotics club provides hands-on development experience and a collaborative community to learn about leading-edge technologies. Building projects and skills in programming, electronics, and system design can inspire future academic and career pursuits in these high-potential fields.
            </p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-3  md:grid-cols-2 md:gap-12 sm:gap-12 sm:grid-cols-4 pb-8 pt-0">

            <div className="my-0 grid items-start gap-0 mb-3 p-0 w-fit">
              <div className="group relative flex items-center">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-600 to-green-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="https://discord.com/invite/FCA7j3rP8H">
                  <div className="relative items-center divide-gray-600 rounded-lg bg-green-600 px-4 py-3  leading-none dark:bg-green-600">
                    <div className="flex items-center">
                      <TbArrowsJoin className="text-white mr-2" />
                      <div className="max-w-max text-white transition duration-200 group-hover:text-white text-lg dark:group-hover:text-gray-100 py-0 pr-1">
                        Join us!
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

       { /*<div className={`w-full md:w-1/2 pb-5 ${animateClass}`} ref={animateRef}> */}

       <div className="w-full md:w-1/2 pb-5 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            navigation={false}
            className="mySwiper rounded-3xl"
            loop={true}
          >
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80" alt="Image 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Image 4" />
            </SwiperSlide>
            {/* Add more slides with images as needed */}
          </Swiper>
        </div>
      </div>

      <div className={`container py-12`}>
      <h1 className={"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-8 pb-8 pt-12"} style={{ textAlign: 'center' }}>
  Check out our sponsors!
</h1>

        <div className={`-m-4 flex flex-wrap `} >

          {sponsorsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </>
  )
}
