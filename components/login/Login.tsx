import { useState, useRef, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setUsesetPassword] = useState("");
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (componentRef.current && event.target instanceof Node && !componentRef.current.contains(event.target)) {
    }
  };

  const handleClose = () => {};

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="flex min-w-screen min-h-screen fixed z-10 bg-black/25">
      <div className="flex" ref={componentRef}>
        <div
          className="contractContainerRow"
          style={{
            padding: "15px 0px",
            justifyContent: "space-between",
          }}
        >
          Login
          <XMarkIcon className="h-6 w-6 text-primary-light dark:text-primary-dark" />
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
