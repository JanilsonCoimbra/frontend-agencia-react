import axios from "axios";

const api = axios.create({baseURL:"https://api-agencia-na-bahia-turismo.herokuapp.com"});
export default api