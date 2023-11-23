import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';

    const Students = ({name,batch,year,id})=>{
       
         return(
            <>
            
            <Card sx={{ width: "310px", marginBottom: "20px" }}> 
            
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: pink[100] }} aria-label="id">
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
            </CardContent>
            
            </Card>

            </>
         )

    }

    export default Students