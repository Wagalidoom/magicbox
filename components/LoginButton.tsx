"use client";

import { useState } from "react";
import { LoginModal } from "./LoginModal";

export const LoginButton = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const toggleAuthModal = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <>
      <LoginModal isAuthModalOpen={isAuthModalOpen} onClose={toggleAuthModal} />
      <button className="p-2 rounded text-green-600 bg-white" onClick={toggleAuthModal}>LOGIN</button>
    </>
  );
};
