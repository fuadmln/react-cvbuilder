function ExperienceItem({position, company, yearIn, yearOut, description}){
   return(
      <div>
         <h3>{position}</h3>
         <div>{company}</div>
         <div>{yearIn} - {yearOut}</div>
         <div>{description}</div>
      </div>
   );
}

export default ExperienceItem;