import Link from 'next/link'
import { FC } from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Navbar: FC = () => {
  return (
    <div className="navbar z-10 fixed p-4">
      <div className="flex-1">
        <a href="mailto:abd.rauf.lamada@gmail.com">
          <MdEmail className="text-text-color text-5xl sx:max-sm:text-3xl" />
        </a>
      </div>

      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-5 "
        >
          <li className="mb-3">
            <a
              href="https://www.linkedin.com/in/muhammad-abdul-rauf-44b5a1171/"
              target="_blank"
              className="mb-1.5"
            >
              <FaLinkedin className="text-5xl text-text-color sx:max-sm:text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Abdulrauf10"
              target="_blank"
              className="mb-1.5"
            >
              <FaGithubSquare className="text-5xl text-text-color sx:max-sm:text-3xl" />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-none hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-abdul-rauf-44b5a1171/"
              target="_blank"
              className="mb-1.5"
            >
              <FaLinkedin className="text-5xl text-text-color sx:max-sm:text-3xl" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Abdulrauf10"
              target="_blank"
              className="mb-1.5"
            >
              <FaGithubSquare className="text-5xl text-text-color sx:max-sm:text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
