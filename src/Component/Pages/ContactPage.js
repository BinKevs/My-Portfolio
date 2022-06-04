import royal_pangolin from "../../static/royal_pangolin.JPG";
import dragon_soul from "../../static/dragon_soul.JPG";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t9x2j5j",
        "template_svbiyki",
        form.current,
        "0DViIIKevyjQrVlEe"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "A'ight!",
            text: "I will get back to you as soon as possible, thanks!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          window.scrollTo(0, 0);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-black flex justify-center sm:h-screen"
    >
      <div className="m-auto flex flex-col md:flex-row md:w-2/3 w-4/5 md:space-x-10 py-16">
        <div className="md:w-1/2 w-full text-white space-y-10">
          <div className="font-bold text-6xl">Let’s talk business</div>
          <div className="font-semibold text-2xl text-gray-500">
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="mb-6 text-white">
            <label className="block mb-2 font-extrabold" for="">
              Name
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold  bg-[#181823] "
              type="text"
              name="user_name"
            />
          </div>
          <div className="mb-6 text-white">
            <label className="block mb-2 font-extrabold" for="">
              Email
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold  bg-[#181823] "
              type="email"
              name="user_email"
            />
          </div>
          <div className="mb-6 text-white">
            <label className="block mb-2 font-extrabold" for="">
              Message
            </label>
            <textarea
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold  bg-[#181823] "
              type="text"
              name="message"
            />
          </div>
          <button
            type="submit"
            class="inline-block w-full py-6 px-6 mb-6 text-center text-2xl leading-6 text-white font-extrabold bg-red-800 hover:bg-red-900 border-3 border-red-900 shadow rounded transition duration-200 uppercase"
          >
            Let's get started
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactPage;
