import './App.css';
import AddStudent from './Compts/Students/addStudent';
import StudentList from './Compts/Students/studentList';
import { useState } from 'react';
import { allStudent } from './Compts/Students/allStudents';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBarMUI from './Compts/NavBarMUI';
import Dashboard from './Compts/dashboard';
import TeacherList from './Compts/Teacher/teacherList';
import { allTeacher } from './Compts/Teacher/allTeacher';
import NotFound from './Compts/NotFound';
import { EditStudent } from './Compts/Students/editStudent';


function App() {
  const [studentList,setStudentList]=useState(allStudent)
  const [teacherList,setTeacherList]=useState(allTeacher)
  return (

    <div className="App">
       {/* <NavBar/> */}
       {/* <Dashboard/> */}
        <NavBarMUI/>
      
       <Routes>
         <Route exact path= '/' element={<Dashboard />}/>
          
          <Route exact path= '/studentlist' element={<StudentList studentList={studentList} />}/>

          <Route exact path= '/addstudent' element={<AddStudent   setStudentList={setStudentList} studentList={studentList}/>}/>

          <Route exact path= "/edit/:id" element={<EditStudent/>}/>
          
          <Route exact path='/teacherlist' element={<TeacherList teacherList={teacherList}/>}/>

          <Route exact path= '/addteacher' element={}/>



          <Route path='*' element = {<Navigate replace to='/404'/>}/>
          <Route path="/404" element={<NotFound/>}/>
       </Routes>
       
    </div>
  );
}

export default App;
