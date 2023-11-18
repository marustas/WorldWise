import { createContext, useContext, useReducer } from "react";

const FakeAuthContext = createContext();

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  user: null,
  isAuthorized: false,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "login":
      //...state makes code more futureproof
      return { ...state, user: payload, isAuthorized: true };

    case "logout":
      return { ...state, user: null, isAuthorized: false };

    default:
      throw new Error("Unknown action type");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthorized }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }

    function logout() {
      dispatch({ type: "logout" });
    }

    return (
      <FakeAuthContext.Provider vlaue={{ user, isAuthorized, login, logout }}>
        {children}
      </FakeAuthContext.Provider>
    );
  }
}

function useAuth() {
  const context = useContext(FakeAuthContext);
  if (context === undefined) {
    throw new Error("Authentication context was used outside the AuthProvider");
  }
  return context;
}

export { useAuth, FakeAuthContext };
