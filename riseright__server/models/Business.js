const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Business name is required'],
    },
    description: {
      type: String,
      default: '',
    },
    industry: {
      type: String,
      required: [true, 'Industry is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    website: {
      type: String,
      default: '',
    },
    contactEmail: {
      type: String,
      match: [/\S+@\S+\.\S+/, 'Please use a valid email'],
    },
    phone: {
      type: String,
    },
    growthScore: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'pending'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;
