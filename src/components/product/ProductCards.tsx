import React from "react";
import styles from "./ProductCards.module.scss";
import {ProductCard} from "./ProductCard";
import {Container} from "../container";
import {useAppDispatch, useAppSelector} from "../../core/redux";
import {fetchProducts, selectProductsData} from "../../core/redux/reducers/products";

export const ProductCards: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProductsData);

    React.useEffect(() => {
        dispatch(fetchProducts([]));
    }, [])

    return (
        <Container className={styles.productCards}>
            {products.map(product => <ProductCard key={product.uuid} product={product} />)}
        </Container>
    )
}