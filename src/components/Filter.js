const Filter = ({ searchTerm, searchPeople }) => {

  return (
    <>
      S: <input value={searchTerm} onChange={searchPeople} />
    </>
  );
};

export default Filter;
