import React from "react";
import styles from "./ProductCards.module.scss";
import {ProductCard} from "./ProductCard";
import {Container} from "../container";
import {IProduct} from "../../core/models/product";

const products = Array(10).fill({} as IProduct);

export const ProductCards: React.FC = () => {
    return (
        <Container className={styles.productCards}>
            {products.map(product => <ProductCard key={product.uuid} product={product} />)}
        </Container>
    )
}