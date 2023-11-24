import { useState } from "react";
import { useNavigate } from "react-router";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AddTeacher=()=>{
    const [name,setName]=useState("")
    const [qualification,setQualification]=useState("")
    const [year,setYear]=useState("")

    const navigate = useNavigate()

    const addTeacher=()=>{
        const teacher={
            name:name,
            qualification,
            year,
        }
         console.log(teacher)

         fetch('https://6560586d83aba11d99d0a65e.mockapi.io/teacher',{
            method:"POST",
            body:JSON.stringify(teacher),
            headers:{
              "Content-Type":"application/json"
            }
          }).then(()=>navigate('/teacherlist'))
    }
    return(
    <>
     <Box
      sx={{ width: "100%"}}
     >
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
      id="outlined-basic" label="Qualification:" variant="outlined" 
      value={qualification}
      onChange={(e)=>{
          setQualification(e.target.value)
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
      
      <Button 
        sx={{margin:"5% 50% 5% 50%"}}
        variant="contained"
          onClick={()=>{
              addTeacher()
          }}
      >Add Teacher</Button>
      <Button variant="contained"
        sx={{margin:"5% 50% 5% 50%"}}
        onClick={()=>{
         navigate('/')
        }}
      >Back</Button>
    </Stack>


    </>
    )

}
export default AddTeacher