const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Project_Image', ProjectSchema);
