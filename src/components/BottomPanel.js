import React from "react";
import Circle from "../svg/circle-white.js";

export default function BottomPanel({ current, length }) {
  return (
    <>
      {[...Array(length)].map((_, i) => {
        return (
          <div>
            <Circle current={current === i ? true : false} />
          </div>
        );
      })}
    </>
  );
}
