import axios from "axios";

export default axios.create({
    baseURL: "http://20.110.198.43:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});