import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import addStudent from "./addStudent.css"

const AddStudent=()=>{
    const [name,setName]=useState("")
    const [batch,setBatch]=useState("")
    const [year,setYear]=useState("")
    const [validated,setvalidated] = useState(false)
   
    const navigate = useNavigate()

    const handleSubmit= async(e)=>{
        const student={
            name:name.trim(),
            batch:batch.trim(),
            year:year.trim(),
        }
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
        <h4 className="header">Add Student</h4>

         <Box sx={{ width: "100%"}}>
         <h6 className="valid" >{validated}</h6>
        <TextField 
          sx={{width: "50%", margin:"0% 25% 2% 25%"}}
        id="outlined-basic" label="Student Name: space can be added after the input" variant="outlined" 
        value={name.trim()}
        onChange={(e)=>{
            setName(e.target.value.trim())
        }}
        />
        
        <TextField
           sx={{width: "50%", margin: "0% 25% 2% 25%"}}
        id="outlined-basic" label="Student Batch:" variant="outlined" 
        value={batch.trim()}
        onChange={(e)=>{
            setBatch(e.target.value.trim())
        }}
        />

        <TextField 
           sx={{width: "50%", margin: "0% 25% 2% 25%"}}
        id="outlined-basic" label="Student Year:" variant="outlined" 
        value={year.trim()}
        onChange={(e)=>{
            setYear(e.target.value.trim())
        }}
        />

   
    </Box>

    <Stack  direction="row" spacing={0.5}>
      
      <Button className="movebtn" color="success" 
      sx={{margin:"5% 50% 5% 50%"}}
      variant="contained"
        onClick={handleSubmit}
        >
      Add student</Button>
      

      <Button className="movebtn" variant="contained"
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