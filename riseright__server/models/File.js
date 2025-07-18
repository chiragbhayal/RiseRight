const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business',
    },
    type: {
      type: String,
      enum: ['document', 'image', 'spreadsheet', 'other'],
      default: 'other',
    },
    size: {
      type: Number, // in bytes
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model('File', fileSchema);
module.exports = File;
