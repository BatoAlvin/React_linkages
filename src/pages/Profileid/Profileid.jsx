/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOne } from "../../utils/fetch";
import { Link } from "react-router-dom";

function Profileid() {
  const { id } = useParams();
  const [data, setData] = useState({});


  const fetchdata = async () => {
    const job = await fetchOne("profiles", id);
    setData((PrevData) => ({ ...PrevData, ...job }));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      {data && (
      <div>
          <h1>{data.userName}</h1>
          <p>{data.title}</p>
          <p>{data.phoneNumber}</p>
         
               <Link to={`/updates/${id}`}>
        <button>Update</button>
        </Link>
          </div>
      )}
    </>
  );
}

export default Profileid;
