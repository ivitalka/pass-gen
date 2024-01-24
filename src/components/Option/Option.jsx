import React, {memo} from 'react';
import styles from './Option.module.css';


export const Option = memo(({ id, state, setState, children }) => {
    const handleChange = () => setState(!state)
    return (
        <li className={styles.option}>
            <input type="checkbox" name="" id={id} checked={state} onChange={handleChange} />
            <label htmlFor={id}>{children}</label>
        </li>
    );
})
