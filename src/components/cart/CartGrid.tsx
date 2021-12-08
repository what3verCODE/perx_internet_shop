import {useAppDispatch, useAppSelector} from "../../core/redux/utils";
import {removeAllFromCart, selectCartItems, selectCartTotalPrice} from "../../core/redux/reducers/cart";
import {Container} from "../container";
import {CartGridItem} from "./CartGridItem";
import styles from "./CartGrid.module.scss";
import {Button} from "../button/Button";

export const CartGrid = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectCartItems);
    const totalPrice = useAppSelector(selectCartTotalPrice);

    return (
        <Container>
            {
                !items.length ?
                    <h4 className={styles.cartEmpty}>Cart is empty...</h4> :
                    <table className={styles.table}>
                        <colgroup>
                            <col span={1} style={{width: "60%"}}/>
                            <col span={1} style={{width: "15%"}}/>
                            <col span={1} style={{width: "10%"}}/>
                            <col span={1} style={{width: "15%"}}/>
                        </colgroup>

                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th className={styles.rightAlignedCol}>
                                <Button danger onClick={() => dispatch(removeAllFromCart())}>Remove All</Button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(item => <CartGridItem key={item.product.uuid} item={item}/>)}
                        <tr>
                            <td><b>Total:</b></td>
                            <td>${totalPrice}</td>
                            <td colSpan={1} className={styles.emptyCol}/>
                        </tr>
                        </tbody>
                    </table>
            }
        </Container>
    )
}