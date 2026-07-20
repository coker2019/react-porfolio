
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
        Delivered 30+ web development projects, from feature implementation to complete web applications. Explore my portfolio,
         and let's discuss how I can help bring your next project to life.
        </p>
      </div>

      <div className="w-fit md:w-1/3 items-center">
        <img
          src={images.newpix}
          className="rounded-full w-full border-8 border-primaryAsh"
          alt="hero"
          width={250}
          height={250}
        />
      </div>
      <div className="w-fit md:w-1/3">
        <p className="mb-4 text-4xl">About me</p>
        <p className="text-1xl mb-5 text-primaryBlack">
        I'm a Full-Stack Web Developer building scalable web applications for clients worldwide. I thrive in remote teams,
         combining technical expertise, problem-solving, and clear communication to deliver quality results
        </p>
      

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
