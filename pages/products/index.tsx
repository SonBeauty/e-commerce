import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { getImageURL } from "../../utils/ImageUtil";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Products.module.scss";
import { useDispatch } from "react-redux";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
const products = gql`
  query getProduct {
    products {
      data {
        id
        attributes {
          name
          price
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Products = () => {
  const { data } = useQuery(products);
  console.log(data);

  const dispatch = useDispatch();
  const handleAddToCart = (product: any) => {
    dispatch({ type: "addToCart", product });
    console.log(product);
  };

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h4>
            Product <br /> Categories
          </h4>
        </div>
      </div>
      <div className={styles.right}>
        {data?.products?.data.map((product: any) => {
          console.log(product.id);
          return (
            <>
              <div className={styles.render}>
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Image
                    className={styles.catImg}
                    src={getImageURL(
                      product.attributes.image.data.attributes.url
                    )}
                    width={200}
                    height={200}
                    alt=""
                  />
                  <div className={styles.title}>
                    <h2>{product.attributes.name}</h2>
                  </div>
                  <div className={styles.price}>{product.attributes.price}</div>
                </Link>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  <AddShoppingCart /> Add to cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
