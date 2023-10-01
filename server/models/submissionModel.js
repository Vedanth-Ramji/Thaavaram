import mongoose from "mongoose";

const submissionSchema = mongoose.Schema({
  nameOfPlant: String,
  nameOfInfection: String,
  fertilizersUsed: String,
  pesticidesUsed: String,
  herbicidesUsed: String,
  fungicidesUsed: String,
  antimicrobialDrugsUsed: String,
  ineffectiveAntimicrobialDrugsUsed: String,
  locationOfCollection: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
