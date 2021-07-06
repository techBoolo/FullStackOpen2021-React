const PersonForm = (props) => {
  const { handleSubmit, name, number, handleNameChange, handleNumberChange } = props;
  return (
    <form onSubmit={handleSubmit}>
      N: <input value={name} onChange={handleNameChange} /><br />
      Nu: <input value={number} onChange={handleNumberChange} /><br />
      <button type='submit'>add</button>
    </form>
  );
};

export default PersonForm;
