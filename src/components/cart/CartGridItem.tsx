import React from "react";
import {Button} from "../button/Button";
import {useAppDispatch} from "../../core/redux";
import {CartItem, removeFromCart} from "../../core/redux/reducers/cart";
import styles from "./CartGrid.module.scss";

interface CartGridItemProps {
    item: CartItem;
}

export const CartGridItem: React.FC<CartGridItemProps> = ({item}) => {
    const dispatch = useAppDispatch();

    const handleRemoveItem = React.useCallback(() => {
        dispatch(removeFromCart(item.product.uuid));
    }, [])

    const {product, count} = item;

    return (
        <tr className={styles.tableRow}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{count}</td>
            <td className={styles.rightAlignedCol}>
                <Button danger onClick={handleRemoveItem}>
                    Remove
                </Button>
            </td>
        </tr>
    )
}