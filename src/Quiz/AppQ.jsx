
import Footer from './QZ/Footer'
import './App.css';
import Loader from './QZ/Loader';
import React, { useState } from 'react';
import x from './QZ/OFPPT quiz -Logo.jpg';
import Subjects from './QZ/Subjects';
import Quiz from './QZ/Quiz';
import Score from './QZ/Score';

const App = () => {
  const [currentPage, setCurrentPage] = useState('subjects');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]); // Pour stocker les mauvaises réponses

  const handleSelectSubject = (subject) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedSubject(subject);
      setCurrentPage('quiz');
      setLoading(false);
    }, 1000); 
  };

  const handleScore = (userScore, shuffledQuestions, userAnswers) => {
   
    const incorrect = shuffledQuestions.filter((question, index) => userAnswers[index] !== question.correct);
    setIncorrectAnswers(incorrect);
    setLoading(true);
    setTimeout(() => {
      setScore(userScore);
      setCurrentPage('score');
      setLoading(false);
    }, 1000); 
  };

  const renderPage = () => {
    if (loading) {
      return <Loader />;
    }

    switch (currentPage) {
      case 'subjects':
        return <Subjects onSelectSubject={handleSelectSubject} />;
      case 'quiz':
        return <Quiz subject={selectedSubject} onScore={handleScore} />;
      case 'score':
        return (
          <Score
            score={score}
            totalQuestions={30}
            incorrectAnswers={incorrectAnswers} 
            onRestart={() => setCurrentPage('subjects')}
            onRetry={() => setCurrentPage('quiz')}
          />
        );
      default:
        return null;
    }
  }; 

  return (
    <>
      <div className="App">
        <img className='logo' src={x} alt="Logo" />     
        <h1>Quiz sur les Matières</h1>
        {renderPage()} 
      </div>
      <Footer/>
    </>
  );
};

export default App;