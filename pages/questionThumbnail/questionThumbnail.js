var path = require('path');
var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/*', function(req, res, _next) {
    var filename = req.params[0];
    var clientFilesDir = path.join(
        res.locals.course.path,
        'questions',
        filename,
    );
    // fs.access(path.join(clientFilesDir, 'thumbnail.jpg'), fs.F_OK, (err) => {
    //     if (!err) {
    //         res.sendFile("thumbnail.jpg", {root: clientFilesDir});
    //     }
    // });
    // fs.access(path.join(clientFilesDir, 'thumbnail.png'), fs.F_OK, (err) => {
    //     if (!err) {
    //         res.sendFile("thumbnail.png", {root: clientFilesDir});
    //     }
    // });
    // fs.access(path.join(clientFilesDir, 'thumbnail.jpeg'), fs.F_OK, (err) => {
    //     if (!err) {
    //         res.sendFile("thumbnail.jpeg", {root: clientFilesDir});
    //     }
    // });

    try {
        if (fs.existsSync(path.join(clientFilesDir, 'thumbnail.jpg'))) {
            res.sendFile("thumbnail.jpg", {root: clientFilesDir});
            return;
        }
    } catch (err) {}
    try {
        if (fs.existsSync(path.join(clientFilesDir, 'thumbnail.png'))) {
            res.sendFile("thumbnail.png", {root: clientFilesDir});
            return;
        }
    } catch (err) {}
    try {
        if (fs.existsSync(path.join(clientFilesDir, 'thumbnail.jpeg'))) {
            res.sendFile("thumbnail.jpeg", {root: clientFilesDir});
            return;
        }
    } catch (err) {}
    res.sendFile("images/defaultThumbnail.png", {root: "public"});
});

module.exports = router;
