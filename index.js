const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// mw
app.use(express.json());
app.enable('trust proxy');

// Set the layout for all views
app.set('layout', 'layout');
app.set('layout extractScripts', true);

app.get('/generateEmbed', async (req, res) => {
    res.render('embed.ejs', {
        title: req.query.title,
        description: req.query.desc,
        url: req.query.linkurl,
        image_url: req.query.imageurl,
        large_image_url: req.query.largeurl,
        color: '#'+req.query.clr
    });
});

app.listen(process.env.PORT || 55414, () => {
    console.log("[Server] Server has started.");
});
