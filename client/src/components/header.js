import { Link } from "react-router-dom";
import "./headerStyles.css";
import { slide as Menu } from 'react-burger-menu';

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
          <h1 style={{ fontSize: 25 }}>Thaavaram</h1>
        </Link>
      </div>

      <Menu right className="header_links">
        <Link to='/' className="header_link">Home</Link>
        <Link to='/register' className="header_link">World Congress on AMR Incidence in Plants</Link>
        <Link to='/submit' className="header_link">Submit</Link>
        <Link to='/browse' className="header_link">Browse</Link>
      </Menu>
    </div>
  );
};

export default Header;
