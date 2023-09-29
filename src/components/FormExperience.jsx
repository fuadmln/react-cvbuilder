import { useState } from 'react';
import FormExperienceItem from './FormExperienceItem';
import '../styles/FormExperience.css'

function FormExperience({experiences, setExperiences}){
   const [formData, setFormData] = useState({});

   const changeProperty = (e) => {
      const id = Date.now();
      const key = e.target.name;
      const value = e.target.value;
      setFormData({...formData, [key]: value, id});
   }

   const clickAdd = (e) => {
      e.preventDefault();
      setExperiences((experiences) => [formData, ...experiences]);
      setFormData({});
      document.getElementById('experienceForm').reset();
   }

   return (
      <div>
         <h2>Add Experience</h2>
         <span>*from the most recent to oldest</span>
         <form id="experienceForm">
            <div>
               <label htmlFor="inputPosition">Position</label>
               <br />
               <input type="text" id="inputPosition" name="position" placeholder="type your job position" onBlur={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputCompany">Company</label>
               <br />
               <input type="text" id="inputCompany" name="company" placeholder="type your company" onBlur={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputJobYearIn">Year in</label>
               <br />
               <input type="text" id="inputJobYearIn" name="yearIn" placeholder="month, year" onBlur={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputJobYearOut">Year out</label>
               <br />
               <input type="text" id="inputJobYearOut" name="yearOut" placeholder="month, year" onBlur={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputDescription">Description</label>
               <br />
               <textarea id="inputDescription" name="description" cols="30" rows="10" placeholder="write the job description" onBlur={changeProperty}></textarea>
            </div>
            <button onClick={clickAdd}>Add</button>
         </form>

         {experiences && (
            <div>
               {experiences.toReversed().map( experience => <FormExperienceItem key={experience.id} experience={experience} setExperiences={setExperiences} /> )}
            </div>
         )}
      </div>
   );
}

export default FormExperience;