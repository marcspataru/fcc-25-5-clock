import React, { useEffect, useState } from "react";

const formatDoubleDigits = (number: number) => {
  if (number < 10 && number >= 0) {
    return `0${number}`;
  }
  return number;
};

const TimeLeft = ({
  breakLength,
  sessionLength,
  running,
  mode,
  setMode,
}: {
  breakLength: number;
  sessionLength: number;
  running: boolean;
  mode: "work" | "break";
  setMode: React.Dispatch<React.SetStateAction<"work" | "break">>;
}) => {
  const [minutes, setMinutes] = useState(
    mode === "work" ? sessionLength : breakLength
  );
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMinutes(mode === "break" ? breakLength : sessionLength);
    setSeconds(0);
  }, [breakLength, mode, sessionLength]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (!running) return;
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setMode(mode === "break" ? "work" : "break");
          (document.getElementById("beep") as HTMLAudioElement).play();
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    setMinutes(sessionLength);
    setSeconds(0);
  }, [sessionLength]);

  return (
    <div id="time-left">
      {formatDoubleDigits(minutes)}:{formatDoubleDigits(seconds)}
      <audio id="beep" src="/rocket.wav">
        Audio
      </audio>
    </div>
  );
};

export default TimeLeft;
