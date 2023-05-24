import { useFormContext } from "react-hook-form";

const DefaultInput = ({ label, type, options, name }) => {
  const {register} = useFormContext()
  return (
    <div className="formItem">
      {type === "select" && (
        <>
          <label className="formItem__label" htmlFor="">
            {label}
          </label>
          <select required {...register(name)} className="formItem__input">
            {options.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </select>
        </>
      )}
      {type === "text" && (
        <>
          <label className="formItem__label" htmlFor="">
            {label}
          </label>
          <input required {...register(name)} className="formItem__input" type={type} />
        </>
      )}
      {type === "textarea" && (
        <>
          <label className="formItem__label" htmlFor="">
            {label}
          </label>
          <textarea rows={4} required {...register(name)}  className="formItem__input"></textarea>
        </>
      )}
    </div>
  );
};

export default DefaultInput;
