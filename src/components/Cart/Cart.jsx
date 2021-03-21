import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleEmptyCart } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import "react-activity/dist/react-activity.css";

import { Container, Grid, Typography, Button } from "@material-ui/core";

import CartItem from "./CartItem/CartItem";
import useStyle from "./style";

const Cart = () => {
  const classes = useStyle();
  const cart = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in shopping cart, &nbsp;
      <Link to="/" className={classes.link}>
        start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3} gutterBottom>
          {cart.line_items.map((item1) => (
            <Grid item xs={12} sm={3} key={item1.id}>
              <CartItem item1={item1} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">Total: ${cart.total.toFixed(2)}</Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => dispatch(handleEmptyCart())}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
              onClick={() => dispatch(handleEmptyCart())}
              component={Link}
              to="/checkout"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "Loading";

  return (
    <>
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>

        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </>
  );
};

export default Cart;
