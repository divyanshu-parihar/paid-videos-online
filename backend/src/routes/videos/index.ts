import { Router } from "express";
import VideoManager from "../../managers/VideoManager";

const videoRouter = Router();
// TODO: currently no need
//i videoRouter.get('/:id',async(req,res)=>{

//     const id = req.params.id;
//     const vm = new VideoManager();
//     const files = await vm.listVideos('videos-paid-videos')
//     files.forEach((file: any) => file.forEach((el: any) => console.log(el.name)))
//     res.send(JSON.stringify({ "data": files }, null, 2))
//     // get video link for the video
// })

videoRouter.get('/:id/info',async (req,res)=>{
    const id = req.params.id
    const vm = new VideoManager();
    const file = await vm.getVideo('videos-paid-videos',id)
    res.send(JSON.stringify({'data':file}))
})

// TODO: possible feature
// videoRouter.get('/post)

videoRouter.get('/videos',async (req,res)=>{
    const vm = new VideoManager(); 
    const files = await vm.getThumbnails('paid-video-thumbnails')
    res.send(JSON.stringify({ 'data': files[0] }))
})

export default videoRouter;