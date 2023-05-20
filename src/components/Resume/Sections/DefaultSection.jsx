import { Draggable } from "react-beautiful-dnd";
import SectionHead from "../../Common/SectionHead";
import { BsPen, BsTrash } from "react-icons/bs";
import IconButton from "../../Common/IconButton";
import { GlobalSettingContext } from "../../../utils/SettingContext";
import { useState } from "react";
import DefaultForm from "./ DefaultForm";
import Chip from "../../Common/Chip";

const DefaultSection = ({ title, id, index, formItems }) => {
  const { state, dispatch } = GlobalSettingContext();
  const [showForm, setShowForm] = useState(false);
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    dispatch({type: "UPDATE_SECTION", payload: {id: id, values: {school: "high school"}}})
  };
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className="section"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="section__head">
            <SectionHead>{title}</SectionHead>
            {/* <div className="section__btn">
              <IconButton
                icon={<BsPen />}
                onClick={() => setShowForm(!showForm)}
              />
              <IconButton
                onClick={() => {
                  dispatch({ type: "UPDATE_ACTIVATION", payload: { id: id } });
                }}
                icon={<BsTrash />}
              />
            </div> */}
          </div>
          <div className="section__item">
            {showForm ? (
              <DefaultForm onClose={() => setShowForm(false)} items={formItems} onSubmit={handleSubmit} />
            ) : (
              <>
                <div>
                  {/* <div className="section__details" onClick={() => setShowForm(true)}>
                    <p>section details</p>
                    <p>section details</p>
                    <p>section details</p>
                  </div> */}
                </div>
                <Chip onClick={() => setShowForm(true)} value={title} />
              </>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DefaultSection;
