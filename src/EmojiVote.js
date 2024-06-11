import React, { useState } from "react";

const emojis = [
  { id: 1, symbol: "😀", votes: 0 },
  { id: 2, symbol: "😂", votes: 0 },
  { id: 3, symbol: "😍", votes: 0 },
  { id: 4, symbol: "😎", votes: 0 },
  { id: 5, symbol: "🥳", votes: 0 },
];

const EmojiVote = () => {
  const [emojiList, setEmojiList] = useState(emojis);
  const [winner, setWinner] = useState(null);

  const voteEmoji = (id) => {
    const updatedEmojiList = emojiList.map((emoji) => {
      if (emoji.id === id) {
        return { ...emoji, votes: emoji.votes + 1 };
      }
      return emoji;
    });
    setEmojiList(updatedEmojiList);
  };

  const showResults = () => {
    const maxVotes = Math.max(...emojiList.map((emoji) => emoji.votes));
    const winningEmoji = emojiList.find((emoji) => emoji.votes === maxVotes);
    setWinner(winningEmoji);
  };

  return (
    <div style={styles.container}>
      <h1>Vote for the Best Emoji!</h1>
      <div style={styles.emojiContainer}>
        {emojiList.map((emoji) => (
          <div
            key={emoji.id}
            style={styles.emoji}>
            <span
              style={styles.symbol}
              onClick={() => voteEmoji(emoji.id)}>
              {emoji.symbol}
            </span>
            <span>{emoji.votes}</span>
          </div>
        ))}
      </div>
      <button
        style={styles.button}
        onClick={showResults}>
        Show Results
      </button>
      {winner && (
        <div style={styles.winner}>
          <h2>
            Winner is: {winner.symbol} with {winner.votes} votes!
          </h2>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  emojiContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  emoji: {
    cursor: "pointer",
    fontSize: "2rem",
  },
  symbol: {
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  winner: {
    marginTop: "20px",
    fontSize: "1.5rem",
  },
};

export default EmojiVote;
