import "98.css";
import "./index.css";

import winbg from "./assets/windowsbg.jpg";
import me from "./assets/sssss.gif";

function Index() {
  // change

  return (

      <div id="root" style={{ backgroundImage: `url(${winbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>


          <head>
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
          <div className="window w-2/5 translate-x-10 translate-y-5">
              <div className="title-bar">
                  <div className="title-bar-text">Intro</div>
                  <div className="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                  </div>
              </div>
              <div className="window-body font-bold text-3xl">
                  <p>Hey! I'm Sam Pich</p>
                  <p className="text-2xl">CompSci/Digital Humanities student at University of Ottawa</p>
                  <p className="text-xl">Skateboarder, videomaker, bookworm</p>

              </div>


          </div>

          <div className="window w-1/5 translate-x-[55vh] translate-y-[-4vh]">
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



  );
}

export default Index;
