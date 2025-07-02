import {  Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import './styles/Pages.css'
import ContactPage from "./pages/ContactPage"
import AdmissionPage from "./pages/AdmissionPage"
import CoursesPage from "./pages/CoursesPage"
import { useState } from "react"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperPopup"
import ChatbotComponent from "./components/chatbot/ChatbotComponents"




const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
};
  
    return(
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sanjana Vinayak Tanawde"
          studentPhotoUrl="/Images/sanjana.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
      />
</div>
    
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admission" element={<AdmissionPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/chatbot" element={<ChatbotComponent/>}/>
     
        </Routes>
  
    </Router>
    <ChatbotComponent/>
    </div>
    </>


  )

}

export default App;
