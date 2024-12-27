import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ReactImageMagnify from "react-image-magnify";
import "./browsePageStyles.css";

const BrowsePage = () => {
  const submissions = useSelector((state) => state.submissionsReducers);
  console.log(submissions);

  return !submissions.length ? (
    <div>
      <CircularProgress />
      <div
        style={{
          textAlign: "center",
          width: "50%",
          justifyContent: "space-evenly",
        }}
      >
        <h4 style={{ padding: 10 }}>
          AMR genes of known bacterial pathogens found from global metagenomics
          data
        </h4>
        <div className="drug_class_pie_chart" style={{ zIndex: 100 }}>
          <ReactImageMagnify
            {...{
              smallImage: {
                isFluidWidth: true,
                src: "./drug_classes.png",
              },
              largeImage: {
                src: "./drug_classes.png",
                width: 1460,
                height: 629,
              },
              isHintEnabled: true,
            }}
          />
        </div>
        <h4 style={{ padding: 10 }}>
          Taxon heatmaps of known bacterial pathogens from global metagenomics
          data
        </h4>
        <div className="taxon_img">
          <ReactImageMagnify
            {...{
              smallImage: {
                isFluidWidth: true,
                src: "./taxon_heatmap.png",
              },
              largeImage: {
                src: "./taxon_heatmap.png",
                width: 1280,
                height: 3191,
              },
              isHintEnabled: true,
            }}
          />
        </div>
        {/* <img width={"500px"} src=></img> */}
        {/* <h1>
          AMR genes of known bacterial pathogens found from global metagenomics
          data
        </h1> */}
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ padding: 20, textAlign: "centefr" }}>
          Data Processing at Thaavaram
        </h1>
        <img
          style={{ margin: 20 }}
          width={"60%"}
          src={require("../assets/data_processing.png")}
        ></img>
      </div>
      <div style={{padding: 20}}>
        <h1 style={{padding: 20, textAlign: "center"}}>Other Useful Data Sources</h1>
        <div>
          <h2>FungAMR from Bédard et al. 2024.</h2>
          <b>If you use this data, please cite: Bédard et al. 2024. FungAMR: A comprehensive portrait of antimicrobial resistance mutations in fungi. bioRxiv 2024.10.07.617009.</b>
          <ol>
            <li>54,666 mutation entries</li>
            <li>92 species</li>
            <li>202 genes</li>
            <li>184 drugs</li>
          </ol>
          <p>Check out FungAMR: <a href="https://raw.githubusercontent.com/Landrylab/FungAMR/refs/heads/main/FungAMR.csv">here</a></p>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h4 style={{ padding: 20, textAlign: "center" }}>
        Real-time global plant antimicrobial usage data
      </h4>
      <TableContainer>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Plant Name</TableCell>
              <TableCell>Infection Name</TableCell>
              <TableCell>Fertilizers</TableCell>
              <TableCell>Pesticides</TableCell>
              <TableCell>Herbicides</TableCell>
              <TableCell>Fungicides</TableCell>
              <TableCell>Antimicrobial Drugs</TableCell>
              <TableCell>Ineffective Antimicrobial Drugs</TableCell>
              <TableCell>Location</TableCell>
              {/* <TableCell>Time</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submissions._id}>
                <TableCell component="th" scope="row">
                  {submission.nameOfPlant}
                </TableCell>
                <TableCell align="left">{submission.nameOfInfection}</TableCell>
                <TableCell align="left">{submission.fertilizersUsed}</TableCell>
                <TableCell align="left">{submission.pesticidesUsed}</TableCell>
                <TableCell align="left">{submission.herbicidesUsed}</TableCell>
                <TableCell align="left">{submission.fertilizersUsed}</TableCell>
                <TableCell align="left">
                  {submission.antimicrobialDrugsUsed}
                </TableCell>
                <TableCell align="left">
                  {submission.ineffectiveAntimicrobialDrugsUsed}
                </TableCell>
                <TableCell align="left">
                  {submission.locationOfCollection}
                </TableCell>
                {/* <TableCell align="left">
                {new Date(submission.createdAt).toDateString()}
              </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          textAlign: "center",
          width: "50%",
          justifyContent: "space-evenly",
        }}
      >
        <h4 style={{ padding: 10 }}>
          Taxon heatmaps of known bacterial pathogens from global metagenomics
          data
        </h4>
        <div className="drug_class_pie_chart" style={{ zIndex: 100 }}>
          <ReactImageMagnify
            {...{
              smallImage: {
                isFluidWidth: true,
                src: "./drug_classes.png",
              },
              largeImage: {
                src: "./drug_classes.png",
                width: 1460,
                height: 629,
              },
              isHintEnabled: true,
            }}
          />
        </div>
        <h4 style={{ padding: 10 }}>
          AMR genes of known bacterial pathogens found from global metagenomics
          data
        </h4>
        <div className="taxon_img">
          <ReactImageMagnify
            {...{
              smallImage: {
                isFluidWidth: true,
                src: "./taxon_heatmap.png",
              },
              largeImage: {
                src: "./taxon_heatmap.png",
                width: 1280,
                height: 3191,
              },
              isHintEnabled: true,
            }}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ padding: 20, textAlign: "center" }}>
          Data Processing at Thaavaram
        </h1>
        <img
          style={{ margin: 20 }}
          width={"60%"}
          src={require("../assets/data_processing.png")}
        ></img>
      </div>
      <div style={{padding: 20}}>
        <h1 style={{padding: 20, textAlign: "center"}}>Other Useful Data Sources</h1>
        <div>
          <h2>FungAMR from Bédard et al. 2024.</h2>
          <b>If you use this data, please cite: Bédard et al. 2024. FungAMR: A comprehensive portrait of antimicrobial resistance mutations in fungi. bioRxiv 2024.10.07.617009.</b>
          <ol>
            <li>54,666 mutation entries</li>
            <li>92 species</li>
            <li>202 genes</li>
            <li>184 drugs</li>
          </ol>
          <p>Check out FungAMR: <a href="https://raw.githubusercontent.com/Landrylab/FungAMR/refs/heads/main/FungAMR.csv">here</a></p>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
