import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { motion } from "framer-motion";

const JobDetails = () => {
    const params = useParams();
    const jobId = params.id;
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant == user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            console.log(res.data);
            if (res.data.success) {
                setIsApplied(true); //updating the local state
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updatedSingleJob)); //real time ui updating
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant == user?._id)) //checking if the state is synced with fetched data
                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex items-center justify-between my-10">
                <div>
                    <h1 className="font-bold text-xl ">{singleJob?.title}</h1>
                    <div className='flex items-center gap-6 mt-4'>
                        <Badge className={'text-orange-500 font-bold'} variant='outline'>{singleJob?.vacancies} Vacancies</Badge>
                        <Badge className={'text-blue-500 font-bold'} variant='outline'>{singleJob?.experienceLevel} Years</Badge>
                        <Badge className={'text-emerald-600 font-bold'} variant='outline'>{singleJob?.salary} LPA</Badge>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}>
                    <Button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`rounded-full ${isApplied ? 'bg-gray-800 cursor-not-allowed' : 'bg-[#6A38C2] hover:bg-[#503381]'}`}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </motion.div>
            </div>
            <h1 className="border-b-2 border-b-gray-400 text-2xl font-semibold py-4">Job Details</h1>
            <div className="my-5">
                <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
                <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location.join(",")}</span></h1>
                <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>
                <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experienceLevel} Years</span></h1>
                <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary} LPA</span></h1>
                <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span></h1>
                <h1 className="font-bold my-1">Job Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>
        </div>
    )
}

export default JobDetails