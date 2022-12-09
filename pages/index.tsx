import styles from "../styles/Home.module.scss";
import "@fontsource/roboto";
import Shops from "./shops";
import Products from "./products";
import store from "../store";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  store;
  return (
    <div>
      <Shops />
      <Products />
    </div>
  );
}
