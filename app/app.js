const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(4000, () => {
    console.log('[SERVER] Server booted succesfully');
    console.log('[API] Currently listening for API calls ...')
});
app.get('/download', (req,res) => {

var URL = req.query.URL;
ytdl.getInfo(URL, function(err, info) {
    var fileNm = info.title + ".mp3";
    
res.header('Content-Disposition', `attachment; filename=${fileNm}`);

ytdl(URL, {
    format: 'mp3'
    }).pipe(res);
});
});


