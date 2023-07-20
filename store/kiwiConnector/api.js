import axios from "axios"
import {
  KIWICONNECTOR_USERNAME,
  KIWICONNECTOR_PASSWORD
} from "react-native-dotenv"
const kiwiConnector = axios.create({
  baseURL: "https://cbtcms.herokuapp.com/",
  auth: { username: KIWICONNECTOR_USERNAME, password: KIWICONNECTOR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
