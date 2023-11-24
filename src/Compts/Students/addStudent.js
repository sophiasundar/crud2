import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";

const AddStudent=()=>{
    const [name,setName]=useState("")
    const [batch,setBatch]=useState("")
    const [year,setYear]=useState("")
   
    const navigate = useNavigate()

    const addStudent=()=>{
        const student={
            name:name,
            batch,
            year,
        }
         console.log(student)

        fetch('https://6560586d83aba11d99d0a65e.mockapi.io/student',{
            method:"POST",
            body:JSON.stringify(student),
            headers:{
              "Content-Type":"application/json"
            }
          }).then(()=>navigate('/studentlist'))
    }
    
    return(
        <>
         <Box sx={{ width: "100%"}}>

        <TextField 
          sx={{width: "50%", margin:"8% 25% 2% 25%"}}
        id="outlined-basic" label="Name:" variant="outlined" 
        value={name}
        onChange={(e)=>{
            setName(e.target.value)
        }}
        />
        
        <TextField 
           sx={{width: "50%", margin: "0% 25% 2% 25%"}}
        id="outlined-basic" label="Batch:" variant="outlined" 
        value={batch}
        onChange={(e)=>{
            setBatch(e.target.value)
        }}
        />

        <TextField 
           sx={{width: "50%", margin: "0% 25% 2% 25%"}}
        id="outlined-basic" label="Year:" variant="outlined" 
        value={year}
        onChange={(e)=>{
            setYear(e.target.value)
        }}
        />

   
    </Box>

    <Stack  direction="row" spacing={2}>
      
      <Button 
      sx={{margin:"5% 50% 5% 50%"}}
      variant="contained"
        onClick={()=>{
            addStudent()
        }}
        >
      Add student</Button>
      

      <Button variant="contained"
       sx={{margin:"5% 50% 5% 50%"}}
       onClick={()=>{
        navigate('/')
       }}
      >
      back</Button>

    </Stack>
        </>
    )


}

export default AddStudent;