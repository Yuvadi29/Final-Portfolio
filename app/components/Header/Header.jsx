"use client"

import React, { useState } from 'react'
import styles from './styles.module.scss';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar/Navbar';


const Header = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div onClick={() => setIsActive(!isActive)} className={styles.button}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {isActive && <Navbar />}
            </AnimatePresence>
        </>
    )
}

export default Header