import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className="bg-primary p-24 h-fit w-screen flex flex-col items-center justify-center sx:max-sm:h-fit sx:max-sm:pt-20">
      <div className="card w-96 glass shadow-xl mb-4 sx:max-sm:w-72">
        <figure>
          <img src="/images/flexibble.png" alt="flexibble" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Flexibble</h2>
          <p>
            This is website to upload image and url portfolio for web and mobile
            developer
            <br />
            Technologies: Next.Js, Graphql, Grafbase
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline cursor-pointer">
              <a href="https://port-flexibble.vercel.app/" target="_blank">
                Go to website
              </a>
            </div>
            <div className="badge badge-outline cursor-pointer">
              <a
                href="https://github.com/Abdulrauf10/flexibble"
                target="_blank"
              >
                Source code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-96 glass shadow-xl mb-4 sx:max-sm:w-72">
        <figure>
          <img src="/images/react.jpg" alt="Job-portal" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Job-portal</h2>
          <p>
            This mobile app is application for helping user find and apply job.
            To run the app, you need to install Expo Go for Android or Camera
            App for Ios
            <br /> Technologies: React Native, Expo
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline cursor-pointer">
              <a
                href="https://github.com/Abdulrauf10/job-portal-reactnative"
                target="_blank"
              >
                Source code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-96 glass shadow-xl mb-4 sx:max-sm:w-72">
        <figure>
          <img src="/images/dentist.jpg" alt="dentist" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dentist</h2>
          <p>Dentist website build with wordpress</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline cursor-pointer">
              <a href="https://dentist.web-build.site/" target="_blank">
                Go to website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-96 glass shadow-xl sx:max-sm:w-72">
        <figure>
          <img src="/images/travel.png" alt="travel" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Travel Agency</h2>
          <p>Travel agency website build with wordpress</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline cursor-pointer">
              <a href="https://travel.web-build.site/" target="_blank">
                Go to website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
