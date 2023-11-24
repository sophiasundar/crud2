import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';


const Dashboard=()=>{
    const navigate = useNavigate()
    return(
    <>
        
        <div className="App">
        
        
        <div class="card"   style={{width:"18%"}}>
       
       <div class="card-body">
       <h5 class="card-title">STUDENT LIST</h5>
       <img class="card-img-top" src="https://www.nicepng.com/png/detail/126-1269371_student-list-icon-png.png" alt="Card image cap"></img>
        <a href="#" class="btn btn-primary">
        <Button sx={{ color: '#fff' }}
               onClick={()=>{
                   navigate('/studentlist')
               }}
              >STUDENT DASHBOARD</Button>
        </a>
        </div>
        </div>

         

        <div class="card"   style={{width:"18%"}}>
       <div class="card-body">
       <h5 class="card-title">TEACHER LIST</h5>
       <img class="card-img-top" src="https://www.nicepng.com/png/detail/126-1269371_student-list-icon-png.png" alt="Card image cap"></img>
        <a href="#" class="btn btn-primary">
        <Button sx={{ color: '#fff' }}
               onClick={()=>{
                   navigate('/teacherlist')
               }}
              >TEACHER DASHBOARD</Button>
        </a>
        </div>
        </div>
        </div>
       
    </>
    )
}
export default Dashboard