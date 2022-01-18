import axios from "axios";

const API_KEY = "AIzaSyDwmS4ws-fmKEsrKsN_8tsSPbRJjtqX9YY"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        type: 'video',
        key: API_KEY
    }
});