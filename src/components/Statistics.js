const Statistics = ({ stat }) => {
  const { good, bad, neutral, total } = stat;
  if(total === 0) 
    return <p>no feedback yet</p>
  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>Total feedback {total}</p>
      <h4>Average</h4>
      <p>good: {good / total}</p>
      <p>neutral: {neutral / total}</p>
      <p>bad: {-bad / total}</p>
      <p>Positive feedback {(good / total) * 100}%</p>
    </>
  );
};

export default Statistics;
