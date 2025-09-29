
import { images } from "../assets";

const Project = () => {
  return (
    <div>
      <div id="projects"  className="m-5 sm:m-10 md:m-20 max-w-full">
        <div className="grid justify-items-center mb-10">
          <h1 className="text-primaryMustard text-4xl mt-5 sm:mt-10">Projects</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center">
          <a href="https://admin.nownowdispatch.com/" className="group h-48 overflow-hidden rounded-lg shadow-lg sm:h-60 md:h-80">
            <img
              src={images.landingpage}
              alt="landingpageImg"
              className="w-[28rem] h-[20rem] object-cover object-center transition duration-200 group-hover:scale-105"
            />
          </a>

          <a href="https://admin-dev.idataroom.com/login" className="group h-48 overflow-hidden rounded-lg shadow-lg sm:h-60 md:h-80 md:col-span-2 lg:col-span-1">
            <img
              src={images.adminPix}
              alt="adminPix"
              className="w-full h-full object-cover object-center transition duration-200 group-hover:scale-105"
            />
          </a>

          <a href="https://virtual-library-88xi.onrender.com/login" className="group h-48 overflow-hidden rounded-lg shadow-lg sm:h-60 md:h-80 md:col-span-2 lg:col-span-1">
            <img
              src={images.virtual}
              alt="virtualImg"
              className="w-full h-full object-cover object-center transition duration-200 group-hover:scale-105"
            />
          </a>

          <a href="https://populationapp.onrender.com/" className="group h-48 overflow-hidden rounded-lg shadow-lg sm:h-60 md:h-80">
            <img
              src={images.metrics}
              alt="metricsImg"
              className="w-full h-full object-cover object-center transition duration-200 group-hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
