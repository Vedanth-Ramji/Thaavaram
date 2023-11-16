import { Link } from "react-router-dom";
import './footerStyles.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className="footer">
      <Link to='/' className="brand">
        <h1>Thaavaram</h1>
      </Link>

      <a href="https://in.linkedin.com/company/thaavaram?trk=ppro_cprof" target="_blank" rel="noopener noreferrer">
      <Button>
        <LinkedInIcon />
      </Button>
      </a>
    </div>
  );
};

export default Footer;
