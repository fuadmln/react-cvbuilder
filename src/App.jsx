import data from './dummy-data.js';
import './styles/App.css'
import Header from './components/Header'
import FormPersonal from './components/FormPersonal';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import FormReset from './components/FormReset.jsx';
import InfoPersonal from './components/InfoPersonal';
import InfoEducation from './components/InfoEducation.jsx';
import InfoExperience from './components/InfoExperience.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [profile, setProfile] = useState({});
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    populateExample();
  }, []);

  const populateExample = () => {
    setProfile(data.bio);
    setEducations(data.educations);
    setExperiences(data.experiences);
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="app__form">
          <FormReset setter={{setProfile, setEducations, setExperiences}} populateExample={populateExample} />
          <FormPersonal profile={profile} setProfile={setProfile} />
          <FormEducation educations={educations} setEducations={setEducations} />
          <FormExperience experiences={experiences} setExperiences={setExperiences} />
        </div>
        <div className="app__info">
          <InfoPersonal profile={profile} />
          <InfoEducation educations={educations} />
          <InfoExperience experiences={experiences} />
        </div>
      </div>
    </>
  )
}

export default App
