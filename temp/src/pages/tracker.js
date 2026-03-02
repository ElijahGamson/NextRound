import {TrackerCard} from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import {CardLayout} from '../styles/cardStyles';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';

export default function TrackerPage(){
    return(
    <> {/* Empty container because functions require a parent container*/}
        <GlobalStyles/>
        <Nav/>
        <label>Search for a specific job:</label>
        <input type="text" placeholder="Keywords"/>
        <hr style={{marginBottom: "10px"}}/>
        <CardLayout>
        <TrackerCard title="Frontend Developer" 
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
        </CardLayout>
    </>

    );
}