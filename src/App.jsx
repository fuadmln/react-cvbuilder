import data from './dummy-data.js';
import './styles/App.css'
import FormPersonal from './components/FormPersonal';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import InfoPersonal from './components/InfoPersonal';
import InfoEducation from './components/InfoEducation.jsx';

function App() {
  const {name, about, phone, email, address} = data.bio;
  return (
    <>
      <h1>CV Builder</h1>
      <FormPersonal />
      <FormEducation />
      <FormExperience />
      <InfoPersonal 
        name={name}
        about={about}
        phone={phone}
        email={email}
        address={address}
      />
      <InfoEducation />
    </>
  )
}

export default App
