'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className="bg-primary h-screen w-screen flex items-center justify-center sx:max-sm:h-fit sx:max-sm:pt-20">
        <div className="bg-secondary w-3/4 h-3/4 flex items-center justify-center rounded sx:max-sm:flex-col sx:max-sm:justify-start">
          <Image
            src="/images/avatar.svg"
            alt="avatar"
            width={200}
            height={200}
            className="flex sx:max-sm:w-40"
          />
          <div className="sx:max-sm:text-center">
            <div className="-my-40 sx:max-sm:my-0">
              <h3 className="text-6xl text-text-color sx:max-sm:text-2xl">
                Hi, there!
              </h3>
              <p className="text-text-color">
                Welcome to my website. I am Rauf, a full-stack web developer
              </p>
              <button
                className="bg-text-color p-2 rounded-md text-primary mt-5"
                type="button"
              >
                <Link href={'/about'}>Learn More</Link>
              </button>
            </div>
          </div>

          <h2 className="text-text-color text-lg absolute right-0 bottom-0 mb-72 mr-64 sx:max-sm:flex sx:max-sm:mr-0 sx:max-sm:mt-10 sx:max-sm:relative sx:max-sm:mb-3">
            Current project:
          </h2>
          <div className="absolute bottom-0 right-0 mb-12 mr-12 flex sx:max-sm:relative sx:max-sm:items-center sx:max-sm:flex-col sx:max-sm:mr-0 ">
            <div className="card card-compact w-40 h-56 glass shadow-xl mr-5 sx:max-sm:mr-0 sx:max-sm:mb-5">
              <figure>
                <img src="/images/flexibble.png" alt="flexibble" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Flexibble</h2>
                <p>Web app for portfolio showcase</p>
                <div className="card-actions justify-end">
                  <button className="p-2 bg-primary text-text-color rounded-md">
                    <Link href={'/portfolio'}>Learn more</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-40 h-56 glass shadow-xl ">
              <figure>
                <img src="/images/react.jpg" alt="flexibble" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Job-portal</h2>
                <p>Mobile app for finding job</p>
                <div className="card-actions justify-end">
                  <button className="p-2 bg-primary text-text-color rounded-md">
                    <Link href={'/portfolio'}>Learn more</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
