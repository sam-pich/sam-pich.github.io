import "98.css";
import "./index.css";
import React, {useState} from "react";
import winbg from "./assets/windowsbg.jpg";
import me from "./assets/sssss.gif";
import mail from "./assets/puter-mail.gif";
import samresume from "./assets/Sam_Pich_Resume.pdf";
import eye from "./assets/Eyec.gif";
import puter from "./assets/puter-mail.gif";
import mail36 from "./assets/mail36.gif";
import birdmail from "./assets/palomail.gif";


function Index() {
    const [selectedTab, setSelectedTab] = useState('links');

    const handleTabClick = (event) => {
        const selectedTabElement = event.currentTarget;
        const tabId = selectedTabElement.getAttribute('data-tab');

        // Remove 'aria-selected' from all tabs
        const tabs = selectedTabElement.parentElement.querySelectorAll('[role="tab"]');
        tabs.forEach((tab) => {
            tab.setAttribute('aria-selected', 'false');
        });

        // Set 'aria-selected' to 'true' for the clicked tab
        selectedTabElement.setAttribute('aria-selected', 'true');

        // Update the selectedTab state variable
        setSelectedTab(tabId);
    };

  return (

      <div id="root" style={{
          backgroundImage: `url(${winbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
      }}>


          <head>
              <link rel="icon" href="public/favicon.ico"/>
              <meta charset="UTF-8"/>
              <link rel="stylesheet" href={"https://unpkg.com/98.css"}/>
              <title>SAM PICH</title>

          </head>
          <>
              <div className="title-bar  w-full">
                  <div className="title-bar-text">Windowception</div>
                  <div className={"title-bar-controls"}>
                      <button aria-label="Help"></button>
                  </div>

              </div>

              <div className="absolute window-body w-auto left-[105vh] top-[4.5vh]">
                  <menu role="tablist">
                      <li role="tab" aria-selected={selectedTab === 'links'} onClick={handleTabClick} data-tab="links">
                          <a href="#tabs" className={"font-bold"}>Links</a>
                      </li>
                      <li role="tab" aria-selected={selectedTab === 'resume'} onClick={handleTabClick}
                          data-tab="resume">
                          <a href="#tabs" className={"font-bold"}>Resume</a>
                      </li>
                      <li role="tab" aria-selected={selectedTab === 'video'} onClick={handleTabClick} data-tab="video">
                          <a href="#tabs" className={"font-bold"}>Video Showcase</a>
                      </li>
                      <li role="tab" aria-selected={selectedTab === 'about'} onClick={handleTabClick} data-tab="about">
                          <a href="#tabs" className={"font-bold"}>About this site</a>
                      </li>
                  </menu>
                  <div className="window w-auto h-auto" role="tabpanel">
                      {selectedTab === 'links' && (
                          <div key={selectedTab} id="list" className="window-body flex flex-col items-center">
                              <p className="text-3xl font-bold mb-4">List of all my links:</p>
                              <button className="w-[45vb] h-[8vb] text-2xl">
                                  <a
                                      className="inline-block relative z-1 w-full h-full flex items-center justify-center font-bold"
                                      href="https://www.linkedin.com/in/sampich/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      <img className="absolute w-[5.5vb] left-[0vb]" src={mail36} alt="mail"/>
                                      LinkedIn
                                  </a>
                              </button>

                              <button className="w-[45vb] h-[8vb] text-2xl">
                                  <a
                                      className="inline-block relative z-1 w-full h-full flex items-center justify-center font-bold"
                                      href="https://github.com/sam-pich"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      <img className="absolute w-[5.5vb] left-[0vb]" src={eye} alt="mail"/>
                                      GitHub
                                  </a>
                              </button>

                              <button className="w-[45vb] h-[8vb] text-2xl">
                                  <a
                                      className="inline-block relative z-1 w-full h-full flex items-center justify-center font-bold"
                                      href="mailto:sam.pich@outlook.com"
                                      rel="noopener noreferrer"
                                  >
                                      <img className="absolute w-[3.8vb] left-[0vb] translate-y-[-0.5vb]" src={birdmail}
                                           alt="mail"/>
                                      sam.pich@outlook.com
                                  </a>
                              </button>
                          </div>
                      )}
                      {selectedTab === 'resume' && (
                          <div key={selectedTab} id="resume" className="relative window-body">
                              <iframe
                                  key={selectedTab}
                                  className="w-[70vh] h-[80vh]"
                                  src={samresume}
                                  title="Resume"
                              />
                              <a
                                  href={samresume}
                                  download="Sam_Pich_Resume.pdf"
                                  className="absolute bottom-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                              >
                                  <svg
                                      className="fill-current w-4 h-4 mr-2"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                  >
                                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                  </svg>
                                  <span>Download</span>
                              </a>
                          </div>
                      )}
                      {selectedTab === 'video' && (
                          <div key={selectedTab} id="video" className="window-body w-[55vh]">
                              <div style={{ position: 'relative',paddingTop: '150%' }}>
                                  <iframe
                                      src="https://fast.wistia.net/embed/iframe/c4a58up24n"
                                      allow="autoplay; fullscreen"
                                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                  ></iframe>
                              </div>
                              <script src="https://fast.wistia.com/embed/medias/c4a58up24n.jsonp" async></script>
                              <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                          </div>
                      )}
                      {selectedTab === 'about' && (
                          <div key={selectedTab} id="about" className="window-body w-[60vh]">
                              <h1 className={"text-6xl"}>What's up with these choices?</h1>
                              <h2 className={"text-4xl underline"}>Suppose you're busy. </h2>
                              <p className={"text-2xl "}>This is your k-th student portfolio you're checking.</p>
                              <p className={"text-2xl font-bold"}>Modern is boring</p>
                              <p className={"text-2xl "}>It's overdone. It's flat. It's as if Dostoyevsky just
                                  published The Brothers Karamazov and now everything's written in his prose. The worst
                                  part?</p>
                              <p className={"text-2xl font-bold italic"}>The stuff reads good.</p>
                              <p className={"text-2xl "}>Good. Gets the job done.<br/>
                                   However, straying away from minimalist trends
                                  <br/><i>I want more impact</i></p>
                              <p className={"text-2xl font-bold"}>Different isn't always better.</p>
                              <p className={"text-2xl "}>
                                  Definitely isn't. But you've stuck around long enough to accomplish the sites' goals.
                                  You know my name, face, education, skills, and <b>contact</b>.
                                  <br/></p>
                              <p className={"text-2xl font-bold"}>Reach out :) </p>


                          </div>
                      )}
                  </div>
              </div>
          </>
          <div className="z-0 relative window w-full sm:w-2/5 max-w-49 mx-20 mt-16">
              <div className="title-bar">
                  <div className="title-bar-text">Intro</div>
                  <div className="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                  </div>
              </div>
              <div className="window-body font-bold text-xl sm:text-3xl">
                  <h1 className={"text-6xl"}>Hey! I'm Sam Pich</h1>
                  <h2 className="text-lg sm:text-4xl">CompSci/Digital Humanities student at <br/>University of Ottawa</h2>
                      <p className="text-base sm:text-xl italic">Skateboard, music, arts enthusiast</p>
              </div>

              <div className="z-3 absolute window w-3/4 max-w-1/2 right-0 sm:right-65 mt-4 sm:mt-[-1vb] translate-x-[-16vb]">
                  <div className="title-bar">
                      <div className="title-bar-text"></div>
                      <div className="title-bar-controls">
                          <button aria-label="Minimize"></button>
                          <button aria-label="Maximize"></button>
                          <button aria-label="Close"></button>
                      </div>
                  </div>
                  <div className="window-body ">
                      <p className="text-base sm:text-xl font-bold">Aspiring UX designer/product designer, I'll make
                          anything and
                          everything given the tools</p>
                      <h2 className="text-base sm:text-2xl font-bold underline">Skills:</h2>
                      <p className="text-base sm:text-l"><b>Programming Languages:</b> Java, Python, JavaScript, GoLang
                      </p>
                      <p className="text-base sm:text-l"><b>Web Development:</b> HTML/CSS, ReactJS, NodeJS, TailwindCSS,
                          TypeScript, ViteJS
                      </p>
                      <p className="text-base sm:text-l"><b>Software Utilities:</b> Git, SQL, Firebase, MongoDB,
                          PostgreSQL
                      </p>
                      <p className="text-base sm:text-l"><b>Object-Oriented Programming (OOP), Data Structures and
                          Algorithms</b>
                      </p>
                      <p className="text-base sm:text-l"><b>Languages:</b> English, French, Mandarin
                      </p>
                      <p className="text-base sm:text-l"><b>Arts:</b> Photoshop, DaVinci Resolve, Adobe Premiere Pro, Adobe Lightroom
                      </p>


                  </div>
              </div>

              <div className="absolute z-4 window w-40 sm:w-60 right-0 sm:right-15 -mt-8 sm:-mt-13.5 translate-x-[40%]">
                  <div className="title-bar">
                      <div className="title-bar-text">me.gif</div>
                      <div className="title-bar-controls">
                          <button aria-label="Minimize"></button>
                          <button aria-label="Maximize"></button>
                          <button aria-label="Close"></button>
                      </div>
                  </div>
                  <div>
                      <img src={me} alt="me" className="w-full"/>
                  </div>
              </div>
          </div>


      </div>


  )
      ;
}

export default Index;
