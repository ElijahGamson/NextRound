import {JobCard} from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import {CardLayout} from '../styles/cardStyles';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';

export default function JobsPage(){
    return (
    <>
        <GlobalStyles />
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
        </CardLayout>
    </> 
    );
}