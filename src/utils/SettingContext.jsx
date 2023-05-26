import { createContext, useContext, useEffect, useReducer } from "react";
import useLocalStorage from "./useLocalStorage";
import settings from "../assets/data";
import { reducer } from "./reducer";


const SettingContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {...settings});
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
