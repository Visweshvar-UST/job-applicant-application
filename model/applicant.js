const mongoose = require('mongoose');

const Applicantion = new mongoose.Schema({
    applicant_id: { type: Number, unique: true, auto: true },  // Automatically generated unique ID
    applicant_name: { type: String, required: true},
    location_preference: { type: String, required: true },
    applied_jobs: { type: [String], required: true },  // Array of job IDs
});

module.exports = mongoose.model('Applicant', Applicantion);