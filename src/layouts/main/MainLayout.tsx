import React from "react";
import {Navbar} from "../../components/navbar";
import styles from "./MainLayout.module.scss";

export const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}