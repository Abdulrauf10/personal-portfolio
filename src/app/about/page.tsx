'use client'

import {
  BiLogoReact,
  BiLogoPostgresql,
  BiLogoTypescript,
  BiLogoJavascript
} from 'react-icons/bi'
import {
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiWordpress
} from 'react-icons/si'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="bg-primary h-screen w-screen flex items-center justify-center sx:max-sm:h-fit sx:max-sm:pt-20">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <div className="flex justify-center items-center sx:max-sm:flex-col">
          <div className="w-1/4 bg-secondary p-2 rounded-lg sx:max-sm:w-3/4 sx:max-sm:text-center">
            <p>
              I am a full-stack web developer, currently work with javascript
              and typescript. I thrive on mastering diverse array of
              technologies to bring projects to life. From front-end frameworks
              like React.Js and Next.Js to backend technologies such as Node.js.
            </p>

            <p className="mt-7">Technologies:</p>
            <div className="flex mt-3 justify-between text-2xl">
              <BiLogoJavascript />
              <BiLogoTypescript />
              <BiLogoReact />
              <SiNextdotjs />
              <SiNodedotjs />
              <SiWordpress />
              <SiTailwindcss />
              <SiChakraui />
              <SiBootstrap />
              <BiLogoPostgresql />
            </div>
          </div>

          <div className="w-1/4 ml-5 sx:max-sm:w-2/4 sx:max-sm:mt-12">
            <p className="mb-2 sx:max-sm:text-center">Career and Education:</p>
            <ul className="steps steps-vertical">
              <li className="step step-primary pb-10">
                <p className="text-left">
                  March, 2021 - October, 2021
                  <br />
                  Full-stack Web Development
                  <br />
                  Binar Academy
                </p>
              </li>

              <li className="step step-primary">
                <p className="text-left">
                  April, 2022 - November, 2022
                  <br />
                  Full-stack Web Development
                  <br />
                  Talentfit Indonesia
                </p>
              </li>

              <li className="step step-primary">
                <p className="text-left">
                  December, 2022 - Present
                  <br />
                  Frontend Engineer
                  <br />
                  Atech Solution
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
