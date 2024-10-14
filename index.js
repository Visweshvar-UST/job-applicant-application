const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const applicantRouters = require("./routes/applicantRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/ApplicantManagement',{

})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.use('/api/v1/applicant',applicantRouters);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});