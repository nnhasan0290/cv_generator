const Button = ({ children, type }) => {
  const primary = "#007BFF";
  const secondary = "#6C757D";
  const bg = type === "primary" ? primary : secondary;
  return (
    <button className="common__button" style={{ backgroundColor: bg }}>
      {children}
    </button>
  );
};

export default Button;
