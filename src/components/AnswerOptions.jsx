const AnswerOptions = ({ answers, correctAnswer, onAnswerClick , selectedAnswer}) => {
    return (
      <ul>
        {answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => onAnswerClick(answer)}
             style={{
                  backgroundColor: selectedAnswer === answer ? (answer === correctAnswer ? 'green' : 'red') : 'white'
                }}
          >
            {answer}
          </li>
        ))}
      </ul>
    );
  };
  export default AnswerOptions;