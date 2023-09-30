function ExperienceItem({experience}){
   return(
      <div>
         <div className="item-header">
            <h3>{experience.position}</h3>
            <p className="date">{experience.yearIn} - {experience.yearOut}</p>
         </div>
         <p className="company">{experience.company}</p>
         <p className="description">{experience.description}</p>
      </div>
   );
}

export default ExperienceItem;