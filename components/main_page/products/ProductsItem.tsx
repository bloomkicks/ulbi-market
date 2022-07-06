import Product from "../../../models/Product";
import classes from "./ProductsItem.module.scss";

const ProductsItem = (product: Product) => {
  let formattedDescription = product.description.slice(0, 19);
  if (formattedDescription[18] === " ") {
    formattedDescription = formattedDescription.slice(0, 18);
  }
  if (
    formattedDescription.length !== product.description.length
  ) {
    formattedDescription += "...";
  }

  return (
    <section className={classes.item}>
      <div className={classes.image}>
        <p>Image</p>
      </div>
      <div className={classes.main}>
        <p>{formattedDescription}</p>
        <h3>{product.title}</h3>
      </div>
      <div className={classes.rating}>
        <strong>{product.rating ? product.rating : "0"}</strong>

        <img src="/rating-star.svg" alt="stars" />
      </div>
    </section>
  );
};

export default ProductsItem;
