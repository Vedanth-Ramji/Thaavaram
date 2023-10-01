import express from "express";
import {
  getSubmissions,
  createSubmission,
} from "../controllers/submissionsController.js";

const router = express.Router();

router.get("/", getSubmissions);
router.post("/", createSubmission);

export default router;
