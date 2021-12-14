import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "@material-ui/core";
//import OppCards from "../../components/JobOpportunities/Cardss";
// import { useStateValue } from "../../ContextAPI/StateProvider";
import { addDocument, fetchAll } from "../../utils/fetch";
import { useParams } from "react-router-dom";

const SignUps = () => {

    const { id } = useParams();
    // const [{ response }, dispatch] = useStateValue();
    const navigate = useNavigate();

    //const [todos, setTodos] = useState([]);
    // const fetchdata = async () => {
    //   const jobs = await fetchAll("prof");
    //   setTodos(jobs);
    // };
  
    // useEffect(() => {
    //   fetchdata();
    // }, []);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        job: "",
    });

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const submit = async (e) => {
        e.preventDefault()
        const result = await addDocument("prof", data)
        //const result = await updateDocument("prof", data, "Oc3s5uSmaV4r1HN2Gnax")
        //console.log(result)
        console.log(data)
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center ">
                <div className=" d-flex justify-content-center align-items-center flex-column shadow-lg p-3 mb-5 bg-body rounded p-5 border m-5">
                    <img src="/Images/outboxedu logo.png" alt="logo" height="50" width="50" />
                    <span style={{ color: "#04739B" }} className="h5 ">
                        Create Profiles
        </span>
                    <form onSubmit={submit}>
                        <div className="mb-2 d-flex flex-column">
                            <label className="form-label text-start  w-100">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={data.firstName}
                                onChange={handleChange}
                                className="form-control"

                            />
                        </div>
                        <div className=" d-flex flex-column mb-2">
                            <label className="form-label text-start  w-100">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                value={data.lastName}
                                className="form-control"

                            />
                        </div>

                        <div className=" d-flex flex-column mb-2">
                            <label className="form-label text-start  w-100">JobTitle</label>
                            <input
                                type="text"
                                name="job"
                                value={data.job}
                                onChange={handleChange}
                                className="form-control"

                            />
                       {/* {todos.map((info) => (
                <Grid item xs={12} sm={6} md={4} key={info.id}>
                  <OppCards
                    // job={info.firstName}
                    // company={info.lastName}
                    // location={info.job}
                    id={info.id}
                  />
            
                </Grid>
              ))} */}
                        </div>
                        <button type='submit'>Submit</button>
                        {/* <Link to='/update/oFazJxgpQVQPJQKmdDmS'>
                        <button>Update</button></Link> */}
                        
                        {/* <Link to={`/updates/${id}`}>
        <p>Update.....</p>
        </Link> */}
                    </form>


                </div>
            </div>
        </>
    )
}

export default SignUps
