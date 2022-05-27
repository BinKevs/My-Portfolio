import React from "react";
import Avatar8 from "../../static/Avatar-8.png";
import Typewriter from "typewriter-effect";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div className="bg-black h-screen flex md:flex-row flex-col">
          <div className="text-white text-4xl md:text-9xl md:w-1/2 w-full my-auto">
            <div className="flex justify-center">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Hello,")

                    .pauseFor(1000)
                    .deleteAll()
                    // .typeString(
                    // 	"Welcomes You"
                    // )
                    .typeString("<span class='text-red-500'>I am</span>")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("<span class='text-red-500'>Kevin</span>")
                    .deleteAll()
                    .typeString(
                      "<div class='cursor-pointer hover:text-red-500'>About</div><div><a href='/projects' class='cursor-pointer hover:text-red-500'>Projects</a></div><div><a href='/contact' class='cursor-pointer hover:text-red-500'>Contact</a></div>"
                    )

                    .start();
                }}
              />
            </div>
          </div>
          <div className="m-auto">
            <img src={Avatar8} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
