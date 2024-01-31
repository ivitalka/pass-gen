import React from 'react';
import styles from './OptionsList.module.scss';


export const OptionsList = ({children}) => {
    return (
        <ul className={styles.optionsList}>
            {children}
        </ul>
    );
}
