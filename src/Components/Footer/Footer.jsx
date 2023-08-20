export default function Footer({ setLetter, activeLetter }) {
  const buttons = [];
  for (let i = 0; i < 26; i++) {
    let newChar = String.fromCharCode(65 + i);
    buttons.push(
      <button
        className={newChar === activeLetter ? "font-bold px-2" : "hover:underline px-2"}
        key={newChar}
        onClick={() => setLetter(newChar)}
      >
        {newChar}
      </button>
    );
  }

  return (
    <div className="w-full h-12 sticky top-0 z-70 text-white bg-black flex flex-row justify-around">
      {buttons}
    </div>
  );
}
