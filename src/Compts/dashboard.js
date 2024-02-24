import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import dashboard from './dashboard.css';

const Dashboard=()=>{
    const navigate = useNavigate()
    return(
    <>
        
        <div >
            
          <h1 className='header'>Welcome to Teacher and Student Profile</h1>
        
        <div className='cardholder'>
        <div class="card"   style={{width:"18%"}}>
       
       <div class="card-body">
        <h6>Click here to view</h6>
       <h5 class="card-title"> TEACHER LIST</h5>
       <img className="card-img-top" src="https://www.nicepng.com/png/detail/126-1269371_student-list-icon-png.png" alt="Card image cap"></img>
        <a href="#" class="btn btn-primary">
        <Button className='button' sx={{ color: '#fff' }}
               onClick={()=>{
                   navigate('/teacherlist')
               }}
              >Teacher list</Button>
        </a>
        </div>
        </div>

         
       
        <div class="card"   style={{width:"18%"}}>
       <div class="card-body">
       <h6>Click here to view</h6>
       <h5 class="card-title">STUDENT LIST</h5>
       <img className="card-img-top" src="https://www.nicepng.com/png/detail/126-1269371_student-list-icon-png.png" alt="Card image cap"></img>
        <a href="#" class="btn btn-primary">
        <Button className='button' sx={{ color: '#fff' }}
               onClick={()=>{
                   navigate('/studentlist')
               }}
              > student list</Button>
        </a>
        </div>
        </div>
        
        
        </div>
        {/* <br></br> */}

             <p className='para'>Student teachers' duties include helping with lesson plans, organizing learning activities, managing student behaviors, observing classroom procedures, preparing visual materials and other educational equipment, providing feedback for students, and keeping students' records for evaluation.</p>
        </div>
       
    </>
    )
}
export default Dashboard