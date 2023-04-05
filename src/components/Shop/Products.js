import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Yellow Banana",
    description: "Its very yellow",
  },
  {
    id: "p2",
    price: 10,
    title: "Blue Banana",
    description: "Its very blue...?",
  },
  {
    id: "p3",
    price: 8,
    title: "Orange Banana",
    description: "Its very orange",
  },
  {
    id: "p4",
    price: 1,
    title: "Rotten Banana",
    description: "Its very rotten",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.description}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
