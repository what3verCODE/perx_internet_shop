import React from "react";
import styles from "./MainLayout.module.scss";

export const MainLayout: React.FC = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}