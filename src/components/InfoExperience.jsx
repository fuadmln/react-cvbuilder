import '../styles/InfoExperience.css';
import ExperienceItem from './ExperienceItem';
import {experiences} from '../dummy-data.js';

function InfoExperience(){
   return (
      <div>
         <h2 style={{textDecoration: 'underline'}}>Work Experiences</h2>
         <div>
            {experiences.toReversed().map((experience, index) => (
               <ExperienceItem
                  key={`${experience.yearIn}-${index}`}
                  position={experience.position}
                  company={experience.company}
                  yearIn={experience.yearIn}
                  yearOut={experience.yearOut}
                  description={experience.description}
               />
            ))}
         </div>
      </div>
   );
}

export default InfoExperience;