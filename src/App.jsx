import data from './dummy-data.js';
import './styles/App.css'
import FormPersonal from './components/FormPersonal';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import InfoPersonal from './components/InfoPersonal';
import InfoEducation from './components/InfoEducation.jsx';
import InfoExperience from './components/InfoExperience.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(data.bio);
  }, []);

  return (
    <>
      <h1>CV Builder</h1>
      <div className="wrapper">
        <div className="app__form">
          <FormPersonal profile={profile} setProfile={setProfile} />
          <FormEducation />
          <FormExperience />
        </div>
        <div className="app__info">
          <InfoPersonal profile={profile} />
          <InfoEducation />
          <InfoExperience />
        </div>
      </div>
    </>
  )
}

export default App
