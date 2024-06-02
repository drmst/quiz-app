

const RadioInput = ({ question }) => {
  return (
    <div key={question.questionId}>
      <h2>{question.question}</h2>
      {question.answers.map((answer) => {
        return (
          <label htmlFor={answer.id} key={answer.id}>
            <input
              type="radio"
              name={question.questionId}
              id={answer.id}
              value={answer.answer}
            />
            {answer.answer}
          </label>
        );
      })}
    </div>
  );
};

export default RadioInput;
