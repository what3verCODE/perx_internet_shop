import React from "react";
import styles from "./CardBody.module.scss";

export const CardBody: React.FC = ({children}) => {
    return (
        <div className={styles.cardBody}>
            {children}
        </div>
    )
}