import { useState } from 'react';
// import {  useNavigate } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const AddStudent = ({studentList,setStudentList})=>{
      const [name,setName]=useState("")
      const [batch,setBatch]=useState("")
      const [year,setYear]=useState("")
      // const navigate = useNavigate()

    return(
          <>
            
            <Box sx={{ width:"100%" }}>
                    
                    <TextField 
                     sx={{width:"50%", margin:"3% 25% 2% 25%"}}
                    id="outlined-basic" label="Name:" variant="outlined" 
                     value={name}
                      onChange={(e)=>{
                         setName(e.target.value)
                      }}
                    />

                    <TextField 
                      sx={{width:"50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="Batch:" variant="outlined" 
                        value={batch}
                        onChange={(e)=>{
                          setBatch(e.target.value)
                        }}
                    />

                    <TextField 
                      sx={{width:"50%", margin:"0% 25% 2% 25%"}}
                    id="outlined-basic" label="Year:" variant="outlined" 
                      value={year}
                      onChange={(e)=>{
                        setYear(e.target.value)
                    }}
                    />
   
            </Box>

            <Stack spacing={2} direction="row">
                
                <Button 
                  sx={{marginLeft: "40%"}}
                variant="contained"
                  onClick={()=>{
                     
                    const student={
                        name: name,
                            batch,
                            year
                    }
                    console.log(student)
                    setStudentList([...studentList,student])
                    console.log(studentList)
                   }}
                  >Add Student</Button>

                <Button 
                  sx={{marginRight:'30%',width:"8.5"}}
                variant="contained"
                      // onClick={()=>{
                      //   navigate('/')    
                      //    }}
               >Back</Button>
                
             </Stack>

          </>
    )
}
export default AddStudent;