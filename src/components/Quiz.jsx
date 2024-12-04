import React, { useState, useEffect } from 'react';
import ProgressNavbar from './PageElements/ProgressNavbar';
import './style/Quiz.css';
import questions from './data/questions';
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Quiz = (props) => {
  const [totalQuestions] = useState(Math.min(30, questions[props.subject].length));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);


  const initQuiz = () => {
    const newQuestions = shuffleArray([...questions[props.subject]]).slice(0, totalQuestions);
    setShuffledQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    const correct = shuffledQuestions[currentQuestionIndex].correct;

    if (answerIndex === correct) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setUserAnswers([...userAnswers, answerIndex]);

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTimeLeft(30);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        calculateScore();
      }
    }, 1000); 
  };

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter((answer, index) => {
      return shuffledQuestions[index] && answer === shuffledQuestions[index].correct;
    }).length;

    props.onScore(correctAnswers, shuffledQuestions, userAnswers);
  };

  useEffect(() => {
    initQuiz();
  }, [props.subject]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(null); 
      setTimeLeft(30)
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestionIndex]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div>
      <ProgressNavbar currentStep={currentQuestionIndex + 1} totalSteps={totalQuestions} />
      <h2>{props.subject} Quiz</h2>
      {currentQuestion ? (
        <div>
          <h3>{currentQuestion.question}</h3>
          {currentQuestion.answers.map((answer, index) => (
            <button
              className='btns'
              key={index}
              onClick={() => handleAnswer(index)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedAnswer !== null
                    ? index === currentQuestion.correct
                      ? '#15e063'
                      : index === selectedAnswer
                      ? 'red'
                      : ''
                    : ''
              }}
              disabled={selectedAnswer !== null} // Désactive les boutons après sélection
            >
              {answer}
            </button>
          ))}
          <div className="timer-container">
            <div className="timer-circle">
              <div
                className="timer-text"
                style={{ color: timeLeft <= 10 ? 'red' : '#15e063' }} // Change de couleur si <= 10
              >
                {timeLeft}s
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Quiz;
