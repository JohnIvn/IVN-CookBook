import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <div className="flex flex-wrap justify-center space-x-6 mb-6 text-sm text-gray-700">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Accessibility</a>
          <a href="#">Partners</a>
        </div>

        <div className="flex justify-center space-x-6 mb-6 text-gray-600 text-xl">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
