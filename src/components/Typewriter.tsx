import { useEffect, useState } from "react";

interface Props {
  words: string[];
}

export const Typewriter = ({ words }: Props) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordTyped = !isDeleting && text === currentWord;
    const isWordErased = isDeleting && text === "";
    const delay = isWordTyped ? 3500 : isDeleting ? 50 : 100;

    // Все обновления состояния — внутри колбэка таймера, а не синхронно в эффекте
    const timeout = setTimeout(() => {
      if (isWordTyped) {
        setIsDeleting(true);
      } else if (isWordErased) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(currentWord.slice(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <p className=" 1200:text-[85px] 1000:text-[60px] text-[30px] text-primary font-luna font-bold p-3 bg-secondary max-w-[900px] 1000:w-full 1200:ml-auto sm:ml-[120px] ml-[30px]  border-l-2 border-primary">
      {text}
      <span className="border-r-2 border-primary ml-1 animate-pulse duration-140"></span>
    </p>
  );
};