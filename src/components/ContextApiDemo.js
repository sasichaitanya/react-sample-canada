import react from "react";

const userDetails = react.createContext()

const UserProvider = userDetails.Provider;
const UserConsumer = userDetails.Consumer;

export { UserProvider, UserConsumer }