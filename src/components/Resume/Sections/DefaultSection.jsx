import { Draggable } from "react-beautiful-dnd";
import SectionHead from "../../Common/SectionHead";
import { BsPen, BsTrash } from "react-icons/bs";
import IconButton from "../../Common/IconButton";
import { GlobalSettingContext } from "../../../utils/SettingContext";

const DefaultSection = ({ title, id, index }) => {
  const { dispatch } = GlobalSettingContext();
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
            <div className="section__btn">
              <IconButton icon={<BsPen />} />
              <IconButton
                onClick={() => {
                  dispatch({ type: "UPDATE_ACTIVATION", payload: { id: id } });
                }}
                icon={<BsTrash />}
              />
            </div>
          </div>
          <div className="section__item">
            <div className="section__details">
              {/* {details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))} */}
              <p>section details</p>
              <p>section details</p>
              <p>section details</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DefaultSection;
