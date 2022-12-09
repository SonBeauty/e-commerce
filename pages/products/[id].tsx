import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getImageURL } from "../../utils/ImageUtil";
import Image from "next/image";
import styles from "../../styles/Product.module.scss";

const product = gql`
  query getProduct($id: ID) {
    product(id: $id) {
      data {
        attributes {
          name
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

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery(product, { variables: { id } });
  const [quantity, setQuantity] = useState(0);

  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.mainImg}>
          <Image
            src={getImageURL(
              data?.product.data?.attributes.image.data.attributes.url
            )}
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1>{data?.product?.data?.attributes.name}</h1>
        <span>{data?.product?.data?.attributes.price}</span>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prev) => {
                return prev === 1 ? 1 : prev - 1;
              })
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
