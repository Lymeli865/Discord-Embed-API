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
        description: req.query.description,
        url: req.query.url,
        image_url: req.query.image,
        video_url: req.query.video,
        color: '#'+req.query.color,
        author: req.query.author
    });
});

app.listen(process.env.PORT || 55414, () => {
    console.log("[Server] Server has started.");
});
