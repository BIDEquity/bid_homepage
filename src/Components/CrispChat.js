import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1c98242d-1098-4be6-a8ad-8b5c27d2fe0a");
  }, []);

  return null; // Ensures it doesn't interfere with layout
};

export default CrispChat;
