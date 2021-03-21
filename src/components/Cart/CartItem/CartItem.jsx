import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleUpdateCartQty,
  handleRemoveFromCart,
} from "../../../redux/actions/actions";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

import useStyle from "./style";

const CartItem = ({ item1 }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reducer);

  return (
    <Card className="cart-item">
      <CardMedia
        image={item1.image}
        alt={item1.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item1.name}</Typography>
        <Typography variant="h5">${item1.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            onClick={() =>
              dispatch(
                handleUpdateCartQty(
                  item1.id,
                  item1.quantity - 1,
                  cart
                )
              )
            }
            type="button"
            size="small"
          >
            -
          </Button>
          <Typography>&nbsp;{item1.quantity}&nbsp;</Typography>
          <Button
            onClick={() =>
              dispatch(handleUpdateCartQty(item1.id, item1.quantity + 1, cart))
            }
            type="button"
            size="small"
          >
            +
          </Button>
        </div>
        <Button
          onClick={() => dispatch(handleRemoveFromCart(item1.id, cart))}
          variant="contained"
          type="button"
          color="secondary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
