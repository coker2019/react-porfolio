
import { images } from "../assets";
import "../index.css";

const Hero = () => {
  return (
    <section   id="skills" className=" md:flex pt-[150px]  justify-around items-center p-10  space-y-10 md:space-x-10 text-primaryMustard">
      <div className="w-fit md:w-1/3">
        <p className="text-4xl mb-5 text-primaryBlack font-bold">I'M</p>
        <h1 className="text-6xl mb-5 text-primaryBlack font-bold">
          Maurice Coker
        </h1>
        <h2 className="text-3xl mt-2 gradiant-text">
          I’m a fullstack web developer
        </h2>

        <p className="text-1xl mt-10 text-primaryBlack">
          I've completed 30+ diverse projects, showcasing my skills in product
          development, feature implementation, and website creation. Explore my
          portfolio, and if you have a coding project, reach out to me I'm ready to
          bring your ideas to life!
        </p>
      </div>

      <div className="w-fit md:w-1/3 items-center">
        <img
          src={images.profilepix}
          className="rounded-full w-full border-8 border-primaryAsh"
          alt="hero"
          width={250}
          height={250}
        />
      </div>
      <div className="w-fit md:w-1/3">
        <p className="mb-4 text-4xl">About me</p>
        <p className="text-1xl mb-5 text-primaryBlack">
          I excel in remote development, with a track record of diverse projects
          and 95% marks in school and college. I've successfully collaborated
          across three time zones (UTC-6, UTC+1, UTC+5), demonstrating
          adaptability and a proactive work ethic.
        </p>
        <button
          className="bg-white text-indigo-600 px-10 py-2 my- border
         border-primaryMustard rounded-full hover:bg-indigo-800 hover:text-white "
        >
          show more...
        </button>

        <div className="mt-5 cursor-pointer space-x-3 flex">
            <a href="https://web.facebook.com/maurice.coker.180"> <img src={images.facebook} alt="hero" /></a>
            <a href="https://x.com/Olabisi_coker"><img src={images.twitter} alt="hero" /></a>
            <a href="https://www.instagram.com/cokerjnr001/"><img src={images.instagram} alt="hero" /></a>
            <a href="https://www.linkedin.com/in/mauricecoker/"><img src={images.linkedin} alt="hero" /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
