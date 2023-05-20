const Button = ({ children, onClick, isLoading, color }) => {
  return (
    <button style={{backgroundColor: color}} disabled={isLoading} onClick={onClick} className="common__button" >
      {!isLoading ? children : (<span className="common__button__loader"></span>)}
    </button>
  );
};

export default Button;
