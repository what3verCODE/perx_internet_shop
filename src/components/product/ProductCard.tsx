import React from "react";
import {IProduct} from "../../core/models/product";
import {Card, CardBody, CardFooter} from "../card";
import {Button} from "../button/Button";
import {useAppDispatch} from "../../core/redux";
import {addToCart} from "../../core/redux/reducers/cart";
import {getImagePath} from "../../utils/image";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
    product: IProduct
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const {name, price, image} = product;

    const dispatch = useAppDispatch();
    const handleAddToCart = React.useCallback(() => {
        dispatch(addToCart(product));
    }, [product]);

    return (
        <Card className={styles.productCard}>
            <img className={styles.productImage} src={getImagePath(image)} alt="Node Logo"/>
            <CardBody>
                <div className={styles.productInfo}>
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
            </CardBody>
            <CardFooter>
                <Button wide onClick={handleAddToCart}>Add to cart</Button>
            </CardFooter>
        </Card>
    )
}