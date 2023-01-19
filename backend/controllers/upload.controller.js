const uploadCtr = {};
const multer = require('multer');
const fs = require('fs')

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const slug = Date.now() + '-' + file.originalname;
    req.body = { name: file.originalname, slug, route: './uploads/' + slug, id: req.body.id || ''};
    cb(null, slug)
  }
});
const upload = multer({ storage: storage });
uploadCtr.upload = upload.single('myFile');
uploadCtr.deleteFile = async (req, res) => {
  fs.unlink(req.body.route, (err) => {
    if (err) { return res.json({error: true})};
    return res.json({error: false, message: 'Success'});
  })
}
module.exports = uploadCtr;