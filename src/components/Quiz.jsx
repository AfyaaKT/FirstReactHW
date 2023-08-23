import React, { useState } from 'react';
import AnswerOptions from './AnswerOptions';


const Quiz = () => {
  const question = 'Why do the developers quit their job?';
  const answers = ['eye pain', 'another job with heigher salary', 'back pain'];
  const correctAnswer = 'back pain';

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>
      <div className="question-container">
        <h2>{question}</h2>
        <AnswerOptions
          answers={answers}
          correctAnswer={correctAnswer}
          onAnswerClick={handleAnswerClick}
          selectedAnswer={selectedAnswer}
        />
      </div>
      {selectedAnswer && (
        <p style={{ color: selectedAnswer === correctAnswer ? 'green' : 'red' }}>
          {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect!'}
        </p>
      )}
    </div>
  );
};

export default Quiz; 
 