import './App.css';
import AddStudent from './Compts/Students/addStudent';
import StudentList from './Compts/Students/studentList';
import NavBar from './Compts/navBar';
import { useState } from 'react';
import { allStudent } from './Compts/Students/allStudents';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBarMUI from './Compts/NavBarMUI';


function App() {
  const [studentList,setStudentList]=useState(allStudent)

  return (

    <div className="App">
       <NavBar/>
        <NavBarMUI/>
      
       <Routes>

          <Route exact path= '/' element={<StudentList studentList={studentList}/>}/>

          <Route exact path= '/addstudent' element={<AddStudent setStudentList={setStudentList}/>}/>

       </Routes>
    </div>
  );
}

export default App;
