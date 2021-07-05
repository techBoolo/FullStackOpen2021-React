import Statistic from './Statistic';
const Statistics = ({ stat }) => {
  const { good, bad, neutral, total } = stat;
  if(total === 0) 
    return <p>no feedback yet</p>
  return (
    <>
      <table>
      <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='Total' value={total} />
        </tbody>
      </table>
      <h4>Average</h4>
      <table>
        <tbody>
          <Statistic text='good' value={ good / total } />
          <Statistic text='neutral' value={ neutral / total } />
          <Statistic text='bad' value={ bad / total } />
          <Statistic text='Positive feedback' value={(good / total) * 100} percent='%' />
        </tbody>
      </table>
      </>
  );
};

export default Statistics;
