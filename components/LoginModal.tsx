"use client";

import { useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { signIn } from "next-auth/react";


type LoginProps = {
  isAuthModalOpen: boolean;
  onClose: () => void;
};

export const LoginModal = ({ isAuthModalOpen, onClose }: LoginProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      componentRef.current &&
      event.target instanceof Node &&
      !componentRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    const listener = (event: MouseEvent) => handleClickOutside(event);

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handleClickOutside]);

  if (!isAuthModalOpen) return null;

  return (
    <div className="flex items-center justify-center min-w-full min-h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black/25">
      <div
        className="p-12 max-w-lg w-full shadow-lg flex flex-col rounded-md bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark"
        ref={componentRef}
      >
        <div className="flex justify-end">
          <XMarkIcon
            className="h-6 w-6 text-primary-light dark:text-primary-dark"
            onClick={onClose}
          />
        </div>
        Email address
        <input type="email" className="px-3 py-1.5 rounded-md ring-1 ring-inset ring-gray-300 shadow-sm mb-5"
        />
        Password
        <input className="px-3 py-1.5 rounded-md ring-1 ring-inset ring-gray-300 shadow-sm mb-5"
        />
        <div className="flex justify-between mb-5">
          <div>
            <input type="checkbox" />
            Remember me
          </div>
          Forgot password?
        </div>
        <button className="w-full rounded-md px-3 py-1.5 bg-primary-light dark:bg-primary-dark">Sign in</button>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    </div>
  );
};
