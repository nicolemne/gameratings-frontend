import axios from "axios";

axios.defaults.baseURL = 'https://gameratings-api-d04888e8239b.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;