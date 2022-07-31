const fs = require('fs');
const path = require('path')

fs.readFile(path.resolve(__dirname, 'notes.txt'), 'utf-8', (err, data) => {
  console.log(err);
  console.log(data);
})


// const readableStream = fs.createReadStream('filesystem/article.txt', {
//     highWaterMark: 10
// });

// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
//         // catch the error when the chunk cannot be read.
//     }
// });

// readableStream.on('end', () => {
//     console.log('Done');
// });