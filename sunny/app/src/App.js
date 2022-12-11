import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Icard from './Components/Icard';
import NavBar from './Components/NavBar';
import Nav from './Components/Nav';
import Fashion from './Components/Fashion';
import Laptop from './Components/Laptop';
import Mobile from './Components/Mobile';
import About from './Components/About';
import SignUp from './Components/SignUp';
import Feedback from './Components/Feedback';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const current = new Date(); 
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`; 
  let year=current.getFullYear() 
  const [feedback,setFeedback]=useState([]) 
const ele=()=> 
{ 
  {feedback.map((e)=>{ 
    return ( 
    <Feedback name={e.name} comment={e.comment}/> 
  );})} 
} 
   
  useEffect(()=>{ 
 const getFeedback=async () =>{ 
const feedbackFromServer=await fetchFeedback() 
setFeedback(feedbackFromServer)  
} 
  getFeedback() 
},[]) 
const fetchFeedback=async()=>{ 
  const res=await fetch('http://localhost:5000/feedback') 
  const data=await res.json() 
  return data 
} 
 
  return (
    <div className='App'>
    <Router>
      <NavBar />
      <Nav></Nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Icard" element={<Icard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Mobile" element={<Mobile />} />
          <Route path="/Laptop" element={<Laptop />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path='Feedback' element={feedback.map((e)=>{ 
    return ( 
    <Feedback name={e.name} comment={e.comment}/> 
  );})}/> 
        </Routes>
      </div>
    </Router>
      </div>
  );
}
export default App;