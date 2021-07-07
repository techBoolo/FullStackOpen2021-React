const Notification = ({message}) => {
  if(!message.message) return null
  return (
    <div className={`message ${message.messageType}`}>
      { message.message } 
    </div>
  );
};

export default Notification;
