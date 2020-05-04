import React from "react";

const MatterContext = React.createContext(null);

const MatterProvider = MatterContext.Provider;

export { MatterProvider, MatterContext };
