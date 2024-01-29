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
const VideoManager_1 = __importDefault(require("../../managers/VideoManager"));
const videoRouter = (0, express_1.Router)();
// TODO: currently no need
//i videoRouter.get('/:id',async(req,res)=>{
//     const id = req.params.id;
//     const vm = new VideoManager();
//     const files = await vm.listVideos('videos-paid-videos')
//     files.forEach((file: any) => file.forEach((el: any) => console.log(el.name)))
//     res.send(JSON.stringify({ "data": files }, null, 2))
//     // get video link for the video
// })
videoRouter.get('/:id/info', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const vm = new VideoManager_1.default();
    const file = yield vm.getVideo('videos-paid-videos', id);
    res.send(JSON.stringify({ 'data': file }));
}));
// TODO: possible feature
// videoRouter.get('/post)
videoRouter.get('/videos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vm = new VideoManager_1.default();
    const files = yield vm.getThumbnails('paid-video-thumbnails');
    res.send(JSON.stringify({ 'data': files[0] }));
}));
exports.default = videoRouter;
