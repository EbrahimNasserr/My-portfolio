import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const notify = () =>
  toast.success("Message Sent Successfully!", {
    style: {
      borderRadius: "15px",
      background: "#111",
      color: "#fff",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

function Contact({ sections }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_42oo4qh",
        "template_bohyggi",
        form.current,
        "V4RdDRDg5jSqcpAa6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section id="contact" ref={(el) => (sections.current[4] = el)}>
        <h2 className="main-heading text-4xl sm:after:w-[150px] md:text-3xl sm:text-xl xsm:text-xl">
          contact
        </h2>
        <div className=" flex flex-col gap-7 justify-center items-center">
          <h2 className=" text-3xl lg:text-2xl md:text-xl sm:text-base mb-5">
            let's do something great !
          </h2>
          <div className="relative w-80 h-96 bg-black rounded flex justify-center items-center box overflow-hidden">
            <span className=" absolute inset-1 rounded bg-bg-cart-color z-30"></span>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col relative z-30 p-3 rounded gap-2 w-full h-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                className=" bg-black p-3 rounded border-b border-solid border-b-primary outline-none normal-case placeholder:text-xs"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className=" bg-black p-3 rounded border-b border-solid border-b-primary outline-none normal-case placeholder:text-xs"
              />
              <textarea
                name="message"
                rows="7"
                required
                placeholder="Your Message"
                className=" bg-black p-3 rounded border-b border-solid border-b-primary outline-none normal-case placeholder:text-xs mb-2"
              ></textarea>
              <div className="flex items-center justify-center absolute bottom-5 w-full left-[3px]">
                <button
                  type="submit"
                  className=" text-primary button relative md:text-base sm:text-sm w-[180px]"
                  onClick={notify}
                >
                  send message
                  <div className=" absolute w-5 h-5 -top-[10px] -left-2 bg-bg-cart-color rounded-full"></div>
                  <div className=" absolute w-5 h-5 top-6 -left-2 bg-bg-cart-color rounded-full"></div>
                  <div className=" absolute w-5 h-5 top-6 -right-2 bg-bg-cart-color rounded-full"></div>
                  <div className=" absolute w-5 h-5 -top-[10px] -right-2 bg-bg-cart-color rounded-full"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
