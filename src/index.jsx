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

              <div className="absolute window-body w-auto left-[105vh] top-[6.5vh]">
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
                                  className={"w-[70vh] h-[80vh]"}
                                  src={samresume}
                                  title="Resume"
                              />
                          </div>
                      )}
                      {selectedTab === 'video' && (
                          <div key={selectedTab} id="video" className="window-body">
                              <p>My computer tab content</p>
                          </div>
                      )}
                      {selectedTab === 'about' && (
                          <div key={selectedTab} id="about" className="window-body">
                              <p>Control panel tab content</p>
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
                  <p>Hey! I'm Sam Pich</p>
                  <p className="text-lg sm:text-2xl">CompSci/Digital Humanities student at <br/>University of Ottawa</p>
                  <p className="text-base sm:text-xl">Skateboarder, videomaker, bookworm</p>
              </div>

              <div className="z-3 absolute window w-full max-w-md right-0 sm:right-64 mt-4 sm:mt-0 translate-x-1/4">
                  <div className="title-bar">
                      <div className="title-bar-text"></div>
                      <div className="title-bar-controls">
                          <button aria-label="Minimize"></button>
                          <button aria-label="Maximize"></button>
                          <button aria-label="Close"></button>
                      </div>
                  </div>
                  <div className="window-body font-bold">
                      <p className="text-base sm:text-xl">Aspiring UX designer/product designer, I'll make anything and
                          everything given the tools<br/><br/>Or at least <i>try</i> to</p>
                  </div>
              </div>

              <div className="absolute z-4 window w-40 sm:w-60 right-0 sm:right-15 -mt-8 sm:-mt-13.5 translate-x-1/3">
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


          <div className="relative window w-[30%] h-[25vh] translate-x-[15vh] translate-y-[35vh]">
              <div className="title-bar">
                  <div className="title-bar-text">Email</div>
                  <div className="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                  </div>
              </div>
              <div className="window-body font-bold text-3xl spacing">
                  <p className="text-xl flex flex-col items-center ">Say hi/Meet for coffee/Collab on ideas</p>
                  <div className="relative flex flex-col items-center ">
                      <button className="absolute w-[40vb] h-[8vb] translate-y-[40%] text-2xl">
                          <a className="inline-block relative z-1 py-[3vb] px-[14vb] m-[-2em]"
                             href="mailto:sam.pich@outlook.com">
                              <img className="z-1  absolute w-[10vb] translate-x-[-11.5vb]" src={mail}
                                   alt="mail"/>
                              Email me!</a>
                      </button>

                  </div>
              </div>
          </div>


      </div>


  )
      ;
}

export default Index;
