import { useState } from "react";
import styles from "./NumProgressBar.module.css";

export default function NumProgressBar({ val, setVal }) {
  return (
    <div className="w-full">
      <input
        type="range"
        min="1"
        max="12"
        value={val}
        onChange={(e) => setVal(e.currentTarget.value)}
        className={`${styles.slider} bg-cover`}
      />
      <div className="flex justify-between mt-3 font-mono">
        <p>1x1</p>
        <p>12x12</p>
      </div>
    </div>
  );
}
