import '../styles/FormReset.css';

function FormReset({setter, populateExample}){
   const {setProfile, setEducations, setExperiences} = setter;
   const resetHandler = () => {
      setProfile({
         name: '',
         email: '',
         phone: '',
         address: '',
         about: '',
         link: '',
         linkedin: ''
      });
      setEducations([]);
      setExperiences([]);
   }
   const removeEducationsHandler = () => { setEducations([]) }
   const removeExperiencesHandler = () => { setExperiences([]) }

   return (
      <div className="form-action">
         <button className="primary" onClick={populateExample}>Populate Example</button>
         <button className="delete" onClick={resetHandler}>Reset</button>
         <button className="delete" onClick={removeEducationsHandler}>Remove Educations</button>
         <button className="delete" onClick={removeExperiencesHandler}>Remove Experiences</button>
      </div>
   );
}

export default FormReset;