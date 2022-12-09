import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getImageURL } from "../../utils/ImageUtil";
import styles from "../../styles/Shop.module.scss";

const shop = gql`
  query getshop($id: ID) {
    shop(id: $id) {
      data {
        id
        attributes {
          name
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
interface product {
  attributes: attributes;
  id: number;
}

interface attributes {
  name: string;
  image: Image;
  url: string;
  price: number;
}

interface Image {
  data: Data;
}

interface Data {
  attributes: attributes;
}

const Shop = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data } = useQuery(shop, { variables: { id } });
  console.log(data);

  return (
    <>
      <div className={styles.shop}>
        <div className={styles.left}>
          <div className={styles.mainImg}>
            <Image
              src={getImageURL(
                data?.shop.data.attributes.image.data.attributes.url
              )}
              width={800}
              height={800}
              alt=""
            />

            <div className={styles.title}>
              {data?.shop.data.attributes.name}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.left}>
          <div className={styles.filterItem}>
            <h4>
              Product <br /> Categories
            </h4>
          </div>
        </div>
        <div className={styles.right}>
          {data?.shop.data.attributes.products.data.map((product: product) => {
            return (
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
                <div
                  className={styles.price}
                >{`$ ${product.attributes.price}`}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
