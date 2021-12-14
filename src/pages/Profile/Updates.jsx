import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateDocument,fetchOne } from "../../utils/fetch";

export default function Updates({info}) {
    const { id } = useParams();
    
    const [data, setData] = useState(info);
 
  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(id)
    const result = await updateDocument("prof", data, id)
    console.log(result)
}

 const fetchdata = async () => {
    const job = await fetchOne("prof", id);
    setData((PrevData) => ({ ...PrevData, ...job }));
  };

  useEffect(() => {
    fetchdata();
  }, []);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const profileRef = doc(db, "prof", info.id);
//     await updateDoc(profileRef, data);
//     console.log("updated");
//   };

  return (
    <>    
              <h3>PROFILE UPDATE</h3>
              <form onSubmit={handleSubmit}>
              <div className="mb-2 d-flex flex-column">
                            <label className="form-label text-start  w-100">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                  onChange={handleChange}
                                  //value={data.firstName}
                                className="form-control"
                                
                            />
                        </div>
                        <div className=" d-flex flex-column mb-2">
                            <label className="form-label text-start  w-100">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                //value={data.lastName}
                                className="form-control"
                            
                            />
                        </div>

                        <div className=" d-flex flex-column mb-2">
                            <label className="form-label text-start  w-100">JobTitle</label>
                            <input
                                type="text"
                                name="job"
                                onChange={handleChange}
                                //value={data.job}
                                className="form-control"
                                
                            />
                        </div>
                        <button
                        type="submit"
                      >
                        Update
                      </button>
                      {" "}
                        </form>
    </>
  )
}
