import { Router } from "express";

const homeRouter = Router();


homeRouter.get('/',(req,res)=>{
    res.send("Hello, Let get you some videos")
})


export default homeRouter