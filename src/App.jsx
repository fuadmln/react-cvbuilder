import './styles/App.css'
import FormPersonal from './components/FormPersonal';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';

function App() {

  return (
    <>
      <h1>CV Builder</h1>
      <FormPersonal />
      <FormEducation />
      <FormExperience />
    </>
  )
}

export default App
