const DefaultInput = ({ label, type, options }) => {
  return (
    <div className="formItem">
      {type === "select" && (
        <>
          <label className="formItem__label" htmlFor="">
            {label}
          </label>
          <select className="formItem__input">
            <option>-----</option>
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
          <input className="formItem__input" type={type} />
        </>
      )}
    </div>
  );
};

export default DefaultInput;
