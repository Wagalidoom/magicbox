"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Login } from "./login/Login";

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleAuthModal = () => setIsAuthModalOpen(!isAuthModalOpen);

  return (
    <>
    <Login isAuthModalOpen={isAuthModalOpen} onClose={toggleAuthModal}/>
      <nav className="p-4 flex justify-between items-center bg-tertiary-light dark:bg-tertiary-dark">
        <div className="flex items-center space-x-4">
          <Image
            src="/magic_box_logo.png"
            alt="Magic Box Logo"
            width={40}
            height={40}
          />
          <Image
            className="mt-1"
            src="/magic_box_text.png"
            alt="Magic Box Text"
            width={100}
            height={100}
          />
        </div>
        <div className="space-x-4 font-sans font-black text-foreground-light dark:text-neutral-50">
          <Link href="/home" passHref>
            <span className="hover:text-gray-500 cursor-pointer">ACCUEIL</span>
          </Link>
          <Link href="/projects" passHref>
            <span className="hover:text-gray-500 cursor-pointer">PROJETS</span>
          </Link>
          <Link href="/imputations" passHref>
            <span className="hover:text-gray-500 cursor-pointer">
              IMPUTATIONS
            </span>
          </Link>
          <Link href="/management" passHref>
            <span className="hover:text-gray-500 cursor-pointer">GESTION</span>
          </Link>
          <Link href="/admin" passHref>
            <span className="hover:text-gray-500 cursor-pointer">
              ADMINISTRATION
            </span>
          </Link>
        </div>
        <div>
          <button
            className="p-2 rounded text-green-600 bg-white"
            onClick={toggleAuthModal}
          >
            LOGIN
          </button>
        </div>
        <button
          className="p-1 rounded-full border-2 border-primary-light dark:border-primary-dark"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <SunIcon className="h-6 w-6 text-primary-light" />
          ) : (
            <MoonIcon className="h-6 w-6 text-primary-dark" />
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
