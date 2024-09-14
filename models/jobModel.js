import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobtitle: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    datePosted: {
        type: Date,
        default: Date.now,
    },
});
const jobModel = mongoose.model("job", jobSchema);
export default jobModel;
// module.exports = mongoose.model('job', jobSchema);

