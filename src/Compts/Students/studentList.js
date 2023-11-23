import { allStudent } from "./allStudents"
import Students from "./student"


const StudentList=()=>{
    return(
        <>
           <div className='App'>

             {
                allStudent.map((element,index)=>{
                    return <Students {...element} key={index}/>
                })
             }
 

           </div>
        </>
    )
}

export default StudentList