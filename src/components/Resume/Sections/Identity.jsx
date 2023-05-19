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
        />
      ) : (
        <>
          <div className="identity__head">
            <div className="identity__title">Name</div>
            <IconButton
              onClick={() => {
                setEditMode(true);
              }}
              icon={<BsPen />}
            />
          </div>
          <div>
            <p>Location</p>
            <p>Phone number</p>
            <p>Email Address</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Identity;
