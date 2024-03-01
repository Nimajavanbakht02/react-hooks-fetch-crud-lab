
import React from 'react';

function QuestionItem({ question, onDelete, onUpdateCorrectAnswer }) {
  const handleDelete = () => {
    onDelete(question.id);
  };

  const handleCorrectAnswerChange = (e) => {
    onUpdateCorrectAnswer(question.id, e.target.value);
  };

  return (
    <li>
      <div>
        <h3>{question.prompt}</h3>
        <ul>
          {question.answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
        <select onChange={handleCorrectAnswerChange} value={question.correctIndex}>
          {question.answers.map((answer, index) => (
            <option key={index} value={index}>{answer}</option>
          ))}
        </select>
        <button onClick={handleDelete}>Delete Question</button>
      </div>
    </li>
  );
}

export default QuestionItem;
