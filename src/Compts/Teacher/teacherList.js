import Teacher from "./teacher";
import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TeacherList=()=>{
         
    const navigate = useNavigate()
    const [teacherList,setTeacherList]=useState([])

     const getTeacher=()=>{
      fetch("https://6560586d83aba11d99d0a65e.mockapi.io/teacher")
      .then((data)=>data.json())     
      .then((res)=>setTeacherList(res))
     }

     const deleteTeacher=(id)=>{
      fetch(`https://6560586d83aba11d99d0a65e.mockapi.io/teacher/${id}`, {method:"DELETE"}
      )
      .then((data)=>data.json())     
      .then((res)=>{getTeacher()})
    }


    useEffect(()=>{
      getTeacher()
    },[])

    return(
    <>

      <div className="App">
         {
            teacherList.map((element,index)=>{
                return <Teacher {...element} key={index}
                
                deleteButton={
                  <IconButton aria-label="delete">
                     <DeleteIcon 
                     onClick={()=>{
                        deleteTeacher(element.id)
                       }}
                     />
                  </IconButton>
                }
                
                editButton={
                  <IconButton aria-label="delete">
                     <EditIcon
                        onClick={()=>{
                           navigate(`/editteacher/${element.id}`)
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

export default TeacherList;