import { GetFilesResponse, Storage } from "@google-cloud/storage";
import config from '../config'
export default class VideoManager {
  public static storage: Storage;
  constructor() {

    if (VideoManager.storage == undefined) VideoManager.storage = new Storage({ keyFilename: config.KeyPath });
    if(VideoManager.storage == undefined) new Error("GCP KEY NOT FOUND .. PUT GCP_KEY.json in backend folder")
  }
  async listVideos(bucketName: string): Promise<GetFilesResponse> {
    const files: GetFilesResponse = await VideoManager.storage.bucket(bucketName).getFiles()
    return files;
  }
  async getThumbnails(bucketName: string): Promise<File[]>{
    const url = [];
    const files = await VideoManager.storage.bucket(bucketName).getFiles();
    for(let file of files){
      console.log(file)
    } 
    return files as File[];
  }

  async getVideo(bucketName: string, fileName : string){
    const file = await VideoManager.storage.bucket(bucketName).file(fileName);
    let date = new Date()
    return {'file':file,'link':file.publicUrl()};
  }
  async getNoOfFiles(bucketName: string): Promise<number> {
    const files: GetFilesResponse = await VideoManager.storage.bucket(bucketName).getFiles();
    return files.length;
  }
}
