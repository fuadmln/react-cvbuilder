import '../styles/InfoExperience.css';
import ExperienceItem from './ExperienceItem';

function InfoExperience({experiences}){
   return (
      <div>
         <h2 style={{textDecoration: 'underline'}}>Work Experiences</h2>
         <div>
            {experiences.toReversed().map((experience, index) => (
               <ExperienceItem
                  key={`${experience.yearIn}-${index}`}
                  experience={experience}
               />
            ))}
         </div>
      </div>
   );
}

export default InfoExperience;