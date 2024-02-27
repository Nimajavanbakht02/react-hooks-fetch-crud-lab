import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then(items => setQuestions(items));
  }, [])

  function handleDeleteQuestion(deletedQuestion) {
    setQuestions(questions.filter(question => question !== deletedQuestion));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => <QuestionItem key={question.id} {...{question, onDeleteQuestion : handleDeleteQuestion}} />)}</ul>
    </section>
  );
}

export default QuestionList;