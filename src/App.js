import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Jobs from "./pages/Jobs/Jobs";
import Error from "./pages/404/Error";
import Nav from "./components/Nav/Navbar";
import { Auth0Provider } from '@auth0/auth0-react';

import JobApply from './pages/JobApply/JobApply'
import Profileid from './pages/Profileid/Profileid'
import Allprofiles from './pages/AllProfiles/Allprofiles'
import Proof from './pages/Profile/Proof'
import ViewProfile from "./pages/Profile/Profile";
import CreateProfile from "./pages/CreateProfile/CreateProfile"
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import './App.css';
import Jobid from "./pages/Jobid/Jobid";
import Updates from "./pages/Profile/Updates";

function App() {
  return (
    <div className="App">
      <Auth0Provider>

      <Nav/>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Jobs/>} />
        <Route path="/viewprofile/:id" element={<ViewProfile/>} />
        <Route path="*" element={ <Error/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />
        <Route path="/profile" element={<Profile/>} />
         <Route path="/jobs/:id" element={<Jobid/>}/>
         <Route path="/proof" element={<Proof/>}/>
          <Route path="/jobapplication" element={<JobApply/>}/>
         <Route path="/profile/:id" element={<Profileid/>}/>
         <Route path="/updates/:id" element={<Updates/>}/>
         <Route path="/allprofiles" element={<Allprofiles/>}/>
       
      </Routes>
      <Footer/>
      </Auth0Provider>

    </div>
  );
}

export default App;
