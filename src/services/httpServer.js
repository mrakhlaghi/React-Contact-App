import axios from "axios";

axios.defaults.baseURL=""
const http={
    get:axios.get,
    put:axios.put,
    delete:axios.delete,
    post:axios.post,
}
export default http;