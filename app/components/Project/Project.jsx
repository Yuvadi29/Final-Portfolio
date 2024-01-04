import React from 'react';
import styles from './styles.module.css';

const Project = ({ index, name, setModal }) => {
    return (
        <div
            onMouseEnter={() => { setModal({ active: true, index: index }) }}
            onMouseLeave={() => { setModal({ active: false, index: index }) }}
            className={styles.project}>
            <h2>{name}</h2>
            <p>Coding and Passion</p>
        </div>
    )
}

export default Project