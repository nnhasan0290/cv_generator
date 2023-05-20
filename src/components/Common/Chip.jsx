import { BsPlus } from "react-icons/bs";

const Chip = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className="chip">
      {" "}
      <BsPlus size={22} /> 
      <span>Add {value}</span>
    </div>
  );
};

export default Chip;
