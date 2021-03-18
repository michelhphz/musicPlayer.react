import axios from "axios";

const API_URL = "http://localhost:8080"

export default function fetchTracks() {
    return axios(`${API_URL}/tracks`)
}

