import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <div className="new">
            <p className="v1">Vivekanand College Kolhapur....!</p>
            <div className="hate">
               
                    <Link to="/home">Home</Link><br/> 
                    <Link to="/about">About</Link><br/>
                    <Link to="/contact">Contact</Link><br/>
                    <Link to="/courses">Courses</Link><br/>
                  <Link to="/admission" className="neha">Apply Now</Link>
              
                </div>
   
         
        </div>

    )
}

export default Header;