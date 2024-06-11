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

const BrowsePage = () => {
  const submissions = useSelector((state) => state.submissionsReducers);
  console.log(submissions);

  return !submissions.length ? (
    <CircularProgress />
  ) : (
    <div>
      <h1 style={{padding: 20, textAlign: 'center'}}>Real-time global plant antimicrobial usage data</h1>
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
              <TableCell component='th' scope='row'>
                {submission.nameOfPlant}
              </TableCell>
              <TableCell align="left">
                {submission.nameOfInfection}
              </TableCell>
              <TableCell align="left">
                {submission.fertilizersUsed}
              </TableCell>
              <TableCell align="left">
                {submission.pesticidesUsed}
              </TableCell>
              <TableCell align="left">
                {submission.herbicidesUsed}
              </TableCell>
              <TableCell align="left">
                {submission.fertilizersUsed}
              </TableCell>
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
    <div style={{textAlign: 'center', padding: 20}}>
    <h1>Taxon heatmaps of known pathogens from global metagenomics data</h1>
    <img width={'100%'} src={require('../assets/taxon_heatmap.png')}></img>
    </div>
    <div style={{textAlign: 'center'}}>
      <h1 style={{padding: 20, textAlign: 'center'}}>Data Processing at Thaavaram</h1>
      <img style={{margin: 20}} width={'60%'} src={require('../assets/data_processing.png')}></img>
    </div>
    </div>
  );
};

export default BrowsePage;
