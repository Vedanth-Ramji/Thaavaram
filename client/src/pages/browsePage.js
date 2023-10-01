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
            <TableCell>Time</TableCell>
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
              <TableCell align="left">
                {new Date(submission.createdAt).toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BrowsePage;
