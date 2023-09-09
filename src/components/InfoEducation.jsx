import '../styles/InfoEducation.css'
import EducationItem from './EducationItem';

function InfoEducation({educations}) {
   return (
      <div>
         <h2 style={{textDecoration: 'underline'}}>Educations</h2>
         <div>
            {educations.toReversed().map((education, index) => (
               <EducationItem
                  key={`${education}-${index}`}
                  education={education}
               />
            ))}
         </div>
      </div>
   );
}

export default InfoEducation;