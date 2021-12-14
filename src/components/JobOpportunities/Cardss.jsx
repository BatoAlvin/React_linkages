import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import styles from "../../styles/Opportunity.module.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#DEE6EE",
    minHeight: 330,
    // width: "100%",
    cursor: "pointer",
  },
  btn: {
    backgroundColor: "#0072a1",
    color: "white",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#0072a1",
    },
  },
});

function OppCardss({ firstName, lastName, job, id }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {firstName}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {lastName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {job}
        </Typography>

        <Link to={`/updates/${id}`}>
        <p className={styles.read}>Update.....</p>
        </Link>
      </CardContent>
    </Card>
  );
}

export default OppCardss;
