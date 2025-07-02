
        import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div  className="content">
            <Header/>
            <div className="inner-content">
            <div >
                <img src="Images/banner.jpeg"></img>
            <h1>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <a href="/admission" className="btn">Apply Now!</a>
            </div>
            <p><b>Vivekanand College </b>is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2>
            <hr></hr>
            <ul className="viraj">
                <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                <li><b>Experienced Faculty:</b>  Learn from renowned experts and passionate educators.</li>
                <li><b>Modern Facilities: </b> Well-equipped labs, expansive library, and comfortable campus.</li>
                <li><b>Holistic Development:</b>  Focus on co-curricular activities, sports, and community service.</li>
                <li><b>Strong Placements:</b>  Excellent career opportunities with leading companies.</li>
            </ul>
            <h2>Campus Life & Facilities</h2>
            <hr></hr>
            <img  src="Images/student1.jpeg" className="aadi"></img>  
             <img  src="Images/vck.jpeg" className="aadi"></img>
             <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
             <div className="box">
                <p>Ready to explore our courses?</p>
                <a href="/courses" className="btn">Explore Courses</a>
             </div>
             </div>
             <Footer/>
            </div>   
    )
}


export default HomePage;