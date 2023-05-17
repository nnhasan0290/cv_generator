const Button = ({ children, onClick, bg, isLoading }) => {
  return (
    <button disabled={isLoading} onClick={onClick} className="common__button" style={{ backgroundColor: bg ? bg : "gray" }}>
      {!isLoading ? children : (<span className="common__button__loader"></span>)}
    </button>
  );
};

export default Button;
