import React, { useEffect, useRef } from "react";

export default function Footer({ setLetter, activeLetter }) {
  const buttons = [];
  for (let i = 0; i < 26; i++) {
    let newChar = String.fromCharCode(65 + i);
    buttons.push(
      <button
        className={newChar === activeLetter ? "font-bold" : "hover:underline"}
        key={newChar}
        onClick={() => setLetter(newChar)}
      >
        {newChar}
      </button>
    );
  }

  return (
    <div className="w-full h-12 sticky z-70 text-white top-0 bg-slate-500 flex flex-row justify-around">
      {buttons}
    </div>
  );
}
