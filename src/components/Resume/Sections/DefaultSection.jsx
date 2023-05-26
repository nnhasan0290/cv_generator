import { Draggable } from "react-beautiful-dnd";
import SectionHead from "../../Common/SectionHead";
import { GlobalSettingContext } from "../../../utils/SettingContext";
import { useState } from "react";
import DefaultForm from "./ DefaultForm";
import Chip from "../../Common/Chip";
import SingleVal from "./SingleVal";

const DefaultSection = ({ title, id, index, formItems, values }) => {
  const { state } = GlobalSettingContext();
  const [showForm, setShowForm] = useState(false);


  const style = state.isMobile ? {} : { ...state.template.sectionStyle };

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className="section"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="section__inner" style={style}>
            <div className="section__head">
              <SectionHead>{title}</SectionHead>
            </div>
            <div className="section__item">
              {showForm ? (
                <DefaultForm
                  section_id={id}
                  onClose={() => setShowForm(false)}
                  items={formItems}
                />
              ) : (
                <>
                  <div>
                    {values.map((value, i) => {
                      return (
                        <SingleVal section_id={id} value={value} key={i} />
                      );
                    })}
                  </div>
                  <Chip onClick={() => setShowForm(true)} value={title} />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DefaultSection;
