import "./App.css";
import { questions } from "../data.jsx";
import RadioInput from "./components/RadioInput.jsx";
import CheckBox from "./components/CheckBox.jsx";
import TextInput from "./components/TextInput.jsx";

function App() {
  return (
    <div className="container">
      <h1>Coğrafya Testi</h1>
      <form action="">
        {questions.map((question) => {
          if (question.questionType === "radio") {
            return <RadioInput key={question.questionId} question={question} />;
          } else if (question.questionType === "checkbox") {
            return <CheckBox key={question.questionId} question={question} />;
          } else if (question.questionType === "text") {
            return <TextInput key={question.questionId} question={question} />;
          }
        })}
      </form>
    </div>
  );
}

export default App;
