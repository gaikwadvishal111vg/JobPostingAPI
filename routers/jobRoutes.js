import express from 'express';
import { getAllJobs,
    saveNewJob,
    deleteJob,
    updateJob,
    getJobById,
 } from '../controllers/jobController.js';
const router = express.Router();



router.get("/jobs",getAllJobs);
router.get("/jobs/:id",getJobById);
router.post("/newJob", saveNewJob);

router.delete("/deleteJob/:id", deleteJob);

router.put("/updateJob/:id", updateJob);

export default router;