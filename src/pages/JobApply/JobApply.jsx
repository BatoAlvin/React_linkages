import React, { useState } from "react";
import { ButtonFilled } from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import { message, Alert } from "antd";
import "antd/dist/antd.css";
import { addDocument } from "../../utils/fetch";

const JobApply = () => {
  const [showAlert, setShowAlert] = useState(false);

  const [data, setData] = useState({
    email: "",
    job: "",
    github: "",
    resume: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault();
    const result = await addDocument("job_apply", data).then((result) => {
      setData({
        email: "",
        job: "",
        github: "",
        resume: "",
      });
      console.log("Job added", result.id);
      setShowAlert(true);
    });
    console.log(result);
    console.log(data);
  };

  return (
    <div>
      <form style={{ width: "70%", margin: "3% auto" }} onSubmit={submit}>
        <div style={{ textAlign: "center" }} className="mt-3">
          <Heading title="Job Application" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="email"
            className="form-control"
            name='email'
            value={data.email}
            onChange={handleChange}
            placeholder="Email address"
            aria-describedby="emailHelp"
            required
          />
        </div>

        <div className="mb-3">
          <select
            value={data.job}
            name='job'
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="" disabled selected>
              JobTitle
            </option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="github"
            className="form-control"
            onChange={handleChange}
            value={data.github}
            placeholder="Github Handle"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Resume" className="form-label"></label>
          <input
            type="text"
            name="resume"
            className="form-control"
            onChange={handleChange}
            value={data.resume}
            placeholder="Resume link"
            required
          />
        </div>
       

        <ButtonFilled text="Submit" />
        <div>
          {showAlert && (
            <Alert
              type="success"
              message="Successful"
              description="Job Application Sent"
              style={{ backgroundColor: "#5cb85c" }}
              closable
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default JobApply;
