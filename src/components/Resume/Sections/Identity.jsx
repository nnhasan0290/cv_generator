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
            { label: "name", type: "text", name: "name" },
            { label: "Location", type: "text", name: "location" },
            { label: "Phone number", type: "text", name:"phone" },
            { label: "Email address", type: "text", name: "email" },
            {label: "Summmary", type: "textarea", name: "summary"}
          ]}
          onSubmit={handleSubmit}
          onClose={() => setEditMode(false)}
          initialVal={{name: "nazmul"}}
        />
      ) : (
        <div className="identity__details" onClick={() => setEditMode(true)}>
          <div className="identity__title">Name</div>

          <div className="identity__values">
            <div>
              <p>Location</p>
              <p>Phone number</p>
              <p>Email Address</p>
            </div>
            <div>
              <p>this is a summary</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Identity;
