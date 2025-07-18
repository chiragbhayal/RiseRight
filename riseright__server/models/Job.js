const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Job title is required'],
    },
    description: {
      type: String,
      required: [true, 'Job description is required'],
    },
    location: {
      type: String,
      required: [true, 'Job location is required'],
    },
    employmentType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'],
      default: 'Full-time',
    },
    salary: {
      type: Number,
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    closingDate: {
      type: Date,
    },
    skillsRequired: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
