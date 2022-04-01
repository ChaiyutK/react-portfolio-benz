import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionSkill from './components/SectionSkill';

function App() {
  return (
    <>
    <Header/>
    <div className='container'>
    <SectionHome/>
    <SectionAbout/>
    <SectionSkill/>
    </div>
    </>
  );
}

export default App;