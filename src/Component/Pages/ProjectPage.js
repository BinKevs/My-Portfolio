import royal_pangolin from "../../static/royal_pangolin.JPG";
import royal_pangolin_mobile from "../../static/royal_pangolin_mobile.JPG";
import dragon_soul from "../../static/dragon_soul.JPG";
import dragon_soul_mobile from "../../static/dragon_soul_mobile.JPG";
import meta_hoops from "../../static/metahoops.JPG";
import meta_hoops_mobile from "../../static/metahoops_mobile.JPG";
import abc_motor_shop from "../../static/abc_motor_shop.JPG";
import abc_motor_shop_mobile from "../../static/abc_motor_shop_mobile.JPG";
import covid_tracker from "../../static/covid_tracker.JPG";
import covid_tracker_mobile from "../../static/covid_tracker_mobile.JPG";
import quiz from "../../static/quiz.JPG";
import quiz_mobile from "../../static/quiz_mobile.JPG";
import weather from "../../static/weather.JPG";
import weather_mobile from "../../static/weather_mobile.JPG";

import { isMobile } from "react-device-detect";
const ProjectPage = () => {
  return (
    <div>
      <div className="bg-black flex flex-col md:flex-row md:px-20">
        <div className="md:p-20 p-8 w-full text-white  space-y-10">
          <div className=" text-6xl font-bold">
            Work that I’ve done for the past years
          </div>
          <div className=" text-gray-400 text-2xl font-semibold">
            Here are a few lines from people who I have worked with over the
            past 8+ years in my design career.
          </div>
        </div>
        <div className="md:pt-20 pt-10 w-full space-y-20 px-5">
          <div className="w-full">
            <div className="h-full overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="h-full w-full object-cover object-center md:scale-110 scale-105"
                  src={isMobile ? dragon_soul_mobile : dragon_soul}
                  alt="blog"
                />
                <div className="md:flex hidden space-x-10 absolute bottom-5 left-10 text-white">
                  <i class="fab fa-html5 fa-3x "></i>
                  <i class="fab fa-css3-alt fa-3x "></i>
                  <i class="fab fa-js fa-3x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:flex hidden space-x-10 absolute bottom-5 right-10 text-white">
                  <i class="fal fa-desktop fa-3x"></i>
                  <i class="fal fa-tablet fa-3x"></i>
                  <i class="fal fa-mobile fa-3x"></i>
                </div>
              </div>
              <div className=" md:p-12 p-4 border-[1px]  rounded-2xl space-y-10">
                <div className="flex justify-between md:mt-6 mt-10">
                  <h1 className="md:text-5xl text-3xl font-bold text-white">
                    "Dragon Souls"
                  </h1>
                </div>
                <div className="md:hidden flex justify-between mx-2 text-white">
                  <i class="fab fa-html5 fa-2x "></i>
                  <i class="fab fa-css3-alt fa-2x "></i>
                  <i class="fab fa-js fa-2x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:hidden flex justify-between mx-8 text-white">
                  <i class="fal fa-desktop fa-2x"></i>
                  <i class="fal fa-tablet fa-2x"></i>
                  <i class="fal fa-mobile fa-2x"></i>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg md:text-2xl">
                  Commissioned project which is a website application created
                  with ReactJs with TailwindCSS that showcase Dragon Souls NFT
                  arts which are collection of 666 Unique Genesis NFT Dragons
                  that live on Solana Blockchain.
                </p>
                <div className="flex items-center flex-wrap space-x-5">
                  <a
                    href="https://dragonsoulsnft.com/"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Website
                  </a>

                  <a
                    href="https://github.com/BinKevs/dragon_souls"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="h-full w-full object-cover object-center md:scale-110 scale-105"
                  src={isMobile ? abc_motor_shop_mobile : abc_motor_shop}
                  alt="blog"
                />
                <div className="md:flex hidden space-x-10 absolute bottom-5 left-10 text-white">
                  <i class="fab fa-html5 fa-3x "></i>
                  <i class="fab fa-css3-alt fa-3x "></i>
                  <i class="fab fa-js fa-3x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:flex hidden space-x-10 absolute bottom-5 right-10 text-white">
                  <i class="fal fa-desktop fa-3x"></i>
                  <i class="fal fa-tablet fa-3x"></i>
                  <i class="fal fa-mobile fa-3x"></i>
                </div>
              </div>
              <div className=" md:p-12 p-4 border-[1px]  rounded-2xl space-y-10">
                <div className="flex justify-between md:mt-6 mt-10">
                  <h1 className="md:text-5xl text-3xl font-bold text-white">
                    "ABC Motor Parts Store"
                  </h1>
                </div>
                <div className="md:hidden flex justify-between mx-2 text-white">
                  <i class="fab fa-html5 fa-2x "></i>
                  <i class="fab fa-css3-alt fa-2x "></i>
                  <i class="fab fa-js fa-2x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:hidden flex justify-between mx-8 text-white">
                  <i class="fal fa-desktop fa-2x"></i>
                  <i class="fal fa-tablet fa-2x"></i>
                  <i class="fal fa-mobile fa-2x"></i>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg md:text-2xl">
                  This is the product of our thesis made with Python, Django,
                  REST, HTML, CSS, JS, ReactJs, TailwindCSS entitled Online
                  Sales and Inventory for ABC Motor Parts The system designed
                  and constructed a Web Based Sales and Inventory to increase
                  efficiency and improve services provided to the customers
                  through better application of technology.
                </p>
                <div className="flex items-center flex-wrap space-x-5">
                  <a
                    href="http://abc-motor-parts.store/"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Website
                  </a>
                  <a
                    href="https://github.com/BinKevs/TisisRepo"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="h-full w-full object-cover object-center md:scale-110 scale-105"
                  src={isMobile ? royal_pangolin_mobile : royal_pangolin}
                  alt="blog"
                />
                <div className="md:flex hidden space-x-10 absolute bottom-5 left-10 text-white">
                  <i class="fab fa-html5 fa-3x "></i>
                  <i class="fab fa-css3-alt fa-3x "></i>
                  <i class="fab fa-js fa-3x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:flex hidden space-x-10 absolute bottom-5 right-10 text-white">
                  <i class="fal fa-desktop fa-3x"></i>
                  <i class="fal fa-tablet fa-3x"></i>
                  <i class="fal fa-mobile fa-3x"></i>
                </div>
              </div>
              <div className=" md:p-12 p-4 border-[1px]  rounded-2xl space-y-10">
                <div className="flex justify-between md:mt-6 mt-10">
                  <h1 className="md:text-5xl text-3xl font-bold text-white">
                    "Royal Pangolins"
                  </h1>
                </div>
                <div className="md:hidden flex justify-between mx-2 text-white">
                  <i class="fab fa-html5 fa-2x "></i>
                  <i class="fab fa-css3-alt fa-2x "></i>
                  <i class="fab fa-js fa-2x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:hidden flex justify-between mx-8 text-white">
                  <i class="fal fa-desktop fa-2x"></i>
                  <i class="fal fa-tablet fa-2x"></i>
                  <i class="fal fa-mobile fa-2x"></i>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg md:text-2xl">
                  Commissioned project which is a website application that
                  showcase Royal Pangolin's NFT arts created with ReactJs with
                  TailwindCSS and also have a feature that et the users mint NFT
                  more specifically 1,111 unique Pangolins that will be living
                  in the Solana Blockchain!
                </p>
                <div className="flex items-center flex-wrap space-x-5">
                  <a
                    href="https://royalpangolins.io/"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Website
                  </a>
                  <a
                    href="https://github.com/BinKevs/royal-pangolin-final"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="h-full w-full object-cover object-center md:scale-110 scale-105"
                  src={isMobile ? meta_hoops_mobile : meta_hoops}
                  alt="blog"
                />
                <div className="md:flex hidden space-x-10 absolute bottom-5 left-10 text-white">
                  <i class="fab fa-html5 fa-3x "></i>
                  <i class="fab fa-css3-alt fa-3x "></i>
                  <i class="fab fa-js fa-3x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:flex hidden space-x-10 absolute bottom-5 right-10 text-white">
                  <i class="fal fa-desktop fa-3x"></i>
                  <i class="fal fa-tablet fa-3x"></i>
                  <i class="fal fa-mobile fa-3x"></i>
                </div>
              </div>
              <div className=" md:p-12 p-4 border-[1px]  rounded-2xl space-y-10">
                <div className="flex justify-between md:mt-6 mt-10">
                  <h1 className="md:text-5xl text-3xl font-bold text-white">
                    "Meta Hoops"
                  </h1>
                </div>
                <div className="md:hidden flex justify-between mx-2 text-white">
                  <i class="fab fa-html5 fa-2x "></i>
                  <i class="fab fa-css3-alt fa-2x "></i>
                  <i class="fab fa-js fa-2x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:hidden flex justify-between mx-8 text-white">
                  <i class="fal fa-desktop fa-2x"></i>
                  <i class="fal fa-tablet fa-2x"></i>
                  <i class="fal fa-mobile fa-2x"></i>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg md:text-2xl">
                  Commissioned project which is a website application that
                  showcase Meta hoop's NFT arts created with ReactJs with
                  TailwindCSS and also have a feature let the users mint NFT
                  arts.
                </p>
                <div className="flex items-center flex-wrap space-x-5">
                  <a
                    href="https://binkevs.github.io/metahoop_io/"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Website
                  </a>
                  <a
                    href="https://github.com/BinKevs/metahoop_io"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="h-full w-full object-cover object-center md:scale-110 scale-105"
                  src={isMobile ? covid_tracker_mobile : covid_tracker}
                  alt="blog"
                />
                <div className="md:flex hidden space-x-10 absolute bottom-5 left-10 text-black">
                  <i class="fab fa-html5 fa-3x "></i>
                  <i class="fab fa-css3-alt fa-3x "></i>
                  <i class="fab fa-js fa-3x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:flex hidden space-x-10 absolute bottom-5 right-10 text-black">
                  <i class="fal fa-desktop fa-3x"></i>
                  <i class="fal fa-tablet fa-3x"></i>
                  <i class="fal fa-mobile fa-3x"></i>
                </div>
              </div>
              <div className=" md:p-12 p-4 border-[1px]  rounded-2xl space-y-10">
                <div className="flex justify-between md:mt-6 mt-10">
                  <h1 className="md:text-5xl text-3xl font-bold text-white">
                    "Covid Tracker"
                  </h1>
                </div>
                <div className="md:hidden flex justify-between mx-2 text-black">
                  <i class="fab fa-html5 fa-2x "></i>
                  <i class="fab fa-css3-alt fa-2x "></i>
                  <i class="fab fa-js fa-2x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:hidden flex justify-between mx-8 text-white">
                  <i class="fal fa-desktop fa-2x"></i>
                  <i class="fal fa-tablet fa-2x"></i>
                  <i class="fal fa-mobile fa-2x"></i>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg md:text-2xl">
                  Mini Project that track COVID 19 information around the world
                  made with HTML, CSS, Tailwind, JS, React.
                </p>
                <div className="flex items-center flex-wrap space-x-5">
                  <a
                    href="https://binkevs.github.io/mini_project_covid_tracker/"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Website
                  </a>
                  <a
                    href="https://github.com/BinKevs/mini_project_covid_tracker"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="h-full w-full object-cover object-center md:scale-110 scale-105"
                  src={isMobile ? weather_mobile : weather}
                  alt="blog"
                />
                <div className="md:flex hidden space-x-10 absolute bottom-5 left-10 text-white">
                  <i class="fab fa-html5 fa-3x "></i>
                  <i class="fab fa-css3-alt fa-3x "></i>
                  <i class="fab fa-js fa-3x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:flex hidden space-x-10 absolute bottom-5 right-10 text-white">
                  <i class="fal fa-desktop fa-3x"></i>
                  <i class="fal fa-tablet fa-3x"></i>
                  <i class="fal fa-mobile fa-3x"></i>
                </div>
              </div>
              <div className=" md:p-12 p-4 border-[1px]  rounded-2xl space-y-10">
                <div className="flex justify-between md:mt-6 mt-10">
                  <h1 className="md:text-5xl text-3xl font-bold text-white">
                    "Weather Website Application"
                  </h1>
                </div>
                <div className="md:hidden flex justify-between mx-2 text-white">
                  <i class="fab fa-html5 fa-2x "></i>
                  <i class="fab fa-css3-alt fa-2x "></i>
                  <i class="fab fa-js fa-2x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:hidden flex justify-between mx-8 text-white">
                  <i class="fal fa-desktop fa-2x"></i>
                  <i class="fal fa-tablet fa-2x"></i>
                  <i class="fal fa-mobile fa-2x"></i>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg md:text-2xl">
                  Weather Website App that forecast today's weather information
                  for the location that the user input.
                </p>
                <div className="flex items-center flex-wrap space-x-5">
                  <a
                    href="https://binkevs.github.io/mini_project_simple_weather_app/"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Website
                  </a>
                  <a
                    href="https://github.com/BinKevs/mini_project_simple_weather_app"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="h-full overflow-hidden rounded-2xl">
              <div className="relative">
                <img
                  className="h-full w-full object-cover object-center md:scale-110 scale-105"
                  src={isMobile ? quiz_mobile : quiz}
                  alt="blog"
                />
                <div className="md:flex hidden space-x-10 absolute bottom-5 left-10 text-black">
                  <i class="fab fa-html5 fa-3x "></i>
                  <i class="fab fa-css3-alt fa-3x "></i>
                  <i class="fab fa-js fa-3x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:flex hidden space-x-10 absolute bottom-5 right-10 text-black">
                  <i class="fal fa-desktop fa-3x"></i>
                  <i class="fal fa-tablet fa-3x"></i>
                  <i class="fal fa-mobile fa-3x"></i>
                </div>
              </div>
              <div className=" md:p-12 p-4 border-[1px]  rounded-2xl space-y-10">
                <div className="flex justify-between md:mt-6 mt-10">
                  <h1 className="md:text-5xl text-3xl font-bold text-white">
                    "Mini Quiz"
                  </h1>
                </div>
                <div className="md:hidden flex justify-between mx-2 text-black">
                  <i class="fab fa-html5 fa-2x "></i>
                  <i class="fab fa-css3-alt fa-2x "></i>
                  <i class="fab fa-js fa-2x "></i>
                  <span
                    class="iconify"
                    data-icon="logos:tailwindcss-icon"
                    data-width="40"
                    data-height="40"
                  ></span>
                  <span
                    class="iconify"
                    data-icon="fontisto:react"
                    data-width="40"
                    data-height="40"
                  ></span>
                </div>
                <div className="md:hidden flex justify-between mx-8 text-white">
                  <i class="fal fa-desktop fa-2x"></i>
                  <i class="fal fa-tablet fa-2x"></i>
                  <i class="fal fa-mobile fa-2x"></i>
                </div>
                <p className="leading-relaxed text-gray-400 text-lg md:text-2xl">
                  A Simple React Quiz App which contains the 10 random questions
                  which have 4 options in item.
                </p>
                <div className="flex items-center flex-wrap space-x-5">
                  <a
                    href="https://binkevs.github.io/mini_project_quiz/"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Website
                  </a>
                  <a
                    href="https://github.com/BinKevs/mini_project_quiz"
                    target="_blank"
                    className="border-2 border-white hover:scale-105  px-4 py-2 rounded-2xl text-white text-xl"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
