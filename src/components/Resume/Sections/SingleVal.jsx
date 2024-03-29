import { BsTrash } from "react-icons/bs";
import IconButton from "../../Common/IconButton";
import { GlobalSettingContext } from "../../../utils/SettingContext";

const SingleVal = ({ value, section_id }) => {
  const { dispatch } = GlobalSettingContext();
  return (
    <div className="sectionItem">
      <div className="sectionItem__single">
        {Object.keys(value).map((val, i) => (
          <span className="each_skill" key={i}>
            {val !== "id" && (
              <>
                {val === "skill" || val === "experience" ? (
                  <span  className={`${val === "skill" && "skill__item"}`} >{value[val]}</span>
                ) : (
                  <p >{value[val]}</p>
                )}
              </>
            )}
          </span>
        ))}
      </div>
      <div className="section__btn">
        <IconButton
          onClick={() => {
            dispatch({
              type: "DELETE_SECTION_VALUE",
              payload: { section_id, value_id: value.id },
            });
          }}
          icon={<BsTrash />}
        />
      </div>
    </div>
  );
};

export default SingleVal;
