import * as React from 'react';
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import editStudent from './editStudent.css';


export const EditStudent=()=>{
    const [student,setStudent] = useState(null)
    const {id}=useParams()

    const getStudent=async()=>{
      try{
        const response = await fetch(`https://6560586d83aba11d99d0a65e.mockapi.io/student/${id}`)
          const studentData = await response.json();
          setStudent(studentData);
        } catch (error) {
          console.error("Error fetching student:", error);
        }
      };
    useEffect(()=> {
      getStudent()
    },[id]);

       return(
        <>
          {student? <EditStudentField student={student} id={id}/>: "Loading...." }
        </>
       )
}


    const EditStudentField = ({ student, id })=>{

        const navigate = useNavigate()

        const [name,setName] = useState(student.name)
        const [batch,setBatch] = useState(student.batch)
        const [year,setYear] = useState(student.year)
        const [validated,setvalidated] = useState(false)

        const handleUpdateStudent=(e)=>{
            const student= {
                name: name,
                      batch,
                      year,
              };    
                console.log(student)
                
                if(student.name === ""){
                  setvalidated("VALID: Name is required");
                  return;
            }else if(student.batch === ""){
                 setvalidated("VALID: Batch is required");
                 return;
            }else if(student.year === ""){
                 setvalidated("VALID: Year is required");
                 return;
            }else{
                setvalidated("")
            }
   
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
              e.preventDefault();
              e.stopPropagation();
            }
             setvalidated(true);
   
          //  fetch('https://6560586d83aba11d99d0a65e.mockapi.io/student',{
          //      method:"POST",
          //      body:JSON.stringify(student),
          //      headers:{
          //        "Content-Type":"application/json"
          //      }
          //    }).then(()=>navigate('/studentlist'))


                fetch(`https://6560586d83aba11d99d0a65e.mockapi.io/student/${id}`,{
                  method:"PUT",
                  body:JSON.stringify(student),
                  headers:{
                    "Content-Type":"application/json"
                  }
                }).then(()=>navigate('/studentlist'))
           }

        return(
            <>

            <h4 className="et">Edit Student</h4>
            <Box 
               sx={{  width: "100%" }}>
                    <h6 className="valid" >{validated}</h6>
                    <TextField 
                       sx={{width: "50%", margin:"2% 25% 2% 25%"}}
                    id="outlined-basic" label="Student Name :" variant="outlined" 
                    value={name}
                    onChange={(e)=>{
                      setName(e.target.value)
                    }}
                    />

                    <TextField 
                        sx={{width: "50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="Student Batch:" variant="outlined" 
                    value={batch}
                    onChange={(e)=>{
                      setBatch(e.target.value)
                    }}
                    />
                    <TextField 
                         sx={{width: "50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="Student Year:" variant="outlined" 
                    value={year}
                    onChange={(e)=>{
                      setYear(e.target.value)
                    }}
                    />
            </Box>

            <Stack spacing={2} direction="row">
                
                      <Button  className='mvbtn' color='success'
                      sx={{marginRight:"200%"}} 
                      variant="contained"
                      onClick={handleUpdateStudent}
                      >Update student</Button>
                      
                      <Button className="b2" sx={{marginLeft:"-50%", width: "8.5%"}}  
                      variant="contained"
                      onClick={()=>{
                          navigate('/')
                      }}
                      >Back</Button>

            </Stack>


            </>
        )
                
    
}            