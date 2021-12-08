import React from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";

interface CardProps extends  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({children, className, ...props}) => {
    return (
        <div {...props} className={clsx(className, styles.card)}>
            {children}
        </div>
    )
}