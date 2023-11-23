import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="container-fluid">
                    <Link  className="navbar-brand" to='/'>Student-Teacher Profile</Link>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link  className="nav-link" to='/'>Dashboard</Link>
                    <Link  className="nav-link" to='/addstudent'>Add Student</Link>
                    <Link  className="nav-link" to='/addteacher'>Add Teacher</Link>

                </div>
              </div>
             </div>
            </nav>
        </>
    )
}
export default NavBar