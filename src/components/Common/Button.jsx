const Button = ({ children, onClick, isLoading, color }) => {
  return (
    <button style={{backgroundColor: color}} disabled={isLoading} onClick={onClick} className="common__button" >
     {children}
    </button>
  );
};

export default Button;
