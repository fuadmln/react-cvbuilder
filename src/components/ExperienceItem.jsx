function ExperienceItem({experience}){
   return(
      <div>
         <h3 style={{color: 'blue'}}>{experience.position}</h3>
         <div>{experience.company}</div>
         <div>{experience.yearIn} - {experience.yearOut}</div>
         <div>{experience.description}</div>
      </div>
   );
}

export default ExperienceItem;