import React from "react";
import "./Work.css";
function formatDifference(startDate, endDate) {
  // Calculate years, months, and days
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();

  let years = endYear - startYear;
  let months = endMonth - startMonth;
  let days = endDay - startDay;

  // Adjust for negative months or days
  if (days < 0) {
    months--;
    const daysInStartMonth = new Date(startYear, startMonth + 1, 0).getDate();
    days += daysInStartMonth;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Construct the formatted string
  const formattedDifference = [];
  if (years > 0) {
    formattedDifference.push(`${years} year${years > 1 ? "s" : ""}`);
  }
  if (months > 0) {
    formattedDifference.push(`${months} month${months > 1 ? "s" : ""}`);
  }
  if (days > 0) {
    formattedDifference.push(`${days} day${days > 1 ? "s" : ""}`);
  }

  return formattedDifference.join(" ");
}
const Work = () => {
  const startDate = new Date("2021-04-05");
  const endDate = new Date();
  const workingAsFreelancer = formatDifference(startDate, endDate);

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="fw-regular f-48">Want to hire me?</h1>
        <p className="f-20 m-20">I strive to reply within an hour.</p>
        <button className="mail-btn">
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.25 3.4375C7.23129 3.4375 5.40581 3.94204 4.08082 5.17237C2.74327 6.4144 2.0625 8.25881 2.0625 10.625V19.375C2.0625 21.7412 2.74327 23.5856 4.08082 24.8276C5.40581 26.058 7.23129 26.5625 9.25 26.5625H21.75C23.7687 26.5625 25.5942 26.058 26.9191 24.8276C28.2567 23.5856 28.9375 21.7412 28.9375 19.375V10.625C28.9375 8.25881 28.2567 6.4144 26.9191 5.17237C25.5942 3.94204 23.7687 3.4375 21.75 3.4375H9.25ZM24.5356 10.4529C24.9452 10.1363 25.0207 9.54752 24.7041 9.13782C24.3876 8.72811 23.7989 8.65262 23.3891 8.96921L16.4552 14.327C15.8926 14.7619 15.1072 14.7619 14.5445 14.327L7.61075 8.96921C7.20104 8.65262 6.61227 8.72811 6.29569 9.13782C5.9791 9.54752 6.05459 10.1363 6.4643 10.4529L13.3981 15.8107C14.6361 16.7672 16.3637 16.7672 17.6017 15.8107L24.5356 10.4529Z"
              fill="#1DFF9E"
            />
          </svg>
          <span className="f-26 text-white">EMAIL</span>
        </button>
        <div className="d-flex flex-center">
          <div className="line"></div>
          <span className="m-h-8">or</span>
          <div className="line"></div>
        </div>
        <div className="social ph-64 my-10">
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4375 22.8125V10.3125H10.9375V9.53125C10.9375 8.23875 11.9887 7.1875 13.2812 7.1875H15.625V2.5H13.2812C11.4172 2.50232 9.63008 3.24385 8.31196 4.56196C6.99385 5.88008 6.25232 7.66716 6.25 9.53125V10.3125H3.125V15H6.25V22.8125H3.125V27.5H14.0625V22.8125H10.9375V15H18.7937V22.8125H15.625V27.5H26.5625V22.8125H23.4375Z"
                fill="white"
                fillOpacity="0.87"
              />
              <path
                d="M21.0937 7.1875C22.3882 7.1875 23.4375 6.13817 23.4375 4.84375C23.4375 3.54933 22.3882 2.5 21.0937 2.5C19.7993 2.5 18.75 3.54933 18.75 4.84375C18.75 6.13817 19.7993 7.1875 21.0937 7.1875Z"
                fill="white"
                fillOpacity="0.87"
              />
            </svg>
          </button>
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_64_52)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.82641 29.3097V9.99926H0.408691V29.3096H6.82641V29.3097ZM3.61822 7.36371C5.85551 7.36371 7.24916 5.87965 7.24916 4.02662C7.20686 2.1324 5.85551 0.690231 3.66018 0.690231C1.46449 0.69029 0.0292969 2.13246 0.0292969 4.02668C0.0292969 5.8797 1.42219 7.36377 3.57598 7.36377L3.61822 7.36371ZM10.3784 29.3097C10.3784 29.3097 10.4626 11.8111 10.3784 9.99931H16.7971V12.7997H16.7545C17.5985 11.482 19.119 9.54586 22.581 9.54586C26.8048 9.54586 29.9706 12.3058 29.9706 18.2372V29.3098H23.553V18.9792C23.553 16.3835 22.6244 14.6122 20.3012 14.6122C18.5285 14.6122 17.4721 15.8063 17.0081 16.9606C16.8384 17.3715 16.7971 17.9486 16.7971 18.5257V29.3097H10.3784Z"
                  fill="white"
                  fillOpacity="0.87"
                />
              </g>
              <defs>
                <clipPath id="clip0_64_52">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_64_56)">
                <path
                  d="M23.2031 16.4456C21.8259 16.4456 20.5322 15.8644 19.3603 14.9128L19.6434 13.5703L19.6528 13.5169C19.9116 12.0909 20.7122 9.69375 23.2022 9.69375C25.0678 9.69375 26.5809 11.2078 26.5809 13.0725C26.5809 14.9325 25.0669 16.4466 23.2022 16.4466L23.2031 16.4456ZM23.2031 6.27469C20.0297 6.27469 17.5631 8.33531 16.5628 11.7291C15.0394 9.43875 13.8769 6.68531 13.2037 4.36594H9.78562V13.2572C9.78094 15.015 8.35969 16.4362 6.60187 16.4409C4.84406 16.4362 3.42281 15.0103 3.41812 13.2572V4.36594H0V13.2572C0 16.8994 2.96344 19.8834 6.60187 19.8834C10.2441 19.8834 13.2037 16.9003 13.2037 13.2572V11.7675C13.8675 13.1494 14.6831 14.5556 15.6741 15.7959L13.5797 25.635H17.0756L18.5944 18.4959C19.9228 19.3453 21.4509 19.8825 23.2041 19.8825C26.9541 19.8825 30.0009 16.8159 30.0009 13.0706C30.0009 9.32062 26.9541 6.27375 23.2041 6.27375L23.2031 6.27469Z"
                  fill="white"
                  fillOpacity="0.87"
                />
              </g>
              <defs>
                <clipPath id="clip0_64_56">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.2175 15.7209L13.0875 19.8778L17.355 15.6956L18.6788 7.90219L13.4784 7.635L9.2175 15.7209ZM8.74032 15.2381L12.8372 7.5975L0.941254 6.95156L8.74032 15.2381ZM5.77313 4.54594L6.77719 6.6075L12.3234 6.95156L5.77313 4.54594ZM16.6613 4.545L13.86 7.06875L18.5719 7.24406L16.6613 4.545ZM7.38844 25.455L12.63 20.3306L9.47625 16.9453L7.38844 25.455ZM17.4553 4.545L19.3697 7.23L29.0578 4.545H17.4553Z"
                fill="white"
                fillOpacity="0.87"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <h1 className="fw-regular f-48 text-center">My experience so far</h1>
        <br />
        <h2 className="fw-regular inline-block f-32">CrecenTech Systems.</h2>
        <span className="grey-white f-20"> (7 Months)</span>
        <br />
        <br />
        <div className="company-description">
          <h3 className="nakia-blue f-24 fw-regular">Laravel Developer</h3>
          <span className="f-16">JULY 2022 - Jan 2023</span>
          <p className="f-16">
            Develops and maintains user tracking system.
            <br />
            Created web applications for internal and external use by the
            company.
          </p>
          <br />
        </div>
        <h2 className="fw-regular inline-block f-32">Al Bladi Electronics.</h2>
        <span className="grey-white f-20"> (7 Months)</span>
        <br />
        <br />
        <div className="company-description">
          <h3 className="nakia-blue f-24 fw-regular">full stack Developer</h3>
          <span className="f-16">({formatDifference(startDate,new Date("2021-12-05"))})</span>
          <p className="f-16">
            Develops and maintains solar inverter tracking system.
            <br />
            Created web applications and mobile application for external use by the
            user.
          </p>
          <br />
        </div>
        <div className="company-description">
          <h3 className="f-24">Full-Stack Developer</h3>
        </div>
        <br />
        <h3 className="inline-block f-32">Freelancer</h3>
        <span className="grey-white"> ({workingAsFreelancer})</span>
      </div>
    </div>
  );
};

export default Work;
