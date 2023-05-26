const Button = ({ children, onClick, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className="common__button"
    >
      {children}
    </button>
  );
};

export default Button;
