


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-[1200px] mx-auto md:flex justify-between p-5 items-center">
        <p>&copy; 2025 Maurice Coker. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/mauricecoker/"
            className="text-primaryMustard"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/coker2019"
            className="text-primaryMustard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Olabisi_coker"
            className="text-primaryMustard"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
