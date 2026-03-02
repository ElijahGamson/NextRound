import TrackerCard from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import GlobalStyles from '../styles/GlobalStyles';

export default function TrackerHome(){
    return(
    <>
        <GlobalStyles/>
        <Nav/>
        <TackerCard title="Frontend Developer" 
            company="Google"
            link="https://www.google.com/about/careers/applications/jobs/results"/>

        <TrackerCard title="Backend Engineer" 
            company="Amazon"
            link="https://www.amazon.jobs/en/"/>
        
        <TrackerCard title="AI Designer" 
            company="Microsoft"
            link="https://careers.microsoft.com/v2/global/en/home.html"/>

        <TrackerCard title="Database Maintainer" 
            company="Oracle"
            link="https://www.oracle.com/careers/"/>
    </>

    );
}