import {useState} from 'react';
import {JobCard} from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import {CardLayout} from '../styles/cardStyles';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';

export default function JobsPage(){
    // Stores the list of jobs returned from the API
    const [jobs, setJobs] = useState([]);

    // Tracks whether we're waiting for the API to respond
    const [loading, setLoading] = useState(false);

    // Stores whatever the user types in the search box
    const [search, setSearch] = useState('');

    const fetchJobs = async () => {
        // Show loading message while waiting
        setLoading(true);

        // Call our API route which calls JSearch
        const response = await fetch(`/api/jobsapi?query=${search}`);

        // Convert response to JSON
        const data = await response.json();

        // Store jobs in state so they render on the page
        setJobs(data);

        // Hide loading message
        setLoading(false);
    };
    // return (
    // <>
        {/* <GlobalStyles />
        <Nav/>
        <CardLayout>
        <JobCard title="Frontend Developer" 
            company="Google"
            description="yada yada"
            link="https://www.google.com/about/careers/applications/jobs/results"/>

        <JobCard title="Backend Engineer" 
            company="Amazon"
            description="yada yada 2"
            link="https://www.amazon.jobs/en/"/>
        
        <JobCard title="AI Designer" 
            company="Microsoft"
            description="yada yada"
            link="https://careers.microsoft.com/v2/global/en/home.html"/>

        <JobCard title="Database Maintainer" 
            company="Oracle"
            description="yada yada 2"
            link="https://www.oracle.com/careers/"/>
        </CardLayout> */}
    return (
        <div>
            <GlobalStyles/>
            <Nav/>

            {/* Search bar */}
            <div className="search">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={fetchJobs}>Search</button>
            </div>

            <h3 id="titleText">Click on the job title to apply</h3>

            {/* Show loading message while waiting for API */}
            {loading && <p>Loading jobs...</p>}

            {/* Loop through jobs and render a JobCard for each one */}
            <CardLayout>
                {jobs.map(job => (
                    <JobCard
                        // key={job.job_id}
                        title={job.job_title}
                        company={job.employer_name}
                        description={job.job_description}
                        link={job.job_apply_link}
                    />
                ))}
                {/*Example card for testing so I don't use all my query searches*/}
                <JobCard title="Database Maintainer" 
                    company="Oracle"
                    description="This is a mock description that tests the overflow of the card. The jobs descriptions are usually really long. There may be a summary option but I'm not sure. Looking at the API documentation is really confusing."
                    link="https://www.oracle.com/careers/"/>
            </CardLayout>
        </div>
    );
}