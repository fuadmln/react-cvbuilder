function FormExperienceItem({experience, setExperiences}){
   const deleteHandler = (id) => {
      setExperiences((experiences) => {
         return experiences.filter( experience => experience.id != id)
      });
   }

   return(
      <div>
         <span>{experience.company} - {experience.position}</span>
         <button className="small delete" onClick={() => deleteHandler(experience.id)} style={{marginLeft: '6px'}}>delete</button>
      </div>
   );
}

export default FormExperienceItem;