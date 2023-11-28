import { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type LoginProps = {
  isAuthModalOpen: boolean;
  onClose: () => void;
};

export const Login = ({ isAuthModalOpen, onClose }: LoginProps) => {
  const [userName, setUsername] = useState("");
  const [password, setUsesetPassword] = useState("");
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

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const userInput = event.target.value;

    // Supprime les caractères non numériques ou non décimaux
    let cleanedInput = userInput.replace(/[^0-9\.]/g, "");

    // Vérifie s'il y a plus de 4 chiffres après la virgule
    if (cleanedInput.includes(".")) {
      const decimalPosition = cleanedInput.indexOf(".");
      if (cleanedInput.length - decimalPosition - 1 > 4) {
        cleanedInput = cleanedInput.slice(0, decimalPosition + 5);
      }
    }
  };

  if (!isAuthModalOpen) return null;

  return (
    <div className="flex items-center justify-center min-w-full min-h-screen fixed z-10 bg-black/25">
      <div className="p-6 shadow-lg flex flex-col w-96 rounded-md bg-background-light" ref={componentRef}>
        <div
          className="flex justify-between"
        >
          Login
          <XMarkIcon className="h-6 w-6 text-primary-light dark:text-primary-dark" onClick={onClose} />
        </div>
        <div
          style={{
            display: "flex",
            padding: "18px 15px",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Set the price and sell your NFT!
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
              fontWeight: "bold",
              height: "35px",
              border: "2px rgb(32 34 45) solid",
              borderRadius: ".5em",
              backgroundColor: "rgb(32 34 45)",
              overflow: "hidden",
            }}
          >
            <div></div>
            <input
              id="filled-hidden-label-small"
              onChange={handleTextFieldChange}
              value={0}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              marginTop: "10px",
              width: "190px",
              height: "40px",
              backgroundColor: "rgb(138 180 209)",
            }}
          >
            <p
              style={{
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Proceed to listing
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
