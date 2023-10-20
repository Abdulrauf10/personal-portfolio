import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className="bg-primary p-24 h-fit w-screen justify-center sx:max-sm:h-fit sx:max-sm:pt-20">
      <h3 className="text-text-color text-center mb-10 text-3xl sx:max-sm:text-2xl">
        Current Projects
      </h3>
      <div className="flex justify-center items-center sx:max-sm:flex-col">
        <div className="card lg:card-side bg-base-100 shadow-xl sx:max-sm:mb-8 sx:max-sm:w-60 mr-10 sx:max-sm:mr-0 ">
          <figure>
            <img src="/images/flexibbleApp.png" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title sx:max-sm:text-center">
              Web App: Flexibble
            </h2>
            <p className="sx:max-sm:text-center">
              This is a website where users can upload their personal
              portfolios, including image, a links to live website, and GitHub
              URL
              <br />
              Technologies: Next.Js, GraphQL, Grafbase, Tailwind
            </p>
            <div className="card-actions justify-end flex sx:max-sm:justify-center">
              <button className="btn btn-primary">
                <a href="https://port-flexibble.vercel.app/" target="_blank">
                  Go to website
                </a>
              </button>
              <button className="btn btn-primary">
                <a
                  href="https://github.com/Abdulrauf10/flexibble"
                  target="_blank"
                >
                  Source code
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl sx:max-sm:w-60">
          <figure>
            <img src="/images/portal.png" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title sx:max-sm:text-center">
              Mobile App: Job Portal
            </h2>
            <p className="sx:max-sm:text-center">
              Application to find jobs. To run the code in your own mobile, you
              have to install expo go for android or camera app for ios
              <br />
              Technologies: React Native, Expo, Rapid API
            </p>
            <div className="card-actions justify-end flex sx:max-sm:justify-center">
              <button className="btn btn-primary">
                <a
                  href="https://github.com/Abdulrauf10/job-portal-reactnative"
                  target="_blank"
                >
                  Source code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
