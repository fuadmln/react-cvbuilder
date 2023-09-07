import '../styles/InfoEducation.css'
import EducationItem from './EducationItem';
import {educations} from '../dummy-data.js';

function InfoEducation() {
   return (
      <div>
         <h2>Educations</h2>
         <div>
            {educations.toReversed().map((education, index) => (
               <EducationItem
                  key={`${education}-${index}`}
                  institution={education.institution}
                  degree={education.degree}
                  major={education.major}
                  yearIn={education.yearIn}
                  yearOut={education.yearOut}
                  location={education.location}
               />
            ))}
         </div>
      </div>
   );
}

export default InfoEducation;