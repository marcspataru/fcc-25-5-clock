import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css";
import TimeLeft from "../TimeLeft";

const Clock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");

  const decrementBreak = () => {
    if (breakLength > 1) setBreakLength(breakLength - 1);
  };

  const incrementBreak = () => {
    if (breakLength < 60) setBreakLength(breakLength + 1);
  };

  const decrementSession = () => {
    if (sessionLength > 1) setSessionLength(sessionLength - 1);
  };

  const incrementSession = () => {
    if (sessionLength < 60) setSessionLength(sessionLength + 1);
  };

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setRunning(false);
    setMode("work");
    (document.getElementById("beep") as HTMLAudioElement).load();
  };

  const startStop = () => {
    setRunning(!running);
  };

  return (
    <div className={styles.labelWrapper}>
      <div className={styles.label}>
        <div id="break-label">Break length</div>
        <div className={styles.controlsWrapper}>
          <div
            id="break-decrement"
            className={styles.control}
            onClick={decrementBreak}
          >
            -
          </div>
          <div id="break-length">{breakLength}</div>
          <div
            id="break-increment"
            className={styles.control}
            onClick={incrementBreak}
          >
            +
          </div>
        </div>
      </div>
      <div className={styles.label}>
        <div id="session-label">Session length</div>
        <div className={styles.controlsWrapper}>
          <div
            id="session-decrement"
            className={styles.control}
            onClick={decrementSession}
          >
            -
          </div>
          <div id="session-length">{sessionLength}</div>
          <div
            id="session-increment"
            className={styles.control}
            onClick={incrementSession}
          >
            +
          </div>
        </div>
      </div>
      <div className={styles.timer}>
        <div id="timer-label">{mode === "work" ? "Session" : "Break"}</div>
        <div id="time-left">
          <TimeLeft
            breakLength={breakLength}
            sessionLength={sessionLength}
            running={running}
            mode={mode}
            setMode={setMode}
          ></TimeLeft>
        </div>
        <div
          id="start_stop"
          className={styles.clickableText}
          onClick={startStop}
        >
          Start/Stop
        </div>
        <div id="reset" className={styles.clickableText} onClick={reset}>
          Reset
        </div>
      </div>
    </div>
  );
};

export default Clock;
