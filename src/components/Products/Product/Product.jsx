import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart} from "../../../redux/actions/actions";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./style";

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.reducer)

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="body1" >
            {product.name}
          </Typography>
          <Typography gutterBottom variant="body1">
            ${product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.desp}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => dispatch(handleAddToCart(product.id, 1, cart))}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
