import { allStudent } from "./allStudents"
import Students from "./student"


const StudentList=({studentList})=>{
    return(
        <>
           <div className='App'>

             {
                studentList.map((element,index)=>{
                    return <Students {...element} key={index}/>
                })
             }
 

           </div>
        </>
    )
}

export default StudentList