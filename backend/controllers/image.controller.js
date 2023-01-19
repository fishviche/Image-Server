const imageCtr = {};
const Image = require('../models/Image');

imageCtr.getOneImage = async (req, res) => {
  id = req.params.id
  res.json(await Image.findById(id));
}
imageCtr.getImages = async (req, res) => {
  res.json(await Image.find());
}
imageCtr.saveImage = async (req, res) => {
  const { name, slug, route } = req.body;
  const newImage = new Image({ name, slug, route });
  res.json(await newImage.save());
}
imageCtr.deleteImage = async (req, res, next) => {
  id = req.params.id
	const result = await Image.findByIdAndDelete(id);
  req.body.route = result.route;
  next();
}
imageCtr.updateImage = async(req, res) => {
  const { name, slug, route } = req.body;
  id = req.params.id
	res.json(await Image.findByIdAndUpdate(id, { name, slug, route }));
}
module.exports = imageCtr;