'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <>
      <div className="bg-primary h-screen w-screen flex items-center justify-center sx:max-sm:h-fit sx:max-sm:pt-20">
        <motion.div
          className="box bg-primary h-screen w-screen flex items-center justify-center sx:max-sm:h-fit sx:max-sm:pt-20"
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
          <div className="bg-secondary w-3/4 h-3/4 flex items-center justify-center rounded sx:max-sm:flex-col sx:max-sm:justify-start">
            <Image
              src="/images/avatar.svg"
              alt="avatar"
              width={200}
              height={200}
              className="flex sx:max-sm:w-40"
            />

            <div className="sx:max-sm:text-center flex flex-wrap w-6/12">
              <div className="-my-40 sx:max-sm:my-0  ">
                <h3 className="text-3xl text-text-color sx:max-sm:text-2xl">
                  Hi there, Rauf's here...
                </h3>
                <br />
                <br />
                <p className="text-text-color">
                  Welcome to my website. Discover how I leverage web development
                  skills to address your business challenges effectively.
                  Elevate your brand, improve user experiences, and drive growth
                  with my expertise
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <About />
      <Portfolio />
    </>
  )
}
