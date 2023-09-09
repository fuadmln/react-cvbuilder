import '../styles/FormPersonal.css'

function PersonalForm({profile, setProfile}){
   const changeProperty = (e) => {
      let key = e.target.name;
      let value = e.target.value;
      setProfile({...profile, [key]: value});
   }

   return (
      <div>
         <h2>Fill Personal Details</h2>
         <form >
            <div>
               <label htmlFor="inputName">Full Name</label>
               <br />
               <input type="text" id="inputName" name="name" placeholder="my name is .." onChange={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputPhone">Phone Number</label>
               <br />
               <input type="tel" id="inputPhone" name="phone" placeholder="type your number" onChange={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputEmail">Email</label>
               <br />
               <input type="email" id="inputEmail" name="email" placeholder="type your email" onChange={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputAddress">Address</label>
               <br />
               <input type="text" id="inputAddress" name="address" placeholder="I live at .." onChange={changeProperty} />
            </div>
            <div>
               <label htmlFor="inputAbout">About</label>
               <br />
               <textarea id="inputAbout" cols="30" rows="10" name="about" placeholder="describe your self" onChange={changeProperty}></textarea>
            </div>
         </form>
      </div>
   );
}

export default PersonalForm;