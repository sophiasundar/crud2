import * as React from 'react';
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import editTeacher from './editTeacher.css';


export const EditTeacher=()=>{
    const [teacher,setTeacher] = useState(null)
    const {id}=useParams()

    const getTeacher=async()=>{
      try{
        const response = await fetch(`https://6560586d83aba11d99d0a65e.mockapi.io/teacher/${id}`)
        const teacherData = await response.json();
        setTeacher(teacherData);
    }catch (error) {
      console.error("Error fetching teacher:", error);
    }
  };
    useEffect(()=>{
     getTeacher()
    },[id])

       return(
        <>
          {teacher? <EditTeacherField teacher={teacher} id={id}/>: "Loading...." }
        </>
       )
       }

       const EditTeacherField = ({teacher, id})=>{

        const navigate = useNavigate()

        const [name,setName] = useState(teacher.name)
        const [qualification,setQualification] = useState(teacher.qualification)
        const [year,setYear] = useState(teacher.year)
        const [validated,setvalidated] = useState(false)

        const handleUpdateTeacher=(e)=>{
            const teacher= {
                name: name,
                      qualification,
                      year,
              }
                console.log(teacher)

                if(teacher.name === ""){
                  setvalidated("VALID: Name is required");
                  return;
            }else if(teacher.qualification === ""){
                 setvalidated("VALID: Qualification is required");
                 return;
            }else if(teacher.year === ""){
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
      
                fetch(`https://6560586d83aba11d99d0a65e.mockapi.io/teacher/${id}`,{
                  method:"PUT",
                  body:JSON.stringify(teacher),
                  headers:{
                    "Content-Type":"application/json"
                  }
                }).then(()=>navigate('/teacherlist'))
           }

           return(
           <>
             
               <h4 className='et'>Edit Teacher</h4>
                <Box sx={{ width: "100%" }}>
                <h6 className="valid" >{validated}</h6>
                    <TextField 
                       sx={{width: "50%", margin:"1% 25% 2% 25%"}}
                    id="outlined-basic" label="Teacher Name:" variant="outlined" 
                      value={name}
                      onChange={(e)=>{
                          setName(e.target.value)
                      }}

                    />
                    
                    <TextField 
                       sx={{width: "50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="Teacher Qualification" variant="outlined" 
                      value={qualification}
                       onChange={(e)=>{
                          setQualification(e.target.value)
                       }}
                    />

                    <TextField 
                       sx={{width: "50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="TeacherYear" variant="outlined" 
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
                    onClick={handleUpdateTeacher}
                    >update teacher</Button>

                    <Button  className="b2"
                      sx={{marginLeft:"-50%", width: "8.5%"}}  
                    variant="contained"
                        onClick={()=>{
                            navigate('/')
                        }}
                    >Back</Button>
                
                </Stack>
           </>
           )
}