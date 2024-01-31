import React from 'react';
import styles from './Container.module.scss';
import {TheHeader} from "../TheHeader";


export const Container = ({children}) => {
    return (
        <div className={styles.container}>
            <TheHeader/>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    );
}
