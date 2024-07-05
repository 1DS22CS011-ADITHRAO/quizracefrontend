import React from 'react';
import './profileStatistics.css';

const ProfileStatistics = () => {
  // Example data
  const totalQuizzes = 25;
  const correctAnswers = 200;
  const incorrectAnswers = 50;
  const averageScore = 80;
  const highestScore = 95;

  // Calculate total questions
  const totalQuestions = correctAnswers + incorrectAnswers;

  // Calculate correct and incorrect percentages
  const correctPercentage = totalQuestions ? ((correctAnswers / totalQuestions) * 100).toFixed(2) : 0;
  const incorrectPercentage = totalQuestions ? ((incorrectAnswers / totalQuestions) * 100).toFixed(2) : 0;

  return (
    <div className="profile-statistics">
      <h2>Statistics</h2>
      <div className="stat">
        <span>Total Quizzes:</span>
        <span>{totalQuizzes}</span>
      </div>
      <div className="stat">
        <span>Total Questions:</span>
        <span>{totalQuestions}</span>
      </div>
      <div className="stat">
        <span>Correct Answers:</span>
        <span>{correctAnswers} ({correctPercentage}%)</span>
      </div>
      <div className="stat">
        <span>Incorrect Answers:</span>
        <span>{incorrectAnswers} ({incorrectPercentage}%)</span>
      </div>
      <div className="stat">
        <span>Average Score:</span>
        <span>{averageScore}%</span>
      </div>
      <div className="stat">
        <span>Highest Score:</span>
        <span>{highestScore}%</span>
      </div>
    </div>
  );
};

export default ProfileStatistics;
