import React from "react";

const Contact = () => {
  return (
    <div  id="contact" className="flex justify-center my-5 h-full sm:h-[70] items-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 bg-primaryAsh mr-2 flex flex-col justify-around rounded-xl">
            <h1 className="text-4xl sm:text-5xl text-primaryBlack">
              Contact <span className="text-primaryMustard">Me</span>
            </h1>

            <p className="text-normal text-lg font-medium mt-2 text-primaryGreen">
              Let's Connect on LinkedIn <br /> or Send Me an Email
            </p>
            <div className="flex items-center mt-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm-12-1.106v11.393h24v-11.393l-12 8.716-12-8.716zm24-10.607v2.576l-12 8.721-12-8.721v-2.576h24z" />
              </svg>
              <div className="ml-5">
                <p className="text-customGreen text-2xl">Maurice Coker</p>
              </div>
            </div>
          </div>
          <form
          action="https://formspree.io/f/xleknroo"
          method="post"
          className="p-6 flex flex-col justify-center max-w-[700px"
        >
          <div className="flex flex-col">
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border border-gray-700"
            />
          </div>
          <div className="flex flex-col mt-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border border-gray-700"
            />
          </div>
          <div className="flex flex-col mt-2">
            <textarea
              type="message"
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <button
            type="submit"
            className="bg-primaryAsh text-white py-3 px-3 rounded-lg mt-3"
          >
            Submit
          </button>
        </form>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
