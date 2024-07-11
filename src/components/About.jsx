import React, { useState, useEffect, useTransition } from 'react';
import TabButton from './TabButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Javascript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>
          Masters of computer science (Network and Information Security){' '}
          <li className="font-thin text-sm">University Of Wollongong</li>
          <li className="font-thin text-sm">grade: 7.58</li>
        </li>
        <li>
          Bachelors of Science (Information Technology)
          <li className="font-thin text-sm">University Of Mumbai</li>
          <li className="font-thin text-sm">grade: 7.52</li>
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul>
        <li>certificate1</li>
        <li>certificate2</li>
      </ul>
    ),
  },
];
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#aboutme',
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: true,
        },
      })
      .fromTo('#aboutme', { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white h-screen flex items-center p-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} alt="" /> */}
        <div
          id="aboutme"
          className="opacity-0 mt-4 md:mt-0 text-left flex flex-col"
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-pink-700">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a highly motivated and adaptable individual, eager to learn and
            grow in dynamic environments. My strong technical skills are
            complemented by my ability to work collaboratively in teams and
            communicate effectively. I thrive on solving complex problems and
            continuously seek opportunities to improve and innovate.
          </p>
          <div className="flex flex-row mt-8 gap-3">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>

            {/* <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          certifications
        </TabButton> */}
          </div>
          <div className="mt-8 px-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <div className="hidden md:block m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#AA336A"
            className="size-96"
          >
            <path
              fillRule="evenodd"
              d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default About;
