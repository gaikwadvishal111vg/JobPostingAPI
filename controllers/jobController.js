import jobModel from "../models/jobModel.js"


export async function getAllJobs (req, res) {
    const dataFromDB = await jobModel.find();
    res.send(dataFromDB);

}

export async function  getJobById(req, res) {
    const datFromDB = await jobModel.findById();
    res.send(datFromDB);

}


export async function saveNewJob (req, res) {
    try{
const dataToSave = new jobModel(req.body);
const newJob = await dataToSave.save();
res.status(200).send(newJob);
    } catch (error) {
        res.status(400).send(error);
    }
}

export async function deleteJob(req, res) {
    const id = req.params.id;

    const deletedData = await jobModel.findByIdAndDelete(id);
    if(deletedData){
        res.status(200).send("Job Post Is Deleted");
    } else{
        res.status(500).send("user could not be deleted");
    }
}

export async function updateJob(req, res) {
    const {id} = req.params;
    const updateData = await jobModel.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if(updateData) {
        res.json({message: "Success", updateData});
    } else {
        res.status(500).send("Job Could Not Be Deleted");
    }
}
