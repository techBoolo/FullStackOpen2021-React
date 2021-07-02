const History = ({ allClicks }) => {
  if(allClicks.length === 0){
    return (
      <p>Press the buttons</p>
     )
  }
  return (
    <div>
      button press History: { allClicks.join(', ') }       
    </div>
  );
};

export default History;
