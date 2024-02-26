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

    const getTeacher=()=>{
        fetch(`https://6560586d83aba11d99d0a65e.mockapi.io/teacher/${id}`)
          .then((data)=>data.json())
          .then((res)=>setTeacher(res))
    }
    useEffect(()=> getTeacher(),[])

       return(
        <>
          {teacher? <EditTeacherField teacher={teacher}/>: "Loading...." }
        </>
       )
       }

       const EditTeacherField = ({teacher})=>{

        const navigate = useNavigate()

        const [name,setName] = useState(teacher.name)
        const [qualification,setQualification] = useState(teacher.qualification)
        const [year,setYear] = useState(teacher.year)

        const updateTeacher=(id)=>{
            const teacher= {
                name: name,
                      qualification,
                      year,
              }
                // console.log(teacher)
      
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
               <h4 className="header">Edit Teacher</h4>
                <Box sx={{ width: "100%" }}>
                    
                    <TextField 
                       sx={{width: "50%", margin:"8% 25% 2% 25%"}}
                    id="outlined-basic" label="Name:" variant="outlined" 
                      value={name}
                      onChange={(e)=>{
                          setName(e.target.value)
                      }}

                    />
                    
                    <TextField 
                       sx={{width: "50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="Qualification" variant="outlined" 
                      value={qualification}
                       onChange={(e)=>{
                          setQualification(e.target.value)
                       }}
                    />

                    <TextField 
                       sx={{width: "50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="Year" variant="outlined" 
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
                        onClick={()=>{ 
                            updateTeacher(teacher.id)
                        }}
                    >update teacher</Button>

                    <Button  className='mvbtn'
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