import React from "react";
import {CartButton} from "../cart/CartButton";
import styles from "./Navbar.module.scss";
import {Container} from "../container";
import {Link} from "react-router-dom"

export const Navbar = () => {

    return <header>
        <Container className={styles.navbar}>
            <Link to="/">
                <h1 className={styles.navbarLogo}>CRA Internet Shop</h1>
            </Link>
            <Link to="/cart">
                <CartButton/>
            </Link>
        </Container>
    </header>
}