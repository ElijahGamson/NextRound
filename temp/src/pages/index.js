import {IntroCard} from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';

export default function HomePage(){
    return (
    <div>
        <GlobalStyles/>
        <Nav></Nav>
        <IntroCard></IntroCard>
    </div>
    );
}