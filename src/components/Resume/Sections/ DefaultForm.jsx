import { BsTrash } from "react-icons/bs";
import Button from "../../Common/Button";
import IconButton from "../../Common/IconButton";
import DefaultInput from "./DefaultInput";
import { RxCross1 } from "react-icons/rx";
import { FormProvider, useForm } from "react-hook-form";
import { GlobalSettingContext } from "../../../utils/SettingContext";
import { v4 as uuidv4 } from "uuid";

const allValuesEmpty = (obj) => {
  for (let value of Object.values(obj)) {
    if (value !== null && value !== undefined && value !== "") {
      return false;
    }
  }
  return true;
};

const DefaultForm = ({
  items,
  onClose,
  section_id,
  initialVal = {},
  identity,
}) => {
  const methods = useForm({
    defaultValues: initialVal,
  });

  const { dispatch } = GlobalSettingContext();

  const onSubmit = (values) => {
    if (allValuesEmpty(values)) return;
    if (identity) {
      dispatch({
        type: "UPDATE_IDENTITY",
        payload: values,
      });
    } else {
      dispatch({
        type: "UPDATE_SECTION",
        payload: { id: section_id, values: { id: uuidv4(), ...values } },
      });
    }

    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form
        className="defaultForm"
        action=""
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {items.map((item, i) => (
          <DefaultInput
            key={i}
            label={item.label}
            type={item.type}
            options={item.options}
            name={item.name}
          />
        ))}
        <div className="form__btns">
          <input className="defaultForm__submit" type="Submit" value="Save" />
          <div className="form__btns__icon">
            <IconButton onClick={onClose} icon={<RxCross1 />} />
            {/* <IconButton icon={<BsTrash />} /> */}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default DefaultForm;
