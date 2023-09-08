function EducationItem({institution, degree, major, yearIn, yearOut, location}){
   const degreeName = {
      school: '',
      diploma: 'Diploma\'s in ',
      bachelor: 'Bachelor\'s Degree in ',
      master: 'Master\'s Degree in '
   };

   degree = degreeName[degree];

   return(
      <div>
         <h3 style={{color: 'blue'}}>{institution}</h3>
         <div>{degree} {major}</div>
         <div>{yearIn} - {yearOut}</div>
         <div>{location}</div>
      </div>
   );
}

export default EducationItem;