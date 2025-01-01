import React, { useEffect, useState } from "react";
import emojiList from "../emojiList";
import EmojiContainer from "./EmojiContainer";

function Main() {
  const [list, setList] = useState(emojiList); // Default emoji list
  const [keyword, setKeyword] = useState(""); // Search input value

  // Update the keyword when the user types
  const typed = (e) => {
    const value = e.target.value.toLowerCase();
    setKeyword(value); // Set the current input value
  };

  // Use effect to filter emoji list based on the keyword entered
  useEffect(() => {
    // Filter the emoji list when the user types or selects an emoji
    const filterList = emojiList.filter((singleEmoji) => {
      if (singleEmoji.description.toLowerCase().includes(keyword)) {
        return true; // Match if the description contains the keyword
      }
       if (singleEmoji.emoji.toLowerCase().includes(keyword)) {
        return true; // Match if the emoji itself contains the keyword
      }
      // Check if any alias matches the keyword
    if (singleEmoji.aliases.some((alias) => alias.toLowerCase().includes(keyword))) {
      return true;
    }

    // Check if any tag matches the keyword
    if (singleEmoji.tags.some((tag) => tag.toLowerCase().includes(keyword))) {
      return true;
    }

      return false; // No match
    });

    setList(filterList); // Update the displayed emoji list
  }, [keyword]); // Trigger this effect whenever the keyword changes

  return (
    <div className="row">
      {/* Input Field */}
      <div className="col-12">
        <input
          type="text"
          onChange={typed} // Using 'onChange' for live search
          placeholder="Enter your Emoji 🔎"
          className="form-control w-100"
        />
        {/* Show the result heading only if keyword is present */}
        {/* {keyword && <h3>Result for - {keyword}</h3>} */}
      </div>

     
      <hr />

      {/* Emoji Display */}
      {list.length === 0 ? (
        <h3>No Emoji found😥😭</h3> // Show message if no emojis are found
      ) : (
        <EmojiContainer list={list} /> // Show filtered emoji list
      )}
    </div>
  );
}

export default Main;
