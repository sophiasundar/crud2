import { useNavigate } from "react-router";
import * as React from 'react';
import Button from '@mui/material/Button';

const NotFound=()=>{
    const navigate = useNavigate()
      return(
         <>
         
         <div >
                <br/><br/><br/><br/>
            <img src="https://media.istockphoto.com/vectors/error-like-laptop-with-dead-emoji-cartoon-flat-minimal-trend-modern-vector-id1011988208?k=6&m=1011988208&s=612x612&w=0&h=6l7ZtOJxcQ_xTThiNX_X0XWKRDx9rKZzgjSePb0XmtQ=" alt=""/>
            </div>
            <br/><br/><br/><br/>

            <div>
            <Button sx={{marginLeft:"-170%", marginTop:"850%", width: "10%"}} 
              variant="contained"
                onClick={()=>{
                    navigate('/')
                }}
              >Back</Button>
            </div>

         </>
      )

}
export default NotFound