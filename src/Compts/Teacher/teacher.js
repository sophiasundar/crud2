import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import teacher from './teacher.css'

     const Teacher = ({ name,qualification,year,id,editButton,deleteButton})=>{
        return(
         
         
        <>
         
         <div>
         <Card className='card' sx={{ width: "310px", marginBottom: "20px" }}>
         <br></br>
         <CardHeader
            avatar={
               <Avatar sx={{ bgcolor: pink[100] }} aria-label="id">
                  {id}
               </Avatar>
        }
        
            title={
               <Typography variant="h5">{name}</Typography>
            }
      />

      <CardContent>
        
        <Typography paragraph> <b>Qualification:</b> {qualification} </Typography>

        <Typography paragraph><b>Year:</b> {year} </Typography>
                     {editButton}
                      {deleteButton}
      </CardContent>
           

          </Card> 
          </div>

        </>
        )
     }

     export default Teacher