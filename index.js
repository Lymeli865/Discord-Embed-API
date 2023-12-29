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

    let meta = "";

    if(title)
        meta += "<meta content=\""+ title +"\" property=\"og:title\"/>";

    if(description)
        meta += "<meta content=\""+description+"\" property=\"og:description\" />";

    if(url)
        meta += "<meta content=\""+url+"\" property=\"og:url\" />";

    if(image_url)
        meta += "<meta content=\""+image_url+"\" property=\"og:image\" />";

    if(large_image_url)
        meta += "<meta content=\""+large_image_url+"\" property=\"theme-color\" />";

    if(color)
        meta += "<meta content=\""+color+"\" property=\"twitter:card\" />";

    res.send("<html>" +
                        "<head>" +
                            "<title>Embed Generator</title>" + meta +
                        "</head>" +
                   "</html>");
});

app.listen(process.env.PORT || 9855, () => {
    console.log("[Server] Server has started.");
});