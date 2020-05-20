var express = require('express');
var multer = require('multer');
var router = express.Router();
var upload = multer({ storage: '../uploads/' });

router.get('/', function(req, res){
    res.render('upload');
});

router.post('/', upload.single('userList'), function(req, res){
    res.send('uploaded : ' + req.file);
});

module.exports = router;