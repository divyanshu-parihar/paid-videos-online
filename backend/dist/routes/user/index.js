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
const express_1 = require("express");
const prisma_1 = __importDefault(require("../../clients/prisma"));
const crypto_1 = require("crypto");
const VideoManager_1 = __importDefault(require("../../managers/VideoManager"));
const userRouter = (0, express_1.Router)();
userRouter.get('/', (req, res) => {
    res.send("Hello User");
});
userRouter.get('/:id/videos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.params.id;
    const videos = yield prisma_1.default.purchase.findMany({
        where: {
            userId: user
        }
    });
    const vm = new VideoManager_1.default();
    let result = [];
    for (let video of videos) {
        let links = [];
        for (let info of video['videos']) {
            console.log(info);
            links.push(yield vm.getVideo('paid-videos-thumbnails', info));
        }
        result.push({ 'video': video, 'link': links });
    }
    res.send(JSON.stringify({ "videos": result }));
}));
userRouter.post('/purchase', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.id;
    const videoId = req.body.video;
    if (!userId || !videoId)
        return res.sendStatus(402);
    const purchase = yield prisma_1.default.purchase.create({
        data: {
            id: parseInt((0, crypto_1.randomUUID)()),
            userId: userId,
            videos: [videoId]
        }
    });
    res.send(JSON.stringify({ "data": purchase }));
}));
exports.default = userRouter;
