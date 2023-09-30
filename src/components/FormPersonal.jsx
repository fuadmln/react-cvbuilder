import '../styles/FormPersonal.css'

function PersonalForm({profile, setProfile}){
   const changeProperty = (e) => {
      const key = e.target.name;
      const value = e.target.value;
      setProfile({...profile, [key]: value});
   }

   return (
      <div className="form-personal">
         <h2>Fill Personal Details</h2>
         <form >
            <div>
               <label htmlFor="inputName">Full Name</label>
               <input 
                  type="text" 
                  id="inputName" 
                  name="name" 
                  placeholder="my name is .." 
                  onChange={changeProperty}
                  value={profile.name}
               />
            </div>
            <div>
               <label htmlFor="inputPhone">Phone Number</label>
               <input
                  type="tel" 
                  id="inputPhone" 
                  name="phone" 
                  placeholder="type your number" 
                  onChange={changeProperty} 
                  value={profile.phone} 
               />
            </div>
            <div>
               <label htmlFor="inputEmail">Email</label>
               <input
                  type="email" 
                  id="inputEmail" 
                  name="email" 
                  placeholder="type your email" 
                  onChange={changeProperty}
                  value={profile.email}
               />
            </div>
            <div>
               <label htmlFor="inputAddress">Address</label>
               <input
                  type="text" 
                  id="inputAddress" 
                  name="address" 
                  placeholder="I live at .." 
                  onChange={changeProperty} 
                  value={profile.address}
               />
            </div>
            <div>
               <label htmlFor="linkedin">LinkedIn</label>
               <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  placeholder="linkedin url"
                  onChange={changeProperty}
                  value={profile.linkedin}
               />
            </div>
            <div>
               <label htmlFor="link">Site</label>
               <input
                  type="text"
                  id="link"
                  name="link"
                  placeholder="site url"
                  onChange={changeProperty}
                  value={profile.link}
               />
            </div>
            
            <div>
               <label htmlFor="inputAbout">About</label>
               <textarea id="inputAbout" cols="30" rows="10" name="about" placeholder="describe your self" onChange={changeProperty} value={profile.about}></textarea>
            </div>
         </form>
      </div>
   );
}

export default PersonalForm;