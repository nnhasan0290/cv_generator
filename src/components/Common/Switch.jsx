const Switch = () => {
    //global contexts
    
    return (
      <div className="filter">
        <label className="filter__switch">
          {/* hidden checkbox to control the button */}
          <input
            className="filter__switch__checkbox"
            type="checkbox"
          />
          <span className="filter__switch__slider"></span>
        </label>
      </div>
    );
  };
  
  export default Switch;