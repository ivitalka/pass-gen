import React from 'react';
import styles from './PassIndicator.module.css';


export const PassIndicator = ({value}) => {
    return (
        <span
            className={styles.passIndicator}
            style={value <= 8 ? {backgroundColor: '#e64a4a', width: '20%'} : value <= 16 ? {backgroundColor: '#f1c80b', width: '50%'} : {backgroundColor: '#43A047', width: '100%'}}
        />
    );
}
