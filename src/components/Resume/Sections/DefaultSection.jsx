import { Draggable } from "react-beautiful-dnd";
import SectionHead from "../../Common/SectionHead";
import IconButton from "../../Common/IconButton";
import { BsPen, BsTrash } from "react-icons/bs";

const DefaultSection = ({ title, details, id, index }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className="section"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <SectionHead>{title}</SectionHead>
          <div className="section__item">
            <div className="section__details">
              {details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
            <div className="section__btn">
              <IconButton icon={<BsPen/>} />
              <IconButton icon={<BsTrash/>} />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DefaultSection;
