import { Router } from "express";
import prisma from "../../clients/prisma";
import { randomUUID } from "crypto";
import VideoManager from "../../managers/VideoManager";
const userRouter = Router();

userRouter.get(
    '/',
    (req,res)=>{
        res.send("Hello User") 
    }
)

userRouter.get('/:id/videos',async (req,res)=>{
   const user: string = req.params.id;

    const videos = await prisma.purchase.findMany(
        {
            where:{
                userId: user
            }
        }
    )
    const vm = new VideoManager()
    let result = [];
    for(let video of videos){
        let links = [];
        for(let info of video['videos']){
            console.log(info)
            links.push( await vm.getVideo('paid-videos-thumbnails',info))
        }
        result.push({'video': video,'link':links})
    }
    res.send(JSON.stringify({"videos": result}))
})

userRouter.post('/purchase',async (req,res)=>{
    const userId = req.body.id;
    const videoId = req.body.video;
    if(!userId || !videoId) return res.sendStatus(402);

    const purchase = await prisma.purchase.create({
        data : {
            id:parseInt(randomUUID()),
            userId: userId,
            videos: [videoId]
        }       
    }) 
    res.send(JSON.stringify({"data": purchase}))
})

export default userRouter;