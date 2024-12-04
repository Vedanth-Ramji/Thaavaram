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
      {/* <AnnouncementBanner /> */}
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

      <div style={{textAlign: 'center'}} className="homepage_section_3">
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
      
      <div className="homepage_section_5" style={{backgroundColor: '#13005A', color: 'white'}}>
        <h2 className="homepage_section_3_title">Our Impact</h2>

        <a href="https://sdgs.un.org/goals/goal15" target="_blank">
          <img style={{padding: 20}} width={200} src={require("../assets/sdg15.png")} alt="Sustainable Development Goal #15" />
        </a>
        <a href="https://sdgs.un.org/goals/goal3"  target="_blank">
          <img style={{padding: 20}} width={200} src={require("../assets/sdg3.png")} alt="Sustainable Development Goal #3" />
        </a>
        <a href="https://sdgs.un.org/goals/goal17"  target="_blank">
          <img style={{padding: 20}} width={200} src={require("../assets/sdg17.png")} alt="Sustainable Development Goal #17" />
        </a>
      </div>
      
      <div className="homepage_section_5">
        <h2 className="homepage_section_3_title">Our Partners & Supporters</h2>

        <a href="https://pratibhaposhak.in/" target="_blank">
          <img style={{padding: 20}} width={300} src={require("../assets/pratibha_poshak_logo.png")} alt="Pratibha Poshak" />
        </a>
        <a href="https://www.amr-insights.eu/about-us/meet-our-ambassadors-500/#:~:text=Vedanth%20Ramji%20is,of%20Technology%2C%20Australia."  target="_blank">
          <img style={{padding: 20}} width={300} src={require("../assets/amrinsightslogo.png")} alt="AMR Insights" />
        </a>
        <a href="https://www.kidsforsdgs.org/vedanth-ramji"  target="_blank">
          <img width={300} src={require("../assets/kids_for_sdgs.png")} alt="AMR Insights" />
        </a>
        <a href="https://www.fao.org/antimicrobial-resistance/background/fao-role/renofarm/en/"  target="_blank">
          <img style={{padding: 20}} width={250} src={require("../assets/unrenofarmlogo.gif")} alt="AMR Insights" />
        </a>
      </div>
      
      {/* <div className="homepage_section_2 announcement">
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
          <Link to="/world-congress">
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
      </div> */}
      
      <div className="homepage_section_6">
        <h2 className="homepage_section_3_title">Upcoming & Recent News</h2>
        <ol style={{width: '80%', margin: 'auto'}}>
          <li><b>Dec 5th, 2024: </b> Vedanth will be attending <a style={{color:'#FFDB00'}} href="https://www.fao.org/antimicrobial-resistance/news-and-events/news/news-details/en/c/1677690/" target="_blank">Launch of the Community of Practice on</a> Good Agriculture Practices and Prudent Antimicrobial Use to Reduce AMR Risks in the Agrifood Sector (RENOFARM-CoP)</li>
          <li><b>June 14th, 2024: </b> Vedanth will be attending <a style={{color:'#FFDB00'}} href="https://fao.zoom.us/webinar/register/WN_SV6F0g0VSUmtnfNiWbka_g#/registration" target="_blank">Introduction Webinar</a> to the FAO Reduce the Need for Antimicrobials on Farms for Sustainable Agrifood Systems Transformation (RENOFARM) initiative</li>
          <li><b>June 5th, 2024: </b>The Thaavaram First World Congress on Plant AMR was launched. Click <Link style={{color:'#FFDB00'}} to="/world-congress">here</Link> to learn more.</li>
          <li><b>Sept 16-19th, 2023: </b>Thaavaram represented AMR in the environment at the United Nations 78th General Assembly in New York.</li>
        </ol>
        <div style={{textAlign: 'center'}} className="images">
          <img width={350} style={{margin: 5}} height={178} src={require('../assets/thaavaram_conference_speaking.png')}></img>
          <img width={350} style={{margin: 5}} src={require('../assets/thaavaram_un_sdg_img.png')}></img>
          <br/>
          <img width={350} style={{margin: 5}} src={require('../assets/thaavaram_poster.png')}></img>
        </div>
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
