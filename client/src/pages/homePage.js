import React from "react";
import "./homePageStyles.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import AnnouncementBanner from '../components/announcementBanner';

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <AnnouncementBanner />
      <div className="homepage_section_2">
        <img
          alt="img"
          className="homepage_section_2_img"
          src={require("../assets/forest_img.jpg")}
        />
        <div className="homepage_section_2_txt">
          <h2>A Comprehensive Surveillance System for Plant AMR</h2>
          <p>
            Currently, there are no global surveillance systems to monitor
            resistant pathogens that affect plants. We want to change that.
          </p>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Link to="/browse">
              <Button style={{ fontSize: 13 }} size="large" variant="contained">
                Browse Data
              </Button>
            </Link>

            <Link to="/submit">
              <Button style={{ fontSize: 13 }} size="large" variant="contained">
                Submit Data
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="homepage_section_3">
        <h1 className="homepage_section_3_title">About Us</h1>

        <div className="homepage_section_3_cards">
          <div className="homepage_section_3_card">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={require("../assets/streptococci.jpg")}
              />
              <CardContent sx={{ height: 180 }}>
                <p style={{ fontSize: 15 }}>
                  Data on antimicrobial resistance is most available in the
                  human health and animal sectors. Currently, there is a dearth
                  of data on AMR in the plant sector.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="homepage_section_3_card">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={require("../assets/plants.jpg")}
              />
              <CardContent sx={{ height: 180 }}>
                <p style={{ fontSize: 15 }}>
                  Research and data collection on AMR in the plant sector is
                  crucial to maintain the world's food supply.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="homepage_section_3_card">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={require("../assets/map.jpg")}
              />
              <CardContent sx={{ height: 180 }}>
                <p style={{ fontSize: 15 }}>
                  We at Thaavaram, aim to create a proactive global plant AMR
                  surveillance system. By aggregating and providing plant AMR
                  data, we hope to kick-start research on plant AMR.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="homepage_section_3_card">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={require("../assets/rice_farmers.jpg")}
              />
              <CardContent sx={{ height: 180 }}>
                <p style={{ fontSize: 15 }}>
                  Thaavaram empowers farmers. We invite both farmers and
                  academia to submit data to us. This gives local farmers, who
                  are most impacted by plant AMR, a chance to join the fight
                  against plant AMR.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="homepage_section_2 announcement">
        <div className="homepage_section_2_txt">
          <h2>First World Congress on AMR Incidence in Plants</h2>
          <p>
            To combat AMR incidence in plants, Thaavaram is hosting the first
            ever world congress on plant AMR on 5th June, 2024 at Boston
            University. Registration is free!
          </p>
          <a href="https://forms.gle/HZSMQjScvGx7TwvA7" target="_blank">
            <Button style={{ fontSize: 13, margin: 10 }} size="large" variant="contained">
              Register
            </Button>
          </a>
          <Link to="/register">
            <Button style={{ fontSize: 13, margin: 10 }} size="large" variant="contained">
              Learn More
            </Button>
          </Link>
        </div>
        <img
          alt="img"
          className="homepage_section_2_img"
          src={require("../assets/conference.jpg")}
        />
      </div>

      <div className="homepage_section_4">
        <div className="homepage_section_4_submit">
          <h2 className="homepage_section_3_title">Submit</h2>
          <p style={{ fontSize: 15 }}>Submit data to the Thaavaram Database</p>
          <Link to="/submit">
            <Button style={{ fontSize: 13 }} size="large" variant="contained">
              Submit
            </Button>
          </Link>
        </div>
        <div className="homepage_section_4_browse">
          <h2 className="homepage_section_3_title">Browse</h2>
          <p style={{ fontSize: 15 }}>
            Access our curated plant AMR data for your research
          </p>
          <Link to="/browse">
            <Button style={{ fontSize: 13 }} size="large" variant="contained">
              Browse
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
