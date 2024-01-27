import { GetBucketsResponse, GetFilesCallback, GetFilesResponse, Storage } from "@google-cloud/storage";
import path from 'path'
import config from '../config'
export default class VideoManager{
    static storage: Storage;
    constructor(){
        
    }


    getStore(){
        // console.log(path.join(__dirname , 'GCP_KEY.json'))
        if(VideoManager.storage == undefined) VideoManager.storage = new Storage({keyFilename:config.KeyPath});
        else return VideoManager.storage;
    }
    async listVideos (bucketName : string):Promise<GetFilesResponse>{

       const files:GetFilesResponse =  await VideoManager.storage.bucket(bucketName).getFiles()
       return files; 
    }
    // upload videos
    // get short term video link like 
}