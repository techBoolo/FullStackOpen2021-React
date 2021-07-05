const Statistic = ({ text, value, percent }) => {

  return (
    <tr>
      <td>{text}</td> 
      <td>{ value } { percent ? '%' : ''}</td>
    </tr>
  );
};
export default Statistic;
