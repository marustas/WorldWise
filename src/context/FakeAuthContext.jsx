import { createContext, useContext, useReducer } from "react";

const FakeAuthContext = createContext();

const initialState = {
  user: null,
  isAuthorized: false,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "login":
      return { ...state, user: payload, isAuthorized: true };
    case "logout":
      return { ...state, user: null, isAuthorized: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Stas",
  email: "jack@example.com",
  password: "1234",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthorized }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <FakeAuthContext.Provider value={{ user, isAuthorized, login, logout }}>
      {children}
    </FakeAuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(FakeAuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
