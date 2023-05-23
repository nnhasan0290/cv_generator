import { createContext, useContext, useEffect, useReducer } from "react";
import useLocalStorage from "./useLocalStorage";

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
      { label: "school", type: "text", name: "school" },
      { label: "degree", type: "text", name: "degree" },
      { label: "field of study", type: "text", name: "field" },
      { label: "location", type: "text", name: "location" },
    ],
    addedItems: [],
  },
  {
    id: "2",
    activated: true,
    title: "Experience",
    formItems: [
      { label: "position", type: "text", name: "position" },
      { label: "company name", type: "text", name: "company" },
      { label: "location", type: "text", name: "location" },
      { label: "description", type: "text", name: "description" },
    ],
    addedItems: [],
  },
  {
    id: "3",
    activated: true,
    title: "Skills",
    formItems: [
      { label: "Skill", type: "text", name: "skill" },
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
        name: "experience",
      },
    ],
    addedItems: [],
  },
  {
    id: "4",
    activated: false,
    title: "Soft Skills",
    formItems: [{ label: "Skills", type: "text", name: "skill" }],
    addedItems: [],
  },
];

const initialSettings = {
  ...themeConfig.dark,
  sections,
  identity: {
    name: "Your Name",
    location: "Your Location",
    phone: "01521408381",
    email: "sample@gmail.com",
    summary: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sagittis Cum Iaculis, Potenti Parturient A Scelerisque Aptent Curae Nostra Mattis Ante Pellentesque, Aliquam Nibh Feugiat Senectus Nulla Nullam Convallis Accumsan Tempus. Eros Vulputate Cursus Posuere Odio Ligula Fringilla Pulvinar Curabitur Dapibus, Facilisi Ultricies Aptent Fames Class Gra",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      if (state.theme === "dark") {
        return { ...state, ...themeConfig.light };
      } else {
        return { ...state, ...themeConfig.dark };
      }
    case "LOCALSTORAGE_CHECK":
      return { ...state, ...action.payload };

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
    case "UPDATE_SECTION": {
      [...state.sections]
        .find((section) => section.id === action.payload.id)
        .addedItems.push(action.payload.values);

      return { ...state };
    }
    case "DELETE_SECTION_VALUE": {
      const find_section = [...state.sections].find(
        (section) => section.id === action.payload.section_id
      );
      const value_index = find_section.addedItems.findIndex(
        (value) => value.id === action.payload.value_id
      );
      find_section.addedItems.splice(value_index, 1);
      return { ...state };
    }
    case "UPDATE_IDENTITY": {
      state.identity = action.payload;
      return { ...state };
    }
  }
};

const SettingContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSettings);
  const [storedValue, setValue] = useLocalStorage("context", {});

  useEffect(() => {
    dispatch({ type: "LOCALSTORAGE_CHECK", payload: storedValue });
  }, []);

  useEffect(() => {
    setValue(state);
  }, [state]);

  return (
    <SettingContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingContext.Provider>
  );
};

export default ContextProvider;

export const GlobalSettingContext = () => useContext(SettingContext);
