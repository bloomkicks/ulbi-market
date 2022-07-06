import Product from "../../../models/Product";
import classes from "./Products.module.scss";
import ProductsItem from "./ProductsItem";

const products: Product[] = [
  new Product(
    "Galaxy H31",
    "A cool budget phone that fits everyone",
    ["Phone"]
  ),
  new Product(
    "Galaxy G-Pro 11",
    "Well designed gaming mobile for gamers",
    ["Phone"]
  ),
  new Product(
    "Hopo 20 S",
    "The best out of all. Gold design, no boundaries",
    ['Phone']
  ),
];

const Products = () => {
  return (
    <article className={classes.products}>
      {products.map((product) => {
        return (
          <ProductsItem
            title={product.title}
            description={product.description}
            categories={product.categories}
            rating={product.rating}
            id={product.id}
            key={product.id}
          />
        );
      })}
    </article>
  );
};

export default Products;
