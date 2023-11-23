import './App.css';
import AddStudent from './Compts/Students/addStudent';
import StudentList from './Compts/Students/studentList';
import NavBar from './Compts/navBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <StudentList/>
       <AddStudent/>
    </div>
  );
}

export default App;
