import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

function Lower({ messageArray, setMessageArray }) {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef();
  console.log(messageArray);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleLike() {
    const icon = <ThumbUpIcon />;
    setMessageArray((message) => [...message, icon]);
  }

  function handleAddMessage(item) {
    setMessageArray((message) => [...message, item]);
    setText("");
  }

  const handleEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };
  function handleKeyPress(e) {
    if (e.code === "Enter") {
      if (text.length > 0) handleAddMessage(text);
    }
  }

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div className="basis-36 flex justify-between cursor-pointer">
          <KeyboardVoiceIcon />
          <AddPhotoAlternateIcon />
          <AddReactionIcon />
          <GifBoxIcon />
        </div>
        <div className="basis-[70%] flex justify-between">
          <input
            type="text"
            placeholder="Aa"
            className="w-[80%] text-black border-none outline-none rounded-md px-2"
            value={text}
            ref={inputRef}
            onKeyDown={handleKeyPress}
            onChange={(e) => setText(e.target.value)}
            spellCheck="false"
          />
          <div className="flex justify-between items-center cursor-pointer">
            <EmojiEmotionsIcon
              className="mx-2"
              onClick={() => setShowEmojiPicker((prev) => !prev)}
            />
            {showEmojiPicker && (
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                width={250}
                height={350}
                style={{
                  position: "absolute",
                  bottom: "90px",
                  right: "340px", // Shifted to the left by 20px
                  zIndex: 1000,
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {text.length > 0 ? (
              <SendIcon
                className="mx-3"
                onClick={() => handleAddMessage(text)}
              />
            ) : (
              <ThumbUpIcon className="mx-3" onClick={handleLike} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lower;
