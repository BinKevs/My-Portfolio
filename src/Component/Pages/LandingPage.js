import React from "react";
import Avatar8 from "../../static/Avatar-8.png";
import resume from "../../static/RESUME_BUENASEDA_KEVIN_BRYAN.pdf";
import Typewriter from "typewriter-effect";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div className="bg-black md:h-screen h-full relative">
          <div className="md:h-screen h-full flex md:flex-row flex-col my-auto">
            <div className="text-white  md:w-1/2 w-full my-auto">
              <div className="text-center p-20 ">
                {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Hello,")

                      .deleteAll()
                      // .typeString(
                      // 	"Welcomes You"
                      // )
                      .typeString("<span class='text-red-500'>I am</span>")

                      .deleteAll()
                      .typeString("<span class='text-red-500'>Kevin</span>")
                      .deleteAll()
                      .typeString(
                        "<div class='cursor-pointer hover:text-red-500'>About</div><div><a href='/projects' class='cursor-pointer hover:text-red-500'>Projects</a></div><div><a href='/contact' class='cursor-pointer hover:text-red-500'>Contact</a></div>"
                      )

                      .start();
                  }}
                /> */}
                <div className="text-2xl md:text-6xl">
                  I'm{" "}
                  <span className="text-red-500">Kevin Bryan Buenaseda</span> A
                  Frontend Website Developer based in Philippines.
                </div>
                <div className="text-lg md:text-2xl text-gray-400">
                  {" "}
                  I’m probably the most passionate frontend developer you will
                  ever get to work with. If you have a great project that needs
                  some amazing skills, I’m your guy.
                </div>
                <div className="mt-8">
                  <a
                    href={resume}
                    target="_blank"
                    class="uppercase text-center text-2xl py-2 px-4 border-2 border-red-600 text-white rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300"
                  >
                    VIEW RESUME
                  </a>
                </div>
              </div>
            </div>
            <div className="m-auto flex flex-col space-y-4">
              <img src={Avatar8} alt="" />
              <a
                href="https://mail.google.com/mail/u/1/?fs=1&to=kevinbryanbuenaseda@gmail.com&tf=cm"
                target="_blank"
                class="uppercase text-center py-2 px-4 text-2xl mx-20 border-2 border-red-600 text-white rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
