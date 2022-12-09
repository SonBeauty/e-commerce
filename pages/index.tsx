import styles from "../styles/Home.module.scss";
import "@fontsource/roboto";
import Shops from "./shops";
import Products from "./products";
import store from "../store";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { getImageURL } from "../utils/ImageUtil";
import Image from "next/image";

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

export default function Home() {
  store;
  const { data } = useQuery(shops);

  return (
    <>
      <Products />
      <div className="container me-3">
        <div className={styles.shop}>
          <div className={styles.left}>
            <div className={styles.filterItem}>
              <h4>Shop</h4>
            </div>
          </div>
          <div className={styles.right}>
            {data?.shops?.data.map((shop: any) => {
              console.log(shop.id);
              return (
                <Link key={shop.id} href={`/shops/${shop.id}`}>
                  <div className="me-3">
                    <Image
                      className={styles.catImg}
                      src={getImageURL(
                        shop.attributes.image.data.attributes.url
                      )}
                      width={100}
                      height={100}
                      alt=""
                    />
                    <div className={styles.title}>
                      <span>{shop.attributes.name}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
