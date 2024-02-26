import Students from "./student"
import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
  
const StudentList=()=>{
   
  const navigate = useNavigate()
  const [studentList,setStudentList]=useState([])
   
   const getStudent=()=>{
    fetch("https://6560586d83aba11d99d0a65e.mockapi.io/student")
    .then((data)=>data.json())     
    .then((res)=>setStudentList(res))
   }
  
      const deleteStudent=(id)=>{
        fetch(`https://6560586d83aba11d99d0a65e.mockapi.io/student/${id}`, {method:"DELETE"}
        )
        .then((data)=>data.json())     
        .then((res)=>{getStudent()})
      }


      useEffect(()=>{
        getStudent()
      },[])
  
  
  return(
        <>
           <div className="App">

             {
                studentList.map((element,index)=>{
                    return <Students {...element} key={index}
                    
                    deleteButton={
                      <IconButton aria-label="delete" sx={{ color: '#fff' }}>
                        <DeleteIcon 
                          onClick={()=>{
                            deleteStudent(element.id)
                           }}
                        />
                      </IconButton>
                    }
                    
                    editButton={
                      <IconButton aria-label="edit" sx={{ color: '#fff' }}>
                        <EditIcon
                          onClick={()=>{
                            navigate(`/edit/${element.id}`)
                           }}
                        />
                      </IconButton>
                    }
                 
                  />
                  })
              }

             <Button variant="contained"
               sx={{margin:"5% 50% 5% 50%"}}
               onClick={()=>{
                navigate('/')
               }}
             >Back</Button> 

           </div>
        </>
    )
}

export default StudentList