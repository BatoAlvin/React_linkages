/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOne } from "../../utils/fetch";

function Profileid() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchdata = async () => {
    const job = await fetchOne("prof", id);
    setData((PrevData) => ({ ...PrevData, ...job }));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {data && (
        <>
          <h1>{data.firstName}</h1>
          <p>{data.lastName}</p>
          <p>{data.job}</p>
        </>
      )}
    </div>
  );
}

export default Profileid;
