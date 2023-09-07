import '../styles/FormPersonal.css'

function PersonalForm(){
   return (
      <div>
         <h2>Fill Personal Details</h2>
         <form >
            <div>
               <label htmlFor="inputName">Full Name</label>
               <br />
               <input type="text" id="inputName" placeholder="my name is .." />
            </div>
            <div>
               <label htmlFor="inputPhone">Phone Number</label>
               <br />
               <input type="tel" id="inputPhone" placeholder="type your number" />
            </div>
            <div>
               <label htmlFor="inputEmail">Email</label>
               <br />
               <input type="email" id="inputEmail" placeholder="type your email" />
            </div>
            <div>
               <label htmlFor="inputAddress">Address</label>
               <br />
               <input type="text" id="inputAddress" placeholder="I live at .." />
            </div>
            <div>
               <label htmlFor="inputAbout">About</label>
               <br />
               <textarea id="inputAbout" cols="30" rows="10" placeholder="describe your self"></textarea>
            </div>
         </form>
      </div>
   );
}

export default PersonalForm;