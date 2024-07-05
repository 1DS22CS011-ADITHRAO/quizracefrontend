import React from 'react';
import './scoreboard.css';

const Scoreboard = () => {
  
  const scores = [
    { isCorrect: true },
    { isCorrect: false },
    { isCorrect: true },
    { isCorrect: true },
    { isCorrect: false }
  ];

  
  const totalQuestions = scores.length;
  const correctAnswers = scores.filter(score => score.isCorrect).length;
  const percentageCorrect = (correctAnswers / totalQuestions) * 100;

  let feedbackMessage = '';
  if (percentageCorrect > 75) {
    feedbackMessage = 'Well done !!!';
  } else {
    feedbackMessage = 'You can do better.';
  }


  const correctQuestions = scores
    .filter(score => score.isCorrect)
    .map((score, index) => ({ question: `Question ${index + 1}` }));

  const incorrectQuestions = scores
    .filter(score => !score.isCorrect)
    .map((score, index) => ({ question: `Question ${index + 1}` }));

  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <h2>Scoreboard</h2>
        <div className="feedback-message">
          <p>{feedbackMessage}</p>
        </div>
        <div className="summary">
          <p>Total Questions: {totalQuestions}</p>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Percentage Correct: {percentageCorrect.toFixed(2)}%</p>
        </div>
        <div className="question-tables">
          {correctQuestions.length > 0 && (
            <div className="correct-questions">
              <h3>Correct Questions:</h3>
              <table>
                <tbody>
                  {correctQuestions.map((question, index) => (
                    <tr key={index}>
                      <td>{question.question}</td>
                      <td>✅</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {incorrectQuestions.length > 0 && (
            <div className="incorrect-questions">
              <h3>Incorrect Questions:</h3>
              <table>
                <tbody>
                  {incorrectQuestions.map((question, index) => (
                    <tr key={index}>
                      <td>{question.question}</td>
                      <td>❌</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
