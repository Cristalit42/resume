import { useEffect, useState } from "react";

export function Clock() {

  const [timeVisible, setTimeVisible] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTimeVisible(
        new Date().toLocaleTimeString("ru-RU", {
          timeZone: "Asia/Bishkek",
        })
      );
    };

    updateTime(); // ← сразу вызвать

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-luna sm:text-2xl text-lg text-white min-w-[160px]">
      {timeVisible}
    </div>
  );
}