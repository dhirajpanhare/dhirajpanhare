const Image = require('../models/project.model');


exports.uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file uploaded.' });
  }

  try {
    const image = new Image({ imagePath: `/uploads/${req.file.filename}` });
    await image.save();
    res.status(201).json({
      message: 'Image uploaded successfully!',
      imageUrl: image.imagePath
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload image.' });
  }
};
