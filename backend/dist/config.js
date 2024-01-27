"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path = require("path");
(0, dotenv_1.config)();
exports.default = {
    googleServiceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_INFO,
    KeyPath: (process.env.PRODUCTION ? path.join(__dirname, 'GCP_KEY.json') : '/Applications/Divyanshu Parihar/typescript-projects/paid-videos/backend/GCP_KEY.json')
};
