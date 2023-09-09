import '../styles/FormReset.css';

function FormReset({setter, populateExample}){
   const {setProfile, setEducations, setExperiences} = setter;
   const resetHandler = () => {
      setProfile({});
      setEducations([]);
      setExperiences([]);
   }
   const removeEducationsHandler = () => { setEducations([]) }
   const removeExperiencesHandler = () => { setExperiences([]) }

   return (
      <div>
         <button style={{borderColor: 'red'}} onClick={resetHandler}>Reset</button>
         <button style={{borderColor: 'red'}} onClick={removeEducationsHandler}>Remove Educations</button>
         <button style={{borderColor: 'red'}} onClick={removeExperiencesHandler}>Remove Experiences</button>
         <button style={{color: 'blue'}} onClick={populateExample}>Populate Example</button>
      </div>
   );
}

export default FormReset;