import { auth } from "../auth";
import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import { Session } from "./Session";
import ThemeButton from "./themeButton";

const Navbar = async () => {
  const session = await auth();

  return (
    <>
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
        <div className="space-x-4 font-sans font-black text-foreground-light dark:text-foreground-dark">
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
        {session ? <Session /> : <LoginButton />}
        <ThemeButton />
      </nav>
    </>
  );
};

export default Navbar;
