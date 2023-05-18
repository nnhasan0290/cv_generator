import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Switch from "../Common/Switch";
import { GlobalSettingContext } from "../../utils/SettingContext";

const Sections = () => {
  const {
    state: { sections },
    dispatch,
  } = GlobalSettingContext();

  return (
    <div className="resume__sections">
      <h2>Sections</h2>
      <DragDropContext
        onDragEnd={({ source, destination }) => {
          if (source.index === destination.index) return;
          dispatch({
            type: "UPDATE_DRAGEND",
            payload: { source: source.index, destination: destination.index },
          });
        }}
      >
        <Droppable droppableId="droppable__section">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="section__items"
            >
              {sections.map((section, i) => (
                <Draggable key={section.id} draggableId={section.id} index={i}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      className="single__item"
                      id={section.id}
                    >
                      <span>{section.title}</span>
                      <Switch
                        onChange={() =>
                          dispatch({
                            type: "UPDATE_ACTIVATION",
                            payload: { id: section.id },
                          })
                        }
                        checked={section.activated}
                      />
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
