import '../styles/InfoPersonal.css';

function InfoPersonal({profile}){
   return(
      <div className="cv-personal">
         <h2>{profile.name}</h2>
         <p>{profile.about}</p>
         <ul>
            <li><b>Phone: </b>{profile.phone}</li>
            <li><b>Email: </b>{profile.email}</li>
            <li><b>Address: </b>{profile.address}</li>
         </ul>
      </div>
   );
}

export default InfoPersonal;