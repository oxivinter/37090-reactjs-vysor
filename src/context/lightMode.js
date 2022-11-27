import { useState, createContext } from "react";

const LightModeContext = createContext();

const LightModeProvider = (props) => {
  const [lightMode, setLightMode] = useState(false);
  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {props.children}
    </LightModeContext.Provider>
  );
};

export { LightModeContext, LightModeProvider };
