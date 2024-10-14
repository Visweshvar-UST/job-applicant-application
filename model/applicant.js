const mongoose = require('mongoose');

const Applicantion = new mongoose.Schema({
    applicant_name: {type: String, required: true, unique: true},
    location_preference: {type: String, required: true},
    job_Id: {type: String, required: true},
});

module.exports = mongoose.model('Applicant', Applicantion);