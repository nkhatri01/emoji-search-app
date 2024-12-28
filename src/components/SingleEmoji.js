import React, { useEffect } from "react";
import emojiList from "../emojiList";

function SingleEmoji({ singleEmoji }) {
  return (
    <div className="bg-primary d-flex text-white justify-content-center p-2 mw-100 fs-4 mb-2 border border-black fw-bolder">
      <p> {singleEmoji.description} </p>
    </div>
  );
}

export default SingleEmoji;