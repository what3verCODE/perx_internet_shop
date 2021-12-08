import styles from "./CartButton.module.scss";
import {useAppSelector} from "../../core/redux/utils";
import {selectCartItemsCount} from "../../core/redux/reducers/cart";

export const CartButton = () => {
    const itemsCount = useAppSelector(selectCartItemsCount)

    return (
        <button className={styles.cartButton}>
            Cart
            <span className={styles.cartSplitter} />
            {itemsCount}
        </button>
    )
}