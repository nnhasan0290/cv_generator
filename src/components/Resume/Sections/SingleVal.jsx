import { BsPen, BsTrash } from "react-icons/bs";
import IconButton from "../../Common/IconButton";
import { useState } from "react";
import DefaultForm from "./ DefaultForm";
import { GlobalSettingContext } from "../../../utils/SettingContext";

const SingleVal = ({ value, section_id }) => {
  const { dispatch } = GlobalSettingContext();
  return (
    <div className="sectionItem">
      <div className="sectionItem__single">
        {Object.keys(value).map((val, i) => (
          <>
            {val !== "id" && (
              <>
                {val === "skill" || val === "experience" ? (
                  <span key={i} >{value[val]}</span>
                ) : (
                  <p key={i}>{value[val]}</p>
                )}
              </>
            )}
          </>
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
