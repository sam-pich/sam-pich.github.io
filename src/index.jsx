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
          <div className="z-0 fixed window w-[70vh] translate-x-[13vh] translate-y-[8vh]">
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
          </div>

          <div className="fixed window w-1/4 h-[21vh] translate-x-[20vh] translate-y-[27.5vh]">
              <div className="title-bar">
                  <div className="title-bar-text"></div>
                  <div className="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                  </div>
              </div>
              <div className="window-body font-bold text-3xl relative w-[45vh]">
                  <p className="text-xl">Aspiring UX designer/product designer, I'll make anything and everything given
                      the tools
                      <br/><br/>Or at least <i>try</i> to</p>

              </div>
          </div>

          <div className="fixed z-2 window w-1/5 translate-x-[60.5vh] translate-y-[21vh]">
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

          <div className="fixed window w-[50vh] h-[25vh] translate-x-[7.8vh] translate-y-[55vh]">
              <div className="title-bar">
                  <div className="title-bar-text">Email</div>
                  <div className="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                  </div>
              </div>
              <div className="window-body font-bold text-3xl spacing">
                  <p className="text-xl">Say hi/Meet for coffee/Collab on ideas</p>
                    <button className="z-0 w-3/4 h-[7vh] translate-x-[5.5vh] translate-y-[3.5vh]" href="mailto:sam.pich@outlook.com">Email me!</button>
              </div>
              <div>
                    <img className="z-1 w-[10vh] absolute translate-x-[8.5vh] translate-y-[-2.5vh]" src={mail} alt="mail"/>
              </div>
          </div>

      </div>


  );
}

export default Index;
