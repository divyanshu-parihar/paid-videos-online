import Express from 'express'
import config from './config'
import VideoManager from './managers/VideoManager'
import { File } from '@google-cloud/storage'
const app = Express()

app.get("/",async(req,res)=>{
    console.log('Request Received')
    const vm = new VideoManager();

    vm.getStore()
    const files = await vm.listVideos('videos-paid-videos')
    files.forEach((file: any) => file.forEach((el: any)=>console.log(el.name)))
    res.send(JSON.stringify({"data": files},null,2))

})


app.listen(8080,()=>{
    console.log("Server Started")
})