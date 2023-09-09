function EducationItem({education}){
   const degreeName = {
      school: '',
      diploma: 'Diploma\'s in ',
      bachelor: 'Bachelor\'s Degree in ',
      master: 'Master\'s Degree in '
   };
   
   education.degree = degreeName[education.degree];

   return(
      <div>
         <h3 style={{color: 'blue'}}>{education.institution}</h3>
         <div>{education.degree} {education.major}</div>
         <div>{education.yearIn} - {education.yearOut}</div>
         <div>{education.location}</div>
      </div>
   );
}

export default EducationItem;