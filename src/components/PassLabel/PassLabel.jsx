import React from 'react';
import styles from './PassLabel.module.scss';


export const PassLabel = ({children}) => {
    return (
        <label className={styles.passLabel}>{children}</label>
    );
}
