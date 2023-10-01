import Submission from "../models/submissionModel.js";

export const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSubmission = async (req, res) => {
  const submission = req.body;
  const newSubmission = new Submission(submission);

  try {
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
