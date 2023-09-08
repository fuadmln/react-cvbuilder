function ExperienceItem({position, company, yearIn, yearOut, description}){
   return(
      <div>
         <h3 style={{color: 'blue'}}>{position}</h3>
         <div>{company}</div>
         <div>{yearIn} - {yearOut}</div>
         <div>{description}</div>
      </div>
   );
}

export default ExperienceItem;