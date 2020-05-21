var express = require('express');
var multer = require('multer');
var router = express.Router();
var upload = multer({ storage: '../uploads/' });

router.get('/', function(req, res){
    console.log('upload page called');
    res.send('upload');
});

router.post('/', upload.single('userList'), function(req, res){
    console.log('called');
    res.send('uploaded : ' + req.file);
});

module.exports = router;