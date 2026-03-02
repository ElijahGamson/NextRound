import JobCard from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import GlobalStyles from '../styles/GlobalStyles';

export default function JobsHome(){
    return (
    <>
        <GlobalStyles />
        <Nav/>
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
    </> 
    );
}