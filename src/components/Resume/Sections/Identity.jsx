import { BsPen, BsPenFill } from "react-icons/bs";
import IconButton from "../../Common/IconButton";
import { useState } from "react";
import DefaultForm from "./ DefaultForm";
import { GlobalSettingContext } from "../../../utils/SettingContext";

const Identity = () => {
  const [editMode, setEditMode] = useState(false);
  const {state} = GlobalSettingContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  return (
    <div className="identity">
      {editMode ? (
        <DefaultForm
          items={[
            { label: "name", type: "text", name: "name" },
            { label: "Location", type: "text", name: "location" },
            { label: "Phone number", type: "text", name: "phone" },
            { label: "Email address", type: "text", name: "email" },
            { label: "Summmary", type: "textarea", name: "summary" },
          ]}
          onSubmit={handleSubmit}
          onClose={() => setEditMode(false)}
          initialVal={state.identity}
          identity
        />
      ) : (
        <div className="identity__details" >
          <div className="identity_detail__inner">
            <div className="identity__title">{state.identity.name}</div>
            <div className="identity__values">
              <div>
                <p>{state.identity.location}</p>
                <p>{state.identity.phone}</p>
                <p>{state.identity.email}</p>
              </div>
              <div>
                <p>{state.identity.summary}</p>
              </div>
            </div>
          </div>
          <div className="section__btn">
            <IconButton onClick={() => setEditMode(true)} icon={<BsPen />} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Identity;
