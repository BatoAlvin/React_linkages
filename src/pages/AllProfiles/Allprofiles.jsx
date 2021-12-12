/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import OppCards from "../../components/JobOpportunities/Cards";
import styles from "../../styles/Opportunity.module.css";
import { fetchAll } from "../../utils/fetch";
import { Link, useNavigate } from 'react-router-dom'

function Allprofiles() {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
      fontWeightRegular: 500,
      body2: {
        fontWeight: 600,
        fontSize: "0.9rem",
        "@media (max-width:600px)": {
          fontSize: "2.1rem",
        },
      },
      h5: {
        fontWeight: 620,
        fontSize: 19,
        color: "#41ad48",
        "@media (max-width:600px)": {
          fontSize: "2.2rem",
        },
      },
      h6: {
        fontWeight: 620,
        fontSize: 17,
        "@media (max-width:600px)": {
          fontSize: "2.2rem",
        },
      },
    },
  });

  const [todos, setTodos] = useState([]);
  

  const fetchdata = async () => {
    const jobs = await fetchAll("prof");
    setTodos(jobs);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Grid
          container
          spacing={0}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div container spacing={1} className={styles.search}>
           
          </div>
          <Grid
            container
            spacing={3}
            alignItems="stretch"
            justifyContent="space-between"
          >
            {todos.map((info) => (
                <Grid item xs={12} sm={6} md={4} key={info.id}>
                  <OppCards
                    job={info.firstName}
                    company={info.lastName}
                    location={info.job}
                    id={info.id}
                  />
            
                </Grid>
              ))}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default Allprofiles;
