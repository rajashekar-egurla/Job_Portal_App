import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get job ID from URL

const JobDetail = () => {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const response = await fetch(`http://localhost:5000/api/jobs/${id}`); // Backend API
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await response.json();
        console.log("Job data received:", data);
        setJob(data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    }
    fetchJob();
  }, [id]); // Runs when `id` changes

  return (
    <div>
      <h2>Job Details</h2>
      {job ? (
        <div>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p>Location: {job.location}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetail;
