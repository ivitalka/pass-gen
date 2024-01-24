import React, {memo} from 'react';
import styles from './PassLength.module.css';


export const PassLength = memo(({length, setLength}) => {
    console.log('pass')
    const lengthHandler = (e) => setLength(e.target.value)

    return (
        <div className={styles.passLength}>
            <div className={styles.details}>
                <label htmlFor="">Password Length</label>
                <span>{length}</span>
            </div>
            <input
                className={styles.lengthInput}
                type="range"
                id="" min="1"
                max="30"
                value={length}
                step="1"
                onChange={(e) => lengthHandler(e)}
            />
        </div>
    );
})
