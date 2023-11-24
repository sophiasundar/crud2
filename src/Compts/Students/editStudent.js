import * as React from 'react';
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const EditStudent=()=>{
    const [student,setStudent] = useState(null)
    const {id}=useParams()

    const getStudent=()=>{
        fetch(`https://6560586d83aba11d99d0a65e.mockapi.io/student/${id}`)
          .then((data)=>data.json())
          .then((res)=>setStudent(res))
    }
    useEffect(()=> getStudent(),[])

       return(
        <>
          {student? <EditStudentField student={student}/>: "Loading...." }
        </>
       )
}


    const EditStudentField = ({student})=>{

        const navigate = useNavigate()

        const [name,setName] = useState(student.name)
        const [batch,setBatch] = useState(student.batch)
        const [year,setYear] = useState(student.year)

        const updateStudent=(id)=>{
            const student= {
                name: name,
                      batch,
                      year,
              }
                // console.log(student)
      
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
            
            <Box 
               sx={{  width: "100%" }}>
                    
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
                    id="outlined-basic" label="Batch:" variant="outlined" 
                    value={batch}
                    onChange={(e)=>{
                      setBatch(e.target.value)
                    }}
                    />
                    <TextField 
                         sx={{width: "50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="Year:" variant="outlined" 
                    value={year}
                    onChange={(e)=>{
                      setYear(e.target.value)
                    }}
                    />
            </Box>

            <Stack spacing={2} direction="row">
                
                <Button sx={{marginRight:"200%"}} 
                variant="contained"
                onClick={()=>{ 
                    updateStudent(student.id)
                 }}
                >Update Profile</Button>
                
                <Button sx={{marginLeft:"-50%", width: "8.5%"}}  
                variant="contained"
                onClick={()=>{
                    navigate('/')
                 }}
                >Back</Button>

            </Stack>


            </>
        )
                
    
}            