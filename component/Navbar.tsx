import { useRef, useState } from "react";
import Link from "next/link";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Search from "@material-ui/icons/Search";
import PersonOutlineOutlined from "@material-ui/icons/personOutlineOutlined";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import styles from "../styles/Navbar.module.scss";
// import Button from "@material-ui/core/Button";
import { Button } from "reactstrap";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };
  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
    window.addEventListener("click", handleClickOutsideDropdown);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <span>USD</span>
            <KeyboardArrowDown />
          </div>
          <div className={styles.dropdown}>
            <div className={styles.dropdownContainer} ref={dropdownRef}>
              <Button onClick={(e) => handleDropDownFocus(open)}>Admin</Button>
              {open && (
                <ul>
                  <Link href={"/create"}>
                    <li>new product</li>
                  </Link>
                  <Link href={"/update"}>
                    <li>Update product</li>
                  </Link>
                </ul>
              )}
            </div>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} href={"/"}>
              Women
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} href="/">
              Men
            </Link>
            <Link href="/card">card</Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} href="/">
              Children
            </Link>
          </div>
        </div>
        <div className={styles.center}>
          <Link className={styles.link} href="/">
            SON STORE
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <Link className={styles.link} href="/">
              Homepage
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} href="/">
              About
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} href="/">
              Contact
            </Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.link} href="/products">
              Stores
            </Link>
          </div>
          <div className={styles.icons}>
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
