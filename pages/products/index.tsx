import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { getImageURL } from "../../utils/ImageUtil";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Products.module.scss";
import { useDispatch } from "react-redux";

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
          <h2>Product Categories</h2>
        </div>
      </div>
      <div className={styles.right}>
        {data?.products?.data.map((product: any) => {
          console.log(product.id);
          return (
            <>
              <Link key={product.id} href={`/products/${product.id}`}>
                <Image
                  className={styles.catImg}
                  src={getImageURL(
                    product.attributes.image.data.attributes.url
                  )}
                  width={300}
                  height={200}
                  alt=""
                />
                <div className={styles.title}>
                  <h2>{product.attributes.name}</h2>
                </div>
                <div className={styles.price}>{product.attributes.price}</div>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add to cart
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
