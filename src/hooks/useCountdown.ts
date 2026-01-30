import { useEffect, useState } from "react";

export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const expiry = localStorage.getItem("countdown_expiry");
    if (expiry) {
      const diff = Math.floor((+expiry - Date.now()) / 1000);
      if (diff > 0) setTimeLeft(diff);
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          localStorage.removeItem("countdown_expiry");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const start = (seconds: number) => {
    const expiry = Date.now() + seconds * 1000;
    localStorage.setItem("countdown_expiry", expiry.toString());
    setTimeLeft(seconds);
  };

  const format = () =>
    `${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
      .toString()
      .padStart(2, "0")}`;

  return { timeLeft, start, format };
};
