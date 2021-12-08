import React, {HTMLAttributes} from "react";
import clsx from "clsx";
import styles from "./Container.module.scss"

export const Container: React.FC<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({children, className, ref}) => {
    return <div ref={ref} className={clsx(styles.container, className)}>
        {children}
    </div>
}