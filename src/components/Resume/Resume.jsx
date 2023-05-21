import Identity from "./Sections/Identity";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DefaultSection from "./Sections/DefaultSection";
import { GlobalSettingContext } from "../../utils/SettingContext";



const Resume = () => {
  const {state:{sections, color, font}, dispatch} = GlobalSettingContext()
  return (
    <div className="bbb-container resume" style={{fontFamily: font, color: color}}>
      <Identity />
      <DragDropContext
         onDragEnd={({ source, destination }) => {
           console.log(source, destination);
          if (source.index === destination.index) return;
          dispatch({
            type: "UPDATE_ACTIVATED_DRAGEND",
            payload: { source: source.index, destination: destination.index },
          });
        }}
      >
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}
              className="resume__details"
            >
              {sections.filter((each) => each.activated).map((section, index) => (
                <DefaultSection
                  key={section.id}
                  index={index}
                  id={section.id}
                  title={section.title}
                  values={section.addedItems}
                  formItems={section.formItems}
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
