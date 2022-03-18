import axios from "axios";
const apiUrl = [{baseURL:"https://api-agencia-na-bahia-turismo.herokuapp.com"}, {baseURL:"http://localhost:8080"}]
const api = axios.create(apiUrl[0]);
export default api