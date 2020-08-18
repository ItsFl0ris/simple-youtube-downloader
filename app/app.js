const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('[SERVER] Server booted succesfully');
    console.log('[API] Currently listening for API calls ...')
});

app.get('/download', async (req, res) => {
    var URL = req.query.URL;
    var info = await ytdl.getInfo(URL);
  
    var fileNm = info.videoDetails.title + ".mp3";
    res.header('Content-Disposition', `attachment; filename=${fileNm}`);
  
    console.log("Succesfully downloaded " + fileNm + "!");
  
    ytdl(URL, {
        filter: 'audioonly'
    }).pipe(res);
});
