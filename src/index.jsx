import "98.css";
import "./index.css";

import winbg from "./assets/windowsbg.jpg";
import me from "./assets/sssss.gif";
import mail from "./assets/puter-mail.gif";

function Index() {
  // change

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


          </>
          <div className="z-0 relative window w-2/5 translate-x-[13vh] translate-y-[8vh]">
              <div className="title-bar">
                  <div className="title-bar-text">Intro</div>
                  <div className="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                  </div>
              </div>
              <div className="window-body font-bold text-3xl">
                  <p>Hey! I'm Sam Pich ------------------↓</p>
                  <p className="text-2xl">CompSci/Digital Humanities student at University of Ottawa</p>
                  <p className="text-xl">Skateboarder, videomaker, bookworm</p>

              </div>

              <div className="z-3 absolute window w-[66%] right-[17vb] translate-y-[0vb]">
                  <div className="title-bar">
                      <div className="title-bar-text"></div>
                      <div className="title-bar-controls">
                          <button aria-label="Minimize"></button>
                          <button aria-label="Maximize"></button>
                          <button aria-label="Close"></button>
                      </div>
                  </div>
                  <div className="window-body font-bold">
                      <p className="text-xl">Aspiring UX designer/product designer, I'll make anything and everything
                          given
                          the tools
                          <br/><br/>Or at least <i>try</i> to</p>
                  </div>
              </div>

              <div className="absolute z-4 window w-[30vb] translate-x-[50vb] translate-y-[-7vb]">
                  <div className="title-bar">
                      <div className="title-bar-text">me.gif</div>
                      <div className="title-bar-controls">
                          <button aria-label="Minimize"></button>
                          <button aria-label="Maximize"></button>
                          <button aria-label="Close"></button>
                      </div>
                  </div>
                  <div>
                      <img src={me} alt="me"/>
                  </div>
              </div>

          </div>


          <div className="relative window w-[30%] h-[25vh] translate-x-[15vh] translate-y-[40vh]">
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
                      <div>

                      </div>
                  </div>
              </div>

          </div>

      </div>


  );
}

export default Index;
