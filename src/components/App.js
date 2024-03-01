
import React, { useState, useEffect } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:4000/questions');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const addQuestion = async (newQuestion) => {
    try {
      const response = await fetch('http://localhost:4000/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newQuestion)
      });
      const data = await response.json();
      setQuestions([...questions, data]);
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  const deleteQuestion = async (id) => {
    try {
      await fetch(`http://localhost:4000/questions/${id}`, {
        method: 'DELETE'
      });
      setQuestions(questions.filter(question => question.id !== id));
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const updateCorrectAnswer = async (id, correctIndex) => {
    try {
      await fetch(`http://localhost:4000/questions/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correctIndex })
      });
      setQuestions(questions.map(question => {
        if (question.id === id) {
          return { ...question, correctIndex };
        }
        return question;
      }));
    } catch (error) {
      console.error('Error updating correct answer:', error);
    }
  };

  return (
    <div>
      <AdminNavBar />
      <QuestionList questions={questions} onDelete={deleteQuestion} onUpdateCorrectAnswer={updateCorrectAnswer} />
      <QuestionForm onSubmit={addQuestion} />
    </div>
  );
}

export default App;
