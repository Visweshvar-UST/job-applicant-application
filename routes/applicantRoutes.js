const express = require('express');
const router = express.Router();
const axios = require('axios');
const Student = require('../model/applicant');
const Applicant = require('../model/applicant');

// 1. fetch all application
router.get('/', async (req, res) => {
    try {
        const applications = await Student.find();
        res.status(200).json(applications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// //fetch from externa api
// router.get('/', async (req, res) => {
//     try {
//         // Fetch applications from your own database
//         const applications = await Student.find();

//         // Fetch jobs from the external API (localhost:8087/api/v1/jobs)
//         const jobResponse = await axios.get('http://localhost:8087/api/v1/jobs');
//         const jobs = jobResponse.data; // Extract job data from the API response

//         // Combine and send back the applications and job data
//         res.status(200).json({
//             applications,
//             jobs,
//         });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // 2. Create a new applicant [POST]
// router.get('/jobs', async (req, res) => {
//     // const { applicant_name, location_preference, job_Id } = req.body;

//     // const newApplicant = new Applicant({
//     //     applicant_name,
//     //     location_preference,
//     //     job_Id,
//     // });
    
//     try {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => console.log(json));
//         res.status(200).json({  message: 'jobs fetched successfully' });

//         // await newApplicant.save();
//         // res.status(201).json(newApplicant);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// 2. Fetch jobs from an external API (example URL)
router.get('/jobs', async (req, res) => {
    try {
        // Fetch jobs from an external API (e.g., jsonplaceholder or your own service)
        const jobResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        const jobs = jobResponse.data; // Extract job data from the response

        res.status(200).json({
            message: 'Jobs fetched successfully',
            jobs, // Return the fetched jobs
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//2. fetch all student [POST]
router.post('/', async (req, res) => {
    const { applicant_name, location_preference, job_Id } = req.body;

    const newApplicant = new Applicant({
        applicant_name,
        location_preference,
        job_Id,
    })
    try {
        await newApplicant.save();
        res.status(201).json(newApplicant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



module.exports = router

