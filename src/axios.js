import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-961b0.cloudfunctions.net/api', // live endpoint URL
//   "http://127.0.0.1:5001/clone-961b0/us-central1/api", // local endpoint URL
});

export default instance;
