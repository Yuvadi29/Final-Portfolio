"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styles from './page.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const page = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: e => direction = e.direction * -1,
      },
      x: "-300px",
    })
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }

  return (
    <main className='relative flex h-[100vh] mb-[100vh] overflow-hidden'>
      <Image
        fill={true}
        src="/images/background.png"
        alt='bg-image'
        className='object-cover'
      />
      <div className="absolute top-[calc(100vh_-_350px)]">
        <div className="relative whitespace-nowrap">
          <div ref={slider} className={styles.slider}>
            <p
              ref={firstText}
              className='relative m-0 text-white text-[230px] font-medium pr-[50px]'>Content Creator -</p>
            <p
              ref={secondText}
              className='relative m-0 text-white text-[230px] font-medium pr-[50px]'>Content Creator -</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page