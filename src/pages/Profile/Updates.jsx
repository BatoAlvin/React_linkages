import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateDocument,fetchOne } from "../../utils/fetch";
import { message, Alert } from "antd";
import "antd/dist/antd.css";


export default function Updates({info}) {
    const { id } = useParams();
    
    const [data, setData] = useState(info);
    const [showAlert,setShowAlert] = useState(false);
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(id)
    const result = await updateDocument("profiles", data, id)
    .then((result)=>{
      setShowAlert(true)
    })
    console.log(result)
}

 const fetchdata = async () => {
    const job = await fetchOne("profiles", id);
    setData((PrevData) => ({ ...PrevData, ...job }));
  };

  useEffect(() => {
    fetchdata();
  }, []);


  return (
    <>    
              <h3>PROFILE UPDATE</h3>
              <form onSubmit={handleSubmit}>
              <div className="mb-2 d-flex flex-column">
                            <label className="form-label text-start  w-100">UserName</label>
                            <input
                                type="text"
                                name="userName"
                                  onChange={handleChange}
                                  value={data.userName}
                                className="form-control"
                                
                            />
                        </div>
                       
          <label className="form-label w-100">Title</label>
          <select name="title" value={data.title} onChange={handleChange} className="form-select form-select-sm " aria-label=".form-select-sm example">
  <option value="" disabled selected>
              JobTitle
            </option>
  <option value="None">None</option>
  <option value="Backend Developer">Backend Developer</option>
  <option value="Full Stack Developer">Full Stack Developer</option>
  <option value="Dev Ops">Dev Ops</option>
</select>

                        <div className=" d-flex flex-column mb-2">
                            <label className="form-label text-start  w-100">PhoneNumber</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                onChange={handleChange}
                                value={data.phoneNumber}
                                className="form-control"
                                
                            />
                        </div>
                        <button
                        type="submit"
                      >
                        Update
                      </button>
                      {" "}
                      <div>
        {showAlert && (
          <Alert
            type="success"
            message="Successful"
            description="Profile Update Successful"
            style={{ backgroundColor: "#5cb85c" }}
            closable
          />
        )}
      </div>
                        </form>
    </>
  )
}
