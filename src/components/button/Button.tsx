import React, {HTMLAttributes} from "react";
import styles from "./Button.module.scss";
import clsx, {ClassValue} from "clsx";

interface ButtonProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    wide?: boolean;
    danger?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  className,
                                                  wide,
                                                  danger,
                                                  ...props
                                              }) => {

    const classNames = React.useMemo(() => {
        const classValues: ClassValue[] = [className, styles.button]
        wide && classValues.push(styles.buttonWide)
        danger && classValues.push(styles.buttonDanger)
        return classValues;
    }, [wide, danger, className])

    return <button {...props} className={clsx(classNames)}>{children}</button>
}