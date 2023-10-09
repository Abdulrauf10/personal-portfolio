import { FC } from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Sidebar: FC = () => {
  return (
    <div className=" p-4 flex items-center justify-center flex-col fixed inset-y-0 sx:max-sm:top-0  sx:max-sm:flex">
      <a
        href="https://github.com/Abdulrauf10"
        target="_blank"
        className="mb-1.5"
      >
        <FaGithubSquare className="text-5xl text-text-color sx:max-sm:text-3xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-abdul-rauf-44b5a1171/"
        target="_blank"
        className="mb-1.5"
      >
        <FaLinkedin className="text-5xl text-text-color sx:max-sm:text-3xl" />
      </a>
      <a href="mailto:abd.rauf.lamada@gmail.com">
        <MdEmail className="text-text-color text-5xl sx:max-sm:text-3xl" />
      </a>
    </div>
  )
}

export default Sidebar
