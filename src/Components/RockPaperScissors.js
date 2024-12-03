import { useState } from "react";
import styles from "./RockPaperScissors.module.css";

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["Rock", "Paper", "Scissors"];

  const playGame = (choice) => {
    const computerPick = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerPick);

    if (choice === computerPick) {
      setResult("It's a draw!");
    } else if (
      (choice === "Rock" && computerPick === "Scissors") ||
      (choice === "Scissors" && computerPick === "Paper") ||
      (choice === "Paper" && computerPick === "Rock")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Rock, Paper, Scissors</h1>
      <div className={styles.choices}>
        {choices.map((choice) => (
          <button
            key={choice}
            className={styles.choiceButton}
            onClick={() => playGame(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className={styles.results}>
        <p>Your choice: {userChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <p className={styles.resultText}>{result}</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;
