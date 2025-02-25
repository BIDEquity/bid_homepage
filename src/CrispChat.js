import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "1c98242d-1098-4be6-a8ad-8b5c27d2fe0a";

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup if necessary
      document.head.removeChild(script);
    };
  }, []);

  return null; // No UI elements needed, just injecting the script
};

export default CrispChat;
