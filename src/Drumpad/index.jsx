import React from "react";

export const Drumpad = ({
  keyCode,
  keyValue,
  displayname,
  playSound,
  source,
  display,
}) => {
  return (
    <div
      className="drum-pad"
      id={keyCode}
      onClick={(e) => {
        playSound(e);
      }}
    >
      {keyValue}
      <audio className="clip" id={keyValue} src={source}></audio>
    </div>
  );
};
