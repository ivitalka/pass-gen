import React from 'react';
import styles from './GenerateButton.module.scss';


export const GenerateButton = ({onClick}) => {
    return (
        <button className={styles.generateButton} onClick={() => onClick()}>Generate Password</button>

    );
}
