import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useStateValue } from "../../ContextAPI/StateProvider";
import { updateDocument } from "../../utils/fetch";

import { useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();

    // const [{ response }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
    });

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const submit = async (e) => {
        e.preventDefault()
        console.log(id)
        const result = await updateDocument("prof", data, "oFazJxgpQVQPJQKmdDmS")
        console.log(result)
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center ">
                <div className=" d-flex justify-content-center align-items-center flex-column shadow-lg p-3 mb-5 bg-body rounded p-5 border m-5">
                    <img src="/Images/outboxedu logo.png" alt="logo" height="50" width="50" />
                    <span style={{ color: "#04739B" }} className="h5 ">
                        Profiles Update
        </span>
                    <form onSubmit={submit}>
                        <div className="mb-2 d-flex flex-column">
                            <label className="form-label text-start  w-100">First Name</label>
                            <input
                                type="text"
                                name="firstName"
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
                                className="form-control"

                            />
                        </div>

                        <button type='submit'>Update</button>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Update
