import { createContext, useContext, useReducer } from "react";

const themeConfig = {
  dark: {
    theme: "dark",
    color: "#ffffffb3",
    bg: "#00040f",
  },
  light: {
    theme: "light",
    color: "black",
    bg: "white",
  },
};

const initialSettings = { ...themeConfig.dark };


const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      if (state.theme === "dark") {
        return { ...state, ...themeConfig.light };
      } 
      else{
        return {...state, ...themeConfig.dark}
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
