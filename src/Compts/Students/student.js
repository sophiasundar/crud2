import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import student from "./student.css"

    const Students = ({name,batch,year,id,editButton,deleteButton})=>{
       
         return(
            <>
                
            <Card className='card' sx={{ width: "310px", marginBottom: "20px" }}> 
            <br></br>
           
            <CardHeader
              
            avatar={
                <Avatar sx={{ bgcolor: pink[300] }} aria-label="id">
                    {id}
                </Avatar>
                }
                title={
                    <Typography variant="h5" >{name}</Typography>
                }
            />
            <CardContent>
                <Typography paragraph><b>Batch:</b>  {batch} </Typography>
                <Typography paragraph><b>Year:</b>  {year} </Typography>
                <Stack  direction="row" spacing={3}>
            <Button className='colorbtn1' variant="contained" color="success">{editButton}</Button> 
               
            <Button className='colorbtn2' variant="contained" color="error">{deleteButton}</Button>       
               </Stack>
            </CardContent>
            
            </Card>

            </>
         )

    }

    export default Students