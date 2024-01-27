"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Storage } from "@google-cloud/storage";
// import { PubSub } from "@google-cloud/pubsub";
//@ts-ignore
const framework_functions_1 = __importDefault(require("@google-cloud/framework-functions"));
// import ffmpeg from 'fluent-ffmpeg'
// const storage : Storage =  new Storage();
// // const pubsub : PubSub = new PubSub(); 
framework_functions_1.default.http('generateThumbnail', (req, res) => {
    res.send('Hello World');
});
