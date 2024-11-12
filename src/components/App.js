import React, { useState , useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [quizzes , setQuiz] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then((response) => response.json())
    .then((data) => {
      setQuiz(data)
      setPage("List")
    });
  }
  ,[])
  function addQuiz(quiz){
    setQuiz((prevQuizzes)=>[...prevQuizzes, quiz])
  }
  function updateQuiz(updatedQuiz) {
    setQuiz((prevQuizzes) => 
      prevQuizzes.map((quiz) => (quiz.id === updatedQuiz.id ? updatedQuiz : quiz))
    );
  }

  function removeQuiz(id) {
    setQuiz((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== id));
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuiz={addQuiz} /> : <QuestionList quizzes={quizzes} removeQuiz={removeQuiz}/>}
    </main>
  );
}

export default App;
