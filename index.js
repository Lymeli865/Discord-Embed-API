const express = require('express');
const app = express();

//mw
app.use(express.json());
app.enable('trust proxy');

app.get('/generateEmbed', async (req, res) => {
    const title = req.query.a;
    const description = req.query.desc;
    const url = req.query.linkurl;
    const image_url = req.query.imageurl;
    const large_image_url = req.query.largeurl;
    const color = req.query.clr;

    res.send("<html>" +
                        "<head>" +
                            "<title>Embed Generator</title>" +
                            "<meta content=\"Embed Title\" property=\"og:title\"/>" +
                        "</head>" +
                   "</html>");
});

app.listen(9855, () => {
    console.log("[Server] Server has started.");
});