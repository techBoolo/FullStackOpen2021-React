import Display from './Display';

const History = ({ allClicks }) => {
  if(allClicks.length === 0){
    return (
      <p>Press the buttons</p>
     )
  }
  return (
    <div>
      <p>button press History: <Display value={ allClicks.join(', ') } /></p>       
    </div>
  );
};

export default History;
