import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createSubmission } from "../actions/submissionsActions";
import "./submitPageStyles.css";

const SubmitPage = () => {
  const [submissionData, setSubmissionData] = useState({
    nameOfPlant: "",
    nameOfInfection: "",
    fertilizersUsed: "",
    pesticidesUsed: "",
    herbicidesUsed: "",
    fungicidesUsed: "",
    antimicrobialDrugsUsed: "",
    ineffectiveAntimicrobialDrugsUsed: "",
    locationOfCollection: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSubmission(submissionData));
    setSubmissionData({
      nameOfPlant: "",
      nameOfInfection: "",
      fertilizersUsed: "",
      pesticidesUsed: "",
      herbicidesUsed: "",
      fungicidesUsed: "",
      antimicrobialDrugsUsed: "",
      ineffectiveAntimicrobialDrugsUsed: "",
      locationOfCollection: "",
    });
  };

  return (
    <div className="submitPage">
      <form className="submitPage-form" onSubmit={handleSubmit}>
        <div className="submitPage-textfield">
          <TextField
            name="Name of Plant"
            label="Name of Plant"
            fullWidth
            value={submissionData.nameOfPlant}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                nameOfPlant: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-textfield">
          <TextField
            name="Name of Infection"
            label="Name of Infection"
            fullWidth
            value={submissionData.nameOfInfection}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                nameOfInfection: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-textfield">
          <TextField
            name="Fertilizers Used"
            label="Fertilizers Used"
            fullWidth
            value={submissionData.fertilizersUsed}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                fertilizersUsed: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-textfield">
          <TextField
            name="Pesticides Used"
            label="Pesticides Used"
            fullWidth
            value={submissionData.pesticidesUsed}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                pesticidesUsed: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-textfield">
          <TextField
            name="Herbicides Used"
            label="Herbicides Used"
            fullWidth
            value={submissionData.herbicidesUsed}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                herbicidesUsed: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-textfield">
          <TextField
            name="Fungicides Used"
            label="Fungicides Used"
            fullWidth
            value={submissionData.fungicidesUsed}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                fungicidesUsed: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-textfield">
          <TextField
            name="Antimicrobial Drugs Used"
            label="Antimicrobial Drugs Used"
            fullWidth
            value={submissionData.antimicrobialDrugsUsed}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                antimicrobialDrugsUsed: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-textfield">
          <TextField
            name="Ineffective Antimicrobial Drugs Used"
            label="Ineffective Antimicrobial Drugs Used"
            fullWidth
            value={submissionData.ineffectiveAntimicrobialDrugsUsed}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                ineffectiveAntimicrobialDrugsUsed: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-textfield">
          <TextField
            name="Location of Collection"
            label="Location of Collection"
            fullWidth
            value={submissionData.locationOfCollection}
            onChange={(e) =>
              setSubmissionData({
                ...submissionData,
                locationOfCollection: e.target.value,
              })
            }
          />
        </div>
        <div className="submitPage-submitButtonWrapper">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubmitPage;
