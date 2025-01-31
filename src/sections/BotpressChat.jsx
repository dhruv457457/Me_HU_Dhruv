import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Function to initialize Botpress chat
    const initBotpress = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          configUrl: "https://files.bpcontent.cloud/2025/01/31/15/20250131150137-03T88URD.json",
          hideWidget: false,
          showCloseButton: true,
          showOpenButton: true,
          botName: "Dhruv's Assistant",
        });
      } else {
        console.warn("Botpress is not loaded yet. Retrying in 500ms...");
        setTimeout(initBotpress, 500);
      }
    };

    // Wait until the script loads
    initBotpress();
  }, []);

  return null;
};

export default BotpressChat;
