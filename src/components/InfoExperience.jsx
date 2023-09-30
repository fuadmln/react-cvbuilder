import '../styles/InfoExperience.css';
import ExperienceItem from './ExperienceItem';

function InfoExperience({experiences}){
   return (
      <div className="cv-experience">
         <h2>Work Experiences</h2>
         <div className="list">
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