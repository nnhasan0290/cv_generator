import { BsTrash } from "react-icons/bs";
import Button from "../../Common/Button";
import IconButton from "../../Common/IconButton";
import DefaultInput from "./DefaultInput";
import { RxCross1 } from "react-icons/rx";

const DefaultForm = ({ onSubmit, items, onClose }) => {

  return (
    <form className="defaultForm" action="" onSubmit={onSubmit}>
      {items.map((item, i) => (
        <DefaultInput
          key={i}
          label={item.label}
          type={item.type}
          options={item.options}
        />
      ))}
      <div className="form__btns">
        <input className="defaultForm__submit" type="Submit" value="Save" />
        <div className="form__btns__icon">
          <IconButton onClick={onClose} icon={<RxCross1 />} />
          <IconButton icon={<BsTrash />} />
        </div>
      </div>
    </form>
  );
};

export default DefaultForm;
