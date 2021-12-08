import React from "react";
import styles from "./CardFooter.module.scss";

export const CardFooter: React.FC = ({children}) => {
    return (
        <div className={styles.cardFooter}>
            {children}
        </div>
    )
}