const TextInput = ({ question }) => {
  return (
    <div key={question.questionId}>
      <h2>{question.question}</h2>
      <input type="text" placeholder="Cevabı giriniz..." />
    </div>
  );
};

export default TextInput;
