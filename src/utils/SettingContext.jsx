import { createContext, useContext, useReducer } from "react";

const themeConfig = {
  dark: {
    theme: "dark",
    color: "#ffffffb3",
    bg: "#00040f",
    font: "auto",
  },
  light: {
    theme: "light",
    color: "#000",
    bg: "white",
    font: "auto",
  },
};

const sections = [
  {
    id: "1",
    activated: true,
    title: "Education",
    formItems: [
      { label: "school", type: "text" },
      { label: "degree", type: "text" },
      { lable: "field of study", type: "text" },
      { label: "location", type: "text" },
    ],
  },
  {
    id: "2",
    activated: true,
    title: "Experience",
    formItems: [
      { label: "position", type: "text" },
      { label: "company name", type: "text" },
      { label: "location", type: "text" },
      { label: "description", type: "text" },
    ],
  },
  {
    id: "3",
    activated: true,
    title: "Skills",
    formItems: [
      { label: "Skills", type: "text" },
      {
        label: "Years of experience",
        type: "select",
        options: [
          "1 year",
          "2 years",
          "3 years",
          "4 years",
          "5 years",
          "6 years",
          "7 years",
          "10+ years",
        ],
      },
    ],
  },
  {
    id: "4",
    activated: false,
    title: "Soft Skills",
    formItems: [
      { label: "Skills", type: "text" },
      {
        label: "Years of experience",
        type: "select",
        options: ["1 year", "2 years", "3 years"],
      },
    ],
  },
];

const initialSettings = { ...themeConfig.dark, sections };

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      if (state.theme === "dark") {
        return { ...state, ...themeConfig.light };
      } else {
        return { ...state, ...themeConfig.dark };
      }
    case "UPDATE_ACTIVATION":
      [...state.sections].map((section) => {
        if (section.id === action.payload.id) {
          section.activated = !section.activated;
        }
        return section;
      });
      return { ...state };
    case "UPDATE_DRAGEND": {
      const newItems = [...state.sections];
      const [removed] = newItems.splice(action.payload.source, 1);
      newItems.splice(action.payload.destination, 0, removed);
      return { ...state, sections: newItems };
    }

    case "UPDATE_ACTIVATED_DRAGEND": {
      const newItems = [...state.sections];
      const filtered = newItems.filter((each) => each.activated);

      const sourceIndex = newItems.findIndex(
        (each) => each === filtered[action.payload.source]
      );
      const destinationIndex = newItems.findIndex(
        (each) => each === filtered[action.payload.destination]
      );

      const [removed] = newItems.splice(sourceIndex, 1);
      newItems.splice(destinationIndex, 0, removed);
      return { ...state, sections: newItems };
    }
    case "CHANGE_ITEM": {
      return { ...state, [action.payload.property]: action.payload.value };
    }
  }
};

const SettingContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSettings);

  return (
    <SettingContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingContext.Provider>
  );
};

export default ContextProvider;

export const GlobalSettingContext = () => useContext(SettingContext);
