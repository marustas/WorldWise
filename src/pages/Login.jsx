import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import PageNav from "../components/PageNav";
import { useAuth } from "../context/FakeAuthContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("1234");
  const { login, isAuthorized } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthorized) {
        navigate("/app", { replace: true });
      }
    },
    [isAuthorized, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" className={styles.login}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
