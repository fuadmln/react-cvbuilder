function ExperienceItem({experience}){
   return(
      <div>
         <h3>{experience.position}</h3>
         <p className="company">{experience.company}</p>
         <p className="date">{experience.yearIn} - {experience.yearOut}</p>
         <p className="description">{experience.description}</p>
      </div>
   );
}

export default ExperienceItem;