import { Link } from "react-router-dom";
import "./headerStyles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_brandname">
        <Link to="/">
          <img
            alt="logo"
            width={100}
            height={100}
            src={require("../assets/logo.png")}
          />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 style={{ fontSize: 25, color: "black" }}>Thaavaram</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
