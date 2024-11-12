import React from "react";

function QuestionItem({ quiz , removeQuiz}) {
  const { id, prompt, answers=[], correctIndex } = quiz;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDelete(){
    fetch(`http://localhost:4000/questions/${quiz.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => removeQuiz(quiz.id));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
