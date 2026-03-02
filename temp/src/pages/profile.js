import {ProfileCard} from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';

export default function LoginPage(){
    return (
    <div>
        <GlobalStyles/>
        <Nav/>
        <ProfileCard></ProfileCard>
    </div>
    );
}