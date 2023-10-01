import axios from "axios";

const url = "https://thaavaram.onrender.com/submissions";

export const fetchSubmissions = () => axios.get(url);
export const createSubmission = (submission) => axios.post(url, submission);
