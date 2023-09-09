import { useState } from 'react';
import '../styles/FormEducation.css';

function FormEducation({setEducations}){
   const [formData, setFormData] = useState({});

   const changeProperty = (e) => {
      const key = e.target.name;
      const value = e.target.value;
      setFormData({...formData, [key]: value});
   }

   const clickAdd = (e) => {
      e.preventDefault();
      setEducations((educations) => [...educations, formData]);
      setFormData({});
      document.getElementById('educationForm').reset();
   }

   return (
      <div>
         <h2>Add Education</h2>
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
            <button onClick={clickAdd}>Add</button>
         </form>
      </div>
   );
}

export default FormEducation;