import Link from 'next/link'
import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className="navbar z-10 fixed p-4">
      <div className="flex-1">
        <Link
          href={'/'}
          className="bg-secondary text-text-color normal-case text-xl p-2 rounded-lg"
        >
          Home
        </Link>
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
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/portfolio'}>Portfolio</Link>
          </li>
        </ul>
      </div>

      <div className="flex-none hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/portfolio'}>Portfolio</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
