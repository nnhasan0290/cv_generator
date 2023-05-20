import { BsPen } from "react-icons/bs";
import IconButton from "../../Common/IconButton";
import { useState } from "react";
import DefaultForm from "./ DefaultForm";

const Identity = () => {
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  return (
    <div className="identity">
      {editMode ? (
        <DefaultForm
          items={[
            { label: "name", type: "text" },
            { label: "Location", type: "text" },
            { label: "Phone number", type: "text" },
            { label: "Email address", type: "text" },
          ]}
          onSubmit={handleSubmit}
          onClose={() => setEditMode(false)}
        />
      ) : (
        <div className="identity__details" onClick={() => setEditMode(true)}>
            <div className="identity__title">Name</div>
          
          <div>
            <p>Location</p>
            <p>Phone number</p>
            <p>Email Address</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Identity;
