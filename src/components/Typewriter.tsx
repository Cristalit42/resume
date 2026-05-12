import { useEffect, useState } from "react";

const words = [
  "разработки",   // Основа моей разработки ✓
  "работы",       // Основа моей работы ✓
  "практики",     // Основа моей практики ✓
  "философии",    // Основа моей философии ✓ — звучит солидно
  "жизни",        // Основа моей жизни ✓ — с характером
];

export const Typewriter = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // печатаем
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 100);

      // когда допечатали слово
      if (text === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), 3500);
      }
    } else {
      // стираем
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 50);

      // когда стерли полностью
      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <p className=" 1200:text-[85px] 1000:text-[60px] text-[30px] text-primary font-luna font-bold p-3 bg-secondary max-w-[900px] 1000:w-full w-[calc(100% - 120px)] 1200:ml-auto sm:ml-[120px] ml-[30px]  border-l-2 border-primary">
      {text}
      <span className="border-r-2 border-primary ml-1 animate-pulse duration-140"></span>
    </p>
  );
};