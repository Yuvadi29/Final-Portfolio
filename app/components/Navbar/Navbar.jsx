import React, { useState } from 'react'
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from './Link/Link';
import { menuSlide } from '../Header/animation';

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/work",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]

const Navbar = () => {

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className={styles.body}>
                <div className={styles.nav} onMouseLeave={() => { setSelectedIndicator(pathname) }}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return <Link
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator === data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            >
                            </Link>
                        })
                    }
                </div>
                <div className={styles.footer}>
                    <a href="">Instagram</a>
                    <a href="">LinkedIn</a>
                    <a href="">Youtube</a>
                    <a href="">Github</a>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar