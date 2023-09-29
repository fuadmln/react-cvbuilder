function FormEducationItem({education, setEducations}){
   const deleteHandler = (id) => {
      setEducations((educations) => {
         return educations.filter( education => education.id != id)
      });
   }

   return(
      <div>
         <span>{education.institution}</span>
         <button onClick={() => deleteHandler(education.id)} style={{marginLeft: '6px'}}>delete</button>
      </div>
   );
}

export default FormEducationItem;