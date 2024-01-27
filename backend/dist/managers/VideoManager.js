"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("@google-cloud/storage");
const config_1 = __importDefault(require("../config"));
class VideoManager {
    constructor() {
    }
    getStore() {
        // console.log(path.join(__dirname , 'GCP_KEY.json'))
        if (VideoManager.storage == undefined)
            VideoManager.storage = new storage_1.Storage({ keyFilename: config_1.default.KeyPath });
        else
            return VideoManager.storage;
    }
    listVideos(bucketName) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield VideoManager.storage.bucket(bucketName).getFiles();
            return files;
        });
    }
}
exports.default = VideoManager;
