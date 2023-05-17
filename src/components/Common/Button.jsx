const Button = ({ children, onClick, isLoading }) => {
  return (
    <button disabled={isLoading} onClick={onClick} className="common__button" >
      {!isLoading ? children : (<span className="common__button__loader"></span>)}
    </button>
  );
};

export default Button;
