import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero() {
  useGSAP(() => {
    gsap.to('#intro', {
      opacity: 1,
      y: 50,
      delay: 1,
    });
  }, []);
  return (
    <div
      id="#main"
      className="h-screen flex flex-col justify-center items-center p-10 text-white gap-10"
    >
      <div className="text-7xl">
        Hello, I'm{' '}
        <span>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Nikita Thomas',
              1500,
              'Web Developer',
              1500,
              'Software Developer',
              1500,
              // "UI/UX Developer",
              // 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-pink-800"
          />
        </span>
      </div>
      <div className="md:w-8/12 mx-auto md:text-center text-lg leading-9 ">
        <p id="intro" className="opacity-0 font-extralight">
          A recent Masters graduate in Computer Science specializing in Network
          and Information Security from the University of Wollongong. Passionate
          about technology and problem-solving, I have hands-on experience in
          web development and cybersecurity.
        </p>
      </div>
    </div>
  );
}

export default Hero;
