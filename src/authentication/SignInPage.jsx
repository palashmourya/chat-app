import logo from "./../../src/logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import chatTalk from "./../../src/chattalk.png";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onClickSignIn = async (e) => {
    try {
      e.preventDefault();
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      setError("Incorrect user or password");
    }
  };

  return (
    <div className="container">
      <img className="signImg" src={logo} alt="chit chat" />
      <h1 className="signIn-h1">Sign In to Chat me</h1>
      {error ? (
        <div
          className="alert alert-danger"
          style={{
            width: 400,
            height: 60,
            margin: "auto",
            textAlign: "center",
          }}
        >
          <p>{error}</p>
        </div>
      ) : null}
      <div className="card mt-5">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                className="form-control mt-2"
                type="text"
                id="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                className="form-control mt-2"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-success form-control mt-4"
              onClick={onClickSignIn}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
