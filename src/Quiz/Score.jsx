import React, { useState, useEffect } from 'react';
import t from './son.mp3'; 
import './Score.css';

const Score = ({ score, totalQuestions, incorrectAnswers, onRestart, onRetry }) => {
  const [showIncorrectQuestions, setShowIncorrectQuestions] = useState(false);
  const successSound = new Audio(t);

  const toggleIncorrectQuestions = () => {
    setShowIncorrectQuestions((prev) => !prev);
  };

  const getIncorrectQuestions = () => {
    if (incorrectAnswers && incorrectAnswers.length > 0) {
      return incorrectAnswers.map((question, index) => (
        <li key={index}>
          Question {question.questionNumber}: {question.question}
        </li>
      ));
    } else {
      return <p>Toutes les réponses étaient correctes !</p>;
    }
  };

  useEffect(() => {
    if (score >= 15) {
      successSound.play().catch((error) => {
        console.error("Erreur de lecture du son :", error);
      });
    }
  }, [score]);

  return (
    <div>
      <h2>Résultat du Quiz</h2>
      <h3>Score : {score} / {totalQuestions}</h3>

     
      {score >= 15 ? (
        <p>Félicitations ! Vous avez bien réussi !</p>
      ) : (
        <p>Désolé, vous avez perdu. Essayez à nouveau !</p>
      )}

      <button className='btns' onClick={toggleIncorrectQuestions}>
        {showIncorrectQuestions ? "Masquer les questions incorrectes" : "Voir les questions incorrectes"}
      </button>

      {showIncorrectQuestions && (
        <ul>
          {getIncorrectQuestions()}
        </ul>
      )}

      <button className='btns' onClick={onRestart}>Recommencer</button>
      <button className='btns' onClick={onRetry}>Réessayer</button>
    </div>
  );
};

export default Score;
