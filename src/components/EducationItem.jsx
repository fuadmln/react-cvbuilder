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
         <h3>{education.institution}</h3>
         <p className="major">{education.degree} {education.major}</p>
         <p className="date">{education.yearIn} - {education.yearOut}</p>
         <p className="location">{education.location}</p>
      </div>
   );
}

export default EducationItem;