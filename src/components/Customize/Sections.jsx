import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Switch from "../Common/Switch";

const arra = [
  {
    id: "1",
    content: "item one",
  },
  {
    id: "2",
    content: "item one",
  },
  {
    id: "3",
    content: "item one",
  },
  {
    id: "4",
    content: "item one",
  },
];

const Sections = () => {
  return (
    <div className="resume__sections">
      <h2>Sections</h2>
      <DragDropContext onDragEnd={() => console.log("drageend")}>
        <Droppable droppableId="droppable__section">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="section__items"
            >
              {arra.map((each, i) => (
                <Draggable key={each.id} draggableId={each.id} index={i} >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      className="single__item"
                      id={each.id}
                    >
                      <span>Item One</span>
                      <Switch />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Sections;
