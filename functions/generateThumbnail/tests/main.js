const ffmpeg = require('fluent-ffmpeg');
const Storage = require('@google-cloud/storage')

const storage = new Storage.Storage({ keyFilename: '/Applications/Divyanshu Parihar/typescript-projects/paid-videos/backend/GCP_KEY.json' });


const main = async() => {

  // const inputBucket = storage.bucket('videos-paid-videos');
  // const tempLocalFile = `/tmp/${fileName}`;
  const outputBucket = storage.bucket('paid-video-thumbnails');

  // Download video from Cloud Storage to a temporary local file
  // await inputBucket.file('').download({ destination: tempLocalFile });


  new ffmpeg('/Applications/Divyanshu Parihar/typescript-projects/paid-videos/functions/generateThumbnail/demo.mov')
  .takeScreenshots({
    count: 1,
    timemarks: ['1'] // number of seconds
  }, '/Applications/Divyanshu Parihar/typescript-projects/paid-videos/functions/generateThumbnail/main.png', function (err) {
    console.log('screenshots were not  saved')
  })

  await outputBucket.upload('tn.png', { destination: `${'demo 4'}.png` });
}

main()