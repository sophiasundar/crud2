import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import navBarMUI from './NavBarMUI.css';

const NavBarMUI=()=>{
    const navigate = useNavigate()
    return(
    
    <>
     
     <Box className='navbtn' sx={{ flexGrow: 1 }} >
        <CssBaseline />

        <AppBar  component="nav">
        
        <Toolbar >

          <Typography className='navbtn'
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Teacher-Student Profile
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
              <Button  className='navbtn' sx={{ color: '#fff' }}
               onClick={()=>{
                   navigate('/')
               }}
              >DASHBOARD</Button>

            <Button className='navbtn' sx={{ color: '#fff' }}
                onClick={()=>{
                   navigate('/addteacher')
               }}> ADD TEACHER
              </Button>

              <Button className='navbtn' sx={{ color: '#fff' }}
                onClick={()=>{
                   navigate('/addstudent')
               }}> ADD STUDENT
              </Button>

         
          </Box>
        </Toolbar>
       
      </AppBar>
     
      
     </Box>
    
    </>
    )
}

export default NavBarMUI