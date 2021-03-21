import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core/";
import useStyles from "./style";

function Checkout() {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <div className={classes.toolbar} />
      <Card className={classes.root} align="center" variant="outlined">
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Thanks For Your Purchased
          </Typography>

          <Typography variant="body1" align="center">
            Hope, you like them and will come next time
          </Typography>
        </CardContent>

        <CardActions style={{ justifyContent: "center" }}>
          <Button component={Link} to="/" variant="contained" color="secondary">
            Go to Home
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Checkout;
