const Storage = require("@google-cloud/storage");
const functions = require('@google-cloud/functions-framework');
const ffmpeg =  require('fluent-ffmpeg')

const storage =  new Storage.Storage();

functions.cloudEvent('helloGCS', async cloudEvent => {
  console.log(`Event ID: ${cloudEvent.id}`);
  console.log(`Event Type: ${cloudEvent.type}`);

  const file = cloudEvent.data;
  console.log(`Bucket: ${file.bucket}`);
  console.log(`File: ${file.name}`);
  console.log(`Metageneration: ${file.metageneration}`);
  console.log(`Created: ${file.timeCreated}`);
  console.log(`Updated: ${file.updated}`);


//   const file = event.data;

  const bucketName = file.bucket;
  const fileName = file.name;

  const inputBucket = storage.bucket(bucketName);
  // const tempLocalFile = `/tmp/${fileName}`;
  const outputBucket = storage.bucket('paid-video-thumbnail');

  // Download video from Cloud Storage to a temporary local file
  await inputBucket.file(fileName).download({ destination: tempLocalFile });
  await outputBucket.upload('tn.png', { destination: `thumbnails/${fileName}.png` });



});
