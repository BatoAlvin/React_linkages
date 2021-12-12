import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Jobs from "./pages/Jobs/Jobs";
import Error from "./pages/404/Error";
import Nav from "./components/Nav/Navbar";

import Profileid from './pages/Profileid/Profileid'
import Allprofiles from './pages/AllProfiles/Allprofiles'
import Update from './pages/Profile/Update'
import Proof from './pages/Profile/Proof'
import ViewProfile from "./pages/Profile/Profile";
import CreateProfile from "./pages/CreateProfile/CreateProfile"
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import './App.css';
import Jobid from "./pages/Jobid/Jobid";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/viewprofile/:id" element={<ViewProfile/>} />
        <Route path="*" element={ <Error/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />
        <Route path="/profile" element={<Profile/>} />
         <Route path="/jobs/:id" element={<Jobid/>}/>
         <Route path="/proof" element={<Proof/>}/>
         <Route path="/profile/:id" element={<Profileid/>}/>
         <Route path="/allprofiles" element={<Allprofiles/>}/>
         {/* <Route path="/update/:id" element={<Update/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
