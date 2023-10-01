import axios from "axios";

const url = "http://localhost:5000/submissions";

export const fetchSubmissions = () => axios.get(url);
export const createSubmission = (submission) => axios.post(url, submission);
