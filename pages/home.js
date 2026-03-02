import IntroCard from '../components/Cards'; // ./ (look in same folder), ../ (go up a folder)
import GlobalStyles from '../styles/GlobalStyles';

export default function HomePage(){
    return (
    <div>
        <GlobalStyles/>
        <Nav></Nav>
        <IntroCard></IntroCard>
    </div>
    );
}