import Identity from "./Sections/Identity";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DefaultSection from "./Sections/DefaultSection";

const arr = [
  {
    id: '1',
    title: "Education",
    details: ["subject one", "subject one", "subject one"],
  },
  {
    id: '2',
    title: "Experience",
    details: ["subject one", "subject one", "subject one"],
  },
  {
    id: '3',
    title: "Skills",
    details: ["subject one", "subject one", "subject one"],
  },
];

const Resume = () => {
  return (
    <div className="bbb-container resume">
      <Identity />
      <DragDropContext
        onDragEnd={() => {
          console.log("dragend");
        }}
      >
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}
              className="resume__details"
            >
              {arr.map((each, index) => (
                <DefaultSection
                  key={each.id}
                  index={index}
                  id={each.id}
                  title={each.title}
                  details={each.details}
                />
              ))}
              
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Resume;
