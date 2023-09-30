import '../styles/InfoEducation.css'
import EducationItem from './EducationItem';

function InfoEducation({educations}) {
   return (
      <div className="cv-education">
         <h2>Educations</h2>
         <div className="list">
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