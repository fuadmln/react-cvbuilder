import { useState } from 'react';
import FormEducationItem from './FormEducationItem';
import '../styles/FormEducation.css';

function FormEducation({educations, setEducations}){
   const [formData, setFormData] = useState({});

   const changeProperty = (e) => {
      const id = Date.now();
      const key = e.target.name;
      const value = e.target.value;
      setFormData({...formData, [key]: value, id});
   }

   const clickAdd = (e) => {
      e.preventDefault();
      setEducations((educations) => [formData, ...educations]);
      setFormData({});
      document.getElementById('educationForm').reset();
   }

   return (
      <div className="form-education">
         <h2>Add Education</h2>
         <p className="text-helper">*from the most recent to oldest</p>
         <form id="educationForm">
            <div>
               <label htmlFor="inputDegree">Degree</label>
               <br />
               <select name="degree" id="inputDegree" onBlur={changeProperty}>
                  <option value="master">Master</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="diploma">Diploma</option>
                  <option value="none">-</option>
               </select>
            </div>
            <div>
               <label htmlFor="inputInstitution">University/School</label>
               <br />
               <input type="text" id="inputInstitution" name="institution" placeholder="type your institution" onBlur={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputMajor">Major</label>
               <br />
               <input type="text" id="inputMajor" name="major" placeholder="type your major" onBlur={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputYearIn">Year in</label>
               <br />
               <input type="number" id="inputYearIn" name="yearIn" placeholder="when you enter?" onBlur={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputYearOut">Year out</label>
               <br />
               <input type="number" id="inputYearOut" name="yearOut" placeholder="when you out?" onBlur={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputLocation">Location</label>
               <br />
               <input type="text" id="inputLocation" name="location" placeholder="city, nation" onBlur={changeProperty} />
            </div>
            <button className="primary" onClick={clickAdd}>Add</button>
         </form>
         {educations && (
            <div className="education-list">
               {educations.toReversed().map( education => <FormEducationItem key={education.id} education={education} setEducations={setEducations} /> )}  
            </div>
         )}
      </div>
   );
}

export default FormEducation;