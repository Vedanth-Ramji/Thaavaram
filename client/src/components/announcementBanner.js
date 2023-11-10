import { Link } from "react-router-dom";
import './announcementBannerStyles.css';

const AnnouncementBanner = () => {
  return (
    <div className="announcementBanner">
      <p>
        Registration for the First World Congress on AMR Incidence in Plants
        hosted by Thaavaram is open! <Link to="/register">Register Now</Link>
      </p>
    </div>
  );
};

export default AnnouncementBanner;
