import '../styles/FormExperience.css'

function FormExperience(){
   return (
      <div>
         <h2>Add Experience</h2>
         <form >
            <div>
               <label htmlFor="inputPosition">Position</label>
               <br />
               <input type="text" id="inputPosition" placeholder="type your job position" />
            </div>
            <div>
               <label htmlFor="inputCompany">Company</label>
               <br />
               <input type="text" id="inputCompany" placeholder="type your company" />
            </div>
            <div>
               <label htmlFor="inputJobYearIn">Year in</label>
               <br />
               <input type="text" id="inputJobYearIn" placeholder="month, year" />
            </div>
            <div>
               <label htmlFor="inputJobYearOut">Year out</label>
               <br />
               <input type="text" id="inputJobYearOut" placeholder="month, year" />
            </div>
            <div>
               <label htmlFor="inputDescription">Description</label>
               <br />
               <textarea id="inputDescription" cols="30" rows="10" placeholder="write the job description"></textarea>
            </div>
         </form>
      </div>
   );
}

export default FormExperience;