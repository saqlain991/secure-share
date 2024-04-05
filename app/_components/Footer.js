import React from "react";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-200 dark:bg-gray-300 z-50 mt-5">
      <div className="container flex flex-col items-center justify-center py-4 mx-auto md:flex-row md:items-center md:justify-between md:px-8">
        <h4 className="text-sm text-center text-white-700 dark:text-white-300 mb-2 md:mb-0 md:mr-4">
          SecureShare: Sharing Made Simple ❤️ Building Tomorrow © 2024. All
          Rights Reserved.
        </h4>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <FacebookIcon size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <TwitterIcon size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <InstagramIcon size={24} />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <GithubIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
