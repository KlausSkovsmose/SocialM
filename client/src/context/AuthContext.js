import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "61ad25e165121f2422da19bd",
    username: "klaus",
    email: "k@k.com",
    profilePicture: "tfue.jpg",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: [],
  },

  // User is null because we haven't logged in yet
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
