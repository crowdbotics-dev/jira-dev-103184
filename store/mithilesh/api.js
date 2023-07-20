import axios from "axios"
import { MITHILESH_USERNAME, MITHILESH_PASSWORD } from "react-native-dotenv"
const mithilesh = axios.create({
  baseURL: "https://connector.com",
  auth: { username: MITHILESH_USERNAME, password: MITHILESH_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
