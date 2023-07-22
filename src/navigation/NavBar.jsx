import { Link } from "react-router-dom";
import Logo from "./../../src/logo.webp";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import chatTalk from "./../../src/chattalk.png";
// import talker from "./../../src/talker.jfif";

const NavBar = ({ user }) => {
  const navigate = useNavigate();
  const onSignOut = async () => {
    try {
      await signOut(getAuth());
      navigate("/sign-in");
    } catch (e) {
      console.log("Error while signing out:", e);
    }
  };
  return (
    <nav className="navbar border-bottom bg-light">
      <Link to="/" className="nav-link">
        <img
          className="nav-img"
          src={Logo}
          alt="chat me logo"
          // style={{
          //   width: 50,
          //   height: 50,
          // }}
        ></img>
        <h5
          className="nav-h5"
          // style={{
          //   color: "black",
          //   display: "inline",
          // }}
        >
          {" "}
          Chat Me
        </h5>
      </Link>
      {user ? (
        <div>
          <label className="mx-2">
            Logged in as <strong>{user.email}</strong>
          </label>
          <button className="btn btn-danger mx-2" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      ) : null}
    </nav>
  );
};
export default NavBar;
