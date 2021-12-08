import React from "react";
import {IProduct} from "../../core/models/product";
import {Card, CardBody, CardFooter} from "../card";
import {Button} from "../button/Button";
import {baseURL} from "../../utils/constants";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
    product: IProduct
}

const imgSrc = `${baseURL}/logo/node.png`

export const ProductCard: React.FC<ProductCardProps> = () => {
    return (
        <Card className={styles.productCard}>
            <img className={styles.productImage} src={imgSrc} alt="Node Logo"/>
            <CardBody>
                <div className={styles.productInfo}>
                    <h4>Name</h4>
                    <h4>$1.99</h4>
                </div>
            </CardBody>
            <CardFooter>
                <Button wide>Add to cart</Button>
            </CardFooter>
        </Card>
    )
}