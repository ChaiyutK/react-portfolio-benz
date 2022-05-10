import './App.css';
import Header from './components/Header';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionSkill from './components/SectionSkill';
import SectionEducation from './components/SectionEducation';
import SectionWorkExperience from './components/SectionWorkExperience';
import SectionPortfolio from './components/SectionPortfolio';
import SectionAchievement from './components/SectionAchievement';
import SectionContact from './components/SectionContact';

function App() {
  return (
    <>
    <Header/>
    <div className='container'>
    <SectionHome/>
    <SectionAbout/>
    <SectionSkill/>
    <SectionEducation/>
    <SectionAchievement/>
    <SectionWorkExperience/>
    <SectionPortfolio/>
    <SectionContact/>
    </div>
    </>
  );
}

export default App;
