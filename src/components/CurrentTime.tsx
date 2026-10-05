import { useEffect, useState } from "react";
import { useLocale } from "../i18n/context";

export function Clock() {

  const locale = useLocale();
  const [timeVisible, setTimeVisible] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTimeVisible(
        new Date().toLocaleTimeString(locale === "en" ? "en-GB" : "ru-RU", {
          timeZone: "Asia/Bishkek",
        })
      );
    };

    updateTime(); // ← сразу вызвать

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [locale]);

  return (
    <div className="font-luna sm:text-2xl text-lg text-white min-w-[160px]">
      {timeVisible}
    </div>
  );
}