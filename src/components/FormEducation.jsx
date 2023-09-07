import '../styles/FormEducation.css';

function FormEducation(){
   return (
      <div>
         <h1>Add Education</h1>
         <form>
            <div>
               <label htmlFor="inputDegree">Degree</label>
               <br />
               <select name="" id="inputDegree">
                  <option value="master">Master</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="diploma">Diploma</option>
                  <option value="none">-</option>
               </select>
            </div>
            <div>
               <label htmlFor="inputInstitutuon">University/School</label>
               <br />
               <input type="text" id="inputInstitutuon" placeholder="type your institution" />
            </div>
            <div>
               <label htmlFor="inputMajor">Major</label>
               <br />
               <input type="text" id="inputMajor" placeholder="type your major" />
            </div>
            <div>
               <label htmlFor="inputYearIn">Year in</label>
               <br />
               <input type="number" id="inputYearIn" placeholder="when you enter?" />
            </div>
            <div>
               <label htmlFor="inputYearOut">Year out</label>
               <br />
               <input type="number" id="inputYearOut" placeholder="when you out?" />
            </div>
            <div>
               <label htmlFor="inputLocation">Location</label>
               <br />
               <input type="text" id="inputLocation" placeholder="city, nation" />
            </div>
         </form>
      </div>
   );
}

export default FormEducation;