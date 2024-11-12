import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({quizzes, removeQuiz}) {
  const questions = quizzes.map((quiz)=>(
    <QuestionItem key={quiz.id} quiz={quiz} removeQuiz={removeQuiz}/>
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questions }</ul>
    </section>
  );
}

export default QuestionList;
