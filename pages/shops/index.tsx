import { gql, useQuery } from "@apollo/client";
import React from "react";
import Image from "next/image";
import { getImageURL } from "../../utils/ImageUtil";
import Link from "next/link";
import styles from "../../styles/Shops.module.scss";

const shops = gql`
  query getshop {
    shops {
      data {
        id
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

const Shops = () => {
  const { data } = useQuery(shops);
  console.log(data);
  return (
    <div className={styles.shop}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Shop Categories</h2>
        </div>
      </div>
      <div className={styles.right}>
        {data?.shops?.data.map((shop: any) => {
          console.log(shop.id);
          return (
            <Link key={shop.id} href={`/shops/${shop.id}`}>
              <div>
                <Image
                  className={styles.catImg}
                  src={getImageURL(shop.attributes.image.data.attributes.url)}
                  width={2000}
                  height={2000}
                  alt=""
                />
                <div className={styles.title}>
                  <h2>{shop.attributes.name}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shops;
