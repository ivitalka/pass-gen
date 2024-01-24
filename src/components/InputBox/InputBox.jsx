import React, {memo} from 'react';
import styles from './InputBox.module.css';


export const InputBox = memo(({ value }) => {
    const copyPassword = (e) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                e.target.innerText = 'check'
                e.target.style.color = "#4285f4"
            })
        setTimeout(() => {
            e.target.innerText = 'copy_all'
            e.target.style.color = ''
        }, 1500)
    }

    return (
        <div className={styles.wrap}>
            <input className={styles.input} type="text" name="" value={value} disabled/>
            <span
                className="material-symbols-rounded copyAll"
                onClick={(e) => copyPassword(e)}
            >
                copy_all
            </span>
        </div>
    );
})
