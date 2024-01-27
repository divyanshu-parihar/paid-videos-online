import { config } from "dotenv"
import path = require("path")
config()



export default {
    googleServiceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_INFO as string | "",
    KeyPath: (process.env.PRODUCTION ? path.join(__dirname,'GCP_KEY.json'): '/Applications/Divyanshu Parihar/typescript-projects/paid-videos/backend/GCP_KEY.json')

}