import { useRef, useState } from "react";
import { BsDownload, BsEye, BsPlusLg } from "react-icons/bs";
import useOutsideClickHandler from "../../utils/isClickedOnOutside";

const SpeedDial = () => {
  const [showOpt, setShowOpt] = useState(false);
  const speedDialRef = useRef(null);
  useOutsideClickHandler(speedDialRef, () => {
    setShowOpt(false);
  });

  return (
    <div className="speedDial" ref={speedDialRef}>
      {showOpt && (
        <div className="speedDial__options">
          <button className="speedDial__option">
            <BsDownload />
          </button>
          <button className="speedDial__option">
            <BsEye />
          </button>
        </div>
      )}
      <button
        onClick={() => setShowOpt(!showOpt)}
        className={`speedDial__button ${showOpt && "speedDial__button--transform"}`}
      >
        <BsPlusLg size={22} />
      </button>
    </div>
  );
};

export default SpeedDial;
