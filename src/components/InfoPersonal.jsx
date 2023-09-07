import '../styles/InfoPersonal.css';

function InfoPersonal({name, about, phone, email, address}){
   return(
      <div>
         <h2>{name}</h2>
         <p>{about}</p>
         <ul>
            <li><b>Phone: </b>{phone}</li>
            <li><b>Email: </b>{email}</li>
            <li><b>Address: </b>{address}</li>
         </ul>
      </div>
   );
}

export default InfoPersonal;