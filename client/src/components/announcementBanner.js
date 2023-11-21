import './announcementBannerStyles.css';
import { Link } from "react-router-dom";

const AnnouncementBanner = () => {
  return (
    <div className="announcementBanner">
      <h6>
        World Congress: AMR in Plants <a href="https://forms.gle/HZSMQjScvGx7TwvA7" target="_blank"> Register Now!</a> <Link style={{marginLeft: 15}} to='/world-congress'>Learn More</Link>
      </h6>
    </div>
  );
};

export default AnnouncementBanner;
