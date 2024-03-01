
import React, { useState } from 'react';

const QuestionForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'prompt') {
      setPrompt(value);
    } else if (name.includes('answer')) {
      const newAnswers = [...answers];
      newAnswers[index] = value;
      setAnswers(newAnswers);
    } else if (name === 'correctIndex') {
      setCorrectIndex(parseInt(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ prompt, answers, correctIndex });
  };

  return (
    <form onSubmit={handleSubmit} data-testid="question-form">
      <label>
        Prompt:
        <input
          name="prompt"
          type="text"
          value={prompt}
          onChange={(e) => handleInputChange(e)}
        />
      </label>
      <label>
        Answer 1:
        <input
          name="answer1"
          type="text"
          value={answers[0]}
          onChange={(e) => handleInputChange(e, 0)}
        />
      </label>
      <label>
        Answer 2:
        <input
          name="answer2"
          type="text"
          value={answers[1]}
          onChange={(e) => handleInputChange(e, 1)}
        />
      </label>
      <label>
        Answer 3:
        <input
          name="answer3"
          type="text"
          value={answers[2]}
          onChange={(e) => handleInputChange(e, 2)}
        />
      </label>
      <label>
        Answer 4:
        <input
          name="answer4"
          type="text"
          value={answers[3]}
          onChange={(e) => handleInputChange(e, 3)}
        />
      </label>
      <label>
        Correct Answer:
        <select
          name="correctIndex"
          value={correctIndex}
          onChange={(e) => handleInputChange(e)}
        >
          {answers.map((_, index) => (
            <option key={index} value={index}>
              {`Choice ${index + 1}`}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;